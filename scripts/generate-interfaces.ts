#!/usr/bin/env tsx
/**
 * generate-interfaces.ts
 *
 * Reads every interfaces.d.ts from @cloudscape-design/components and generates
 * cumulus-ui interfaces.ts files with React types stripped and Web Component
 * equivalents (slot/event annotations).
 *
 * Usage: npx tsx scripts/generate-interfaces.ts
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

// ─── Paths ────────────────────────────────────────────────────
const ROOT = path.resolve(import.meta.dirname, '..');
const CS = path.join(ROOT, 'node_modules/@cloudscape-design/components');
const OUT = path.join(ROOT, 'src');

const HEADER = [
  '// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT',
  '// @ts-nocheck — references Cloudscape-internal types not yet generated',
  '// License: see /NOTICE',
].join('\n');

// ─── Configuration ────────────────────────────────────────────

/** Types to always strip from `extends` clauses */
const STRIP_EXTENDS = new Set([
  'BaseComponentProps',
  'FormFieldControlProps',
  'FormFieldCommonValidationControlProps',
  'FormFieldValidationControlProps',
  'DropdownStatusProps',
]);

/**
 * Map of stripped local-name → import specifier for the shared types file.
 * When a stripped name still appears in the generated body, we re-import it
 * from our own cloudscape-types module.
 */
const SHARED_TYPE_EXPORTS: Record<string, string> = {
  _ClickDetail:          'ClickDetail as _ClickDetail',
  BaseNavigationDetail:  'BaseNavigationDetail',
  BaseKeyDetail:         'BaseKeyDetail',
  Optional:              'Optional',
  OptionDefinition:      'OptionDefinition',
  OptionGroupDefinition: 'OptionGroup as OptionGroupDefinition',
};
const SHARED_TYPES_REL = '../internal/generated/cloudscape-types.js';

// ════════════════════════════════════════════════════════════════
// HELPERS
// ════════════════════════════════════════════════════════════════

function shouldStripImport(line: string): boolean {
  if (/from\s+['"]react['"]/.test(line)) return true;
  if (/from\s+['"]\.\.?\/internal\//.test(line)) return true;
  return false;
}

function splitBracketAware(s: string, delim = ','): string[] {
  const parts: string[] = [];
  let cur = '';
  let depth = 0;
  for (const ch of s) {
    if (ch === '<' || ch === '(' || ch === '[') depth++;
    if (ch === '>' || ch === ')' || ch === ']') depth--;
    if (ch === delim && depth === 0) { parts.push(cur); cur = ''; }
    else cur += ch;
  }
  if (cur.trim()) parts.push(cur);
  return parts;
}

function skipMultilineProp(lines: string[], start: number): number {
  let idx = start;
  let depth = 0;
  while (idx < lines.length) {
    for (const ch of lines[idx]) {
      if (ch === '{' || ch === '<' || ch === '(') depth++;
      if (ch === '}' || ch === '>' || ch === ')') depth--;
    }
    idx++;
    if (depth <= 0 && lines[idx - 1].trim().endsWith(';')) break;
  }
  return idx;
}

function extractImportedNames(line: string): string[] {
  const names: string[] = [];
  const named = line.match(/import\s+\{([^}]+)\}/);
  if (named) {
    for (const part of named[1].split(',')) {
      const t = part.trim();
      if (!t) continue;
      const asM = t.match(/^(\w+)\s+as\s+(\w+)$/);
      names.push(asM ? asM[2] : t);
    }
  }
  const def = line.match(/^import\s+(\w+)[\s,]/);
  if (def && def[1] !== 'type') names.push(def[1]);
  return names;
}

function jsdocFirstLine(lines: string[]): string {
  for (const l of lines) {
    const t = l.trim().replace(/^\*\s?/, '').trim();
    if (t && t !== '/**' && t !== '*/' && !t.startsWith('@') && t !== '*') {
      return t.split('.')[0] || '';
    }
  }
  return '';
}

function extractDetail(line: string): string {
  const handlerIdx = line.search(/(?:Non)?CancelableEventHandler/);
  if (handlerIdx < 0) return 'void';
  const lt = line.indexOf('<', handlerIdx);
  if (lt < 0) return 'void';
  let depth = 0;
  for (let j = lt; j < line.length; j++) {
    if (line[j] === '<') depth++;
    if (line[j] === '>') depth--;
    if (depth === 0) return line.slice(lt + 1, j);
  }
  return 'void';
}

function stripAwsui(jsdocLines: string[]): string[] {
  const filtered = jsdocLines.filter(l => !l.includes('@awsuiSystem'));
  const hasContent = filtered.some(l => {
    const t = l.trim();
    return t !== '/**' && t !== '*/' && t !== '*';
  });
  return hasContent ? filtered : [];
}

function eventName(propName: string): string {
  if (propName.startsWith('on')) {
    return propName.charAt(2).toLowerCase() + propName.slice(3);
  }
  return propName;
}

// ════════════════════════════════════════════════════════════════
// PASS 1 — Strip / transform imports
// ════════════════════════════════════════════════════════════════

interface Pass1Out { text: string; stripped: Set<string> }

function pass1(content: string): Pass1Out {
  const lines = content.split('\n');
  const out: string[] = [];
  const stripped = new Set<string>();
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trim = line.trim();

    // ── JSDoc that might precede a stripped import ──
    if (trim === '/**') {
      const jsdoc: string[] = [];
      while (i < lines.length) {
        jsdoc.push(lines[i]);
        if (lines[i].trim().endsWith('*/')) { i++; break; }
        i++;
      }
      let peek = i;
      while (peek < lines.length && lines[peek].trim() === '') peek++;
      if (peek < lines.length && lines[peek].trim().startsWith('import ')
          && shouldStripImport(lines[peek].trim())) {
        for (const n of extractImportedNames(lines[peek].trim())) stripped.add(n);
        i = peek + 1;
        continue;
      }
      out.push(...jsdoc);
      continue;
    }

    // ── Import lines ──
    if (trim.startsWith('import ') && /from\s+['"]/.test(trim)) {
      if (shouldStripImport(trim)) {
        for (const n of extractImportedNames(trim)) stripped.add(n);
        i++; continue;
      }
      // Cross-component / same-dir → add .js
      if (/from\s+['"]\.\.?\//.test(trim)) {
        out.push(line.replace(
          /from\s+['"]([^'"]+)['"]/,
          (_, p: string) => `from '${p.endsWith('.js') ? p : p + '.js'}'`,
        ));
        i++; continue;
      }
      out.push(line); i++; continue;
    }

    out.push(line); i++;
  }
  return { text: out.join('\n'), stripped };
}

// ════════════════════════════════════════════════════════════════
// PASS 2 — Process `extends` clauses
// ════════════════════════════════════════════════════════════════

function pass2(content: string, stripped: Set<string>): string {
  return content.replace(
    /(export\s+interface\s+\w+(?:<[^>]*>)?)\s+extends\s+([^{]+?)\s*\{/g,
    (_, prefix: string, extList: string) => {
      const kept = splitBracketAware(extList)
        .map(e => e.trim())
        .filter(e => {
          const base = e.split('<')[0].trim();
          return !STRIP_EXTENDS.has(base) && !stripped.has(base);
        });
      return kept.length
        ? `${prefix} extends ${kept.join(', ')} {`
        : `${prefix} {`;
    },
  );
}

// ════════════════════════════════════════════════════════════════
// PASS 3 — Convert React.ReactNode → @slot, handlers → @event,
//          strip NativeAttributes props, strip @awsuiSystem
// ════════════════════════════════════════════════════════════════

function pass3(content: string): string {
  const lines = content.split('\n');
  const out: string[] = [];
  let inNS = false;          // inside `export declare namespace`
  let braceDepth = 0;
  let nsDepth = -1;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trim = line.trim();

    // Track namespace entry
    if (/^export\s+declare\s+namespace\s/.test(trim)) {
      inNS = true;
      nsDepth = braceDepth;
    }

    // Track braces
    for (const ch of line) {
      if (ch === '{') braceDepth++;
      if (ch === '}') braceDepth--;
    }
    if (inNS && braceDepth <= nsDepth) { inNS = false; nsDepth = -1; }

    // ── JSDoc block ──
    if (trim === '/**') {
      const jsdoc: string[] = [];
      while (i < lines.length) {
        jsdoc.push(lines[i]);
        if (lines[i].trim().endsWith('*/')) { i++; break; }
        i++;
      }
      let peek = i;
      while (peek < lines.length && lines[peek].trim() === '') peek++;
      if (peek >= lines.length) { out.push(...stripAwsui(jsdoc)); continue; }

      const next = lines[peek].trim();

      // Only convert to @slot / @event OUTSIDE the namespace
      if (!inNS) {
        const pName = next.match(/^(\w+)/)?.[1] ?? '';

        // NativeAttributes → drop JSDoc + prop (may be multiline)
        if (pName.startsWith('native') && pName.includes('Attribute')) {
          i = skipMultilineProp(lines, peek); continue;
        }
        // React.ReactNode → @slot
        if (/^\w+\??\s*:\s*React\.ReactNode\s*;?\s*$/.test(next)) {
          const slot = pName === 'children' ? 'default' : pName;
          const desc = jsdocFirstLine(jsdoc);
          out.push(`  /** @slot ${slot}${desc ? ` — ${desc}` : ''} */`);
          i = skipMultilineProp(lines, peek); continue;
        }
        // Event handler → @event (may be multiline)
        if (/^\w+\??\s*:\s*(?:Non)?CancelableEventHandler/.test(next)) {
          const ev = eventName(pName);
          const fullProp = lines.slice(peek, skipMultilineProp(lines, peek)).map(l => l.trim()).join(' ');
          const det = extractDetail(fullProp);
          out.push(`  /** @event ${ev} — CustomEvent<${det}> */`);
          i = skipMultilineProp(lines, peek); continue;
        }
      }

      out.push(...stripAwsui(jsdoc));
      continue;
    }

    // ── Props without JSDoc (outside namespace) ──
    if (!inNS && braceDepth > 0) {
      const pName = trim.match(/^(\w+)/)?.[1] ?? '';

      if (pName.startsWith('native') && pName.includes('Attribute')) {
        i = skipMultilineProp(lines, i);
        continue;
      }
      if (/^\w+\??\s*:\s*React\.ReactNode\s*;?\s*$/.test(trim)) {
        const slot = pName === 'children' ? 'default' : pName;
        out.push(`  /** @slot ${slot} */`);
        i = skipMultilineProp(lines, i);
        continue;
      }
      if (/^\w+\??\s*:\s*(?:Non)?CancelableEventHandler/.test(trim)) {
        const ev = eventName(pName);
        const end = skipMultilineProp(lines, i);
        const fullProp = lines.slice(i, end).map(l => l.trim()).join(' ');
        const det = extractDetail(fullProp);
        out.push(`  /** @event ${ev} — CustomEvent<${det}> */`);
        i = end;
        continue;
      }
    }

    // ── Remove React-only forward-ref interfaces ──
    if (/^export\s+interface\s+\w+ForwardRefType/.test(trim)) {
      let depth = 0;
      do {
        for (const ch of lines[i]) {
          if (ch === '{') depth++;
          if (ch === '}') depth--;
        }
        i++;
      } while (depth > 0 && i < lines.length);
      continue;
    }

    out.push(line);
    i++;
  }
  return out.join('\n');
}

// ════════════════════════════════════════════════════════════════
// PASS 4 — Replace remaining React / handler type references
// ════════════════════════════════════════════════════════════════

function replaceOneHandler(content: string, name: string): string {
  const parts: string[] = [];
  let pos = 0;

  while (pos < content.length) {
    const idx = content.indexOf(name, pos);
    if (idx < 0) { parts.push(content.slice(pos)); break; }

    // word boundary before
    if (idx > 0 && /\w/.test(content[idx - 1])) {
      parts.push(content.slice(pos, idx + 1));
      pos = idx + 1;
      continue;
    }

    parts.push(content.slice(pos, idx));
    const after = idx + name.length;

    if (after < content.length && content[after] === '<') {
      let depth = 0, j = after;
      while (j < content.length) {
        if (content[j] === '<') depth++;
        if (content[j] === '>') depth--;
        j++;
        if (depth === 0) break;
      }
      parts.push(`(event: CustomEvent<${content.slice(after + 1, j - 1)}>) => void`);
      pos = j;
    } else {
      parts.push('(event: CustomEvent<void>) => void');
      pos = after;
    }
  }
  return parts.join('');
}

function pass4(content: string): string {
  let r = content;

  // Handler type aliases remaining in namespace type definitions
  r = replaceOneHandler(r, 'NonCancelableEventHandler');
  r = replaceOneHandler(r, 'CancelableEventHandler');

  // React type replacements
  r = r.replace(/React\.ReactNode/g, 'unknown');
  r = r.replace(/\bReactNode\b/g, 'unknown');
  r = r.replace(/JSX\.Element/g, 'unknown');
  r = r.replace(/React\.Ref<[^>]+>/g, 'unknown');
  r = r.replace(/React\.RefObject<[^>]+>/g, 'unknown');
  r = r.replace(/React\.FocusEvent/g, 'FocusEvent');
  r = r.replace(/React\.KeyboardEvent/g, 'KeyboardEvent');
  r = r.replace(/React\.MouseEvent/g, 'MouseEvent');
  r = r.replace(/React\.SyntheticEvent/g, 'Event');
  r = r.replace(/React\.InputHTMLAttributes<[^>]+>/g, 'unknown');
  r = r.replace(/React\.ButtonHTMLAttributes<[^>]+>/g, 'unknown');
  r = r.replace(/React\.AnchorHTMLAttributes<[^>]+>/g, 'unknown');
  r = r.replace(/React\.HTMLAttributes<[^>]+>/g, 'unknown');
  r = r.replace(/React\.CSSProperties/g, 'Record<string, string>');
  r = r.replace(/React\.ComponentType<[^>]+>/g, 'unknown');
  r = r.replace(/React\.ErrorInfo/g, 'unknown');
  r = r.replace(/React\.Dispatch<React\.SetStateAction<([^>]+)>>/g, '(value: $1) => void');
  r = r.replace(/React\.Dispatch<([^>]+)>/g, '(value: $1) => void');
  r = r.replace(/React\.\w+/g, 'unknown');
  r = r.replace(/import\("react"\)\.\w+<[^>]*>/g, 'unknown');
  r = r.replace(/import\("react"\)\.\w+/g, 'unknown');
  r = r.replace(/\bNonCancelableCustomEvent\b/g, 'CustomEvent');
  r = r.replace(/\bNativeAttributes<[^>]+>/g, 'unknown');
  r = r.replace(/\bSomeRequired<([^,]+),\s*[^>]+>/g, '$1');
  r = r.replace(/\bSomeOptional<([^,]+),\s*[^>]+>/g, '$1');

  return r;
}

// ════════════════════════════════════════════════════════════════
// PASS 5 — Add shared type imports for remaining stripped refs
// ════════════════════════════════════════════════════════════════

function pass5(content: string, stripped: Set<string>): string {
  const needed: string[] = [];

  for (const [local, spec] of Object.entries(SHARED_TYPE_EXPORTS)) {
    if (!stripped.has(local)) continue;
    // Check whether the name still appears in the body (outside import lines)
    const bodyLines = content.split('\n').filter(l => !l.trim().startsWith('import '));
    const body = bodyLines.join('\n');
    const re = new RegExp(`\\b${local}\\b`);
    if (re.test(body)) needed.push(spec);
  }

  if (needed.length === 0) return content;

  const importLine = `import { ${[...new Set(needed)].join(', ')} } from '${SHARED_TYPES_REL}';`;
  const lines = content.split('\n');

  // Insert after the last existing import (or at the top)
  let insertIdx = 0;
  for (let j = 0; j < lines.length; j++) {
    const t = lines[j].trim();
    if (t.startsWith('import ') || t === '') insertIdx = j + 1;
    else break;
  }
  lines.splice(insertIdx, 0, importLine);
  return lines.join('\n');
}

// ════════════════════════════════════════════════════════════════
// PASS 6 — Cosmetic cleanup
// ════════════════════════════════════════════════════════════════

function pass6(content: string): string {
  let r = content;
  // Collapse 3+ blank lines → 2
  r = r.replace(/\n{4,}/g, '\n\n\n');
  // Ensure single trailing newline
  r = r.replace(/\n*$/, '\n');
  return r;
}

// ════════════════════════════════════════════════════════════════
// PIPELINE
// ════════════════════════════════════════════════════════════════

/** Strip copyright/license header comments from source .d.ts files */
function stripCopyrightHeaders(content: string): string {
  return content.replace(/\/\/\s*(?:Copyright|SPDX-License-Identifier|Licensed under)[^\n]*/g, '');
}

function processFile(raw: string): string {
  const clean = stripCopyrightHeaders(raw);
  const { text: p1, stripped } = pass1(clean);
  const p2 = pass2(p1, stripped);
  const p3 = pass3(p2);
  const p4 = pass4(p3);
  const p5 = pass5(p4, stripped);
  const p6 = pass6(p5);
  return HEADER + '\n' + p6;
}

// ════════════════════════════════════════════════════════════════
// COMPONENT DISCOVERY
// ════════════════════════════════════════════════════════════════

function findComponents(): string[] {
  return fs.readdirSync(CS, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('.') && d.name !== 'internal')
    .filter(d => fs.existsSync(path.join(CS, d.name, 'interfaces.d.ts')))
    .map(d => d.name)
    .sort();
}

// ════════════════════════════════════════════════════════════════
// SHARED TYPES GENERATION
// ════════════════════════════════════════════════════════════════

function generateSharedTypes(): void {
  const outDir = path.join(OUT, 'internal', 'generated');
  fs.mkdirSync(outDir, { recursive: true });

  const content = `${HEADER}

/**
 * Shared type definitions extracted from @cloudscape-design/components internals.
 * Components that need these types import from here rather than from React-coupled sources.
 */

// ─── From internal/events ─────────────────────────────────────

export interface ClickDetail {
  button: number;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
}

export interface BaseNavigationDetail {
  href: string | undefined;
  external?: boolean;
  target?: string;
}

export interface BaseKeyDetail {
  keyCode: number;
  key: string;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
  isComposing: boolean;
}

// ─── From internal/types ──────────────────────────────────────

export type Optional<T> = T | undefined;

// ─── From internal/components/option/interfaces ───────────────

interface BaseOption {
  value?: string;
  label?: string;
  lang?: string;
  description?: string;
  disabled?: boolean;
  disabledReason?: string;
  labelTag?: string;
  tags?: ReadonlyArray<string>;
  filteringTags?: ReadonlyArray<string>;
  iconAlt?: string;
  iconAriaLabel?: string;
  iconName?: string;
  iconUrl?: string;
}

export interface OptionDefinition extends BaseOption {
  __labelPrefix?: string;
}

export interface OptionGroup extends BaseOption {
  options: ReadonlyArray<OptionDefinition>;
}
`;

  fs.writeFileSync(path.join(outDir, 'cloudscape-types.ts'), content);
  console.log('  ✓ internal/generated/cloudscape-types.ts');
}

// ════════════════════════════════════════════════════════════════
// MANIFEST GENERATION
// ════════════════════════════════════════════════════════════════

interface ManifestEntry {
  name: string;
  tagName: string;
  slots: string[];
  events: string[];
}

function extractAnnotations(content: string): { slots: string[]; events: string[] } {
  const slots: string[] = [];
  const events: string[] = [];
  for (const m of content.matchAll(/@slot\s+(\w+)/g)) slots.push(m[1]);
  for (const m of content.matchAll(/@event\s+(\w+)/g)) events.push(m[1]);
  return { slots: [...new Set(slots)], events: [...new Set(events)] };
}

function generateManifest(entries: ManifestEntry[]): void {
  const outDir = path.join(OUT, 'internal', 'generated');
  fs.mkdirSync(outDir, { recursive: true });

  const lines = [
    HEADER,
    '',
    'export const COMPONENT_MANIFEST = [',
  ];
  for (const e of entries) {
    const s = e.slots.map(s => `'${s}'`).join(', ');
    const ev = e.events.map(v => `'${v}'`).join(', ');
    lines.push(`  { name: '${e.name}', tagName: '${e.tagName}', slots: [${s}], events: [${ev}] },`);
  }
  lines.push('] as const;');
  lines.push('');

  fs.writeFileSync(path.join(outDir, 'component-manifest.ts'), lines.join('\n'));
  console.log('  ✓ internal/generated/component-manifest.ts');
}

// ════════════════════════════════════════════════════════════════
// AUXILIARY FILES (e.g. checkbox/base-checkbox.d.ts for toggle)
// ════════════════════════════════════════════════════════════════

function processAuxiliary(): void {
  const src = path.join(CS, 'checkbox', 'base-checkbox.d.ts');
  if (!fs.existsSync(src)) return;
  const raw = fs.readFileSync(src, 'utf-8');
  const result = processFile(raw);
  const outDir = path.join(OUT, 'checkbox');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'base-checkbox.ts'), result);
  console.log('  ✓ checkbox/base-checkbox.ts (auxiliary)');
}

// ════════════════════════════════════════════════════════════════
// MAIN
// ════════════════════════════════════════════════════════════════

function main(): void {
  console.log('╔══════════════════════════════════════════════════╗');
  console.log('║  generate-interfaces — Cloudscape → Cumulus UI  ║');
  console.log('╚══════════════════════════════════════════════════╝\n');

  // Step 1: Shared types
  generateSharedTypes();

  // Step 2: Process each component
  const components = findComponents();
  console.log(`\nProcessing ${components.length} components…\n`);

  const manifest: ManifestEntry[] = [];
  let errors = 0;

  for (const comp of components) {
    try {
      const raw = fs.readFileSync(path.join(CS, comp, 'interfaces.d.ts'), 'utf-8');
      const result = processFile(raw);

      const outDir = path.join(OUT, comp);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'interfaces.ts'), result);

      const { slots, events } = extractAnnotations(result);
      manifest.push({ name: comp, tagName: `cs-${comp}`, slots, events });
      console.log(`  ✓ ${comp} (${slots.length} slots, ${events.length} events)`);
    } catch (err) {
      console.error(`  ✗ ${comp}: ${(err as Error).message}`);
      errors++;
    }
  }

  // Step 3: Auxiliary files
  console.log('');
  processAuxiliary();

  // Step 4: Manifest
  console.log('');
  generateManifest(manifest);

  // Summary
  console.log(`\n═══ Done ═══════════════════════════════════════════`);
  console.log(`  Components: ${manifest.length}`);
  console.log(`  Errors:     ${errors}`);
  console.log(`  Output:     ${OUT}/*/interfaces.ts`);
}

main();
