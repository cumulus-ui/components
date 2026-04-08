import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/drawer/index.js';
import '../../../src/header/index.js';
import '../../../src/button/index.js';

@customElement('drawer-permutations-page')
export class DrawerPermutationsPage extends LitElement {
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
