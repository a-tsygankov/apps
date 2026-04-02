# Migration Plan: apps/tarot-dev → github.com/a-tsygankov/tarot

**Target folder structure in `tarot` repo:**
```
tarot/
  client/          ← was apps/tarot-dev/
  shared/          ← was apps/shared/
  workers/         ← was apps/workers/
  .claude/
    settings.json
  .gitignore
  .github/
    workflows/
      deploy.yml
```

**Outcome:**
- `https://a-tsygankov.github.io/apps/` → old single-file app from `apps/Tarot/` (unchanged)
- `https://a-tsygankov.github.io/tarot/` → new app from `tarot/client/` build

---

## Phase 1 — Copy Files into the New Repo

Run from PowerShell or Git Bash. Do **not** delete from `apps` yet.

```bash
cd C:/Workspaces/tarot

# 1. Copy client (tarot-dev → client/)
cp -r C:/Workspaces/apps/tarot-dev client

# Remove artifacts that shouldn't be copied
rm -rf client/node_modules client/dist client/.wrangler

# 2. Copy shared contracts
cp -r C:/Workspaces/apps/shared shared

# 3. Copy worker
cp -r C:/Workspaces/apps/workers workers
rm -rf workers/tarot-api/node_modules workers/tarot-api/dist workers/tarot-api/.wrangler

# 4. Create workflow directory
mkdir -p .github/workflows

# 5. Create .claude directory for project settings
mkdir -p .claude
```

---

## Phase 2 — Create Root `.gitignore`

Copy the comprehensive root-level gitignore from `apps` — it already covers
Node, Vite, Cloudflare, secrets, and audio cache:

```bash
cp C:/Workspaces/apps/.gitignore C:/Workspaces/tarot/.gitignore
```

The `client/.gitignore` (minimal: `node_modules/ dist/ .env`) is now redundant —
the root `.gitignore` covers everything. You can delete it:

```bash
rm C:/Workspaces/tarot/client/.gitignore
```

---

## Phase 3 — Create `.claude/settings.json`

This gives Claude Code the correct permissions for the new repo layout.

Create `C:/Workspaces/tarot/.claude/settings.json`:

```json
{
  "permissions": {
    "allow": [
      "Bash(git checkout:*)",
      "Bash(git ls-tree:*)",
      "Bash(git sparse-checkout:*)",
      "Bash(mkdir -p client/src/app client/src/models client/src/services/Tts client/src/services/Stt client/src/services/Audio client/src/services/Storage client/src/services/Versioning client/src/ui/components client/src/ui/panels client/src/ui/layout client/src/ui/icons client/src/prompts client/src/analytics client/tests client/public client/dashboard)",
      "Bash(mkdir -p shared/contracts shared/models shared/utils shared/constants)",
      "Bash(mkdir -p workers/tarot-api/src/handlers workers/tarot-api/src/services workers/tarot-api/src/repositories workers/tarot-api/src/indexes workers/tarot-api/src/infrastructure)",
      "Bash(npm install:*)",
      "Bash(npx vitest:*)",
      "Bash(npx tsc:*)",
      "Read(//c/Workspaces/tarot/**)",
      "Bash(ls -d */)"
    ]
  }
}
```

---

## Phase 4 — Update Config Files

The `client/` → `../shared` relative path is **identical** to the old
`tarot-dev/` → `../shared` path, so `tsconfig.json` and `vite.config.ts`
path aliases require **no changes**.

Only the public-facing URL paths and workflow directory references change.

### 4a. `client/vite.config.ts`

Change `base` from `/tarot-dev/` to `/tarot/`.
The `@shared` alias (`../shared`) is unchanged — `client/` is still one level below the repo root.

```ts
// CHANGE:
base: '/tarot-dev/',

// TO:
base: '/tarot/',
```

### 4b. `client/src/index.html`

Three hardcoded `/tarot-dev/` paths → `/tarot/`:

```html
<!-- CHANGE: -->
<link rel="manifest" href="/tarot-dev/manifest.json">
<link rel="icon" type="image/x-icon" href="/tarot-dev/icons/favicon.ico">
<link rel="apple-touch-icon" href="/tarot-dev/icons/apple-touch-icon-180x180.png">

<!-- TO: -->
<link rel="manifest" href="/tarot/manifest.json">
<link rel="icon" type="image/x-icon" href="/tarot/icons/favicon.ico">
<link rel="apple-touch-icon" href="/tarot/icons/apple-touch-icon-180x180.png">
```

### 4c. `client/manifest.json`

Update `start_url` and rename the app:

```json
{
  "name": "Tarot Oracle",
  "short_name": "Tarot",
  "start_url": "/tarot/",
  "display": "standalone",
  "background_color": "#120208",
  "theme_color": "#120208",
  "icons": [
    { "src": "icons/favicon-32x32.png", "sizes": "32x32", "type": "image/png" },
    { "src": "icons/android-icon-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icons/icon-512x512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### 4d. `client/tsconfig.json`

No changes required. `rootDir: ".."` still points to the repo root (`tarot/`),
and `"../shared/*"` still correctly resolves to `tarot/shared/`.

### 4e. `workers/tarot-api/tsconfig.json`

No changes required. `rootDir: "../.."` still points to the repo root (`tarot/`),
and `"../../shared/*"` still correctly resolves to `tarot/shared/`.

### 4f. `workers/tarot-api/wrangler.toml`

The Worker URL and all secrets are unchanged. Only clean up `ALLOWED_ORIGINS`
(GitHub Pages origin is always the account hostname, not path-specific):

```toml
# CHANGE:
ALLOWED_ORIGINS = "https://a-tsygankov.github.io,http://localhost:5173"

# TO:
ALLOWED_ORIGINS = "https://a-tsygankov.github.io,http://localhost:3000"
```

> `localhost:3000` matches the `server.port` in `vite.config.ts`.
> Keep `5173` too if you use the default Vite port during development.

---

## Phase 5 — Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml` in the `tarot` repo.
Working directory is now `client/` (not `tarot-dev/`):

```yaml
name: Deploy Tarot

on:
  push:
    branches: [main]
    paths:
      - 'client/**'
      - 'shared/**'
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
          cache-dependency-path: client/package-lock.json

      - name: Install dependencies
        working-directory: client
        run: npm ci

      - name: Type check
        working-directory: client
        run: npx tsc --noEmit

      - name: Run tests
        working-directory: client
        run: npm test

      - name: Build
        working-directory: client
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: client/dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Phase 6 — Enable GitHub Pages on the New Repo

1. Go to `https://github.com/a-tsygankov/tarot/settings/pages`
2. Under **Source** → select **GitHub Actions**
3. Save

---

## Phase 7 — Fix the Old App in `apps` Repo

The `apps` repo needs its `deploy-tarot-dev.yml` removed (new app is gone)
and a clean workflow for the old static app.

### 7a. Delete the tarot-dev workflow

```bash
cd C:/Workspaces/apps
git rm .github/workflows/deploy-tarot-dev.yml
```

### 7b. Add a root redirect (optional but recommended)

Without this, `https://a-tsygankov.github.io/apps/` returns 404.
A one-liner redirect to the old app:

```bash
echo '<meta http-equiv="refresh" content="0;url=Tarot/">' > C:/Workspaces/apps/index.html
```

### 7c. Create `.github/workflows/deploy-tarot.yml`

```yaml
name: Deploy Tarot (classic)

on:
  push:
    branches: [main]
    paths:
      - 'Tarot/**'
      - 'index.html'
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> `path: .` deploys the entire repo root as the Pages artifact, so
> `index.html` (redirect) is at `/apps/` and `Tarot/index.html` is at `/apps/Tarot/`.

---

## Phase 8 — Cloudflare Worker Re-deploy

No Cloudflare dashboard changes needed. The R2 bucket, secrets, and Worker name
are all tied to your Cloudflare account — not the repo.

Just re-run deploy from the new location:

```bash
cd C:/Workspaces/tarot/workers/tarot-api
npm install
wrangler deploy
```

Verify:
```bash
curl https://tarot-api.tarotoracle.workers.dev/api/health
# → {"status":"ok"}
```

---

## Phase 9 — Verify & Commit

### `tarot` repo

```bash
cd C:/Workspaces/tarot/client
npm install
npx tsc --noEmit     # expect 0 errors
npm test             # expect 29 tests passing
npm run build        # expect dist/ created

cd C:/Workspaces/tarot
git add -A
git commit -m "Initial commit: move from apps/tarot-dev, restructure as client/shared/workers"
git push origin main
```

Watch: `https://github.com/a-tsygankov/tarot/actions`
Live at: `https://a-tsygankov.github.io/tarot/`

### `apps` repo

```bash
cd C:/Workspaces/apps
git add .github/workflows/deploy-tarot.yml index.html
git commit -m "Restore classic Tarot deployment, remove tarot-dev workflow"
git push origin main
```

Live at: `https://a-tsygankov.github.io/apps/Tarot/`

---

## Phase 10 — Cleanup (After Both Confirmed Live)

```bash
cd C:/Workspaces/apps
git rm -r tarot-dev shared workers
git commit -m "Remove tarot-dev, shared, workers — now in tarot repo"
git push origin main
```

---

## Full Change Summary

### Files to create in `tarot` repo

| File | Notes |
|------|-------|
| `.gitignore` | Copy from `apps/.gitignore` |
| `.claude/settings.json` | New — updated paths for `client/` layout |
| `.github/workflows/deploy.yml` | New — `working-directory: client`, `path: client/dist` |

### Files to edit in `tarot` repo

| File | What changes |
|------|-------------|
| `client/vite.config.ts` | `base: '/tarot/'` |
| `client/src/index.html` | All `/tarot-dev/` → `/tarot/` (3 lines) |
| `client/manifest.json` | `start_url: '/tarot/'`, rename app |
| `workers/tarot-api/wrangler.toml` | `ALLOWED_ORIGINS` localhost port |

### Files unchanged in `tarot` repo

| File | Why unchanged |
|------|--------------|
| `client/tsconfig.json` | `../shared` relative path is identical |
| `workers/tarot-api/tsconfig.json` | `../../shared` relative path is identical |
| `client/src/app/config.ts` | Worker URL doesn't change |
| All `src/` TypeScript files | No path assumptions |

### Files to change in `apps` repo

| File | What |
|------|------|
| `.github/workflows/deploy-tarot-dev.yml` | **Delete** |
| `.github/workflows/deploy-tarot.yml` | **Create** — static deploy of repo root |
| `index.html` | **Create** — redirect to `Tarot/` |

### Cloudflare

| Item | Action |
|------|--------|
| R2 bucket `tarot` | None — data preserved |
| All secrets | None — stored in Cloudflare, not repo |
| Worker name / URL | None — same account |
| `wrangler deploy` | Re-run from `tarot/workers/tarot-api/` |
