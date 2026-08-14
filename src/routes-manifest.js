/**
 * Manifeste des routes à prerender (SSG) : meta SEO, hreflang et JSON-LD par route.
 * Partagé entre entry-server.jsx et scripts/prerender.mjs (bundlé dans dist-ssr).
 */
import { seoPages } from "./seoPages";
import { blogsData, blogDateToISO } from "./blogsData";

export const SITE_URL = "https://wemade.fr";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const HOME_TITLE = {
  fr: "WEMADE | Sourcing Chine sans les risques : usines vérifiées, qualité contrôlée, marge protégée",
  en: "WEMADE | China sourcing without the risk: verified factories, controlled quality, protected margins"
};

export const HOME_DESCRIPTION = {
  fr: "Société française de sourcing premium : sélection d'usines, négociation des coûts, contrôle qualité et pilotage opérationnel en Chine pour les marques européennes.",
  en: "French sourcing company helping European brands secure factories, negotiate costs, and control quality in China with teams in Shanghai and Hangzhou."
};

const BLOG_INDEX_TITLE = {
  fr: "WEMADE | Blog sourcing Europe / Chine",
  en: "WEMADE | Sourcing Europe / China Blog"
};

const BLOG_INDEX_DESCRIPTION = {
  fr: "Articles et analyses exclusifs de WEMADE sur le sourcing, l'import et l'industrie en Chine face au marché européen.",
  en: "Exclusive insights from WEMADE on sourcing, importing, and industry in China for the European market."
};

function hreflangLinks(pairs) {
  // pairs: { fr: "/chemin", en: "/en/chemin" } (chemins absolus site, sans domaine)
  const links = [];
  if (pairs.fr) links.push({ hreflang: "fr", href: `${SITE_URL}${pairs.fr}` });
  if (pairs.en) links.push({ hreflang: "en", href: `${SITE_URL}${pairs.en}` });
  links.push({ hreflang: "x-default", href: `${SITE_URL}${pairs.fr || pairs.en}` });
  return links;
}

function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`
    }))
  };
}

function faqLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };
}

function articleLd(post, lang, canonicalPath) {
  const isoDate = blogDateToISO(post.date);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    inLanguage: lang === "en" ? "en-US" : "fr-FR",
    author: { "@type": "Organization", name: "WEMADE Sourcing" },
    publisher: {
      "@type": "Organization",
      name: "WEMADE",
      logo: { "@type": "ImageObject", url: "https://wemade.fr/favicon.svg" }
    },
    image: OG_IMAGE,
    datePublished: isoDate,
    dateModified: isoDate,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${canonicalPath}` }
  };
}

/** Liste complète des routes prerenderées (hors /404). */
export function getPrerenderRoutes() {
  const routes = [];

  routes.push({
    url: "/",
    lang: "fr",
    type: "home",
    title: HOME_TITLE.fr,
    description: HOME_DESCRIPTION.fr,
    canonical: `${SITE_URL}/`,
    ogType: "website",
    ogLocale: "fr_FR",
    hreflang: hreflangLinks({ fr: "/", en: "/en" }),
    jsonLd: []
  });

  routes.push({
    url: "/en",
    lang: "en",
    type: "home",
    title: HOME_TITLE.en,
    description: HOME_DESCRIPTION.en,
    canonical: `${SITE_URL}/en`,
    ogType: "website",
    ogLocale: "en_US",
    hreflang: hreflangLinks({ fr: "/", en: "/en" }),
    jsonLd: []
  });

  routes.push({
    url: "/blog",
    lang: "fr",
    type: "blog-index",
    title: BLOG_INDEX_TITLE.fr,
    description: BLOG_INDEX_DESCRIPTION.fr,
    canonical: `${SITE_URL}/blog`,
    ogType: "website",
    ogLocale: "fr_FR",
    hreflang: hreflangLinks({ fr: "/blog", en: "/en/blog" }),
    jsonLd: []
  });

  routes.push({
    url: "/en/blog",
    lang: "en",
    type: "blog-index",
    title: BLOG_INDEX_TITLE.en,
    description: BLOG_INDEX_DESCRIPTION.en,
    canonical: `${SITE_URL}/en/blog`,
    ogType: "website",
    ogLocale: "en_US",
    hreflang: hreflangLinks({ fr: "/blog", en: "/en/blog" }),
    jsonLd: []
  });

  for (const lang of ["fr", "en"]) {
    for (const post of blogsData[lang]) {
      const path = lang === "en" ? `/en/blog/${post.slug}` : `/blog/${post.slug}`;
      const frPath = `/blog/${post.slug}`;
      const enPath = `/en/blog/${post.slug}`;
      routes.push({
        url: path,
        lang,
        type: "article",
        title: `${post.title} | WEMADE`,
        description: post.description,
        canonical: `${SITE_URL}${path}`,
        ogType: "article",
        ogLocale: lang === "en" ? "en_US" : "fr_FR",
        hreflang: hreflangLinks({ fr: frPath, en: enPath }),
        jsonLd: [
          articleLd(post, lang, path),
          breadcrumbLd([
            { name: lang === "en" ? "Home" : "Accueil", path: lang === "en" ? "/en/" : "/" },
            { name: "Blog", path: lang === "en" ? "/en/blog" : "/blog" },
            { name: post.title, path }
          ])
        ]
      });
    }
  }

  for (const page of seoPages) {
    const path = `/${page.slug}`;
    const jsonLd = [
      breadcrumbLd([
        { name: "Accueil", path: "/" },
        { name: page.h1, path }
      ])
    ];
    if (page.pillarFaqs?.length) {
      jsonLd.push(faqLd(page.pillarFaqs));
    }
    routes.push({
      url: path,
      lang: "fr",
      type: "landing",
      title: page.title,
      description: page.description,
      canonical: `${SITE_URL}${path}`,
      ogType: "website",
      ogLocale: "fr_FR",
      hreflang: [
        { hreflang: "fr", href: `${SITE_URL}${path}` },
        { hreflang: "x-default", href: `${SITE_URL}${path}` }
      ],
      jsonLd
    });
  }

  return routes;
}

/** Meta de la page 404 (noindex). */
export const NOT_FOUND_ROUTE = {
  url: "/404",
  lang: "fr",
  type: "not-found",
  title: "Page introuvable | WEMADE",
  description: "Cette page n'existe pas. Retrouvez nos guides sourcing Chine, notre blog et notre formulaire de contact.",
  canonical: `${SITE_URL}/404`,
  robots: "noindex, nofollow",
  ogType: "website",
  ogLocale: "fr_FR",
  hreflang: [],
  jsonLd: []
};
