# no-code-hub — TODO

> Format `CC_TACHES` *(migré le 2026-08-06)* — voir `D:\CC\_Boite_Params\CC_TACHES.md`
> ⬜ à réaliser · 🔄 en cours · ✅ réalisée · ⛔ bloquée — 🤖 auto · 🤝 semi-auto · 🙋 manuel
> `P = Impact×2 − Effort` → **P1** ≥ 7 · **P2** 4-6 · **P3** ≤ 3
> **`Par`** = la session propriétaire *(une session = un projet)*. Une tâche 🔄 sans propriétaire est interdite — voir `CC_TACHES.md` §8.

**Rang août : 7e** — mais 🟢 **en ligne** sur https://no-code-hub.fr, donc c'est la seule vitrine
publique du workspace. Deux trous à boucher, dont un **légal**.

---

## Tâches

| # | État | Par | Tâche | I | E | P | Mode | Créée | Terminée |
|--:|:-:|:-:|---|:-:|:-:|:-:|:-:|---|---|
| 1 | ⬜ | — | **Formulaire de contact fonctionnel** — la section `#contact` existe, mais **rien ne permet d'écrire** | 5 | 2 | **P1** | 🤖 | 2026-08-05 | — |
| 2 | ⬜ | — | **Adresse postale au footer** — obligation légale des mentions | 4 | 1 | **P1** | 🤝 | 2026-08-05 | — |
| 3 | ⬜ | — | Brancher les sous-domaines produits — `demo.cyberhub.no-code-hub.fr` en priorité | 5 | 3 | **P1** | 🤝 | 2026-08-05 | — |
| 4 | ⬜ | — | Page `/produits` dédiée | 3 | 2 | **P2** | 🤖 | 2026-04-29 | — |
| 5 | ⬜ | — | Animation des sections *(scroll reveal)* | 1 | 1 | **P3** | 🤖 | 2026-04-29 | — |
| 6 | ⬜ | — | Analytics *(Plausible ou Matomo)* | 2 | 2 | **P3** | 🤝 | 2026-04-29 | — |
| 7 | ⬜ | — | Blog / articles — ⚠️ **décoché le 2026-08-05** : validé à tort le 29/04, aucune page ni composant dans le code | 2 | 4 | **P3** | 🤖 | 2026-08-05 | — |
| 8 | ⬜ | — | Témoignages clients — ⚠️ **décoché le 2026-08-05** : idem, aucune trace dans le code | 2 | 2 | **P3** | 🤝 | 2026-08-05 | — |
| 9 | ✅ | — | **Déploiement Hostinger** — le site répond ; le déploiement n'avait **jamais été consigné** | 5 | 3 | **P1** | 🤝 | 2026-04-29 | 2026-08-05 |
| 10 | ✅ | — | Logo / favicon NO-CODE-HUB | 2 | 1 | **P3** | 🤝 | 2026-04-29 | 2026-04-29 |
| 11 | ✅ | CC | Section **Product Builder** (différencier avant/après JDE↔reconversion + le pont) & **téléchargement des 2 CV** | 4 | 2 | **P2** | 🤖 | 2026-08-11 | 2026-08-11 |
| 12 | ✅ | CC | **Thème clair/sombre + FR/EN + choix de couleur d'accent** — socle tokens sémantiques CSS, `ThemeProvider` (persistance localStorage + anti-flash), dictionnaire FR/EN, contrôles dans la navbar (6 pastilles) | 4 | 4 | **P2** | 🤖 | 2026-08-12 | 2026-08-12 |
| 13 | ✅ | CC | **Compétences Product Builder — UnCode School** — bloc dans `#builder` : outils no-code regroupés par étape (cadrage/BPMN/ERD · Airtable/Softr/Webflow/Figma · Make/n8n/API · Claude Code/IA/vibe coding/Loom/Notion) + encart « Cas clients à la demande » (neutre, sans mention de coach). Bilingue. | 4 | 2 | **P2** | 🤖 | 2026-08-13 | 2026-08-13 |
| 14 | ✅ | CC | **Section prestation payante `#service`** — « Un problème à résoudre ? » : 3 étapes + CTA paiement + boutons Modèle Notion / Formulaire. Bloc Compétences remonté avant Stack/Certif. Config `SERVICE` centralisée (URLs à brancher). Bilingue. | 4 | 3 | **P2** | 🤖 | 2026-08-13 | 2026-08-13 |
| 15 | ⬜ | — | **Brancher la prestation payante** — fournir les 3 URL (`SERVICE` dans `page.tsx`) : lien de paiement (Stripe Payment Link / Gumroad), modèle Notion vierge, formulaire (Tally/Typeform/Airtable). Sans elles : CTA en repli e-mail + boutons « bientôt ». | 5 | 2 | **P1** | 🙋 | 2026-08-13 | — |

---

## 🤝 Découpage

**#2 — Adresse postale.** Toi : me donner l'adresse à afficher. Moi : la poser au footer, vérifier
les mentions légales complètes, déployer.

**#3 — Sous-domaines produits.** Toi : valider le déploiement et les entrées DNS. Moi : tout le
reste — build, config Hostinger, HTTPS.

**#6 / #8** — Toi : le compte analytics, ou les témoignages réels. Moi : l'intégration.

---

## Note du CR du 5 août

> Deux tâches étaient **cochées à tort** depuis le 29 avril (blog, témoignages) : aucune trace dans
> le code. Elles sont décochées et redescendues en P3 — leur valeur réelle est faible tant qu'il n'y
> a ni contact possible ni mentions légales.
