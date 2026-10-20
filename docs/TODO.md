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
| 1 | ✅ | CC | **Formulaire de contact fonctionnel** — `ContactForm` (nom/email/message, FR/EN, honeypot) + `POST /api/contact` (nodemailer SMTP, 5 envois/10 min/IP, 503 explicite sans SMTP → le site propose le mail direct). **✅ EN PROD le 2026-09-11** : push du commit `d5ab2a2` (jamais poussé), déploiement VPS, SMTP Hostinger `contact@no-code-hub.fr` (`.env.local`), envoi vérifié `{ok:true}` HTTP 200 | 5 | 2 | **P1** | 🤖 | 2026-08-05 | 2026-09-11 |
| 2 | ⬜ | — | **Adresse postale au footer** — obligation légale des mentions | 4 | 1 | **P1** | 🤝 | 2026-08-05 | — |
| 3 | ⬜ | — | Brancher les sous-domaines produits — `demo.cyberhub.no-code-hub.fr` en priorité | 5 | 3 | **P1** | 🤝 | 2026-08-05 | — |
| 4 | ✅ | CC | **Page `/produits` dédiée** — catalogue des 5 produits avec filtres par statut (Tous / En ligne / En test / Bientôt + compteurs), cartes détaillées (4 fonctionnalités chacune), CTA contact, metadata SEO + canonical. Méta produits sortie dans `lib/products.tsx` + composant partagé `ProductCard` (home et /produits) ; lien « Voir tous les produits » sous `#projets` ; navbar : entrée « Produits » + ancres en `/#…` (marchent depuis toute page). Bilingue. Build prod OK (/produits statique). **🙋 déploiement VPS manuel** | 3 | 2 | **P2** | 🤖 | 2026-04-29 | 2026-09-27 |
| 5 | ✅ | CC | **Animation des sections *(scroll reveal)*** — `ScrollReveal` (monté dans `layout.tsx`, relancé à chaque route) : IntersectionObserver sur les `<section>`, fondu + montée 24 px (0,6 s). Seules les sections hors écran au chargement sont masquées → pas de flash, contenu visible sans JS ; désactivé si `prefers-reduced-motion`. CSS `.reveal` dans `globals.css`. tsc + build OK ; non vérifié à l'œil (pas de dev server en tâche planifiée). **🙋 déploiement VPS manuel** | 1 | 1 | **P3** | 🤖 | 2026-04-29 | 2026-09-27 |
| 6 | ⬜ | — | Analytics *(Plausible ou Matomo)* | 2 | 2 | **P3** | 🤝 | 2026-04-29 | — |
| 7 | ✅ | CC | **Blog / articles** — choix BC 27/09 : Markdown dans le repo. `content/blog/<slug>.md` (front-matter title/date/description/tags/draft), `lib/blog.ts` (lecture + rendu Markdown maison, sans dépendance, HTML échappé, liens filtrés), `/blog` (liste, état vide « Premiers articles bientôt ») et `/blog/[slug]` (statique, metadata + OG article, `noindex` si brouillon), styles `.blog-prose`. **Brouillon** `de-l-erp-au-product-builder.md` (`draft: true` → visible en dev seulement). Pas encore de lien navbar (cf. #22). tsc + lint + build OK. | 2 | 4 | **P3** | 🤖 | 2026-08-05 | 2026-09-27 |
| 8 | ⬜ | — | Témoignages clients — ⚠️ **décoché le 2026-08-05** : idem, aucune trace dans le code | 2 | 2 | **P3** | 🤝 | 2026-08-05 | — |
| 9 | ✅ | — | **Déploiement Hostinger** — le site répond ; le déploiement n'avait **jamais été consigné** | 5 | 3 | **P1** | 🤝 | 2026-04-29 | 2026-08-05 |
| 10 | ✅ | — | Logo / favicon NO-CODE-HUB | 2 | 1 | **P3** | 🤝 | 2026-04-29 | 2026-04-29 |
| 11 | ✅ | CC | Section **Product Builder** (différencier avant/après JDE↔reconversion + le pont) & **téléchargement des 2 CV** | 4 | 2 | **P2** | 🤖 | 2026-08-11 | 2026-08-11 |
| 12 | ✅ | CC | **Thème clair/sombre + FR/EN + choix de couleur d'accent** — socle tokens sémantiques CSS, `ThemeProvider` (persistance localStorage + anti-flash), dictionnaire FR/EN, contrôles dans la navbar (6 pastilles) | 4 | 4 | **P2** | 🤖 | 2026-08-12 | 2026-08-12 |
| 13 | ✅ | CC | **Compétences Product Builder — UnCode School** — bloc dans `#builder` : outils no-code regroupés par étape (cadrage/BPMN/ERD · Airtable/Softr/Webflow/Figma · Make/n8n/API · Claude Code/IA/vibe coding/Loom/Notion) + encart « Cas clients à la demande » (neutre, sans mention de coach). Bilingue. | 4 | 2 | **P2** | 🤖 | 2026-08-13 | 2026-08-13 |
| 14 | ✅ | CC | **Section prestation payante `#service`** — « Un problème à résoudre ? » : 3 étapes + CTA paiement + boutons Modèle Notion / Formulaire. Bloc Compétences remonté avant Stack/Certif. Config `SERVICE` centralisée (URLs à brancher). Bilingue. | 4 | 3 | **P2** | 🤖 | 2026-08-13 | 2026-08-13 |
| 15 | ⬜ | — | **Brancher la prestation payante** — fournir les 3 URL (`SERVICE` dans `page.tsx`) : lien de paiement (Stripe Payment Link / Gumroad), modèle Notion vierge, formulaire (Tally/Typeform/Airtable). Sans elles : CTA en repli e-mail + boutons « bientôt ». | 5 | 2 | **P1** | 🙋 | 2026-08-13 | — |
| 16 | ✅ | CC | **Correctif SEO `metadataBase`** — `layout.tsx` → `https://no-code-hub.fr` (og:image/twitter:image en absolu). Commit `cd92736`. À redéployer pour effet prod. | 3 | 1 | **P3** | 🤖 | 2026-09-11 | 2026-09-11 |
| 17 | ✅ | CC | **Cartes projets « En test »** — statut `test` (badge ambre + « Accès sur identifiants ») : CV Creator → cv.no-code-hub.fr, nouvelle carte Élection 2027 → civic.no-code-hub.fr. Bilingue. Commit `e163044`. | 3 | 2 | **P3** | 🤖 | 2026-09-12 | 2026-09-12 |
| 18 | ✅ | CC | **Logo en grand dans le hero** — demande BC 24/09 : `logo.png` (1024 px) centré entre la barre et le badge « Product Builder · NO-CODE-HUB », `next/image` w-40 → w-64 selon l'écran, ombre accent. Vérifié sur le dev server (3005). **🙋 déploiement VPS manuel** | 2 | 1 | P3 | 🤖 | 2026-09-24 | 2026-09-24 |
| 19 | ✅ | CC | **Retrait du petit logo de la navbar** — devenu redondant avec le grand logo du hero. `Logo.tsx` → texte seul « NO-CODE-HUB » (image supprimée), prop `size` retiré dans `Navbar.tsx`. Vérifié : 0 image dans `<nav>`. **🙋 déploiement VPS manuel** | 1 | 1 | P3 | 🤖 | 2026-09-25 | 2026-09-25 |
| 20 | ✅ | CC | **Logo du hero en WebP optimisé** — `logo.png` 1024² (1163 Ko) → `logo.webp` 512² (**5 Ko**, qualité 82) ; réf mise à jour dans `page.tsx`. Commit `07b0f7d`. `logo.png` conservé (non référencé, supprimable). **🙋 déploiement VPS manuel** | 2 | 1 | P3 | 🤖 | 2026-09-25 | 2026-09-25 |
| 21 | ✅ | CC | **Espace « Mes CV » + formulaire de demande gaté** — 8 PDF (2 profils × 4 formats) ; les 2 boutons CV (ERP=AS400, Builder=Reconversion) ouvrent une **modale** (profil imposé par le contexte, lecture seule) ; champs nom*/prénom/email*/fonction/format*/pourquoi/consentement RGPD* + honeypot ; `POST /api/cv-request` → validation, **lead persistant** (`data/cv-leads.ndjson`), **notif email** `prodbuild@` (réutilise `CONTACT_SMTP_*`), livraison du bon PDF. RGPD complétée. Bilingue. Branche `feature/cv-request-form`. **🙋 déploiement VPS manuel** | 5 | 4 | **P1** | 🤖 | 2026-09-25 | 2026-09-25 |
| 22 | ⬜ | — | **Publier le 1er article du blog** — relire `content/blog/de-l-erp-au-product-builder.md` (dev : http://localhost:3005/blog), passer `draft: false`, puis ajouter l'entrée « Blog » dans la navbar + lien footer, et redéployer | 2 | 1 | **P3** | 🤝 | 2026-09-27 | — |
| 23 | ⬜ | — | **GEO — Bloc auteur expert (Bertrand)** *(veille SENZA 30/09)* — sur home + /produits + articles : bloc auteur identifié (nom, « Product Builder », parcours 30 ans ERP/AS400 → reconversion no-code/IA, preuves, lien LinkedIn). C'est **le signal n°1** pour être cité par les IA (GEO). **🤝 BC fournit bio + liens ; moi je pose le composant.** | 5 | 2 | **P1** | 🤝 | 2026-09-30 | — |
| 24 | ⬜ | — | **GEO — Indexation + mesure** *(veille SENZA)* — vérifier `site:no-code-hub.fr` (pages indexées), brancher/lire **Search Console** partie « IA générative » (impressions + pages citées par l'IA) + filtre trafic IA dans Analytics (cf. #6). **Pas indexé = jamais cité par l'IA.** | 4 | 1 | **P1** | 🤝 | 2026-09-30 | — |
| 25 | ⬜ | — | **GEO — FAQ (accordéons) partout** *(veille SENZA)* — FAQ en accordéon sur la home et chaque page produit/offre, nourries des vraies questions (formulaire contact, CRM). Format lisible par l'IA, fort levier GEO. | 4 | 3 | **P2** | 🤝 | 2026-09-30 | — |
| 26 | ⬜ | — | **GEO — Publier une source originale** *(veille SENZA, « hack ultime »)* — article de données internes, ex. « J'ai construit 17 outils no-code+IA : ce qui marche, ce qui casse » (chiffres, cas concrets), pour devenir **une source citée** par les IA. Alimente aussi le blog (#7/#22). **🤝 BC valide l'angle et les chiffres.** | 4 | 3 | **P2** | 🤝 | 2026-09-30 | — |
| 27 | ⬜ | — | **GEO — llms.txt + perf** *(veille SENZA)* — `llms.txt` à la racine (offres, preuves, cas, tarifs/fourchettes) + audit PageSpeed/mobile. Secondaire (schema.org **non** prioritaire d'après la veille). | 2 | 2 | **P3** | 🤝 | 2026-09-30 | — |
| 28 | ⬜ | — | **Offre `#service` en livrables** *(veille Grégoire Beaurain DSC 10/10, candidate #C1)* — réécrire la section prestation en **8 livrables** (diagnostic · carte du système · base de conversion · plan visibilité · relance · actifs IA · agents IA · pilotage) + bloc « ce qu'on ne fait pas maintenant » ; CTA/config `SERVICE` inchangés. Dépend de #15 (3 URL). **🤝 BC valide la liste et les fourchettes ; moi le texte + composant, bilingue.** Source : `Docs/Veille/Gregoire_Beaurain_DSC_Atelier_2026_10_10/04_CR_Projets_Apps.md` | 5 | 2 | **P1** | 🤝 | 2026-10-10 | — |
| 29 | ✅ | CC | **Refonte visuelle du site, d'après agenceseo.com** — thème **clair par défaut** (le script anti-FOUC ne suit plus la préférence système) ; échelle typographique fluide `text-display`/`text-title` (h1 60 px/900, h2 40 px/800) ; corps de texte 12 → 16 px ; rayons 7 → 4 valeurs ; **accent manuscrit Caveat auto-hébergé** (`public/fonts/`, marquage par astérisques dans le dictionnaire, FR+EN) ; **défilement en pile** (`Pile` : 5 piles, 13 panneaux, découpage validé par BC sur 14 captures) ; **badges à cheval** (`CarteChevauchee` + `Pastille`) ; **mode sombre contrasté** (accent 4,0 → 7,9:1, bouton 4,6 → 7,0:1, texte secondaire 7,6 → 9,6:1, bordures 1,2 → 2,7:1) + liseré lumineux. Commit `4b3f6cb`. **🙋 déploiement VPS manuel** | 4 | 4 | **P2** | 🤖 | 2026-10-20 | 2026-10-20 |
| 30 | ✅ | CC | **`www.no-code-hub.fr` servait une page de parking Hostinger** *(corrigé le 20/10 avec BC)* — `www` était resté le **CNAME d'usine** vers `connect.hostinger.com` : page de parking en HTTP, rien en HTTPS. **Corrigé** : (1) zone DNS → A `www` → `72.60.44.108` (propagé, vérifié sur 8.8.8.8 / 1.1.1.1 / 9.9.9.9) ; (2) nginx contenait **déjà** `www` dans ses deux `server_name` — le 404 venait du `return 404` par défaut de certbot sur le port 80, résolu quand certbot a ajouté la clause `if ($host = www…)` ; (3) `certbot --expand` → certificat couvrant les deux noms (expire 2027-01-18). **Conséquence traitée** : les deux adresses servant le même site en 200, ajout des **balises canoniques** manquantes (accueil + 5 pages légales ; `/produits` et `/blog` en avaient déjà) — attention, une page déclarant `metadata` sans `alternates` hérite de celle du layout. Redirection 301 nginx écartée volontairement : risque de casser le défi ACME au renouvellement. **🙋 les canoniques n'arrivent en ligne qu'au prochain déploiement VPS** | 3 | 2 | **P2** | 🤝 | 2026-10-20 | 2026-10-20 |
| 31 | ⬜ | — | **Captures des outils en production** *(lot 3 de la refonte #29)* — le site n'a que 2 images (`logo.webp`, `hero-nocode-hub.webp`). Prendre des captures réelles des outils en ligne (`worldcup`, `cv`, `immo` répondent en 200 ; `civic` et `crm` sont derrière une authentification), les optimiser en WebP, et les faire **déborder de leur carte** — le composant `CarteChevauchee` accepte déjà n'importe quel contenu en `badge`, c'est une ligne par carte. C'est l'équivalent des mascottes 3D d'agenceseo, en plus crédible : ce sont de vrais outils. **🤝 BC choisit quoi montrer et fournit les accès pour `civic`/`crm` ; moi les captures, l'optimisation et l'intégration.** | 4 | 3 | **P2** | 🤝 | 2026-10-20 | — |
| 32 | ⬜ | — | **Trois sections de plus** *(lot 3 de la refonte #29)* — la page s'arrête à 10 300 px quand agenceseo en fait 12 272, et surtout il manque ce qui fait décider : « comment je travaille » (la méthode, en étapes), « ce que ça donne » (résultats chiffrés, cas concrets), « les questions qu'on me pose » (FAQ en accordéons). La FAQ recoupe **#25** (levier GEO) — à traiter ensemble. Chaque section devient un ou deux panneaux de `Pile`. **🤝 BC fournit la matière (méthode réelle, chiffres, vraies questions reçues) ; moi la structure, le texte et le bilingue.** | 4 | 4 | **P2** | 🤝 | 2026-10-20 | — |
| 33 | ⬜ | — | **Couleurs en dur → jetons sémantiques** *(dette révélée par #29)* — **313 couleurs Tailwind brutes** (`bg-slate-50`, `text-gray-900`…) subsistent hors du système de jetons, surtout dans les pages légales : `cookies` 44, `cgv` 33, `politique-de-confidentialite` 26, plus `cgu` et `mentions-legales`. Elles ne suivent donc **ni le thème ni l'accent choisi** — incohérent depuis que le clair est le défaut. ⚠️ **`src/components/kit/` est exclu** (`CookiePreferencesModal` 35, `ChatWidget` 26, `CookieBanner`) : ces composants se synchronisent depuis cv-creator, toute correction doit y être faite **là-bas** puis resynchronisée. | 2 | 2 | **P3** | 🤖 | 2026-10-20 | — |

---

## Socle GEO *(cadré le 2026-09-30 d'après la veille SENZA SEO/GEO)*

> Source : `D:\CC\Docs\Veille\SENZA_SEO_GEO_2026_09\` (surtout `04_Application_a_nos_sites.md`).
> **GEO = Generative Engine Optimization** : être cité/mentionné par les IA (ChatGPT ~79 % des recherches IA).
> no-code-hub est la cible **prioritaire** (activité de service à faire recommander par l'IA).
> Ordre conseillé : **#24 (indexation/mesure) → #23 (auteur) → #25 (FAQ) → #26 (source originale) → #27 (llms.txt/perf)**.
> Le même patron (auteur / FAQ / preuves / source originale) se réplique ensuite sur cv-creator, civic, immo.

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
