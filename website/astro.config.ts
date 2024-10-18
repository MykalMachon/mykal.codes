import { defineConfig } from 'astro/config';

import deno from "@deno/astro-adapter";
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mykal.codes',
  output: "hybrid",
  integrations: [sitemap(), react()],
  redirects: {
    '/garden/[...slug]': '/posts/[...slug]',
  },
  adapter: deno({
    port: parseInt(process.env.PORT || "4321"),
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