# crisomara.github.io

[![CI](https://github.com/crisomara/crisomara.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/crisomara/crisomara.github.io/actions/workflows/ci.yml) [![Security](https://github.com/crisomara/crisomara.github.io/actions/workflows/security.yml/badge.svg)](https://github.com/crisomara/crisomara.github.io/actions/workflows/security.yml)

Personal portfolio of Christian Omara — Junior Data Scientist / Machine Learning for Healthcare. Built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the production build
```

## Content

Profile, project, achievement, and tech-stack content lives in [`src/data/content.ts`](src/data/content.ts) — edit that file to update the site without touching components.

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it via GitHub Pages. In the repo's **Settings → Pages**, the source must be set to **GitHub Actions**.

## CI

- **CI** (`.github/workflows/ci.yml`, every push and pull request): `npm ci`, `astro check` (type check), `astro build`, a smoke test of the built page (`npm test`), and an offline lychee check of internal links, anchors and assets in `dist/`. The built site is uploaded as an artifact.
- **Security** (`.github/workflows/security.yml`, also weekly): gitleaks secret scan, `npm audit --audit-level=high --omit=dev`, CodeQL (JavaScript/TypeScript), dependency review on pull requests, and actionlint.
- **Dependabot**: weekly grouped updates for npm and GitHub Actions.
- Deployment is unchanged: `deploy.yml` publishes `main` to GitHub Pages.
