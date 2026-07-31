import { useEffect } from "react";
import { Link, useParams, useSearchParams, useLocation } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogsData, blogDateToISO } from "./blogsData";
import { upsertSeoTags } from "./seo-utils";

/** Langue du blog : préfixe /en prioritaire, sinon fallback historique ?lang=en. */
function useBlogLang() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return searchParams.get("lang") === "en" ? "en" : "fr";
}

const homePath = (lang) => (lang === "en" ? "/en/" : "/");
const blogPath = (lang) => (lang === "en" ? "/en/blog" : "/blog");
const postPath = (lang, slug) => (lang === "en" ? `/en/blog/${slug}` : `/blog/${slug}`);

export function BlogIndex() {
  const lang = useBlogLang();
  const blogs = blogsData[lang];

  useEffect(() => {
    const title = lang === "fr" ? "WEMADE | Blog sourcing Europe / Chine" : "WEMADE | Sourcing Europe / China Blog";
    const desc = lang === "fr"
      ? "Articles et analyses exclusifs de WEMADE sur le sourcing, l'import et l'industrie en Chine face au marché européen."
      : "Exclusive insights from WEMADE on sourcing, importing, and industry in China for the European market.";
    const canonicalUrl = lang === "fr" ? "https://wemade.fr/blog" : "https://wemade.fr/en/blog";
    upsertSeoTags({ title, description: desc, canonicalUrl });

    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-page)", color: "var(--slate-900)" }}>
      {/* Blog Navbar Minimal */}
      <nav className="navbar" style={{ background: "rgba(10, 9, 8, 0.95)" }}>
        <div className="navbar-inner" style={{ border: "none", boxShadow: "none" }}>
          <div className="navbar-brand">
            <Link to={homePath(lang)} style={{ color: "white", textDecoration: "none", fontWeight: 700, letterSpacing: "0.2em" }}>WEMADE</Link>
          </div>
          <Link to={homePath(lang)} style={{ color: "var(--slate-300)", textDecoration: "none", fontSize: "0.875rem" }}>
            {lang === "fr" ? "Retour à l'accueil" : "Back to Home"}
          </Link>
        </div>
      </nav>

      <section className="container section" style={{ paddingTop: "8rem" }}>
        <div className="section-label">{lang === "fr" ? "Ressources" : "Resources"}</div>
        <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "3rem", textAlign: "left", color: "var(--slate-900)" }}>
          {lang === "fr" ? "Insights Sourcing & Business" : "Sourcing & Business Insights"}
        </h1>

        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
          {blogs.map(post => (
            <Link to={postPath(lang, post.slug)} key={post.slug} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div style={{ padding: "2rem", borderRadius: "1rem", background: "white", border: "1px solid var(--slate-200)", height: "100%", transition: "all 0.3s ease" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", color: "#111", lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ color: "var(--slate-500)", fontSize: "0.875rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>{post.description}</p>

                <div style={{ display: "flex", gap: "1rem", color: "var(--slate-400)", fontSize: "0.75rem", alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}><Calendar size={14} /> {post.date}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}><Clock size={14} /> {post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const lang = useBlogLang();
  const post = blogsData[lang].find(b => b.slug === slug);

  useEffect(() => {
    if (post) {
      const canonicalUrl = lang === "fr"
        ? `https://wemade.fr/blog/${slug}`
        : `https://wemade.fr/en/blog/${slug}`;
      upsertSeoTags({
        title: `${post.title} | WEMADE`,
        description: post.description,
        canonicalUrl,
      });
      window.scrollTo(0, 0);

      // Inject dynamically JSON-LD for the Article logic (GEO focus)
      let ldJson = document.getElementById("json-ld-article");
      if (!ldJson) {
        ldJson = document.createElement("script");
        ldJson.type = "application/ld+json";
        ldJson.id = "json-ld-article";
        document.head.appendChild(ldJson);
      }
      const isoDate = blogDateToISO(post.date);
      ldJson.innerText = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "author": {
          "@type": "Organization",
          "name": "WEMADE Sourcing"
        },
        "publisher": {
          "@type": "Organization",
          "name": "WEMADE",
          "logo": { "@type": "ImageObject", "url": "https://wemade.fr/favicon.svg" }
        },
        "datePublished": isoDate,
        "dateModified": isoDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      });
    }
  }, [post, slug, lang]);

  if (!post) return <div style={{ padding: "8rem", textAlign: "center" }}>{lang === "fr" ? "Article introuvable." : "Article not found."}</div>;

  return (
    <div style={{ minHeight: "100vh", background: "#fcfcfa", color: "var(--slate-900)" }}>
      {/* Blog Navbar Minimal */}
      <nav className="navbar" style={{ background: "rgba(10, 9, 8, 0.95)" }}>
        <div className="navbar-inner" style={{ border: "none", boxShadow: "none" }}>
          <div className="navbar-brand">
            <Link to={homePath(lang)} style={{ color: "white", textDecoration: "none", fontWeight: 700, letterSpacing: "0.2em" }}>WEMADE</Link>
          </div>
          <Link to={blogPath(lang)} style={{ color: "var(--slate-300)", textDecoration: "none", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <ArrowLeft size={16} /> {lang === "fr" ? "Nos expertises" : "Our expertise"}
          </Link>
        </div>
      </nav>

      <article className="container section" style={{ paddingTop: "8rem", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>{lang === "fr" ? "Blog WEMADE Sourcing" : "WEMADE Sourcing Blog"}</div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1.5rem", color: "#111", lineHeight: 1.2 }}>
            {post.title}
          </h1>

          <div style={{ display: "flex", gap: "1.5rem", color: "var(--slate-500)", fontSize: "0.875rem", borderBottom: "1px solid var(--slate-200)", paddingBottom: "2rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}><Calendar size={16} /> {post.date}</span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}><Clock size={16} /> {post.readTime}</span>
          </div>
        </div>

        <div
          className="blog-content"
          style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--slate-800)" }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div style={{ marginTop: "2rem", padding: "1.25rem", borderRadius: "0.9rem", background: "#fff", border: "1px solid var(--slate-200)" }}>
          <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "#111" }}>
            {lang === "fr" ? "Prêt à sécuriser vos achats en Chine ?" : "Ready to secure your China sourcing?"}
          </h2>
          <p style={{ marginBottom: "1rem", color: "var(--slate-700)" }}>
            {lang === "fr"
              ? "Parlez-nous de votre besoin en 2 minutes, nous revenons avec un plan clair."
              : "Tell us your sourcing need in 2 minutes and we will come back with a clear plan."}
          </p>
          <a href={`${homePath(lang)}#contact`} className="btn-primary">
            {lang === "fr" ? "Demander un audit gratuit" : "Request a free audit"}
          </a>
        </div>
      </article>

      <style>{`
        .blog-content h2 { margin-top: 2.5rem; margin-bottom: 1rem; font-size: 1.75rem; color: #111; font-weight: 700; }
        .blog-content p { margin-bottom: 1.5rem; }
        .blog-content blockquote { padding-left: 1.5rem; border-left: 4px solid var(--accent-500); font-style: italic; color: var(--slate-600); margin: 2rem 0; font-size: 1.25rem; }
        .blog-content ol { padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .blog-content li { margin-bottom: 0.5rem; }
        .blog-content ul { padding-left: 1.5rem; margin-bottom: 1.5rem; }
      `}</style>
    </div>
  );
}
