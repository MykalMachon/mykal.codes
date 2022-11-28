import { defineConfig } from 'astro/config';
// integrations
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  srcDir: './src',
  publicDir: './public',
  site: 'https://mykal.codes',
  markdown: {
    drafts: true,
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'vitesse-dark',
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
  },
  integrations: [preact(), sitemap(), mdx()],
});
