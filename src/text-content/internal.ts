import { css, html, LitElement } from 'lit';
import { componentStyles, sharedStyles } from './styles.js';

const hostStyles = css`:host { display: block; }`;

export class CsTextContentInternal extends LitElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  override render() {
    return html`
      <div class="text-content">
        <slot></slot>
      </div>
    `;
  }
}
