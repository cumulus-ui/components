#!/usr/bin/env tsx
/**
 * generate-component.ts
 *
 * Unified CLI that generates both styles and property declarations for a
 * component in one pass.  Reuses shared lib functions and replicates the
 * thin transformation/generation layers from generate-styles.ts and
 * generate-render.ts without importing from those scripts directly.
 *
 * Usage:
 *   npx tsx scripts/generate-component.ts --component badge
 *   npx tsx scripts/generate-component.ts --all
 *   npx tsx scripts/generate-component.ts --all --dry-run
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { parseClassMap, buildReverseMap } from './lib/css-module-map.js';
import { getImplementedComponents, loadRegistry } from './lib/component-registry.js';
import { prefixClasses } from './lib/prefix-classes.js';

// ─── Paths ────────────────────────────────────────────────────
const ROOT = path.resolve(import.meta.dirname, '..');
const CS = path.join(ROOT, 'node_modules/@cloudscape-design/components');
const CS_INTERNAL = path.join(CS, 'internal/components');
const SRC = path.join(ROOT, 'src');
const OUT_INTERNAL = path.join(SRC, 'internal/styles');
const OUTPUT_DIR = path.join(ROOT, 'scripts', 'output');

const HEADER = [
  '// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT',
  '// License: see /NOTICE',
].join('\n');

// ════════════════════════════════════════════════════════════════
// CSS TRANSFORMATION PIPELINE (replicated from generate-styles.ts)
// ════════════════════════════════════════════════════════════════

function stripCopyrightHeaders(css: string): string {
  return css.replace(/\/\*[\s\S]*?(?:Copyright|SPDX-License-Identifier|Licensed under)[\s\S]*?\*\//g, '');
}

function stripStylelintComments(css: string): string {
  return css.replace(/\/\*\s*stylelint-(?:dis|en)able[^*]*\*\//g, '');
}

function stripDescriptionComments(css: string): string {
  return css.replace(/\/\*\s*Style used for links[\s\S]*?description\s*\*\//g, '');
}

function stripTestComments(css: string): string {
  return css.replace(/\/\*\s*used in test-utils\s*\*\//g, '');
}

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
      continue;
    }

    out.push(line);
  }

  return out.join('\n');
}

function replaceClassNames(css: string, revMap: Record<string, string>): string {
  let result = css;
  const sorted = Object.entries(revMap).sort(([a], [b]) => b.length - a.length);
  for (const [hashed, semantic] of sorted) {
    result = result.replaceAll(`.${hashed}`, `.${semantic}`);
  }
  return result;
}

function stripNotId9(css: string): string {
  return css.replace(/:not\(#\\9\)/g, '');
}

function transformFocusVisible(css: string): string {
  return css.replace(
    /body\[data-awsui-focus-visible=true\]/g,
    ':host-context([data-awsui-focus-visible=true])',
  );
}

function stripEmptyRules(css: string): string {
  return css.replace(/[^{}]*\{\s*\}/g, '');
}

function cleanupWhitespace(css: string): string {
  let r = css;
  r = r.replace(/^\s*\n+/, '');
  r = r.replace(/\n{3,}/g, '\n\n');
  r = r.replace(/[ \t]+$/gm, '');
  r = r.trim();
  return r;
}

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

// ════════════════════════════════════════════════════════════════
// OUTPUT WRAPPING (replicated from generate-styles.ts)
// ════════════════════════════════════════════════════════════════

function toStylesExportName(component: string): string {
  return component.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase()) + 'Styles';
}

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
// PROPERTY GENERATION (replicated from generate-render.ts)
// ════════════════════════════════════════════════════════════════

const NATIVE_ARIA_PROPS = new Set([
  'ariaLabel', 'ariaRequired', 'ariaControls', 'ariaDescribedby',
  'ariaLabelledby', 'ariaHidden', 'ariaExpanded', 'ariaHaspopup',
  'ariaDisabled', 'ariaChecked', 'ariaSelected', 'ariaPressed',
  'ariaValueNow', 'ariaValueMin', 'ariaValueMax', 'ariaValueText',
  'ariaLive', 'ariaAtomic', 'ariaBusy', 'ariaRelevant',
  'ariaCurrent', 'ariaRoleDescription', 'ariaDescription',
]);

const DOM_LIB_ARIA_STRING_PROPS = new Set([
  'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount',
  'ariaColIndex', 'ariaColSpan', 'ariaCurrent', 'ariaDescription', 'ariaDisabled',
  'ariaExpanded', 'ariaHasPopup', 'ariaHidden', 'ariaInvalid', 'ariaKeyShortcuts',
  'ariaLabel', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine',
  'ariaMultiSelectable', 'ariaOrientation', 'ariaPlaceholder', 'ariaPosInSet',
  'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired',
  'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowSpan',
  'ariaSelected', 'ariaSetSize', 'ariaSort', 'ariaValueMax', 'ariaValueMin',
  'ariaValueNow', 'ariaValueText',
]);

const NATIVE_ARIA_TYPES = new Set(['string', 'boolean']);
const SKIP_PROPS = new Set(['style']);

interface ExtractedProp {
  name: string;
  typeStr: string;
  rawType: string;
  optional: boolean;
}

function simplifyType(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed === 'string') return 'string';
  if (trimmed === 'boolean') return 'boolean';
  if (trimmed === 'number') return 'number';
  if (/^('[^']+'\s*\|\s*)+('[^']+')$/.test(trimmed)) return 'string';
  if (/^\w+Props\.\w+$/.test(trimmed)) {
    if (/I18nStrings|Style|Labels|Definition|Detail/.test(trimmed)) return 'complex';
    return 'string';
  }
  if (trimmed.includes('=>')) return 'function';
  if (trimmed.endsWith('[]') || trimmed.startsWith('ReadonlyArray<')) return 'object';
  return 'complex';
}

function extractInterfaceProps(component: string): ExtractedProp[] {
  const interfacePath = path.join(SRC, component, 'interfaces.ts');
  if (!fs.existsSync(interfacePath)) return [];

  let src = fs.readFileSync(interfacePath, 'utf-8');

  const nsIndex = src.indexOf('export declare namespace');
  if (nsIndex !== -1) src = src.slice(0, nsIndex);

  const baseInterfacePath = path.join(SRC, component, 'base-checkbox.ts');
  if (fs.existsSync(baseInterfacePath)) {
    src = fs.readFileSync(baseInterfacePath, 'utf-8') + '\n' + src;
  }

  const props: ExtractedProp[] = [];
  const seen = new Set<string>();

  const propRe = /^\s+(\w+)(\?)?:\s*([^;]+);/gm;
  let m: RegExpExecArray | null;
  while ((m = propRe.exec(src)) !== null) {
    const name = m[1];
    if (seen.has(name)) continue;
    seen.add(name);

    const optional = m[2] === '?';
    const rawType = m[3].trim();

    if (name.startsWith('*') || name.startsWith('/')) continue;

    const typeStr = simplifyType(rawType);
    props.push({ name, typeStr, rawType, optional });
  }

  return props;
}

function classifyProp(name: string, typeStr: string): 'native' | 'forwarded' | 'custom' | 'none' {
  const isSimpleType = NATIVE_ARIA_TYPES.has(typeStr);

  if (NATIVE_ARIA_PROPS.has(name) && isSimpleType) return 'native';

  const forwardMatch = name.match(/^(?:control)(Aria\w+)$/);
  if (forwardMatch) {
    const baseName = forwardMatch[1].charAt(0).toLowerCase() + forwardMatch[1].slice(1);
    if (NATIVE_ARIA_PROPS.has(baseName) && isSimpleType) return 'forwarded';
  }

  if (name.startsWith('aria') && !isSimpleType) return 'custom';

  return 'none';
}

function litType(typeStr: string): string {
  switch (typeStr) {
    case 'string': return 'String';
    case 'boolean': return 'Boolean';
    case 'number': return 'Number';
    default: return 'Object';
  }
}

function toKebab(name: string): string {
  return name.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);
}

function generateDecorator(name: string, typeStr: string, ariaClass: 'native' | 'forwarded' | 'custom' | 'none'): string {
  const lt = litType(typeStr);

  switch (ariaClass) {
    case 'native':
      return `@property({ type: ${lt} })`;

    case 'forwarded': {
      const baseName = name.replace(/^control/, '');
      const kebab = toKebab(baseName.charAt(0).toLowerCase() + baseName.slice(1));
      return `@property({ type: ${lt}, attribute: '${kebab}' })`;
    }

    case 'custom':
      return `@property({ type: ${lt} })`;

    case 'none':
      return `@property({ type: ${lt} })`;
  }
}

function needsAttributeFalse(typeStr: string): boolean {
  return typeStr === 'object' || typeStr === 'complex' || typeStr === 'function';
}

function defaultValue(typeStr: string, rawType: string): string {
  if (typeStr === 'boolean') return 'false';
  if (typeStr === 'number') return '0';
  if (typeStr === 'string') return "''";
  if (rawType.startsWith('ReadonlyArray<') || rawType.endsWith('[]')) return '[]';
  return 'undefined';
}

function generatePropBlock(component: string): string {
  const props = extractInterfaceProps(component);
  const lines: string[] = [];

  for (const prop of props) {
    if (SKIP_PROPS.has(prop.name)) continue;

    const ariaClass = classifyProp(prop.name, prop.typeStr);

    if (ariaClass === 'native') {
      const needsOverride = DOM_LIB_ARIA_STRING_PROPS.has(prop.name);
      const prefix = needsOverride ? 'override ' : '';
      lines.push(`  // NOTE: if forwarded to inner element, rename to controlAriaX with attribute: '${toKebab(prop.name)}'`);
      lines.push(`  @property({ type: String })`);
      lines.push(`  ${prefix}${prop.name}: string | null = null;`);
      lines.push('');
      continue;
    }

    if (ariaClass === 'forwarded') {
      const decorator = generateDecorator(prop.name, prop.typeStr, ariaClass);
      const internalName = 'control' + prop.name.charAt(0).toUpperCase() + prop.name.slice(1);
      lines.push(`  ${decorator}`);
      lines.push(`  ${internalName} = '';`);
      lines.push('');
      continue;
    }

    if (needsAttributeFalse(prop.typeStr)) {
      lines.push(`  @property({ attribute: false })`);
      lines.push(`  ${prop.name}${prop.optional ? '?' : ''}: ${prop.rawType}${prop.optional ? '' : ' = ' + defaultValue(prop.typeStr, prop.rawType)};`);
      lines.push('');
      continue;
    }

    const lt = litType(prop.typeStr);
    lines.push(`  @property({ type: ${lt} })`);
    lines.push(`  ${prop.name}${prop.optional ? '?' : ''}: ${prop.rawType}${prop.optional ? '' : ' = ' + defaultValue(prop.typeStr, prop.rawType)};`);
    lines.push('');
  }

  return lines.join('\n');
}

// ════════════════════════════════════════════════════════════════
// CSS COVERAGE AUDIT (replicated from generate-render.ts)
// ════════════════════════════════════════════════════════════════

function auditCSSCoverage(component: string): string[] {
  const issues: string[] = [];

  const internalPath = path.join(SRC, component, 'internal.ts');
  if (!fs.existsSync(internalPath)) return issues;
  const templateSrc = fs.readFileSync(internalPath, 'utf-8');

  const templateClasses = new Set<string>();
  const classRe = /class[=\s]*["'`]([^"'`]+)["'`]|class=\$\{classMap\(\{([^}]+)\}\)/g;
  let m: RegExpExecArray | null;
  while ((m = classRe.exec(templateSrc)) !== null) {
    const raw = m[1] || m[2];
    if (!raw) continue;
    if (m[1]) {
      raw.split(/\s+/).forEach(c => { if (c && !c.includes('$')) templateClasses.add(c); });
    } else {
      const keyRe = /'([^']+)'/g;
      let km;
      while ((km = keyRe.exec(raw)) !== null) {
        templateClasses.add(km[1]);
      }
    }
  }

  const styleFiles: string[] = [];
  const stylesPath = path.join(SRC, component, 'styles.ts');
  if (fs.existsSync(stylesPath)) styleFiles.push(stylesPath);

  const staticStylesRe = /import\s*\{[^}]*\}\s*from\s*'([^']*styles[^']*)'/g;
  let sm;
  while ((sm = staticStylesRe.exec(templateSrc)) !== null) {
    const importPath = sm[1].replace(/\.js$/, '.ts');
    const resolved = path.resolve(path.join(SRC, component), importPath);
    if (fs.existsSync(resolved)) styleFiles.push(resolved);
  }

  const cssClasses = new Set<string>();
  for (const sf of styleFiles) {
    const css = fs.readFileSync(sf, 'utf-8');
    const selectorRe = /\.([a-zA-Z][\w-]*)/g;
    let cm;
    while ((cm = selectorRe.exec(css)) !== null) {
      cssClasses.add(cm[1]);
    }
  }

  const SKIP = new Set(['filled', 'stroke-linejoin-round', 'stroke-linecap-round', 'expandable', 'expanded']);

  const STRUCTURAL_CLASSES: Record<string, Set<string>> = {
    'structured-item': new Set([
      'structured-item--icon',
      'structured-item--secondary',
    ]),
  };

  const structuralSkip = new Set<string>();
  for (const sf of styleFiles) {
    const basename = path.basename(sf, '.ts');
    const structural = STRUCTURAL_CLASSES[basename];
    if (structural) {
      for (const cls of structural) structuralSkip.add(cls);
    }
  }

  for (const cls of templateClasses) {
    if (SKIP.has(cls)) continue;
    if (structuralSkip.has(cls)) continue;
    if (!cssClasses.has(cls)) {
      issues.push(`Template class "${cls}" has no matching CSS selector`);
    }
  }

  return issues;
}

// ════════════════════════════════════════════════════════════════
// STYLE GENERATION
// ════════════════════════════════════════════════════════════════

interface GeneratedFile {
  relativePath: string;
  absolutePath: string;
  content: string;
}

const SKIP_SUBDIRS = new Set(['test-classes', 'analytics-metadata', 'keyboard-navigation']);

function generateStyleFiles(component: string): GeneratedFile[] {
  const files: GeneratedFile[] = [];

  // 1. Component-level styles.ts
  const cssPath = path.join(CS, component, 'styles.scoped.css');
  const cssJsPath = path.join(CS, component, 'styles.css.js');

  if (!fs.existsSync(cssPath) || !fs.existsSync(cssJsPath)) {
    return files;
  }

  const css = transformCSS(cssPath, cssJsPath);
  const output = wrapLitCSS(css, component);
  const stylesOut = path.join(SRC, component, 'styles.ts');
  files.push({
    relativePath: `src/${component}/styles.ts`,
    absolutePath: stylesOut,
    content: output,
  });

  // 2. Sub-component styles → internal/styles/ (prefixed)
  const compDir = path.join(CS, component);
  const subDirs = fs.readdirSync(compDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !SKIP_SUBDIRS.has(d.name))
    .filter(d =>
      fs.existsSync(path.join(compDir, d.name, 'styles.scoped.css')) &&
      fs.existsSync(path.join(compDir, d.name, 'styles.css.js')),
    );

  for (const sub of subDirs) {
    const subCssPath = path.join(compDir, sub.name, 'styles.scoped.css');
    const subCssJsPath = path.join(compDir, sub.name, 'styles.css.js');
    const subStyleName = `${component}-${sub.name}`;
    const subCss = transformCSS(subCssPath, subCssJsPath, subStyleName);
    const subOutput = wrapInternalLitCSS(subCss, subStyleName);

    files.push({
      relativePath: `src/internal/styles/${subStyleName}.ts`,
      absolutePath: path.join(OUT_INTERNAL, `${subStyleName}.ts`),
      content: subOutput,
    });
  }

  // 3. Internal component style deps (from registry)
  const registry = loadRegistry();
  const entry = registry.get(component);
  if (entry) {
    for (const dep of entry.internalStyleDeps) {
      // Skip sub-component deps (already handled above)
      if (dep.startsWith(`${component}-`)) continue;

      const depCssPath = path.join(CS_INTERNAL, dep, 'styles.scoped.css');
      const depCssJsPath = path.join(CS_INTERNAL, dep, 'styles.css.js');

      if (!fs.existsSync(depCssPath) || !fs.existsSync(depCssJsPath)) continue;

      const depOutPath = path.join(OUT_INTERNAL, `${dep}.ts`);
      // Skip if already exists on disk (don't overwrite shared internal styles)
      if (fs.existsSync(depOutPath)) continue;

      const depCss = transformCSS(depCssPath, depCssJsPath, dep);
      const depOutput = wrapInternalLitCSS(depCss, dep);

      files.push({
        relativePath: `src/internal/styles/${dep}.ts`,
        absolutePath: depOutPath,
        content: depOutput,
      });
    }
  }

  return files;
}

// ════════════════════════════════════════════════════════════════
// PROPERTY FILE GENERATION
// ════════════════════════════════════════════════════════════════

function generatePropFile(component: string): GeneratedFile | null {
  const block = generatePropBlock(component);
  if (!block) return null;

  const outPath = path.join(OUTPUT_DIR, `${component}.props.ts`);
  return {
    relativePath: `scripts/output/${component}.props.ts`,
    absolutePath: outPath,
    content: block + '\n',
  };
}

// ════════════════════════════════════════════════════════════════
// DRY-RUN COMPARISON
// ════════════════════════════════════════════════════════════════

type DiskStatus = 'up-to-date' | 'stale' | 'new';

function compareWithDisk(file: GeneratedFile): DiskStatus {
  if (!fs.existsSync(file.absolutePath)) return 'new';
  const existing = fs.readFileSync(file.absolutePath, 'utf-8');
  return existing === file.content ? 'up-to-date' : 'stale';
}

// ════════════════════════════════════════════════════════════════
// ORCHESTRATOR
// ════════════════════════════════════════════════════════════════

interface ComponentResult {
  component: string;
  styleFiles: GeneratedFile[];
  propFile: GeneratedFile | null;
  propCount: number;
  cssIssues: string[];
  allUpToDate: boolean;
}

function processComponent(component: string, dryRun: boolean): ComponentResult {
  const styleFiles = generateStyleFiles(component);
  const propFile = generatePropFile(component);
  const propCount = extractInterfaceProps(component).filter(p => !SKIP_PROPS.has(p.name)).length;
  const cssIssues = auditCSSCoverage(component);

  const allFiles = [...styleFiles];
  if (propFile) allFiles.push(propFile);

  let allUpToDate = true;

  if (dryRun) {
    for (const file of allFiles) {
      if (compareWithDisk(file) === 'stale') {
        allUpToDate = false;
      }
    }
  } else {
    for (const file of allFiles) {
      fs.mkdirSync(path.dirname(file.absolutePath), { recursive: true });
      fs.writeFileSync(file.absolutePath, file.content);
    }
  }

  return { component, styleFiles, propFile, propCount, cssIssues, allUpToDate };
}

// ════════════════════════════════════════════════════════════════
// CLI OUTPUT
// ════════════════════════════════════════════════════════════════

function statusLabel(status: DiskStatus): string {
  switch (status) {
    case 'up-to-date': return '✅';
    case 'stale': return '⚠️';
    case 'new': return '🆕';
  }
}

function statusSuffix(status: DiskStatus): string {
  switch (status) {
    case 'up-to-date': return ' (up to date)';
    case 'stale': return ' (STALE — would change)';
    case 'new': return ' (new — would create)';
  }
}

function printSingleResult(result: ComponentResult, dryRun: boolean): void {
  console.log('');
  console.log('Styles:');
  for (const f of result.styleFiles) {
    if (dryRun) {
      const status = compareWithDisk(f);
      console.log(`  ${statusLabel(status)}  ${f.relativePath}${statusSuffix(status)}`);
    } else {
      console.log(`  ✓ ${f.relativePath}`);
    }
  }

  if (result.propFile) {
    console.log('');
    console.log('Properties:');
    if (dryRun) {
      const status = compareWithDisk(result.propFile);
      console.log(`  ${statusLabel(status)}  ${result.propFile.relativePath}${statusSuffix(status)} (${result.propCount} properties)`);
    } else {
      console.log(`  ✓ ${result.propFile.relativePath} (${result.propCount} properties)`);
    }
  }

  if (result.cssIssues.length > 0) {
    console.log('');
    console.log('CSS Coverage:');
    for (const issue of result.cssIssues) {
      console.log(`  ⚠️  ${issue}`);
    }
  } else {
    console.log('');
    console.log('CSS Coverage:');
    console.log(`  ✅ ${result.component} — all template classes have CSS selectors`);
  }

  console.log('');
  console.log('Done.');
}

function printAllDryRunResults(results: ComponentResult[]): void {
  let staleCount = 0;

  for (const result of results) {
    if (result.allUpToDate) {
      console.log(`  ✅ ${result.component} (up to date)`);
    } else {
      console.log(`  ⚠️  ${result.component} (STALE — would change)`);
      staleCount++;
    }
  }

  console.log('');
  if (staleCount === 0) {
    console.log(`All ${results.length} components up to date.`);
  } else {
    console.log(`${staleCount} of ${results.length} components are stale.`);
  }
}

function printAllResults(results: ComponentResult[]): void {
  let totalStyles = 0;
  let totalProps = 0;
  let totalCssIssues = 0;

  for (const result of results) {
    const styleCount = result.styleFiles.length;
    totalStyles += styleCount;
    totalProps += result.propCount;
    totalCssIssues += result.cssIssues.length;

    const cssStatus = result.cssIssues.length === 0 ? '✅' : `⚠️ ${result.cssIssues.length} issue(s)`;
    console.log(`  ✓ ${result.component} (${styleCount} style file(s), ${result.propCount} props) ${cssStatus}`);
  }

  console.log('');
  console.log(`Generated: ${totalStyles} style files, ${results.length} prop files`);
  if (totalCssIssues > 0) {
    console.log(`CSS coverage warnings: ${totalCssIssues}`);
  }
}

// ════════════════════════════════════════════════════════════════
// CLI ARGS
// ════════════════════════════════════════════════════════════════

interface CliArgs {
  component?: string;
  all: boolean;
  dryRun: boolean;
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  const result: CliArgs = { all: false, dryRun: false };

  const compIdx = args.indexOf('--component');
  if (compIdx >= 0 && compIdx + 1 < args.length) {
    result.component = args[compIdx + 1];
  }

  if (args.includes('--all')) result.all = true;
  if (args.includes('--dry-run')) result.dryRun = true;

  return result;
}

// ════════════════════════════════════════════════════════════════
// MAIN
// ════════════════════════════════════════════════════════════════

function main(): void {
  const { component, all, dryRun } = parseArgs();

  if (!component && !all) {
    console.error('Usage:');
    console.error('  npx tsx scripts/generate-component.ts --component <name>');
    console.error('  npx tsx scripts/generate-component.ts --all');
    console.error('  npx tsx scripts/generate-component.ts --all --dry-run');
    process.exitCode = 1;
    return;
  }

  const modeLabel = component ? component : `--all${dryRun ? ' --dry-run' : ''}`;
  console.log('╔═══════════════════════════════════════════════╗');
  console.log(`║  generate-component: ${modeLabel.padEnd(25)}║`);
  console.log('╚═══════════════════════════════════════════════╝');

  if (component) {
    const implemented = getImplementedComponents();
    if (!implemented.includes(component)) {
      console.error(`\nError: "${component}" is not an implemented component.`);
      console.error(`Available: ${implemented.join(', ')}`);
      process.exitCode = 1;
      return;
    }

    const result = processComponent(component, dryRun);
    printSingleResult(result, dryRun);

    if (dryRun && !result.allUpToDate) {
      process.exitCode = 1;
    }
    return;
  }

  // --all mode
  const components = getImplementedComponents();
  console.log('');

  const results: ComponentResult[] = [];
  for (const comp of components) {
    results.push(processComponent(comp, dryRun));
  }

  if (dryRun) {
    printAllDryRunResults(results);
    const hasStale = results.some(r => !r.allUpToDate);
    if (hasStale) {
      process.exitCode = 1;
    }
  } else {
    printAllResults(results);
  }
}

main();
