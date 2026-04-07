import { css, html } from 'lit';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';

const hostStyles = css`:host { display: block; }`;

export class CsTextContentInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  override render() {
    return html`
      <div class="text-content">
        <slot></slot>
      </div>
    `;
  }
}
