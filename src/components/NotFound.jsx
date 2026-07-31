import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import { upsertSeoTags } from "../seo-utils";

/**
 * Page 404 : design cohérent (fond sombre + doré), liens de repli, meta noindex.
 */
export function NotFound() {
  useEffect(() => {
    upsertSeoTags({
      title: "Page introuvable | WEMADE",
      description: "Cette page n'existe pas. Retrouvez nos guides sourcing Chine, notre blog et notre formulaire de contact.",
      canonicalUrl: "https://wemade.fr/404",
      robots: "noindex, nofollow"
    });
  }, []);

  return (
    <div className="notfound-page">
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
      <section className="container notfound-content">
        <div className="section-label" style={{ color: "var(--accent-500)" }}>
          <Compass size={14} style={{ verticalAlign: "-2px", marginRight: "0.35rem" }} />
          Erreur 404
        </div>
        <h1 className="notfound-title">Cette page n'existe pas (ou plus).</h1>
        <p className="notfound-text">
          Le lien que vous avez suivi est peut-être erroné ou la page a été déplacée.
          Voici les sections les plus utiles du site :
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn-primary">
            Retour à l'accueil <ArrowRight />
          </Link>
          <Link to="/blog" className="btn-secondary">
            Lire le blog sourcing
          </Link>
          <a href="/#contact" className="btn-secondary">
            Nous contacter
          </a>
        </div>
        <ul className="notfound-links">
          <li><Link to="/agent-sourcing-chine-france">Agent sourcing Chine en France</Link></li>
          <li><Link to="/sourcing-chine-pme">Sourcing Chine PME</Link></li>
          <li><Link to="/controle-qualite-chine">Contrôle qualité Chine</Link></li>
        </ul>
      </section>
    </div>
  );
}
