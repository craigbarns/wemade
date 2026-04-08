#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const topics = [
  {
    slug: "sourcing-chine-pme-erreurs",
    title: "Sourcing Chine PME : 7 erreurs qui détruisent la marge",
    keyword: "sourcing chine pme",
    intent: "commerciale",
  },
  {
    slug: "agent-sourcing-chine-checklist",
    title: "Agent sourcing Chine : checklist de sélection 2026",
    keyword: "agent sourcing chine france",
    intent: "decision",
  },
  {
    slug: "controle-qualite-chine-aql",
    title: "Contrôle qualité Chine : comprendre l'AQL rapidement",
    keyword: "controle qualite chine",
    intent: "transactionnelle",
  },
  {
    slug: "import-emballage-chine-delais",
    title: "Import emballage Chine : sécuriser vos délais d'approvisionnement",
    keyword: "import emballage chine",
    intent: "commerciale",
  },
  {
    slug: "fournisseur-chine-fiable-preuves",
    title: "Fournisseur Chine fiable : les preuves à exiger avant acompte",
    keyword: "fournisseur chine fiable",
    intent: "consideration",
  },
];

function buildDraft(topic) {
  return {
    slug: topic.slug,
    title: topic.title,
    keyword: topic.keyword,
    intent: topic.intent,
    brief: {
      objective: "Generer des leads qualifies vers le formulaire contact.",
      targetAudience: "PME, marques et importateurs europeens.",
      h2: [
        `Pourquoi ${topic.keyword} est critique pour la marge`,
        "Erreurs les plus frequentes a eviter",
        "Methode operationnelle recommandee",
        "Checklist actionnable en 5 points",
      ],
      cta: "Demander un audit import gratuit sur wemade.fr/#contact",
      internalLinks: ["/", "/blog", "/#contact"],
    },
    status: "draft",
  };
}

function run() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10);
  const outputDir = path.resolve("automation", "seo-drafts");
  fs.mkdirSync(outputDir, { recursive: true });

  const payload = {
    generatedAt: now.toISOString(),
    count: topics.length,
    drafts: topics.map(buildDraft),
  };

  const outputPath = path.join(outputDir, `${date}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2), "utf8");

  const md = [
    `# SEO Drafts - ${date}`,
    "",
    `Fichier genere: \`${outputPath}\``,
    "",
    "## Drafts",
    ...payload.drafts.map(
      (d, i) =>
        `${i + 1}. **${d.title}**  \n   - Keyword: \`${d.keyword}\`  \n   - Intent: \`${d.intent}\`  \n   - CTA: ${d.brief.cta}`,
    ),
    "",
  ].join("\n");

  process.stdout.write(md);
}

run();
