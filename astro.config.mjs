import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import node from '@astrojs/node';

const env = loadEnv(process.env.NODE_ENV || '', process.cwd(), 'SANITY');

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  env: {
    schema: {
      SANITY_PROJECT_ID: { type: 'string', context: 'server', access: 'public' },
      SANITY_DATASET: { type: 'string', context: 'server', access: 'public', default: 'production' },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sanity({
      projectId: env.SANITY_PROJECT_ID,
      dataset: env.SANITY_DATASET || 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
  ],
});
