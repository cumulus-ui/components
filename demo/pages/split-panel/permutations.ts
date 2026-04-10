import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/split-panel/index.js';
import '../../../src/button/index.js';

@customElement('split-panel-permutations-page')
export class SplitPanelPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    `];

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
