/* eslint-disable react-refresh/only-export-components -- entry SSR, hors contexte fast-refresh */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { getPrerenderRoutes, NOT_FOUND_ROUTE } from "./routes-manifest";

/**
 * Rendu serveur (SSG) d'une route.
 * @param {string} url - chemin de la route ("/", "/en/", "/blog/...", "/agent-sourcing-chine-france"...)
 * @param {"fr"|"en"} lang - langue de la route (passée à App pour l'état initial)
 */
export function render(url, lang = "fr") {
  return renderToString(
    <StaticRouter location={url}>
      <App initialLang={lang} />
    </StaticRouter>
  );
}

export { getPrerenderRoutes, NOT_FOUND_ROUTE };
