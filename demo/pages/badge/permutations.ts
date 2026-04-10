import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/badge/index.js';

@customElement('badge-permutations-page')
export class BadgePermutationsPage extends PermutationsPageBase {

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
