# no-code-hub — Mémoire technique & Décisions

Dernière mise à jour : 2026-05-19

## Décisions

### ADR-01 — Next.js 15 + Turbopack (pas Vite)
- **Décision :** Next.js 15 avec Turbopack
- **Raison :** Cohérence avec les autres projets Next.js du workspace, SSG natif, SEO optimal
- **Implication :** App Router, Server Components

### ADR-02 — Favicon SVG "NH"
- **Décision :** Favicon SVG custom "NH" bleu
- **Raison :** Légèreté, scalable, pas de PNG multi-taille
- **Implication :** Dans `public/favicon.svg`

### ADR-03 — Kit web composants partagés
- **Décision :** Réutiliser les composants `kit/` (Footer, CookieBanner, ChatWidget, LegalPageLayout)
- **Raison :** Cohérence avec cv-creator et cyberhub-saas
- **Implication :** Composants à maintenir en sync si le kit évolue

## Commits

- `e5e5e7e` — init no-code-hub (2026-04-05)
- `b8bcb66` — finalisation MVP (2026-04-06)

## Bloquants actuels

- **DNS** : domaine no-code-hub.fr non configuré → le site n'est pas accessible en ligne
  - Action : créer A record `no-code-hub.fr` → `72.60.44.108` dans Hostinger hpanel
  - Action : créer A records pour cv-creator, cyberhub, gestion-immo, video (sous-domaines)
- **Emails** : `contact@no-code-hub.fr` configuré mais non testé (SMTP Hostinger)

## Entité légale

Le contenu légal utilise : CABANES BERTRAND — EI — SIREN 530 253 160
Si structure juridique change → mettre à jour les 5 pages légales.
