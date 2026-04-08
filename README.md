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

## Autopilot SEO avance

Le repo inclut maintenant une automatisation SEO quasi complete:

1. **Audit quotidien** (`seo-daily-agent.yml`)
   - sante SEO page par page
   - score + recommandations
2. **Plan contenu hebdomadaire** (`seo-weekly-content-agent.yml`)
   - 5 sujets business SEO / semaine
3. **Generation de drafts en PR** (`seo-weekly-drafts-pr.yml`)
   - genere des brouillons dans `automation/seo-drafts/`
   - ouvre un Pull Request automatiquement
4. **Maintenance technique hebdo** (`seo-tech-maintenance.yml`)
   - build, controle liens, Lighthouse
   - issue de suivi technique

## Variables utiles (workflow/script)

- `SITE_URL` (defaut: `https://wemade.fr`)
- `SITEMAP_URL` (defaut: `https://wemade.fr/sitemap.xml`)
- `MAX_URLS` (defaut: `100`)
- `GSC_SERVICE_ACCOUNT_JSON` (GitHub Secret requis pour connecter Search Console)
- `GSC_SITE_URL` (defaut recommande: `sc-domain:wemade.fr`)

## Branchement Search Console

Les workflows `seo-daily-agent.yml` et `seo-weekly-content-agent.yml` consomment maintenant les donnees Google Search Console.

Pre-requis:

1. Le secret GitHub `GSC_SERVICE_ACCOUNT_JSON` est configure.
2. Le compte de service est ajoute comme proprietaire du site dans Search Console.
3. La propriete utilisee est `sc-domain:wemade.fr` (modifiable via `GSC_SITE_URL`).

## Agent Outbound Full Auto (prospects + emails)

Le repo inclut un agent quotidien pour prospection et envoi email:

- Script: `scripts/outbound-full-auto.mjs`
- Commande: `npm run outbound:daily`
- Workflow: `.github/workflows/outbound-full-auto.yml`
- Frequence: tous les jours + lancement manuel

Fichiers utilises:

- Seed prospects: `automation/prospects-v1.csv`
- Base leads vivante: `automation/prospects-master.csv`
- Rapports: `automation/outbound-reports/outbound-YYYY-MM-DD.md`

Secrets GitHub necessaires:

- `RESEND_API_KEY`
- `OUTREACH_FROM_EMAIL` (ex: `Gregory <contact@mail.wemade.fr>`)
- `OUTREACH_REPLY_TO` (ex: `gregory@wemade.fr`)

Variables de controle:

- `OUTREACH_DAILY_LIMIT` (defaut 20)
- `OUTREACH_DRY_RUN` (`false` pour envoi reel)

Important:

- Les leads sans `contact_email` sont ignores a l'envoi.
- Ajouter les emails decisionnaires dans `automation/prospects-master.csv`.
