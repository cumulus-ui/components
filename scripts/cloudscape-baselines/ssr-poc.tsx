#!/usr/bin/env tsx
/**
 * Proof of concept: renderToStaticMarkup → clean HTML → Lit template
 * Run from scripts/cloudscape-baselines/ where React + Cloudscape are installed.
 */

import Module from 'node:module';
import * as path from 'node:path';

// Cloudscape's CJS modules require() raw .css files — stub them out
(Module as any)._extensions['.css'] = function () {};

async function main() {
  const { renderToStaticMarkup } = await import('react-dom/server');
  const { createElement } = await import('react');
  const Badge = (await import('@cloudscape-design/components/badge')).default;

  const stylesPath = path.resolve('node_modules/@cloudscape-design/components/badge/styles.css.js');
  const stylesModule = await import(stylesPath);
  const classMap: Record<string, string> = stylesModule.default;
  const reverseMap = Object.fromEntries(
    Object.entries(classMap).map(([semantic, hashed]) => [hashed as string, semantic])
  );

  function cleanClasses(html: string): string {
    return html.replace(/class="([^"]+)"/g, (_, classes: string) => {
      const cleaned = classes
        .split(' ')
        .map(c => reverseMap[c] || c)
        .filter(c => !c.startsWith('awsui-'))
        .join(' ');
      return `class="${cleaned}"`;
    });
  }

  console.log('═══ Badge — renderToStaticMarkup PoC ═══\n');

  const variants = [
    { label: 'default', props: { children: 'Default' } },
    { label: 'blue', props: { color: 'blue', children: 'Blue' } },
    { label: 'red', props: { color: 'red', children: 'Red' } },
    { label: 'green', props: { color: 'green', children: 'Green' } },
    { label: 'grey', props: { color: 'grey', children: 'Grey' } },
  ];

  for (const { label, props } of variants) {
    const raw = renderToStaticMarkup(createElement(Badge as any, props));
    const clean = cleanClasses(raw);
    console.log(`── ${label} ──`);
    console.log(`  raw:   ${raw}`);
    console.log(`  clean: ${clean}`);
    console.log();
  }
}

main();
