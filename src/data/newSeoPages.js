/**
 * Nouvelles pages SEO (satellites) — à fusionner dans ../seoPages.js.
 * Structure identique aux entrées de seoPages.js :
 * slug, title, description, h1, intro, points, deepSections, pillarFaqs, relatedLinks.
 */

export const newSeoPages = [
  {
    slug: "verifier-fournisseur-alibaba",
    title: "Vérifier un fournisseur Alibaba : méthode | WEMADE",
    description:
      "Vérifier un fournisseur Alibaba avant le premier paiement : licence, usine réelle ou trading, audit, échantillons. Méthode et checklist en 12 points.",
    h1: "Vérifier un fournisseur Alibaba : la méthode qui protège votre premier paiement",
    intro:
      "Vous avez trouvé un fournisseur Alibaba prometteur, le devis est compétitif, et l'acompte de 30 % vous tend les bras. C'est exactement à ce moment-là que tout se joue. En plus de 15 ans d'accompagnement d'importateurs européens — de la PME aux marques comme Haribo ou Zadig & Voltaire — nous avons constaté un fait simple : la quasi-totalité des litiges aurait pu être évitée par une vérification sérieuse avant le premier paiement. Ce guide vous donne la méthode complète, couche par couche.",
    points: [
      "Décoder les badges Alibaba (Gold Supplier, Trade Assurance) sans naïveté",
      "Vérifier l'existence légale et distinguer usine réelle / trading company",
      "Utiliser l'appel vidéo, les documents et l'audit terrain comme filtres",
      "Valider par les échantillons et l'inspection avant tout paiement du solde",
    ],
    deepSections: [
      {
        h2: "Pourquoi la majorité des problèmes d'import naît avant le premier paiement",
        paragraphs: [
          "Sur Alibaba comme ailleurs, un litige d'import se gagne rarement après coup : il se perd au moment de la sélection. Commande non conforme, fournisseur injoignable après l'acompte, qualité instable d'un lot à l'autre — dans la grande majorité des dossiers que nous reprenons en main, le signal d'alerte existait déjà, mais personne n'avait pris le temps de le lire.",
          "La raison est structurelle : Alibaba est une place de marché, pas un garant. La plateforme met en relation, monétise la visibilité des vendeurs et propose des mécanismes de protection encadrés. Elle ne vérifie ni la capacité réelle de production, ni la santé financière, ni la culture qualité de l'usine. Ce travail vous incombe — ou incombe à un partenaire présent sur le terrain.",
          "Bonne nouvelle : vérifier un fournisseur Alibaba est une discipline, pas un art. Avec une méthode en couches — signaux faibles, documents légaux, échanges ciblés, validation terrain — vous éliminez la plupart des risques avant qu'ils ne vous coûtent quoi que ce soit.",
        ],
      },
      {
        h2: "Gold Supplier, Trade Assurance, ancienneté : ce que les signaux veulent vraiment dire",
        paragraphs: [
          "Gold Supplier est un abonnement payant. Il signifie que le vendeur a payé Alibaba pour un statut premium et passé une vérification basique d'existence, généralement documentaire. C'est un filtre minimal, pas un label de fiabilité : une arnaque bien financée peut être Gold Supplier.",
          "Trade Assurance est un programme de protection des transactions : Alibaba peut rembourser si la commande ne respecte pas les termes du contrat passé et payé via la plateforme. Utile, mais limité — il faut que le litige soit documenté, que vos spécifications soient rédigées précisément dans le contrat Alibaba, et que la procédure de réclamation aboutisse, ce qui prend des semaines sans garantie de succès.",
          "Quant au nombre d'années affiché, il indique l'ancienneté du compte, pas celle de l'entreprise : un compte vieux de huit ans peut appartenir à une société créée il y a dix-huit mois. Ces signaux servent à écarter les profils les plus faibles — jamais à valider un fournisseur.",
        ],
      },
      {
        h2: "Vérifier l'existence légale : business license, Qichacha, capital social, scope",
        paragraphs: [
          "Toute entreprise chinoise légitime possède une business license délivrée par l'Administration for Market Regulation. Demandez-la dès le premier échange : un fournisseur sérieux la fournit sous 24 heures. Vérifiez le nom légal en chinois, le numéro unifié de crédit social, la date de création et le capital social déclaré.",
          "Croisez ensuite ces données sur Qichacha ou Tianyancha, les bases publiques chinoises d'informations sur les entreprises. Vous y verrez les litiges en cours, les changements d'actionnariat, le capital réellement versé et le « scope » — le périmètre d'activité officiel. Une société dont le scope ne mentionne aucune fabrication mais qui prétend être une usine vient de vous donner votre premier signal d'alarme.",
          "Point d'attention : le nom anglais affiché sur Alibaba n'a aucune valeur légale. Seul le nom chinois fait foi pour les contrats, les paiements et les vérifications. Si le bénéficiaire du virement diffère du nom légal de la licence, suspendez tout et exigez une explication écrite.",
        ],
      },
      {
        h2: "Usine réelle ou trading company déguisée : comment les distinguer",
        paragraphs: [
          "La distinction compte parce qu'elle détermine qui contrôle la qualité, les délais et le prix. Une trading company achète à une usine que vous ne connaîtrez jamais et revend avec une marge : vous perdez la visibilité et ajoutez une couche de coût. Le problème n'est pas la trading en soi — certaines apportent une vraie valeur — c'est la trading qui prétend être une usine.",
          "Les indices concrets : un nom contenant « Trading », « Import & Export » ou « International » ; un catalogue sans cohérence industrielle (un fabricant de sacs en cuir ne produit pas aussi des LED et des coques de téléphone) ; une adresse dans un immeuble de bureaux en centre-ville plutôt qu'en zone industrielle ; un scope de licence sans mention de production.",
          "Le test le plus simple reste la visite — physique ou vidéo. Une vraie usine vous montre ses lignes en cinq minutes. Un intermédiaire trouvera toujours une raison de reporter.",
        ],
      },
      {
        h2: "Les documents à demander avant tout engagement",
        paragraphs: [
          "La liste minimale : la business license ; les certificats produit adaptés à votre marché (CE, RoHS, REACH, selon la catégorie) avec les rapports de test complets et pas seulement le certificat ; les rapports d'audit sociaux ou qualité existants (ISO 9001, BSCI, Sedex) en vérifiant l'émetteur et la date ; des références export — connaissances d'embarquement anonymisées ou clients occidentaux joignables.",
          "Sur les certificats, soyez intraitable : un certificat CE sans rapport d'un laboratoire identifiable ne vaut rien — des faux certificats s'achètent en ligne pour quelques dizaines d'euros. Exigez le rapport complet et vérifiez que le modèle testé correspond au produit que vous achetez.",
          "Un fournisseur qui rechigne à fournir des documents standards n'est pas « prudent », il est à risque. Chez WEMADE, cette revue documentaire est systématique avant même qu'un fournisseur n'entre sur une short-list.",
        ],
      },
      {
        h2: "L'appel vidéo usine : les 10 questions qui piègent un intermédiaire",
        paragraphs: [
          "Exigez un appel vidéo en direct depuis l'atelier, pas depuis un bureau avec un logo derrière. Puis posez ces dix questions : 1) Pouvez-vous me montrer la ligne de production maintenant, en direct ? 2) Combien de lignes tournent et quelle est votre capacité mensuelle sur ce produit ? 3) Quelles machines réalisent l'étape critique de fabrication ? 4) Quelle part de la production est sous-traitée, et à qui ? 5) Quel est votre taux de défauts interne et comment le mesurez-vous ?",
          "6) Pouvez-vous me montrer la zone de stockage des matières premières ? 7) Pour quels clients européens produisez-vous actuellement — montrez-moi un produit en cours ? 8) Qui est votre responsable qualité, et puis-je lui parler ? 9) Quel est le délai réel entre l'acompte et l'expédition pour une commande comme la mienne ? 10) Acceptez-vous un audit sur place par un tiers de mon choix ?",
          "Un intermédiaire hésitera, cherchera quelqu'un au téléphone ou répondra par des généralités. Une vraie usine répond avec des chiffres, des noms et des images — parce qu'elle vit ces questions chaque jour.",
        ],
      },
      {
        h2: "L'audit sur place : ce qu'un audit physique révèle qu'Alibaba ne montrera jamais",
        paragraphs: [
          "Rien ne remplace la présence physique. Un audit révèle ce qu'aucune fiche Alibaba ne montrera : le nombre réel d'employés et de lignes — souvent très inférieur à ce qui est annoncé —, l'état des équipements, l'organisation du contrôle qualité interne, les conditions de travail, et surtout si le nom sur le portail correspond à la société qui vous facture.",
          "Un audit d'usine sérieux couvre la capacité, le système qualité, la conformité documentaire et la situation financière apparente. Il se conclut par un rapport exploitable pour décider : poursuivre, exiger des correctifs, ou passer au fournisseur suivant. C'est exactement la mission que nos équipes de Shanghai et Hangzhou réalisent chaque semaine pour des clients comme Haribo, Ekoi ou Zadig & Voltaire.",
          "Un fournisseur qui refuse un audit annoncé vous donne déjà sa réponse. Celui qui l'accepte avec des conditions absurdes — pas d'accès aux lignes, pas de photos — vous la donne aussi.",
        ],
      },
      {
        h2: "Les échantillons : la méthode de validation avant production",
        paragraphs: [
          "L'échantillon n'est pas une formalité, c'est un test de processus. Commandez-le selon votre cahier des charges complet — matières, tolérances, marquage, emballage — et chronométrez tout : délai de production, qualité de communication, exactitude par rapport aux spécifications. Un fournisseur qui livre un échantillon approximatif livrera une production catastrophique.",
          "Sur les produits sensibles, faites vérifier l'échantillon par un laboratoire indépendant. Validez ensuite un golden sample signé et daté, conservé en double exemplaire : c'est la référence objective qui tranchera tout litige qualité lors de l'inspection finale avant le solde.",
        ],
      },
      {
        h2: "Checklist récapitulative : 12 points avant de payer un fournisseur Alibaba",
        paragraphs: [
          "1) Business license obtenue et cohérente avec le bénéficiaire du paiement. 2) Vérification Qichacha : ancienneté, capital, litiges, scope « fabrication ». 3) Adresse en zone industrielle, pas dans un bureau commercial. 4) Catalogue cohérent avec une vraie spécialisation industrielle. 5) Certificats produit avec rapports de test vérifiables. 6) Références export occidentales identifiables.",
          "7) Appel vidéo en direct dans l'atelier effectué. 8) Réponses précises sur capacité, sous-traitance et taux de défauts. 9) Audit sur place réalisé ou planifié par un tiers indépendant. 10) Échantillon conforme validé, golden sample signé. 11) Contrat écrit : spécifications, délais, pénalités, Incoterms, paiement échelonné. 12) Inspection qualité prévue avant le paiement du solde.",
          "Vous pouvez conduire ces vérifications seul — ou les déléguer à une équipe qui les pratique chaque semaine. WEMADE vérifie pour vous les fournisseurs que vous avez déjà identifiés : revue documentaire, audit sur place par nos bureaux de Shanghai et Hangzhou, puis négociation et contrôle qualité si vous poursuivez. Demandez votre audit import gratuit de 20 minutes pour cadrer la mission.",
        ],
      },
    ],
    pillarFaqs: [
      {
        q: "Alibaba Trade Assurance suffit-elle à sécuriser ma commande ?",
        a: "Non. Trade Assurance couvre les commandes passées et payées via la plateforme, sur la base des termes déclarés dans le contrat Alibaba. Si vos spécifications ne sont pas rédigées précisément ou si le défaut est discutable, la réclamation peut échouer — et la procédure prend de toute façon plusieurs semaines. C'est un filet, pas une stratégie : il ne remplace ni la vérification du fournisseur, ni l'inspection qualité avant le solde.",
      },
      {
        q: "Combien coûte un audit d'usine en Chine ?",
        a: "Le coût dépend de la profondeur de l'audit — vérification documentaire simple ou audit complet capacité / qualité / conformité —, de la localisation et du secteur. Comptez globalement de quelques centaines à quelques milliers d'euros, à comparer au montant de l'acompte que vous vous apprêtez à verser. Chez WEMADE, l'audit est dimensionné selon l'enjeu de votre commande et chiffré avant mission.",
      },
      {
        q: "Peut-on se fier aux avis et notes sur Alibaba ?",
        a: "Avec prudence. Les avis portent sur des transactions passées via la plateforme, souvent de petites commandes, et ne disent rien de la capacité industrielle ni de la tenue qualité sur vos volumes. Utilisez-les comme un signal parmi d'autres, jamais comme critère de décision.",
      },
      {
        q: "Que faire si le fournisseur refuse l'audit ?",
        a: "Considérez le refus comme une information, pas comme un blocage logistique. Un fabricant légitime n'a rien à cacher et accueille les audits — c'est même un signe de sérieux aux yeux des clients professionnels. Si le refus est catégorique, passez au fournisseur suivant : l'offre est large.",
      },
      {
        q: "Une trading company est-elle toujours à éviter ?",
        a: "Non. Une trading assumée peut apporter de la valeur : consolidation multi-usines, gestion de petits volumes, interface simplifiée. Le vrai risque, c'est l'intermédiaire qui se fait passer pour l'usine — vous payez une marge cachée sans visibilité sur la production. L'exigence porte sur la transparence, pas sur le statut juridique.",
      },
      {
        q: "WEMADE peut-il vérifier un fournisseur que j'ai déjà trouvé sur Alibaba ?",
        a: "Oui. Nous intervenons régulièrement sur des fournisseurs déjà identifiés par nos clients : revue documentaire, vérification légale, audit sur place par nos équipes de Shanghai et Hangzhou, puis négociation et contrôle qualité si vous décidez de poursuivre. Un échange de 20 minutes suffit à cadrer la mission — demandez votre audit import gratuit.",
      },
    ],
    relatedLinks: [
      { slug: "audit-usine-chine", label: "Audit usine en Chine : sécuriser votre fournisseur" },
      { slug: "controle-qualite-chine", label: "Contrôle qualité avant expédition" },
      { slug: "fournisseur-chine-fiable", label: "Trouver un fournisseur fiable en Chine" },
      { slug: "agent-sourcing-chine-france", label: "Agent sourcing Chine : guide complet" },
      { href: "/blog/comment-trouver-usine-fiable-chine", label: "Article : trouver une usine fiable en Chine" },
    ],
  },

  {
    slug: "tarif-agent-sourcing-chine",
    title: "Tarif agent sourcing Chine : prix, commission | WEMADE",
    description:
      "Combien coûte un agent sourcing en Chine ? Commission, forfait ou mixte : fourchettes réelles, marges cachées à détecter, ROI. Devis avant mission.",
    h1: "Tarif d'un agent sourcing en Chine : le vrai prix de la transparence",
    intro:
      "Combien coûte un agent sourcing en Chine ? La plupart des acteurs évitent la question. Chez WEMADE, nous la posons en premier — parce que la structure de rémunération de votre agent détermine ses incitations, et donc la qualité de vos achats. Voici les modèles du marché, leurs fourchettes réelles, les pièges à détecter et la méthode pour vérifier que vous ne payez pas deux fois.",
    points: [
      "Les 3 modèles du marché : commission (3-10 %), forfait par mission, mixte",
      "Ce qui est réellement inclus — et facturé en plus — dans une commission",
      "Comment détecter les marges cachées et la double rémunération",
      "ROI : le coût de l'agent face au coût d'une erreur de sourcing",
    ],
    deepSections: [
      {
        h2: "Les 3 modèles de rémunération du marché (et leurs fourchettes réelles)",
        paragraphs: [
          "La commission sur les achats : l'agent prélève un pourcentage du montant commandé, généralement entre 3 % et 10 % selon le volume, la complexité produit et l'amplitude de la mission. Plus les volumes sont élevés et récurrents, plus le taux est négociable à la baisse. C'est le modèle le plus répandu — et celui où la transparence est la plus critique.",
          "Le forfait par mission : un prix fixe pour un périmètre défini — recherche de fournisseurs, audit, structuration d'une première commande. Adapté aux projets ponctuels et aux tests de marché, il a l'avantage de la prévisibilité budgétaire : vous savez ce que vous payez avant de commencer.",
          "Le modèle mixte : un forfait de cadrage et de recherche, puis une commission réduite sur les commandes. C'est souvent le format le plus sain : il rémunère le travail amont — celui qui ne se voit pas sur une facture — et aligne l'agent sur la continuité de la relation plutôt que sur un acte unique.",
        ],
      },
      {
        h2: "Ce qui est inclus (et ne l'est pas) dans une commission de sourcing",
        paragraphs: [
          "Une commission sérieuse couvre la recherche et la qualification des usines, la négociation commerciale, la gestion des échantillons, le suivi de production et la coordination des inspections. Elle ne couvre généralement pas : les audits d'usine approfondis, les inspections qualité réalisées par des tiers indépendants, les tests laboratoire, la logistique internationale et les droits de douane.",
          "Exigez une liste écrite. Deux agents à « 5 % » ne vendent pas la même chose : l'un inclut le contrôle avant expédition, l'autre le facture en supplément. Le taux affiché n'a de sens que rapporté au périmètre réel de la mission — c'est d'ailleurs le premier point que nous détaillons dans nos devis, ligne par ligne.",
        ],
      },
      {
        h2: "Les marges cachées : quand l'agent se rémunère deux fois",
        paragraphs: [
          "Le schéma classique : l'agent vous annonce une commission de 5 %, et empoche en parallèle une marge en gonflant le prix usine qu'il vous présente. Vous payez deux fois sans le savoir — et pire, l'agent est incité à choisir l'usine qui maximise sa marge, pas votre rapport qualité / coût / délai.",
          "Les signaux de détection : refus de communiquer le contact direct de l'usine, impossibilité de visiter ou d'auditer le fabricant, prix présentés sans aucun détail, argument « l'usine ne veut pas traiter directement avec vous ». Le test décisif : demandez la transparence sur le prix usine et le droit de connaître le fournisseur final. Un agent sain accepte ; un agent à double rémunération trouvera toujours une excuse.",
        ],
      },
      {
        h2: "Agent sourcing ou faire soi-même : le vrai coût d'une erreur",
        paragraphs: [
          "Faire soi-même semble gratuit. En réalité, comptez le temps de recherche et de qualification — plusieurs semaines sur un premier projet —, les allers-retours échantillons, le décalage horaire, la barrière de la langue. Et surtout le coût d'une erreur : un container non conforme, c'est la marchandise, le fret, la douane et des mois de litige, sans compter les clients perdus entre-temps.",
          "Les erreurs classiques du sourcing en direct : payer 100 % avant expédition, valider une production sans inspection, confondre trading company et usine, accepter un MOQ gonflé faute de négociation. Sur une première commande, une seule de ces erreurs coûte davantage que plusieurs années de commission. En 15 ans d'interventions sur le terrain, c'est le calcul que nous voyons se vérifier dossier après dossier.",
        ],
      },
      {
        h2: "Comment WEMADE est rémunéré : devis avant mission, aucune marge cachée",
        paragraphs: [
          "Notre position est simple : transparence totale, devis écrit avant toute mission, aucune marge sur le prix usine. Nous sommes rémunérés par vous, uniquement par vous — et vous savez exactement pour quoi. Le fournisseur est identifié, le prix négocié est traçable, et vous gardez la main sur la relation si vous le souhaitez.",
          "Ce modèle tient depuis plus de 15 ans parce qu'il aligne nos intérêts avec les vôtres : nous gagnons quand vos achats sont compétitifs et fiables dans la durée, pas quand un intermédiaire s'intercale. C'est ce positionnement — pilotage depuis la France, exécution par nos bureaux de Shanghai et Hangzhou — qui fidélise des marques comme Haribo, Zadig & Voltaire, Ekoi ou Fiducial.",
        ],
      },
      {
        h2: "ROI typique : un cas chiffré sur une commande de 50 000 €",
        paragraphs: [
          "Prenons une commande de 50 000 €. Une négociation conduite par une équipe terrain qui connaît les coûts locaux décroche fréquemment 5 à 10 % sur le prix usine — soit 2 500 à 5 000 € d'économie. Une inspection avant le solde qui évite un taux de défauts de 8 % sur la livraison, c'est 4 000 € de marchandise conforme en plus, sans compter le tri, les retours et la trésorerie immobilisée.",
          "Face à cela, le coût de l'accompagnement — commission ou forfait — relève d'une logique d'investissement mesurable : dans la plupart des dossiers, il se finance sur la seule négociation, et tout le reste — délais tenus, qualité stable, litiges évités — devient du gain net. Le vrai calcul n'est pas « combien coûte l'agent » mais « combien coûte son absence ».",
        ],
      },
      {
        h2: "Les 7 questions à poser à tout agent sourcing avant de signer",
        paragraphs: [
          "1) Comment êtes-vous rémunéré, exactement — par moi, par l'usine, ou les deux ? 2) Pouvez-vous m'envoyer un devis écrit avec le périmètre précis de la mission ? 3) Aurai-je l'identité et le contact direct du fournisseur final ? 4) Que se passe-t-il en cas de non-conformité : qui arbitre, qui paie ? 5) Avez-vous une équipe en Chine capable d'auditer et d'inspecter ? 6) Puis-je échanger avec des clients actuels sur des dossiers comparables ? 7) Quels sont vos délais moyens entre le brief et la première commande ?",
          "Un agent qui répond clairement — et par écrit — à ces sept questions mérite d'être auditionné. Celui qui esquive vient de vous faire économiser une erreur coûteuse. Et si vous voulez une réponse documentée à chacune de ces questions : demandez votre audit import gratuit de 20 minutes, nous cadrerons la mission et son devis ensemble.",
        ],
      },
    ],
    pillarFaqs: [
      {
        q: "Quelle commission est normale pour un agent sourcing en Chine ?",
        a: "Le marché se situe généralement entre 3 % et 10 % du montant des achats, selon le volume, la complexité du produit et l'amplitude de la mission — recherche seule ou suivi complet avec qualité. Au-delà du taux, c'est le périmètre inclus et l'absence de marge cachée qui font le vrai prix.",
      },
      {
        q: "Pourquoi certains agents sont-ils « gratuits » ?",
        a: "Parce qu'ils ne le sont pas. Un agent gratuit se rémunère côté usine — marge sur le prix présenté ou commission reversée par le fournisseur — que vous payez indirectement, sans visibilité ni alignement d'intérêts. Si un service semble gratuit, demandez qui le paie et comment.",
      },
      {
        q: "Y a-t-il un minimum de commande pour travailler avec un agent sourcing ?",
        a: "Souvent, oui — directement via un montant minimal de mission, ou indirectement via les MOQ des usines. Un agent structuré vous dit franchement si votre projet est économiquement viable. Chez WEMADE, l'audit import gratuit de 20 minutes sert précisément à cadrer cette faisabilité avant tout engagement.",
      },
      {
        q: "Peut-on payer un agent sourcing à la mission plutôt qu'à la commission ?",
        a: "Oui, c'est le modèle forfaitaire : la recherche de fournisseurs, l'audit ou la structuration d'une première commande se facturent volontiers à la mission. C'est même le format recommandé pour tester un marché ou un nouveau fournisseur avant de s'engager sur du volume récurrent.",
      },
      {
        q: "Comment vérifier qu'il n'y a pas de marge cachée ?",
        a: "Trois exigences : l'identité du fournisseur final, la traçabilité du prix usine — devis ou contrat visible — et le droit d'auditer ou de visiter la production. Un agent transparent accepte les trois par écrit. Si l'une est refusée, partez du principe qu'une marge existe quelque part.",
      },
    ],
    relatedLinks: [
      { slug: "agent-sourcing-chine-france", label: "Agent sourcing Chine en France : guide complet" },
      { slug: "transparence-sourcing-chine", label: "Transparence des coûts et commissions" },
      { slug: "sourcing-chine-pme", label: "Sourcing Chine PME : méthode et budget" },
      { slug: "import-chine-pme", label: "Import Chine PME : méthode complète" },
      { href: "/blog/honoraires-agent-sourcing-chine-risques", label: "Article : honoraires, commissions et risques" },
    ],
  },
  {
    slug: "sourcing-textile-chine",
    title: "Sourcing Textile Chine : usines vérifiées, qualité premium | WEMADE",
    description: "Sourcing textile en Chine pour marques européennes : sélection d'usines certifiées, contrôle qualité sur chaîne, et logistique (sportswear, premium, mode).",
    h1: "Sourcing Textile en Chine : sécuriser la qualité et les délais",
    intro: "Le textile est l'une des industries les plus complexes à sourcer en Chine : la moindre variation de matière, de coupe ou de couleur impacte immédiatement la perception de votre marque. Avec des clients comme Zadig & Voltaire, Ekoi et Sweet Pants, WEMADE possède une véritable expertise dans le sourcing textile, de la pré-production au contrôle qualité final.",
    points: [
      "Sélection d'usines textiles spécialisées (sportswear, prêt-à-porter, accessoires)",
      "Gestion rigoureuse des échantillons et golden samples",
      "Contrôles qualité poussés : inspection sur chaîne et finale (AQL)",
      "Prise en charge des normes européennes et éco-certifications (Oeko-Tex, etc.)"
    ],
    deepSections: [
      {
        h2: "Les spécificités du sourcing textile en Chine",
        paragraphs: [
          "Le succès d'une collection repose sur l'alignement parfait entre votre cahier des charges stylistique et la réalité de la production. En Chine, l'écosystème textile est immense et très spécialisé par région. Une usine excellente pour de la doudoune technique ne sera pas forcément compétente pour de la maille fine ou du sportswear seamless.",
          "Notre travail consiste d'abord à identifier le fabricant dont le parc machine, le savoir-faire et l'historique de production correspondent exactement à votre type de vêtement et à vos volumes (MOQ)."
        ]
      },
      {
        h2: "Contrôle Qualité Textile : l'intransigeance avant expédition",
        paragraphs: [
          "Les défauts dans le textile pardonnent peu (fils tirés, asymétries, variations de bain de teinture, mauvais grammage). C'est pourquoi nous mettons en place des inspections rigoureuses à chaque jalon : contrôle des matières premières à réception, inspection en cours de production (DUPRO) pour corriger les dérives sur les premières séries, et inspection finale stricte avant la mise en carton.",
          "Nous appliquons les normes d'inspection AQL avec un focus particulier sur les mesures, la résistance des coutures, et le respect du cahier des charges (labelling, packaging)."
        ]
      }
    ],
    pillarFaqs: [
      {
        q: "Quels sont les MOQ (Minimum de commande) habituels pour le textile en Chine ?",
        a: "Cela dépend fortement du type de vêtement et de matière (si tissu sur stock ou développé sur mesure). Généralement, les usines qualitatives demandent entre 500 et 1000 pièces par modèle/couleur, mais nous négocions ces seuils selon vos prévisionnels annuels."
      },
      {
        q: "Comment garantissez-vous la conformité des matières et teintures ?",
        a: "Nous exigeons des rapports de tests laboratoires (certifications Oeko-Tex, REACH) et nous effectuons des prélèvements aléatoires sur la chaîne de production pour vérifier la composition et la solidité des couleurs au lavage/frottement."
      }
    ],
    relatedLinks: [
      { slug: "controle-qualite-chine", label: "Méthodologie de contrôle qualité Chine" },
      { slug: "agent-sourcing-chine-france", label: "Agent sourcing avec pilotage européen" },
      { slug: "audit-usine-chine", label: "Audit des usines textiles" }
    ]
  },
  {
    slug: "sourcing-electronique-chine",
    title: "Sourcing Électronique Chine : composants, assemblage, normes | WEMADE",
    description: "Sourcing électronique en Chine pour les entreprises européennes : PCB, assemblage PCBA, sourcing de composants, boîtiers plastiques et certifications CE/RoHS.",
    h1: "Sourcing Électronique en Chine : Sécurisez votre chaîne de production",
    intro: "Le sourcing électronique requiert une précision technique absolue. Qu'il s'agisse de sourcer des composants spécifiques (IC, connecteurs), de fabriquer des circuits imprimés (PCB) ou de gérer l'assemblage complet (PCBA) et l'injection plastique des boîtiers, la moindre erreur de spécification peut ruiner un lot entier. WEMADE vous accompagne de Shenzhen à l'Europe avec des ingénieurs qualité spécialisés.",
    points: [
      "Audits d'usines EMS (Electronic Manufacturing Services) spécialisées",
      "Contrôle strict de la nomenclature (BOM) et lutte contre les composants contrefaits",
      "Inspections de fonctionnalités sur banc de test (FCT) et AOI",
      "Accompagnement à la conformité réglementaire (marquage CE, directives RoHS, RED)"
    ],
    deepSections: [
      {
        h2: "L'écosystème de Shenzhen : l'épicentre de l'électronique mondiale",
        paragraphs: [
          "Sourcer de l'électronique en Chine passe inévitablement par le pôle industriel de Shenzhen et de la province du Guangdong. Cependant, naviguer dans cet écosystème demande de différencier les véritables usines d'assemblage des courtiers en composants (brokers).",
          "Notre bureau vérifie non seulement les capacités de CMS (Composants Montés en Surface) de l'usine, mais s'assure également de la fiabilité de leur propre chaîne d'approvisionnement en matières premières."
        ]
      },
      {
        h2: "Tests, Qualité et Protection de la Propriété Intellectuelle (IP)",
        paragraphs: [
          "L'un des risques majeurs du sourcing électronique est la fuite de la propriété intellectuelle. Nous sécurisons vos fichiers Gerber et codes sources via des accords de non-divulgation (NNN) robustes avant tout développement.",
          "Lors de la production, nous validons chaque étape : inspection des PCB nus, tests in-situ (ICT) après assemblage, et tests de fonctionnement complets (FCT) selon vos protocoles stricts avant que la marchandise ne quitte l'usine."
        ]
      }
    ],
    pillarFaqs: [
      {
        q: "Comment éviter les composants contrefaits en Chine ?",
        a: "La clé est la traçabilité. Nous exigeons de nos usines partenaires qu'elles s'approvisionnent uniquement auprès de distributeurs agréés pour les puces critiques (Tier 1), et nous effectuons des contrôles documentaires stricts sur les lots de composants reçus."
      },
      {
        q: "Gérez-vous également la production des boîtiers (plastique ou métal) ?",
        a: "Oui. L'intégration finale nécessite souvent de l'injection plastique ou de l'usinage CNC pour le boîtier. Nous sélectionnons des usines capables de gérer l'assemblage final complet du produit fini (box build) et son packaging."
      }
    ],
    relatedLinks: [
      { slug: "audit-usine-chine", label: "Faire auditer une usine électronique" },
      { slug: "controle-qualite-chine", label: "Inspections qualité FCT et AOI" },
      { slug: "fournisseur-chine-fiable", label: "Éviter les trading companies électroniques" }
    ]
  },
  {
    slug: "sourcing-emballage-chine",
    title: "Sourcing Emballage et Packaging en Chine | WEMADE",
    description: "Sourcing de packaging en Chine : emballages sur-mesure, boîtes rigides, e-commerce, matériaux éco-responsables. Obtenez le meilleur coût unitaire.",
    h1: "Sourcing Emballage en Chine : Valorisez vos produits au meilleur coût",
    intro: "Le packaging est le premier point de contact physique entre votre marque et votre client. Pourtant, sourcer des emballages de qualité européenne à des prix compétitifs reste un défi. Que vous cherchiez des coffrets rigides premium, des packagings d'expédition optimisés pour le e-commerce, ou des solutions éco-conçues, WEMADE sélectionne les meilleures imprimeries et cartonneries chinoises.",
    points: [
      "Sourcing de coffrets rigides, étuis pliants, pochons et calages thermoformés",
      "Développement sur-mesure : pantones, gaufrage, marquage à chaud, soft-touch",
      "Optimisation logistique : réduction du poids volumétrique pour le fret",
      "Solutions durables : carton FSC, encres végétales, plastiques recyclés (PCR)"
    ],
    deepSections: [
      {
        h2: "De la conception à la production de masse",
        paragraphs: [
          "Le développement d'un packaging en Chine commence toujours par un échantillon blanc (white sample) pour valider les dimensions et le calage de votre produit, suivi d'un échantillon imprimé pour valider le rendu colorimétrique (Pantone/CMJN) et les finitions spéciales.",
          "Une fois le « golden sample » validé, la production en série nécessite un suivi pointu de la colorimétrie et de la qualité du collage pour éviter les mauvaises surprises au déballage."
        ]
      },
      {
        h2: "Optimisation du coût de transport : le vrai nerf de la guerre",
        paragraphs: [
          "L'emballage prend beaucoup de place. Importer des boîtes vides d'Asie peut vite devenir prohibitif si le transport n'est pas optimisé. Nous concevons avec nos usines des packagings livrés à plat (flat-pack) ou empilables (nestable) pour maximiser le taux de remplissage des conteneurs, réduisant ainsi drastiquement votre coût unitaire rendu."
        ]
      }
    ],
    pillarFaqs: [
      {
        q: "Quelles sont les quantités minimales (MOQ) pour du packaging sur-mesure ?",
        a: "Le MOQ standard pour des boîtes imprimées sur-mesure ou des coffrets rigides se situe généralement entre 1000 et 3000 unités. Pour des packagings plus standards avec simple impression de logo, les quantités peuvent être négociées à la baisse."
      },
      {
        q: "Proposez-vous du packaging éco-responsable (FSC, biodégradable) ?",
        a: "Absolument. La Chine a considérablement avancé sur les matériaux verts. Nous sourçons régulièrement du carton recyclé, des papiers certifiés FSC, des calages en pulpe moulée (bagasse de canne à sucre) ou des bioplastiques (PLA)."
      }
    ],
    relatedLinks: [
      { slug: "import-emballage-chine", label: "Guide détaillé : Import emballage Chine" },
      { slug: "sourcing-chine-pme", label: "Sourcing global pour les PME" },
      { slug: "agent-sourcing-chine-france", label: "Contactez votre agent français" }
    ]
  }
];
