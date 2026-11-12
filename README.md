# AI Chat Scanner — promo site

One-page promo site for the iOS app **AI Chat Scanner** (Powered by CheaterBuster), App Store id `6820438400`.
Layout follows the hypeapp Framer template; colours, fonts and buttons come from the app's Figma (Cheaterbuster V1).

## Run

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build → dist/
pnpm preview    # serve dist/
```

## Deploy

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds with pnpm and publishes to GitHub Pages.
In the repo: Settings → Pages → Source = **GitHub Actions**.

### `base` and the custom domain — read before attaching a domain

- Now: no domain, the site lives at `https://norin-web.github.io/cheaterbustv1rf/` → `base: "/cheaterbustv1rf/"` in `vite.config.ts`.
- When a domain is saved in Pages settings, switch `base` to `"/"` **and** add `public/CNAME` with the domain in the same commit — otherwise every asset 404s and the page is blank.

## Where things live

- `src/app/content/site.ts` — every fact: brand, email, App Store link, price, FAQ, feature copy. Pages read only from here.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use, **verbatim** from the owner (markup only: `## ` headings, `- ` lists). Until they arrive, `body: null` shows a short notice.
- `src/styles/index.css` — tokens in `:root`, all layout in plain CSS.
- Images: `public/images/`, always referenced through `img()` (`src/app/utils/img.ts`) so the `base` path is applied.

## Reveal rule

Content is never visible only because an animation finished: hidden start states are scoped under `html.js`,
and `useReveal` falls back to showing elements that are in the viewport (gated on `getBoundingClientRect`).
