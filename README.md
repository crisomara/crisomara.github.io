# crisomara.github.io

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
