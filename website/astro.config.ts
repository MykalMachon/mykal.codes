import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://mykalmachon.com',
  output: "hybrid",
  integrations: [sitemap(), react(), markdoc(), keystatic()],
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