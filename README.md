# Astrofree

Monorepo: **Main** (orchestrator) and **Client** (customer CMS) on Cloudflare Pages/Workers + R2.

## Deploying from Cloudflare console (Git)

When you use **Wrangler** as the deploy command (e.g. `npx wrangler deploy --env uat`), Wrangler must run from **apps/main** so it finds `wrangler.json` and `./dist` there. From the repo root it would look for `dist/` at root and fail with "Missing entry-point to Worker script or to assets directory".

Use:

- **Build command:** `npm run build:main`
- **Deploy command:** `cd apps/main && npx wrangler deploy --env uat`
- **Path:** `/` (repo root)

For production, use the same pattern with your production env, e.g. `cd apps/main && npx wrangler deploy`.

For **CLI deploy** from your machine: run `npm run deploy:main` from the repo root (it runs Wrangler from `apps/main`).

## R2 buckets (Main app)

| Env   | Bucket name   | Custom domain (set in Cloudflare R2) |
| ----- | ------------- | ------------------------------------ |
| UAT   | `astrofree-uat`  | `images-uat.astrofree.me`            |
| PRD   | `astrofree-prd`  | `images.astrofree.me`                |

Use the custom domain in your app for public image URLs; the `BUCKET` binding is for reading/writing objects.

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ Built-in Observability logging

<!-- dash-content-end -->

## Getting Started

Outside of this repo, you can start a new project with this template using [C3](https://developers.cloudflare.com/pages/get-started/c3/) (the `create-cloudflare` CLI):

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/astro-blog-starter-template
```

A live public deployment of this template is available at [https://astro-blog-starter-template.templates.workers.dev](https://astro-blog-starter-template.templates.workers.dev)

## 🚀 Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                           | Action                                           |
| :-------------------------------- | :----------------------------------------------- |
| `npm install`                     | Installs dependencies                            |
| `npm run dev`                     | Starts local dev server at `localhost:4321`      |
| `npm run build`                   | Build your production site to `./dist/`          |
| `npm run preview`                 | Preview your build locally, before deploying     |
| `npm run astro ...`               | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`         | Get help using the Astro CLI                     |
| `npm run build && npm run deploy` | Deploy your production site to Cloudflare        |
| `npm wrangler tail`               | View real-time logs for all Workers              |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
