#!/usr/bin/env tsx
/**
 * Proof of concept: prop-by-prop SSR diffing for checkbox.
 * Renders baseline + one variant per prop, diffs to find which classes each prop controls.
 * Run from scripts/cloudscape-baselines/.
 */

import Module from 'node:module';
import * as path from 'node:path';
import { JSDOM } from 'jsdom';

(Module as any)._extensions['.css'] = function () {};

interface DOMNode {
  tag: string;
  classes: string[];
  attrs: Record<string, string>;
  children: DOMNode[];
  text?: string;
}

function parseHTML(html: string): DOMNode {
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  function walk(el: any): DOMNode {
    const children: DOMNode[] = [];
    let text: string | undefined;

    for (const child of el.childNodes) {
      if (child.nodeType === 1) children.push(walk(child));
      if (child.nodeType === 3 && child.textContent.trim()) text = child.textContent.trim();
    }

    const attrs: Record<string, string> = {};
    for (const attr of el.attributes || []) {
      if (attr.name !== 'class') attrs[attr.name] = attr.value;
    }

    return {
      tag: el.tagName?.toLowerCase() || '',
      classes: [...(el.classList || [])],
      attrs,
      children,
      text,
    };
  }

  return walk(doc.body.firstChild);
}

interface ClassDiff {
  path: string;
  added: string[];
  removed: string[];
}

function diffClasses(baseline: DOMNode, variant: DOMNode, path = ''): ClassDiff[] {
  const diffs: ClassDiff[] = [];
  const currentPath = path ? `${path} > ${baseline.tag}` : baseline.tag;

  const baseSet = new Set(baseline.classes);
  const varSet = new Set(variant.classes);
  const added = variant.classes.filter(c => !baseSet.has(c));
  const removed = baseline.classes.filter(c => !varSet.has(c));

  if (added.length > 0 || removed.length > 0) {
    diffs.push({ path: currentPath, added, removed });
  }

  const maxChildren = Math.min(baseline.children.length, variant.children.length);
  for (let i = 0; i < maxChildren; i++) {
    diffs.push(...diffClasses(baseline.children[i], variant.children[i], currentPath));
  }

  if (variant.children.length > baseline.children.length) {
    for (let i = baseline.children.length; i < variant.children.length; i++) {
      diffs.push({ path: `${currentPath} > (new child ${i})`, added: ['ELEMENT_ADDED'], removed: [] });
    }
  }
  if (baseline.children.length > variant.children.length) {
    for (let i = variant.children.length; i < baseline.children.length; i++) {
      diffs.push({ path: `${currentPath} > (removed child ${i})`, added: [], removed: ['ELEMENT_REMOVED'] });
    }
  }

  return diffs;
}

async function main() {
  const { renderToStaticMarkup } = await import('react-dom/server');
  const { createElement } = await import('react');
  const Checkbox = (await import('@cloudscape-design/components/checkbox')).default;

  const stylesPath = path.resolve('node_modules/@cloudscape-design/components/checkbox/styles.css.js');
  const stylesModule = await import(stylesPath);

  const internalStylesPaths = [
    'node_modules/@cloudscape-design/components/internal/components/abstract-switch/styles.css.js',
    'node_modules/@cloudscape-design/components/internal/components/checkbox-icon/styles.css.js',
  ];

  const reverseMap: Record<string, string> = {};
  for (const sp of [stylesPath, ...internalStylesPaths]) {
    const mod = await import(path.resolve(sp));
    for (const [semantic, hashed] of Object.entries(mod.default)) {
      reverseMap[hashed as string] = semantic;
    }
  }

  function cleanHTML(html: string): string {
    return html.replace(/class="([^"]+)"/g, (_, classes: string) => {
      const cleaned = classes
        .split(' ')
        .map(c => reverseMap[c] || c)
        .filter(c => !c.startsWith('awsui-'))
        .join(' ');
      return `class="${cleaned}"`;
    });
  }

  function render(props: Record<string, any>): string {
    return cleanHTML(renderToStaticMarkup(createElement(Checkbox as any, props)));
  }

  const baseline = render({ children: 'Label' });
  console.log('═══ Checkbox — Prop-by-Prop SSR Diff ═══\n');
  console.log('── baseline (unchecked) ──');
  console.log(`  ${baseline}\n`);

  const props: Array<{ name: string; value: any }> = [
    { name: 'checked', value: true },
    { name: 'disabled', value: true },
    { name: 'readOnly', value: true },
    { name: 'indeterminate', value: true },
  ];

  const baselineDOM = parseHTML(baseline);

  const propClassMap: Record<string, ClassDiff[]> = {};

  for (const { name, value } of props) {
    const variantHTML = render({ children: 'Label', [name]: value });
    const variantDOM = parseHTML(variantHTML);
    const diffs = diffClasses(baselineDOM, variantDOM);

    console.log(`── ${name}=${JSON.stringify(value)} ──`);
    console.log(`  ${variantHTML}`);

    if (diffs.length === 0) {
      console.log('  (no class differences)\n');
    } else {
      for (const d of diffs) {
        if (d.added.length) console.log(`  ADD ${d.added.map(c => `.${c}`).join(' ')} at ${d.path}`);
        if (d.removed.length) console.log(`  DEL ${d.removed.map(c => `.${c}`).join(' ')} at ${d.path}`);
      }
      console.log();
    }

    propClassMap[name] = diffs;
  }

  console.log('═══ Summary: prop → class bindings ═══\n');
  for (const [prop, diffs] of Object.entries(propClassMap)) {
    if (diffs.length === 0) {
      console.log(`  ${prop}: no visual changes`);
      continue;
    }
    for (const d of diffs) {
      if (d.added.length) console.log(`  ${prop} → adds: ${d.added.join(', ')} at ${d.path}`);
      if (d.removed.length) console.log(`  ${prop} → removes: ${d.removed.join(', ')} at ${d.path}`);
    }
  }
}

main();
