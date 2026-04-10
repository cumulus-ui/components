import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/token/index.js';

@customElement('token-permutations-page')
export class TokenPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
    }
    `];

  override render() {
    return html`
      <h2>Token — Permutations</h2>

      <section>
        <h3>Basic Token</h3>
        <div class="row">
          <cs-token>Option 1</cs-token>
          <cs-token>Option 2</cs-token>
          <cs-token>Option 3</cs-token>
        </div>
      </section>

      <section>
        <h3>With Description</h3>
        <div class="row">
          <cs-token description="us-east-1">Production</cs-token>
          <cs-token description="eu-west-1" label-tag="Beta">Staging</cs-token>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-token disabled>Disabled token</cs-token>
        </div>
      </section>

      <section>
        <h3>Read-only</h3>
        <div class="row">
          <cs-token read-only>Read-only token</cs-token>
        </div>
      </section>

      <section>
        <h3>Inline Variant</h3>
        <div class="row">
          <cs-token variant="inline">Inline token</cs-token>
          <cs-token variant="inline" disabled>Inline disabled</cs-token>
        </div>
      </section>

      <section>
        <h3>Dismissible</h3>
        <div class="row">
          <cs-token dismissible dismiss-label="Remove option A">Option A</cs-token>
          <cs-token dismissible dismiss-label="Remove option B">Option B</cs-token>
        </div>
      </section>
    `;
  }
}

export const tagName = 'token-permutations-page';
