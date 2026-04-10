import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/drawer/index.js';
import '../../../src/header/index.js';
import '../../../src/button/index.js';

@customElement('drawer-permutations-page')
export class DrawerPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    `];

  override render() {
    return html`
      <h2>Drawer — Permutations</h2>

      <section>
        <h3>Default Drawer</h3>
        <div class="row">
          <cs-drawer>
            <cs-header slot="header" variant="h2">Help Panel</cs-header>
            This is the drawer content with helpful information.
          </cs-drawer>
        </div>
      </section>

      <section>
        <h3>Loading State</h3>
        <div class="row">
          <cs-drawer loading>
            <cs-header slot="header" variant="h2">Loading Drawer</cs-header>
          </cs-drawer>
        </div>
      </section>

      <section>
        <h3>With Footer</h3>
        <div class="row">
          <cs-drawer>
            <cs-header slot="header" variant="h2">Drawer with Footer</cs-header>
            Drawer content with a footer area below.
            <div slot="footer">
              <cs-button variant="primary">Apply</cs-button>
            </div>
          </cs-drawer>
        </div>
      </section>

      <section>
        <h3>Disabled Content Paddings</h3>
        <div class="row">
          <cs-drawer disable-content-paddings>
            <cs-header slot="header" variant="h2">No Padding</cs-header>
            Content without paddings.
          </cs-drawer>
        </div>
      </section>

      <section>
        <h3>With Header Actions</h3>
        <div class="row">
          <cs-drawer>
            <cs-header slot="header" variant="h2">With Actions</cs-header>
            <div slot="headerActions">
              <cs-button variant="icon" icon-name="close" aria-label="Close drawer"></cs-button>
            </div>
            Drawer with header actions.
          </cs-drawer>
        </div>
      </section>
    `;
  }
}

export const tagName = 'drawer-permutations-page';
