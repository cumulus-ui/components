import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/tooltip/index.js';
import '../../../src/button/index.js';

@customElement('tooltip-permutations-page')
export class TooltipPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      align-items: center;
      padding: 32px 0;
      justify-content: center;
    }
    `];

  override render() {
    return html`
      <h2>Tooltip — Permutations</h2>

      <section>
        <h3>Positions</h3>
        <div class="row">
          <cs-tooltip content="Tooltip on top" position="top">
            <cs-button variant="normal">Top</cs-button>
          </cs-tooltip>
          <cs-tooltip content="Tooltip on right" position="right">
            <cs-button variant="normal">Right</cs-button>
          </cs-tooltip>
          <cs-tooltip content="Tooltip on bottom" position="bottom">
            <cs-button variant="normal">Bottom</cs-button>
          </cs-tooltip>
          <cs-tooltip content="Tooltip on left" position="left">
            <cs-button variant="normal">Left</cs-button>
          </cs-tooltip>
        </div>
      </section>

      <section>
        <h3>Tooltip on Text</h3>
        <div class="row">
          <cs-tooltip content="This is additional information about the text.">
            <span tabindex="0" style="text-decoration: underline dotted; cursor: help;">Hover or focus me</span>
          </cs-tooltip>
        </div>
      </section>

      <section>
        <h3>Default Position (top)</h3>
        <div class="row">
          <cs-tooltip content="Default position is top">
            <cs-button variant="primary">Default</cs-button>
          </cs-tooltip>
        </div>
      </section>
    `;
  }
}

export const tagName = 'tooltip-permutations-page';
