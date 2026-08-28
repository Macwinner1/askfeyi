# Feyi — landing page

React recreation of the `askzahia.com` landing page for **Feyi**, the WhatsApp AI
financial assistant. Pure front-end: no PHP, no Inertia — it talks to the Java
backend in `Ai-payment/payment-1` over HTTP when you wire one up.

## Stack

| | |
|---|---|
| Build | Vite 6 |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 (`@theme`, no config file) |
| Icons | lucide-react |

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # typecheck + production build into dist/
npm run preview   # serve the production build
```

## Layout

```
src/
  App.tsx              route switch: / , /privacy , /terms , 404
  index.css            @font-face + design tokens + .glass-card / .gradient-text
  entry-server.tsx     build-time render entry
  lib/site.ts          brand name, WhatsApp link, nav — edit copy here first
  hooks/useTheme.ts    dark/light, persisted, SSR-safe
  hooks/useReveal.ts   scroll-in animation (IntersectionObserver)
  components/          Navbar, Hero, Features, DailyLife, Security, FAQ, CTA, Footer
  pages/               LegalPage, NotFound, legalContent
scripts/prerender.mjs  renders each route to its own .html
public/fonts/          self-hosted Inter (see below)
legacy/                the original static index.html + styles.css
```

## Prerendering

`npm run build` runs Vite twice — once for the client, once as an SSR bundle —
then `scripts/prerender.mjs` renders every route to static HTML:

```
dist/index.html  dist/privacy.html  dist/terms.html  dist/404.html
```

This matters because **WhatsApp's link-preview scraper does not execute
JavaScript**. Without prerendering plus the `og:` tags in `index.html`, a link
shared in WhatsApp — the product's main distribution channel — renders as a
bare URL. Cloudflare Pages serves `/privacy` from `privacy.html` and unmatched
paths from `404.html` automatically, so there is no runtime router.

## Fonts

Inter is self-hosted (SIL OFL) rather than loaded from Google, which removes two
cross-origin connections and cuts font weight from 130KB to 49KB.

The split matters: **₦ is U+20A6, which lives in `latin-ext`, not `latin`.**
Google served an 83KB `latin-ext` file for that one glyph, so `latin-ext` here is
subset down to 1.5KB. `latin` is kept complete, so ordinary copy edits — accents,
punctuation — can never silently lose a glyph.

If you ever add copy needing a character outside Latin-1 plus ₦, regenerate
`inter-latin-ext.woff2` with a subsetter rather than assuming it renders.

## Theming

Colors live as HSL triplets on `:root` / `.dark` in `src/index.css`, then map into
Tailwind through `@theme inline`. Change the emerald there and the whole page
follows. The theme is resolved by an inline script in `index.html` before first
paint, so there's no flash of the wrong theme.
