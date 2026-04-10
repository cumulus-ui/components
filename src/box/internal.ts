import { css, html } from 'lit';
import { CsBaseElement } from '../internal/base-element.js';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { BoxProps } from './interfaces.js';

const VARIANT_TAG_MAP: Record<string, string> = {
  div: 'div',
  span: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  p: 'p',
  strong: 'strong',
  small: 'small',
  code: 'code',
  pre: 'pre',
  samp: 'samp',
  'awsui-key-label': 'div',
  'awsui-gen-ai-label': 'div',
  'awsui-value-large': 'span',
  'awsui-inline-code': 'code',
};

/** Map variant prop value → Cloudscape CSS class name (e.g. 'awsui-key-label' → 'key-label-variant') */
function variantCssClass(variant: string): string {
  return variant.replace(/^awsui-/, '') + '-variant';
}

type SpacingSize = BoxProps.SpacingSize;

function isSpacingObject(value: unknown): value is BoxProps.Spacing {
  return typeof value === 'object' && value !== null;
}

function spacingClasses(
  prefix: string,
  value: SpacingSize | BoxProps.Spacing | undefined,
): Record<string, boolean> {
  if (!value) return {};

  if (typeof value === 'string') {
    return { [`${prefix}-${value}`]: true };
  }

  if (isSpacingObject(value)) {
    const classes: Record<string, boolean> = {};
    const { top, right, bottom, left, horizontal, vertical } = value;

    if (top) classes[`${prefix}-top-${top}`] = true;
    if (right) classes[`${prefix}-right-${right}`] = true;
    if (bottom) classes[`${prefix}-bottom-${bottom}`] = true;
    if (left) classes[`${prefix}-left-${left}`] = true;
    if (horizontal) classes[`${prefix}-horizontal-${horizontal}`] = true;
    if (vertical) classes[`${prefix}-vertical-${vertical}`] = true;
    return classes;
  }

  return {};
}

const hostStyles = css`
  :host { display: block; }
  :host([display="inline"]) { display: inline; }
  :host([display="inline-block"]) { display: inline-block; }
  :host([display="none"]) { display: none; }
`;

export class CsBoxInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  variant: BoxProps.Variant = 'div';

  @property({ type: String, attribute: 'tag-override' })
  tagOverride?: string;

  @property({ type: String })
  display?: BoxProps.Display;

  @property({ attribute: false })
  margin?: BoxProps.SpacingSize | BoxProps.Spacing;

  @property({ attribute: false })
  padding?: BoxProps.SpacingSize | BoxProps.Spacing;

  @property({ type: String, attribute: 'text-align' })
  textAlign?: BoxProps.TextAlign;

  @property({ type: String })
  float?: BoxProps.Float;

  @property({ type: String, attribute: 'font-size' })
  fontSize?: BoxProps.FontSize;

  @property({ type: String, attribute: 'font-weight' })
  fontWeight?: BoxProps.FontWeight;

  @property({ type: String })
  color?: BoxProps.Color;

  override render() {
    const tag = this.tagOverride || VARIANT_TAG_MAP[this.variant] || 'div';

    const classes: Record<string, boolean> = {
      'root': true,
      'box': true,
      [variantCssClass(this.variant)]: true,
      ...(this.display ? { [`d-${this.display}`]: true } : {}),
      ...(this.textAlign ? { [`t-${this.textAlign}`]: true } : {}),
      ...(this.float ? { [`f-${this.float}`]: true } : {}),
      [`font-size-${this.fontSize || 'default'}`]: true,
      [`font-weight-${this.fontWeight || 'default'}`]: true,
      [`color-${this.color || 'default'}`]: true,
      ...spacingClasses('m', this.margin),
      ...spacingClasses('p', this.padding),
    };

    return this._renderTag(tag, classes);
  }

  private _renderTag(tag: string, classes: Record<string, boolean>) {
    switch (tag) {
      case 'div':
        return html`<div class=${classMap(classes)}><slot></slot></div>`;
      case 'span':
        return html`<span class=${classMap(classes)}><slot></slot></span>`;
      case 'h1':
        return html`<h1 class=${classMap(classes)}><slot></slot></h1>`;
      case 'h2':
        return html`<h2 class=${classMap(classes)}><slot></slot></h2>`;
      case 'h3':
        return html`<h3 class=${classMap(classes)}><slot></slot></h3>`;
      case 'h4':
        return html`<h4 class=${classMap(classes)}><slot></slot></h4>`;
      case 'h5':
        return html`<h5 class=${classMap(classes)}><slot></slot></h5>`;
      case 'p':
        return html`<p class=${classMap(classes)}><slot></slot></p>`;
      case 'strong':
        return html`<strong class=${classMap(classes)}><slot></slot></strong>`;
      case 'small':
        return html`<small class=${classMap(classes)}><slot></slot></small>`;
      case 'code':
        return html`<code class=${classMap(classes)}><slot></slot></code>`;
      case 'pre':
        return html`<pre class=${classMap(classes)}><slot></slot></pre>`;
      case 'samp':
        return html`<samp class=${classMap(classes)}><slot></slot></samp>`;
      default:
        return html`<div class=${classMap(classes)}><slot></slot></div>`;
    }
  }
}
