import { useEffect, useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { landingPagesData } from "../data/landingPagesData";
import { SourcingSimulator } from "./SourcingSimulator";
import "../App.css";

export function SeoLandingPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") === "en" ? "en" : "fr";
  const [openFaq, setOpenFaq] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const pageData = landingPagesData[slug];

  useEffect(() => {
    if (pageData) {
      const pageTitle = pageData.title[lang] || pageData.title.fr;
      const pageDesc = pageData.metaDescription[lang] || pageData.metaDescription.fr;

      document.title = pageTitle;
      document.querySelector('meta[name="description"]')?.setAttribute("content", pageDesc);

      // Set dynamic canonical
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = lang === "fr" 
        ? `https://wemade.fr/${slug}` 
        : `https://wemade.fr/${slug}?lang=en`;

      // Set JSON-LD Schema for the landing page
      let ldJson = document.getElementById("json-ld-seo-landing");
      if (!ldJson) {
        ldJson = document.createElement("script");
        ldJson.type = "application/ld+json";
        ldJson.id = "json-ld-seo-landing";
        document.head.appendChild(ldJson);
      }
      ldJson.innerText = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": pageTitle,
        "description": pageDesc,
        "publisher": {
          "@type": "Organization",
          "name": "WEMADE Sourcing",
          "url": "https://wemade.fr",
          "logo": "https://wemade.fr/favicon.svg"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://wemade.fr/" },
            { "@type": "ListItem", "position": 2, "name": pageTitle, "item": `https://wemade.fr/${slug}` }
          ]
        }
      });

      window.scrollTo(0, 0);
    }
  }, [pageData, slug, lang]);

  if (!pageData) {
    return (
      <div style={{ padding: "8rem 2rem", textAlign: "center", minHeight: "100vh", background: "#fcfcfa" }}>
        <h2>{lang === "fr" ? "Page introuvable." : "Page not found."}</h2>
        <Link to={`/?lang=${lang}`} className="btn-primary" style={{ marginTop: "1rem" }}>
          {lang === "fr" ? "Retour à l'accueil" : "Back to Home"}
        </Link>
      </div>
    );
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => console.error(error));
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-page)", color: "var(--slate-900)" }}>
      {/* Navbar Minimal */}
      <nav className="navbar" style={{ background: "rgba(10, 9, 8, 0.95)" }}>
        <div className="navbar-inner" style={{ border: "none", boxShadow: "none" }}>
          <div className="navbar-brand">
            <Link to={`/?lang=${lang}`} style={{ color: "white", textDecoration: "none", fontWeight: 700, letterSpacing: "0.2em" }}>
              WEMADE
            </Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link to={`/?lang=${lang}`} style={{ color: "var(--slate-300)", textDecoration: "none", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <ArrowLeft size={16} /> {lang === "fr" ? "Accueil" : "Home"}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div className="hero-content" style={{ gridTemplateColumns: "1fr", maxWidth: "900px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="hero-badge" style={{ marginBottom: "1.5rem" }}>
              <ShieldCheck /> WEMADE Sourcing • Marseille / Shanghai / Hangzhou
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              <span className="gradient-text">{pageData.heroTitle[lang] || pageData.heroTitle.fr}</span>
            </h1>

            <p className="hero-description" style={{ fontSize: "1.25rem", maxWidth: "750px" }}>
              {pageData.heroSubtitle[lang] || pageData.heroSubtitle.fr}
            </p>

            <div className="hero-actions" style={{ marginTop: "2rem" }}>
              <a href="#contact" className="btn-primary">
                {lang === "fr" ? "Demander une étude personnalisée" : "Request Custom Audit"} <ArrowRight />
              </a>
              <a href="#simulator" className="btn-secondary">
                {lang === "fr" ? "Lancer le Simulateur" : "Run Simulator"}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="container section" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          className="seo-content"
          style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--slate-800)" }}
          dangerouslySetInnerHTML={{ __html: pageData.content[lang] || pageData.content.fr }}
        />

        {/* Interactive Simulator Section */}
        <div id="simulator" style={{ marginTop: "4rem" }}>
          <SourcingSimulator lang={lang} />
        </div>

        {/* FAQ Accordion if present */}
        {pageData.faqs && pageData.faqs.length > 0 && (
          <div style={{ marginTop: "4rem" }}>
            <div className="section-label">{lang === "fr" ? "FAQ Dédiée" : "Frequently Asked Questions"}</div>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1.5rem" }}>
              {lang === "fr" ? "Questions fréquentes sur ce service" : "Common Questions"}
            </h3>

            <div style={{ display: "grid", gap: "1rem" }}>
              {pageData.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "white",
                    borderRadius: "1rem",
                    border: "1px solid var(--slate-200)",
                    padding: "1.25rem 1.5rem",
                    cursor: "pointer"
                  }}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 700, fontSize: "1.1rem" }}>
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  {openFaq === idx && (
                    <div style={{ marginTop: "1rem", color: "var(--slate-600)", lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Contact Form Section */}
      <section className="container section" id="contact" style={{ paddingTop: "2rem" }}>
        <motion.div className="contact-wrapper">
          <div className="contact-grid">
            <div>
              <div className="contact-label">{lang === "fr" ? "Contact Sourcing" : "Sourcing Contact"}</div>
              <h2 className="contact-title">{lang === "fr" ? "Parlons de votre projet" : "Let's Talk About Your Project"}</h2>
              <p className="contact-description">
                {lang === "fr"
                  ? "Transmettez-nous vos spécifications, volumes et contraintes. Nos équipes de Marseille et Shanghai vous recontactent sous 24h."
                  : "Send us your specifications, volumes, and constraints. Our Marseille and Shanghai teams will respond within 24h."}
              </p>
            </div>

            <div className="contact-form-wrapper">
              {isSubmitted ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem", color: "white" }}>
                  <CheckCircle2 size={48} color="var(--accent-500)" style={{ margin: "0 auto 1rem" }} />
                  <h3 style={{ fontSize: "1.5rem" }}>{lang === "fr" ? "Demande transmise avec succès" : "Request Submitted"}</h3>
                  <p style={{ color: "var(--slate-300)" }}>{lang === "fr" ? "Nous revenons vers vous dans les plus brefs délais." : "We will reach out to you shortly."}</p>
                </div>
              ) : (
                <form className="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleFormSubmit}>
                  <input type="hidden" name="form-name" value="contact" />
                  <p style={{ display: "none" }}><input name="bot-field" /></p>
                  <input className="contact-input" placeholder={lang === "fr" ? "Nom complet *" : "Full Name *"} name="name" required />
                  <input className="contact-input" placeholder={lang === "fr" ? "Société" : "Company"} name="company" />
                  <input className="contact-input" placeholder={lang === "fr" ? "Email *" : "Email *"} type="email" name="email" required />
                  <input className="contact-input" placeholder={lang === "fr" ? "Téléphone" : "Phone"} type="tel" name="phone" />
                  <textarea
                    className="contact-input contact-textarea"
                    placeholder={lang === "fr" ? "Décrivez votre besoin : produit, quantités, prix cible..." : "Describe your needs: product, quantities, target price..."}
                    name="message"
                    required
                  />
                  <button type="submit" className="btn-submit">
                    {lang === "fr" ? "Envoyer la demande" : "Submit Request"} <ArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>WEMADE</strong> — {slug}
          </div>
          <div className="footer-legal">
            WeMade SASU • RCS Marseille 832 419 428 • Marseille, France / Shanghai / Hangzhou
          </div>
        </div>
      </footer>

      <style>{`
        .seo-content h2 { margin-top: 2.5rem; margin-bottom: 1rem; font-size: 1.75rem; color: #111; font-weight: 700; }
        .seo-content h3 { margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.35rem; color: #222; font-weight: 600; }
        .seo-content p { margin-bottom: 1.25rem; }
        .seo-content ul, .seo-content ol { padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .seo-content li { margin-bottom: 0.5rem; }
      `}</style>
    </div>
  );
}
