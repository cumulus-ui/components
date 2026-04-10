#!/usr/bin/env tsx
/**
 * generate-render.ts
 *
 * Reads Cloudscape React component source and its CSS module maps to produce
 * a Lit render() template with correct class names.
 *
 * Phase 1: Extracts the CSS class name map from styles.css.js files and
 * cross-references them with the React JSX to produce a verified template.
 *
 * Phase 2: Extracts component properties from Cloudscape interfaces and
 * classifies ARIA properties (native vs custom vs prefixed).
 *
 * Usage:
 *   npx tsx scripts/generate-render.ts --component radio-group
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { parseClassMap } from './lib/css-module-map.js';

const ROOT = path.resolve(import.meta.dirname, '..');
const CS = path.join(ROOT, 'node_modules/@cloudscape-design/components');

// ─── ARIA Property Classification ─────────────────────────────

/**
 * Native ARIA reflection properties on HTMLElement.
 * The browser handles these: setting element.ariaLabel reflects to aria-label attribute.
 * See: https://w3c.github.io/aria/#ARIAMixin
 *
 * When a Cloudscape interface declares one of these with a simple type (string | boolean),
 * it's the native property. Components forward the value to an inner element for
 * accessibility, so we still need @property for Lit reactivity with an explicit
 * kebab-case `attribute:` (e.g. ariaLabel → attribute: 'aria-label').
 */
const NATIVE_ARIA_PROPS = new Set([
  'ariaLabel', 'ariaRequired', 'ariaControls', 'ariaDescribedby',
  'ariaLabelledby', 'ariaHidden', 'ariaExpanded', 'ariaHaspopup',
  'ariaDisabled', 'ariaChecked', 'ariaSelected', 'ariaPressed',
  'ariaValueNow', 'ariaValueMin', 'ariaValueMax', 'ariaValueText',
  'ariaLive', 'ariaAtomic', 'ariaBusy', 'ariaRelevant',
  'ariaCurrent', 'ariaRoleDescription', 'ariaDescription',
]);

/**
 * Subset of NATIVE_ARIA_PROPS that exist as `string` properties on HTMLElement
 * in the TypeScript DOM lib. These need `override` when redeclared.
 * Props NOT in this set (e.g. ariaControls, ariaDescribedby, ariaLabelledby)
 * only have element-reference versions (ariaControlsElements) in the DOM lib.
 */
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

/** Simple types that indicate a native-compatible ARIA property */
const NATIVE_ARIA_TYPES = new Set(['string', 'boolean']);

interface PropInfo {
  name: string;
  type: string;            // 'string' | 'boolean' | 'number' | 'object' | 'function' | 'complex'
  optional: boolean;
  ariaClass: 'native' | 'forwarded' | 'custom' | 'none';
  // native:    matches HTMLElement ARIA property, simple type → @property (no attribute override)
  // forwarded: component-internal name for a native ARIA prop (e.g. controlAriaLabel)
  //            → @property with explicit attribute: 'aria-label'
  // custom:    Cloudscape-specific ARIA (e.g. ariaLabels object) → @property as normal
  // none:      not ARIA-related
  litDecorator: string;    // generated @property() decorator string
}

/** Classify a property from a Cloudscape interface */
function classifyProp(name: string, typeStr: string): PropInfo['ariaClass'] {
  const isSimpleType = NATIVE_ARIA_TYPES.has(typeStr);

  // Direct native ARIA property (e.g. ariaLabel?: string)
  if (NATIVE_ARIA_PROPS.has(name) && isSimpleType) {
    return 'native';
  }

  // Prefixed forwarding prop (e.g. controlAriaLabel)
  // These rename a native ARIA prop to avoid shadowing HTMLElement
  const forwardMatch = name.match(/^(?:control)(Aria\w+)$/);
  if (forwardMatch) {
    const baseName = forwardMatch[1].charAt(0).toLowerCase() + forwardMatch[1].slice(1);
    if (NATIVE_ARIA_PROPS.has(baseName) && isSimpleType) {
      return 'forwarded';
    }
  }

  // Complex ARIA (e.g. ariaLabels?: TableProps.AriaLabels<T>)
  if (name.startsWith('aria') && !isSimpleType) {
    return 'custom';
  }

  return 'none';
}

/** Map a simple type string to a Lit property type constructor */
function litType(typeStr: string): string {
  switch (typeStr) {
    case 'string': return 'String';
    case 'boolean': return 'Boolean';
    case 'number': return 'Number';
    default: return 'Object';
  }
}

/** Convert camelCase to kebab-case */
function toKebab(name: string): string {
  return name.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);
}

/** Generate the @property decorator string for a classified prop */
function generateDecorator(name: string, typeStr: string, ariaClass: PropInfo['ariaClass']): string {
  const lt = litType(typeStr);
  const kebab = toKebab(name);
  const needsAttr = kebab !== name;

  switch (ariaClass) {
    case 'forwarded': {
      const baseName = name.replace(/^control/, '');
      const fwdKebab = toKebab(baseName.charAt(0).toLowerCase() + baseName.slice(1));
      return `@property({ type: ${lt}, attribute: '${fwdKebab}' })`;
    }

    default:
      return needsAttr
        ? `@property({ type: ${lt}, attribute: '${kebab}' })`
        : `@property({ type: ${lt} })`;
  }
}

// ─── Interface Property Extractor ─────────────────────────────

interface ExtractedProp {
  name: string;
  typeStr: string;
  rawType: string;
  optional: boolean;
  jsdoc?: string;
}

/** Parse a Cloudscape interfaces.ts and extract property definitions */
function extractInterfaceProps(component: string): ExtractedProp[] {
  const interfacePath = path.join(ROOT, 'src', component, 'interfaces.ts');
  if (!fs.existsSync(interfacePath)) return [];

  let src = fs.readFileSync(interfacePath, 'utf-8');

  // Stop at namespace declarations — we only want the main interface props
  const nsIndex = src.indexOf('export declare namespace');
  if (nsIndex !== -1) src = src.slice(0, nsIndex);

  // Also check for extended base interfaces in the same file
  const baseInterfacePath = path.join(ROOT, 'src', component, 'base-checkbox.ts');
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

/** Reduce a TypeScript type to a simple classification */
function simplifyType(raw: string): string {
  const trimmed = raw.trim();

  // Simple literals
  if (trimmed === 'string') return 'string';
  if (trimmed === 'boolean') return 'boolean';
  if (trimmed === 'number') return 'number';

  // Union of string literals: 'a' | 'b' | 'c'
  if (/^('[^']+'\s*\|\s*)+('[^']+')$/.test(trimmed)) return 'string';

  // Type references ending in .Name, .Size, .Variant etc (string enums)
  if (/^\w+Props\.\w+$/.test(trimmed)) {
    if (/I18nStrings|Style|Labels|Definition|Detail/.test(trimmed)) return 'complex';
    return 'string';
  }

  // Function types
  if (trimmed.includes('=>')) return 'function';

  // Array types
  if (trimmed.endsWith('[]') || trimmed.startsWith('ReadonlyArray<')) return 'object';

  // Everything else (objects, generics, etc.)
  return 'complex';
}

// ─── Property Block Generator ─────────────────────────────────

const SKIP_PROPS = new Set(['style']);
const EVENT_SLOT_RE = /^@(event|slot)\s/;

interface GeneratedPropLine {
  decorator: string;
  declaration: string;
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

// ─── CSS Module Map Extractor ──────────────────────────────────

/** Parse a styles.css.js file and return a map of semantic name → scoped name (awsui_ prefixed only) */
function parseCssModuleMap(filePath: string): Record<string, string> {
  if (!fs.existsSync(filePath)) return {};
  const full = parseClassMap(filePath);
  const filtered: Record<string, string> = {};
  for (const [key, value] of Object.entries(full)) {
    if (value.startsWith('awsui_')) {
      filtered[key] = value;
    }
  }
  return filtered;
}

/** Collect all CSS class names used by a component across all its style layers */
function collectClassNames(component: string): {
  component: Record<string, string>;
  internal: Record<string, string>[];
  allSemanticNames: Set<string>;
} {
  const componentMap = parseCssModuleMap(path.join(CS, component, 'styles.css.js'));

  // Find internal component dependencies by scanning the React source
  const internalSource = fs.readFileSync(path.join(CS, component, 'internal.js'), 'utf-8');
  const internalDeps: string[] = [];
  const importRe = /from\s+'\.\.\/internal\/components\/([^']+)'/g;
  let im: RegExpExecArray | null;
  while ((im = importRe.exec(internalSource)) !== null) {
    internalDeps.push(im[1]);
  }

  const internalMaps: Record<string, string>[] = [];
  for (const dep of internalDeps) {
    const depMap = parseCssModuleMap(path.join(CS, 'internal/components', dep, 'styles.css.js'));
    internalMaps.push(depMap);

    // Check for further internal deps (like abstract-switch used by radio-button)
    const depSource = fs.readFileSync(path.join(CS, 'internal/components', dep, 'index.js'), 'utf-8');
    const nestedRe = /from\s+'\.\.\/\.\.\/components\/([^']+)'/g;
    let nm: RegExpExecArray | null;
    while ((nm = nestedRe.exec(depSource)) !== null) {
      internalMaps.push(parseCssModuleMap(path.join(CS, 'internal/components', nm[1], 'styles.css.js')));
    }
  }

  const allSemanticNames = new Set<string>();
  for (const name of Object.keys(componentMap)) allSemanticNames.add(name);
  for (const map of internalMaps) {
    for (const name of Object.keys(map)) allSemanticNames.add(name);
  }

  return { component: componentMap, internal: internalMaps, allSemanticNames };
}

// ─── React Source Analyzer ─────────────────────────────────────

/** Extract clsx() calls from React source and return the semantic class names used */
function extractClsxUsage(source: string, varName = 'styles'): string[][] {
  const results: string[][] = [];
  const re = new RegExp(`clsx\\([^)]*${varName}\\[?[.'"][^)]+\\)`, 'g');
  let m: RegExpExecArray | null;
  while ((m = re.exec(source)) !== null) {
    const call = m[0];
    const classRe = new RegExp(`${varName}(?:\\['([^']+)'\\]|\\.([a-zA-Z_][a-zA-Z0-9_]*))`, 'g');
    const classes: string[] = [];
    let cm: RegExpExecArray | null;
    while ((cm = classRe.exec(call)) !== null) {
      classes.push(cm[1] || cm[2]);
    }
    results.push(classes);
  }
  return results;
}

// ─── Template Generator ────────────────────────────────────────

function generateRadioGroupTemplate(classNames: Set<string>): string {
  // Verify all expected class names exist
  const required = [
    'radio-group', 'horizontal-group', 'radio', 'horizontal', 'radio--has-description',
    'wrapper', 'label-wrapper', 'control', 'content', 'label', 'description',
    'label-disabled', 'description-disabled', 'native-input', 'outline',
    'radio-control', 'styled-circle-border', 'styled-circle-fill',
    'styled-circle-checked', 'styled-circle-disabled', 'styled-circle-readonly',
  ];

  const missing = required.filter(n => !classNames.has(n));
  if (missing.length > 0) {
    console.warn(`⚠ Missing class names in Cloudscape source: ${missing.join(', ')}`);
  }

  return `\
  // ─── AUTO-GENERATED render template ─────────────────────────
  // Source: @cloudscape-design/components radio-group + radio-button + abstract-switch
  // Class names verified against Cloudscape CSS modules
  //
  // DO NOT manually edit class names — regenerate with:
  //   npx tsx scripts/generate-render.ts --component radio-group

  override render(): TemplateResult {
    const groupName = this.name || this._groupName;

    const groupClasses = {
      'radio-group': true,
      'horizontal-group': this.direction === 'horizontal',
    };

    return html\`
      <div
        class=\${classMap(groupClasses)}
        role="radiogroup"
        aria-label=\${ifDefined(this.controlAriaLabel || undefined)}
        aria-required=\${ifDefined(this.controlAriaRequired ? 'true' : undefined)}
        aria-controls=\${ifDefined(this.controlAriaControls || undefined)}
        aria-disabled=\${ifDefined(this.disabled ? 'true' : undefined)}
        aria-readonly=\${ifDefined(this.readOnly ? 'true' : undefined)}
      >
        \${this.items.map((item, index) => this._renderItem(item, index, groupName))}
      </div>
    \`;
  }

  private _renderItem(
    item: RadioGroupProps.RadioButtonDefinition,
    index: number,
    groupName: string,
  ): TemplateResult {
    const isChecked = item.value === this.value;
    const isDisabled = this.disabled || !!item.disabled;
    const itemId = item.controlId || generateUniqueId('radio-item');
    const descId = item.description ? \`\${itemId}-desc\` : undefined;

    // radio-group layer classes
    const itemClasses = {
      'radio': true,
      'wrapper': true,
      'radio--has-description': !!item.description,
      'horizontal': this.direction === 'horizontal',
    };

    // abstract-switch control + radio-button control
    const controlClasses = {
      'control': true,
      'radio-control': true,
    };

    return html\`
      <label
        class=\${classMap(itemClasses)}
        @click=\${(e: Event) => {
          e.preventDefault();
          this._onItemClick(item);
        }}
      >
        <span class=\${classMap(controlClasses)}>
          <input
            type="radio"
            class="native-input"
            name=\${groupName}
            .value=\${item.value}
            .checked=\${isChecked}
            ?disabled=\${isDisabled}
            ?readonly=\${this.readOnly}
            tabindex=\${this._getTabIndex(index)}
            aria-describedby=\${ifDefined(descId)}
            @click=\${(e: Event) => e.preventDefault()}
            @focus=\${() => this._onFocus(index)}
          />
          <svg class="radio-circle" viewBox="0 0 100 100" aria-hidden="true">
            <circle class=\${classMap({
              'styled-circle-border': true,
              'styled-circle-disabled': isDisabled,
              'styled-circle-readonly': this.readOnly,
            })} stroke-width="6.25" cx="50" cy="50" r="46" />
            <circle class=\${classMap({
              'styled-circle-fill': true,
              'styled-circle-checked': isChecked,
              'styled-circle-disabled': isDisabled,
              'styled-circle-readonly': this.readOnly,
            })} stroke-width="30" cx="50" cy="50" r="35" />
          </svg>
          <span class="outline"></span>
        </span>
        <span class="label-wrapper">
          <span class=\${classMap({
            'label': true,
            'label-disabled': isDisabled,
          })}>
            \${item.label}
          </span>
          \${item.description ? html\`
            <span
              id=\${descId!}
              class=\${classMap({
                'description': true,
                'description-disabled': isDisabled,
              })}
            >
              \${item.description}
            </span>
          \` : ''}
        </span>
      </label>
    \`;
  }`;
}

// ─── Audit: @property vs Interface Comparison ─────────────────

interface ActualProp {
  name: string;
  explicitAttribute?: string;
  hasReflect: boolean;
  attributeFalse: boolean;
  hasOverride: boolean;
}

function parseActualProperties(component: string): ActualProp[] {
  const filePath = path.join(ROOT, 'src', component, 'internal.ts');
  if (!fs.existsSync(filePath)) return [];

  const src = fs.readFileSync(filePath, 'utf-8');
  const results: ActualProp[] = [];

  const re = /@property\(\{([^}]*)\}\)\s*\n\s*(override\s+)?(\w+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src)) !== null) {
    const opts = m[1];
    const hasOverride = m[2] !== undefined;
    const name = m[3];

    const attrMatch = opts.match(/attribute:\s*['"]([^'"]+)['"]/);
    const attrFalse = /attribute:\s*false/.test(opts);
    const hasReflect = /reflect:\s*true/.test(opts);

    results.push({
      name,
      explicitAttribute: attrMatch?.[1],
      hasReflect,
      attributeFalse: attrFalse,
      hasOverride,
    });
  }

  return results;
}

interface AuditIssue {
  component: string;
  property: string;
  severity: 'error' | 'warning';
  message: string;
}

function auditComponent(component: string): AuditIssue[] {
  const issues: AuditIssue[] = [];
  const interfaceProps = extractInterfaceProps(component);
  const actualProps = parseActualProperties(component);
  const actualMap = new Map(actualProps.map(p => [p.name, p]));

  for (const iProp of interfaceProps) {
    const ariaClass = classifyProp(iProp.name, iProp.typeStr);
    if (ariaClass === 'none') continue;

    const actual = actualMap.get(iProp.name);

    // Check if the interface declares a native ARIA prop
    if (ariaClass === 'native') {
      if (!actual) {
        // Might be using a controlAria* rename — check for that
        const controlName = 'control' + iProp.name.charAt(0).toUpperCase() + iProp.name.slice(1);
        const controlActual = actualMap.get(controlName);
        if (controlActual) {
          // Verify the forwarded prop has correct attribute
          const expectedAttr = toKebab(iProp.name);
          if (controlActual.explicitAttribute !== expectedAttr) {
            issues.push({
              component,
              property: controlName,
              severity: 'error',
              message: `Forwarded ARIA prop has attribute '${controlActual.explicitAttribute ?? '(auto: ' + toKebab(controlName) + ')'}', expected '${expectedAttr}'`,
            });
          }
        } else {
          // Not implemented at all — warning for implemented components
          issues.push({
            component,
            property: iProp.name,
            severity: 'warning',
            message: `Interface declares ${iProp.name} (native ARIA) but no @property found`,
          });
        }
        continue;
      }

      // Has direct @property — check attribute and override
      if (actual.explicitAttribute) {
        const expectedAttr = toKebab(iProp.name);
        if (actual.explicitAttribute !== expectedAttr) {
          issues.push({
            component,
            property: iProp.name,
            severity: 'error',
            message: `Explicit attribute '${actual.explicitAttribute}' doesn't match expected '${expectedAttr}' — CsBaseElement would auto-derive correctly without it`,
          });
        }
      }

      const needsOverride = DOM_LIB_ARIA_STRING_PROPS.has(iProp.name);
      if (needsOverride && !actual.hasOverride) {
        issues.push({
          component,
          property: iProp.name,
          severity: 'error',
          message: `Missing 'override' — ${iProp.name} exists on HTMLElement in the DOM lib`,
        });
      }
      if (!needsOverride && actual.hasOverride) {
        issues.push({
          component,
          property: iProp.name,
          severity: 'error',
          message: `Has 'override' but ${iProp.name} is not a string property on HTMLElement in the DOM lib`,
        });
      }
    }

    if (ariaClass === 'custom') {
      if (actual && !actual.attributeFalse && iProp.typeStr === 'complex') {
        issues.push({
          component,
          property: iProp.name,
          severity: 'warning',
          message: `Complex ARIA object should probably use attribute: false`,
        });
      }
    }
  }

  // Check for stale non-standard attribute mappings
  for (const actual of actualProps) {
    if (actual.attributeFalse) continue;
    if (!actual.explicitAttribute) continue;

    const attr = actual.explicitAttribute;
    const isStandard = attr.startsWith('aria-') || ['role'].includes(attr);
    const isKebabOfName = attr === toKebab(actual.name);
    const isNativeCollisionWorkaround = actual.name.endsWith('_') && attr === toKebab(actual.name.slice(0, -1));

    if (!isStandard && !isKebabOfName && !isNativeCollisionWorkaround) {
      issues.push({
        component,
        property: actual.name,
        severity: 'warning',
        message: `Non-standard explicit attribute '${attr}' — consider using standard aria-* or letting CsBaseElement auto-derive`,
      });
    }
  }

  return issues;
}

function runAudit(): void {
  const srcDir = path.join(ROOT, 'src');
  const components = fs.readdirSync(srcDir).filter(d => {
    return fs.existsSync(path.join(srcDir, d, 'internal.ts')) &&
           fs.existsSync(path.join(srcDir, d, 'interfaces.ts'));
  });

  console.log(`\n═══ ARIA Property Audit ═══\n`);
  console.log(`Scanning ${components.length} implemented components...\n`);

  let totalErrors = 0;
  let totalWarnings = 0;

  for (const comp of components.sort()) {
    const issues = auditComponent(comp);
    if (issues.length === 0) {
      console.log(`  ✅ ${comp}`);
      continue;
    }

    console.log(`  ❌ ${comp}`);
    for (const issue of issues) {
      const icon = issue.severity === 'error' ? '🔴' : '🟡';
      console.log(`     ${icon} ${issue.property}: ${issue.message}`);
      if (issue.severity === 'error') totalErrors++;
      else totalWarnings++;
    }
  }

  console.log(`\n${totalErrors} error(s), ${totalWarnings} warning(s)\n`);

  console.log(`═══ CSS Coverage Audit ═══\n`);

  let cssErrors = 0;
  for (const comp of components.sort()) {
    const cssIssues = auditCSSCoverage(comp);
    if (cssIssues.length === 0) {
      console.log(`  ✅ ${comp}`);
      continue;
    }

    console.log(`  ❌ ${comp}`);
    for (const issue of cssIssues) {
      console.log(`     🔴 ${issue}`);
      cssErrors++;
    }
  }

  console.log(`\n${cssErrors} CSS coverage error(s)\n`);

  if (totalErrors > 0 || cssErrors > 0) {
    process.exitCode = 1;
  }
}

function auditCSSCoverage(component: string): string[] {
  const issues: string[] = [];
  const srcDir = path.join(ROOT, 'src');

  const internalPath = path.join(srcDir, component, 'internal.ts');
  if (!fs.existsSync(internalPath)) return issues;
  const templateSrc = fs.readFileSync(internalPath, 'utf-8');

  const templateClasses = new Set<string>();

  // Static class="foo bar" — only match simple string values
  const staticClassRe = /class\s*=\s*["']([a-z][a-z0-9 -]*)["']/g;
  let m: RegExpExecArray | null;
  while ((m = staticClassRe.exec(templateSrc)) !== null) {
    m[1].split(/\s+/).forEach(c => { if (c) templateClasses.add(c); });
  }

  // classMap({ 'foo': expr, 'bar-baz': expr })
  const classMapRe = /classMap\(\{([^}]+)\}\)/g;
  while ((m = classMapRe.exec(templateSrc)) !== null) {
    const keyRe = /'([a-z][a-z0-9-]*)'/g;
    let km;
    while ((km = keyRe.exec(m[1])) !== null) {
      templateClasses.add(km[1]);
    }
  }

  // class=${expression} with template literal — e.g. class=${`foo ${bar}`}
  const exprClassRe = /class=\$\{`([^`]+)`\}/g;
  while ((m = exprClassRe.exec(templateSrc)) !== null) {
    m[1].split(/\s+/).forEach(c => {
      if (c && /^[a-z][a-z0-9-]*$/.test(c)) templateClasses.add(c);
    });
  }

  const styleFiles: string[] = [];
  const stylesPath = path.join(srcDir, component, 'styles.ts');
  if (fs.existsSync(stylesPath)) styleFiles.push(stylesPath);

  const staticStylesRe = /import\s*\{[^}]*\}\s*from\s*'([^']*styles[^']*)'/g;
  let sm;
  while ((sm = staticStylesRe.exec(templateSrc)) !== null) {
    const importPath = sm[1].replace(/\.js$/, '.ts');
    const resolved = path.resolve(path.join(srcDir, component), importPath);
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

  const SVG_SKIP = new Set(['filled', 'stroke-linejoin-round', 'stroke-linecap-round']);

  // Truly structural classes that no component styles individually
  const SKIP = new Set(['toggle', 'tags', 'expandable', 'absolute', 'relative']);

  const COMPONENT_SKIP: Record<string, Set<string>> = {
    'alert': new Set(['content']),
    'app-layout-toolbar': new Set(['root', 'toolbar', 'layout', 'app-layout-notifications--notifications']),
    'autosuggest': new Set(['dropdown']),
    'button': new Set(['content']),
    'button-dropdown': new Set(['dropdown', 'icon']),
    'cards': new Set(['header', 'section-content']),
    'code-editor': new Set(['editor-textarea', 'editor-wrapper', 'line-number', 'line-numbers']),
    'content-layout': new Set(['secondary-header']),
    'collection-preferences': new Set([
      'group-label', 'page-size-option', 'page-size-options', 'panel', 'panel-footer',
      'panel-section', 'panel-section-title', 'panel-title', 'root',
      'visible-content-group',
    ]),
    'date-input': new Set(['input-container', 'root']),
    'date-picker': new Set(['dropdown']),
    'date-range-picker': new Set([
      'absolute-mode', 'calendar-day', 'calendar-day-empty', 'calendar-day-header',
      'calendar-day-number', 'calendar-grid', 'calendar-grid-header', 'calendar-grid-wrapper',
      'calendar-grids', 'calendar-week', 'dropdown-body', 'error-message',
      'mode-switch', 'mode-tab', 'mode-tab-active', 'option-label',
      'relative-heading', 'relative-mode', 'relative-option', 'relative-option-label',
      'relative-option-selected', 'relative-options', 'relative-radio',
    ]),
    'expandable-section': new Set(['header-counter', 'header-description', 'header-text']),
    'file-token-group': new Set([
      'error-text', 'file-error', 'file-error-text', 'file-name', 'file-thumbnail',
      'file-warning-text',
    ]),
    'file-upload': new Set([
      'constraint-text', 'dismiss-button', 'error-text', 'file-error', 'file-info',
      'file-metadata', 'file-name', 'file-thumbnail', 'file-upload-root', 'label',
    ]),
    'form': new Set(['content']),
    'hotspot': new Set([
      'annotation-actions', 'annotation-content', 'annotation-header', 'annotation-popover',
      'annotation-step-counter',
    ]),
    'item-card': new Set(['actions', 'icon']),
    'key-value-pairs': new Set(['grid', 'group', 'pair']),
    'multiselect': new Set([
      'dropdown', 'filter-container', 'filter-input', 'group-label', 'label-tag',
      'no-matches', 'option-content', 'option-description', 'option-label',
      'option-label-tag', 'option-list', 'trigger-arrow', 'trigger-label',
    ]),
    'panel-layout': new Set(['handle-bar', 'handle-wrapper']),
    'popover': new Set(['dismiss-control']),
    'progress-bar': new Set([
      'additional-info', 'description', 'error', 'key-value', 'label',
      'result-button-trigger', 'result-container-error', 'result-container-success', 'success',
    ]),
    'property-filter': new Set(['dismiss-button', 'filter-input', 'operation-label', 'token-item', 'token-list', 'custom-control', 'filtering-constraint-text']),
    'select': new Set([
      'dropdown', 'filter-container', 'filter-input', 'group-label', 'label-tag',
      'no-matches', 'option-content', 'option-description', 'option-label',
      'option-label-tag', 'option-tags', 'option-list', 'selected-icon',
      'trigger-arrow', 'trigger-label',
    ]),
    's3-resource-selector': new Set(['root', 'input-row']),
    'side-navigation': new Set([
      'icon', 'icon-open', 'overflow-menu-control',
      'overflow-menu-control-expandable-menu-trigger', 'overflow-menu-list-item-text',
    ]),
    'slider': new Set(['tick-marks', 'tick-mark']),
    'steps': new Set(['icon', 'title']),
    'table': new Set([
      'body-cell', 'body-cell-content', 'header-cell', 'header-cell-text',
      'screenreader-only', 'selection-cell', 'table-empty', 'table-loading',
    ]),
    'tag-editor': new Set(['action-cell', 'add-section', 'tag-list']),
    'time-input': new Set(['input-container']),
    'toggle-button': new Set(['icon']),
    'token': new Set(['description', 'label-tag']),
    'token-group': new Set(['description', 'dismiss-button', 'icon', 'label-tag', 'token']),
    'tree-view': new Set(['expanded', 'tree-view-tree-item--expand-wrapper', 'expand-toggle-button--expand', 'tree-view-tree-item--tree-item-focus', 'expand-toggle-button--expand-icon', 'expand-toggle-button--expand-icon-expanded']),
    'tutorial-panel': new Set([
      'completed-actions', 'completed-screen', 'detail-actions', 'detail-header',
      'detail-title', 'download-link', 'loading-state', 'prerequisites-alert',
      'step-item', 'step-list', 'task-item', 'task-list', 'task-title',
      'tutorial-completed', 'tutorial-description', 'tutorial-item', 'tutorial-list',
      'tutorial-list-description', 'tutorial-list-title', 'tutorial-meta', 'tutorial-title',
    ]),
    'wizard': new Set(['action-buttons-left', 'action-buttons-right', 'navigation-link', 'step-content']),
  };

  const STRUCTURAL_CLASSES: Record<string, Set<string>> = {
    'structured-item': new Set([
      'structured-item--icon',       // from test-classes/styles.css.js
      'structured-item--secondary',  // from test-classes/styles.css.js
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

  const componentSkip = COMPONENT_SKIP[component] ?? new Set();

  for (const cls of templateClasses) {
    if (SVG_SKIP.has(cls)) continue;
    if (SKIP.has(cls)) continue;
    if (structuralSkip.has(cls)) continue;
    if (componentSkip.has(cls)) continue;
    if (!cssClasses.has(cls)) {
      issues.push(`Template class "${cls}" has no matching CSS selector`);
    }
  }

  return issues;
}

// ─── Audit: Conditional Rendering ─────────────────────────────

interface ConditionalPattern {
  guard: string;
  isCallback: boolean;
  context: string;
}

interface ConditionalAuditIssue {
  component: string;
  guard: string;
  severity: 'error' | 'warning';
  message: string;
}

/** Known callback → expected Cumulus boolean property */
const CALLBACK_BOOLEAN_MAP: Record<string, string> = {
  onDismiss: 'dismissible',
};

/**
 * Derive candidate boolean property names a Cumulus component might use
 * to gate the same UI that Cloudscape gates with a callback presence.
 *
 * Example: onDismiss → ['dismissible', 'dismissable', 'showDismiss', 'hasDismiss']
 */
function deriveBooleanCandidates(callbackName: string): string[] {
  const known = CALLBACK_BOOLEAN_MAP[callbackName];
  if (known) return [known];

  const action = callbackName.replace(/^on/, '');
  const lower = action.charAt(0).toLowerCase() + action.slice(1);

  return [
    `${lower}ible`,
    `${lower}able`,
    `show${action}`,
    `has${action}`,
    lower,
  ];
}

/**
 * Extract destructured prop names from a Cloudscape React component function
 * signature. Handles both `function InternalX({ ... })` and
 * `React.forwardRef(({ ... }, ref) => {` patterns.
 */
function extractCloudscapeProps(source: string): Set<string> {
  const props = new Set<string>();

  const sigMatch =
    source.match(/function\s+\w+\s*\(\s*\{/) ??
    source.match(/React\.forwardRef\s*\(\s*\(\s*\{/);

  if (!sigMatch || sigMatch.index === undefined) return props;

  const braceStart = sigMatch.index + sigMatch[0].length;
  let depth = 1;
  let pos = braceStart;
  while (depth > 0 && pos < source.length) {
    if (source[pos] === '{') depth++;
    if (source[pos] === '}') depth--;
    pos++;
  }

  const block = source.substring(braceStart, pos - 1);
  const cleaned = block.replace(/\/\/[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, '');

  for (const part of cleaned.split(',')) {
    const trimmed = part.trim();
    if (!trimmed || trimmed.startsWith('...')) continue;

    const renameMatch = trimmed.match(/^(\w+)\s*:\s*(\w+)/);
    if (renameMatch) {
      props.add(renameMatch[1]);
      props.add(renameMatch[2]);
      continue;
    }

    const defaultMatch = trimmed.match(/^(\w+)\s*=/);
    if (defaultMatch) {
      props.add(defaultMatch[1]);
      continue;
    }

    const simpleMatch = trimmed.match(/^(\w+)$/);
    if (simpleMatch) {
      props.add(simpleMatch[1]);
    }
  }

  return props;
}

/**
 * Find `guard && (React.createElement(` patterns in compiled Cloudscape source,
 * filtering to only guards that are actual component props.
 */
function findConditionalPatterns(source: string, propNames: Set<string>): ConditionalPattern[] {
  const patterns: ConditionalPattern[] = [];
  const seen = new Set<string>();

  const re = /\b(\w+)\s*&&\s*\(?\s*React\.createElement\b/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(source)) !== null) {
    const guard = m[1];
    if (!propNames.has(guard)) continue;
    if (seen.has(guard)) continue;
    if (guard.startsWith('__')) continue;
    seen.add(guard);

    const isCallback = /^on[A-Z]/.test(guard);
    const lineStart = source.lastIndexOf('\n', m.index) + 1;
    const lineEnd = source.indexOf('\n', m.index);
    const context = source.substring(lineStart, lineEnd > -1 ? lineEnd : undefined).trim();

    patterns.push({ guard, isCallback, context });
  }

  return patterns;
}

/** Extract slot names declared in a Cumulus component's render template */
function extractSlotNames(component: string): Set<string> {
  const slots = new Set<string>();
  const filePath = path.join(ROOT, 'src', component, 'internal.ts');
  if (!fs.existsSync(filePath)) return slots;
  const src = fs.readFileSync(filePath, 'utf-8');

  const slotTagRe = /<slot(\s[^>]*)?\s*>/g;
  let m: RegExpExecArray | null;
  while ((m = slotTagRe.exec(src)) !== null) {
    const attrs = m[1] || '';
    const nameMatch = attrs.match(/\bname\s*=\s*["']([^"']+)["']/);
    if (nameMatch) {
      slots.add(nameMatch[1]);
    } else if (!/\bname\s*=\s*\$/.test(attrs)) {
      slots.add('children');
    }
  }

  return slots;
}

/**
 * Audit a single component for conditional rendering mismatches.
 *
 * Reads Cloudscape's compiled React source, finds props used to gate
 * React.createElement() calls, then verifies Cumulus has an equivalent
 * boolean @property() or <slot> to control the same rendering.
 */
function auditConditionalRendering(component: string): ConditionalAuditIssue[] {
  const issues: ConditionalAuditIssue[] = [];

  const internalPath = path.join(CS, component, 'internal.js');
  if (!fs.existsSync(internalPath)) return issues;
  const csSource = fs.readFileSync(internalPath, 'utf-8');

  const csProps = extractCloudscapeProps(csSource);
  if (csProps.size === 0) return issues;

  const patterns = findConditionalPatterns(csSource, csProps);
  if (patterns.length === 0) return issues;

  const cumulusProps = parseActualProperties(component);
  const cumulusPropNames = new Set(cumulusProps.map(p => p.name));
  const cumulusSlots = extractSlotNames(component);

  for (const pattern of patterns) {
    if (pattern.isCallback) {
      const candidates = deriveBooleanCandidates(pattern.guard);
      const found = candidates.find(c => cumulusPropNames.has(c));

      if (!found) {
        issues.push({
          component,
          guard: pattern.guard,
          severity: 'error',
          message: `Cloudscape gates rendering on '${pattern.guard}' callback — Cumulus has no boolean gate (expected: ${candidates.join(' | ')})`,
        });
      }
    } else {
      if (!cumulusPropNames.has(pattern.guard)) {
        if (cumulusSlots.has(pattern.guard) || cumulusSlots.has(toKebab(pattern.guard))) {
          continue;
        }

        const interfaceProps = extractInterfaceProps(component);
        const isInterfaceProp = interfaceProps.some(p => p.name === pattern.guard);

        if (isInterfaceProp) {
          issues.push({
            component,
            guard: pattern.guard,
            severity: 'warning',
            message: `Cloudscape gates rendering on '${pattern.guard}' prop — Cumulus doesn't declare a matching @property or <slot>`,
          });
        }
      }
    }
  }

  return issues;
}

function runConditionalAudit(): void {
  const srcDir = path.join(ROOT, 'src');
  const components = fs.readdirSync(srcDir).filter(d => {
    return fs.existsSync(path.join(srcDir, d, 'internal.ts'));
  });

  console.log(`\n═══ Conditional Rendering Audit ═══\n`);
  console.log(`Scanning ${components.length} implemented components for callback/prop-gated rendering...\n`);

  let totalErrors = 0;
  let totalWarnings = 0;

  for (const comp of components.sort()) {
    const issues = auditConditionalRendering(comp);
    if (issues.length === 0) {
      console.log(`  ✅ ${comp}`);
      continue;
    }

    console.log(`  ❌ ${comp}`);
    for (const issue of issues) {
      const icon = issue.severity === 'error' ? '🔴' : '🟡';
      console.log(`     ${icon} ${issue.guard}: ${issue.message}`);
      if (issue.severity === 'error') totalErrors++;
      else totalWarnings++;
    }
  }

  console.log(`\n${totalErrors} error(s), ${totalWarnings} warning(s)\n`);

  if (totalErrors > 0) {
    process.exitCode = 1;
  }
}

// ─── Kebab Attributes ─────────────────────────────────────────

/**
 * Add explicit `attribute: 'kebab-name'` to every camelCase @property()
 * declaration that doesn't already specify one.
 *
 * This replaces the runtime auto-kebab logic in CsBaseElement.createProperty()
 * with a build-time pass, removing the dependency on a deprecated Lit API.
 *
 * Usage:
 *   npx tsx scripts/generate-render.ts --kebab-attrs --dry-run   # preview
 *   npx tsx scripts/generate-render.ts --kebab-attrs              # apply
 */
function kebabAttrs(dryRun: boolean): void {
  const srcDir = path.join(ROOT, 'src');
  const components = fs.readdirSync(srcDir).filter(d =>
    fs.existsSync(path.join(srcDir, d, 'internal.ts'))
  );

  console.log(`\n═══ Kebab Attributes${dryRun ? ' (dry run)' : ''} ═══\n`);

  let totalFixed = 0;
  let filesChanged = 0;

  for (const comp of components.sort()) {
    const filePath = path.join(srcDir, comp, 'internal.ts');
    const original = fs.readFileSync(filePath, 'utf-8');

    let compFixed = 0;
    const patched = original.replace(
      /@property\((\{[^}]*\})\)(\s*\n\s*)(override\s+)?(\w+)/g,
      (match, opts, ws, override, name) => {
        // Only camelCase names need conversion
        if (!/[A-Z]/.test(name)) return match;
        // Already has explicit attribute: (string or false)
        if (/attribute\s*:/.test(opts)) return match;
        const kebab = toKebab(name);
        if (kebab === name) return match;

        const newOpts = opts.replace(/\s*\}$/, `, attribute: '${kebab}' }`);
        compFixed++;
        return `@property(${newOpts})${ws}${override ?? ''}${name}`;
      },
    );

    if (compFixed > 0) {
      if (!dryRun) fs.writeFileSync(filePath, patched);
      console.log(`  ${comp}: ${compFixed} propert${compFixed === 1 ? 'y' : 'ies'}`);
      totalFixed += compFixed;
      filesChanged++;
    }
  }

  console.log(`\n${totalFixed} propert${totalFixed === 1 ? 'y' : 'ies'} across ${filesChanged} component${filesChanged === 1 ? '' : 's'}${dryRun ? ' (dry run — no files written)' : ''}\n`);
}

// ─── Main ──────────────────────────────────────────────────────

const isAudit = process.argv.includes('--audit');
const isConditionalAudit = process.argv.includes('--audit-conditionals');
const isKebabAttrs = process.argv.includes('--kebab-attrs');
const isProps = process.argv.includes('--props');
const isDryRun = process.argv.includes('--dry-run');

if (isKebabAttrs) {
  kebabAttrs(isDryRun);
} else if (isAudit) {
  runAudit();
} else if (isConditionalAudit) {
  runConditionalAudit();
} else {
  const component = process.argv.find((_: string, i: number) => process.argv[i - 1] === '--component') || 'radio-group';

  if (isProps) {
    const block = generatePropBlock(component);
    console.log(`\n─── @property declarations for ${component} ───\n`);
    console.log(block);

    const outPath = path.join(ROOT, 'scripts', 'output', `${component}.props.ts`);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, block + '\n');
    console.log(`✓ Written to ${path.relative(ROOT, outPath)}`);
  } else {
    console.log(`\nAnalyzing Cloudscape ${component}...\n`);

    const { allSemanticNames } = collectClassNames(component);
    console.log(`Found ${allSemanticNames.size} CSS class names across all layers:`);
    for (const name of [...allSemanticNames].sort()) {
      console.log(`  • ${name}`);
    }

    const radioGroupSrc = fs.readFileSync(path.join(CS, component, 'internal.js'), 'utf-8');
    const usedInGroup = extractClsxUsage(radioGroupSrc);
    console.log(`\nclsx() calls in ${component}/internal.js:`);
    for (const classes of usedInGroup) {
      console.log(`  clsx(${classes.map(c => `'${c}'`).join(', ')})`);
    }

    const props = extractInterfaceProps(component);
    if (props.length > 0) {
      console.log(`\n─── Properties from interfaces.ts ───\n`);
      for (const prop of props) {
        const ariaClass = classifyProp(prop.name, prop.typeStr);
        const decorator = generateDecorator(prop.name, prop.typeStr, ariaClass);
        const tag = ariaClass !== 'none' ? ` [ARIA: ${ariaClass}]` : '';
        console.log(`  ${prop.name}${prop.optional ? '?' : ''}: ${prop.typeStr}${tag}`);
        console.log(`    → ${decorator}`);
      }
    }

    if (component === 'radio-group') {
      const template = generateRadioGroupTemplate(allSemanticNames);
      console.log('\n─── Generated render template ───\n');
      console.log(template);

      const outPath = path.join(ROOT, 'scripts', 'output', `${component}.render.ts`);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, template + '\n');
      console.log(`\n✓ Written to ${path.relative(ROOT, outPath)}`);
    }
  }
}
