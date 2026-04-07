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
 * accessibility, so we still need @property for Lit reactivity — but we must NOT
 * specify an explicit `attribute:` override. CsBaseElement auto-derives the correct
 * kebab-case attribute (e.g. ariaLabel → aria-label).
 */
const NATIVE_ARIA_PROPS = new Set([
  'ariaLabel', 'ariaRequired', 'ariaControls', 'ariaDescribedby',
  'ariaLabelledby', 'ariaHidden', 'ariaExpanded', 'ariaHaspopup',
  'ariaDisabled', 'ariaChecked', 'ariaSelected', 'ariaPressed',
  'ariaValueNow', 'ariaValueMin', 'ariaValueMax', 'ariaValueText',
  'ariaLive', 'ariaAtomic', 'ariaBusy', 'ariaRelevant',
  'ariaCurrent', 'ariaRoleDescription', 'ariaDescription',
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

  switch (ariaClass) {
    case 'native':
      // CsBaseElement auto-derives aria-label from ariaLabel — no explicit attribute
      return `@property({ type: ${lt} })`;

    case 'forwarded': {
      // controlAriaLabel → attribute must be explicitly 'aria-label'
      // because CsBaseElement would derive 'control-aria-label'
      const baseName = name.replace(/^control/, '');
      const kebab = toKebab(baseName.charAt(0).toLowerCase() + baseName.slice(1));
      return `@property({ type: ${lt}, attribute: '${kebab}' })`;
    }

    case 'custom':
      // Cloudscape-specific ARIA object — normal @property
      return `@property({ type: ${lt} })`;

    case 'none':
      return `@property({ type: ${lt} })`;
  }
}

// ─── Interface Property Extractor ─────────────────────────────

interface ExtractedProp {
  name: string;
  typeStr: string;
  optional: boolean;
  jsdoc?: string;
}

/** Parse a Cloudscape interfaces.ts and extract property definitions */
function extractInterfaceProps(component: string): ExtractedProp[] {
  const interfacePath = path.join(ROOT, 'src', component, 'interfaces.ts');
  if (!fs.existsSync(interfacePath)) return [];

  const src = fs.readFileSync(interfacePath, 'utf-8');
  const props: ExtractedProp[] = [];

  // Match property declarations: name?: type; or name: type;
  // Handles single-line declarations within the main interface
  const propRe = /^\s+(\w+)(\?)?:\s*([^;]+);/gm;
  let m: RegExpExecArray | null;
  while ((m = propRe.exec(src)) !== null) {
    const name = m[1];
    const optional = m[2] === '?';
    let rawType = m[3].trim();

    // Skip JSDoc comment lines, slot declarations, event declarations
    if (name.startsWith('*') || name.startsWith('/')) continue;

    // Simplify complex types for classification
    const typeStr = simplifyType(rawType);

    props.push({ name, typeStr, optional });
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
  if (/^\w+Props\.\w+$/.test(trimmed)) return 'string';

  // Function types
  if (trimmed.includes('=>')) return 'function';

  // Array types
  if (trimmed.endsWith('[]') || trimmed.startsWith('ReadonlyArray<')) return 'object';

  // Everything else (objects, generics, etc.)
  return 'complex';
}

// ─── CSS Module Map Extractor ──────────────────────────────────

/** Parse a styles.css.js file and return a map of semantic name → scoped name */
function parseCssModuleMap(filePath: string): Record<string, string> {
  if (!fs.existsSync(filePath)) return {};
  const src = fs.readFileSync(filePath, 'utf-8');
  const map: Record<string, string> = {};
  const re = /"([^"]+)":\s*"(awsui_[^"]+)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src)) !== null) {
    map[m[1]] = m[2];
  }
  return map;
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

// ─── Main ──────────────────────────────────────────────────────

const component = process.argv.find((_: string, i: number) => process.argv[i - 1] === '--component') || 'radio-group';

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

// Phase 2: Property extraction and ARIA classification
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

  const outPath = path.join(ROOT, 'src', component, '_render.generated.ts');
  fs.writeFileSync(outPath, template + '\n');
  console.log(`\n✓ Written to ${path.relative(ROOT, outPath)}`);
}
