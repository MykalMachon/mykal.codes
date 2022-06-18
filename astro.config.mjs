import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

export default defineConfig({
  srcDir: "./src",
  publicDir: "./public",
  site: "https://mykal.codes",
  markdown: {
    drafts: true,
  },
  integrations: [preact()],
});
