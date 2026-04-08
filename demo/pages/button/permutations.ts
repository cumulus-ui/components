import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/button/index.js';

@customElement('button-permutations-page')
export class ButtonPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 {
      margin-top: 0;
      margin-bottom: 0.83em;
      line-height: 1.15;
    }
    section {
      margin-bottom: 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section h3 {
      margin-top: 0;
      margin-bottom: 1em;
      font-size: 14px;
      line-height: 1.15;
      color: #687078;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
    }
  `;

  override render() {
    return html`
      <h2>Button — Permutations</h2>

      <section>
        <h3>Variants</h3>
        <div class="row">
          <cs-button variant="primary">Primary</cs-button>
          <cs-button variant="normal">Normal</cs-button>
          <cs-button variant="link">Link</cs-button>
          <cs-button variant="icon" icon-name="settings" aria-label="Settings"></cs-button>
          <cs-button variant="inline-icon" icon-name="settings" aria-label="Inline settings"></cs-button>
          <cs-button variant="inline-link">Inline link</cs-button>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-button variant="primary" disabled>Disabled primary</cs-button>
          <cs-button variant="normal" disabled>Disabled normal</cs-button>
          <cs-button variant="link" disabled>Disabled link</cs-button>
        </div>
      </section>

      <section>
        <h3>Disabled with Reason</h3>
        <div class="row">
          <cs-button variant="primary" disabled disabled-reason="Insufficient permissions">Disabled with reason</cs-button>
        </div>
      </section>

      <section>
        <h3>Loading</h3>
        <div class="row">
          <cs-button variant="primary" loading loading-text="Submitting…">Submit</cs-button>
          <cs-button variant="normal" loading loading-text="Loading…">Load</cs-button>
        </div>
      </section>

      <section>
        <h3>With Icons</h3>
        <div class="row">
          <cs-button variant="normal" icon-name="add-plus">Add item</cs-button>
          <cs-button variant="normal" icon-name="download" icon-align="right">Download</cs-button>
        </div>
      </section>

      <section>
        <h3>As Link (href)</h3>
        <div class="row">
          <cs-button variant="link" href="https://example.com">Visit example</cs-button>
          <cs-button variant="link" href="https://example.com" external>External link</cs-button>
        </div>
      </section>

      <section>
        <h3>Full Width</h3>
        <div class="row" style="width: 300px;">
          <cs-button variant="primary" full-width>Full width button</cs-button>
        </div>
      </section>
    `;
  }
}

export const tagName = 'button-permutations-page';
