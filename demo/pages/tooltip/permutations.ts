import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/tooltip/index.js';
import '../../../src/button/index.js';

@customElement('tooltip-permutations-page')
export class TooltipPermutationsPage extends LitElement {
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
      flex-wrap: wrap;
      gap: 24px;
      align-items: center;
      padding: 32px 0;
      justify-content: center;
    }
  `;

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
