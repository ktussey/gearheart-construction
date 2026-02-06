import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import project from './sanity/schemas/project';

export default defineConfig({
  name: 'gearheart-construction',
  title: 'Gearheart Construction',
  projectId: 'PLACEHOLDER',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [project],
  },
});
