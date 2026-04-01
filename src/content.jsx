import {
  Search,
  Factory,
  Handshake,
  ClipboardCheck,
  ShieldCheck,
  ShipWheel,
  MapPin,
  Globe2,
  TimerReset,
  UserRound,
  Mail
} from "lucide-react";

export const content = {
  fr: {
    lang: "FR",
    nav: {
      services: "Services",
      why: "Pourquoi nous",
      process: "Méthode",
      faq: "FAQ",
      blog: "Blog",
      contact: "Contact"
    },
    hero: {
      badge: "Société française de sourcing avec équipe locale en Chine",
      title_1: "Le partenaire sourcing des marques",
      title_2: " et importateurs européens.",
      desc: "WEMADE accompagne les entreprises qui veulent acheter mieux en Chine grâce à un pilotage structuré en France et une exécution locale à Shanghai et Hangzhou.",
      btn_primary: "Demander un échange",
      btn_secondary: "Découvrir WEMADE"
    },
    card: {
      label: "Présence WEMADE",
      title: "France / Europe / China",
      tag: "Pilotage européen, exécution locale en Chine",
      locations: [
        { name: "Shanghai", text: "Coordination fournisseurs, échanges business, suivi dossiers et arbitrages rapides." },
        { name: "Hangzhou", text: "Présence au cœur d'un écosystème industriel puissant pour exécution et suivi terrain." }
      ]
    },
    services_section: {
      label: "Services",
      title: "Une offre pensée pour des clients exigeants.",
      desc: "WEMADE n'apporte pas simplement des usines. Nous structurons une opération sourcing complète, avec une logique de sélection, de négociation, de contrôle et d'exécution."
    },
    why_section: {
      label: "Pourquoi WEMADE",
      title: "Un niveau de crédibilité, de clarté et d'exécution supérieur.",
      desc: "Le vrai sujet n'est pas seulement de sourcer. Le vrai sujet est de trouver les bons partenaires, d'aligner les conditions, d'éviter les angles morts et de tenir l'exécution jusqu'au bout.",
      model_label: "Le modèle WEMADE",
      model_text: "Une société française, une équipe locale en Chine, une approche premium et une logique business orientée performance plutôt qu'intermédiation opportuniste."
    },
    categories_section: {
      label: "Catégories",
      title: "Ce que nous pouvons sourcer"
    },
    process_section: {
      label: "Méthode",
      title: "Une méthode claire, premium et orientée résultats."
    },
    positioning_section: {
      label: "Positionnement",
      title: "Un sourcing premium, loin de l’intermédiation opportuniste.",
      desc: "WEMADE s'adresse à des clients qui veulent un vrai partenaire d'exécution, capable de parler business, de comprendre les enjeux produit et d'apporter une présence opérationnelle locale."
    },
    clients_section: {
      label: "Pour qui nous travaillons",
      title: "Pour les marques, importateurs et distributeurs qui veulent monter d'un niveau."
    },
    faq_section: {
      label: "FAQ",
      title: "Questions fréquentes"
    },
    contact_section: {
      label: "Contact",
      title: "Parlons de votre projet sourcing.",
      desc: "Décrivez-nous votre produit, vos volumes, vos contraintes qualité, votre prix cible ou votre besoin de développement. Nous reviendrons vers vous avec une approche claire et professionnelle.",
      form: {
        name: "Nom",
        company: "Société",
        email: "Email",
        phone: "Téléphone",
        message: "Décrivez votre besoin : produit, quantités, personnalisation, prix cible, délai, difficulté actuelle",
        submit: "Envoyer la demande"
      }
    },
    footer_tag: "Sourcing premium entre l'Europe et la Chine",
    footer: "WeMade SASU • RCS Marseille 832 419 428 • Marseille, France / Shanghai / Hangzhou",

    /* Arrays */
    services: [
      { icon: Search, title: "Sourcing stratégique", text: "Identification des fabricants les plus pertinents selon votre cahier des charges, vos objectifs de marge, vos volumes et votre niveau d'exigence." },
      { icon: Factory, title: "Vérification fournisseurs", text: "Préqualification et validation des usines pour limiter les risques de mauvaise sélection, d'incohérence technique ou de défaut d'exécution." },
      { icon: Handshake, title: "Négociation & optimisation", text: "Négociation des prix, MOQ, délais, packaging, conditions de paiement et structure de coûts pour améliorer la rentabilité globale." },
      { icon: ClipboardCheck, title: "Suivi de production", text: "Suivi opérationnel des points critiques, coordination fournisseurs, vérifications intermédiaires et anticipation des blocages." },
      { icon: ShieldCheck, title: "Contrôle qualité", text: "Approche terrain pour sécuriser la conformité, la cohérence produit, la qualité perçue et la fiabilité avant expédition." },
      { icon: ShipWheel, title: "Coordination logistique & export", text: "Support sur la communication logistique, la fluidité des échanges et l'alignement des étapes jusqu'au départ marchandise." }
    ],
    stats: [
      { value: "15+", label: "ans d'expérience en Chine" },
      { value: "2", label: "hubs opérationnels : Shanghai & Hangzhou" },
      { value: "EU / CN", label: "pilotage Europe / Chine" },
      { value: "A à Z", label: "du brief à l'expédition" }
    ],
    pillars: [
      { title: "Pilotage européen", text: "Un pilotage clair, structuré et orienté résultats, avec les standards de communication attendus par des clients européens." },
      { title: "Exécution en Chine", text: "Une présence locale concrète pour fluidifier les échanges fournisseurs, accélérer les validations et sécuriser la réalité terrain." },
      { title: "Vision business", text: "Chaque mission est pensée pour améliorer vos achats, votre visibilité projet et votre marge, pas seulement pour obtenir un prix." }
    ],
    sectors: [
      "Packaging personnalisé",
      "Boîtes, coffrets et solutions premium",
      "Textile & produits promotionnels",
      "Merchandising & objets de marque",
      "Accessoires & produits de consommation",
      "OEM / ODM & développement sur mesure"
    ],
    processSteps: [
      { step: "01", title: "Brief & qualification", text: "Nous cadrons précisément votre besoin : produit, niveau qualité, quantités, budget cible, personnalisation, contraintes et délais." },
      { step: "02", title: "Recherche d'usines", text: "Nous sélectionnons les fabricants les plus pertinents, en écartant les options peu sérieuses, mal dimensionnées ou peu cohérentes." },
      { step: "03", title: "Analyse & négociation", text: "Nous analysons les offres, négocions les paramètres clés et clarifions les zones de risque avant toute validation." },
      { step: "04", title: "Exécution & contrôle", text: "Nous accompagnons la production, suivons les points critiques et maintenons la pression opérationnelle jusqu'à l'expédition." }
    ],
    differentiators: [
      "Société française avec équipe locale en Chine",
      "15 ans de pratique du sourcing et de la négociation fournisseurs",
      "Présence opérationnelle à Shanghai et Hangzhou",
      "Communication business fluide et structurée",
      "Approche orientée marge, qualité, délais et exécution",
      "Partenaire de terrain, pas simple apporteur de contacts"
    ],
    trustPoints: [
      "Approche premium et discrète",
      "Réactivité professionnelle",
      "Suivi concret des dossiers",
      "Vision terrain & logique commerciale"
    ],
    faqs: [
      { q: "À qui s'adresse WEMADE ?", a: "Aux marques, importateurs, distributeurs, sociétés de merchandising et entreprises européennes qui veulent acheter en Chine avec plus de contrôle et moins de risques." },
      { q: "Travaillez-vous uniquement sur quelques catégories ?", a: "Nous intervenons sur plusieurs familles de produits, avec une forte valeur ajoutée sur le packaging, le textile, les objets promotionnels, les accessoires et les développements sur mesure." },
      { q: "Quelle est votre différence par rapport à un agent classique ?", a: "Nous vendons une combinaison : vision européenne, exécution locale, logique commerciale et suivi terrain. L'objectif n'est pas seulement de trouver une usine, mais de sécuriser une opération." }
    ],
    idealClients: [
      "Marques européennes qui veulent développer ou sécuriser leur sourcing Chine",
      "Importateurs recherchant plus de fiabilité et de visibilité",
      "Sociétés souhaitant améliorer leur marge sans dégrader la qualité",
      "Entreprises ayant besoin d'un pont fiable entre l'Europe et la Chine"
    ],
    contactInfo: [
      { icon: Mail, text: "gregory@wemade.fr" },
      { icon: Globe2, text: "wemade.fr" },
      { icon: MapPin, text: "Siège : Marseille, France" },
      { icon: MapPin, text: "Bureaux : Shanghai & Hangzhou" }
    ]
  },
  
  en: {
    lang: "EN",
    nav: {
      services: "Services",
      why: "Why Us",
      process: "Method",
      faq: "FAQ",
      blog: "Blog",
      contact: "Contact"
    },
    hero: {
      badge: "French sourcing company with a local team in China",
      title_1: "The sourcing partner for European",
      title_2: " brands and importers.",
      desc: "WEMADE supports companies who demand better purchasing in China through structured European management and direct local execution in Shanghai and Hangzhou.",
      btn_primary: "Request a Meeting",
      btn_secondary: "Discover WEMADE"
    },
    card: {
      label: "WEMADE Presence",
      title: "France / Europe / China",
      tag: "European management, local execution in China",
      locations: [
        { name: "Shanghai", text: "Supplier coordination, business exchanges, project follow-up, and rapid decision-making." },
        { name: "Hangzhou", text: "On-the-ground presence in the heart of a powerful industrial ecosystem for execution." }
      ]
    },
    services_section: {
      label: "Services",
      title: "An offer designed for demanding clients.",
      desc: "WEMADE doesn't just provide factories. We structure a complete sourcing operation, built on rigorous selection, negotiation, control, and execution logic."
    },
    why_section: {
      label: "Why WEMADE",
      title: "A higher level of credibility, clarity, and execution.",
      desc: "The real challenge isn't just sourcing. It's finding the right partners, aligning conditions, avoiding blind spots, and managing execution all the way to completion.",
      model_label: "The WEMADE Model",
      model_text: "A French company, a local team in China, a premium approach, and a performance-oriented business logic rather than opportunistic intermediation."
    },
    categories_section: {
      label: "Categories",
      title: "What we can source"
    },
    process_section: {
      label: "Method",
      title: "A clear, premium, and results-oriented process."
    },
    positioning_section: {
      label: "Positioning",
      title: "Premium sourcing, far from opportunistic intermediation.",
      desc: "WEMADE is designed for clients who want a true execution partner capable of speaking business, understanding product challenges, and bringing local operational presence."
    },
    clients_section: {
      label: "Who we work for",
      title: "For brands, importers, and distributors who want to level up."
    },
    faq_section: {
      label: "FAQ",
      title: "Frequently Asked Questions"
    },
    contact_section: {
      label: "Contact",
      title: "Let's discuss your sourcing project.",
      desc: "Describe your product, volumes, quality constraints, target price, or development needs. We will get back to you with a clear and professional approach.",
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        message: "Describe your needs: product, quantities, customization, target price, deadline, current challenges",
        submit: "Send Request"
      }
    },
    footer_tag: "Premium sourcing between Europe and China",
    footer: "WeMade SASU • RCS Marseille 832 419 428 • Marseille, France / Shanghai / Hangzhou",

    /* Arrays */
    services: [
      { icon: Search, title: "Strategic Sourcing", text: "Identification of the most relevant manufacturers according to your specifications, margin objectives, volumes, and requirements." },
      { icon: Factory, title: "Supplier Verification", text: "Pre-qualification and validation of factories to limit the risks of poor selection, technical inconsistency, or execution failure." },
      { icon: Handshake, title: "Negotiation & Optimization", text: "Negotiation of prices, MOQs, lead times, packaging, payment terms, and cost structuring to improve overall profitability." },
      { icon: ClipboardCheck, title: "Production Follow-up", text: "Operational monitoring of critical points, supplier coordination, intermediate checks, and anticipation of bottlenecks." },
      { icon: ShieldCheck, title: "Quality Control", text: "On-the-ground approach to secure compliance, product consistency, perceived quality, and reliability prior to shipment." },
      { icon: ShipWheel, title: "Logistics & Export Coordination", text: "Support for logistical communication, smooth exchanges, and the alignment of steps right up to cargo departure." }
    ],
    stats: [
      { value: "15+", label: "years of experience in China" },
      { value: "2", label: "operational hubs: Shanghai & Hangzhou" },
      { value: "EU / CN", label: "Europe / China management" },
      { value: "A to Z", label: "from brief to shipment" }
    ],
    pillars: [
      { title: "European Management", text: "Clear, structured, and results-oriented management, with the communication standards expected by European clients." },
      { title: "China Execution", text: "Concrete local presence to streamline supplier exchanges, accelerate approvals, and secure ground reality." },
      { title: "Business Vision", text: "Every mission is designed to improve your purchasing, project visibility, and margins—not just to get a price." }
    ],
    sectors: [
      "Custom Packaging",
      "Boxes, cases, and premium solutions",
      "Textiles & promotional goods",
      "Merchandising & brand items",
      "Accessories & consumer goods",
      "OEM / ODM & custom development"
    ],
    processSteps: [
      { step: "01", title: "Brief & Qualification", text: "We precisely frame your needs: product, quality level, quantities, target budget, customization, constraints, and deadlines." },
      { step: "02", title: "Factory Scouting", text: "We shortlist the most relevant manufacturers, filtering out unreliable, incorrectly sized, or inconsistent options." },
      { step: "03", title: "Analysis & Negotiation", text: "We analyze offers, negotiate key parameters, and clarify risk areas before any validation." },
      { step: "04", title: "Execution & Control", text: "We support production, monitor critical points, and maintain operational pressure until shipment." }
    ],
    differentiators: [
      "French company with a local team in China",
      "15 years of sourcing and supplier negotiation practice",
      "Operational presence in Shanghai and Hangzhou",
      "Smooth, structured business communication",
      "Focus on margins, quality, deadlines, and execution",
      "A true field partner, not just a contact finder"
    ],
    trustPoints: [
      "Premium and discreet approach",
      "Professional responsiveness",
      "Concrete tracking of projects",
      "Field vision & commercial logic"
    ],
    faqs: [
      { q: "Who is WEMADE for?", a: "For European brands, importers, distributors, merchandising companies, and businesses seeking to purchase from China with more control and fewer risks." },
      { q: "Do you only work on specific categories?", a: "We operate across multiple product families, with strong added value in packaging, textiles, promotional items, accessories, and custom developments." },
      { q: "What's the difference between you and a classic agent?", a: "We sell a unique combination: European vision, local execution, commercial logic, and field tracking. The goal isn't just to find a factory, but to secure an operation." }
    ],
    idealClients: [
      "European brands wanting to develop or secure their China sourcing",
      "Importers seeking more reliability and visibility",
      "Companies wanting to improve margins without degrading quality",
      "Businesses needing a reliable bridge between Europe and China"
    ],
    contactInfo: [
      { icon: Mail, text: "gregory@wemade.fr" },
      { icon: Globe2, text: "wemade.fr" },
      { icon: MapPin, text: "HQ: Marseille, France" },
      { icon: MapPin, text: "Offices: Shanghai & Hangzhou" }
    ]
  }
};
