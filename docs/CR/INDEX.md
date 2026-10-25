# Comptes rendus — no-code-hub

Spec de référence : `D:\CC\_Boite_Outils\CR_Analyse\SPEC_CR_MENSUEL.md`
Priorité : **P1 — rang 2 sur 17**

---

## Historique des passages

| Date | CR | Utilité | Rentabilité | Facilité | **Global** | Fait marquant |
|---|---|:---:|:---:|:---:|:---:|---|
| 2026-08-05 | [CR_2026-08-05.md](CR_2026-08-05.md) | 8 | 4 | 9 | **6,9** | 🟢 **Site EN LIGNE** (no-code-hub.fr, HTTP 200) — la doc l'ignorait · 2 cases cochées à tort dans le TODO |
| 2026-09-22 | [CR_2026-09-22.md](CR_2026-09-22.md) | 8 | 4 | 9 | **6,9** | 🟢 Contact en prod + 3 produits liés, mais vitrine déjà en retard (immo en prod affiché « bientôt », « 1 app en production » pour 5) · 🔴 `next` critique en prod |

---

## Trajectoire

Deuxième meilleur score des P1 avec **quatorze fois moins de code que cyberhub-saas** — le barème récompense ce qui est fini et en ligne.

Son travail de construction est terminé ; il ne demande plus que des **branchements**. C'est le **multiplicateur commercial du workspace** : chaque démo accrochée à un sous-domaine donne enfin une valeur récoltable aux projets qui dorment.

**Septembre** *(passage le 22, prévu le 5)* — **6,9 → 6,9, Δ 0,0.** Mois le plus actif de sa vie (13 commits, tous déployés et vérifiés) : formulaire de contact en production, bilingue FR/EN, thème, section Product Builder, offre `#service`, CV Creator et Élection 2027 liés, CI. La doc a dit vrai tout le mois. Mais la note ne bouge pas, et c'est juste : on a posé les tuyaux (contact, offre, liens) sans que rien n'y coule de mesurable — pas d'analytics, offre sans lien de paiement, produits liés tous derrière identifiants. Nouveau : la vitrine **dérive derrière le workspace** (immo en prod mais « bientôt », footer figé depuis avril, « 1 app en production » pour 5) — conséquence directe de la double liste manuelle et du kit dupliqué — et `next` 15.5.14 porte une **vulnérabilité critique** sur un site qui expose désormais un `POST` public.

## Points de contrôle à surveiller d'un mois sur l'autre

- [x] 🟢 Site en ligne — vérifier qu'il répond toujours — *2026-09-22 : GET https://no-code-hub.fr → 200 (64 Ko, titre inchangé)*
- [x] Documentation remise en cohérence : `PROJECT_STATE.md`, `TODO.md`, et `D:\CC\CLAUDE.md` (`⏳ DNS` → `✅ prod`) — *2026-09-22 : commit `a5b4c77` ; PROJECT_STATE « V1 EN PRODUCTION », TODO #9 ✅, CLAUDE.md workspace « ✅ prod »*
- [x] **Décocher** « Blog / articles » et « Témoignages clients » — validés le 2026-04-29 mais **absents du code** — *2026-09-22 : TODO #7 et #8 en ⬜*
- [x] Formulaire de contact fonctionnel — il y a une section `#contact` et rien pour te joindre — *2026-09-22 : `src/app/api/contact/route.ts` + `ContactForm.tsx` ; GET prod `/api/contact` → 405 (route déployée) ; envoi 200 consigné au Suivi du 11/09*
- [ ] Adresse postale au footer *(obligation légale des mentions)* — *sept. : toujours `[Adresse postale]` dans le HTML servi*
- [ ] Sous-domaines produits joignables : **1 sur 5** (worldcup) → cible 2+ avec une démo cyberhub — *sept. : 3 liés (worldcup, cv, civic), mais cyberhub ne résout toujours pas*
- [x] Fichiers non versionnés : 12 → 0 — *2026-09-22 : `git status` = 0 non suivi (1 modifié : `docs/TODO.md`)*
- [ ] Kit web dupliqué dans 5 projets → mutualisation à planifier — *sept. : 1er effet visible, `PRODUCTS_NAV` du footer figé depuis avril*
- [x] `CLAUDE.md` annonce Next.js 14, le projet est en 15.5.14 — *2026-09-22 : `CLAUDE.md` l.4 « Next.js 15 App Router »*
- [ ] 🆕 *(sept.)* **Vulnérabilités de prod** : `npm audit --omit=dev` = 5 dont **1 critique** (`next` 15.5.14) + `nodemailer` high → 0 critique
- [ ] 🆕 *(sept.)* **Liens vitrine à jour** : carte Gestion Immobilière `soon` sans lien alors que `immo.no-code-hub.fr` est en prod (307 → /login) ; footer : CV Creator « bientôt », Élection 2027 absent
- [ ] 🆕 *(sept.)* Chiffre « **1 app en production** » (`i18n.ts`) → 5 réelles
- [ ] 🆕 *(sept.)* Prestation `#service` payable en ligne : `SERVICE.paymentUrl` / `notionUrl` / `formUrl` vides (TODO #15 🙋)
- [ ] 🆕 *(sept.)* Doc re-dérivée : `PROJECT_STATE.md` daté 05/08 (ignore route API, i18n, CI) ; `PROJECT_INDEX.md` `next_action: DNS…` et `last_activity: 2026-04-06`
- [ ] 🆕 *(sept.)* `sitemap.xml` / `robots.txt` en 404 · analytics absente · CI limitée au lint
