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
  App.tsx              section order
  index.css            design tokens + .glass-card / .gradient-text utilities
  lib/site.ts          brand name, WhatsApp link, nav — edit copy here first
  hooks/useTheme.ts    dark/light, persisted to localStorage
  hooks/useReveal.ts   scroll-in animation (IntersectionObserver)
  components/          Navbar, Hero, Features, DailyLife, Security, FAQ, CTA, Footer
legacy/                the original static index.html + styles.css
```

## Theming

Colors live as HSL triplets on `:root` / `.dark` in `src/index.css`, then map into
Tailwind through `@theme inline`. Change the emerald there and the whole page
follows. The theme is resolved by an inline script in `index.html` before first
paint, so there's no flash of the wrong theme.
