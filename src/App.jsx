import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  CheckCircle2,
  ChevronRight,
  LayoutGrid,
  Menu,
  PackageCheck,
  PhoneCall,
  X,
  Globe,
  MapPin
} from "lucide-react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { BlogIndex, BlogPost } from "./Blog";
import { SourcingSimulator } from "./components/SourcingSimulator";
import { CaseStudies } from "./components/CaseStudies";
import { NotFound } from "./components/NotFound";
import {
  CALLBACK_LABEL,
  CALLBACK_MESSAGE,
  CALLBACK_INTENT_KEY,
  PREFILL_MESSAGE_KEY,
  StickyCallbackBar
} from "./components/CallbackCta";
import { content } from "./content";
import { getSeoPagesForHome, seoPagesMap } from "./seoPages";
import { upsertSeoTags } from "./seo-utils";
import { HOME_TITLE, HOME_DESCRIPTION } from "./routes-manifest";
import { SITE } from "./config";
import "./App.css";

/* ===== Animation Variants ===== */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.06 } },
  viewport: { once: true, amount: 0.15 }
};

const fadeUpChild = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

/* ===== Particles Component ===== */
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 12}s`,
    duration: `${10 + Math.random() * 8}s`,
    size: `${2 + Math.random() * 3}px`
  }));

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size
          }}
        />
      ))}
    </div>
  );
}

/**
 * App : uniquement des Routes.
 * Le Router est fourni par main.jsx (BrowserRouter, client) ou entry-server.jsx (StaticRouter, SSG).
 */
export default function App({ initialLang }) {
  return (
    <Routes>
      <Route path="/" element={<MainSite initialLang={initialLang} />} />
      <Route path="/en" element={<MainSite initialLang="en" />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/en/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/en/blog/:slug" element={<BlogPost />} />
      <Route path="/:slug" element={<SeoLandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function SeoLandingPage() {
  const { slug } = useParams();
  const page = seoPagesMap[slug || ""];

  useEffect(() => {
    if (!page) return;
    upsertSeoTags({
      title: page.title,
      description: page.description,
      canonicalUrl: `https://wemade.fr/${page.slug}`,
    });
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    document.getElementById("json-ld-pillar-faq")?.remove();
    if (!page?.pillarFaqs?.length) return;
    const node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = "json-ld-pillar-faq";
    node.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.pillarFaqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
    document.head.appendChild(node);
    return () => {
      document.getElementById("json-ld-pillar-faq")?.remove();
    };
  }, [page]);

  if (!page) return <NotFound />;

  return (
    <div className="seo-landing" style={{ minHeight: "100vh", background: "var(--bg-page)", color: "var(--slate-900)" }}>
      <nav className="navbar" style={{ background: "rgba(10, 9, 8, 0.95)" }}>
        <div className="navbar-inner" style={{ border: "none", boxShadow: "none" }}>
          <div className="navbar-brand">
            <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: 700, letterSpacing: "0.2em" }}>
              WEMADE
            </Link>
          </div>
          <Link to="/blog" style={{ color: "var(--slate-300)", textDecoration: "none", fontSize: "0.875rem" }}>
            Blog
          </Link>
        </div>
      </nav>
      <section className="container section" style={{ paddingTop: "5rem" }}>
        <div className="section-label">Guide expert</div>
        <h1 className="section-title">{page.h1}</h1>
        <p className="section-description" style={{ maxWidth: "54rem" }}>{page.intro}</p>
        <div className="faq-grid" style={{ marginTop: "1.5rem" }}>
          {page.points.map((item) => (
            <div key={item} className="faq-card">
              <div className="faq-answer">{item}</div>
            </div>
          ))}
        </div>

        {/* Interactive Simulator Component */}
        <div style={{ marginTop: "3rem" }}>
          <SourcingSimulator lang="fr" />
        </div>

        {page.deepSections?.length ? (
          <article className="seo-deep-content" style={{ maxWidth: "48rem", marginTop: "2.75rem" }}>
            {page.deepSections.map((sec) => (
              <div key={sec.h2} className="seo-deep-block">
                <h2>{sec.h2}</h2>
                {sec.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            ))}
          </article>
        ) : null}

        {page.pillarFaqs?.length ? (
          <div style={{ marginTop: "3rem", maxWidth: "48rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>FAQ Dédiée</div>
            <div className="faq-grid">
              {page.pillarFaqs.map((faq) => (
                <div key={faq.q} className="faq-card">
                  <div className="faq-question">{faq.q}</div>
                  <div className="faq-answer">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {page.relatedLinks?.length ? (
          <div style={{ marginTop: "2rem", maxWidth: "42rem" }}>
            <div className="section-label" style={{ marginBottom: "0.75rem" }}>
              Pour aller plus loin
            </div>
            <ul className="seo-related-list">
              {page.relatedLinks.map((link) => {
                const to = link.href ?? `/${link.slug}`;
                return (
                  <li key={to + link.label}>
                    <Link to={to}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a href="/#contact" className="btn-primary">
            Demander un audit gratuit <ArrowRight />
          </a>
          <Link to="/blog" className="btn-secondary">
            Lire les analyses <ChevronRight />
          </Link>
        </div>
        <p className="cta-microcopy">Réponse sous 24h ouvrées</p>
      </section>
      <StickyCallbackBar lang="fr" />
    </div>
  );
}

/* ===== Main Component ===== */
function MainSite({ initialLang }) {
  const navigate = useNavigate();

  const getInitialLang = () => {
    if (initialLang === "en" || initialLang === "fr") return initialLang;
    if (typeof window !== "undefined") {
      const { pathname, search } = window.location;
      if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
      const params = new URLSearchParams(search);
      return params.get("lang") === "en" ? "en" : "fr";
    }
    return "fr";
  };

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang] = useState(getInitialLang);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const t = content[lang];

  useEffect(() => {
    // Dynamic SEO / GEO updates
    document.documentElement.lang = lang;

    const isEn = lang === "en";
    upsertSeoTags({
      title: HOME_TITLE[lang],
      description: HOME_DESCRIPTION[lang],
      canonicalUrl: isEn ? "https://wemade.fr/en/" : "https://wemade.fr/",
    });
  }, [lang]);

  useEffect(() => {
    // Redirection douce : l'ancien paramètre ?lang=en sur / bascule vers la vraie URL /en/
    if (
      window.location.pathname === "/" &&
      new URLSearchParams(window.location.search).get("lang") === "en"
    ) {
      navigate("/en/", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    // FAQ schema for GEO/AI engines
    let faqScript = document.getElementById("json-ld-faq");
    if (!faqScript) {
      faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.id = "json-ld-faq";
      document.head.appendChild(faqScript);
    }

    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": t.faqs.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a,
        },
      })),
    });

    return () => {
      const node = document.getElementById("json-ld-faq");
      if (node) node.remove();
    };
  }, [lang, t.faqs]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Consomme les intentions stockées par les landings / simulateur (sessionStorage)
    let pendingMessage = "";
    let wantsCallback = false;
    try {
      pendingMessage = sessionStorage.getItem(PREFILL_MESSAGE_KEY) || "";
      wantsCallback = sessionStorage.getItem(CALLBACK_INTENT_KEY) === "1";
      if (pendingMessage) sessionStorage.removeItem(PREFILL_MESSAGE_KEY);
      if (wantsCallback) sessionStorage.removeItem(CALLBACK_INTENT_KEY);
    } catch {
      /* sessionStorage indisponible */
    }

    let combined = "";
    if (wantsCallback) {
      const callbackMsg = CALLBACK_MESSAGE[lang] || CALLBACK_MESSAGE.fr;
      combined = pendingMessage ? `${callbackMsg}\n\n${pendingMessage}` : callbackMsg;
    } else if (pendingMessage) {
      combined = pendingMessage;
    }
    if (combined) setMessage(combined);

    const shouldScroll = Boolean(combined) || window.location.hash === "#contact";
    if (shouldScroll) {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        if (wantsCallback) {
          document.querySelector('#contact input[name="phone"]')?.focus({ preventScroll: true });
        }
      }, 150);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const toggleLang = () => {
    // Bascule vers la vraie URL localisée (le composant est remonté avec la bonne langue)
    navigate(lang === "fr" ? "/en/" : "/");
  };

  const handleCallbackRequest = () => {
    setMessage(CALLBACK_MESSAGE[lang] || CALLBACK_MESSAGE.fr);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      document.querySelector('#contact input[name="phone"]')?.focus({ preventScroll: true });
    }, 600);
  };

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
      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <div className="navbar-brand">
            <div className="navbar-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5L9.5 19L16 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 5L14.5 19L21 5" stroke="url(#brandGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="brandGrad" x1="8" y1="5" x2="21" y2="19" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c4a265"/>
                    <stop offset="1" stopColor="#e6d3af"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="navbar-title">WEMADE</div>
              <div className="navbar-subtitle">France / Europe / China</div>
            </div>
          </div>

          <div className="navbar-links">
            <a href="#services">{t.nav.services}</a>
            <a href="#why">{t.nav.why}</a>
            <a href="#process">{t.nav.process}</a>
            <a href="#simulator">{lang === "fr" ? "Simulateur" : "Simulator"}</a>
            <a href="#cases">{lang === "fr" ? "Cas Clients" : "Cases"}</a>
            <a href="#faq">{t.nav.faq}</a>
            <Link to={lang === "en" ? "/en/blog" : "/blog"}>{t.nav.blog}</Link>
            <a href="#contact">{t.nav.contact}</a>
            {SITE.phone ? (
              <a className="navbar-phone" href={`tel:${SITE.phone}`}>
                <PhoneCall size={15} /> {SITE.phoneDisplay || SITE.phone}
              </a>
            ) : null}
            <button className="lang-toggle-btn" onClick={toggleLang} aria-label="Toggle language">
              <Globe size={16} />
              {lang === "fr" ? "EN" : "FR"}
            </button>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <button className="mobile-menu-btn lang-mobile-toggle" onClick={toggleLang}>
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <button className="mobile-menu-close" onClick={closeMobileMenu} aria-label="Close menu">
          <X size={24} />
        </button>
        <a href="#services" onClick={closeMobileMenu}>{t.nav.services}</a>
        <a href="#why" onClick={closeMobileMenu}>{t.nav.why}</a>
        <a href="#process" onClick={closeMobileMenu}>{t.nav.process}</a>
        <a href="#simulator" onClick={closeMobileMenu}>{lang === "fr" ? "Simulateur" : "Simulator"}</a>
        <a href="#cases" onClick={closeMobileMenu}>{lang === "fr" ? "Cas Clients" : "Cases"}</a>
        <a href="#faq" onClick={closeMobileMenu}>{t.nav.faq}</a>
        <Link to={lang === "en" ? "/en/blog" : "/blog"} onClick={closeMobileMenu}>{t.nav.blog}</Link>
        <a href="#contact" onClick={closeMobileMenu}>{t.nav.contact}</a>
        <button className="lang-toggle-btn-mobile" onClick={() => { toggleLang(); closeMobileMenu(); }}>
          <Globe size={20} /> Switch to {lang === "fr" ? "English" : "Français"}
        </button>
      </div>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-grid-overlay" />
        <Particles />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="hero-content">
          <motion.div {...fadeUp}>
            <div className="hero-badge">
              <BadgeCheck />
              {t.hero.badge}
            </div>

            <h1>
              <span className="gradient-text">{t.hero.title_1}</span>{t.hero.title_2}
            </h1>

            <p className="hero-description">{t.hero.desc}</p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                {t.hero.btn_primary}
                <ArrowRight />
              </a>
              <button type="button" className="btn-secondary" onClick={handleCallbackRequest}>
                {CALLBACK_LABEL[lang] || CALLBACK_LABEL.fr}
                <PhoneCall />
              </button>
              <a href="#simulator" className="btn-secondary">
                {lang === "fr" ? "Simulateur Sourcing" : "Sourcing Simulator"}
                <ChevronRight />
              </a>
            </div>
            <p className="cta-microcopy">
              {lang === "fr" ? "Réponse sous 24h ouvrées" : "Reply within 24 business hours"}
            </p>
            <p className="hero-audit-note">
              {lang === "fr"
                ? "🎯 Premier audit import gratuit (20 min) — sans engagement"
                : "🎯 Free first import audit (20 min) — no commitment"}
            </p>
            {SITE.phone ? (
              <p className="hero-phone-line">
                <a href={`tel:${SITE.phone}`}>
                  <PhoneCall size={15} /> {SITE.phoneDisplay || SITE.phone}
                </a>
              </p>
            ) : null}

            <div className="stats-grid">
              {t.stats.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="stat-value">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="hero-card-outer">
              <div className="hero-card-inner">
                <div className="hero-card-header">
                  <div>
                    <div className="hero-card-label">{t.card.label}</div>
                    <div className="hero-card-title">{t.card.title}</div>
                  </div>
                  <div className="hero-card-tag">{t.card.tag}</div>
                </div>

                <div className="pillar-list">
                  {t.pillars.map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="pillar-card"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                    >
                      <div className="pillar-title">{item.title}</div>
                      <div className="pillar-text">{item.text}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="location-grid">
                  {t.card.locations.map((loc) => (
                    <div className="location-card" key={loc.name}>
                      <div className="location-name">
                        <MapPin /> {loc.name}
                      </div>
                      <p className="location-text">{loc.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== BANDEAU CONFIANCE (juste sous le hero) ===== */}
      <section className="trust-band">
        <div className="container trust-band-inner">
          <span className="trust-band-label">
            {lang === "fr" ? "Ils nous font confiance" : "They trust us"}
          </span>
          <div className="trust-band-items">
            {t.brands_section.items.map((brand) => (
              <span key={brand} className="trust-band-item">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section container" id="services">
        <motion.div {...fadeUp} style={{ maxWidth: "48rem" }}>
          <div className="section-label">{t.services_section.label}</div>
          <h2 className="section-title">{t.services_section.title}</h2>
          <p className="section-description">{t.services_section.desc}</p>
        </motion.div>

        <motion.div className="services-grid" {...staggerContainer}>
          {t.services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} className="service-card" variants={fadeUpChild}>
                <div className="service-icon">
                  <Icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-text">{service.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ===== SOURCING SIMULATOR SECTION ===== */}
      <section className="container section" id="simulator">
        <motion.div {...fadeUp} style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 2rem" }}>
          <div className="section-label">{lang === "fr" ? "Outil de Diagnostic" : "Diagnostic Tool"}</div>
          <h2 className="section-title">{lang === "fr" ? "Simulez votre Opération de Sourcing" : "Simulate Your Sourcing Operation"}</h2>
          <p className="section-description" style={{ margin: "1rem auto 0" }}>
            {lang === "fr"
              ? "Obtenez une recommandation de protocole d'inspection et une estimation d'optimisation en 30 secondes."
              : "Get an inspection protocol recommendation and optimization estimate in 30 seconds."}
          </p>
        </motion.div>

        <SourcingSimulator
          lang={lang}
          onSelectResult={(msg) => {
            setMessage(msg);
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </section>

      {/* ===== CASE STUDIES SECTION ===== */}
      <div id="cases">
        <CaseStudies lang={lang} />
      </div>

      {/* ===== WHY SECTION ===== */}
      <section className="why-section" id="why">
        <div className="container section">
          <div className="why-grid">
            <motion.div {...fadeUp}>
              <div className="section-label">{t.why_section.label}</div>
              <h2 className="section-title">{t.why_section.title}</h2>
              <p className="section-description">{t.why_section.desc}</p>

              <div className="why-model-card">
                <div className="why-model-label">
                  <LayoutGrid /> {t.why_section.model_label}
                </div>
                <p className="why-model-text">{t.why_section.model_text}</p>
              </div>
            </motion.div>

            <motion.div className="diff-grid" {...staggerContainer}>
              {t.differentiators.map((item) => (
                <motion.div key={item} className="diff-card" variants={fadeUpChild}>
                  <div className="diff-card-inner">
                    <CheckCircle2 />
                    <span>{item}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES & PROCESS ===== */}
      <section className="container section">
        <div className="catprocess-grid">
          <motion.div {...fadeUp} className="categories-card">
            <div className="categories-label">{t.categories_section.label}</div>
            <h2 className="categories-title">{t.categories_section.title}</h2>
            <div className="categories-list">
              {t.sectors.map((item, i) => (
                <motion.div
                  key={item}
                  className="category-item"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Boxes />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="process-card" id="process">
            <div className="section-label">{t.process_section.label}</div>
            <h2 className="section-title">{t.process_section.title}</h2>
            <div className="process-steps">
              {t.processSteps.map((item, i) => (
                <motion.div
                  key={item.step}
                  className="process-step"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="step-number">{item.step}</div>
                  <div>
                    <h3 className="step-title">{item.title}</h3>
                    <p className="step-text">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== POSITIONING & CLIENTS ===== */}
      <section className="container" style={{ paddingBottom: "5rem" }}>
        <div className="positioning-grid">
          <motion.div {...fadeUp} className="positioning-card">
            <div className="section-label">{t.positioning_section.label}</div>
            <h2 className="section-title">{t.positioning_section.title}</h2>
            <p className="section-description">{t.positioning_section.desc}</p>
            <div className="trust-grid">
              {t.trustPoints.map((item) => (
                <div key={item} className="trust-item">{item}</div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="clients-card">
            <div className="clients-label">{t.clients_section.label}</div>
            <h2 className="clients-title">{t.clients_section.title}</h2>
            <div className="clients-list">
              {t.idealClients.map((item) => (
                <div key={item} className="client-item">
                  <PackageCheck />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {t.brands_section ? (
          <motion.div {...fadeUp} className="positioning-card" style={{ marginTop: "1.25rem" }}>
            <div className="section-label">{t.brands_section.label}</div>
            <h2 className="section-title">{t.brands_section.title}</h2>
            <p className="section-description">{t.brands_section.intro}</p>
            <div className="trust-grid">
              {t.brands_section.items.map((brand) => (
                <div key={brand} className="trust-item">{brand}</div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </section>

      {/* ===== SEO LANDING PAGES ===== */}
      <section className="container" style={{ paddingBottom: "5rem" }}>
        <motion.div {...fadeUp}>
          <div className="section-label">Pages expertes</div>
          <h2 className="section-title">Guides sourcing : piliers, villes et sujets techniques</h2>
          <p className="section-description">
            Architecture pensée pour le référencement : trois piliers (agent sourcing, contrôle qualité, sourcing PME),
            pages satellites liées entre elles, puis guides par ville et verticaux.
          </p>
        </motion.div>
        <div className="faq-grid" style={{ marginTop: "1.5rem" }}>
          {getSeoPagesForHome().map((p) => (
            <Link key={p.slug} to={`/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <motion.div {...fadeUp} className="faq-card" style={{ height: "100%" }}>
                <div className="faq-question">{p.h1}</div>
                <div className="faq-answer">{p.description}</div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq-section" id="faq">
        <div className="container section">
          <motion.div {...fadeUp} style={{ maxWidth: "48rem" }}>
            <div className="section-label">{t.faq_section.label}</div>
            <h2 className="section-title">{t.faq_section.title}</h2>
          </motion.div>

          <div className="faq-grid">
            {t.faqs.map((item) => (
              <motion.div key={item.q} {...fadeUp} className="faq-card">
                <div className="faq-question">{item.q}</div>
                <div className="faq-answer">{item.a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OFFER ===== */}
      {t.offer_section ? (
        <section className="container section">
          <motion.div {...fadeUp} className="positioning-card" style={{ background: "linear-gradient(135deg,#fff,#f7f5ef)" }}>
            <div className="section-label">{t.offer_section.label}</div>
            <h2 className="section-title">{t.offer_section.title}</h2>
            <p className="section-description">{t.offer_section.desc}</p>
            <div className="trust-grid">
              {t.offer_section.bullets.map((item) => (
                <div key={item} className="trust-item">{item}</div>
              ))}
            </div>
            <a href="#contact" className="btn-primary" style={{ marginTop: "1.25rem", display: "inline-flex" }}>
              {t.offer_section.cta}
              <ArrowRight />
            </a>
            <p className="cta-microcopy">
              {lang === "fr" ? "Réponse sous 24h ouvrées — sans engagement" : "Reply within 24 business hours — no commitment"}
            </p>
          </motion.div>
        </section>
      ) : null}

      {/* ===== CONTACT ===== */}
      <section className="container section" id="contact">
        <motion.div {...fadeUp} className="contact-wrapper">
          <div className="contact-grid">
            <div>
              <div className="contact-label">{t.contact_section.label}</div>
              <h2 className="contact-title">{t.contact_section.title}</h2>
              <p className="contact-description">{t.contact_section.desc}</p>

              <div className="contact-info-grid">
                {t.contactInfo.map((item) => {
                  const Icon = item.icon;
                  const inner = (
                    <>
                      <Icon />
                      {item.text}
                    </>
                  );
                  return item.href ? (
                    <a key={item.text} className="contact-info-item" href={item.href}>
                      {inner}
                    </a>
                  ) : (
                    <div key={item.text} className="contact-info-item">
                      {inner}
                    </div>
                  );
                })}
                {SITE.phone ? (
                  <a className="contact-info-item" href={`tel:${SITE.phone}`}>
                    <PhoneCall />
                    {SITE.phoneDisplay || SITE.phone}
                  </a>
                ) : null}
              </div>
            </div>

            <div className="contact-form-wrapper">
              {isSubmitted ? (
                <div className="success-message" style={{ textAlign: "center", padding: "3rem 1rem", color: "white" }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}><CheckCircle2 size={48} color="var(--accent-500)" /></div>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{lang === "fr" ? "Demande envoyée" : "Request sent"}</h3>
                  <p style={{ color: "var(--slate-300)" }}>{lang === "fr" ? "Nous reviendrons vers vous très rapidement." : "We will get back to you shortly."}</p>
                </div>
              ) : (
                <form className="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleFormSubmit}>
                  <input type="hidden" name="form-name" value="contact" />
                  <p style={{ display: "none" }}>
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  <input className="contact-input" placeholder={t.contact_section.form.name} name="name" required />
                  <input className="contact-input" placeholder={t.contact_section.form.email} type="email" name="email" required />
                  <input className="contact-input" placeholder={t.contact_section.form.phone} type="tel" name="phone" />
                  <textarea
                    className="contact-input contact-textarea"
                    placeholder={t.contact_section.form.message}
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button type="submit" className="btn-submit">
                    {t.contact_section.form.submit}
                    <ArrowRight />
                  </button>
                  <p className="cta-microcopy" style={{ textAlign: "center", marginTop: "0.75rem" }}>
                    {lang === "fr" ? "Réponse sous 24h ouvrées" : "Reply within 24 business hours"}
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Building2 />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
              <span><strong>WEMADE</strong> — wemade.fr</span>
              <span className="footer-tagline">{t.footer_tag}</span>
              <span className="footer-contact">
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                {SITE.phone ? (
                  <>
                    {" • "}
                    <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay || SITE.phone}</a>
                  </>
                ) : null}
              </span>
            </div>
          </div>
          <div className="footer-legal">{t.footer}</div>
        </div>
      </footer>

      <StickyCallbackBar lang={lang} onRequest={handleCallbackRequest} />
    </div>
  );
}
