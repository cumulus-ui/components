import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/spinner/index.js';

@customElement('spinner-permutations-page')
export class SpinnerPermutationsPage extends LitElement {
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
      align-items: center;
      gap: 16px;
    }
    .inverted-bg {
      background: #0f1b2a;
      padding: 12px;
      border-radius: 4px;
    }
  `;

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
