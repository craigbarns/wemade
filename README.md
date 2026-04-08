# WEMADE Website

Site marketing WEMADE (Vite + React), optimise pour conversion, SEO et GEO.

## Scripts

- `npm run dev` : serveur local
- `npm run build` : build production
- `npm run preview` : preview local du build
- `npm run seo:daily` : audit SEO quotidien (script local)

## Agent SEO quotidien

Un agent automatise tourne via GitHub Actions :

- Workflow : `.github/workflows/seo-daily-agent.yml`
- Frequence : tous les jours (cron) + lancement manuel
- Audit :
  - lecture du sitemap
  - verifications title/meta description/h1/canonical/noindex
  - detection des pages HTTP en erreur
  - score SEO par URL
- Sortie :
  - artefact `seo-report.md`
  - issue GitHub quotidienne avec recommandations prioritaires

## Agent SEO Content hebdomadaire

Un second agent genere un plan editorial SEO chaque semaine:

- Workflow: `.github/workflows/seo-weekly-content-agent.yml`
- Frequence: tous les lundis + lancement manuel
- Sortie:
  - 5 sujets business SEO
  - mots-cles cibles
  - intention de recherche
  - structure H2 recommandee
  - CTA de conversion
- Publication:
  - artefact `seo-weekly-content-plan.md`
  - issue GitHub hebdomadaire

## Variables utiles (workflow/script)

- `SITE_URL` (defaut: `https://wemade.fr`)
- `SITEMAP_URL` (defaut: `https://wemade.fr/sitemap.xml`)
- `MAX_URLS` (defaut: `100`)
