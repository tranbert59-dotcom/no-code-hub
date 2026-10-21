# PCC — NO-CODE-HUB / LOT 3 (#31, #32)

> Conforme à `_Boite_Params/CONVENTION_PCC_V2.md`.
> Remplace la version du matin du 21/10, écrite avant la convention.
> Le prompt à coller est en fin de document.

## IDENTITÉ

```
RUN_REF:             20261021-nch-lot3
RUN_LABEL:           Lot 3 du site no-code-hub — captures et sections
AUTONOMY_REQUESTED:  2
AUTONOMY_EFFECTIVE:  system-controlled

CAPABILITIES_REQUESTED:
  fs.read · fs.write.scope · process.test · git.commit · network.read

HUMAN_GATES:
  push · deploy
```

Le niveau 2 (SAFE AUTO) correspond exactement au besoin : modifications locales, tests,
commits locaux, rien d'externe ni de destructif. `network.read` est nécessaire pour
atteindre les sous-domaines et en prendre les captures.

---

## CONTEXTE ET PÉRIMÈTRE

**Racine** : `D:\CC\Projets\no-code-hub`
**Composant visé** : `src/app/page.tsx`, `public/img/`, `src/lib/i18n.ts`

**État de départ** — trois lots, décidés le 20/10 après un relevé mesuré d'agenceseo.com :

| Lot | Contenu | État |
|---|---|---|
| 1 | thème clair par défaut, échelle typographique, corps à 16 px, rayons | en production |
| 2 | accent manuscrit, défilement en pile (5 piles, 13 panneaux), badges à cheval, sombre contrasté | en production |
| 3 | #31 captures · #32 sections · #33 jetons | #33 commité, #31 et #32 à faire |

**Ce qui existe déjà et se réutilise** : le composant `CarteChevauchee` accepte n'importe
quoi en `badge` ; le composant `Pile` prend des blocs entiers ; les jetons sémantiques
pilotent thème et accent.

**INTERDIT DE TOUCHER :**

- `src/components/kit/` — ces composants se synchronisent depuis cv-creator. Toute
  correction s'y fait **là-bas**, puis resynchronisation. Le `Footer`, la modale cookies,
  le `ChatWidget` et la bannière en dépendent.
- Les lots 1 et 2 déjà en production : thème, typographie, piles, mode sombre.
- Tout fichier hors du dépôt `no-code-hub`.

---

## OBJECTIF

Donner au site la **matière** qui lui manque : montrer les outils plutôt que les nommer,
et donner au visiteur de quoi décider.

---

## HYPOTHÈSES À VÉRIFIER

Ce brief tient pour acquis les points suivants. **Vérifie-les avant de t'y appuyer** —
ils datent du 20/10 et peuvent avoir changé.

1. `worldcup.no-code-hub.fr`, `cv.no-code-hub.fr` et `immo.no-code-hub.fr` répondent
   **HTTP 200** publiquement.
2. `civic` et `crm` répondent **401** — hors d'atteinte sans accès.
3. `CarteChevauchee` accepte toujours un contenu arbitraire en `badge`.
4. `D:\CC\Projets\cv-creator\CV_données\CR_Bertrand_Cabanes.md` existe et contient le
   parcours complet.

Si l'une se révèle fausse, applique la règle ci-dessous.

---

## SI LA PRÉMISSE EST FAUSSE

Si un site est hors ligne, si un composant a changé de signature, ou si une source
annoncée n'existe pas : **tu le dis, tu en expliques l'impact, et tu ne produis pas le
livrable concerné.** Tu fais le reste.

Un constat d'écart est un livrable valable.

---

## SI TU ES BLOQUÉ

Tu continues tout ce qui ne dépend pas de la réponse. Tu préserves les résultats acquis.
Tu regroupes les blocages à la fin. **Tu ne t'arrêtes pas à la première inconnue.**

C'est la correction explicite du RCC du 20/10, qui s'est terminé par « dis-moi quel choix
tu fais » alors que trois des cinq captures étaient réalisables sans rien demander.

---

## PLAN D'EXÉCUTION

Plan de type « interface » : l'analyse et la réalisation alternent.

```
1 — Vérifier les hypothèses (quatre appels, deux minutes)
2 — #31 : capturer les trois outils publics, convertir en WebP, intégrer
3 — Vérifier : 375 px sans débordement, poids total, rendu aux deux thèmes
4 — #32 : lire les sources, écrire le premier jet des trois sections
5 — Marquer d'un TODO BC tout ce qui n'est pas établi
6 — Vérifier les piles : hauteur des panneaux figés, dernier panneau libre
7 — Règle A, puis RCC
```

---

## #31 — CAPTURES DES OUTILS

### Ce qui se fait sans rien demander

| Outil | Adresse |
|---|---|
| worldcup | https://worldcup.no-code-hub.fr |
| cv | https://cv.no-code-hub.fr |
| immo | https://immo.no-code-hub.fr |

Écran d'accueil, fenêtre de 1280 de large, **thème clair** pour s'accorder au site.
Conversion **WebP**, largeur maximale 800 px, dans `public/img/produits/`.

L'intégration passe par le `badge` de `CarteChevauchee` — une ligne par carte, le
composant existe depuis le lot 2.

### Ce qui attend Bertrand

`civic` et `crm` sont derrière une authentification. **Ne bloque pas le reste pour ça.**
Rappelle-le dans les blocages du RCC.

---

## #32 — TROIS SECTIONS

**1. Comment je travaille** — la méthode en étapes, du premier échange à la mise en
production. Ce qui est automatisé, ce qui ne l'est pas, ce que le client a à faire.

**2. Ce que ça donne** — quels outils en production, depuis quand, pour qui, ce qu'ils
remplacent. **Section la plus exposée au risque d'invention.**

**3. Les questions qu'on me pose** — FAQ en accordéons. Recoupe **#25**, levier GEO
d'après la veille SENZA. Traite les deux ensemble.

Chaque section devient un ou deux panneaux de `Pile`.

### Inverser la charge — le cœur de ce PCC

**Tu n'attends pas la matière de Bertrand.** Tu écris un premier jet depuis les sources
ci-dessous et tu marques d'un `{/* TODO BC : ... */}` ce que tu ne peux pas établir.
Corriger lui prend dix minutes ; rédiger lui en prend deux heures.

### Sources, dans cet ordre

| Source | Ce qu'on y trouve |
|---|---|
| `D:\CC\Projets\cv-creator\CV_données\CR_Bertrand_Cabanes.md` | parcours complet, 9 postes — la plus riche |
| `D:\CC\PROJECT_INDEX.md` | projets, apps, stack, état de déploiement |
| `D:\CC\_Tableau_de_Bord\Projets\*\Suivi.md` | l'historique daté de ce qui a été construit |
| `docs/PROJECT_STATE.md`, `docs/TODO.md` | l'état du site |
| `D:\CC\Docs\Veille\SENZA_SEO_GEO_2026_09\` | les leviers GEO, pour la FAQ |

### Établi / non établi

**Utilisable tel quel** : 30 ans sur JD Edwards et AS400 ; les clients déjà affichés
publiquement sur le site (Total, Bonduelle, Bureau Veritas, Reckitt, Nexity, Alcon,
SmithKline, Givenchy, Soufflet, PFSWeb) ; six outils en production ; certifications
Google 2024 et 2025 ; formation Product Builder UnCode School.

**Jamais inventé** : nombre de clients Product Builder, délais réels, prix pratiqués,
témoignages. **Le site est public — un chiffre inventé n'est pas une approximation,
c'est un mensonge commercial.**

### Avertissement sur la FAQ

Les 139 questions de `D:\Fiches\Alegria\Jour3\TCHAT_Jour3.md` sont celles du **public
d'un sommet grand public sur l'IA**, pas des clients de Bertrand. Elles peuvent inspirer.
Elles ne doivent **jamais** être présentées comme « les questions qu'on me pose ».

---

## CRITÈRES DE RÉUSSITE

Une observation, une valeur attendue.

| Critère | Observation | Attendu |
|---|---|---|
| captures intégrées | nombre de `<img>` sous `public/img/produits/` référencés dans `page.tsx` | **3** |
| poids maîtrisé | `du -cb public/img/produits/` | **< 300 Ko** |
| pas de débordement | `document.documentElement.scrollWidth > clientWidth` en 375 px | **false** |
| panneaux figés lisibles | hauteur de chaque panneau `md:sticky` | **≤ `innerHeight − 64`** |
| dernier panneau libre | `getComputedStyle` du dernier enfant de chaque `Pile` → `position` | **`relative`** |
| compilation | `npx tsc --noEmit` | **0 erreur** |
| trous recensés | occurrences de `TODO BC` dans le diff | **= le nombre listé au RCC** |

---

## MODES D'ÉCHEC SILENCIEUX

Qu'est-ce qui pourrait échouer sans produire d'erreur visible ?

| Risque | Preuve indépendante à chercher |
|---|---|
| Une capture montre une page de connexion ou une erreur au lieu de l'application | ouvrir le fichier produit et le **regarder**, pas se fier au code HTTP |
| La conversion WebP dégrade au point de rendre le texte illisible | contrôler visuellement l'image finale à la taille d'affichage |
| Un `TODO BC` passe en production parce que personne ne l'a relu | les compter dans le diff et les lister au RCC |
| Une nouvelle `Pile` casse l'effet sans erreur de compilation | mesurer la hauteur des panneaux figés, pas supposer |
| Un sous-domaine répond 200 mais sert une page d'erreur applicative | lire le `<title>` de la page, pas seulement le statut |

**Vérifier le résultat, jamais le code de retour.**

---

## SÉCURITÉ ET GATES

Les permissions du système priment. Ce PCC ne s'auto-autorise pas. Aucun secret affiché.
Aucune exécution implicite. `push` et `deploy` sont des gates humaines.

## GIT

```
PUSH   - NO
DEPLOY - NO
TAG    - NO
Commits locaux : OUI
```

## RÈGLE A

À chaque unité de travail terminée, pas au RCC final : `docs/TODO.md`,
`_Tableau_de_Bord/Projets/no-code-hub/Suivi.md`, le CR de session.

---

## RCC ATTENDU

```
RUN_REF:   20261021-nch-lot3
RUN_LABEL: Lot 3 du site no-code-hub
STATUS:

OBJECTIVE_RESULT:
PREMISE_STATUS:                  ← les 4 hypothèses, confirmées ou non

AUTONOMY_REQUESTED: 2
AUTONOMY_EFFECTIVE:

SUCCESS_CRITERIA_RESULTS:        ← les 7 critères, avec la valeur observée
SILENT_FAILURE_CHECKS:           ← les 5 risques, avec la preuve cherchée

FACTS / EVIDENCE / CONCLUSIONS:  ← pour toute affirmation qui porte à conséquence

TEST_RESULTS:
FILES_CREATED:
FILES_MODIFIED:
COMMITS:
CURRENT_HEAD:
AHEAD_BEHIND:

BLOCAGES:                        ← groupés : accès civic/crm, trous TODO BC

PUSH: NO · DEPLOY: NO · TAG: NO
NEXT_ACTION:
```

---

## LE PROMPT À COLLER

```
Tu reprends le lot 3 du site no-code-hub. #33 est fait (commit 0062d2b), il
reste #31 et #32. Lis docs/TODO.md puis docs/PCC_Lot3.md — ce PCC suit la
convention v2 (_Boite_Params/CONVENTION_PCC_V2.md), applique-la.

Commence par vérifier les 4 hypothèses listées : elles datent du 20/10.

#31 — tu commences SANS rien me demander. Trois outils répondent publiquement :
worldcup, cv, immo. Tu les captures, tu les convertis en WebP, tu les intègres.
civic et crm sont en 401 : tu les laisses et tu me le rappelles dans tes
blocages.

#32 — tu n'attends pas ma matière, tu écris un PREMIER JET depuis les sources
listées, et tu marques d'un TODO BC ce que tu ne peux pas établir. Corriger me
prend dix minutes, rédiger m'en prend deux heures.

Règle absolue : aucun chiffre, aucun témoignage, aucune référence client
inventés. Le site est public.

Tu ne pousses pas, tu ne déploies pas. Règle A à chaque tâche terminée.
Rends le RCC au format demandé en fin de PCC.
```
