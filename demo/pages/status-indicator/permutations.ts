import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import { createPermutations } from '../../utils/create-permutations.js';
import { renderPermutations } from '../../utils/permutations-view.js';
import '../../../src/status-indicator/index.js';

const typePermutations = createPermutations<{ type: string }>([
  { type: ['success', 'error', 'warning', 'info', 'loading', 'stopped', 'pending', 'in-progress'] },
]);

const colorOverridePermutations = createPermutations<{ colorOverride: string }>([
  { colorOverride: ['red', 'blue', 'green', 'yellow', 'grey'] },
]);

function typeLabel(type: string): string {
  return type.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

@customElement('status-indicator-permutations-page')
export class StatusIndicatorPermutationsPage extends PermutationsPageBase {
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
      <h2>Status Indicator — Permutations</h2>

      <section>
        <h3>All Types</h3>
        <div class="row">
          ${renderPermutations(typePermutations, p => html`<cs-status-indicator type=${p.type}>${typeLabel(p.type)}</cs-status-indicator>`)}
        </div>
      </section>

      <section>
        <h3>Color Override</h3>
        <div class="row">
          ${renderPermutations(colorOverridePermutations, p => html`<cs-status-indicator type="success" color-override=${p.colorOverride}>${capitalize(p.colorOverride)} override</cs-status-indicator>`)}
        </div>
      </section>

      <section>
        <h3>No Wrap Text</h3>
        <div class="row" style="width: 150px;">
          <cs-status-indicator type="info" wrap-text>This is a long text that should wrap normally</cs-status-indicator>
          <cs-status-indicator type="info" .wrapText=${false}>This is a long text that should be truncated with ellipsis</cs-status-indicator>
        </div>
      </section>
    `;
  }
}

export const tagName = 'status-indicator-permutations-page';
