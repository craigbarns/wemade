#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const AUTOMATION_DIR = path.join(ROOT, "automation");
const SEED_FILE = path.join(AUTOMATION_DIR, "prospects-v1.csv");
const MASTER_FILE = path.join(AUTOMATION_DIR, "prospects-master.csv");
const REPORT_DIR = path.join(AUTOMATION_DIR, "outbound-reports");
const DAILY_LIMIT = Number.parseInt(process.env.OUTREACH_DAILY_LIMIT || "20", 10);
const FROM_EMAIL = process.env.OUTREACH_FROM_EMAIL || "";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const DRY_RUN = (process.env.OUTREACH_DRY_RUN || "true").toLowerCase() !== "false";

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function parseCsvLine(line) {
  const out = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      out.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  out.push(current);
  return out;
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const headers = parseCsvLine(lines[0]).map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const cells = parseCsvLine(line);
    const row = {};
    headers.forEach((h, idx) => {
      row[h] = (cells[idx] || "").trim();
    });
    return row;
  });
}

function escCsv(value) {
  const raw = String(value ?? "");
  if (raw.includes(",") || raw.includes('"') || raw.includes("\n")) {
    return `"${raw.replaceAll('"', '""')}"`;
  }
  return raw;
}

function toCsv(rows, headers) {
  const allHeaders = headers || Object.keys(rows[0] || {});
  const head = allHeaders.join(",");
  const body = rows.map((r) => allHeaders.map((h) => escCsv(r[h] || "")).join(",")).join("\n");
  return body ? `${head}\n${body}\n` : `${head}\n`;
}

function normalizeId(company, website) {
  const c = (company || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const w = (website || "").toLowerCase().replace(/^https?:\/\//, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `${c}-${w}`.slice(0, 80);
}

function daysSince(isoDate) {
  if (!isoDate) return 9999;
  const now = new Date();
  const past = new Date(isoDate);
  return Math.floor((now.getTime() - past.getTime()) / (1000 * 60 * 60 * 24));
}

function pickTemplate(lead, stage) {
  const firstName = (lead.contact_name || "").split(" ")[0] || "Bonjour";
  const subject =
    stage === "j3"
      ? `Relance rapide - ${lead.company} x WEMADE`
      : `${lead.company}: sourcing Chine plus fiable et rentable`;

  const body =
    stage === "j3"
      ? [
          `${firstName},`,
          "",
          `Je me permets une relance courte concernant ${lead.company}.`,
          `WEMADE aide les équipes achats à sécuriser sourcing, qualité et délais en Chine (Shanghai/Hangzhou).`,
          "",
          `Si utile, je peux vous partager un mini plan d'action en 20 minutes adapté à votre contexte.`,
          "",
          "Si vous ne souhaitez plus recevoir ce type de message, répondez simplement STOP.",
        ].join("\n")
      : [
          `${firstName},`,
          "",
          `Je vous contacte car ${lead.company} semble aligné avec ce que nous faisons chez WEMADE.`,
          `Nous aidons les équipes à fiabiliser leurs achats en Chine: sélection usine, négociation, contrôle qualité et exécution locale.`,
          "",
          `Angle possible pour vous: ${lead.offer_angle || "optimisation coût/qualité/délais"}.`,
          "",
          "Souhaitez-vous un échange de 20 minutes cette semaine ?",
          "",
          "Si vous ne souhaitez plus recevoir ce type de message, répondez simplement STOP.",
        ].join("\n");

  return { subject, body };
}

async function sendWithResend({ to, subject, text }) {
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [to],
      subject,
      text,
    }),
  });
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    return { ok: false, error: `${resp.status} ${JSON.stringify(data)}` };
  }
  return { ok: true, id: data.id || "" };
}

async function run() {
  ensureDir(AUTOMATION_DIR);
  ensureDir(REPORT_DIR);

  if (!fs.existsSync(SEED_FILE)) {
    throw new Error(`Fichier seed absent: ${SEED_FILE}`);
  }

  const nowIso = new Date().toISOString();
  const seedRows = parseCsv(fs.readFileSync(SEED_FILE, "utf8"));
  const masterRows = fs.existsSync(MASTER_FILE) ? parseCsv(fs.readFileSync(MASTER_FILE, "utf8")) : [];

  const byId = new Map(masterRows.map((row) => [row.lead_id, row]));
  for (const seed of seedRows) {
    const leadId = normalizeId(seed.company, seed.website);
    const existing = byId.get(leadId);
    const base = {
      lead_id: leadId,
      company: seed.company || "",
      website: seed.website || "",
      segment: seed.segment || "",
      target_persona: seed.target_persona || "",
      offer_angle: seed.offer_angle || "",
      priority: seed.priority || "moyenne",
      status: (existing && existing.status) || seed.status || "to_contact",
      contact_name: (existing && existing.contact_name) || "",
      contact_email: (existing && existing.contact_email) || "",
      source: (existing && existing.source) || "seed",
      added_at: (existing && existing.added_at) || nowIso,
      last_updated_at: nowIso,
      last_contacted_at: (existing && existing.last_contacted_at) || "",
      last_message_id: (existing && existing.last_message_id) || "",
      last_error: (existing && existing.last_error) || "",
      notes: (existing && existing.notes) || seed.next_action || "",
    };
    byId.set(leadId, { ...(existing || {}), ...base });
  }

  const allLeads = [...byId.values()].sort((a, b) => (a.priority < b.priority ? 1 : -1));
  const candidates = allLeads
    .filter((l) => l.contact_email)
    .filter((l) => ["to_contact", "j0_sent"].includes(l.status))
    .filter((l) => (l.status === "j0_sent" ? daysSince(l.last_contacted_at) >= 3 : true))
    .slice(0, DAILY_LIMIT);

  const sent = [];
  const skippedMissingEmail = allLeads.filter((l) => !l.contact_email).length;
  for (const lead of candidates) {
    const stage = lead.status === "j0_sent" ? "j3" : "j0";
    const { subject, body } = pickTemplate(lead, stage);

    if (DRY_RUN || !RESEND_API_KEY || !FROM_EMAIL) {
      lead.status = stage === "j0" ? "j0_sent" : "j3_sent";
      lead.last_contacted_at = nowIso;
      lead.last_message_id = "dry-run";
      lead.last_error = "";
      sent.push({ lead_id: lead.lead_id, company: lead.company, stage, status: "dry-run" });
      continue;
    }

    const res = await sendWithResend({ to: lead.contact_email, subject, text: body });
    if (res.ok) {
      lead.status = stage === "j0" ? "j0_sent" : "j3_sent";
      lead.last_contacted_at = nowIso;
      lead.last_message_id = res.id;
      lead.last_error = "";
      sent.push({ lead_id: lead.lead_id, company: lead.company, stage, status: "sent", id: res.id });
    } else {
      lead.last_error = res.error;
      sent.push({ lead_id: lead.lead_id, company: lead.company, stage, status: "failed", error: res.error });
    }
    lead.last_updated_at = nowIso;
  }

  const headers = [
    "lead_id",
    "company",
    "website",
    "segment",
    "target_persona",
    "offer_angle",
    "priority",
    "status",
    "contact_name",
    "contact_email",
    "source",
    "added_at",
    "last_updated_at",
    "last_contacted_at",
    "last_message_id",
    "last_error",
    "notes",
  ];
  fs.writeFileSync(MASTER_FILE, toCsv(allLeads, headers), "utf8");

  const reportPath = path.join(REPORT_DIR, `outbound-${nowIso.slice(0, 10)}.md`);
  const lines = [];
  lines.push(`# Outbound Daily Report - ${nowIso}`);
  lines.push("");
  lines.push(`- Dry run: ${DRY_RUN ? "yes" : "no"}`);
  lines.push(`- Daily limit: ${DAILY_LIMIT}`);
  lines.push(`- Leads in master: ${allLeads.length}`);
  lines.push(`- Leads without email: ${skippedMissingEmail}`);
  lines.push(`- Processed today: ${candidates.length}`);
  lines.push(`- Sent/updated: ${sent.length}`);
  lines.push("");
  lines.push("## Today actions");
  lines.push("");
  if (!sent.length) {
    lines.push("- Aucun envoi. Renseigner `contact_email` dans `automation/prospects-master.csv`.");
  } else {
    for (const row of sent) {
      lines.push(`- ${row.company} | ${row.stage} | ${row.status}${row.error ? ` | ${row.error}` : ""}`);
    }
  }
  lines.push("");
  fs.writeFileSync(reportPath, `${lines.join("\n")}\n`, "utf8");
  process.stdout.write(lines.join("\n"));
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
