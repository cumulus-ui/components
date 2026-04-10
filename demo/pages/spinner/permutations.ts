import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/spinner/index.js';

@customElement('spinner-permutations-page')
export class SpinnerPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .inverted-bg {
      background: #0f1b2a;
      padding: 12px;
      border-radius: 4px;
    }
    `];

  override render() {
    return html`
      <h2>Spinner — Permutations</h2>

      <section>
        <h3>Sizes</h3>
        <div class="row">
          <cs-spinner size="normal"></cs-spinner>
          <cs-spinner size="big"></cs-spinner>
          <cs-spinner size="large"></cs-spinner>
        </div>
      </section>

      <section>
        <h3>Variants</h3>
        <div class="row">
          <cs-spinner variant="normal"></cs-spinner>
          <cs-spinner variant="disabled"></cs-spinner>
          <div class="inverted-bg">
            <cs-spinner variant="inverted"></cs-spinner>
          </div>
        </div>
      </section>

      <section>
        <h3>All Combinations</h3>
        <div class="row">
          <cs-spinner size="normal" variant="normal"></cs-spinner>
          <cs-spinner size="big" variant="normal"></cs-spinner>
          <cs-spinner size="large" variant="normal"></cs-spinner>
          <cs-spinner size="normal" variant="disabled"></cs-spinner>
          <cs-spinner size="big" variant="disabled"></cs-spinner>
          <cs-spinner size="large" variant="disabled"></cs-spinner>
        </div>
      </section>
    `;
  }
}

export const tagName = 'spinner-permutations-page';
