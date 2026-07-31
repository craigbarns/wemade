# WEMADE — Refonte SEO & Conversion (v2) — Guide de déploiement

## Ce qui a changé (résumé)

### 🔴 SEO technique (le gros chantier)
1. **Prerendering statique (SSG)** : les **36 pages** du site sont maintenant générées en HTML complet au build (`npm run build` = vite build + build SSR + `scripts/prerender.mjs`). Avant, Google et les IA (ChatGPT, Perplexity…) ne voyaient qu'une page vide de 9 Ko — même tes 13 pages landing SEO étaient invisibles. Maintenant chaque page sert son contenu complet : la home est passée de 9 Ko à 68 Ko de HTML indexable.
2. **Vraie page 404** : avant, n'importe quelle URL inventée affichait l'accueil avec un code 200 (soft 404 = pénalité SEO). Maintenant → vraie page 404 design + code HTTP 404.
3. **Vraie version anglaise** : `/en/`, `/en/blog`, `/en/blog/:slug` existent avec hreflang réciproques (avant : l'anglais n'existait qu'en `?lang=en`, invisible pour Google).
4. **Meta uniques par page** : title, description, canonical, Open Graph statiques pour chacune des 36 pages (avant : tout était posé en JavaScript, souvent ignoré).
5. **Données structurées JSON-LD** : Organization (home), Article avec les vraies dates (avant : une date en dur "2025-10-01" sur tous les articles), BreadcrumbList + FAQPage sur les landings avec FAQ.
6. **Sitemap régénéré automatiquement** à chaque build : 35 URLs réelles, fini les URLs .txt et les articles manquants, dates à jour.
7. **og:image** : nouvelle image premium (public/og-image.jpg) — tes partages LinkedIn/WhatsApp affichent maintenant un visuel de marque au lieu d'une carte cassée.
8. **Perf** : Google Fonts allégées (11 graisses → 5), Tawk.to chargé après le chargement de la page.

### 🟠 Conversion (objectif : se faire appeler)
9. **Bouton « Être rappelé sous 24h »** : dans le hero + **barre sticky en bas sur mobile**. Au clic : scroll vers le formulaire, message pré-rempli « Je souhaite être rappelé sous 24h », focus sur le champ téléphone.
10. **Bandeau « Ils nous font confiance »** (HARIBO, Zadig & Voltaire, Ekoi, Fiducial…) remonté **juste sous le hero** (avant : preuves sociales perdues en bas de page).
11. **Audit gratuit 20 min mentionné dès le hero** + microcopy « Réponse sous 24h ouvrées » sous les CTA.
12. **Email cliquable** (mailto:gregory@wemade.fr).
13. **Bug corrigé** : le bouton du simulateur sourcing ne faisait RIEN sur tes 15 landing pages (perte de tes leads les plus qualifiés !). Maintenant il transmet le résultat au formulaire de contact.
14. **Nouveau H1 orienté bénéfices** : « Sourcing Chine sans les risques : usines vérifiées, qualité contrôlée, marge protégée. »

### 🟢 Contenu (2 nouvelles pages SEO sur le plus gros gap concurrentiel)
15. **`/verifier-fournisseur-alibaba`** (~2 000 mots) — mot-clé « vérifier fournisseur Alibaba », intention chaude (la peur avant le premier paiement). Aucun concurrent FR sérieux sur ce créneau.
16. **`/tarif-agent-sourcing-chine`** (~1 400 mots) — mot-clé « tarif agent sourcing Chine ». Personne en France ne publie sur les prix : c'est ton différenciateur transparence.

---

## ⚠️ ACTION REQUISE — Ton numéro de téléphone

Le site est câblé pour afficher ton téléphone partout (header, bouton d'appel, JSON-LD contactPoint) mais le numéro est **volontairement vide**. Pour l'activer, ouvre **`src/config.js`** et remplis :

```js
export const SITE = {
  phone: "+33600000000",        // ← TON NUMÉRO au format international (pour les liens tel:)
  phoneDisplay: "06 00 00 00 00", // ← format affiché aux visiteurs
  email: "gregory@wemade.fr",
  calendly: ""                  // ← optionnel : ton lien Calendly pour l'audit 20 min
};
```

Tant que `phone` est vide, aucun élément téléphone ne s'affiche (pas de placeholder moche). Rebuild après modification.

---

## Déploiement (2 options)

### Option A — Déploiement direct du dossier `dist/` (le plus rapide)
Le dossier `dist/` est **prêt à déployer tel quel** :
```bash
npx netlify deploy --dir=dist --prod
```
Ou glisse-dépose le dossier `dist/` sur https://app.netlify.com/drop (attention : relie ensuite le domaine wemade.fr).

### Option B — Via GitHub (recommandé, garde l'historique)
```bash
# Depuis ta machine, dans ton repo cloné :
# 1. Copie tous les fichiers de ce zip par-dessus ton repo (sauf node_modules)
# 2. Puis :
git add -A
git commit -m "Refonte SEO SSG + conversion : 36 pages statiques, /en, 404, CTA rappel 24h, 2 nouvelles pages"
git push
```
Netlify rebuild automatiquement (`npm run build` fait tout : vite + SSR + prerender + sitemap).

## Après déploiement — Checklist SEO (important !)
1. **Google Search Console** → demander l'indexation des URLs principales (Google va enfin VOIR ton contenu) : /, /verifier-fournisseur-alibaba, /tarif-agent-sourcing-chine, /agent-sourcing-chine-france, /controle-qualite-chine + soumettre le nouveau sitemap.xml.
2. **Google Business Profile** (fiche établissement à Marseille) — levier n°1 pour les appels locaux « société sourcing Marseille ».
3. Surveille Search Console à J+7/J+30 : impressions en forte hausse attendues sur les 15 landings (elles étaient invisibles avant).
4. Tes scripts SEO maison (`npm run seo:daily`) continuent de fonctionner — inchangés.

## Prochaines pages recommandées (par ordre de potentiel)
1. « Comment trouver une usine en Chine pour votre marque » (guide pilier + template CDC téléchargeable)
2. « Coût réel d'une importation Chine : prix usine vs coût rendu » (adosse au simulateur)
3. Landing verticale « sourcing textile Chine » (cohérent avec Zadig/Ekoi/Sweet Pants)
4. Pages villes : Nantes, Bordeaux, Lille, Toulouse
5. « Alibaba fiable ou arnaque ? 7 pièges à éviter » (complète la page vérification)

## Fichiers techniques ajoutés (pour info)
- `src/entry-server.jsx` + `src/routes-manifest.js` + `scripts/prerender.mjs` → pipeline SSG
- `src/config.js` → téléphone/email/calendly centralisés
- `src/components/NotFound.jsx` + `src/components/CallbackCta.jsx`
- `src/blogsData.js` (données articles extraites de Blog.jsx)
- `src/data/newSeoPages.js` (les 2 nouvelles pages, fusionnées dans seoPages.js)
