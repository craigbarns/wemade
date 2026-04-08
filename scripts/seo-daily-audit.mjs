#!/usr/bin/env node
import { google } from "googleapis";

/**
 * SEO Daily Agent Audit
 * - Lit le sitemap
 * - Vérifie l'état HTTP des pages
 * - Contrôle title/description/h1/canonical/noindex
 * - Génère un rapport Markdown exploitable
 */

const SITE_URL = process.env.SITE_URL || "https://wemade.fr";
const SITEMAP_URL = process.env.SITEMAP_URL || `${SITE_URL}/sitemap.xml`;
const MAX_URLS = Number.parseInt(process.env.MAX_URLS || "100", 10);
const GSC_SITE_URL = process.env.GSC_SITE_URL || "sc-domain:wemade.fr";

function parseServiceAccountFromEnv() {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function getGscTopQueries({ siteUrl, serviceAccount, limit = 15 }) {
  if (!serviceAccount) return { rows: [], error: "Secret GSC_SERVICE_ACCOUNT_JSON absent ou invalide." };
  try {
    const auth = new google.auth.JWT({
      email: serviceAccount.client_email,
      key: serviceAccount.private_key,
      scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
    });
    const webmasters = google.webmasters({ version: "v3", auth });
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 28);
    const toIso = (d) => d.toISOString().slice(0, 10);

    const resp = await webmasters.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: toIso(start),
        endDate: toIso(end),
        dimensions: ["query"],
        rowLimit: limit,
      },
    });

    return { rows: resp.data.rows || [], error: null };
  } catch (error) {
    return { rows: [], error: error.message };
  }
}

function extractLocsFromSitemap(xml) {
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/gim)];
  return matches.map((m) => m[1].trim()).filter(Boolean);
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractMetaContent(html, nameOrProperty, value) {
  const byName = new RegExp(
    `<meta[^>]*${nameOrProperty}=["']${value}["'][^>]*content=["']([^"']*)["'][^>]*>`,
    "i",
  );
  const byContentFirst = new RegExp(
    `<meta[^>]*content=["']([^"']*)["'][^>]*${nameOrProperty}=["']${value}["'][^>]*>`,
    "i",
  );
  return html.match(byName)?.[1]?.trim() || html.match(byContentFirst)?.[1]?.trim() || "";
}

function extractTitle(html) {
  return html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "";
}

function extractCanonical(html) {
  return html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i)?.[1]?.trim() || "";
}

function countH1(html) {
  return [...html.matchAll(/<h1[\s>]/gi)].length;
}

function isNoindex(html) {
  const robots = extractMetaContent(html, "name", "robots").toLowerCase();
  return robots.includes("noindex");
}

function auditScore(page) {
  let score = 100;
  if (page.status < 200 || page.status >= 400) score -= 40;
  if (!page.title || page.title.length < 30 || page.title.length > 65) score -= 15;
  if (!page.description || page.description.length < 80 || page.description.length > 170) score -= 15;
  if (page.h1Count !== 1) score -= 10;
  if (!page.canonical) score -= 10;
  if (page.noindex) score -= 10;
  return Math.max(0, score);
}

function recommendation(page) {
  const recs = [];
  if (page.status < 200 || page.status >= 400) recs.push("Corriger le statut HTTP (page cassée / redirection incorrecte).");
  if (!page.title) recs.push("Ajouter une balise title.");
  if (page.title && (page.title.length < 30 || page.title.length > 65)) recs.push("Optimiser la longueur du title (30-65 caractères).");
  if (!page.description) recs.push("Ajouter une meta description.");
  if (page.description && (page.description.length < 80 || page.description.length > 170)) {
    recs.push("Optimiser la longueur de la meta description (80-170 caractères).");
  }
  if (page.h1Count !== 1) recs.push("Assurer un seul H1 par page.");
  if (!page.canonical) recs.push("Ajouter un canonical explicite.");
  if (page.noindex) recs.push("Retirer noindex si la page doit ranker.");
  return recs.length ? recs.join(" ") : "Rien de critique. Continuer publication + backlinks.";
}

async function fetchText(url) {
  const response = await fetch(url, { redirect: "follow" });
  const text = await response.text();
  return { response, text };
}

async function run() {
  const now = new Date().toISOString();
  const start = Date.now();

  let sitemapXml = "";
  let urls = [];
  try {
    const { text } = await fetchText(SITEMAP_URL);
    sitemapXml = text;
    urls = extractLocsFromSitemap(sitemapXml).slice(0, MAX_URLS);
  } catch (error) {
    console.error(`Erreur lecture sitemap: ${error.message}`);
    process.exit(1);
  }

  if (!urls.length) {
    console.error("Aucune URL trouvee dans le sitemap.");
    process.exit(1);
  }

  const pages = [];
  for (const url of urls) {
    try {
      const { response, text } = await fetchText(url);
      const title = extractTitle(text);
      const description = extractMetaContent(text, "name", "description");
      const canonical = extractCanonical(text);
      const h1Count = countH1(text);
      const noindex = isNoindex(text);
      const wordCount = stripTags(text).split(" ").filter(Boolean).length;
      pages.push({
        url,
        status: response.status,
        title,
        description,
        canonical,
        h1Count,
        noindex,
        wordCount,
      });
    } catch (error) {
      pages.push({
        url,
        status: 0,
        title: "",
        description: "",
        canonical: "",
        h1Count: 0,
        noindex: false,
        wordCount: 0,
        error: error.message,
      });
    }
  }

  const withScore = pages.map((p) => ({
    ...p,
    score: auditScore(p),
    recommendation: recommendation(p),
  }));

  const avgScore = Math.round(withScore.reduce((acc, p) => acc + p.score, 0) / withScore.length);
  const broken = withScore.filter((p) => p.status >= 400 || p.status === 0);
  const lowScore = withScore.filter((p) => p.score < 80);
  const serviceAccount = parseServiceAccountFromEnv();
  const gsc = await getGscTopQueries({ siteUrl: GSC_SITE_URL, serviceAccount, limit: 15 });

  const lines = [];
  lines.push(`# Rapport SEO quotidien - ${now}`);
  lines.push("");
  lines.push(`- Site: ${SITE_URL}`);
  lines.push(`- Sitemap: ${SITEMAP_URL}`);
  lines.push(`- URLs analysees: ${withScore.length}`);
  lines.push(`- Score SEO moyen: **${avgScore}/100**`);
  lines.push(`- Pages en erreur HTTP: **${broken.length}**`);
  lines.push(`- Pages sous 80/100: **${lowScore.length}**`);
  lines.push(`- Propriete GSC cible: \`${GSC_SITE_URL}\``);
  lines.push("");

  lines.push("## Top requetes Search Console (28 jours)");
  lines.push("");
  if (gsc.error) {
    lines.push(`- Impossible de recuperer les donnees GSC: ${gsc.error}`);
  } else if (!gsc.rows.length) {
    lines.push("- Aucune requete retournee.");
  } else {
    lines.push("| Requete | Clics | Impressions | CTR | Position |");
    lines.push("|---|---:|---:|---:|---:|");
    for (const r of gsc.rows) {
      const q = r.keys?.[0] || "(n/a)";
      const ctr = `${((r.ctr || 0) * 100).toFixed(2)}%`;
      lines.push(`| ${q} | ${Math.round(r.clicks || 0)} | ${Math.round(r.impressions || 0)} | ${ctr} | ${(r.position || 0).toFixed(2)} |`);
    }
  }
  lines.push("");

  if (broken.length) {
    lines.push("## Pages en erreur");
    lines.push("");
    for (const p of broken) {
      lines.push(`- \`${p.url}\` -> HTTP ${p.status || "ERREUR"} ${p.error ? `(${p.error})` : ""}`);
    }
    lines.push("");
  }

  lines.push("## Actions prioritaires (Top 10)");
  lines.push("");
  for (const p of withScore.sort((a, b) => a.score - b.score).slice(0, 10)) {
    lines.push(`### ${p.url}`);
    lines.push(`- Score: **${p.score}/100**`);
    lines.push(`- HTTP: ${p.status}`);
    lines.push(`- Title (${p.title.length}): ${p.title || "(vide)"}`);
    lines.push(`- Description (${p.description.length}): ${p.description || "(vide)"}`);
    lines.push(`- H1 count: ${p.h1Count}`);
    lines.push(`- Canonical: ${p.canonical || "(manquant)"}`);
    lines.push(`- Noindex: ${p.noindex ? "oui" : "non"}`);
    lines.push(`- Reco: ${p.recommendation}`);
    lines.push("");
  }

  lines.push("## JSON brut (pour exploitation)");
  lines.push("");
  lines.push("```json");
  lines.push(JSON.stringify({ pages: withScore, gscTopQueries: gsc.rows, gscError: gsc.error }, null, 2));
  lines.push("```");
  lines.push("");
  lines.push(`_Genere en ${Date.now() - start} ms._`);

  process.stdout.write(lines.join("\n"));
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
