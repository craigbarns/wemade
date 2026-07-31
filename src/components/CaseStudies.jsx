import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldAlert, Award, ChevronRight } from "lucide-react";

export function CaseStudies({ lang = "fr" }) {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: "cosmetics",
      tag: { fr: "Packaging & Cosméceutique", en: "Packaging & Cosmetics" },
      title: {
        fr: "Marque de Cosmétique Premium (Paris) — 100 000 Coffrets Sur Mesure",
        en: "Luxury Cosmetics Brand (Paris) — 100,000 Custom Rigid Boxes"
      },
      problem: {
        fr: "Délai de lancement serré (60 jours) et exigences strictes sur les dorures à chaud et le calage sur-mesure. L'agent précédent avait un taux de défectuosité de 15%.",
        en: "Tight launch deadline (60 days) and strict hot-stamping & foam insert specifications. Previous agent had a 15% defect rate."
      },
      solution: {
        fr: "Sélection d'une usine spécialisée à Hangzhou, audit PPI des matières plastiques et carton, contrôle DUPRO à 20% puis contrôle AQL 0.0/1.5/4.0.",
        en: "Selected a specialized factory in Hangzhou, PPI raw material audit, DUPRO check at 20% completion, followed by AQL 0.0/1.5/4.0 inspection."
      },
      metrics: [
        { label: { fr: "Taux de défectuosité final", en: "Final Defect Rate" }, val: "0.0%" },
        { label: { fr: "Économie sur coût unitaire", en: "Unit Cost Savings" }, val: "-22%" },
        { label: { fr: "Respect du délai livraison", en: "On-Time Delivery" }, val: "100%" }
      ]
    },
    {
      id: "equipment",
      tag: { fr: "Équipement Industriel & OEM", en: "Industrial Equipment & OEM" },
      title: {
        fr: "Distributeur d'Équipements (Lyon) — Négociation Usine & Audit AQL",
        en: "Equipment Distributor (Lyon) — Factory Scouting & AQL Audit"
      },
      problem: {
        fr: "Fournisseur initial proposant des prix surévalués de 30% en se présentant comme usine alors qu'il s'agissait d'une simple société de négoce.",
        en: "Original vendor inflated prices by 30% while posing as a manufacturer, whereas they were merely a trading company."
      },
      solution: {
        fr: "Audit terrain par notre équipe de Shanghai. Identification de la véritable usine de fabrication en direct et négociation des conditions de paiement (30/70 FOB).",
        en: "On-site audit by our Shanghai team. Discovered the actual direct manufacturing plant and negotiated favorable payment terms (30/70 FOB)."
      },
      metrics: [
        { label: { fr: "Marge brute préservée", en: "Gross Margin Saved" }, val: "+28%" },
        { label: { fr: "Anomalies interceptées pré-exp.", en: "Defects Caught Early" }, val: "12" },
        { label: { fr: "Conformité normes CE", en: "CE Compliance" }, val: "Validée" }
      ]
    },
    {
      id: "promo",
      tag: { fr: "Merchandising & Promo", en: "Merchandising & Promo" },
      title: {
        fr: "Groupe Événementiel (Marseille) — 250 000 Objets de Marque",
        en: "Event Operations Group (Marseille) — 250,000 Custom Brand Goods"
      },
      problem: {
        fr: "Impératif absolu de livraison avant un événement national avec risques d'embouteillages douaniers.",
        en: "Hard deadline prior to national campaign launch with high risks of customs bottlenecks."
      },
      solution: {
        fr: "Supervision locale permanente du chargement conteneur (CLM) à Ningbo et coordination logistique express avec le transitaire.",
        en: "Local on-site supervision of container loading (CLM) in Ningbo & expedited logistics coordination with forwarder."
      },
      metrics: [
        { label: { fr: "Délai total respecté", en: "Total Turnaround Time" }, val: "42 Jours" },
        { label: { fr: "Conteneurs sécurisés", en: "Containers Secured" }, val: "4 FCL" },
        { label: { fr: "Satisfaction client", en: "Client Satisfaction" }, val: "100%" }
      ]
    }
  ];

  return (
    <section className="case-studies-section" style={{ padding: "4rem 0", background: "white", borderTop: "1px solid var(--slate-200)" }}>
      <div className="container">
        <div style={{ maxWidth: "48rem", marginBottom: "2.5rem" }}>
          <div className="section-label">{lang === "fr" ? "Études de Cas & Cas Clients" : "Case Studies & Success Stories"}</div>
          <h2 className="section-title">
            {lang === "fr" ? "Résultats réels obtenus sur le terrain." : "Real results achieved on the ground."}
          </h2>
          <p className="section-description">
            {lang === "fr"
              ? "Découvrez comment nous sécurisons la marge, la qualité et l'exécution pour nos clients européens entre Marseille, Shanghai et Hangzhou."
              : "Discover how we secure margin, quality, and execution for European clients between Marseille, Shanghai, and Hangzhou."}
          </p>
        </div>

        {/* Case selector tabs */}
        <div style={{ display: "flex", gap: "0.75rem", overflowX: "auto", paddingBottom: "1rem", marginBottom: "2rem" }}>
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(idx)}
              style={{
                padding: "0.75rem 1.25rem",
                borderRadius: "9999px",
                border: activeCase === idx ? "2px solid #0a0908" : "1px solid var(--slate-200)",
                background: activeCase === idx ? "#0a0908" : "var(--slate-50)",
                color: activeCase === idx ? "white" : "var(--slate-700)",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease"
              }}
            >
              {c.tag[lang]}
            </button>
          ))}
        </div>

        {/* Active Case Card */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: "var(--slate-50)",
            border: "1px solid var(--slate-200)",
            borderRadius: "1.5rem",
            padding: "2rem",
            boxShadow: "var(--shadow-card)"
          }}
        >
          <div style={{ display: "inline-block", background: "rgba(196, 162, 101, 0.15)", color: "#9e7d3b", fontWeight: 700, fontSize: "0.75rem", padding: "0.25rem 0.75rem", borderRadius: "9999px", marginBottom: "1rem" }}>
            {cases[activeCase].tag[lang]}
          </div>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--slate-950)", marginBottom: "1.5rem" }}>
            {cases[activeCase].title[lang]}
          </h3>

          <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginBottom: "2rem" }}>
            <div style={{ background: "white", padding: "1.25rem", borderRadius: "1rem", border: "1px solid var(--slate-200)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#c0392b", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                <ShieldAlert size={18} /> {lang === "fr" ? "Le Défi Initial" : "The Initial Challenge"}
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--slate-600)", lineHeight: 1.6, margin: 0 }}>
                {cases[activeCase].problem[lang]}
              </p>
            </div>

            <div style={{ background: "white", padding: "1.25rem", borderRadius: "1rem", border: "1px solid var(--slate-200)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#27ae60", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={18} /> {lang === "fr" ? "L'Exécution WEMADE" : "The WEMADE Execution"}
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--slate-600)", lineHeight: 1.6, margin: 0 }}>
                {cases[activeCase].solution[lang]}
              </p>
            </div>
          </div>

          {/* Metrics bar */}
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", background: "#0a0908", borderRadius: "1rem", padding: "1.25rem", color: "white" }}>
            {cases[activeCase].metrics.map((m, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#c4a265" }}>{m.val}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--slate-400)", marginTop: "0.25rem" }}>{m.label[lang]}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
