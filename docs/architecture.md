# no-code-hub — Architecture

Dernière mise à jour : 2026-05-19

## Vue d'ensemble

Landing page statique multi-produits pour NO-CODE-HUB.
Pas de backend. Déployable en SSG ou sur Vercel/VPS.

## Stack technique

```
Next.js 15 (Turbopack) + TypeScript + Tailwind CSS
  ├── App Router (app/)
  ├── Server Components par défaut
  └── Static Site Generation (SSG) possible
```

## Structure

```
src/
├── app/
│   ├── page.tsx              ← Landing page principale
│   ├── legal/
│   │   ├── mentions/         ← Mentions légales
│   │   ├── politique/        ← Politique de confidentialité
│   │   ├── cookies/          ← Politique cookies
│   │   ├── cgv/              ← CGV
│   │   └── cgu/              ← CGU
│   └── layout.tsx            ← Layout global (Footer, CookieBanner, ChatWidget)
└── components/
    ├── Logo.tsx              ← Logo NO-CODE-HUB
    ├── Footer.tsx            ← Footer global
    ├── CookieBanner.tsx      ← RGPD
    ├── ChatWidget.tsx        ← FAQ widget
    ├── CookiePreferencesModal.tsx
    └── LegalPageLayout.tsx   ← Layout pages légales
```

## Sections landing page

1. Hero (logo + baseline + CTA)
2. Problème / Solution
3. Grille produits (4 apps : cv-creator, cyberhub, gestion-immo, video-analyzer)
4. Bénéfices
5. Crédibilité / Témoignages
6. CTA final

## URLs produits cibles

| Produit | URL cible |
|---------|-----------|
| cv-creator | cv-creator.no-code-hub.fr |
| cyberhub | cyberhub.no-code-hub.fr |
| gestion-immo | gestion-immo.no-code-hub.fr |
| video-analyzer | video.no-code-hub.fr |

## Identité légale

CABANES BERTRAND — EI — SIREN 530 253 160
contact@no-code-hub.fr

## État déploiement

- DNS `no-code-hub.fr` → à configurer sur Hostinger hpanel
- Sous-domaines → à créer dans DNS (A record → IP VPS 72.60.44.108)
- Hébergement cible : VPS Hostinger (Nginx) ou Vercel
