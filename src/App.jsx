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
  X,
  Globe,
  MapPin,
  TimerReset,
  UserRound
} from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogIndex, BlogPost } from "./Blog";
import { content } from "./content";
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

/* ===== Main Component ===== */
function MainSite() {
  const getInitialLang = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("lang") === "en" ? "en" : "fr";
  };

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState(getInitialLang);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = content[lang];

  useEffect(() => {
    // Dynamic SEO / GEO updates
    document.documentElement.lang = lang;
    
    if (lang === "en") {
      document.title = "WEMADE | Premium Sourcing (France / Europe / China)";
      document.querySelector('meta[name="description"]')?.setAttribute("content", "WEMADE is a French premium sourcing company. With 15 years of experience, we support European brands with our local teams in Shanghai and Hangzhou. Buy better in China.");
    } else {
      document.title = "WEMADE | Sourcing Premium (France / Europe / China)";
      document.querySelector('meta[name="description"]')?.setAttribute("content", "WEMADE est une société française de sourcing premium. Forts de 15 ans d'expérience, nous accompagnons les marques européennes avec nos équipes locales à Shanghai et Hangzhou.");
    }
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const toggleLang = () => {
    const newLang = lang === "fr" ? "en" : "fr";
    setLang(newLang);
    const newUrl = new URL(window.location);
    newUrl.searchParams.set("lang", newLang);
    window.history.pushState({}, "", newUrl);
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
            <a href="#faq">{t.nav.faq}</a>
            <a href="#contact">{t.nav.contact}</a>
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
        <a href="#faq" onClick={closeMobileMenu}>{t.nav.faq}</a>
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
              <a href="#services" className="btn-secondary">
                {t.hero.btn_secondary}
                <ChevronRight />
              </a>
            </div>

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
                  return (
                    <div key={item.text} className="contact-info-item">
                      <Icon />
                      {item.text}
                    </div>
                  );
                })}
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
                  <input className="contact-input" placeholder={t.contact_section.form.company} name="company" />
                  <input className="contact-input" placeholder={t.contact_section.form.email} type="email" name="email" required />
                  <input className="contact-input" placeholder={t.contact_section.form.phone} type="tel" name="phone" />
                  <textarea
                    className="contact-input contact-textarea"
                    placeholder={t.contact_section.form.message}
                    name="message"
                    required
                  />
                  <button type="submit" className="btn-submit">
                    {t.contact_section.form.submit}
                    <ArrowRight />
                  </button>
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
            </div>
          </div>
          <div className="footer-legal">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
