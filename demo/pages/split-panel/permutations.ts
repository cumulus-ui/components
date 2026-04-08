import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/split-panel/index.js';
import '../../../src/button/index.js';

@customElement('split-panel-permutations-page')
export class SplitPanelPermutationsPage extends LitElement {
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
      flex-direction: column;
      gap: 16px;
    }
  `;

  override render() {
    return html`
      <h2>Split Panel — Permutations</h2>

      <section>
        <h3>Default Split Panel</h3>
        <div class="row">
          <cs-split-panel header="Details">
            This is the split panel content area.
          </cs-split-panel>
        </div>
      </section>

      <section>
        <h3>Hide Preferences Button</h3>
        <div class="row">
          <cs-split-panel header="Details" hide-preferences-button>
            Split panel without preferences button.
          </cs-split-panel>
        </div>
      </section>

      <section>
        <h3>Close Behavior: Hide</h3>
        <div class="row">
          <cs-split-panel header="Hidden on Close" close-behavior="hide">
            This panel hides completely when closed.
          </cs-split-panel>
        </div>
      </section>

      <section>
        <h3>Custom Size</h3>
        <div class="row">
          <cs-split-panel header="Large Panel" size="400">
            A larger split panel with custom size.
          </cs-split-panel>
        </div>
      </section>
    `;
  }
}

export const tagName = 'split-panel-permutations-page';
