# no-code-hub — État actuel

> Resynchronisé le 2026-10-11 (W16) depuis TODO.md / Suivi.md / PROJECT_INDEX.md

**Update :** 2026-10-11 · **Phase : V1 EN PRODUCTION — vitrine Product Builder, socle GEO cadré** · **Stack :** Next.js 15 + Turbopack + TypeScript + Tailwind CSS

## 🟢 En ligne — https://no-code-hub.fr

Prod sur le VPS Hostinger (nginx + PM2 `no-code-hub`, `/opt/no-code-hub`), **pas de CI/CD** :
redéploiement = SSH + `git pull && npm ci && npm run build && pm2 restart no-code-hub` (voir `RUNBOOK.md`).

- **Dernier déploiement consigné : 2026-09-26** — `main` à `81fa262` (PR #1 « Mes CV »), ce qui embarque
  tout ce qui précède (logo hero WebP, navbar texte seul, formulaire CV). Vérifié en prod au navigateur.
- ⚠️ **Prod en retard sur `main`** : les trois lots du **27/09** (#4 `/produits`, #5 scroll reveal, #7 blog)
  sont commités mais **pas déployés** — 🙋 déploiement VPS manuel.
- Dépôt synchronisé (0 commit local non poussé au 11/10). Dernier commit : 2026-10-10 (`docs(todo): #28`).

Le projet a changé de nature en juin 2026 : de vitrine de produits, il est devenu une **page de présentation
personnelle** (parcours ERP/AS400 → Product Builder, projets, contact) au service de la reconversion ; depuis
le 13/08 il porte aussi une **offre de prestation** (`#service`) et, depuis le 30/09, il est la cible
**prioritaire du socle GEO** (être cité par les IA).

### Sous-domaines produits

| Sous-domaine | État |
|---|---|
| `worldcup.no-code-hub.fr` | 🟢 en ligne |
| `cv.no-code-hub.fr` | 🟢 en ligne, bêta fermée (écran de connexion) — carte « En test » depuis le 12/09 |
| `civic.no-code-hub.fr` | 🟢 en ligne, test fermé (Basic Auth) — carte « En test » depuis le 12/09 |
| `demo.cyberhub.` · `app.` · `demo.` | ❌ ne résolvent pas — #3 🤝 (DNS Hostinger à valider par BC) |

## Rôle
Landing centrale de l'écosystème NO-CODE-HUB et vitrine professionnelle de Bertrand (Product Builder).
Présente le parcours, l'offre, les produits et redirige vers les apps.

## Ce qui est livré *(dates = `docs/TODO.md`)*

| Livrable | Livré | En prod |
|---|---|---|
| MVP : landing, kit web (footer/cookies/chat), 5 pages légales, SEO, logo + favicon | 2026-04-06 | ✅ |
| Déploiement Hostinger (fait avant août, consigné a posteriori) | 2026-08-05 | ✅ |
| Section Product Builder + téléchargement des 2 CV, hero 2 colonnes, repositionnement « Product Builder » | 2026-08-11 | ✅ |
| Thème clair/sombre + FR/EN + 6 couleurs d'accent, menu mobile (hamburger) | 2026-08-12 | ✅ |
| Bloc Compétences UnCode School + section prestation `#service` (3 étapes, config `SERVICE`) | 2026-08-13 | ✅ |
| **Formulaire de contact** `ContactForm` + `POST /api/contact` (nodemailer, SMTP Hostinger `contact@`) | 2026-09-11 | ✅ (vérifié `{ok:true}`) |
| Correctif SEO `metadataBase` (og:image absolu) | 2026-09-11 | ✅ (12/09) |
| Cartes projets « En test » (CV Creator, Élection 2027) | 2026-09-12 | ✅ |
| Logo en grand dans le hero (WebP 5 Ko), retrait du logo navbar | 2026-09-24/25 | ✅ (26/09) |
| **Espace « Mes CV »** : 8 PDF, modale gatée, `POST /api/cv-request`, leads `data/cv-leads.ndjson`, notif `prodbuild@` (PR #1) | 2026-09-25 | ✅ (26/09) |
| Page **`/produits`** — catalogue filtrable par statut, `lib/products.tsx` + `ProductCard` partagés, navbar « Produits » | 2026-09-27 | ⬜ **à déployer** |
| **Scroll reveal** des sections (`ScrollReveal`, `prefers-reduced-motion` respecté) | 2026-09-27 | ⬜ **à déployer** |
| **Blog Markdown** dans le repo : `content/blog/*.md`, `lib/blog.ts`, `/blog` + `/blog/[slug]`, 1 brouillon | 2026-09-27 | ⬜ **à déployer** (brouillon invisible en prod) |
| Socle GEO cadré (#23-#27, veille SENZA SEO/GEO) | 2026-09-30 | doc |
| #28 « offre `#service` en 8 livrables » créée (veille Grégoire Beaurain DSC, candidate #C1) | 2026-10-10 | doc — ⬜ |

## Prochaine étape

1. 🙋 **Redéployer le VPS** (lot du 27/09 : `/produits`, scroll reveal, blog).
2. **#28 P1 🤝 — offre `#service` en 8 livrables** (diagnostic · carte du système · base de conversion · plan
   visibilité · relance · actifs IA · agents IA · pilotage) : BC valide la liste et les fourchettes, CC écrit
   texte + composant bilingue. Dépend de #15 (3 URL).
3. **Socle GEO**, ordre conseillé : #24 indexation/mesure (Search Console) → #23 bloc auteur expert →
   #25 FAQ accordéons → #26 source originale → #27 `llms.txt` + perf.
4. #2 adresse postale au footer (obligation légale) — attend l'adresse de BC.

## Points bloquants / en attente de Bertrand

- **#15 🙋** — les 3 URL de la prestation (lien de paiement, modèle Notion, formulaire) : sans elles le CTA
  reste en repli `mailto` et les boutons « bientôt ». Bloque aussi #28.
- **#2 🤝** adresse postale · **#3 🤝** DNS sous-domaines (`demo.cyberhub` en priorité).
- **#22 🤝** relecture + publication du 1er article (`de-l-erp-au-product-builder.md`, `draft: false`) + lien navbar/footer.
- **Envoi réel du formulaire CV en prod** pour valider la livraison du PDF + la notif `prodbuild@` (reste BC du 26/09).
- 8 vulnérabilités npm (1 low, 6 high, 1 critical) signalées au build du 11/09 — non auditées.
- Boîte SMTP `contact@no-code-hub.fr` sur plan **Free Trial, expiration 2026-11-18** (Suivi 11/09).
- `ChatWidget` / `CookieBanner` (kit) restent en FR en dur — à synchroniser depuis cv-creator si i18n voulu.

## Note technique
Next.js 15 + Turbopack requis à cause d'un bug Node.js v24 + Windows (`readlink EISDIR`).
Ne pas utiliser `next build` sans `--turbopack`. Le build local hors-ligne échoue sur `next/font` (Inter) :
vérifier sur la prod après déploiement.

## Démarrage
cd D:/CC/Projets/no-code-hub && npm run dev
→ http://localhost:3005

## Historique condensé
- **2026-08-05** — constat : le site était en prod sans que la doc le sache (« prêt déploiement », DNS « manquant »).
  Deux cases cochées à tort depuis avril (blog, témoignages) décochées. CR mensuel 6,9/10.
- **2026-08-16** — formulaire de contact codé (`d5ab2a2`) ; le commit n'a été poussé que le 11/09 (404 en prod jusque-là).
- **2026-09-25** — constat (captures BC) que la prod avait un déploiement de retard ; rattrapé le 26/09.
