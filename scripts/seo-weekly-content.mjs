#!/usr/bin/env node
import { google } from "googleapis";

/**
 * SEO Weekly Content Agent
 * Genere un planning hebdomadaire de contenus SEO:
 * - 5 sujets
 * - mot-cle principal
 * - intention de recherche
 * - structure H2 recommandee
 * - CTA business
 */

const BRAND = "WEMADE";
const SITE = "https://wemade.fr";
const GSC_SITE_URL = process.env.GSC_SITE_URL || "sc-domain:wemade.fr";

const TOPICS = [
  {
    title: "Sourcing Chine pour PME: 7 erreurs qui coutent cher",
    keyword: "sourcing chine pme",
    intent: "commerciale / consideration",
    h2: [
      "Pourquoi les PME perdent de l'argent en import Chine",
      "Comment verifier un fournisseur avant acompte",
      "Quels couts caches anticiper",
      "Process recommande pour securiser vos achats",
    ],
    cta: "Demander un audit import gratuit",
  },
  {
    title: "Agent sourcing Chine: comment choisir un vrai partenaire",
    keyword: "agent sourcing chine france",
    intent: "commerciale / decision",
    h2: [
      "Intermediaire opportuniste vs partenaire operationnel",
      "Quels documents demander avant de signer",
      "Comment evaluer la transparence de remuneration",
      "Checklist de selection en 10 points",
    ],
    cta: "Parler a un expert WEMADE",
  },
  {
    title: "Controle qualite en Chine: methode avant expedition",
    keyword: "controle qualite chine",
    intent: "transactionnelle / commerciale",
    h2: [
      "Quand controler: pre-prod, en cours, final",
      "AQL: ce qu'il faut comprendre rapidement",
      "Comment lire un rapport d'inspection",
      "Que faire en cas de non-conformite",
    ],
    cta: "Reserver une inspection qualite",
  },
  {
    title: "Import emballage Chine: eviter retards et non-conformites",
    keyword: "import emballage chine",
    intent: "commerciale / consideration",
    h2: [
      "Les risques specifiques de l'emballage",
      "Normes, marquages et conformite documentaire",
      "Comment planifier un calendrier anti-rupture",
      "Modele de cahier des charges packaging",
    ],
    cta: "Demander un devis packaging",
  },
  {
    title: "Sourcing LED Chine: comment fiabiliser la qualite",
    keyword: "sourcing led chine",
    intent: "commerciale / transactionnelle",
    h2: [
      "Certifications LED a verifier",
      "Tests techniques a imposer au fournisseur",
      "Comment negocier sans sacrifier la qualite",
      "Plan d'approvisionnement LED recommande",
    ],
    cta: "Lancer un audit LED",
  },
];

function parseServiceAccountFromEnv() {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function getGscQueries(serviceAccount, siteUrl, limit = 20) {
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

async function run() {
  const now = new Date().toISOString();
  const serviceAccount = parseServiceAccountFromEnv();
  const gsc = await getGscQueries(serviceAccount, GSC_SITE_URL, 20);
  const opportunities = gsc.rows
    .filter((r) => (r.impressions || 0) > 100 && (r.position || 0) > 8 && (r.position || 0) < 30)
    .slice(0, 10);

  const lines = [];
  lines.push(`# SEO Weekly Content Plan - ${now}`);
  lines.push("");
  lines.push(`- Marque: ${BRAND}`);
  lines.push(`- Site: ${SITE}`);
  lines.push(`- Objectif: produire 5 contenus SEO a forte intention business cette semaine.`);
  lines.push(`- Propriete GSC cible: \`${GSC_SITE_URL}\``);
  lines.push("");

  lines.push("## Opportunites Search Console (positions 8-30)");
  lines.push("");
  if (gsc.error) {
    lines.push(`- Impossible de recuperer les donnees GSC: ${gsc.error}`);
  } else if (!opportunities.length) {
    lines.push("- Pas d'opportunites detectees sur ce critere cette semaine.");
  } else {
    lines.push("| Requete | Clics | Impressions | Position |");
    lines.push("|---|---:|---:|---:|");
    opportunities.forEach((r) => {
      lines.push(`| ${r.keys?.[0] || "(n/a)"} | ${Math.round(r.clicks || 0)} | ${Math.round(r.impressions || 0)} | ${(r.position || 0).toFixed(2)} |`);
    });
  }
  lines.push("");
  lines.push("## Plan editorial (5 contenus)");
  lines.push("");

  TOPICS.forEach((t, i) => {
    lines.push(`### ${i + 1}. ${t.title}`);
    lines.push(`- Mot-cle principal: **${t.keyword}**`);
    lines.push(`- Intention: **${t.intent}**`);
    lines.push(`- CTA cible: **${t.cta}**`);
    lines.push(`- Structure H2 recommandee:`);
    t.h2.forEach((h) => lines.push(`  - ${h}`));
    lines.push("");
  });

  lines.push("## Cadence recommandee");
  lines.push("");
  lines.push("- Lundi: publication #1");
  lines.push("- Mardi: publication #2");
  lines.push("- Mercredi: publication #3");
  lines.push("- Jeudi: publication #4");
  lines.push("- Vendredi: publication #5 + repost LinkedIn");
  lines.push("");
  lines.push("## Rappel execution");
  lines.push("");
  lines.push("- Ajouter un CTA vers `/#contact` dans chaque article");
  lines.push("- Ajouter 2 liens internes vers pages services");
  lines.push("- Ajouter schema `Article` pour chaque nouveau post");
  lines.push("- Suivre impressions/CTR dans Search Console");

  process.stdout.write(lines.join("\n"));
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
