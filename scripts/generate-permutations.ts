#!/usr/bin/env tsx
/**
 * generate-permutations.ts
 *
 * Reads Cloudscape permutation page configs from the submodule and generates
 * Lit permutation pages for our components.
 *
 * Uses the TypeScript compiler API to parse TSX and extract createPermutations()
 * config arrays, converting JSX nodes to Lit html`` tagged template literals.
 *
 * Usage:
 *   npx tsx scripts/generate-permutations.ts                      # all overlapping components
 *   npx tsx scripts/generate-permutations.ts --component badge    # single component
 *   npx tsx scripts/generate-permutations.ts --dry-run            # preview without writing
 *   npx tsx scripts/generate-permutations.ts --force              # overwrite existing files
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import ts from 'typescript';

const ROOT = path.resolve(import.meta.dirname, '..');
const CS_PAGES = path.join(ROOT, 'vendor', 'cloudscape-source', 'pages');
const DEMO_PAGES = path.join(ROOT, 'demo', 'pages');

const HEADER_COMMENT = '// AUTO-GENERATED from vendor/cloudscape-source — do not edit manually';

// ─── CLI ───────────────────────────────────────────────────────

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const isForce = args.includes('--force');
const componentArg = args.find((_: string, i: number) => args[i - 1] === '--component');

// ─── Component Discovery ──────────────────────────────────────

/** Find components that exist in both demo/pages/ and vendor/cloudscape-source/pages/ with a permutations file */
function findOverlappingComponents(): string[] {
  const csComponents = new Set<string>();
  if (fs.existsSync(CS_PAGES)) {
    for (const entry of fs.readdirSync(CS_PAGES, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        const permFile = path.join(CS_PAGES, entry.name, 'permutations.page.tsx');
        if (fs.existsSync(permFile)) {
          csComponents.add(entry.name);
        }
      }
    }
  }

  const demoComponents = new Set<string>();
  if (fs.existsSync(DEMO_PAGES)) {
    for (const entry of fs.readdirSync(DEMO_PAGES, { withFileTypes: true })) {
      if (entry.isDirectory() && !entry.name.startsWith('_')) {
        demoComponents.add(entry.name);
      }
    }
  }

  const overlap: string[] = [];
  for (const comp of csComponents) {
    if (demoComponents.has(comp)) {
      overlap.push(comp);
    }
  }

  return overlap.sort();
}

// ─── Utility ──────────────────────────────────────────────────

/** Escape a string for use in a single-quoted JS string literal */
function escapeString(s: string): string {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

/** Convert PascalCase to kebab-case */
function pascalToKebab(name: string): string {
  return name.replace(/[A-Z]/g, (m, i) => (i > 0 ? '-' : '') + m.toLowerCase());
}

/** Check if a tag name is a native HTML/SVG element (starts with lowercase) */
function isNativeTag(tagName: string): boolean {
  return /^[a-z]/.test(tagName);
}

/** HTML void elements that don't need closing tags */
const VOID_ELEMENTS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
  'circle', 'line', 'path', 'polyline', 'polygon', 'rect', 'ellipse', 'use', 'stop',
]);

// ─── AST-based JSX to Lit Conversion ──────────────────────────

/** Set of PascalCase component names encountered during JSX conversion */
let collectedComponents: Set<string> = new Set();

/** Get tag name string from a JSX element */
function getTagName(node: ts.JsxOpeningElement | ts.JsxSelfClosingElement | ts.JsxOpeningFragment): string {
  if (ts.isJsxOpeningFragment(node)) return '';
  return node.tagName.getText();
}

/** Convert a tag name to the output tag: PascalCase → cs-kebab-case, lowercase → as-is */
function convertTag(tagName: string): string {
  if (!tagName || isNativeTag(tagName)) return tagName;
  collectedComponents.add(tagName);
  return `cs-${pascalToKebab(tagName)}`;
}

/** Convert JSX attributes to Lit attribute strings */
function convertAttributes(attrs: ts.JsxAttributes): string {
  const parts: string[] = [];

  for (const prop of attrs.properties) {
    if (ts.isJsxSpreadAttribute(prop)) {
      // Spread attributes — skip (handled by render callback)
      continue;
    }
    if (!ts.isJsxAttribute(prop)) continue;

    const name = prop.name.getText();

    // Skip React-specific props
    if (name === 'key') continue;

    // Rename className → class
    const attrName = name === 'className' ? 'class' : name;

    const init = prop.initializer;

    // Boolean shorthand: `<Tag disabled />` → just `disabled`
    if (!init) {
      parts.push(attrName);
      continue;
    }

    // String literal: prop="value"
    if (ts.isStringLiteral(init)) {
      parts.push(`${attrName}="${init.text}"`);
      continue;
    }

    // JSX expression: prop={expr}
    if (ts.isJsxExpression(init) && init.expression) {
      const expr = init.expression;

      // {true} → just the attribute name (boolean true)
      if (expr.kind === ts.SyntaxKind.TrueKeyword) {
        parts.push(attrName);
        continue;
      }

      // {false} → omit entirely
      if (expr.kind === ts.SyntaxKind.FalseKeyword) {
        continue;
      }

      // {"string"} → prop="string"
      if (ts.isStringLiteral(expr)) {
        parts.push(`${attrName}="${expr.text}"`);
        continue;
      }

      // {number} → prop="number"
      if (ts.isNumericLiteral(expr)) {
        parts.push(`${attrName}="${expr.text}"`);
        continue;
      }

      // {[...]} array → .prop=\${[...]}
      if (ts.isArrayLiteralExpression(expr)) {
        // Emit array as property binding with inline array
        const items = expr.elements.map(e => emitExpression(e));
        parts.push(`.${attrName}=\${[${items.join(', ')}]}`);
        continue;
      }

      // {{...}} object (like style) → omit (not worth converting)
      if (ts.isObjectLiteralExpression(expr)) {
        continue;
      }

      // Identifier or property access → use string placeholder
      if (ts.isIdentifier(expr) || ts.isPropertyAccessExpression(expr)) {
        parts.push(`${attrName}="[dynamic]"`);
        continue;
      }

      // Fallback: string placeholder
      parts.push(`${attrName}="[expr]"`);
      continue;
    }
  }

  return parts.length > 0 ? ' ' + parts.join(' ') : '';
}

/** Convert JSX children to Lit template content */
function convertChildren(children: ts.NodeArray<ts.JsxChild>): string {
  const parts: string[] = [];

  for (const child of children) {
    if (ts.isJsxText(child)) {
      const text = child.text;
      // Preserve meaningful text, collapse pure whitespace to single space
      const trimmed = text.replace(/^\s+$/g, ' ').replace(/\n\s*/g, ' ');
      if (trimmed && trimmed !== ' ') {
        parts.push(trimmed);
      } else if (trimmed === ' ' && parts.length > 0) {
        parts.push(' ');
      }
      continue;
    }

    if (ts.isJsxExpression(child)) {
      if (!child.expression) continue;
      const expr = child.expression;

      // {' '} → space
      if (ts.isStringLiteral(expr) && /^\s+$/.test(expr.text)) {
        parts.push(' ');
        continue;
      }

      // {"text"} → text
      if (ts.isStringLiteral(expr)) {
        parts.push(expr.text);
        continue;
      }

      // Other expressions → placeholder
      parts.push(`\${${expr.getText()}}`);
      continue;
    }

    if (ts.isJsxElement(child) || ts.isJsxSelfClosingElement(child) || ts.isJsxFragment(child)) {
      parts.push(jsxToLitInner(child));
      continue;
    }
  }

  return parts.join('');
}

/**
 * Convert a JSX AST node to a Lit html`` tagged template literal string.
 * Returns the inner template content (without the html`` wrapper) for nested elements,
 * or the full html`...` for top-level calls.
 */
function jsxToLitInner(node: ts.JsxElement | ts.JsxSelfClosingElement | ts.JsxFragment): string {
  // Fragment: just emit children
  if (ts.isJsxFragment(node)) {
    return convertChildren(node.children);
  }

  // Self-closing element
  if (ts.isJsxSelfClosingElement(node)) {
    const rawTag = node.tagName.getText();
    const tag = convertTag(rawTag);
    const attrs = convertAttributes(node.attributes);

    if (isNativeTag(rawTag) && VOID_ELEMENTS.has(rawTag)) {
      return `<${tag}${attrs}>`;
    }
    // Custom elements need closing tag
    return `<${tag}${attrs}></${tag}>`;
  }

  // Full element with children
  const rawTag = getTagName(node.openingElement);
  const tag = convertTag(rawTag);
  const attrs = convertAttributes(node.openingElement.attributes);
  const childContent = convertChildren(node.children);

  // SVG void elements that happen to have empty children
  if (isNativeTag(rawTag) && VOID_ELEMENTS.has(rawTag) && !childContent.trim()) {
    return `<${tag}${attrs}>`;
  }

  return `<${tag}${attrs}>${childContent}</${tag}>`;
}

/** Convert JSX node to complete Lit html`...` expression */
function jsxToLit(node: ts.JsxElement | ts.JsxSelfClosingElement | ts.JsxFragment): string {
  const inner = jsxToLitInner(node);
  return `html\`${inner}\``;
}

// ─── AST Expression Emitter ───────────────────────────────────

/**
 * Emit a TypeScript AST expression as a string suitable for generated code.
 * Handles literals, arrays, objects, JSX, and falls back to source text.
 */
function emitExpression(node: ts.Node): string {
  // String literal
  if (ts.isStringLiteral(node)) {
    return `'${escapeString(node.text)}'`;
  }

  // Template literal
  if (ts.isNoSubstitutionTemplateLiteral(node)) {
    return `\`${node.text}\``;
  }
  if (ts.isTemplateExpression(node)) {
    return node.getText();
  }

  // Numeric literal
  if (ts.isNumericLiteral(node)) {
    return node.text;
  }

  // Prefix unary: -1, +2
  if (ts.isPrefixUnaryExpression(node)) {
    return node.getText();
  }

  // Boolean
  if (node.kind === ts.SyntaxKind.TrueKeyword) return 'true';
  if (node.kind === ts.SyntaxKind.FalseKeyword) return 'false';

  // undefined
  if (ts.isIdentifier(node) && node.text === 'undefined') return 'undefined';

  // null
  if (node.kind === ts.SyntaxKind.NullKeyword) return 'null';

  // Array literal
  if (ts.isArrayLiteralExpression(node)) {
    const items = node.elements.map(e => emitExpression(e));
    // If it's a short array, put on one line; otherwise multiline
    const oneLiner = `[${items.join(', ')}]`;
    if (oneLiner.length < 120) return oneLiner;
    return `[\n        ${items.join(',\n        ')},\n      ]`;
  }

  // Object literal
  if (ts.isObjectLiteralExpression(node)) {
    const props: string[] = [];
    for (const prop of node.properties) {
      if (ts.isPropertyAssignment(prop)) {
        const key = prop.name.getText();
        const value = emitExpression(prop.initializer);
        props.push(`${key}: ${value}`);
      } else if (ts.isShorthandPropertyAssignment(prop)) {
        const name = prop.name.getText();
        props.push(`${name}: undefined /* ${name} */`);
      } else if (ts.isSpreadAssignment(prop)) {
        // Skip spreads
        continue;
      }
    }
    const oneLiner = `{ ${props.join(', ')} }`;
    if (oneLiner.length < 120) return oneLiner;
    return `{\n        ${props.join(',\n        ')},\n      }`;
  }

  // JSX elements → convert to Lit html``
  if (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node) || ts.isJsxFragment(node)) {
    return jsxToLit(node);
  }

  // Parenthesized expression: unwrap
  if (ts.isParenthesizedExpression(node)) {
    return emitExpression(node.expression);
  }

  // Arrow function → placeholder string
  if (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) {
    return `'[function]'`;
  }

  // Call expression: e.g. range(20).map(...) or enteredTextLabel
  if (ts.isCallExpression(node)) {
    // Try to check if it's something.map() producing an array
    return `undefined /* ${summarizeExpression(node)} */`;
  }

  // Property access (e.g., `SomeEnum.Value`) → string placeholder
  if (ts.isPropertyAccessExpression(node)) {
    return `undefined /* ${node.getText()} */`;
  }

  // Identifier (variable reference)
  if (ts.isIdentifier(node)) {
    return `undefined /* ${node.text} */`;
  }

  // new Array(...).fill(...).map(...) — complex expression
  if (ts.isNewExpression(node)) {
    return `undefined /* ${summarizeExpression(node)} */`;
  }

  // Conditional expression: a ? b : c
  if (ts.isConditionalExpression(node)) {
    return `undefined /* conditional */`;
  }

  // Fallback: try source text but wrap as comment
  const text = node.getText();
  if (text.length < 60 && !text.includes('\n')) {
    return `undefined /* ${text} */`;
  }
  return `undefined /* complex expression */`;
}

/** Summarize an expression for a comment */
function summarizeExpression(node: ts.Node): string {
  const text = node.getText();
  if (text.length <= 40) return text;
  return text.substring(0, 37) + '...';
}

// ─── AST-based Config Extraction ──────────────────────────────

interface PermutationSet {
  props: Record<string, string[]>;
}

/**
 * Walk the AST to find all `createPermutations([...])` call expressions.
 * Returns an array of arrays — one per call — where each inner array
 * contains parsed permutation set objects.
 */
function extractPermutationSets(source: string): PermutationSet[][] {
  const sourceFile = ts.createSourceFile(
    'file.tsx',
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

  const result: PermutationSet[][] = [];

  function visit(node: ts.Node): void {
    if (ts.isCallExpression(node)) {
      // Check if it's `createPermutations(...)` or `createPermutations<Type>(...)`
      const exprText = node.expression.getText();
      if (exprText === 'createPermutations') {
        const arg = node.arguments[0];
        if (arg && ts.isArrayLiteralExpression(arg)) {
          const sets = parseConfigArray(arg);
          if (sets.length > 0) {
            result.push(sets);
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return result;
}

/** Parse the array argument to createPermutations: [ { prop: [...], ... }, ... ] */
function parseConfigArray(arr: ts.ArrayLiteralExpression): PermutationSet[] {
  const sets: PermutationSet[] = [];

  for (const elem of arr.elements) {
    if (!ts.isObjectLiteralExpression(elem)) continue;

    const props: Record<string, string[]> = {};

    for (const prop of elem.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;

      const key = prop.name.getText();
      const init = prop.initializer;

      if (ts.isArrayLiteralExpression(init)) {
        props[key] = init.elements.map(e => emitExpression(e));
      } else {
        // Single value not in array — wrap it
        props[key] = [emitExpression(init)];
      }
    }

    if (Object.keys(props).length > 0) {
      sets.push({ props });
    }
  }

  return sets;
}

// ─── Code Generation ──────────────────────────────────────────

/** Convert component name to PascalCase class name */
function toPascalCase(kebab: string): string {
  return kebab.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

function resolvePropsType(component: string): string {
  const interfacePath = path.join(ROOT, 'src', component, 'interfaces.ts');
  if (!fs.existsSync(interfacePath)) return 'Record<string, unknown>';
  const src = fs.readFileSync(interfacePath, 'utf-8');
  const pascal = toPascalCase(component);
  const re = new RegExp(`export interface (${pascal}Props)\\b`);
  const match = src.match(re);
  return match ? match[1] : 'Record<string, unknown>';
}

/** Convert camelCase prop name to kebab-case */
function toKebab(camel: string): string {
  return camel.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);
}

/** Generate all unique prop names across all sets */
function collectAllProps(allSets: PermutationSet[][]): Set<string> {
  const props = new Set<string>();
  for (const sets of allSets) {
    for (const set of sets) {
      for (const propName of Object.keys(set.props)) {
        props.add(propName);
      }
    }
  }
  return props;
}

/** Generate the render callback template for a component */
function generateRenderCallback(component: string, allProps: Set<string>): string {
  const tag = `cs-${component}`;
  const bindings: string[] = [];
  const hasChildren = allProps.has('children');

  for (const propName of allProps) {
    if (propName === 'children') continue;

    // Use property binding (works for all types)
    bindings.push(`.${propName}=\${p.${propName}}`);
  }

  const bindingsStr = bindings.length > 0 ? ' ' + bindings.join(' ') : '';
  const childrenStr = hasChildren ? '${p.children}' : '';

  if (childrenStr) {
    return `p => html\`<${tag}${bindingsStr}>\${p.children}</${tag}>\``;
  }
  return `p => html\`<${tag}${bindingsStr}></${tag}>\``;
}

/** Format a permutation set's config object as TypeScript source */
function formatPermutationConfig(set: PermutationSet): string {
  const lines: string[] = [];
  lines.push('  {');
  const entries = Object.entries(set.props);
  for (const [propName, values] of entries) {
    const valuesStr = values.join(', ');
    lines.push(`    ${propName}: [${valuesStr}],`);
  }
  lines.push('  },');
  return lines.join('\n');
}

/** Generate the full Lit permutation page source file */
function generatePermutationPage(component: string, source: string): string {
  // Reset collected components for this page
  collectedComponents = new Set();

  const allSetsGroups = extractPermutationSets(source);

  if (allSetsGroups.length === 0) {
    throw new Error(`No createPermutations() calls found in ${component}`);
  }

  const allProps = collectAllProps(allSetsGroups);
  const className = `${toPascalCase(component)}PermutationsPage`;
  const tagName = `${component}-permutations-page`;
  const renderCallback = generateRenderCallback(component, allProps);
  const propsType = resolvePropsType(component);

  // Build the config blocks
  const configBlocks: string[] = [];
  for (let i = 0; i < allSetsGroups.length; i++) {
    const sets = allSetsGroups[i];
    const varName = allSetsGroups.length === 1
      ? 'permutations'
      : `permutations${i + 1}`;

    const configLines: string[] = [];
    for (const set of sets) {
      configLines.push(formatPermutationConfig(set));
    }

    configBlocks.push(
      `const ${varName} = createPermutations<Partial<${propsType}> & Record<string, unknown>>([\n${configLines.join('\n')}\n] as any);`
    );
  }

  // Build the render section
  const renderParts: string[] = [];
  for (let i = 0; i < allSetsGroups.length; i++) {
    const varName = allSetsGroups.length === 1
      ? 'permutations'
      : `permutations${i + 1}`;
    const sectionTitle = allSetsGroups.length === 1
      ? 'All permutations'
      : `Set ${i + 1}`;

    renderParts.push(`
      <section>
        <h3>${sectionTitle}</h3>
        <div class="permutation-grid">
          \${renderPermutations(${varName}, ${renderCallback})}
        </div>
      </section>`);
  }

  // Build extra component imports for JSX-converted components
  const extraImports: string[] = [];
  for (const comp of collectedComponents) {
    const kebab = pascalToKebab(comp);
    const importPath = path.join(ROOT, 'src', kebab, 'index.ts');
    if (fs.existsSync(importPath) && kebab !== component) {
      extraImports.push(`import '../../../src/${kebab}/index.js';`);
    }
  }

  // Check if any value uses html`` (needs lit import of html for values)
  const allValuesStr = configBlocks.join('\n');
  const usesHtmlInValues = allValuesStr.includes('html`');

  const displayName = component.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  // Build imports
  const litImports = usesHtmlInValues ? "import { html, css } from 'lit';" : "import { html, css } from 'lit';";

  return `${HEADER_COMMENT}
// Source: vendor/cloudscape-source/pages/${component}/permutations.page.tsx
// Regenerate: npx tsx scripts/generate-permutations.ts --component ${component}
${litImports}
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import { createPermutations } from '../../utils/create-permutations.js';
import { renderPermutations } from '../../utils/permutations-view.js';
import type { ${propsType} } from '../../../src/${component}/interfaces.js';
import '../../../src/${component}/index.js';
${extraImports.length > 0 ? extraImports.join('\n') + '\n' : ''}
${configBlocks.join('\n\n')}

@customElement('${tagName}')
export class ${className} extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css\`
    .permutation-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: flex-start;
    }
  \`];

  override render() {
    return html\`
      <h2>${displayName} — Permutations</h2>
${renderParts.join('\n')}
    \`;
  }
}

export const tagName = '${tagName}';
`;
}

// ─── File I/O ─────────────────────────────────────────────────

function isAutoGenerated(filePath: string): boolean {
  if (!fs.existsSync(filePath)) return false;
  const content = fs.readFileSync(filePath, 'utf-8');
  return content.includes('AUTO-GENERATED');
}

function processComponent(component: string): { status: 'generated' | 'skipped' | 'error'; message: string } {
  const csFile = path.join(CS_PAGES, component, 'permutations.page.tsx');
  const outFile = path.join(DEMO_PAGES, component, 'permutations.ts');

  if (!fs.existsSync(csFile)) {
    return { status: 'skipped', message: 'no Cloudscape permutations source' };
  }

  // Check if output already exists and is manually written
  if (fs.existsSync(outFile) && !isAutoGenerated(outFile) && !isForce) {
    return { status: 'skipped', message: 'existing manual file (use --force to overwrite)' };
  }

  const source = fs.readFileSync(csFile, 'utf-8');

  if (!source.includes('createPermutations')) {
    return { status: 'skipped', message: 'source does not use createPermutations()' };
  }

  try {
    const generated = generatePermutationPage(component, source);

    if (isDryRun) {
      return { status: 'generated', message: `would write ${path.relative(ROOT, outFile)}` };
    }

    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, generated);
    return { status: 'generated', message: path.relative(ROOT, outFile) };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { status: 'error', message: msg };
  }
}

// ─── Main ──────────────────────────────────────────────────────

function main(): void {
  const components = componentArg
    ? [componentArg]
    : findOverlappingComponents();

  if (components.length === 0) {
    console.log('No overlapping components found.');
    process.exit(0);
  }

  console.log(`\n═══ Generate Permutation Pages${isDryRun ? ' (dry run)' : ''} ═══\n`);

  let generated = 0;
  let skipped = 0;
  let errors = 0;

  for (const comp of components) {
    const result = processComponent(comp);

    switch (result.status) {
      case 'generated':
        console.log(`  ✅ ${comp}: ${result.message}`);
        generated++;
        break;
      case 'skipped':
        console.log(`  ⏭️  ${comp}: ${result.message}`);
        skipped++;
        break;
      case 'error':
        console.log(`  ❌ ${comp}: ${result.message}`);
        errors++;
        break;
    }
  }

  console.log(`\n${generated} generated, ${skipped} skipped, ${errors} error(s)\n`);

  if (errors > 0) {
    process.exitCode = 1;
  }
}

main();
