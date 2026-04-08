#!/usr/bin/env node

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

function run() {
  const now = new Date().toISOString();
  const lines = [];
  lines.push(`# SEO Weekly Content Plan - ${now}`);
  lines.push("");
  lines.push(`- Marque: ${BRAND}`);
  lines.push(`- Site: ${SITE}`);
  lines.push(`- Objectif: produire 5 contenus SEO a forte intention business cette semaine.`);
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

run();
