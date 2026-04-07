import { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const blogsData = {
  fr: [
    {
      slug: "comment-trouver-usine-fiable-chine",
      title: "Comment trouver une usine fiable en Chine ? (Guide 2026)",
      description: "La sélection d'usine est l'étape la plus critique du sourcing en Chine. Découvrez les méthodes de WEMADE pour éviter les intermédiaires fantômes et valider les vrais fabricants.",
      date: "14 Octobre 2025",
      readTime: "4 min",
      content: `
        <h2>L'illusion d'Alibaba et des agents gratuits</h2>
        <p>Aujourd'hui, sourcer en Chine semble facile. Une recherche sur Alibaba, trois e-mails, et l'affaire est conclue. Mais derrière ces profils se cachent souvent des "Trading Companies" (sociétés de négoce) qui prennent des marges invisibles, ou pire, des usines aux normes douteuses incapables d'assurer la qualité à grande échelle.</p>
        
        <h2>1. Préqualification et audit documentaire</h2>
        <p>Avant même d'engager une discussion commerciale, il est vital d'obtenir le "Business License" de l'entreprise. En Chine, ce document révèle le capital social, la nature exacte de la société (fabrication vs vente) et la date de création. Une usine solide doit pouvoir produire les certificats ISO pertinents pour l'Europe (CE, REACH, RoHS, etc.).</p>
        
        <h2>2. L'importance de l'Audit sur Site</h2>
        <p>Un beau site web ne remplacera jamais l'œil sur le terrain. Nos équipes locales basées à <strong>Shanghai et Hangzhou</strong> effectuent des visites systématiques. Que vérifions-nous ? La capacité de production réelle, la présence de machines en propre, et la robustesse de la chaîne de QA (Quality Assurance) interne.</p>
        
        <h2>3. Communication et vision business</h2>
        <p>Une bonne usine ne dit pas "Oui" à tout. Elle challenge votre cahier des charges, propose des optimisations matérielles et anticipe les problèmes de production. WEMADE pilote cette communication pour s'assurer qu'aucun détail crucial n'est perdu dans la traduction.</p>
        
        <blockquote>Le sourcing ne s'arrête pas à trouver une ligne de production. Il s'agit de trouver un partenaire stratégique de long terme.</blockquote>
      `
    },
    {
      slug: "sourcing-premium-vs-agents-chine",
      title: "Sourcing Premium vs Agents Classiques : Ce que les importateurs ignorent",
      description: "Quelle est la vraie différence entre un agent de sourcing classique et un bureau de sourcing premium structuré entre l'Europe et la Chine ? La réponse réside dans le contrôle et la qualité.",
      date: "28 Octobre 2025",
      readTime: "5 min",
      content: `
        <h2>Le piège du "gratuit"</h2>
        <p>Le marché du sourcing regorge d'agents proposant de sourcer "gratuitement" et de se rémunérer "uniquement sur la production". La réalité ? Leurs commissions sont intégrées et négociées à votre insu avec l'usine. Conséquence : les usines de haute qualité, qui refusent ces marges d'intermédiation opaques, sont écartées par l'agent.</p>

        <h2>Pourquoi opter pour un Sourcing Premium ?</h2>
        <p>Chez WEMADE, notre approche "France / Europe / China" repose sur la transparence la plus totale face aux marques européennes.</p>
        <ol>
          <li><strong>Pilotage Européen :</strong> Nous comprenons les enjeux de vos marques, de vos directions achats et du marché européen.</li>
          <li><strong>Transparence Totale :</strong> Nos honoraires sont clairs. Aucune commission cachée, notre but est d'optimiser VOTRE marge en négociant le prix réel sortie d'usine.</li>
          <li><strong>Exécution en Chine :</strong> Nos hubs opérationnels à Shanghai et Hangzhou sont là pour exécuter avec force, de la validation des prototypes à l'inspection finale.</li>
        </ol>
        
        <h2>Sécuriser ses achats internationaux</h2>
        <p>Passer d'un simple agent à un véritable bureau d'achat comme WEMADE, c'est reprendre le contrôle total de sa supply chain en Chine, garantissant conformité, qualité et délais face à l'Europe.</p>
      `
    },
    {
      slug: "controle-qualite-securiser-production-chine",
      title: "Contrôle Qualité en Chine : Les 4 étapes clés avant l'export",
      description: "Le sourcing ne sert à rien sans un contrôle qualité rigoureux. Découvrez la méthode d'inspection WEMADE qui permet de sécuriser vos expéditions depuis la Chine.",
      date: "05 Novembre 2025",
      readTime: "3 min",
      content: `
        <h2>Ne faites jamais l'impasse sur l'inspection QC</h2>
        <p>Recevoir un conteneur entier de marchandises défectueuses est le cauchemar de tout importateur européen. Comment éviter le pire ? Par une stratégie d'inspection structurée sur le terrain (Shanghai, Hangzhou, Shenzhen, etc.).</p>

        <h2>1. Pre-Production Inspection (PPI)</h2>
        <p>Avant que la production ne commence, WEMADE vérifie les matières premières, les composants et la compréhension exacte du "Golden Sample" (l'échantillon parfait validé) par les ouvriers de la ligne d'assemblage.</p>

        <h2>2. During Production Inspection (DUPRO)</h2>
        <p>Contrairement aux agents classiques qui attendent la fin, nos inspecteurs interviennent quand 20% à 30% des produits sont terminés. S'il y a une déviation technique ou un défaut majeur, la production est stoppée, évitant ainsi un gaspillage complet.</p>

        <h2>3. Pre-Shipment Inspection (PSI)</h2>
        <p>L'étape la plus critique, basée sur les standards internationaux AQL (Acceptable Quality Limit). Conformité aux normes européennes, tests de résistance, dimensions, emballage, étiquetage... Tout est examiné.</p>

        <h2>4. Container Loading Monitoring (CLM)</h2>
        <p>Le dernier maillon de la chaîne : la supervision physique du chargement du container. Nous garantissons que le nombre de cartons est exact, que les produits sont manipulés avec soin et que scellé final (plomb) correspond aux documents douaniers.</p>
      `
    }
  ],
  en: [
    {
      slug: "comment-trouver-usine-fiable-chine",
      title: "How to find a reliable factory in China? (2026 Guide)",
      description: "Factory selection is the most critical step of sourcing in China. Discover WEMADE's methods to avoid phantom intermediaries and validate real manufacturers.",
      date: "October 14, 2025",
      readTime: "4 min",
      content: `
        <h2>The illusion of Alibaba and free agents</h2>
        <p>Today, sourcing in China seems easy. One search on Alibaba, three emails, and the deal is done. But behind these profiles often lie "Trading Companies" that take invisible margins, or worse, factories with doubtful standards unable to ensure quality at scale.</p>
        
        <h2>1. Prequalification and documentation audit</h2>
        <p>Before even engaging in commercial discussion, it's vital to obtain the company's Business License. In China, this document reveals the social capital, the exact nature of the company (manufacturing vs. sales), and the date of creation. A solid factory must be able to produce relevant ISO certificates for Europe (CE, REACH, RoHS, etc.).</p>
        
        <h2>2. The importance of On-Site Audits</h2>
        <p>A beautiful website will never replace eyes on the ground. Our local teams based in <strong>Shanghai and Hangzhou</strong> perform systematic visits. What do we check? Actual production capacity, ownership of machinery, and the robustness of the internal QA (Quality Assurance) chain.</p>
        
        <h2>3. Communication and business vision</h2>
        <p>A good factory doesn't say "Yes" to everything. They challenge your specifications, suggest material optimizations, and anticipate production issues. WEMADE leads this communication to ensure no crucial detail is lost in translation.</p>
        
        <blockquote>Sourcing doesn't stop at finding a production line. It's about finding a long-term strategic partner.</blockquote>
      `
    },
    {
      slug: "sourcing-premium-vs-agents-chine",
      title: "Premium Sourcing vs. Classic Agents: What European Importers Ignore",
      description: "What is the real difference between a classic sourcing agent and a premium sourcing office structured between Europe and China? The answer lies in control and quality.",
      date: "October 28, 2025",
      readTime: "5 min",
      content: `
        <h2>The trap of \"free\"</h2>
        <p>The sourcing market is full of agents offering to source \"for free\" and get paid \"only on production.\" The reality? Their commissions are integrated and negotiated without your knowledge with the factory. Consequence: high-quality factories, which refuse these opaque intermediation margins, are sidelined by the agent.</p>

        <h2>Why opt for Premium Sourcing?</h2>
        <p>At WEMADE, our \"France / Europe / China\" approach is based on total transparency towards European brands.</p>
        <ol>
          <li><strong>European Management:</strong> We understand the challenges of your brands, your purchasing departments, and the European market.</li>
          <li><strong>Total Transparency:</strong> Our fees are clear. No hidden commissions; our goal is to optimize YOUR margin by negotiating the real ex-factory price.</li>
          <li><strong>Execution in China:</strong> Our operational hubs in Shanghai and Hangzhou are there to execute with strength, from prototype validation to final inspection.</li>
        </ol>
        
        <h2>Securing international purchases</h2>
        <p>Moving from a simple agent to a true buying office like WEMADE means taking full control of your supply chain in China, guaranteeing compliance, quality, and deadlines for Europe.</p>
      `
    },
    {
      slug: "controle-qualite-securiser-production-chine",
      title: "Quality Control in China: 4 Key Steps Before Export",
      description: "Sourcing is useless without rigorous quality control. Discover the WEMADE inspection method that secures your shipments from China.",
      date: "November 05, 2025",
      readTime: "3 min",
      content: `
        <h2>Never skip the QC inspection</h2>
        <p>Receiving an entire container of defective goods is every European importer's nightmare. How to avoid the worst? Through a structured on-site inspection strategy (Shanghai, Hangzhou, Shenzhen, etc.).</p>

        <h2>1. Pre-Production Inspection (PPI)</h2>
        <p>Before production begins, WEMADE checks raw materials, components, and the exact understanding of the \"Golden Sample\" (the validated perfect sample) by the assembly line workers.</p>

        <h2>2. During Production Inspection (DUPRO)</h2>
        <p>Unlike classic agents who wait until the end, our inspectors intervene when 20% to 30% of production is completed. If there is a technical deviation or a major defect, production is halted, thus avoiding complete waste.</p>

        <h2>3. Pre-Shipment Inspection (PSI)</h2>
        <p>The most critical step, based on international AQL (Acceptable Quality Limit) standards. Compliance with European standards, endurance tests, dimensions, packaging, labeling... Everything is examined.</p>

        <h2>4. Container Loading Monitoring (CLM)</h2>
        <p>The last link in the chain: physical supervision of container loading. We guarantee that the number of boxes is exact, that products are handled with care, and that the final seal (lead) matches customs documents.</p>
      `
    }
  ]
};

export function BlogIndex() {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") === "en" ? "en" : "fr";
  const blogs = blogsData[lang];

  useEffect(() => {
    document.title = lang === "fr" ? "WEMADE | Le Blog Sourcing Europe / Chine" : "WEMADE | Sourcing Europe / China Blog";
    const desc = lang === "fr" 
      ? "Articles et analyses exclusifs de WEMADE sur le sourcing, l'import et l'industrie en Chine face au marché européen."
      : "Exclusive insights from WEMADE on sourcing, importing, and industry in China for the European market.";
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    
    // Dynamic Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = lang === "fr" ? "https://wemade.fr/blog" : "https://wemade.fr/blog?lang=en";

    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-page)", color: "var(--slate-900)" }}>
      {/* Blog Navbar Minimal */}
      <nav className="navbar" style={{ background: "rgba(10, 9, 8, 0.95)" }}>
        <div className="navbar-inner" style={{ border: "none", boxShadow: "none" }}>
          <div className="navbar-brand">
            <Link to={`/?lang=${lang}`} style={{ color: "white", textDecoration: "none", fontWeight: 700, letterSpacing: "0.2em" }}>WEMADE</Link>
          </div>
          <Link to={`/?lang=${lang}`} style={{ color: "var(--slate-300)", textDecoration: "none", fontSize: "0.875rem" }}>
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
            <Link to={`/blog/${post.slug}?lang=${lang}`} key={post.slug} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
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
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") === "en" ? "en" : "fr";
  const post = blogsData[lang].find(b => b.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = post.title + " | WEMADE";
      document.querySelector('meta[name="description"]')?.setAttribute("content", post.description);
      window.scrollTo(0, 0);

      // Dynamic Canonical
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = lang === "fr" 
        ? `https://wemade.fr/blog/${slug}` 
        : `https://wemade.fr/blog/${slug}?lang=en`;

      // Inject dynamically JSON-LD for the Article logic (GEO focus)
      let ldJson = document.getElementById("json-ld-article");
      if (!ldJson) {
        ldJson = document.createElement("script");
        ldJson.type = "application/ld+json";
        ldJson.id = "json-ld-article";
        document.head.appendChild(ldJson);
      }
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
        "datePublished": "2025-10-01",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://wemade.fr/blog/${slug}?lang=${lang}`
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
            <Link to={`/?lang=${lang}`} style={{ color: "white", textDecoration: "none", fontWeight: 700, letterSpacing: "0.2em" }}>WEMADE</Link>
          </div>
          <Link to={`/blog?lang=${lang}`} style={{ color: "var(--slate-300)", textDecoration: "none", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
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
      </article>

      <style>{`
        .blog-content h2 { margin-top: 2.5rem; margin-bottom: 1rem; font-size: 1.75rem; color: #111; font-weight: 700; }
        .blog-content p { margin-bottom: 1.5rem; }
        .blog-content blockquote { padding-left: 1.5rem; border-left: 4px solid var(--accent-500); font-style: italic; color: var(--slate-600); margin: 2rem 0; font-size: 1.25rem; }
        .blog-content ol { padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .blog-content li { margin-bottom: 0.5rem; }
      `}</style>
    </div>
  );
}
