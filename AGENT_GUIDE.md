# no-code-hub — Guide Agent Claude Code

> Lire EN PREMIER en mode auto. Court et opérationnel.

## PRIORITÉ ABSOLUE

Lire `docs/TODO.md` avant toute action.

---

## Stack

Frontend uniquement : Next.js 15 · TypeScript · Turbopack · Port 3005 (dev)
Déploiement cible : VPS-1 Hostinger via PM2 — no-code-hub.fr
Niveau : **2 — Projet standard (landing page)**

Port dev 3005 — ancien conflit 3001 avec worldcup2026 résolu (2026-07-03).

---

## Démarrage rapide

```powershell
cd D:/CC/Projets/no-code-hub
npm run dev   # port 3005 (dev avec Turbopack)
npm run build # build production
```

---

## Règles critiques

1. **Pas de backend** — site vitrine statique/SSG, aucun serveur Python
2. **Pas de port conflit** — vérifier worldcup2026 avant de lancer
3. **Cible VPS-1** — déploiement via PM2 (pas Docker), `npm run build && pm2 start`
4. **i18n FR/EN** — utiliser next-intl si internationalisation nécessaire
5. **Branding NO-CODE-HUB** — respecter la charte graphique `Docs/Branding_Global_Workspace.md`

---

## Structure clé

```
app/            ← App Router Next.js 15
components/     ← composants UI réutilisables
public/         ← assets statiques
messages/       ← i18n (fr.json, en.json)
```

---

## Sources de vérité

| Question | Fichier |
|----------|---------|
| Phase actuelle | `docs/PROJECT_STATE.md` |
| Tâches | `docs/TODO.md` |
