import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://trustedpathmedia.vercel.app',
  base: process.env.BASE_PATH || '/',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  output: 'static',
});
