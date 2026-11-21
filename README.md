# Portfolio

A personal portfolio built with Astro and Tailwind CSS. The page includes an introduction, experience, education, projects, skills, and contact information, with a cursor background and reading progress indicator.

## Develop locally

The package declares Node.js 22.12.0 or newer. Use npm with the committed lockfile:

```sh
npm ci
npm run dev -- --background
```

The development server defaults to `http://localhost:4321`. Manage it with `npm run astro -- dev status`, `npm run astro -- dev logs`, and `npm run astro -- dev stop`.

## Edit the portfolio

- `src/data/portfolio.json`: profile content, social links, experience, education, projects, and skills.
- `src/data/portfolio.ts`: typed access to portfolio data.
- `src/components/`: page sections and visual effects.
- `src/pages/index.astro`: section composition.
- `src/layouts/Layout.astro`: shared page layout.
- `src/styles/global.css`: styles.
- `public/`: static files.

## Build and preview

```sh
npm run build
npm run preview
```

Astro is configured for static output in `dist/`. The checked-in `wrangler.json` configures Cloudflare to serve that directory. Build the project before using it as deployment input.
