// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Descomentar cuando se defina el dominio definitivo (canonical, sitemap, Open Graph):
  // site: 'https://www.abacunet.com.ar',
  vite: {
    plugins: [tailwindcss()],
  },
});
