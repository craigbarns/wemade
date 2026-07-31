/* ===== SEO helpers partagés (App.jsx + Blog.jsx) ===== */

export const SITE_URL = "https://wemade.fr";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

function ensureMeta(selector, attrName, attrValue) {
  let node = document.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attrName, attrValue);
    document.head.appendChild(node);
  }
  return node;
}

export function upsertSeoTags({ title, description, canonicalUrl, robots }) {
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[name="title"]')?.setAttribute("content", title);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;

  ensureMeta('meta[property="og:title"]', "property", "og:title").setAttribute("content", title);
  ensureMeta('meta[property="og:description"]', "property", "og:description").setAttribute("content", description);
  ensureMeta('meta[property="og:url"]', "property", "og:url").setAttribute("content", canonicalUrl);
  ensureMeta('meta[property="og:image"]', "property", "og:image").setAttribute("content", OG_IMAGE);
  ensureMeta('meta[property="twitter:title"]', "property", "twitter:title").setAttribute("content", title);
  ensureMeta('meta[property="twitter:description"]', "property", "twitter:description").setAttribute("content", description);
  ensureMeta('meta[property="twitter:image"]', "property", "twitter:image").setAttribute("content", OG_IMAGE);

  if (robots) {
    ensureMeta('meta[name="robots"]', "name", "robots").setAttribute("content", robots);
  } else {
    document.querySelector('meta[name="robots"]')?.remove();
  }
}
