import { defineConfig, type Plugin } from 'vite';
import { resolve } from 'node:path';
import { minifyHTMLLiterals } from 'minify-html-literals';

const CS = resolve(__dirname, 'node_modules/@cloudscape-design');

// Lit html`` templates preserve whitespace as visible text nodes in Shadow DOM.
// This plugin strips insignificant whitespace in dev mode (production uses esbuild equivalent).
function litMinify(): Plugin {
  return {
    name: 'lit-minify',
    transform(code, id) {
      if (!id.endsWith('.ts') && !id.endsWith('.js')) return;
      if (!code.includes('html`')) return;
      const result = minifyHTMLLiterals(code, { fileName: id });
      return result ? { code: result.code, map: result.map?.toString() } : undefined;
    },
  };
}

export default defineConfig({
  root: 'demo',
  publicDir: false,
  server: { port: 3000 },
  build: { outDir: 'dist' },
  plugins: [litMinify()],
  resolve: {
    alias: {
      '@cloudscape-design': CS,
    },
  },
});
