/**
 * Prerender SSG : génère un HTML complet par route dans dist/.
 *
 * 1. Lit dist/index.html (build Vite client) comme template.
 * 2. Rend chaque route via dist-ssr/entry-server.js (renderToString + StaticRouter).
 * 3. Injecte par route : title, description, canonical, hreflang, OG/Twitter,
 *    JSON-LD (Article, BreadcrumbList, FAQPage) et le HTML de l'app dans #root.
 * 4. Régénère dist/sitemap.xml (routes réelles, alternates hreflang, lastmod = build).
 *
 * Prérequis : `vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr`
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");

const { render, getPrerenderRoutes, NOT_FOUND_ROUTE } = await import(
  path.join(distDir, "..", "dist-ssr", "entry-server.js")
);

const SITE_URL = "https://wemade.fr";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const BUILD_DATE = new Date().toISOString().slice(0, 10);

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildHeadBlock(route) {
  const lines = [];
  lines.push(`<title>${esc(route.title)}</title>`);
  lines.push(`<meta name="title" content="${esc(route.title)}" />`);
  lines.push(`<meta name="description" content="${esc(route.description)}" />`);
  if (route.robots) lines.push(`<meta name="robots" content="${route.robots}" />`);
  lines.push(`<link rel="canonical" href="${route.canonical}" />`);
  for (const link of route.hreflang) {
    lines.push(`<link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`);
  }
  lines.push(`<meta property="og:type" content="${route.ogType}" />`);
  lines.push(`<meta property="og:url" content="${route.canonical}" />`);
  lines.push(`<meta property="og:title" content="${esc(route.title)}" />`);
  lines.push(`<meta property="og:description" content="${esc(route.description)}" />`);
  lines.push(`<meta property="og:site_name" content="WEMADE" />`);
  lines.push(`<meta property="og:locale" content="${route.ogLocale}" />`);
  lines.push(`<meta property="og:locale:alternate" content="${route.ogLocale === "fr_FR" ? "en_US" : "fr_FR"}" />`);
  lines.push(`<meta property="og:image" content="${OG_IMAGE}" />`);
  lines.push(`<meta property="og:image:width" content="2048" />`);
  lines.push(`<meta property="og:image:height" content="1152" />`);
  lines.push(`<meta property="og:image:type" content="image/jpeg" />`);
  lines.push(`<meta property="twitter:card" content="summary_large_image" />`);
  lines.push(`<meta property="twitter:url" content="${route.canonical}" />`);
  lines.push(`<meta property="twitter:title" content="${esc(route.title)}" />`);
  lines.push(`<meta property="twitter:description" content="${esc(route.description)}" />`);
  lines.push(`<meta property="twitter:image" content="${OG_IMAGE}" />`);
  for (const ld of route.jsonLd) {
    const json = JSON.stringify(ld).replace(/<\//g, "<\\/");
    lines.push(`<script type="application/ld+json">${json}</script>`);
  }
  return lines.join("\n    ");
}

function applyTemplate(route, appHtml) {
  let html = template;
  html = html.replace(/<html lang="[a-z]{2}"/, `<html lang="${route.lang}"`);
  // Retire les balises SEO génériques du template (remplacées par le bloc spécifique route)
  html = html.replace(/[ \t]*<title>[\s\S]*?<\/title>\n?/, "");
  html = html.replace(/[ \t]*<meta name="title"[^>]*\/>\n?/g, "");
  html = html.replace(/[ \t]*<meta name="description"[^>]*\/>\n?/g, "");
  html = html.replace(/[ \t]*<meta property="og:[^"]*"[^>]*\/>\n?/g, "");
  html = html.replace(/[ \t]*<meta property="twitter:[^"]*"[^>]*\/>\n?/g, "");
  html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*"[^>]*\/>\n?/g, "");
  html = html.replace(/[ \t]*<link rel="canonical"[^>]*\/>\n?/g, "");
  html = html.replace("</head>", `    ${buildHeadBlock(route)}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  return html;
}

function outPathFor(url) {
  if (url === "/") return path.join(distDir, "index.html");
  if (url === "/404") return path.join(distDir, "404.html");
  let clean = url.replace(/\/+$/, "");
  if (clean.startsWith("/")) clean = clean.substring(1);
  return path.join(distDir, `${clean}.html`);
}

/* ---------- Sitemap ---------- */

const PRIORITY_BY_TYPE = {
  home: "1.0",
  "blog-index": "0.85",
  article: "0.75",
  landing: "0.85"
};

function buildSitemap(routes) {
  const entries = routes.map((route) => {
    const alternates = route.hreflang
      .map((link) => `    <xhtml:link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`)
      .join("\n");
    return [
      "  <url>",
      `    <loc>${route.canonical}</loc>`,
      `    <lastmod>${BUILD_DATE}</lastmod>`,
      `    <priority>${PRIORITY_BY_TYPE[route.type] || "0.7"}</priority>`,
      alternates,
      "  </url>"
    ].filter(Boolean).join("\n");
  });
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    "",
    entries.join("\n"),
    "</urlset>",
    ""
  ].join("\n");
}

/* ---------- Génération ---------- */

const routes = getPrerenderRoutes();
let count = 0;

for (const route of routes) {
  const appHtml = render(route.url, route.lang);
  const html = applyTemplate(route, appHtml);
  const outPath = outPathFor(route.url);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  count++;
}

// 404 (noindex)
{
  const appHtml = render("/404", "fr");
  const html = applyTemplate(NOT_FOUND_ROUTE, appHtml);
  fs.writeFileSync(outPathFor("/404"), html);
  count++;
}

// Sitemap : routes réelles uniquement (pas de .txt, pas de 404)
const sitemap = buildSitemap(routes);
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(rootDir, "public", "sitemap.xml"), sitemap);

console.log(`[prerender] ${count} pages statiques générées (${routes.length} routes + 404) :`);
for (const route of routes) console.log(`  - ${route.url}`);
console.log("  - /404.html");
console.log(`[prerender] sitemap.xml régénéré (${routes.length} URLs, lastmod=${BUILD_DATE})`);
