import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/status-indicator/index.js';

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
          <cs-status-indicator type="success">Success</cs-status-indicator>
          <cs-status-indicator type="error">Error</cs-status-indicator>
          <cs-status-indicator type="warning">Warning</cs-status-indicator>
          <cs-status-indicator type="info">Info</cs-status-indicator>
          <cs-status-indicator type="loading">Loading</cs-status-indicator>
          <cs-status-indicator type="stopped">Stopped</cs-status-indicator>
          <cs-status-indicator type="pending">Pending</cs-status-indicator>
          <cs-status-indicator type="in-progress">In progress</cs-status-indicator>
        </div>
      </section>

      <section>
        <h3>Color Override</h3>
        <div class="row">
          <cs-status-indicator type="success" color-override="red">Red override</cs-status-indicator>
          <cs-status-indicator type="success" color-override="blue">Blue override</cs-status-indicator>
          <cs-status-indicator type="success" color-override="green">Green override</cs-status-indicator>
          <cs-status-indicator type="success" color-override="yellow">Yellow override</cs-status-indicator>
          <cs-status-indicator type="success" color-override="grey">Grey override</cs-status-indicator>
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
