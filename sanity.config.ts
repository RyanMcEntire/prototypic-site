import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: '0a49l8db',
  dataset: 'production',
  title: 'Prototypic Website',
  apiVersion: '2023-12-27',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
