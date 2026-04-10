import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/toggle/index.js';

@customElement('toggle-permutations-page')
export class TogglePermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    `];

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
