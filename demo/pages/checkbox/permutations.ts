import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/checkbox/index.js';

@customElement('checkbox-permutations-page')
export class CheckboxPermutationsPage extends LitElement {
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
      <h2>Checkbox — Permutations</h2>

      <section>
        <h3>Default</h3>
        <div class="row">
          <cs-checkbox>Unchecked</cs-checkbox>
        </div>
      </section>

      <section>
        <h3>Checked</h3>
        <div class="row">
          <cs-checkbox checked>Checked</cs-checkbox>
        </div>
      </section>

      <section>
        <h3>Indeterminate</h3>
        <div class="row">
          <cs-checkbox indeterminate>Indeterminate</cs-checkbox>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-checkbox disabled>Disabled unchecked</cs-checkbox>
          <cs-checkbox checked disabled>Disabled checked</cs-checkbox>
          <cs-checkbox indeterminate disabled>Disabled indeterminate</cs-checkbox>
        </div>
      </section>

      <section>
        <h3>Read Only</h3>
        <div class="row">
          <cs-checkbox read-only checked>Read-only checked</cs-checkbox>
        </div>
      </section>

      <section>
        <h3>With Description</h3>
        <div class="row">
          <cs-checkbox description="Additional info about this option">With description</cs-checkbox>
          <cs-checkbox checked description="This option is currently active">Checked with description</cs-checkbox>
        </div>
      </section>

      <section>
        <h3>With ARIA Label</h3>
        <div class="row">
          <cs-checkbox aria-label="Accept terms and conditions">Accept T&amp;C</cs-checkbox>
        </div>
      </section>
    `;
  }
}

export const tagName = 'checkbox-permutations-page';
