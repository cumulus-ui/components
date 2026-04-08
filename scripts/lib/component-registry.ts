import * as fs from 'node:fs';
import * as path from 'node:path';

export interface ComponentEntry {
  name: string;
  implemented: boolean;
  internalStyleDeps: string[];
}

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const SRC = path.join(ROOT, 'src');
const CS = path.join(ROOT, 'node_modules/@cloudscape-design/components');

function discoverInternalStyleDeps(name: string): string[] {
  const internalJsPath = path.join(CS, name, 'internal.js');
  if (!fs.existsSync(internalJsPath)) return [];

  const source = fs.readFileSync(internalJsPath, 'utf-8');
  const deps: string[] = [];
  const importRe = /from\s+'\.\.\/internal\/components\/([^']+)'/g;
  let m: RegExpExecArray | null;
  while ((m = importRe.exec(source)) !== null) {
    deps.push(m[1]);
  }

  const compDir = path.join(CS, name);
  if (fs.existsSync(compDir)) {
    const subDirs = fs.readdirSync(compDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('.'))
      .filter(d => fs.existsSync(path.join(compDir, d.name, 'styles.scoped.css')));

    for (const sub of subDirs) {
      deps.push(`${name}-${sub.name}`);
    }
  }

  return deps;
}

export function loadRegistry(): Map<string, ComponentEntry> {
  const registry = new Map<string, ComponentEntry>();

  if (!fs.existsSync(SRC)) return registry;

  const dirs = fs.readdirSync(SRC, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('.') && d.name !== 'internal');

  for (const dir of dirs) {
    const implemented = fs.existsSync(path.join(SRC, dir.name, 'internal.ts'));
    const internalStyleDeps = implemented ? discoverInternalStyleDeps(dir.name) : [];

    registry.set(dir.name, {
      name: dir.name,
      implemented,
      internalStyleDeps,
    });
  }

  return registry;
}

export function getImplementedComponents(): string[] {
  const registry = loadRegistry();
  return [...registry.values()]
    .filter(e => e.implemented)
    .map(e => e.name)
    .sort();
}
