import { defineConfig } from "astro/config";
// integrations
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  srcDir: "./src",
  publicDir: "./public",
  site: "https://mykal.codes",
  markdown: {
    drafts: true,
  },
  integrations: [preact(), sitemap()],
});
