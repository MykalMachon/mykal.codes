import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://mykal.codes',
  // image: {
  //   domains: ['avatars.githubusercontent.com', 'res.cloudinary.com', 'mykal.codes']
  // },
  compressHTML: true,
  build: {
    inlineStylesheets: "auto"
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'vitesse-dark',
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      wrap: false // Enable word wrap to prevent horizontal scrolling
    }
  },
  integrations: [sitemap(), react()],
  output: "server",
  adapter: netlify()
});