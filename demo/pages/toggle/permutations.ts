import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/toggle/index.js';

@customElement('toggle-permutations-page')
export class TogglePermutationsPage extends LitElement {
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
      flex-direction: column;
      gap: 12px;
    }
  `;

  override render() {
    return html`
      <h2>Toggle — Permutations</h2>

      <section>
        <h3>Default States</h3>
        <div class="row">
          <cs-toggle>Unchecked toggle</cs-toggle>
          <cs-toggle checked>Checked toggle</cs-toggle>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-toggle disabled>Disabled unchecked</cs-toggle>
          <cs-toggle checked disabled>Disabled checked</cs-toggle>
        </div>
      </section>

      <section>
        <h3>Read Only</h3>
        <div class="row">
          <cs-toggle read-only>Read-only unchecked</cs-toggle>
          <cs-toggle checked read-only>Read-only checked</cs-toggle>
        </div>
      </section>

      <section>
        <h3>With Description</h3>
        <div class="row">
          <cs-toggle description="This is a helpful description">Toggle with description</cs-toggle>
          <cs-toggle checked description="Enabled for all users">Feature toggle</cs-toggle>
        </div>
      </section>

      <section>
        <h3>With aria-label</h3>
        <div class="row">
          <cs-toggle aria-label="Enable notifications">Enable notifications</cs-toggle>
        </div>
      </section>
    `;
  }
}

export const tagName = 'toggle-permutations-page';
