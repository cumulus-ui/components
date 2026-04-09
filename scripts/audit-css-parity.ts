#!/usr/bin/env tsx
/**
 * audit-css-parity.ts
 *
 * Compares CSS properties in our generated styles.ts against Cloudscape's
 * original styles.scoped.css to find missing properties.
 *
 * Usage:
 *   npx tsx scripts/audit-css-parity.ts              # audit all components
 *   npx tsx scripts/audit-css-parity.ts --component button  # audit one
 *   npx tsx scripts/audit-css-parity.ts --verbose     # show all properties
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { parseClassMap, buildReverseMap } from './lib/css-module-map.js';
import { getImplementedComponents } from './lib/component-registry.js';

const ROOT = path.resolve(import.meta.dirname, '..');
const CS = path.join(ROOT, 'node_modules/@cloudscape-design/components');
const SRC = path.join(ROOT, 'src');

// ─── CSS Parsing ──────────────────────────────────────────────

/** Extract { selector: Set<property> } from raw CSS text */
function parseProperties(css: string): Map<string, Set<string>> {
  const result = new Map<string, Set<string>>();

  // Strip comments
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, '');

  // Match rule blocks: selector { properties }
  // Handle @media and @supports by flattening (we only care about properties)
  const ruleRe = /([^{}]+)\{([^{}]*)\}/g;
  let m: RegExpExecArray | null;
  while ((m = ruleRe.exec(clean)) !== null) {
    const selector = m[1].trim();
    const body = m[2].trim();

    // Skip @-rules themselves (we'll catch their inner rules on next iteration)
    if (selector.startsWith('@')) continue;

    // Extract property names (ignore values)
    const props = new Set<string>();
    const propRe = /\s*([\w-]+)\s*:/g;
    let pm: RegExpExecArray | null;
    while ((pm = propRe.exec(body)) !== null) {
      props.add(pm[1]);
    }

    if (props.size === 0) continue;

    const existing = result.get(selector);
    if (existing) {
      for (const p of props) existing.add(p);
    } else {
      result.set(selector, props);
    }
  }

  return result;
}

// ─── Cloudscape Source Parsing ─────────────────────────────────

interface CloudscapeStyles {
  /** semantic class name → Set<CSS property names> */
  classes: Map<string, Set<string>>;
}

/** Recursively find all styles.scoped.css under a directory */
function findScopedCssFiles(dir: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['test-classes', 'analytics-metadata', 'keyboard-navigation', 'node_modules'].includes(entry.name)) continue;
      results.push(...findScopedCssFiles(full));
    } else if (entry.name === 'styles.scoped.css') {
      results.push(full);
    }
  }
  return results;
}

/** Parse all Cloudscape CSS for a component (recursive, all subdirs) */
function parseCloudscapeComponent(component: string): CloudscapeStyles {
  const compDir = path.join(CS, component);
  const classes = new Map<string, Set<string>>();

  const cssFiles = findScopedCssFiles(compDir);

  for (const cssFile of cssFiles) {
    const cssJsFile = path.join(path.dirname(cssFile), 'styles.css.js');
    if (!fs.existsSync(cssJsFile)) continue;

    const forward = parseClassMap(cssJsFile);
    const reverse = buildReverseMap(forward);
    const css = fs.readFileSync(cssFile, 'utf-8');
    const rules = parseProperties(css);

    for (const [selector, props] of rules) {
      // Extract the PRIMARY class from the selector (first .awsui_ class)
      const classMatch = selector.match(/\.(awsui_[\w-]+)/);
      if (!classMatch) continue;

      const hashed = classMatch[1];
      const semantic = reverse[hashed];
      if (!semantic) continue;

      // Build a qualified name for compound selectors
      // .button.variant-normal:hover → "button.variant-normal:hover"
      let qualName = semantic;

      // Add additional compound classes
      const allClasses = [...selector.matchAll(/\.(awsui_[\w-]+)/g)];
      if (allClasses.length > 1) {
        const parts = allClasses.map(m => reverse[m[1]] || m[1]).filter(Boolean);
        qualName = parts.join('.');
      }

      // Add pseudo-classes
      const pseudoMatch = selector.match(/:(?:hover|active|focus|disabled|checked|first-child|last-child)/);
      if (pseudoMatch) {
        qualName += pseudoMatch[0];
      }

      const existing = classes.get(qualName);
      if (existing) {
        for (const p of props) existing.add(p);
      } else {
        classes.set(qualName, new Set(props));
      }
    }
  }

  return { classes };
}

// ─── Our Styles Parsing ───────────────────────────────────────

/** Parse CSS from a Lit css`` template literal in a .ts file */
function parseLitCss(tsFile: string): Map<string, Set<string>> {
  if (!fs.existsSync(tsFile)) return new Map();
  const src = fs.readFileSync(tsFile, 'utf-8');

  // Extract all css`...` blocks
  const blocks: string[] = [];
  const cssRe = /css`([\s\S]*?)`/g;
  let m: RegExpExecArray | null;
  while ((m = cssRe.exec(src)) !== null) {
    blocks.push(m[1]);
  }

  const merged = new Map<string, Set<string>>();
  for (const block of blocks) {
    const parsed = parseProperties(block);
    for (const [selector, props] of parsed) {
      // Normalize selector: strip :host prefix, collapse whitespace
      let norm = selector.replace(/:host-context\([^)]+\)\s*/, '').trim();
      // Extract primary class
      const classMatch = norm.match(/\.([a-zA-Z][\w-]*)/);
      if (!classMatch) continue;
      const className = classMatch[1];

      const existing = merged.get(className);
      if (existing) {
        for (const p of props) existing.add(p);
      } else {
        merged.set(className, new Set(props));
      }
    }
  }

  return merged;
}

function parseOurComponent(component: string): Map<string, Set<string>> {
  const merged = new Map<string, Set<string>>();

  const merge = (source: Map<string, Set<string>>) => {
    for (const [cls, props] of source) {
      const existing = merged.get(cls);
      if (existing) {
        for (const p of props) existing.add(p);
      } else {
        merged.set(cls, new Set(props));
      }
    }
  };

  // Primary styles.ts
  merge(parseLitCss(path.join(SRC, component, 'styles.ts')));

  // Hand-written CSS in internal.ts
  merge(parseLitCss(path.join(SRC, component, 'internal.ts')));

  // Internal style dependencies
  const internalDir = path.join(SRC, 'internal', 'styles');
  if (fs.existsSync(internalDir)) {
    // Find styles that are imported by this component
    const internalTs = path.join(SRC, component, 'internal.ts');
    if (fs.existsSync(internalTs)) {
      const src = fs.readFileSync(internalTs, 'utf-8');
      const importRe = /from\s+'[^']*internal\/styles\/([^']+)'/g;
      let im: RegExpExecArray | null;
      while ((im = importRe.exec(src)) !== null) {
        const depName = im[1].replace(/\.js$/, '.ts');
        const depFile = path.join(internalDir, depName);
        merge(parseLitCss(depFile));
      }
    }
  }

  return merged;
}

// ─── Diff ─────────────────────────────────────────────────────

interface DiffResult {
  component: string;
  /** semantic class → missing property names */
  missing: Map<string, string[]>;
  /** total properties we have / total Cloudscape has (for matched classes) */
  ourCount: number;
  csCount: number;
}

// CSS reset properties that generate-styles.ts intentionally strips
// (from border-collapse through the line before font-size: var(--font-size-body-))
const RESET_PROPS = new Set([
  'border-collapse', 'border-spacing', 'caption-side', 'cursor', 'direction',
  'empty-cells', 'box-sizing', 'text-indent', 'text-align', 'visibility',
  'white-space', 'text-transform', 'word-spacing', 'font-stretch', 'font-style',
  'font-variant', 'hyphens', 'letter-spacing', 'line-height', 'list-style',
  'overflow-wrap', 'tab-size', 'text-shadow',
]);

function isHashedCustomProp(prop: string): boolean {
  return /^--[\w-]+-[a-z0-9]{6}$/.test(prop);
}

function diffComponent(component: string): DiffResult {
  const cs = parseCloudscapeComponent(component);
  const ours = parseOurComponent(component);

  const missing = new Map<string, string[]>();
  let ourCount = 0;
  let csCount = 0;

  for (const [csClass, csProps] of cs.classes) {
    // Only compare simple class names (no compound/pseudo)
    // These are the base selectors that must have all properties
    if (csClass.includes('.') || csClass.includes(':')) continue;

    const ourProps = ours.get(csClass);
    if (!ourProps) continue; // Class not in our styles — skip (might not be used)

    csCount += csProps.size;
    ourCount += ourProps.size;

    const missingProps: string[] = [];
    for (const prop of csProps) {
      if (RESET_PROPS.has(prop)) continue;
      if (isHashedCustomProp(prop)) continue;
      if (!ourProps.has(prop)) {
        missingProps.push(prop);
      }
    }

    if (missingProps.length > 0) {
      missing.set(csClass, missingProps.sort());
    }
  }

  return { component, missing, ourCount, csCount };
}

// ─── Main ─────────────────────────────────────────────────────

const args = process.argv.slice(2);
const singleComponent = args.find((_, i) => args[i - 1] === '--component');
const verbose = args.includes('--verbose');

const components = singleComponent
  ? [singleComponent]
  : getImplementedComponents();

console.log(`\n═══ CSS Parity Audit ═══\n`);
console.log(`Comparing ${components.length} components against Cloudscape source...\n`);

let totalMissing = 0;
let totalClean = 0;
const issues: DiffResult[] = [];

for (const comp of components) {
  const result = diffComponent(comp);

  if (result.missing.size === 0) {
    totalClean++;
    if (verbose) {
      console.log(`  ✅ ${comp}`);
    }
  } else {
    const missingCount = [...result.missing.values()].reduce((sum, arr) => sum + arr.length, 0);
    totalMissing += missingCount;
    issues.push(result);

    console.log(`  ❌ ${comp} (${missingCount} missing)`);
    for (const [cls, props] of result.missing) {
      if (props.length <= 5) {
        console.log(`     .${cls}: ${props.join(', ')}`);
      } else {
        console.log(`     .${cls}: ${props.slice(0, 5).join(', ')} (+${props.length - 5} more)`);
      }
    }
  }
}

console.log(`\n${totalClean} clean, ${issues.length} with gaps (${totalMissing} total missing properties)\n`);

if (totalMissing > 0) {
  process.exitCode = 1;
}
