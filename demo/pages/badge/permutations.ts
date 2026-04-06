import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/badge/index.js';

@customElement('badge-permutations-page')
export class BadgePermutationsPage extends LitElement {
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
      gap: 12px;
    }
  `;

  override render() {
    return html`
      <h2>Badge — Permutations</h2>

      <section>
        <h3>Colors</h3>
        <div class="row">
          <cs-badge color="blue">Blue</cs-badge>
          <cs-badge color="grey">Grey</cs-badge>
          <cs-badge color="green">Green</cs-badge>
          <cs-badge color="red">Red</cs-badge>
        </div>
      </section>

      <section>
        <h3>Severity</h3>
        <div class="row">
          <cs-badge color="severity-critical">Critical</cs-badge>
          <cs-badge color="severity-high">High</cs-badge>
          <cs-badge color="severity-medium">Medium</cs-badge>
          <cs-badge color="severity-low">Low</cs-badge>
          <cs-badge color="severity-neutral">Neutral</cs-badge>
        </div>
      </section>

      <section>
        <h3>Default (no color prop)</h3>
        <div class="row">
          <cs-badge>Default</cs-badge>
        </div>
      </section>
    `;
  }
}

export const tagName = 'badge-permutations-page';
