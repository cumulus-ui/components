#!/usr/bin/env tsx
/**
 * dom-audit.ts
 *
 * Compares the rendered DOM structure of Cloudscape React components against
 * our Lit web components. Spins up both dev servers, renders each component
 * in a headless browser, extracts DOM trees, and reports actionable diffs.
 *
 * Usage:
 *   npx tsx scripts/dom-audit.ts                              # diff all components
 *   npx tsx scripts/dom-audit.ts --component tree-view        # diff single component
 *   npx tsx scripts/dom-audit.ts --capture --component checkbox  # save Cloudscape DOM as JSON
 *   npx tsx scripts/dom-audit.ts --template --component checkbox # generate Lit template from captured JSON
 */

import { chromium, type Page } from '@playwright/test';
import { spawn, type ChildProcess } from 'node:child_process';
import * as fs from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const CS_BASELINES = resolve(__dirname, 'cloudscape-baselines');

const CS_PORT = 4174;
const OUR_PORT = 4175;

const COMPONENTS = [
  'anchor-navigation', 'badge', 'box', 'checkbox', 'file-dropzone',
  'grid', 'icon', 'list', 'live-region', 'radio-group',
  'space-between', 'spinner', 'text-content', 'tiles', 'tree-view',
];

// ─── DOM Tree Extraction ──────────────────────────────────────

interface DOMNode {
  tag: string;
  classes: string[];
  role?: string;
  children: DOMNode[];
}

const CAPTURE_DIR = resolve(__dirname, 'output', 'dom-captures');

interface CapturedSection {
  name: string;
  dom: DOMNode;
}

interface CapturedComponent {
  component: string;
  sections: CapturedSection[];
}

// ─── Server Management ────────────────────────────────────────

function startServer(cwd: string, port: number, label: string): Promise<ChildProcess> {
  return new Promise((res, reject) => {
    const child = spawn('npx', ['vite', '--port', String(port), '--strictPort'], {
      cwd,
      stdio: ['ignore', 'pipe', 'pipe'],
      detached: true,
    });

    let started = false;
    const timeout = setTimeout(() => {
      if (!started) { child.kill(); reject(new Error(`${label} did not start`)); }
    }, 30_000);

    const onData = (data: Buffer) => {
      if (data.toString().includes(`localhost:${port}`) || data.toString().includes('ready in')) {
        started = true;
        clearTimeout(timeout);
        res(child);
      }
    };

    child.stdout?.on('data', onData);
    child.stderr?.on('data', onData);
    child.on('error', (err) => { clearTimeout(timeout); reject(err); });
  });
}

// ─── DOM Comparison ───────────────────────────────────────────

interface DiffEntry {
  path: string;
  ourTag: string;
  ourClasses: string[];
  csTag: string;
  csClasses: string[];
  missingClasses: string[];
  extraClasses: string[];
  tagMismatch: boolean;
}

function diffTrees(ours: DOMNode | null, cs: DOMNode | null, path = ''): DiffEntry[] {
  const diffs: DiffEntry[] = [];
  if (!ours || !cs) {
    if (cs && !ours) diffs.push({ path: path || '(root)', ourTag: '(missing)', ourClasses: [], csTag: cs.tag, csClasses: cs.classes, missingClasses: cs.classes, extraClasses: [], tagMismatch: true });
    if (ours && !cs) diffs.push({ path: path || '(root)', ourTag: ours.tag, ourClasses: ours.classes, csTag: '(missing)', csClasses: [], missingClasses: [], extraClasses: ours.classes, tagMismatch: true });
    return diffs;
  }

  const currentPath = path ? `${path} > ${cs.tag}.${cs.classes.join('.')}` : `${cs.tag}.${cs.classes.join('.')}`;

  const tagMismatch = ours.tag !== cs.tag;
  const ourSet = new Set(ours.classes);
  const csSet = new Set(cs.classes);
  const missingClasses = cs.classes.filter(c => !ourSet.has(c));
  const extraClasses = ours.classes.filter(c => !csSet.has(c));

  if (tagMismatch || missingClasses.length > 0 || extraClasses.length > 0) {
    diffs.push({ path: currentPath, ourTag: ours.tag, ourClasses: ours.classes, csTag: cs.tag, csClasses: cs.classes, missingClasses, extraClasses, tagMismatch });
  }

  // Match children by position (best effort)
  const maxChildren = Math.max(ours.children.length, cs.children.length);
  for (let i = 0; i < maxChildren; i++) {
    diffs.push(...diffTrees(ours.children[i] ?? null, cs.children[i] ?? null, currentPath));
  }

  return diffs;
}

// ─── Report Formatting ────────────────────────────────────────

function formatReport(component: string, diffs: DiffEntry[]): string {
  if (diffs.length === 0) return `  ✅ ${component}`;

  const lines = [`  ❌ ${component} (${diffs.length} differences)`];

  for (const d of diffs) {
    if (d.tagMismatch) {
      lines.push(`     TAG  ${d.path}`);
      lines.push(`          ours: <${d.ourTag}>  →  cloudscape: <${d.csTag}>`);
    }
    if (d.missingClasses.length > 0) {
      lines.push(`     ADD  ${d.missingClasses.map(c => `.${c}`).join(' ')}`);
      lines.push(`          at: ${d.path}`);
    }
    if (d.extraClasses.length > 0) {
      lines.push(`     DEL  ${d.extraClasses.map(c => `.${c}`).join(' ')}`);
      lines.push(`          at: ${d.path}`);
    }
  }

  return lines.join('\n');
}

// ─── DOM Extraction ───────────────────────────────────────────

async function extractOurDOM(page: Page, url: string): Promise<DOMNode | null> {
  await page.goto(url);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);

  return page.evaluate(`(() => {
    const walk = (el, depth) => {
      if (depth > 15) return null;
      const children = [];
      for (const child of el.children) {
        if (['SCRIPT', 'STYLE', 'TEMPLATE'].includes(child.tagName)) continue;
        const w = walk(child, depth + 1);
        if (w) children.push(w);
      }
      return {
        tag: el.tagName.toLowerCase(),
        classes: [...el.classList].sort(),
        role: el.getAttribute('role') || undefined,
        children,
      };
    };

    for (const p of document.querySelectorAll('*')) {
      if (!p.shadowRoot) continue;
      const section = p.shadowRoot.querySelector('section');
      if (!section) continue;
      for (const inner of section.querySelectorAll('*')) {
        if (inner.shadowRoot) {
          const root = inner.shadowRoot.querySelector('[role], .root');
          if (root) return walk(root, 0);
        }
      }
    }
    return null;
  })()`);
}

async function extractCloudscapeDOM(page: Page, url: string): Promise<DOMNode | null> {
  await page.goto(url);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);

  return page.evaluate(`(() => {
    const walk = (el, depth) => {
      if (depth > 15) return null;
      const children = [];
      for (const child of el.children) {
        if (['SCRIPT', 'STYLE', 'TEMPLATE'].includes(child.tagName)) continue;
        const w = walk(child, depth + 1);
        if (w) children.push(w);
      }
      const classes = [...new Set([...el.classList]
        .map(c => { const m = c.match(/^awsui_([^_]+)_/); return m ? m[1] : c; })
      )].sort();
      return {
        tag: el.tagName.toLowerCase(),
        classes,
        role: el.getAttribute('role') || undefined,
        children,
      };
    };

    const section = document.querySelector('section');
    if (!section) return null;
    const root = section.querySelector('[role="tree"], [role="radiogroup"], [role="list"], [role="navigation"], [class*="awsui_root"]');
    if (!root) return null;
    return walk(root, 0);
  })()`);
}

// ─── Multi-Section Capture ────────────────────────────────────

async function captureCloudscapeSections(page: Page, url: string): Promise<CapturedSection[]> {
  await page.goto(url);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);

  return page.evaluate(`(() => {
    const walk = (el, depth) => {
      if (depth > 15) return null;
      const children = [];
      for (const child of el.children) {
        if (['SCRIPT', 'STYLE', 'TEMPLATE'].includes(child.tagName)) continue;
        const w = walk(child, depth + 1);
        if (w) children.push(w);
      }
      const classes = [...new Set([...el.classList]
        .map(c => { const m = c.match(/^awsui_([^_]+)_/); return m ? m[1] : c; })
      )].sort();
      return {
        tag: el.tagName.toLowerCase(),
        classes,
        role: el.getAttribute('role') || undefined,
        children,
      };
    };

    const sections = document.querySelectorAll('section');
    const results = [];
    for (const section of sections) {
      const h3 = section.querySelector('h3');
      const name = h3 ? h3.textContent.trim().toLowerCase().replace(/\\s+/g, '-') : 'unknown';
      const root = section.querySelector('[class*="awsui_root"]');
      if (root) results.push({ name, dom: walk(root, 0) });
    }
    return results;
  })()`);
}

// ─── Lit Template Generator ───────────────────────────────────

function domToLitTemplate(node: DOMNode, indent = 2): string {
  const pad = ' '.repeat(indent);
  const tag = node.tag;
  const attrs: string[] = [];

  if (node.classes.length > 0) {
    attrs.push(`class="${node.classes.join(' ')}"`);
  }
  if (node.role) {
    attrs.push(`role="${node.role}"`);
  }

  const attrStr = attrs.length > 0 ? ' ' + attrs.join(' ') : '';

  if (node.children.length === 0) {
    return `${pad}<${tag}${attrStr}></${tag}>`;
  }

  const childLines = node.children
    .map(child => domToLitTemplate(child, indent + 2))
    .join('\n');

  return `${pad}<${tag}${attrStr}>\n${childLines}\n${pad}</${tag}>`;
}

function generateLitRenderMethod(component: string, sections: CapturedSection[]): string {
  const lines: string[] = [];

  lines.push(`// Generated from Cloudscape DOM capture — ${component}`);
  lines.push(`// Sections captured: ${sections.map(s => s.name).join(', ')}`);
  lines.push(`// Fill in: \${this.prop}, \${classMap({...})}, \${condition ? html\`...\` : nothing}`);
  lines.push('');
  lines.push(`import { html, nothing } from 'lit';`);
  lines.push(`import { classMap } from 'lit/directives/class-map.js';`);
  lines.push(`import { ifDefined } from 'lit/directives/if-defined.js';`);
  lines.push('');

  for (const section of sections) {
    lines.push(`// ── ${section.name} ──`);
    lines.push('');
    lines.push('override render() {');
    lines.push('  return html`');
    lines.push(domToLitTemplate(section.dom, 4));
    lines.push('  `;');
    lines.push('}');
    lines.push('');
  }

  return lines.join('\n');
}

// ─── Main ─────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const filterArg = args.find((_: string, i: number) => args[i - 1] === '--component');
  const isCapture = args.includes('--capture');
  const isTemplate = args.includes('--template');
  const components = filterArg ? COMPONENTS.filter(c => c === filterArg) : COMPONENTS;

  if (filterArg && components.length === 0) {
    console.error(`Unknown component: ${filterArg}\nAvailable: ${COMPONENTS.join(', ')}`);
    process.exit(1);
  }

  if (isTemplate) {
    fs.mkdirSync(resolve(__dirname, 'output'), { recursive: true });
    for (const comp of components) {
      const capturePath = resolve(CAPTURE_DIR, `${comp}.json`);
      if (!fs.existsSync(capturePath)) {
        console.error(`No capture found for ${comp}. Run --capture first.`);
        continue;
      }
      const captured: CapturedComponent = JSON.parse(fs.readFileSync(capturePath, 'utf-8'));
      const template = generateLitRenderMethod(comp, captured.sections);
      const outPath = resolve(__dirname, 'output', `${comp}.template.ts`);
      fs.writeFileSync(outPath, template + '\n');
      console.log(`✓ ${comp} → ${outPath}`);
    }
    return;
  }

  console.log('Starting servers...');
  const servers: ChildProcess[] = [];

  const csServer = await startServer(CS_BASELINES, CS_PORT, 'Cloudscape');
  servers.push(csServer);
  console.log(`  Cloudscape: http://localhost:${CS_PORT}`);

  if (!isCapture) {
    const ourServer = await startServer(resolve(ROOT, 'demo'), OUR_PORT, 'Cumulus');
    servers.push(ourServer);
    console.log(`  Cumulus:    http://localhost:${OUR_PORT}`);
  }

  const browser = await chromium.launch();

  try {
    if (isCapture) {
      fs.mkdirSync(CAPTURE_DIR, { recursive: true });
      console.log(`\n═══ DOM Capture ═══\n`);

      for (const comp of components) {
        const page = await browser.newPage();
        const url = `http://localhost:${CS_PORT}/#/light/${comp}`;
        const sections = await captureCloudscapeSections(page, url);

        if (sections.length === 0) {
          console.log(`  ⚠ ${comp}: no sections found`);
        } else {
          const captured: CapturedComponent = { component: comp, sections };
          const outPath = resolve(CAPTURE_DIR, `${comp}.json`);
          fs.writeFileSync(outPath, JSON.stringify(captured, null, 2));
          console.log(`  ✓ ${comp} (${sections.length} sections: ${sections.map(s => s.name).join(', ')})`);
        }
        await page.close();
      }
    } else {
      console.log(`\n═══ DOM Audit ═══\n`);
      console.log(`Comparing ${components.length} component(s)...\n`);

      let totalDiffs = 0;
      let clean = 0;

      for (const comp of components) {
        const csPage = await browser.newPage();
        const ourPage = await browser.newPage();

        const csUrl = `http://localhost:${CS_PORT}/#/light/${comp}`;
        const ourUrl = `http://localhost:${OUR_PORT}/#/light/${comp}`;

        const csDOM = await extractCloudscapeDOM(csPage, csUrl);
        const ourDOM = await extractOurDOM(ourPage, ourUrl);

        const diffs = diffTrees(ourDOM, csDOM);
        console.log(formatReport(comp, diffs));
        totalDiffs += diffs.length;
        if (diffs.length === 0) clean++;

        await csPage.close();
        await ourPage.close();
      }

      console.log(`\n═══ Summary ═══`);
      console.log(`  Clean:       ${clean}/${components.length}`);
      console.log(`  Differences: ${totalDiffs}`);

      if (totalDiffs > 0) process.exitCode = 1;
    }
  } finally {
    await browser.close();
    for (const s of servers) {
      if (s.pid) process.kill(-s.pid);
    }
  }
}

main().catch((err) => {
  console.error('DOM audit failed:', err);
  process.exit(1);
});
