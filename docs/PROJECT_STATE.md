# no-code-hub — État actuel

**Update :** 2026-04-07 · **Phase : V1 MVP finalisé — prêt déploiement** · **Stack :** Next.js 15 + Turbopack + TypeScript + Tailwind CSS

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

## Manquant avant mise en ligne
- DNS `no-code-hub.fr` (Hostinger)
- Sous-domaines produits
- Adresse postale footer
- og:image (partage social)
