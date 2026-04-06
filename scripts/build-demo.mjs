import * as esbuild from 'esbuild';
import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

function findFiles(dir, ext) {
  const results = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findFiles(full, ext));
    else if (entry.name.endsWith(ext)) results.push(full);
  }
  return results;
}

const pages = findFiles('demo/pages', '.ts');
const entryPoints = ['demo/app.ts', ...pages];

const buildOptions = {
  entryPoints,
  bundle: true,
  format: 'esm',
  splitting: true,
  outdir: 'demo/dist',
  outbase: 'demo',
  target: 'es2021',
};

const isWatch = process.argv.includes('--watch');

if (isWatch) {
  const ctx = await esbuild.context(buildOptions);
  await ctx.watch();
  console.log('[demo] watching for changes...');
} else {
  await esbuild.build(buildOptions);
  console.log('[demo] build complete');
}
