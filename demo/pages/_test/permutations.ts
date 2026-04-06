import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('demo-test-permutations')
export class DemoTestPermutations extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
    }
    .status {
      padding: 16px;
      border: 2px solid #0972d3;
      border-radius: 8px;
      background: #f2f8fd;
      color: #0972d3;
    }
    .meta {
      margin-top: 16px;
      color: #687078;
      font-size: 14px;
    }
  `;

  override render() {
    return html`
      <h2>_test / permutations</h2>
      <div class="status">
        <div>Demo infrastructure works!</div>
      </div>
      <div class="meta">
        <p>This page proves that:</p>
        <ul>
          <li>Hash routing resolved the component/variant</li>
          <li>Dynamic import loaded this module</li>
          <li>Lit custom element rendered successfully</li>
        </ul>
      </div>
    `;
  }
}

export const tagName = 'demo-test-permutations';
