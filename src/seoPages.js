/**
 * Pages SEO (piliers + satellites) + maillage interne (relatedLinks).
 * Piliers : agent sourcing, contrôle qualité, sourcing PME.
 */

export const seoPages = [
  /* --- Pilier : agent sourcing --- */
  {
    slug: "agent-sourcing-chine-france",
    title: "Agent sourcing Chine en France : comment choisir ? | WEMADE",
    description:
      "Guide pour choisir un agent sourcing Chine en France : critères, risques, modèle de rémunération et garanties. Interlocuteur FR, exécution Shanghai / Hangzhou.",
    h1: "Agent sourcing Chine en France : les critères clés",
    intro:
      "Tous les agents ne se valent pas. Pour éviter les mauvaises surprises, il faut vérifier la transparence, la présence terrain et la capacité d'exécution jusqu'à l'expédition.",
    points: [
      "Modèle de rémunération clair (pas de commissions cachées avec l'usine)",
      "Présence opérationnelle en Chine (contrôles, inspections, arbitrages)",
      "Process qualité documenté et reporting exploitable",
      "Responsabilité contractuelle explicite côté Europe et exécution locale",
    ],
    relatedLinks: [
      { slug: "transparence-sourcing-chine", label: "Transparence des coûts et commissions" },
      { slug: "sourcing-chine-pme", label: "Guide sourcing Chine pour PME" },
      { slug: "import-chine-pme", label: "Import Chine PME : méthode complète" },
      { slug: "controle-qualite-chine", label: "Contrôle qualité avant expédition" },
      { slug: "audit-usine-chine", label: "Audit usine en Chine" },
      { href: "/blog/sourcing-premium-vs-agents-chine", label: "Article : sourcing premium vs agents classiques" },
    ],
  },

  /* --- Pilier : contrôle qualité --- */
  {
    slug: "controle-qualite-chine",
    title: "Contrôle qualité Chine : inspection avant expédition | WEMADE",
    description:
      "Contrôle qualité en Chine : PPI, DUPRO, inspection finale AQL, chargement container. Réduire les défauts et sécuriser la conformité avant paiement.",
    h1: "Contrôle qualité en Chine : votre assurance marge",
    intro:
      "Corriger en Chine coûte moins cher que gérer les retours clients en Europe. Une stratégie d'inspection à plusieurs étapes protège votre marge et votre image.",
    points: [
      "Inspection amont (matières, préparation de ligne, golden sample)",
      "Contrôle en cours de production pour stopper les écarts tôt",
      "Inspection finale selon échantillonnage et critères AQL",
      "Supervision du chargement et alignement avec les documents d'export",
    ],
    relatedLinks: [
      { slug: "aql-inspection-chine", label: "Comprendre l'AQL en inspection qualité" },
      { slug: "audit-usine-chine", label: "Audit usine avant de commander en série" },
      { slug: "import-emballage-chine", label: "Import emballage : qualité et conformité" },
      { slug: "agent-sourcing-chine-france", label: "Agent sourcing avec suivi terrain" },
      { href: "/blog/controle-qualite-securiser-production-chine", label: "Article : 4 étapes clés avant export" },
    ],
  },

  /* --- Pilier : sourcing PME (mot-clé exact) --- */
  {
    slug: "sourcing-chine-pme",
    title: "Sourcing Chine PME : méthode, risques et coût réel | WEMADE",
    description:
      "Sourcing Chine pour PME européennes : cadrer le besoin, choisir un fournisseur, négocier le coût rendu, contrôler la qualité. Méthode WEMADE France / Chine.",
    h1: "Sourcing Chine pour PME : méthode opérationnelle",
    intro:
      "Les PME gagnent en compétitivité quand le sourcing est structuré : pas seulement un prix usine, mais un coût complet, des délais tenables et une qualité prévisible.",
    points: [
      "Cadrage produit, volumes, niveau qualité et budget cible (coût rendu)",
      "Préqualification documentaire puis validation terrain quand l'enjeu le justifie",
      "Négociation MOQ, Incoterms, paiements et pénalités / plans B",
      "Inspection avant solde et coordination jusqu'à la livraison en Europe",
    ],
    relatedLinks: [
      { slug: "import-chine-pme", label: "Import Chine PME : étapes détaillées" },
      { slug: "fournisseur-chine-fiable", label: "Valider un fournisseur fiable" },
      { slug: "agent-sourcing-chine-france", label: "Agent sourcing avec pilotage FR" },
      { slug: "audit-usine-chine", label: "Audit usine avant engagement" },
      { href: "/blog/sourcing-chine-pme-7-erreurs", label: "Article : 7 erreurs qui coûtent cher" },
    ],
  },

  /* --- Satellite : transparence / négociation --- */
  {
    slug: "transparence-sourcing-chine",
    title: "Transparence sourcing Chine : commissions, prix usine, marge | WEMADE",
    description:
      "Comment lire un devis Chine : prix usine, marge cachée, commissions. Pourquoi la transparence protège votre sourcing et votre négociation long terme.",
    h1: "Transparence du sourcing Chine : prix réel vs coûts cachés",
    intro:
      "Un écart entre prix annoncé et coût réel détruit la confiance et la marge. Les bonnes pratiques passent par la clarté sur la rémunération de chaque acteur et sur le coût rendu.",
    points: [
      "Séparer honoraires d'accompagnement et prix négocié avec l'usine",
      "Demander la traçabilité des échantillons, outillage et ajustements de série",
      "Intégrer logistique, douanes et coûts de contrôle dans la décision",
      "Éviter les modèles où l'usine « paie » l'intermédiaire sans visibilité client",
    ],
    relatedLinks: [
      { slug: "agent-sourcing-chine-france", label: "Choisir un agent sourcing fiable" },
      { slug: "import-chine-pme", label: "Import Chine PME" },
      { slug: "sourcing-chine-pme", label: "Sourcing Chine PME : méthode" },
      { href: "/blog/sourcing-premium-vs-agents-chine", label: "Premium vs agents classiques" },
    ],
  },

  /* --- Satellite : AQL --- */
  {
    slug: "aql-inspection-chine",
    title: "AQL inspection Chine : accepter ou refuser un lot ? | WEMADE",
    description:
      "AQL (Acceptable Quality Limit) expliqué pour les importateurs : échantillonnage, niveaux, défauts majeurs/mineurs. Lier l'AQL à votre contrôle qualité en Chine.",
    h1: "AQL en inspection qualité Chine : l'essentiel pour décider",
    intro:
      "L'AQL sert à trancher sur un lot de façon reproductible. Sans critères clairs, l'inspection devient subjective et les litiges explosent à l'arrivée.",
    points: [
      "Choisir un niveau AQL adapté au risque produit (critique vs accessoire)",
      "Distinguer défauts critiques, majeurs et mineurs dans le cahier des charges",
      "Aligner l'inspecteur, l'usine et vos équipes sur la même grille avant production",
      "Utiliser le rapport d'inspection pour accepter, trier, renégocier ou refuser",
    ],
    relatedLinks: [
      { slug: "controle-qualite-chine", label: "Contrôle qualité en Chine (méthode complète)" },
      { slug: "audit-usine-chine", label: "Audit usine et préparation qualité" },
      { href: "/blog/controle-qualite-securiser-production-chine", label: "Article : étapes d'inspection" },
    ],
  },

  /* --- Villes & services existants (enrichis maillage) --- */
  {
    slug: "sourcing-chine-marseille",
    title: "Sourcing Chine Marseille : bureau d'achats pour PME | WEMADE",
    description:
      "Accompagnement sourcing Chine depuis Marseille : sélection d'usines, négociation, contrôle qualité et logistique porte-à-porte.",
    h1: "Sourcing Chine à Marseille : sécuriser vos achats import",
    intro:
      "Depuis Marseille, WEMADE accompagne les PME qui veulent acheter en Chine sans se faire piéger par des intermédiaires ou des coûts cachés.",
    points: [
      "Sélection d'usines réellement adaptées à votre cahier des charges",
      "Négociation des conditions commerciales et des délais",
      "Contrôle qualité avant expédition",
      "Logistique internationale et livraison en France",
    ],
    relatedLinks: [
      { slug: "sourcing-chine-pme", label: "Sourcing Chine PME" },
      { slug: "agent-sourcing-chine-france", label: "Agent sourcing Chine" },
      { slug: "controle-qualite-chine", label: "Contrôle qualité Chine" },
    ],
  },
  {
    slug: "sourcing-chine-lyon",
    title: "Sourcing Chine Lyon : import PME sécurisé | WEMADE",
    description:
      "Service de sourcing Chine pour entreprises lyonnaises : fiabilité fournisseurs, conformité, qualité et maîtrise des coûts.",
    h1: "Sourcing Chine pour entreprises à Lyon",
    intro:
      "Vous êtes basé à Lyon et cherchez un partenaire fiable pour vos achats en Chine ? WEMADE structure votre sourcing de bout en bout.",
    points: [
      "Audit du besoin produit et du budget réel livré",
      "Qualification des fournisseurs et vérification documentaire",
      "Contrôle qualité sur site en Chine",
      "Pilotage opérationnel jusqu'à la réception",
    ],
    relatedLinks: [
      { slug: "sourcing-chine-pme", label: "Sourcing Chine PME" },
      { slug: "import-chine-pme", label: "Import Chine PME" },
      { slug: "fournisseur-chine-fiable", label: "Fournisseur fiable en Chine" },
    ],
  },
  {
    slug: "sourcing-chine-paris",
    title: "Sourcing Chine Paris : agent achats premium | WEMADE",
    description:
      "Sourcing Chine pour marques et importateurs parisiens : fournisseurs vérifiés, contrôle qualité et exécution locale.",
    h1: "Sourcing Chine à Paris : gagner en marge sans perdre en qualité",
    intro:
      "Pour les marques parisiennes, le vrai enjeu est de sécuriser la marge tout en gardant un niveau qualité constant.",
    points: [
      "Sourcing orienté performance commerciale",
      "Négociation orientée coût complet",
      "Contrôle qualité et conformité",
      "Interlocuteur français + exécution locale Chine",
    ],
    relatedLinks: [
      { slug: "agent-sourcing-chine-france", label: "Agent sourcing Chine en France" },
      { slug: "transparence-sourcing-chine", label: "Transparence prix et commissions" },
      { slug: "sourcing-chine-pme", label: "Sourcing Chine PME" },
    ],
  },
  {
    slug: "import-chine-pme",
    title: "Import Chine PME : méthode complète pour éviter les erreurs | WEMADE",
    description:
      "Méthode d'import Chine pour PME : calcul du coût réel, sélection usine, contrôle qualité et logistique internationale.",
    h1: "Import Chine pour PME : méthode opérationnelle",
    intro:
      "Importer depuis la Chine peut accélérer votre croissance, à condition de piloter correctement chaque étape.",
    points: [
      "Définition du cahier des charges et des niveaux qualité",
      "Sourcing et benchmark fournisseurs",
      "Inspection qualité avant paiement final",
      "Livraison et conformité documentaire",
    ],
    relatedLinks: [
      { slug: "sourcing-chine-pme", label: "Sourcing Chine PME (guide stratégique)" },
      { slug: "fournisseur-chine-fiable", label: "Trouver un fournisseur fiable" },
      { slug: "controle-qualite-chine", label: "Contrôle qualité Chine" },
      { slug: "agent-sourcing-chine-france", label: "Agent sourcing en France" },
    ],
  },
  {
    slug: "audit-usine-chine",
    title: "Audit usine en Chine : sécuriser votre fournisseur | WEMADE",
    description:
      "Audit d'usine en Chine pour vérifier capacité, process, conformité et fiabilité avant commande.",
    h1: "Audit d'usine en Chine : réduire les risques fournisseurs",
    intro:
      "Un audit d'usine permet de valider la réalité industrielle avant engagement financier.",
    points: [
      "Vérification de la capacité de production",
      "Contrôle du système qualité interne",
      "Analyse conformité documentaire",
      "Rapport d'audit exploitable pour décision",
    ],
    relatedLinks: [
      { slug: "fournisseur-chine-fiable", label: "Fournisseur chinois fiable" },
      { slug: "controle-qualite-chine", label: "Contrôle qualité après audit" },
      { slug: "sourcing-chine-pme", label: "Sourcing Chine PME" },
      { href: "/blog/comment-trouver-usine-fiable-chine", label: "Article : usine fiable en Chine" },
    ],
  },
  {
    slug: "fournisseur-chine-fiable",
    title: "Trouver un fournisseur fiable en Chine : guide 2026 | WEMADE",
    description:
      "Comment identifier un fournisseur fiable en Chine : documents, audit, tests qualité et négociation.",
    h1: "Fournisseur chinois fiable : méthode de validation",
    intro:
      "Le bon fournisseur n'est pas celui qui promet le prix le plus bas, mais celui qui tient la qualité et les délais.",
    points: [
      "Vérification licence et structure de l'entreprise",
      "Échantillons et validation technique",
      "Historique de production et références",
      "Mécanismes contractuels de protection",
    ],
    relatedLinks: [
      { slug: "audit-usine-chine", label: "Audit usine en Chine" },
      { slug: "sourcing-chine-pme", label: "Sourcing Chine PME" },
      { slug: "import-chine-pme", label: "Import Chine PME" },
      { href: "/blog/comment-trouver-usine-fiable-chine", label: "Article : trouver une usine fiable" },
    ],
  },
  {
    slug: "import-emballage-chine",
    title: "Import emballage Chine : sécuriser coût, qualité, délais | WEMADE",
    description:
      "Import d'emballages depuis la Chine : méthode pour éviter retards, non-conformités et surcoûts.",
    h1: "Import d'emballages : sécuriser votre supply chain",
    intro:
      "Sur l'emballage, la moindre erreur impacte votre image et votre délai de mise en marché.",
    points: [
      "Validation technique de l'emballage",
      "Échantillon de préproduction",
      "Contrôle qualité avant départ",
      "Planification logistique anti-rupture",
    ],
    relatedLinks: [
      { slug: "controle-qualite-chine", label: "Contrôle qualité Chine" },
      { slug: "sourcing-chine-pme", label: "Sourcing Chine PME" },
      { slug: "import-chine-pme", label: "Import Chine PME" },
    ],
  },
  {
    slug: "sourcing-led-chine",
    title: "Sourcing LED Chine : guide PME pour acheter mieux | WEMADE",
    description:
      "Sourcing LED en Chine : conformité CE, stabilité qualité et maîtrise du coût rendu.",
    h1: "Sourcing LED en Chine : fiabilité et conformité",
    intro:
      "Le segment LED exige un haut niveau de contrôle sur la conformité et la constance qualité.",
    points: [
      "Vérification des certificats CE et rapports de test",
      "Contrôle des performances produit",
      "Inspection qualité multi-lots",
      "Optimisation du coût complet livré",
    ],
    relatedLinks: [
      { slug: "controle-qualite-chine", label: "Contrôle qualité Chine" },
      { slug: "audit-usine-chine", label: "Audit usine" },
      { slug: "import-chine-pme", label: "Import Chine PME" },
    ],
  },
];

/** Ordre d'affichage homepage : piliers d'abord, puis satellites, puis local/vertical */
export const seoPagesHomeOrder = [
  "agent-sourcing-chine-france",
  "controle-qualite-chine",
  "sourcing-chine-pme",
  "transparence-sourcing-chine",
  "aql-inspection-chine",
  "import-chine-pme",
  "fournisseur-chine-fiable",
  "audit-usine-chine",
  "import-emballage-chine",
  "sourcing-led-chine",
  "sourcing-chine-paris",
  "sourcing-chine-lyon",
  "sourcing-chine-marseille",
];

export const seoPagesMap = Object.fromEntries(seoPages.map((p) => [p.slug, p]));

export function getSeoPagesForHome() {
  const map = seoPagesMap;
  return seoPagesHomeOrder.map((slug) => map[slug]).filter(Boolean);
}
