import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const CS = resolve(__dirname, 'node_modules/@cloudscape-design');
const STYLES = resolve(__dirname, '..', 'styles');

export default defineConfig({
  root: 'demo',
  publicDir: false,
  server: { port: 3000 },
  build: { outDir: 'dist' },
  resolve: {
    alias: {
      '@cloudscape-design': CS,
      '@cumulus-ui/styles': STYLES,
    },
  },
});
