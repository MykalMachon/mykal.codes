import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://mykal.codes',
  output: "hybrid",
  integrations: [sitemap(), react()],
  redirects: {
    '/garden/[...slug]': '/posts/[...slug]',
  },
  adapter: node({
    mode: 'standalone',
  }),
  build: {
    inlineStylesheets: "auto"
  },
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
      wrap: false
    }
  },

});