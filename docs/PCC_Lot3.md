# PCC — Lot 3 du site no-code-hub (#31 et #32)

> Écrit le 21/10/2026 pour la session **Lot 3**.
> Le prompt ci-dessous se colle tel quel dans une session ouverte sur
> `D:\CC\Projets\no-code-hub`. Le reste du document est la documentation que
> cette session doit lire.
> La réponse attendue est un RCC, comme celui du 20/10.

---

## Le prompt à coller

```
Tu reprends le lot 3 du site no-code-hub. #33 est fait (commit 0062d2b), il reste
#31 et #32. Lis docs/TODO.md puis docs/PCC_Lot3.md avant de commencer : le PCC
contient le détail, les sources à lire et les règles à tenir.

#31 — tu commences SANS rien me demander. Trois outils répondent publiquement :
worldcup, cv, immo. Tu prends leurs captures, tu les optimises, tu les intègres.
civic et crm sont derrière une authentification : tu les laisses de côté et tu me
le rappelles à la fin.

#32 — tu n'attends pas ma matière, tu écris un PREMIER JET à partir de ce qui
existe déjà dans le workspace (sources listées dans le PCC). Tu marques chaque
élément non vérifiable d'un TODO visible. Je corrigerai : corriger me prend dix
minutes, écrire m'en prend deux heures.

Règle absolue : aucun chiffre, aucun témoignage, aucune référence client inventés.
Le site est public. Dans le doute, tu laisses un trou signalé.

Tu ne pousses pas et tu ne déploies pas. Règle A à chaque tâche terminée.
```

---

## Contexte — où en est le site

Trois lots, décidés le 20/10 après un relevé mesuré d'agenceseo.com.

| Lot | Contenu | État |
|---|---|---|
| **1** | thème clair par défaut, échelle typographique, corps à 16 px, rayons resserrés | en production |
| **2** | accent manuscrit Caveat, défilement en pile (5 piles, 13 panneaux), badges à cheval, mode sombre contrasté | en production |
| **3** | #31 captures · #32 sections · #33 jetons | #33 fait · #31 et #32 à faire |

La forme tient. **Ce qui manque, c'est la matière** : le site montre comment il est
fait, pas ce que Bertrand sait faire.

---

## #31 — Captures des outils en production

### Le problème

Le site contient **deux images** : `logo.webp` et `hero-nocode-hub.webp`. La section
« Ce que je construis » liste cinq produits en texte. Un visiteur lit des noms, il ne
voit rien.

AgenceSEO peuple ses sections de mascottes 3D qui débordent de leurs cartes.
L'équivalent ici est meilleur : **des captures d'outils qui tournent vraiment** sont
une preuve, pas une illustration achetée.

### Ce qui se fait sans attendre

| Outil | Adresse | État au 20/10 |
|---|---|---|
| worldcup | https://worldcup.no-code-hub.fr | HTTP 200, public |
| cv | https://cv.no-code-hub.fr | HTTP 200, public |
| immo | https://immo.no-code-hub.fr | HTTP 200, public |

Prends l'écran d'accueil de chacun, fenêtre de 1280 de large, **thème clair** pour
s'accorder au site.

### Ce qui attend Bertrand

`civic` et `crm` répondent **401** : test fermé et CRM privé. Il faut soit des accès,
soit une capture qu'il fournit. **Ne bloque pas le reste pour ça** — trois produits
illustrés valent mieux que zéro.

### Comment intégrer

Le composant **`CarteChevauchee`** existe déjà dans `src/app/page.tsx` et accepte
n'importe quoi en `badge`. Une capture qui déborde se pose exactement comme une
pastille :

    <CarteChevauchee badge={<img src="/img/produits/worldcup.webp" ... />}>

Optimise en **WebP**, largeur maximale 800 px, dans `public/img/produits/`. Pour
mémoire, le logo du site pèse 5 Ko après conversion — vise le même ordre de grandeur.

### Vérifications attendues

- aucun débordement horizontal en 375 px de large ;
- poids total des images ajoutées sous 300 Ko ;
- les captures tiennent au thème sombre sans paraître étrangères.

---

## #32 — Trois sections de plus

### Le problème

La page fait 10 300 px, contre 12 272 pour agenceseo — mais la longueur n'est pas le
sujet. Il manque **ce qui fait décider**. Un visiteur sait que Bertrand construit des
outils. Il ne sait ni comment il travaille, ni ce que ça donne, ni ce que ça implique
pour lui.

### Les trois sections

**1. Comment je travaille** — la méthode en étapes, du premier échange à la mise en
production. Ce qui est automatisé, ce qui ne l'est pas, ce que le client a à faire.

**2. Ce que ça donne** — des résultats : quels outils en production, depuis quand, pour
qui, ce qu'ils remplacent. **C'est la section la plus exposée au risque d'invention.**

**3. Les questions qu'on me pose** — une FAQ en accordéons. Recoupe **#25**, levier GEO
d'après la veille SENZA : le format accordéon est lisible par les moteurs génératifs.
Traite les deux tâches ensemble.

Chaque section devient un ou deux panneaux de `Pile`, comme les cinq autres. Rappel des
contraintes, toutes mesurées et notées dans le code : **un panneau figé ne montre jamais
plus que la hauteur d'écran moins l'ancrage**, le **dernier d'une pile n'est jamais
figé**, et le figement est désactivé sous 768 px.

### Inverser la charge — c'est le cœur de ce PCC

Demander sa matière à Bertrand revient à lui demander de rédiger. Ça ne se fera pas.
**Écris un premier jet** à partir de ce qui existe, et marque ce que tu ne peux pas
établir.

### Les sources à lire, dans cet ordre

| Source | Ce qu'on y trouve |
|---|---|
| `D:\CC\Projets\cv-creator\CV_données\CR_Bertrand_Cabanes.md` | parcours complet, 9 postes, compétences — la source la plus riche |
| `D:\CC\PROJECT_INDEX.md` | les projets et apps, leur stack, leur état de déploiement |
| `D:\CC\_Tableau_de_Bord\Projets\*\Suivi.md` | l'historique daté de ce qui a réellement été construit |
| `docs/PROJECT_STATE.md` et `docs/TODO.md` | l'état et les tâches du site |
| `D:\CC\Docs\Veille\SENZA_SEO_GEO_2026_09\` | les leviers GEO, pour la FAQ (#25) |

### Ce qui est établi, et ce qui ne l'est pas

**Établi, utilisable tel quel** : 30 ans sur JD Edwards et AS400 ; les clients de cette
période figurent déjà publiquement sur le site (Total, Bonduelle, Bureau Veritas,
Reckitt, Nexity, Alcon, SmithKline, Givenchy, Soufflet, PFSWeb) ; **six outils en
production** sur VPS ; les certifications Google 2024 et 2025 ; la formation Product
Builder à l'UnCode School.

**Non établi — laisse un trou signalé** : le nombre de clients de l'activité Product
Builder, les délais réels de livraison, les prix pratiqués, tout témoignage. Écris
`{/* TODO BC : ... */}` dans le code et **regroupe ces trous dans ton RCC** pour qu'ils
se remplissent en une fois.

### Pour la FAQ, un avertissement

139 questions ont été relevées dans le tchat du sommet Alegria du 20/10
(`D:\Fiches\Alegria\Jour3\TCHAT_Jour3.md`). **Ce ne sont pas les questions de ses
clients** : c'est le public d'un sommet grand public sur l'IA. Elles éclairent ce qu'un
débutant se demande, et peuvent inspirer — mais ne les présente jamais comme « les
questions qu'on me pose ». Marque la FAQ comme un jet à valider.

---

## Les règles du projet — non négociables

**`src/components/kit/` ne se modifie pas.** Ces composants se synchronisent depuis
cv-creator ; toute correction s'y fait là-bas, puis resynchronisation. Le `Footer`, la
modale cookies, le `ChatWidget` et la bannière en dépendent.

**Aucun push, aucun déploiement** sans demande explicite de Bertrand. La chaîne est :
fichier modifié → commit → push → déploiement VPS manuel. Tu t'arrêtes au commit.

**Règle A à chaque tâche terminée** : `docs/TODO.md`, le `Suivi.md` du projet, le CR de
session. Une tâche terminée dont le suivi n'est pas écrit est une tâche à moitié faite.

**Le site est public.** Un chiffre inventé sur un site vitrine n'est pas une
approximation, c'est un mensonge commercial. Dans le doute, un trou signalé vaut
toujours mieux qu'une invention.

---

## Ce que doit contenir le RCC

1. Ce qui est fait, avec les numéros de commit.
2. Ce qui est vérifié, et **comment** — pas « ça marche », mais la mesure.
3. **La liste des trous `TODO BC`**, groupés, pour que Bertrand les remplisse en une fois.
4. Ce qui reste bloqué, et pourquoi.
5. L'état de la chaîne : commité, poussé ou non, déployé ou non.
