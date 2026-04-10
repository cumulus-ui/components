import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import { createPermutations } from '../../utils/create-permutations.js';
import { renderPermutations } from '../../utils/permutations-view.js';
import '../../../src/badge/index.js';

const colorPermutations = createPermutations<{ color: string }>([
  { color: ['blue', 'grey', 'green', 'red'] },
]);

const severityPermutations = createPermutations<{ color: string }>([
  { color: ['severity-critical', 'severity-high', 'severity-medium', 'severity-low', 'severity-neutral'] },
]);

function badgeLabel(color: string): string {
  const base = color.startsWith('severity-') ? color.slice('severity-'.length) : color;
  return base.charAt(0).toUpperCase() + base.slice(1);
}

@customElement('badge-permutations-page')
export class BadgePermutationsPage extends PermutationsPageBase {

  override render() {
    return html`
      <h2>Badge — Permutations</h2>

      <section>
        <h3>Colors</h3>
        <div class="row">
          ${renderPermutations(colorPermutations, p => html`<cs-badge color=${p.color}>${badgeLabel(p.color)}</cs-badge>`)}
        </div>
      </section>

      <section>
        <h3>Severity</h3>
        <div class="row">
          ${renderPermutations(severityPermutations, p => html`<cs-badge color=${p.color}>${badgeLabel(p.color)}</cs-badge>`)}
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
