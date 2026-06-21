# Jadida Construction — Next.js

The Jadida Construction marketing site, rebuilt as a **Next.js 14 (App Router) + TypeScript + Tailwind CSS** application. The original look and feel from the static HTML/CSS site is preserved, but the entire design system has been re-implemented with Tailwind utility classes (the old `style.css` is no longer used).

## Commands

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

```
app/
  layout.tsx              # root layout: fonts, shared chrome, global effects
  globals.css             # Tailwind directives + scroll-reveal base styles
  page.tsx                # Home
  <route>/page.tsx        # one folder per page (about, service, project, …)
  quote/page.tsx          # multi-step quote form route

components/
  layout/                 # TopBar, Header (nav + mobile menu), Newsletter, Footer, BackToTop
  ui/                     # Container, Button, Section, PageHero, cards, blocks
  effects/SiteEffects.tsx # scroll-reveal, animated counters, card tilt, demo-form alert
  quote/QuoteForm.tsx     # 4-step quote form (client)

lib/
  nav.ts                  # navigation + footer link data
  data.ts                 # shared content arrays (projects, services, team, posts, products)
  cn.ts                   # className helper

tailwind.config.ts        # design tokens: colors, Khand font, shadows, breakpoints, keyframes
public/banner/            # local banner image
```

## Routes

`/` `about` `service` `single-service` `project` `project-2-column` `project-gallery`
`project-slider` `project-detail` `our-clients` `our-team` `our-working-process`
`contact` `blog` `blog-detail` `blog-leftsidebar` `blog-rightsidebar` `shop`
`shop-leftsidebar` `shop-rightsidebar` `product-detail` `cart` `checkout`
`login-register` `quote`

All routes are file-based (App Router) — Vercel serves them automatically; no `vercel.json` is needed.

## Deploy to Vercel

This is a **zero-config** Next.js app. Vercel auto-detects the framework, build command (`next build`) and output — no extra configuration required.

**Option A — Git + Vercel dashboard (recommended)**

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** the repo.
3. Framework preset is detected as **Next.js**. Leave the defaults → **Deploy**.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

No environment variables are required. Images load directly from Unsplash and the local
`public/` folder, so no image-domain configuration is needed.

## Notes

- The Khand Google font is loaded via `next/font` and exposed to Tailwind as the default `font-sans`.
- Interactive behaviour (mobile menu, sticky-header shadow, scroll reveals, counters, card
  tilt, back-to-top, the multi-step quote form) is implemented in React client components.
- The original static files (`*.html`, `assets/`) are left in the repo for reference and are
  not used by the Next.js app — they can be safely deleted.
- Demo forms (`data-demo`) and the quote form show a confirmation alert; wire them to a real
  backend/email service before going live.
```
