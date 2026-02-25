// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	site: "https://astrofree.me",
	output: "server",
	adapter: cloudflare({
		platformProxy: { enabled: true },
	}),
});
