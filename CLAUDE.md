# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This repo root is a thin wrapper; all application code lives under `my-app/`:

```
IBKR_auto_proto/
├── my-app/     # Next.js 14 (App Router) web app — the actual codebase
└── Docs/       # Product docs: PRD.md, FRD.md, App flow doc.md, per-page layout specs
```

Always `cd my-app` before running any npm/docker command — there is no `package.json` at the repo root.

## Commands (run from `my-app/`)

```bash
npm install          # install deps
npm run dev           # dev server at http://localhost:3000
npm run build         # production build
npm run start         # run production build
npm run lint          # next lint (eslint-config-next, core-web-vitals + typescript)
```

There is no test runner configured (no Jest/Vitest/Playwright in `package.json`) — do not assume `npm test` works.

### Docker

```bash
docker-compose -f docker-compose.yml -f docker/development/docker-compose.dev.yml up --build
docker-compose down
```

The compose files' relative `context`/`volumes` paths assume being invoked from `my-app/` (the dev compose file's `../../my-app` paths are relative to `my-app/docker/development/`, not the repo root).

### Environment

Copy `my-app/.env.example` to `my-app/.env.local` and fill in:
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — required; `utils/supabase.ts` throws at import time if either is missing.
- `NEXT_PUBLIC_DEV_EMAIL`, `NEXT_PUBLIC_DEV_PASSWORD` — optional; power the "Dev Sign In" button shown only when `NODE_ENV === 'development'` on `/signin`.

## Architecture

**This is currently a UI prototype, not a working trading system.** Every dashboard/performance/strategy component (`components/dashboard/*`, `components/performance/*`, `components/strategy-selection/*`) renders hardcoded mock data — there is no IBKR API integration, no market-data fetching, and no persistence of strategies/trades yet. `Docs/PRD.md` and `Docs/FRD.md` describe the intended product (SP500 top-gainer strategies, stop-loss/profit-target config, manual IBKR trade execution, P/L tracking) — treat them as the target spec, not the current state, when deciding whether something is "missing" vs. "not yet built."

**Auth is the one fully wired subsystem**, and it's wired in three separate places that must stay consistent:
1. `middleware.ts` — edge-level route guard. `publicRoutes = ['/', '/signin', '/auth/callback']`; anything else redirects to `/signin` without a session, and `/signin` redirects to `/dashboard` with one.
2. `app/(authenticated)/layout.tsx` — server-side re-check via `createServerComponentClient` for every route under the `(authenticated)` group (`dashboard`, `performance`, `settings`, `setup-strategy`); redirects to `/signin` if no session.
3. `app/api/auth/{signin,signout,signup}/route.ts` — use the plain `utils/supabase.ts` client (anon key, no cookie handling), while `app/signin/page.tsx` and `app/auth/callback/route.ts` use `@supabase/auth-helpers-nextjs`'s `createClientComponentClient`/`createRouteHandlerClient` (cookie-aware, needed for middleware/SSR to see the session). **New authenticated routes must go under `(authenticated)/` and use the auth-helpers client, not the plain `utils/supabase.ts` one, or the session won't propagate to middleware.**

Adding a new protected page means: add it under `app/(authenticated)/`, and it inherits the layout's session check automatically — no need to touch `middleware.ts` unless the route is meant to be public (then add it to `publicRoutes`).

**UI stack**: shadcn/ui ("new-york" style, zinc base) generated into `components/ui/*` — treat these as generated/vendored; extend by composing, not by hand-editing unless fixing the component itself. Path alias `@/*` → repo root (`my-app/`). Charts use `chart.js` + `react-chartjs-2` (see `components/performance/PerformanceCharts.tsx`).

**Route groups**: `app/(authenticated)/` is a Next.js route group — it doesn't appear in the URL path, it only scopes the shared layout/auth-check to `dashboard`, `performance`, `settings`, `setup-strategy`.
