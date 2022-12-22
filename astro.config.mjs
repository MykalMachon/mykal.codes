import { defineConfig } from 'astro/config';
// integrations
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  srcDir: './www/src',
  publicDir: './www/public',
  site: 'https://mykal.codes',
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'vitesse-dark', // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      wrap: false, // Enable word wrap to prevent horizontal scrolling
    },
  },
  integrations: [preact(), sitemap(), mdx()],
});
