// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	site: "https://example.com",
	server: { port: 4322 },
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		platformProxy: { enabled: true },
	}),
});
