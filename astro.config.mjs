import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sanity({
      projectId: 'PLACEHOLDER',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
  ],
});
