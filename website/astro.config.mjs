import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://mykal.codes',
  image: {
    domains: ['avatars.githubusercontent.com']
  },
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

  integrations: [preact(), sitemap()],
  output: "server",
  adapter: netlify()
});