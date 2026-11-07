/**
 * Pages SEO (piliers + satellites) + maillage interne (relatedLinks).
 * Piliers : agent sourcing, contrôle qualité, sourcing PME.
 * Les satellites de src/data/newSeoPages.js sont fusionnés à l'export principal.
 */

import { newSeoPages } from "./data/newSeoPages.js";

const baseSeoPages = [
  /* --- Pilier : agent sourcing --- */
  {
    slug: "agent-sourcing-chine-france",
    title: "Agent sourcing Chine en France : guide complet 2026 | WEMADE",
    description:
      "Comment choisir un agent sourcing Chine en France : critères, contrat, rémunération, qualité, risques. Guide long avec checklist, FAQ et méthode WEMADE (France + Shanghai / Hangzhou).",
    h1: "Agent sourcing Chine en France : guide complet pour décider sans vous tromper",
    intro:
      "Un bon agent ne se limite pas à transmettre des devis : il structure votre sourcing, sécurise la qualité et rend visibles les coûts réels. Ce guide détaille ce qu'il faut exiger avant de signer — et comment aligner intérêts, risques et exécution terrain.",
    points: [
      "Modèle de rémunération clair (pas de commissions cachées avec l'usine)",
      "Présence opérationnelle en Chine (contrôles, inspections, arbitrages)",
      "Process qualité documenté et reporting exploitable",
      "Responsabilité contractuelle explicite côté Europe et exécution locale",
    ],
    deepSections: [
      {
        h2: "Qu'est-ce qu'un agent de sourcing Chine (et ce qu'il n'est pas) ?",
        paragraphs: [
          "Un agent de sourcing agit comme prolongement de votre équipe achats : il identifie des usines pertinentes, qualifie la capacité réelle, pilote les échanges techniques et commerciaux, et souvent coordonne les étapes jusqu'à l'expédition. Il n'est ni un simple traducteur, ni un catalogue de contacts : son rôle est opérationnel.",
          "En pratique, la valeur se joue sur trois niveaux : la qualité de la short-list (éviter trading companies mal identifiées ou usines sous-dimensionnées), la qualité de la négociation (prix mais aussi MOQ, Incoterms, délais, pénalités, emballage) et la capacité à faire respecter le cahier des charges jusqu'au contrôle avant paiement final.",
          "Si votre « agent » ne peut pas expliquer comment il tranche en cas d'écart qualité, ou comment il est rémunéré par rapport à l'usine, vous n'avez probablement pas un partenaire de sourcing — vous avez un apporteur d'affaires.",
        ],
      },
      {
        h2: "Pourquoi passer par un interlocuteur en France pour la Chine ?",
        paragraphs: [
          "La France et l'Europe imposent une lecture business précise : conformité produit, responsabilité, assurance, cash-flow et relation avec la direction. Un interlocuteur local facilite le cadrage du besoin, la contractualisation et le suivi de projet avec le bon niveau d'exigence.",
          "Mais un bureau « France only » sans exécution en Chine manque souvent de pression opérationnelle au bon moment : sur la ligne, lors des ajustements de série, ou au chargement. Le modèle le plus robuste combine pilotage européen et présence terrain en Chine — c'est exactement la logique WEMADE entre Marseille et les hubs Shanghai / Hangzhou.",
        ],
      },
      {
        h2: "Les 7 critères non négociables avant de choisir votre agent",
        paragraphs: [
          "1) Transparence économique : honoraires et frais doivent être identifiables ; le prix négocié avec l'usine doit être traçable. 2) Preuve de présence terrain : visites, inspections, photos/vidéos, comptes rendus datés. 3) Méthode qualité : quand inspecter (amont, ligne, final), selon quels critères, avec quel standard d'acceptation.",
          "4) Gouvernance : qui décide en cas de litige technique, qui porte la relation contractuelle avec l'usine. 5) Compétences produit : votre catégorie (packaging, textile, électronique, etc.) nécessite des réflexes différents. 6) Références vérifiables sur des dossiers comparables en volumes et en complexité. 7) Plan de continuité : alternative fournisseur ou scénario de reprise si l'usine dérape.",
          "Pour une checklist imprimable et des questions à poser en réunion, utilisez notre article dédié : checklist agent sourcing (lien en bas de page).",
        ],
      },
      {
        h2: "Commission cachée, marge usine et conflit d'intérêts",
        paragraphs: [
          "Le cas le plus fréquent de dérapage n'est pas « une mauvaise usine », c'est un modèle où l'agent est rémunéré par l'usine sans transparence. Résultat : l'agent peut être incité à pousser un fournisseur qui paie mieux la commission, pas celui qui offre le meilleur rapport qualité / coût / délai pour vous.",
          "La règle simple : toute rémunération liée à l'usine doit être connue et contractualisée, ou exclue. Sinon, vous optimisez un indicateur (prix affiché) au détriment du coût réel et de la sécurité qualité. Notre page « transparence sourcing Chine » détaille comment lire un devis et isoler les postes de coût.",
        ],
      },
      {
        h2: "Qualité : le rôle de l'agent jusqu'à l'inspection finale",
        paragraphs: [
          "Le sourcing sans contrôle qualité structuré est une loterie. Un agent utile définit avec vous les critères d'acceptation avant production, aligne l'usine sur un golden sample clair, programme des points de contrôle et tranche sur la base de preuves (rapport, photos, mesures), idéalement selon une logique d'échantillonnage type AQL lorsque c'est pertinent.",
          "L'enjeu n'est pas seulement « passer une inspection », c'est éviter que des écarts massifs arrivent à l'arrivée en Europe, où les options de correction sont chères ou impossibles. Pour la méthode complète, voir notre guide contrôle qualité Chine et la page AQL.",
        ],
      },
      {
        h2: "Contrat et responsabilité : ce qui doit figurer noir sur blanc",
        paragraphs: [
          "Même avec un bon feeling, sans cadre écrit vous déplacez le risque sur votre trésorerie. Le minimum : périmètre de mission, livrables (short-list, rapports, planning), modalités de rémunération, confidentialité, propriété intellectuelle / outillage si applicable, et procédure en cas de non-conformité.",
          "Si l'agent refuse la transparence sur les lignes de coût ou sur son lien contractuel avec l'usine, considérez cela comme un signal d'alarme — pas comme une « coutume locale ».",
        ],
      },
      {
        h2: "Les erreurs qui coûtent cher (et comment les éviter)",
        paragraphs: [
          "Erreur n°1 : choisir uniquement sur le prix du service sans modéliser le coût rendu. Erreur n°2 : valider une production sans inspection finale alignée sur vos critères. Erreur n°3 : mélanger audit usine et négociation commerciale sans chronologie claire. Erreur n°4 : sous-estimer délais d'échantillons, tooling et pics de production.",
          "La bonne approche est itérative : cadrage serré, préqualification, échantillon, petit lot ou pilote si possible, puis montée en cadence avec jalons qualité. Voir aussi notre guide sourcing Chine PME pour une vue d'ensemble budget et risques.",
        ],
      },
      {
        h2: "Feuille de route type sur 30 jours avec un agent structuré",
        paragraphs: [
          "Semaine 1 : brief produit, cible coût rendu, contraintes légales / packaging, définition des critères d'acceptation. Semaine 2 : short-list fournisseurs, revue documentaire, décision d'audit ou visite si l'enjeu le justifie. Semaine 3 : négociation des termes, échantillons, validation des incoterms et du planning qualité.",
          "Semaine 4 : lancement encadré, premiers contrôles si production démarrée, alignement logistique. Ce rythme varie selon complexité, mais l'important est la présence de jalons décisionnels clairs — pas une course au devis le plus rapide.",
        ],
      },
      {
        h2: "Quand WEMADE est le bon format de partenaire",
        paragraphs: [
          "WEMADE s'adresse aux marques et importateurs qui veulent un niveau premium : transparence, exécution en Chine, et pilotage business depuis la France. Nous ne sommes pas une place de marché ni un intermédiaire opaque : nous structurons une opération sourcing avec des points de contrôle qualité au bon moment.",
          "Si votre besoin est sérieux (volumes, récurrence, exigence qualité, développement produit), un échange de 20 minutes suffit souvent à cadrer la faisabilité et les prochaines étapes — demandez un audit import gratuit via le formulaire en bas de page d'accueil.",
        ],
      },
    ],
    pillarFaqs: [
      {
        q: "Un agent sourcing Chine en France peut-il travailler sans bureau en Chine ?",
        a: "Oui, mais le risque opérationnel augmente : moins de pression sur la ligne, inspections tardives ou absentes, et arbitrages plus lents. Le modèle le plus fiable combine un interlocuteur en Europe et une équipe locale en Chine.",
      },
      {
        q: "Comment savoir si mon agent prend une commission côté usine ?",
        a: "Exigez l'écriture des flux financiers : qui facture quoi, à qui, et comment est fixé le prix usine. Si la transparence est refusée ou floue, traitez le risque comme réel et pas seulement théorique.",
      },
      {
        q: "Agent de sourcing ou bureau d'achat : quelle différence ?",
        a: "Les frontières sont floues sur le marché. Retenez le critère pratique : le partenaire porte-t-il une méthode complète (sélection, négociation, qualité, suivi) avec des livrables traçables, ou se contente-t-il de mettre en relation ?",
      },
      {
        q: "À quel moment prévoir un contrôle qualité en Chine ?",
        a: "Au minimum avant le solde et l'expédition ; souvent aussi en amont (matières / préproduction) et en cours de production pour les volumes sensibles. La stratégie dépend du risque produit et du coût d'une non-conformité.",
      },
    ],
    relatedLinks: [
      { href: "/blog/checklist-agent-sourcing-chine-2026", label: "Checklist 2026 : choisir son agent sourcing Chine" },
      { href: "/blog/honoraires-agent-sourcing-chine-risques", label: "Honoraires, commissions et risques : modèles expliqués" },
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
      { slug: "agent-sourcing-chine-france", label: "Guide complet agent sourcing Chine en France" },
      { href: "/blog/checklist-agent-sourcing-chine-2026", label: "Checklist 2026 agent sourcing" },
      { href: "/blog/honoraires-agent-sourcing-chine-risques", label: "Honoraires et risques (article)" },
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
    deepSections: [
      {
        h2: "Calculer le coût rendu : le seul chiffre qui compte",
        paragraphs: [
          "Le prix usine n'est pas votre coût. Le coût rendu intègre le fret (maritime, aérien ou express), l'assurance, les droits de douane selon le code SH de votre produit, la TVA à l'importation, les frais de dédouanement, le transport final, et le coût du contrôle qualité. Deux devis au même prix FOB peuvent différer de 20 % une fois rendus dans votre entrepôt.",
          "Construisez ce calcul avant de négocier : c'est lui qui définit votre marge réelle, et c'est lui qui révèle où vaut la peine de négocier (souvent le fret et les MOQ, rarement le prix unitaire seul).",
        ],
      },
      {
        h2: "Les étapes d'un import Chine sans surprise",
        paragraphs: [
          "La séquence robuste : cahier des charges écrit (spécifications, tolérances, emballage, marquage) puis sélection et vérification des fournisseurs, échantillons et golden sample signé, négociation (prix, MOQ, Incoterms, délais, pénalités), production avec points de contrôle, inspection finale avant solde, expédition et dédouanement, réception et contrôle à l'arrivée.",
          "Chaque étape sautée déplace le risque sur l'étape suivante, où il coûte plus cher. Le cahier des charges écrit et le golden sample sont les deux documents qui préviennent le plus de litiges pour le moins d'effort.",
        ],
      },
      {
        h2: "Douanes, TVA et conformité UE : les bases à verrouiller",
        paragraphs: [
          "Trois vérifications obligatoires avant commande : le code SH exact de votre produit (il détermine le droit de douane), les exigences de conformité de votre catégorie (marquage CE, sécurité des consommateurs, REACH/RoHS selon le produit), et le marquage d'origine exigé sur le produit et l'emballage. Les certificats du fournisseur doivent être à jour, au nom de l'entité qui produit réellement, et couvrir votre référence précise.",
          "Une non-conformité détectée à la douane ou par une plateforme de vente coûte infiniment plus cher que la vérification en amont : blocage du lot, retours clients, voire sanctions. C'est un poste où l'économie de contrôle ne se discute pas.",
        ],
      },
      {
        h2: "Logistique : express, aérien ou maritime ?",
        paragraphs: [
          "Express (3-6 jours porte-à-porte) pour les échantillons et les urgences légères, mais cher au kilo. Aérien (5-10 jours) pour les valeurs légères en coût au kilo. Maritime (30-45 jours porte-à-porte selon la destination) pour les volumes : c'est le standard du coût rendu, à condition d'anticiper — le vrai coût du maritime est le délai de planification, pas le prix.",
          "Deux réflexes qui économisent beaucoup : consolider vos envois quand c'est possible (moins de frais fixes par expédition), et valider les dimensions et poids volumétriques réels de l'emballage export avec l'usine avant de chiffrer le fret.",
        ],
      },
      {
        h2: "Les erreurs qui coûtent le plus cher aux PME",
        paragraphs: [
          "1) Négocier uniquement le prix unitaire sans vision du coût rendu. 2) Verser le solde avant inspection. 3) Sous-estimer les délais réels : échantillons, outillage, pics de production, et fêtes chinoises — le Nouvel An chinois paralyse les usines deux à quatre semaines. La méthode complète est détaillée dans notre guide sourcing Chine PME, et la validation des fournisseurs dans notre page fournisseur fiable.",
        ],
      },
    ],
    pillarFaqs: [
      {
        q: "Quels documents faut-il pour importer de Chine ?",
        a: "Au minimum : facture commerciale, liste de colisage, connaissement (B/L) ou lettre de transport aérien, certificat d'origine selon destination, et les certificats de conformité de votre catégorie (CE, tests laboratoire). Votre transitaire gère la déclaration, mais les certificats produit sont votre responsabilité en tant qu'importateur.",
      },
      {
        q: "Comment calculer le coût réel d'une importation de Chine ?",
        a: "Additionnez au prix usine : fret, assurance, droits de douane (selon code SH), TVA à l'import, frais de dédouanement et transport final, coût du contrôle qualité — puis divisez par le nombre d'unités. C'est le coût rendu, le seul chiffre à comparer entre fournisseurs.",
      },
      {
        q: "Faut-il une société pour importer de Chine ?",
        a: "Pour importer régulièrement et commercialement en Europe, oui : il faut un numéro EORI pour le dédouanement, et la responsabilité conformité produit (importateur légal) repose sur une entité. Des imports ponctuels via un tiers sont possibles mais transfèrent le risque et la marge.",
      },
    ],
    relatedLinks: [
      { slug: "sourcing-chine-pme", label: "Sourcing Chine PME (guide stratégique)" },
      { slug: "fournisseur-chine-fiable", label: "Trouver un fournisseur fiable" },
      { slug: "controle-qualite-chine", label: "Contrôle qualité Chine" },
      { slug: "agent-sourcing-chine-france", label: "Agent sourcing en France" },
      { slug: "tarif-agent-sourcing-chine", label: "Prix d'un agent de sourcing" },
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
    title: "Trouver un fournisseur fiable en Chine : méthode complète 2026 | WEMADE",
    description:
      "Comment trouver un fournisseur fiable en Chine : vérification de licence, usine réelle ou trading, échantillons, audit, paiements sécurisés. Méthode complète 2026.",
    h1: "Fournisseur chinois fiable : la méthode de validation en 6 filtres",
    intro:
      "Le bon fournisseur n'est pas celui qui promet le prix le plus bas, mais celui qui tient la qualité et les délais lot après lot. La plupart des litiges d'import ne viennent pas d'une malveillance, mais d'une sélection faite trop vite : un profil séduisant, un devis attractif, un acompte payé — et six semaines plus tard, une production non conforme. Cette page détaille les six filtres que nous appliquons avant de confier une production à un fournisseur chinois, dans l'ordre où ils doivent être appliqués.",
    points: [
      "Filtre 1 — Existence légale : licence, portée d'activité, capital, année de création",
      "Filtre 2 — Nature réelle : usine, trading company ou simple intermédiaire",
      "Filtre 3 — Capacité technique : échantillons, golden sample, validation de série",
      "Filtre 4 — Vérification terrain : audit ou visite d'usine quand l'enjeu le justifie",
      "Filtre 5 — Preuves commerciales : historique, références export, cohérence catalogue",
      "Filtre 6 — Protection contractuelle : acompte, balance, pénalités, plan B",
    ],
    deepSections: [
      {
        h2: "Usine réelle, trading company ou agent : qui est vraiment derrière le profil ?",
        paragraphs: [
          "La première question n'est pas « ce fournisseur est-il fiable ? » mais « qui est-ce, exactement ? ». Sur les plateformes comme Alibaba, une part importante des profils sont des trading companies : elles revendent la production d'usines tierces, souvent sans en contrôler la qualité, et empilent leur marge sur le prix. Ce n'est pas toujours un problème — certaines trading companies apportent une vraie valeur en coordination — mais il faut le savoir avant de décider, car la chaîne de responsabilité n'est pas la même.",
          "Les signaux qui permettent de trancher : la portée d'activité inscrite sur la licence (fabrication vs commerce de gros), l'adresse (zone industrielle vs immeuble de bureaux), la demande de visites (une usine accueille, un intermédiaire tergiverse), la cohérence entre les photos affichées et ce que montre un appel vidéo en direct depuis l'atelier. Un profil qui mélange des photos de lignes de production de trois industries différentes est rarement une usine.",
        ],
      },
      {
        h2: "La vérification documentaire : licence, portée d'activité, capital",
        paragraphs: [
          "Chaque entreprise chinoise dispose d'une licence commerciale unifiée consultable sur les registres officiels. Trois vérifications minimales : l'objet social correspond-il à la fabrication de votre catégorie de produits ? Le capital enregistré est-il cohérent avec les volumes annoncés (une usine qui prétend produire 500 000 pièces/mois avec un capital de 100 000 RMB est un signal d'alerte) ? L'année de création et l'historique des noms d'entreprise révèlent-ils des changements fréquents, souvent associés à des fuites derrière des litiges qualité ?",
          "Ces vérifications prennent moins d'une journée et éliminent une part importante des profils à risque avant même le premier échange commercial. Elles ne remplacent pas un audit terrain, mais elles évitent de payer un audit pour une entreprise qui n'aurait jamais dû être retenue.",
        ],
      },
      {
        h2: "Échantillon : ce qu'il prouve, et ce qu'il ne prouve pas",
        paragraphs: [
          "Un échantillon valide l'intention et la compétence d'ingénierie sur une pièce. Il ne valide pas la capacité à produire 20 000 pièces avec la même qualité. Les écarts apparaissent presque toujours en série : matières substituées, tolérances relâchées, finitions accélérées pour tenir un délai. C'est pour cela que la validation d'un fournisseur fiable ne s'arrête pas à l'échantillon : elle inclut la définition d'un golden sample signé par les deux parties, et des points de contrôle alignés sur ce standard pendant la production.",
          "Un bon test intermédiaire quand les enjeux le justifient : commander un petit lot pilote (quelques centaines de pièces plutôt que quelques dizaines d'échantillons). Le coût marginal est faible, et il révèle la vraie discipline de production de l'usine bien mieux qu'une série d'échantillons unitaires.",
        ],
      },
      {
        h2: "Audit ou visite d'usine : quand y aller, et quoi regarder",
        paragraphs: [
          "Tous les fournisseurs ne méritent pas un audit. La règle que nous appliquons : l'enjeu financier de la première commande et la récurrence prévisible de la relation déterminent l'investissement de vérification. Un audit complet (capacité, process qualité, conformité documentaire, conditions de travail) se justifie dès que la relation dépasse quelques milliers d'euros ou qu'elle doit durer. Pour des commandes plus modestes, une visite courte ou un audit documentaire renforcé suffit.",
          "Ce qu'un audit utile regarde au-delà des photos : la cohérence entre les lignes de production visitées et le produit qu'on vous vend (une usine d'assemblage qui sous-traite tout et n'assemble que l'emballage n'est pas ce que son catalogue suggère), le système qualité interne (enregistrements, gestion des non-conformités, formation des opérateurs), et la gestion des matières premières (traçabilité, stock, sous-traitants déclarés).",
        ],
      },
      {
        h2: "Historique de production et références : vérifier sans se faire berner",
        paragraphs: [
          "Demandez des références export récentes et comparables à votre produit, puis vérifiez ce qui est vérifiable : cohérence des clients annoncés avec le segment de marché, présence de certificats produit à jour pour votre catégorie (CE, FDA, CPC selon le cas), mentions légales sur des documents d'expédition. Un fournisseur fiable répond précisément ; un profil qui répond en généralités (« nous travaillons avec beaucoup de clients européens ») sans un seul élément vérifiable mérite votre méfiance.",
          "Attention au piège inverse : des certificats anciens, au nom d'une autre entité, ou couvrant un modèle différent du vôtre ne valent rien pour votre commande. Chaque certificat doit être rattaché à votre référence précise et dater de moins de ce que votre marché exige.",
        ],
      },
      {
        h2: "Paiements : acompte, balance et protection contractuelle",
        paragraphs: [
          "Le standard du marché est 30 % d'acompte / 70 % avant expédition. Ce solde avant expédition est votre seul levier réel : c'est lui qui finance l'inspection finale. Ne versez jamais le solde avant que le contrôle qualité (interne ou tiers) ait été réalisé sur le lot complet, selon des critères écrits et un échantillonnage défini à l'avance. Un fournisseur qui exige 100 % avant production, ou qui refuse toute inspection avant solde, vous dit quelque chose d'important.",
          "Côté contrat, les clauses qui changent réellement la donne : définition du golden sample comme référence contractuelle, pénalités de retard à taux réaliste, droit d'inspection à tout moment, et procédure de non-conformité (tri, retouche, remplacement ou remboursement). Un contrat en anglais signé par l'entité juridique exacte — pas une société sœur — vaut mieux qu'un long contrat signé par la mauvaise entité.",
        ],
      },
      {
        h2: "Plan B : la règle d'or — toujours deux fournisseurs qualifiés",
        paragraphs: [
          "Le fournisseur le plus fiable peut dérailler : changement de direction, perte d'un opérateur clé, priorité donnée à un client plus gros, incendie d'atelier. La protection n'est pas la confiance, c'est la redondance. Qualifiez systématiquement un deuxième fournisseur pour chaque produit structurant : échantillons validés, prix comparés, process de lancement compris. Le coût de cette double qualification est dérisoire comparé au coût d'une rupture d'approvisionnement en pleine saison.",
          "En pratique, cette discipline change aussi votre négociation : un fournisseur sait, sans qu'on le lui dise, qu'il n'est pas votre seule option. C'est le meilleur régulateur de comportement qui existe.",
        ],
      },
    ],
    pillarFaqs: [
      {
        q: "Comment vérifier qu'un fournisseur chinois existe légalement ?",
        a: "Demandez la licence commerciale unifiée (18 chiffres) et vérifiez-la sur les registres officiels chinois : objet social, capital enregistré, adresse, année de création et historique des changements de nom. Complétez par un appel vidéo depuis les locaux. Ces vérifications prennent moins d'un jour.",
      },
      {
        q: "Comment distinguer une usine d'une trading company sur Alibaba ?",
        a: "Regardez la portée d'activité sur la licence (fabrication vs commerce), l'adresse (zone industrielle vs bureaux), la cohérence des photos de production avec votre catégorie, et la réaction à une demande de visite. Un profil qui prétend fabriquer plusieurs catégories de produits sans lien entre elles est rarement une usine.",
      },
      {
        q: "Quel acompte payer à un fournisseur en Chine ?",
        a: "Le standard est 30 % à la commande et 70 % avant expédition. Ne versez le solde qu'après une inspection qualité réalisée sur le lot complet, selon des critères écrits définis à l'avance. Méfiance envers tout fournisseur qui exige 100 % avant production ou refuse l'inspection avant solde.",
      },
      {
        q: "Faut-il visiter l'usine avant de commander en série ?",
        a: "Dès que l'enjeu financier de la relation dépasse quelques milliers d'euros ou qu'elle doit durer, oui — en personne ou via un audit par un tiers local. Un audit vérifie ce que les photos ne montrent pas : cohérence des lignes de production, système qualité interne, traçabilité des matières.",
      },
      {
        q: "Un échantillon conforme garantit-il une série conforme ?",
        a: "Non. L'échantillon valide la compétence d'ingénierie, pas la discipline de production. Les écarts apparaissent en série : matières substituées, tolérances relâchées. D'où l'importance d'un golden sample signé et de points de contrôle pendant la production, pas seulement à la fin.",
      },
    ],
    relatedLinks: [
      { slug: "verifier-fournisseur-alibaba", label: "Vérifier un fournisseur Alibaba avant de payer" },
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

/** Export principal : pages historiques + satellites fusionnées (pas de doublon d'import). */
export const seoPages = [...baseSeoPages, ...newSeoPages];

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
  "verifier-fournisseur-alibaba",
  "tarif-agent-sourcing-chine",
];

export const seoPagesMap = Object.fromEntries(seoPages.map((p) => [p.slug, p]));

export function getSeoPagesForHome() {
  const map = seoPagesMap;
  return seoPagesHomeOrder.map((slug) => map[slug]).filter(Boolean);
}
