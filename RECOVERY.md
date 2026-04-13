# 🔄 Project Recovery Guide — Netanya Civil Emergency

> This file helps an AI assistant (or developer) continue working on this project from a fresh clone.

## Quick Start

```bash
git clone https://github.com/Bobikobi/netanya-civil.git
cd netanya-civil
cp .env.example .env.local
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.
Auto-redirects `/` → `/emergency`.

## Live Deployment

| Item | Value |
|------|-------|
| **URL** | `https://netanya-civil.vercel.app` |
| **Platform** | Vercel (auto-deploy from `master`) |
| **Repo** | `github.com/Bobikobi/netanya-civil` |

## Supabase

| Item | Value |
|------|-------|
| **Project ID** | `bqgnzbkkuvkuiqxhwdbo` |
| **Dashboard** | `https://supabase.com/dashboard/project/bqgnzbkkuvkuiqxhwdbo` |
| **Admin password** | Stored in Supabase dashboard (project settings) |

### Database Tables

See [`docs-schema.sql`](docs-schema.sql) for the full schema. Key tables:

- **`contacts`** — Phone book data (~61 contacts across 5 pages). Protected by `get_contacts(pass)` RPC function.
- **`incidents`** — Reported events from `/report` form.
- **`incident_updates`** — Status updates on incidents.

### Seeding Data

The contacts data is already in the live Supabase database. If you need to re-seed:
1. Open the Supabase SQL Editor
2. Run `docs-schema.sql` to create tables + RPC function
3. Insert contact data manually (not stored in repo for security)

## Architecture

See [`ARCHITECTURE.md`](ARCHITECTURE.md) for the full architecture map including:
- File structure and routing
- Component hierarchy
- Data flow (I18n, Supabase)
- Translation system (~500+ keys × 3 languages)
- Design system (colors, responsive breakpoints)
- Accessibility features

## Key Technical Decisions

1. **Phone book is server-protected** — contacts fetched via `POST /api/contacts` with password → Supabase `get_contacts(pass)` RPC
2. **I18n is client-side** — `I18nProvider` in `lib/i18n.tsx`, translations in `lib/translations.ts`
3. **No SSR for emergency pages** — all `'use client'` for instant interactivity
4. **RTL-first** — `<html lang="he" dir="rtl">`, dynamic switch per locale
5. **AccessibilityWidget** — floating widget from shared component library

## File Overview

| File | Purpose |
|------|---------|
| `app/emergency/layout.tsx` | Shared layout with Navbar, I18nProvider, Footer |
| `app/emergency/page.tsx` | Main emergency page (hero, flow, teams, phones) |
| `app/emergency/contacts/page.tsx` | Password-protected phone book UI |
| `app/emergency/mashe/page.tsx` | מעש"ה emotional first-aid model (4 steps) |
| `app/emergency/teams/page.tsx` | 8 emergency teams with task details |
| `app/emergency/scripts/page.tsx` | 5 conversation scripts for field situations |
| `app/emergency/orgchart/page.tsx` | Interactive org chart tree |
| `app/emergency/faq/page.tsx` | 7 categories × 30+ Q&A |
| `app/api/contacts/route.ts` | API route: password → Supabase RPC → contacts JSON |
| `lib/translations.ts` | All UI strings in he/en/ru (~1000 lines) |
| `lib/i18n.tsx` | I18n context provider |
| `lib/phone-auth.tsx` | Phone auth context (unlock state, fetch contacts) |
| `components/AccessibilityWidget.tsx` | Floating a11y widget (font size, contrast, etc.) |

## What Was Here Before

The parent folder (`אתר חירום/`) previously contained an older draft of the project that was superseded by the `netanya-civil/` repo. Those files were cleaned up. Everything needed is in this repo.

## Environment Variables

Copy `.env.example` to `.env.local`. The Supabase URL and anon key are public (NEXT_PUBLIC_). The Vercel OIDC token is auto-generated during deployment.
