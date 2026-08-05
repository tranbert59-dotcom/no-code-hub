# no-code-hub — État actuel

**Update :** 2026-08-05 · **Phase : V1 EN PRODUCTION** · **Stack :** Next.js 15 + Turbopack + TypeScript + Tailwind CSS

## 🟢 En ligne — https://no-code-hub.fr

Vérifié le 2026-08-05 : HTTP 200, servi par nginx/1.24.0 (Ubuntu) sur le VPS Hostinger,
`X-Powered-By: Next.js`. Le déploiement était fait mais n'avait jamais été consigné —
la documentation annonçait encore « prêt déploiement » et le DNS comme manquant.

Le projet a aussi **changé de nature en juin** : de vitrine de produits, il est devenu
une **page de présentation personnelle** (parcours ERP/AS400, projets, contact) au
service de la reconversion. Les sections en ligne sont `#parcours`, `#erp`, `#projets`, `#contact`.

### Sous-domaines produits

| Sous-domaine | État au 2026-08-05 |
|---|---|
| `worldcup.no-code-hub.fr` | 🟢 en ligne |
| `cv.` · `cyberhub.` · `app.` · `demo.` | ❌ ne résolvent pas encore |

## Rôle
Landing centrale de l'écosystème NO-CODE-HUB.
Présente la marque, les produits et redirige vers les apps.

## État
| Composant | État | Notes |
|-----------|------|-------|
| Landing page | ✅ Livré | Hero, produits, bénéfices, CTA |
| Kit web (footer/cookies/chat) | ✅ Intégré | Copié depuis cv-creator |
| Pages légales | ✅ Livrées | 5 pages (mentions, politique, cookies, CGV, CGU) |
| SEO metadata | ✅ Configuré | OG + Twitter + title template |
| Logo + favicon | ✅ Intégrés | PNG depuis Assets/Logos + SVG favicon |
| URLs produits | ✅ Mis à jour | Sous-domaines no-code-hub.fr |
| Build statique | ✅ Propre | 10 pages, 0 erreur TypeScript |

## Note technique
Next.js 15 + Turbopack requis à cause d'un bug Node.js v24 + Windows (`readlink EISDIR`).
Ne pas utiliser `next build` sans `--turbopack`.

## Démarrage
cd D:/CC/Projets/no-code-hub && npm run dev
→ http://localhost:3005

## Reste à faire *(mis à jour 2026-08-05)*
- [x] ~~DNS `no-code-hub.fr` (Hostinger)~~ ✅ fait — le site répond
- [x] ~~og:image (partage social)~~ ✅ fait — `src/app/opengraph-image.tsx`, vignette 1200×630
- [ ] 🔴 **Formulaire de contact fonctionnel** — la section `#contact` existe, mais rien ne permet d'écrire
- [ ] 🔴 **Adresse postale au footer** — obligation légale des mentions
- [ ] **Sous-domaines produits** — `demo.cyberhub.no-code-hub.fr` en priorité (cf. CR du 2026-08-05)
- [ ] Page `/produits` dédiée · analytics (Plausible/Matomo)
