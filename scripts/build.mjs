import { build } from 'esbuild';
import { minifyHTMLLiteralsPlugin } from 'esbuild-plugin-minify-html-literals';

const shared = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  format: 'esm',
  plugins: [minifyHTMLLiteralsPlugin()],
};

const mode = process.argv[2];

if (mode === 'esm') {
  await build({
    ...shared,
    outfile: 'dist/index.js',
    external: ['lit', 'lit/*', '@lit/context', '@lit/context/*', '@floating-ui/dom'],
  });
} else if (mode === 'cdn') {
  await build({
    ...shared,
    outfile: 'dist/cumulus-ui.cdn.js',
    minify: true,
  });
}
