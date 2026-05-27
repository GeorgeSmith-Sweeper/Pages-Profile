# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for George Smith-Sweeper, deployed to GitHub Pages at the custom domain `george-smith-sweeper.com` (CNAME in `public/CNAME`, `homepage` in `package.json`). Single-page React app — no routing. Built with **Vite** (migrated off Create React App / `react-scripts`).

Branches:
- `master` / `modernize` — the previous design with `react-bootstrap` and a `src/projects/` gallery of code projects (ColorStream, BattleShip, etc.).
- `redesign` — the current editorial design (Anton/Barlow/IBM Plex Mono, cream/black/red palette, custom cursor, marquee). All project gallery code lives only on `master` / `modernize` — preserved there in case sections are pulled back in later.

## Commands

- `npm start` — Vite dev server (default `http://localhost:5173`).
- `npm run build` — production bundle to `build/` via Vite (`build.outDir` is set to `build` to keep the deploy path unchanged). Unlike CRA, the build does **not** run ESLint — lint separately.
- `npm run preview` — serve the built `build/` locally to sanity-check a production bundle.
- `npm test` — Vitest single run in jsdom (config lives in `vite.config.js`). Use `npx vitest` for watch mode, or `npx vitest run src/__test__/App.test.js` for one file.
- `npm run lint` — ESLint over `src/`.
- `npm run deploy` — builds and publishes `build/` to the `gh-pages` branch via the `gh-pages` package. This is the production deploy path; the custom domain is preserved by `public/CNAME` (Vite copies `public/` into `build/`).

ESLint extends `airbnb` + `plugin:react/recommended`. Several airbnb stylistic rules are turned off in `.eslintrc.json` (`react/function-component-definition`, `react/jsx-one-expression-per-line`, `max-len`, `comma-dangle`, `react/no-array-index-key`) — they were noisy without catching real bugs. JSX lives in `.js` files (not `.jsx`) — `.eslintrc.json` overrides `react/jsx-filename-extension`, and `vite.config.js` correspondingly tells esbuild to parse `src/**/*.js` with the `jsx` loader (`esbuild.loader`/`include`). ESLint is pinned to v8 because `eslint-config-airbnb` predates flat config.

## Architecture

Flat component layout under `src/` — no routing, no state management library, no CSS-in-JS, no UI framework. The page is one vertical scroll composed in `src/App.js`:

```
Cursor → Navigation → Hero → Marquee → What → Career → Garage → Now → Philosophy → Connect → Footer
```

Each section component renders an element with a stable `id` (`hero`, `what`, `career`, `garage`, `now`, `philosophy`, `connect`) targeted by the nav anchors and CTAs. Smooth scrolling is handled by `html { scroll-behavior: smooth }` — no JS scroll handlers in components.

### Cross-cutting client behavior

- **`Cursor`** (`src/Cursor.js`) — replaces the native cursor with a crosshair that follows the mouse via `requestAnimationFrame`. It also queries `document.querySelectorAll('a, button, .what-card, ...')` on mount to bind `mouseenter`/`mouseleave` listeners that toggle `body.hovering` (which scales + reddens the crosshair). The same effect runs the hero-name parallax. Because the effect runs after the first commit, all sections are already in the DOM when it scans for hoverables — the order in `App.js` matters.
- **`useScrollReveal`** (`src/useScrollReveal.js`) — single `IntersectionObserver` on every `.reveal` element; adds `.visible` when in view. Add `reveal` (+ optional `rd1`/`rd2`/`rd3` for staggered delay) to any element to opt in.
- **`Hero`** owns the live clock (`setInterval` updating `EST` time every 1s).

### Styling

All styling lives in a single `src/index.css`. The top of that file defines a design-token system as CSS custom properties on `:root` (cream/black/mid/muted/accent colors; Anton/Barlow/IBM Plex Mono fonts; `--border` 1.5px black hairline used throughout). Prefer using those variables over hardcoded values when editing styles.

Layout is plain CSS Grid + Flexbox — there is **no UI framework**. The design language is hairline borders, grid-divided cards, and `text-transform: uppercase` for nearly all titles in Anton. Hover states almost universally swap to black-bg / cream-text (or accent-bg in the Garage section).

Fonts are loaded via a `<link>` in `index.html` (Anton, Barlow, IBM Plex Mono — Google Fonts), not via npm. The HTML entry lives at the repo root (`index.html` with `<script type="module" src="/src/index.js">`) per Vite convention — not in `public/`.

### Tests

Single smoke test at `src/__test__/App.test.js` (Vitest + jsdom) that mounts `<App />` via `createRoot` inside `act`. `src/setupTests.js` (wired in via `vite.config.js` `test.setupFiles`) stubs the browser APIs jsdom lacks but the mount effects call: `matchMedia` and `requestAnimationFrame` (Cursor) and `IntersectionObserver` (useScrollReveal). Without those stubs the passive effects throw and Vitest reports an unhandled error.

`react-bootstrap` (unused on this design) was removed in the Vite migration, along with `react-scripts` and the `ajv` CRA workaround.
