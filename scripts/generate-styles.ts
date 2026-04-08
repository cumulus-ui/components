#!/usr/bin/env tsx
/**
 * generate-styles.ts
 *
 * Reads every styles.scoped.css + styles.css.js from @cloudscape-design/components
 * and generates Lit CSS styles.ts files with semantic class names, stripping the
 * Cloudscape CSS reset and specificity hacks.
 *
 * Usage:
 *   npx tsx scripts/generate-styles.ts                    # all components
 *   npx tsx scripts/generate-styles.ts --component badge  # single component
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

// ─── Paths ────────────────────────────────────────────────────
const ROOT = path.resolve(import.meta.dirname, '..');
const CS = path.join(ROOT, 'node_modules/@cloudscape-design/components');
const CS_INTERNAL = path.join(CS, 'internal/components');
const OUT = path.join(ROOT, 'src');
const OUT_INTERNAL = path.join(OUT, 'internal/styles');

const HEADER = [
  '// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT',
  '// License: see /NOTICE',
].join('\n');

const OUR_COMPONENTS = new Set([
  'anchor-navigation', 'badge', 'box', 'checkbox', 'file-dropzone',
  'grid', 'icon', 'list', 'live-region', 'radio-group',
  'space-between', 'spinner', 'text-content', 'tiles', 'tree-view',
]);

// ════════════════════════════════════════════════════════════════
// CLASS NAME MAPPING
// ════════════════════════════════════════════════════════════════

/** Parse styles.css.js → { semanticName: hashedName } */
function parseClassMap(cssJsPath: string): Record<string, string> {
  const content = fs.readFileSync(cssJsPath, 'utf-8');
  const map: Record<string, string> = {};
  const re = /"([^"]+)":\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    map[m[1]] = m[2];
  }
  return map;
}

/** Build reverse map: hashedName → semanticName */
function buildReverseMap(forward: Record<string, string>): Record<string, string> {
  const rev: Record<string, string> = {};
  for (const [semantic, hashed] of Object.entries(forward)) {
    rev[hashed] = semantic;
  }
  return rev;
}

// ════════════════════════════════════════════════════════════════
// CSS TRANSFORMATION PIPELINE
// ════════════════════════════════════════════════════════════════

/** Strip all copyright/license header comment blocks */
function stripCopyrightHeaders(css: string): string {
  return css.replace(/\/\*[\s\S]*?(?:Copyright|SPDX-License-Identifier|Licensed under)[\s\S]*?\*\//g, '');
}

/** Strip stylelint disable/enable comments */
function stripStylelintComments(css: string): string {
  return css.replace(/\/\*\s*stylelint-(?:dis|en)able[^*]*\*\//g, '');
}

/** Strip the WCAG link description comment block */
function stripDescriptionComments(css: string): string {
  return css.replace(/\/\*\s*Style used for links[\s\S]*?description\s*\*\//g, '');
}

/** Strip test-utils comments */
function stripTestComments(css: string): string {
  return css.replace(/\/\*\s*used in test-utils\s*\*\//g, '');
}

/**
 * Strip the CSS reset block that Cloudscape prepends to every component's root rule.
 *
 * The reset is a set of property declarations starting with `border-collapse: separate;`
 * and running through `word-spacing: normal;`. Everything from the first
 * `font-size: var(--font-size-body-` onward is component-specific and kept.
 */
function stripResetBlock(css: string): string {
  const lines = css.split('\n');
  const out: string[] = [];
  let inReset = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (!inReset && trimmed === 'border-collapse: separate;') {
      inReset = true;
      continue;
    }

    if (inReset) {
      if (/^font-size:\s*var\(--font-size-body-/.test(trimmed)) {
        inReset = false;
        out.push(line);
      }
      // else skip — still inside the reset block
      continue;
    }

    out.push(line);
  }

  return out.join('\n');
}

/** Replace hashed class names with semantic names using the reverse map */
function replaceClassNames(css: string, revMap: Record<string, string>): string {
  let result = css;
  // Sort longest-first to prevent partial substring matches
  const sorted = Object.entries(revMap).sort(([a], [b]) => b.length - a.length);
  for (const [hashed, semantic] of sorted) {
    result = result.replaceAll(`.${hashed}`, `.${semantic}`);
  }
  return result;
}

/** Strip the :not(#\9) specificity hack (unnecessary in Shadow DOM) */
function stripNotId9(css: string): string {
  return css.replace(/:not\(#\\9\)/g, '');
}

/**
 * Transform body[data-awsui-focus-visible=true] selectors for Shadow DOM.
 * In Cloudscape (React), focus-visible is tracked on `body`. In Shadow DOM
 * we use `:host-context()` to reach through the shadow boundary.
 */
function transformFocusVisible(css: string): string {
  return css.replace(
    /body\[data-awsui-focus-visible=true\]/g,
    ':host-context([data-awsui-focus-visible=true])',
  );
}

/** Remove CSS rules with empty bodies */
function stripEmptyRules(css: string): string {
  return css.replace(/[^{}]*\{\s*\}/g, '');
}

/** Clean up excessive whitespace */
function cleanupWhitespace(css: string): string {
  let r = css;
  r = r.replace(/^\s*\n+/, '');        // blank lines at start
  r = r.replace(/\n{3,}/g, '\n\n');    // collapse 3+ blank lines → 2
  r = r.replace(/[ \t]+$/gm, '');      // trailing whitespace per line
  r = r.trim();
  return r;
}

/** Full transformation pipeline: raw Cloudscape CSS → clean Lit-ready CSS */
function transformCSS(cssPath: string, cssJsPath: string, classPrefix?: string): string {
  const fwd = parseClassMap(cssJsPath);
  const rev = buildReverseMap(fwd);
  let css = fs.readFileSync(cssPath, 'utf-8');

  css = stripCopyrightHeaders(css);
  css = stripStylelintComments(css);
  css = stripDescriptionComments(css);
  css = stripTestComments(css);
  css = stripResetBlock(css);
  css = replaceClassNames(css, rev);
  css = stripNotId9(css);
  css = transformFocusVisible(css);
  if (classPrefix) {
    css = prefixClasses(css, fwd, classPrefix);
  }
  css = stripEmptyRules(css);
  css = cleanupWhitespace(css);

  return css;
}

/**
 * Prefix all semantic class selectors to avoid collisions when multiple
 * sub-component styles are merged into a single shadow DOM.
 * E.g. with prefix "structured-item": .root → .structured-item--root
 */
function prefixClasses(css: string, fwd: Record<string, string>, prefix: string): string {
  const semanticNames = Object.keys(fwd).sort((a, b) => b.length - a.length);
  let result = css;
  for (const name of semanticNames) {
    result = result.replaceAll(`.${name}`, `.${prefix}--${name}`);
  }
  return result;
}

// ════════════════════════════════════════════════════════════════
// OUTPUT GENERATION
// ════════════════════════════════════════════════════════════════

/** Convert kebab-case component name to camelCase + 'Styles' */
function toStylesExportName(component: string): string {
  return component.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase()) + 'Styles';
}

/** Wrap transformed CSS in a Lit css tagged template module */
function wrapLitCSS(css: string, component: string): string {
  const alias = toStylesExportName(component);
  return [
    HEADER,
    `import { css } from 'lit';`,
    `import { sharedStyles } from '../internal/styles/shared.js';`,
    '',
    'export const componentStyles = css`',
    css,
    '`;',
    '',
    `export { componentStyles as ${alias} };`,
    'export { sharedStyles };',
    '',
  ].join('\n');
}

function wrapInternalLitCSS(css: string, component: string): string {
  const alias = toStylesExportName(component);
  return [
    HEADER,
    `import { css } from 'lit';`,
    '',
    `export const ${alias} = css\``,
    css,
    '`;',
    '',
  ].join('\n');
}

// ════════════════════════════════════════════════════════════════
// COMPONENT DISCOVERY
// ════════════════════════════════════════════════════════════════

/** Find all public components that have styles.scoped.css */
function findComponents(): string[] {
  return fs.readdirSync(CS, { withFileTypes: true })
    .filter(d => d.isDirectory() && OUR_COMPONENTS.has(d.name))
    .filter(d => fs.existsSync(path.join(CS, d.name, 'styles.scoped.css')))
    .map(d => d.name)
    .sort();
}

function findInternalComponents(): string[] {
  if (!fs.existsSync(CS_INTERNAL)) return [];
  return fs.readdirSync(CS_INTERNAL, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('.'))
    .filter(d =>
      fs.existsSync(path.join(CS_INTERNAL, d.name, 'styles.scoped.css')) &&
      fs.existsSync(path.join(CS_INTERNAL, d.name, 'styles.css.js')),
    )
    .map(d => d.name)
    .sort();
}

// ════════════════════════════════════════════════════════════════
// MAIN
// ════════════════════════════════════════════════════════════════

function processComponent(name: string): boolean {
  const cssPath = path.join(CS, name, 'styles.scoped.css');
  const cssJsPath = path.join(CS, name, 'styles.css.js');

  if (!fs.existsSync(cssPath) || !fs.existsSync(cssJsPath)) {
    console.error(`  ✗ ${name}: missing styles.scoped.css or styles.css.js`);
    return false;
  }

  const css = transformCSS(cssPath, cssJsPath);
  const output = wrapLitCSS(css, name);

  const outDir = path.join(OUT, name);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'styles.ts'), output);
  console.log(`  ✓ ${name}`);

  // Process sub-component styles (e.g. tree-view/tree-item/, anchor-navigation/anchor-item/)
  const SKIP_SUBDIRS = new Set(['test-classes', 'analytics-metadata', 'keyboard-navigation']);
  const compDir = path.join(CS, name);
  const subDirs = fs.readdirSync(compDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !SKIP_SUBDIRS.has(d.name))
    .filter(d =>
      fs.existsSync(path.join(compDir, d.name, 'styles.scoped.css')) &&
      fs.existsSync(path.join(compDir, d.name, 'styles.css.js')),
    );

  for (const sub of subDirs) {
    const subCssPath = path.join(compDir, sub.name, 'styles.scoped.css');
    const subCssJsPath = path.join(compDir, sub.name, 'styles.css.js');
    const subStyleName = `${name}-${sub.name}`;
    const subCss = transformCSS(subCssPath, subCssJsPath, subStyleName);
    const subOutput = wrapInternalLitCSS(subCss, subStyleName);

    fs.mkdirSync(OUT_INTERNAL, { recursive: true });
    fs.writeFileSync(path.join(OUT_INTERNAL, `${subStyleName}.ts`), subOutput);
    console.log(`    ✓ ${name}/${sub.name} → internal/styles/${subStyleName}.ts (prefixed)`);
  }

  return true;
}

function processInternalComponent(name: string): boolean {
  const cssPath = path.join(CS_INTERNAL, name, 'styles.scoped.css');
  const cssJsPath = path.join(CS_INTERNAL, name, 'styles.css.js');

  if (!fs.existsSync(cssPath) || !fs.existsSync(cssJsPath)) {
    console.error(`  ✗ internal/${name}: missing styles.scoped.css or styles.css.js`);
    return false;
  }

  const css = transformCSS(cssPath, cssJsPath, name);
  const output = wrapInternalLitCSS(css, name);

  fs.mkdirSync(OUT_INTERNAL, { recursive: true });
  fs.writeFileSync(path.join(OUT_INTERNAL, `${name}.ts`), output);
  console.log(`  ✓ internal/${name} (prefixed: .root → .${name}--root)`);
  return true;
}

function parseArgs(): { component?: string; internal?: boolean } {
  const args = process.argv.slice(2);
  const result: { component?: string; internal?: boolean } = {};
  const compIdx = args.indexOf('--component');
  if (compIdx >= 0 && compIdx + 1 < args.length) {
    result.component = args[compIdx + 1];
  }
  if (args.includes('--internal')) result.internal = true;
  return result;
}

function main(): void {
  console.log('╔═══════════════════════════════════════════════╗');
  console.log('║  generate-styles — Cloudscape → Lit CSS       ║');
  console.log('╚═══════════════════════════════════════════════╝\n');

  const { component, internal } = parseArgs();

  if (component) {
    if (internal) {
      console.log(`Processing single internal component: ${component}\n`);
      processInternalComponent(component);
    } else {
      console.log(`Processing single component: ${component}\n`);
      processComponent(component);
    }
    return;
  }

  let ok = 0;
  let errors = 0;

  const components = findComponents();
  console.log(`Public components: ${components.length}`);
  for (const comp of components) {
    try {
      if (processComponent(comp)) ok++;
      else errors++;
    } catch (err) {
      console.error(`  ✗ ${comp}: ${(err as Error).message}`);
      errors++;
    }
  }

  const internals = findInternalComponents();
  console.log(`\nInternal components: ${internals.length}`);
  for (const comp of internals) {
    try {
      if (processInternalComponent(comp)) ok++;
      else errors++;
    } catch (err) {
      console.error(`  ✗ internal/${comp}: ${(err as Error).message}`);
      errors++;
    }
  }

  console.log(`\n═══ Done ═══════════════════════════════════════`);
  console.log(`  Generated: ${ok}`);
  console.log(`  Errors:    ${errors}`);
  console.log(`  Public:    ${OUT}/*/styles.ts`);
  console.log(`  Internal:  ${OUT_INTERNAL}/*.ts`);
}

main();
