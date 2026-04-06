import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { SpinnerProps } from './interfaces.js';

/**
 * Host display override: Cloudscape renders spinner root as inline-block with
 * line-height: 0. Without this, the custom element inherits the document's
 * line-height, creating an inflated line box that adds extra height.
 */
const hostStyles = css`
  :host {
    display: inline-block;
    vertical-align: top;
    line-height: 0;
  }
`;

export class CsSpinnerInternal extends LitElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String, reflect: true })
  size: SpinnerProps.Size = 'normal';

  @property({ type: String, reflect: true })
  variant: SpinnerProps.Variant = 'normal';

  override render() {
    const classes = {
      'root': true,
      [`size-${this.size}`]: true,
      [`variant-${this.variant}`]: true,
    };

    return html`
      <span class=${classMap(classes)} role="img" aria-label="Loading"><span class="circle circle-left"></span><span class="circle circle-right"></span></span>
    `;
  }
}
