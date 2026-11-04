// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.umweltbewusster-alltag.de',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
