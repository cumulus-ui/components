import { css, html, svg as svgTag, type SVGTemplateResult } from 'lit';
import { CsBaseElement } from '../internal/base-element.js';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { consume } from '@lit/context';
import { componentStyles, sharedStyles } from './styles.js';
import { builtInIcons } from './icons/index.js';
import { iconProviderContext, type IconResolverFn } from '../icon-provider/internal.js';
import type { IconProps } from './interfaces.js';

const hostStyles = css`:host { display: inline-block; vertical-align: top; line-height: 0; }`;

export class CsIconInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  name?: IconProps.Name;

  @property({ type: String })
  size: IconProps.Size = 'normal';

  @property({ type: String })
  variant: IconProps.Variant = 'normal';

  @property({ type: String })
  url?: string;

  @property({ type: String })
  alt?: string;

  @property({ type: String })
  override ariaLabel: string | null = null;

  @consume({ context: iconProviderContext, subscribe: true })
  _iconResolver?: IconResolverFn;

  override render() {
    const hasAriaLabel = typeof this.ariaLabel === 'string' && this.ariaLabel.length > 0;

    const classes = {
      'icon': true,
      [`size-${this.size}`]: true,
      [`size-${this.size}-mapped-height`]: true,
      [`variant-${this.variant}`]: true,
    };

    return html`
      <span
        class=${classMap(classes)}
        role=${ifDefined(hasAriaLabel ? 'img' : undefined)}
        aria-label=${ifDefined(hasAriaLabel ? this.ariaLabel : undefined)}
        aria-hidden=${hasAriaLabel ? 'false' : 'true'}
      >
        ${this._renderContent()}
      </span>
    `;
  }

  private _renderContent(): unknown {
    if (this.name) {
      if (this._iconResolver) {
        const override = this._iconResolver(this.name);
        if (override !== undefined && override !== null) {
          return override;
        }
      }

      const iconSvg = builtInIcons[this.name];
      if (iconSvg) {
        return this._wrapSvg(iconSvg);
      }
    }

    if (this.url) {
      const altText = this.ariaLabel ?? this.alt ?? '';
      return html`<img src=${this.url} alt=${altText} />`;
    }

    return html`<slot name="svg"></slot>`;
  }

  private _wrapSvg(content: SVGTemplateResult): SVGTemplateResult {
    return svgTag`<svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      aria-hidden="true"
    >${content}</svg>`;
  }
}
