# RUNBOOK — no-code-hub

## Démarrage local
cd D:/CC/Projets/no-code-hub
npm run dev
→ http://localhost:3005

## Build
npm run build

## TypeScript check
npx tsc --noEmit

---

## Déploiement en production (VPS Hostinger)

- **Cible** : VPS, dossier `/opt/no-code-hub`, servi par **PM2** (process `no-code-hub`) derrière nginx.
- **Pas de CI/CD** : le déploiement est manuel, en SSH.
- **URL prod** : https://no-code-hub.fr

### Déploiement standard (SSH sur le VPS)

```bash
cd /opt/no-code-hub && git pull && npm ci && npm run build && pm2 restart no-code-hub
```

- `npm ci` (et pas seulement `npm run build`) : **obligatoire dès qu'une dépendance change**
  (ex. `nodemailer` pour le formulaire de contact). Sinon le build échoue sur `Cannot find module …`.
- Accroc connu : si `git pull` bloque sur un `package-lock.json` non suivi →
  `mv package-lock.json /tmp/` puis relancer.

### Rollback

```bash
cd /opt/no-code-hub && git reset --hard HEAD~1 && npm ci && npm run build && pm2 restart no-code-hub
```

---

## Formulaire de contact — configuration SMTP

La route `POST /api/contact` (runtime Node) envoie un e-mail via SMTP. **Sans variables SMTP → 503**
(le front bascule alors sur le mail direct). Variables lues à l'exécution : `CONTACT_SMTP_HOST`,
`CONTACT_SMTP_PORT`, `CONTACT_SMTP_USER`, `CONTACT_SMTP_PASS`, `CONTACT_TO`.

### Variables sur le VPS — via `.env.local` (ignoré par git, non écrasé par `git pull`)

Boîte utilisée : **`contact@no-code-hub.fr`** (Hostinger).

```bash
cd /opt/no-code-hub && cat > .env.local <<'EOF'
CONTACT_SMTP_HOST=smtp.hostinger.com
CONTACT_SMTP_PORT=465
CONTACT_SMTP_USER=contact@no-code-hub.fr
CONTACT_SMTP_PASS=<mot_de_passe_de_la_boite_hostinger>
CONTACT_TO=contact@no-code-hub.fr
EOF
```

- Port **465** = SSL (le code active `secure:true` quand le port vaut 465).
- Next.js (`next start`) lit `.env.local` au démarrage → un `pm2 restart no-code-hub` suffit à
  recharger les variables (pas besoin de rebuild pour un simple changement de `.env.local`).
- Alternative Gmail : `HOST=smtp.gmail.com`, `PORT=587`, `USER=<gmail>`, `PASS=<mot de passe d'application>`
  (nécessite la validation en 2 étapes + un App Password ; l'e-mail part « via gmail »).

### Vérification après déploiement

```bash
curl -s -X POST https://no-code-hub.fr/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","message":"Message de test du formulaire de contact."}'
```

- `{"ok":true}` → OK, un e-mail doit arriver dans `contact@no-code-hub.fr`.
- `{"error":"smtp_not_configured"}` (503) → `.env.local` non lu → vérifier le fichier + `pm2 restart no-code-hub`.
- `404` → le déploiement n'a pas pris (refaire `git pull && npm ci && npm run build && pm2 restart`).

Puis test réel : https://no-code-hub.fr → section **Contact** → envoyer un message → vérifier la réception.

### Anti-spam intégré (rappel)
Honeypot `website` + 5 envois / 10 min / IP (mémoire process). Codes : 422 (validation), 429 (rate-limit),
502 (échec envoi), 503 (SMTP absent).
