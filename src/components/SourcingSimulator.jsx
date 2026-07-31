import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, ShieldCheck, Factory, TrendingUp, ArrowRight, CheckCircle2, RefreshCw } from "lucide-react";
import { PREFILL_MESSAGE_KEY } from "./CallbackCta";

export function SourcingSimulator({ lang = "fr", onSelectResult }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("packaging");
  const [volume, setVolume] = useState("medium");
  const [priority, setPriority] = useState("quality");
  const [currentChallenge, setCurrentChallenge] = useState("factory_validation");

  const categories = {
    packaging: { fr: "Packaging Premium & Boîtes", en: "Premium Packaging & Boxes" },
    textile: { fr: "Textile & Produits Promo", en: "Textile & Promo Items" },
    merchandising: { fr: "Merchandising & Objets de Marque", en: "Merchandising & Brand Items" },
    oem_odm: { fr: "OEM / ODM & Sur Mesure", en: "OEM / ODM & Custom Products" },
    accessories: { fr: "Accessoires & B2B Goods", en: "Accessories & B2B Goods" }
  };

  const volumes = {
    small: { fr: "1 000 – 5 000 unités (Test / Niche)", en: "1,000 – 5,000 units (Test / Niche)" },
    medium: { fr: "5 000 – 50 000 unités (Régulier)", en: "5,000 – 50,000 units (Regular)" },
    large: { fr: "+ 50 000 unités (Masse / Volume)", en: "+ 50,000 units (Mass / High Volume)" }
  };

  const priorities = {
    quality: { fr: "Zéro Défaut & Qualité Perçue Premium", en: "Zero Defect & Premium Perceived Quality" },
    margin: { fr: "Optimisation de Marge & Prix Direct Usine", en: "Margin Optimization & Direct Factory Price" },
    speed: { fr: "Délais Stricts & Coordination Logistique", en: "Strict Deadlines & Logistics Coordination" },
    security: { fr: "Vérification Usine & Zéro Risque Virement", en: "Factory Audit & Secure Payment" }
  };

  const challenges = {
    factory_validation: { fr: "Validation des vrais fabricants vs Trading", en: "Validating genuine factories vs. Trading companies" },
    quality_control: { fr: "Taux de défaut élevé ou dérive qualité", en: "High defect rates or quality drift" },
    pricing_transparency: { fr: "Opacité sur les coûts réels et commissions", en: "Opacity on real costs & commissions" },
    logistics_delays: { fr: "Retards de livraison et blocages douaniers", en: "Delivery delays & customs bottlenecks" }
  };

  const calculateResult = () => {
    let auditScore = 95;
    let inspectionType = "PSI AQL Standard (Level II)";
    let hub = "Shanghai & Hangzhou";
    let estimatedMarginBoost = "18% – 28%";

    if (category === "packaging" || category === "oem_odm") {
      inspectionType = "PPI (Matières) + DUPRO (20%) + PSI (AQL Level II)";
      estimatedMarginBoost = "22% – 32%";
    }
    if (volume === "large") {
      inspectionType = "Full Audit Usine ISO + DUPRO + CLM (Chargement Conteneur)";
      estimatedMarginBoost = "25% – 35%";
    }

    return {
      categoryName: categories[category][lang],
      volumeName: volumes[volume][lang],
      priorityName: priorities[priority][lang],
      challengeName: challenges[currentChallenge][lang],
      auditScore,
      inspectionType,
      hub,
      estimatedMarginBoost
    };
  };

  const result = calculateResult();

  const handleApplyToForm = () => {
    const messageText = lang === "fr"
      ? `[Diagnostic Sourcing WEMADE]\nCatégorie : ${result.categoryName}\nVolume : ${result.volumeName}\nPriorité : ${result.priorityName}\nDéfi actuel : ${result.challengeName}\nRecommandation : ${result.inspectionType}`
      : `[WEMADE Sourcing Diagnostic]\nCategory: ${result.categoryName}\nVolume: ${result.volumeName}\nPriority: ${result.priorityName}\nCurrent Challenge: ${result.challengeName}\nRecommendation: ${result.inspectionType}`;

    if (onSelectResult) {
      // Home : le parent pré-remplit le formulaire (état React contrôlé) et scrolle.
      onSelectResult(messageText);
      return;
    }
    // NB : on scope sur #contact car le formulaire Netlify caché d'index.html
    // contient lui aussi un textarea[name="message"] présent sur toutes les pages.
    const formTextarea = document.querySelector('#contact textarea[name="message"]');
    if (formTextarea) {
      formTextarea.value = messageText;
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Pas de formulaire sur cette page (landing SEO) : on stocke le diagnostic
      // et on navigue vers le formulaire de la home, qui le lira au mount.
      try {
        sessionStorage.setItem(PREFILL_MESSAGE_KEY, messageText);
      } catch {
        /* sessionStorage indisponible : on navigue quand même */
      }
      navigate("/#contact");
    }
  };

  return (
    <div className="simulator-card" style={{
      background: "linear-gradient(145deg, #181612, #0c0b0a)",
      border: "1px solid rgba(196, 162, 101, 0.3)",
      borderRadius: "1.5rem",
      padding: "2rem",
      color: "white",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
      maxWidth: "800px",
      margin: "2rem auto"
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ background: "rgba(196, 162, 101, 0.2)", padding: "0.5rem", borderRadius: "0.5rem", color: "#c4a265" }}>
            <Calculator size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>
              {lang === "fr" ? "Simulateur & Diagnostic Sourcing Chine" : "China Sourcing & Diagnostic Simulator"}
            </h3>
            <span style={{ fontSize: "0.8rem", color: "var(--slate-400)" }}>
              {lang === "fr" ? "Évaluez votre stratégie d'achat en 3 clics" : "Evaluate your purchasing strategy in 3 clicks"}
            </span>
          </div>
        </div>
        <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#c4a265", background: "rgba(196, 162, 101, 0.1)", padding: "0.25rem 0.75rem", borderRadius: "9999px" }}>
          Étape {step} / 3
        </div>
      </div>

      {step === 1 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <h4 style={{ fontSize: "1rem", marginBottom: "1rem", color: "var(--slate-200)" }}>
            1. {lang === "fr" ? "Quelle est votre catégorie de produit principale ?" : "What is your main product category?"}
          </h4>
          <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginBottom: "1.5rem" }}>
            {Object.keys(categories).map((catKey) => (
              <button
                key={catKey}
                onClick={() => setCategory(catKey)}
                style={{
                  padding: "0.875rem 1rem",
                  borderRadius: "0.75rem",
                  border: category === catKey ? "2px solid #c4a265" : "1px solid rgba(255, 255, 255, 0.1)",
                  background: category === catKey ? "rgba(196, 162, 101, 0.15)" : "rgba(255, 255, 255, 0.04)",
                  color: "white",
                  textAlign: "left",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {categories[catKey][lang]}
              </button>
            ))}
          </div>

          <h4 style={{ fontSize: "1rem", marginBottom: "1rem", color: "var(--slate-200)" }}>
            {lang === "fr" ? "Volume de commande estimé :" : "Estimated order volume:"}
          </h4>
          <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {Object.keys(volumes).map((volKey) => (
              <button
                key={volKey}
                onClick={() => setVolume(volKey)}
                style={{
                  padding: "0.875rem 1rem",
                  borderRadius: "0.75rem",
                  border: volume === volKey ? "2px solid #c4a265" : "1px solid rgba(255, 255, 255, 0.1)",
                  background: volume === volKey ? "rgba(196, 162, 101, 0.15)" : "rgba(255, 255, 255, 0.04)",
                  color: "white",
                  textAlign: "left",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {volumes[volKey][lang]}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep(2)}
            style={{
              marginTop: "2rem",
              width: "100%",
              padding: "0.875rem",
              borderRadius: "0.75rem",
              background: "#c4a265",
              color: "#0a0908",
              fontWeight: 700,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem"
            }}
          >
            {lang === "fr" ? "Étape suivante" : "Next Step"} <ArrowRight size={18} />
          </button>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <h4 style={{ fontSize: "1rem", marginBottom: "1rem", color: "var(--slate-200)" }}>
            2. {lang === "fr" ? "Quelle est votre priorité stratégique ?" : "What is your main strategic priority?"}
          </h4>
          <div style={{ display: "grid", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {Object.keys(priorities).map((pKey) => (
              <button
                key={pKey}
                onClick={() => setPriority(pKey)}
                style={{
                  padding: "0.875rem 1rem",
                  borderRadius: "0.75rem",
                  border: priority === pKey ? "2px solid #c4a265" : "1px solid rgba(255, 255, 255, 0.1)",
                  background: priority === pKey ? "rgba(196, 162, 101, 0.15)" : "rgba(255, 255, 255, 0.04)",
                  color: "white",
                  textAlign: "left",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer"
                }}
              >
                {priorities[pKey][lang]}
              </button>
            ))}
          </div>

          <h4 style={{ fontSize: "1rem", marginBottom: "1rem", color: "var(--slate-200)" }}>
            {lang === "fr" ? "Quel est votre principal problème actuellement ?" : "What is your current main challenge?"}
          </h4>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {Object.keys(challenges).map((cKey) => (
              <button
                key={cKey}
                onClick={() => setCurrentChallenge(cKey)}
                style={{
                  padding: "0.875rem 1rem",
                  borderRadius: "0.75rem",
                  border: currentChallenge === cKey ? "2px solid #c4a265" : "1px solid rgba(255, 255, 255, 0.1)",
                  background: currentChallenge === cKey ? "rgba(196, 162, 101, 0.15)" : "rgba(255, 255, 255, 0.04)",
                  color: "white",
                  textAlign: "left",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer"
                }}
              >
                {challenges[cKey][lang]}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
            <button
              onClick={() => setStep(1)}
              style={{
                padding: "0.875rem 1.5rem",
                borderRadius: "0.75rem",
                background: "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
            >
              {lang === "fr" ? "Retour" : "Back"}
            </button>
            <button
              onClick={() => setStep(3)}
              style={{
                flex: 1,
                padding: "0.875rem",
                borderRadius: "0.75rem",
                background: "#c4a265",
                color: "#0a0908",
                fontWeight: 700,
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem"
              }}
            >
              {lang === "fr" ? "Générer mon plan d'action" : "Generate Action Plan"} <CheckCircle2 size={18} />
            </button>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "1rem",
            padding: "1.5rem",
            border: "1px solid rgba(196, 162, 101, 0.3)",
            marginBottom: "1.5rem"
          }}>
            <h4 style={{ color: "#c4a265", fontSize: "1.125rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <ShieldCheck size={20} /> {lang === "fr" ? "Recommandation Stratégique WEMADE" : "WEMADE Strategic Recommendation"}
            </h4>

            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
              <div>
                <span style={{ fontSize: "0.75rem", color: "var(--slate-400)" }}>{lang === "fr" ? "Protocole de Contrôle :" : "Inspection Protocol:"}</span>
                <p style={{ fontWeight: 600, fontSize: "0.95rem", margin: "0.25rem 0 0" }}>{result.inspectionType}</p>
              </div>

              <div>
                <span style={{ fontSize: "0.75rem", color: "var(--slate-400)" }}>{lang === "fr" ? "Hubs Opérationnels :" : "Operational Hubs:"}</span>
                <p style={{ fontWeight: 600, fontSize: "0.95rem", margin: "0.25rem 0 0" }}>{result.hub}</p>
              </div>

              <div>
                <span style={{ fontSize: "0.75rem", color: "var(--slate-400)" }}>{lang === "fr" ? "Gain de Marge Estimé :" : "Estimated Margin Boost:"}</span>
                <p style={{ fontWeight: 700, fontSize: "1.1rem", color: "#c4a265", margin: "0.25rem 0 0" }}>{result.estimatedMarginBoost}</p>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <button
              onClick={() => setStep(1)}
              style={{
                padding: "0.875rem 1.25rem",
                borderRadius: "0.75rem",
                background: "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <RefreshCw size={16} /> {lang === "fr" ? "Recommencer" : "Restart"}
            </button>

            <button
              onClick={handleApplyToForm}
              style={{
                flex: 1,
                padding: "0.875rem 1.5rem",
                borderRadius: "0.75rem",
                background: "linear-gradient(135deg, #c4a265, #e6d3af)",
                color: "#0a0908",
                fontWeight: 700,
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem"
              }}
            >
              {lang === "fr" ? "Transmettre au Formulaire de Contact" : "Apply to Contact Form"} <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
