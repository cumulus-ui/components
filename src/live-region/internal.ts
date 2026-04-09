import { css, html } from 'lit';
import { CsBaseElement } from '../internal/base-element.js';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { LiveRegionProps } from './interfaces.js';

const hostStyles = css`:host { display: contents; }`;

export class CsLiveRegionInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: Boolean, reflect: true })
  assertive = false;

  @property({ type: String, reflect: true, attribute: 'tag-name' })
  tagName_: LiveRegionProps.TagName = 'div';

  @property({ type: Boolean, reflect: true })
  hidden = false;

  override render() {
    const liveValue = this.assertive ? 'assertive' : 'polite';
    const classes = {
      'root': !this.hidden,
      'announcer': !!this.hidden,
    };

    if (this.tagName_ === 'span') {
      return html`
        <span class=${classMap(classes)} aria-live=${liveValue} aria-atomic="true">
          <slot></slot>
        </span>
      `;
    }

    return html`
      <div class=${classMap(classes)} aria-live=${liveValue} aria-atomic="true">
        <slot></slot>
      </div>
    `;
  }
}
