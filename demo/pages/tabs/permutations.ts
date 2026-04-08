import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/tabs/index.js';

@customElement('tabs-permutations-page')
export class TabsPermutationsPage extends LitElement {
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

  @state()
  private _activeTabDefault = 'first';

  @state()
  private _activeTabContainer = 'tab1';

  private _defaultTabs = [
    { id: 'first', label: 'First tab' },
    { id: 'second', label: 'Second tab' },
    { id: 'third', label: 'Third tab', disabled: true },
    { id: 'fourth', label: 'Fourth tab' },
  ];

  private _containerTabs = [
    { id: 'tab1', label: 'Details' },
    { id: 'tab2', label: 'Settings' },
    { id: 'tab3', label: 'Permissions' },
  ];

  private _onDefaultChange(e: CustomEvent<{ activeTabId: string }>) {
    this._activeTabDefault = e.detail.activeTabId;
  }

  private _onContainerChange(e: CustomEvent<{ activeTabId: string }>) {
    this._activeTabContainer = e.detail.activeTabId;
  }

  override render() {
    return html`
      <h2>Tabs — Permutations</h2>

      <section>
        <h3>Default Variant</h3>
        <div class="row">
          <cs-tabs
            .tabs=${this._defaultTabs}
            active-tab-id=${this._activeTabDefault}
            @change=${this._onDefaultChange}
          >
            <div slot="first">Content for the first tab</div>
            <div slot="second">Content for the second tab</div>
            <div slot="third">Content for the third tab (disabled)</div>
            <div slot="fourth">Content for the fourth tab</div>
          </cs-tabs>
        </div>
      </section>

      <section>
        <h3>Container Variant</h3>
        <div class="row">
          <cs-tabs
            variant="container"
            .tabs=${this._containerTabs}
            active-tab-id=${this._activeTabContainer}
            @change=${this._onContainerChange}
          >
            <div slot="tab1">Details content goes here</div>
            <div slot="tab2">Settings content goes here</div>
            <div slot="tab3">Permissions content goes here</div>
          </cs-tabs>
        </div>
      </section>

      <section>
        <h3>Disabled Content Paddings</h3>
        <div class="row">
          <cs-tabs
            variant="container"
            disable-content-paddings
            .tabs=${this._containerTabs}
            active-tab-id="tab1"
          >
            <div slot="tab1">Content without paddings</div>
            <div slot="tab2">Settings without paddings</div>
            <div slot="tab3">Permissions without paddings</div>
          </cs-tabs>
        </div>
      </section>

      <section>
        <h3>With Disabled Tab</h3>
        <div class="row">
          <cs-tabs
            .tabs=${this._defaultTabs}
            active-tab-id="first"
          >
            <div slot="first">First tab content</div>
            <div slot="second">Second tab content</div>
            <div slot="third">Third tab content (disabled)</div>
            <div slot="fourth">Fourth tab content</div>
          </cs-tabs>
        </div>
      </section>
    `;
  }
}

export const tagName = 'tabs-permutations-page';
