import { css, html } from 'lit';
import { CsBaseElement } from '../internal/base-element.js';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { BadgeProps } from './interfaces.js';

/**
 * Host display override: Cloudscape renders badges as inline-block spans.
 * Without this, the custom element defaults to inline with the shared styles'
 * line-height (22px), making the element taller than the internal badge (20px).
 */
const hostStyles = css`
  :host {
    display: inline-block;
    line-height: 0;
  }
`;

export class CsBadgeInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String, reflect: true })
  color: BadgeProps['color'] = 'grey';

  override render() {
    const classes = {
      'badge': true,
      [`badge-color-${this.color}`]: true,
    };

    return html`
      <span class=${classMap(classes)}>
        <slot></slot>
      </span>
    `;
  }
}
