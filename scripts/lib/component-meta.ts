import * as fs from 'node:fs';
import * as path from 'node:path';
import ts from 'typescript';

export interface PropInfo {
  type: 'string' | 'boolean' | 'number' | 'slot' | 'event' | 'object';
  attribute?: string; // kebab-case attribute name from @property({ attribute: '...' })
}

export interface ComponentMeta {
  tag: string;       // 'cs-checkbox'
  propsType: string; // 'CheckboxProps'
  props: Map<string, PropInfo>;
}

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const SRC = path.join(ROOT, 'src');
const cache = new Map<string, ComponentMeta>();

function toPascalCase(name: string): string {
  return name.replace(/(^|-)([a-z])/g, (_, __, c: string) => c.toUpperCase());
}

function parseFile(filePath: string): ts.SourceFile {
  return ts.createSourceFile(filePath, fs.readFileSync(filePath, 'utf-8'), ts.ScriptTarget.Latest, true);
}

function findInterface(sf: ts.SourceFile, name: string): ts.InterfaceDeclaration | undefined {
  return sf.statements.find(
    (s): s is ts.InterfaceDeclaration => ts.isInterfaceDeclaration(s) && s.name.text === name,
  );
}

/** Collect type aliases from `declare namespace XxxProps { ... }` */
function collectNamespaceTypes(sf: ts.SourceFile): Map<string, string> {
  const types = new Map<string, string>();
  for (const stmt of sf.statements) {
    if (ts.isModuleDeclaration(stmt) && stmt.body && ts.isModuleBlock(stmt.body)) {
      for (const member of stmt.body.statements) {
        if (ts.isTypeAliasDeclaration(member)) {
          types.set(member.name.text, member.type.getText(sf));
        }
      }
    }
  }
  return types;
}

/** Collect import specifiers to module paths */
function collectImports(sf: ts.SourceFile): Map<string, string> {
  const imports = new Map<string, string>();
  for (const stmt of sf.statements) {
    if (
      ts.isImportDeclaration(stmt) &&
      stmt.importClause?.namedBindings &&
      ts.isNamedImports(stmt.importClause.namedBindings)
    ) {
      const mod = (stmt.moduleSpecifier as ts.StringLiteral).text;
      for (const el of stmt.importClause.namedBindings.elements) {
        imports.set(el.name.text, mod);
      }
    }
  }
  return imports;
}

function classifyType(typeText: string, nsTypes: Map<string, string>, depth = 0): PropInfo['type'] {
  if (depth > 3) return 'object';
  const t = typeText.trim();
  if (t.includes('SlotContent')) return 'slot';
  if (t.includes('EventHandler')) return 'event';
  if (t === 'boolean') return 'boolean';
  if (t === 'string') return 'string';
  if (t === 'number') return 'number';

  // Union of string literals: 'a' | 'b' | ...
  const parts = t.split('|').map(p => p.trim());
  if (parts.length > 1 && parts.every(p => /^'[^']*'$/.test(p))) return 'string';

  // Namespace type: XxxProps.Something
  const nsMatch = t.match(/^\w+\.(\w+)$/);
  if (nsMatch) {
    const resolved = nsTypes.get(nsMatch[1]);
    if (resolved) return classifyType(resolved, nsTypes, depth + 1);
  }

  return 'object';
}

/** Recursively collect props from an interface and its bases */
function collectProps(
  ifaceName: string,
  sf: ts.SourceFile,
  filePath: string,
  nsTypes: Map<string, string>,
): Map<string, PropInfo> {
  const iface = findInterface(sf, ifaceName);
  if (!iface) return new Map();

  let baseProps = new Map<string, PropInfo>();

  if (iface.heritageClauses) {
    for (const clause of iface.heritageClauses) {
      if (clause.token !== ts.SyntaxKind.ExtendsKeyword) continue;
      for (const baseType of clause.types) {
        const baseName = baseType.expression.getText(sf);

        if (findInterface(sf, baseName)) {
          baseProps = new Map([...baseProps, ...collectProps(baseName, sf, filePath, nsTypes)]);
          continue;
        }

        const mod = collectImports(sf).get(baseName);
        if (mod?.startsWith('.')) {
          const resolved = path.resolve(path.dirname(filePath), mod.replace(/\.js$/, '.ts'));
          if (fs.existsSync(resolved)) {
            const baseSf = parseFile(resolved);
            const baseNs = collectNamespaceTypes(baseSf);
            baseProps = new Map([...baseProps, ...collectProps(baseName, baseSf, resolved, baseNs)]);
          }
        }
      }
    }
  }

  for (const member of iface.members) {
    if (ts.isPropertySignature(member) && member.name && ts.isIdentifier(member.name) && member.type) {
      const name = member.name.text;
      baseProps.set(name, { type: classifyType(member.type.getText(sf), nsTypes) });
    }
  }
  return baseProps;
}

/** Read @property attribute mappings and Lit types from internal.ts */
function readLitMeta(component: string): { attrs: Map<string, string>; litTypes: Map<string, string> } {
  const attrs = new Map<string, string>();
  const litTypes = new Map<string, string>();
  const file = path.join(SRC, component, 'internal.ts');
  if (!fs.existsSync(file)) return { attrs, litTypes };

  const source = fs.readFileSync(file, 'utf-8');
  const re = /@property\(([^)]*)\)\s*\n\s*(?:override\s+)?(\w+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(source)) !== null) {
    const [, content, prop] = m;
    const attrMatch = content.match(/attribute:\s*'([^']+)'/);
    if (attrMatch) attrs.set(prop, attrMatch[1]);
    const typeMatch = content.match(/type:\s*(\w+)/);
    if (typeMatch) litTypes.set(prop, typeMatch[1]);
  }
  return { attrs, litTypes };
}

export function getComponentMeta(component: string): ComponentMeta {
  const cached = cache.get(component);
  if (cached) return cached;

  const pascal = toPascalCase(component);
  const propsType = `${pascal}Props`;
  const tag = `cs-${component}`;
  const interfacePath = path.join(SRC, component, 'interfaces.ts');

  if (!fs.existsSync(interfacePath)) {
    const meta: ComponentMeta = { tag, propsType, props: new Map() };
    cache.set(component, meta);
    return meta;
  }

  const sf = parseFile(interfacePath);
  const nsTypes = collectNamespaceTypes(sf);
  const props = collectProps(propsType, sf, interfacePath, nsTypes);

  const { attrs, litTypes } = readLitMeta(component);
  for (const [name, info] of props) {
    const attr = attrs.get(name);
    if (attr) info.attribute = attr;

    if (info.type === 'object') {
      const lit = litTypes.get(name);
      if (lit === 'String') info.type = 'string';
      else if (lit === 'Boolean') info.type = 'boolean';
      else if (lit === 'Number') info.type = 'number';
    }
  }

  const meta: ComponentMeta = { tag, propsType, props };
  cache.set(component, meta);
  return meta;
}
