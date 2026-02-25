# Astrofree

Monorepo: **Main** (orchestrator) and **Client** (customer CMS) on Cloudflare Pages/Workers + R2.

## Deploying from Cloudflare console (Git)

When you use **Wrangler** for the deploy command, it must run from **apps/main** so it finds `wrangler.json` and `./dist` there. If Wrangler runs from the repo root, it won't see the config and will fail with "Missing entry-point to Worker script or to assets directory". **Do not** change the paths in wrangler.json to `./apps/main/dist` — they are correct when the command runs from `apps/main`.

Use:

- **Build command:** `npm run build:main`
- **Deploy command (production):** `cd apps/main && npx wrangler deploy`
- **Deploy command (UAT):** `cd apps/main && npx wrangler deploy --env uat`
- **Non-production / versions upload:** `cd apps/main && npx wrangler versions upload` (or add `--env uat` if needed)
- **Path:** `/` (repo root)

For **CLI deploy** from your machine: run `npm run deploy:main` from the repo root (it runs Wrangler from `apps/main`).

## R2 buckets (Main app)

| Env   | Bucket name   | Custom domain (set in Cloudflare R2) |
| ----- | ------------- | ------------------------------------ |
| UAT   | `astrofree-uat`  | `images-uat.astrofree.me`            |
| PRD   | `astrofree-prd`  | `images.astrofree.me`                |

Use the custom domain in your app for public image URLs; the `BUCKET` binding is for reading/writing objects.

**Main app (apps/main)**: Tailwind, shadcn/ui, Resend, react-email are wired. Add `RESEND_API_KEY` to `apps/main/.dev.vars` for local dev and to Worker Variables and Secrets for UAT/PRD. After installing deps, run `cd apps/main && npx shadcn@latest add button` (or other components) to add shadcn UI components.

## Security / npm audit

`npm audit` may report 2 **high** and several **moderate** issues. The two high-severity findings come from **undici** (used by miniflare/wrangler) in the **local development** stack only; production runs on Cloudflare’s edge and does not use miniflare or undici.  
**Do not** run `npm audit fix --force` to “fix” the high by downgrading `@astrojs/cloudflare` to 12.6.5: 12.6.5 is affected by an SSRF (CVE-2025-58179) that was fixed in 12.6.6+. Staying on 12.6.6+ (e.g. 12.6.12) is correct. The remaining audit items (esbuild, prismjs, undici) are either dev-only or require major upgrades; you can track upstream fixes and upgrade when feasible.

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
