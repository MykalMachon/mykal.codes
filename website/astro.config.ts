import { defineConfig } from 'astro/config';

import deno from "@deno/astro-adapter";
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mykal.codes',
  build: {
    inlineStylesheets: "auto"
  },
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
      wrap: false
    }
  },
  integrations: [sitemap(), react()],
  output: "server",
  adapter: deno({
    port: 1234
  }),
});