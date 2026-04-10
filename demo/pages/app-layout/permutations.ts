import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/app-layout/index.js';
import '../../../src/side-navigation/index.js';
import '../../../src/help-panel/index.js';
import '../../../src/header/index.js';
import '../../../src/container/index.js';
import '../../../src/breadcrumb-group/index.js';
import '../../../src/flashbar/index.js';
import '../../../src/button/index.js';

@customElement('app-layout-permutations-page')
export class AppLayoutPermutationsPage extends PermutationsPageBase {
  static override styles = css`
    :host {
      display: block;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 {
      margin-top: 0;
      margin-bottom: 0.83em;
      line-height: 1.15;
    }
    section.demo-section {
      margin-bottom: 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section.demo-section h3 {
      margin-top: 0;
      margin-bottom: 1em;
      font-size: 14px;
      line-height: 1.15;
      color: #687078;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .layout-container {
      height: 400px;
      border: 1px solid #e9ebed;
      overflow: hidden;
    }
  `;

  @state() private _navOpen = true;
  @state() private _toolsOpen = false;

  private _onNavChange(e: CustomEvent<{ open: boolean }>) {
    this._navOpen = e.detail.open;
  }

  private _onToolsChange(e: CustomEvent<{ open: boolean }>) {
    this._toolsOpen = e.detail.open;
  }

  override render() {
    return html`
      <h2>AppLayout — Permutations</h2>

      <section class="demo-section">
        <h3>Default Layout with Navigation and Tools</h3>
        <div class="layout-container">
          <cs-app-layout
            .navigationOpen=${this._navOpen}
            .toolsOpen=${this._toolsOpen}
            @navigationChange=${this._onNavChange}
            @toolsChange=${this._onToolsChange}
          >
            <div slot="navigation">
              <cs-side-navigation
                .header=${{ text: 'Service', href: '#/' }}
                .items=${[
                  { type: 'link', text: 'Page 1', href: '#/page1' },
                  { type: 'link', text: 'Page 2', href: '#/page2' },
                  { type: 'link', text: 'Page 3', href: '#/page3' },
                ]}
              ></cs-side-navigation>
            </div>
            <div slot="breadcrumbs">
              <cs-breadcrumb-group
                .items=${[
                  { text: 'Home', href: '#/' },
                  { text: 'Service', href: '#/service' },
                  { text: 'Page', href: '#/page' },
                ]}
              ></cs-breadcrumb-group>
            </div>
            <div slot="notifications">
              <cs-flashbar
                .items=${[
                  { type: 'info', content: 'This is an info notification.' },
                ]}
              ></cs-flashbar>
            </div>
            <cs-container>
              <cs-header slot="header" variant="h1">Page Title</cs-header>
              This is the main content area of the application layout.
            </cs-container>
            <div slot="tools">
              <cs-help-panel>
                <cs-header slot="header" variant="h2">Help</cs-header>
                This is the help panel content.
              </cs-help-panel>
            </div>
          </cs-app-layout>
        </div>
      </section>

      <section class="demo-section">
        <h3>Navigation Hidden</h3>
        <div class="layout-container">
          <cs-app-layout navigation-hide>
            Main content without navigation.
          </cs-app-layout>
        </div>
      </section>

      <section class="demo-section">
        <h3>Tools Hidden</h3>
        <div class="layout-container">
          <cs-app-layout tools-hide .navigationOpen=${true}>
            <div slot="navigation">
              <div style="padding: 16px;">Navigation content</div>
            </div>
            Main content without tools panel.
          </cs-app-layout>
        </div>
      </section>

      <section class="demo-section">
        <h3>Disabled Content Paddings</h3>
        <div class="layout-container">
          <cs-app-layout navigation-hide tools-hide disable-content-paddings>
            <div style="background: #f2f3f3; padding: 16px;">
              Content with no outer paddings — edge-to-edge.
            </div>
          </cs-app-layout>
        </div>
      </section>
    `;
  }
}

export const tagName = 'app-layout-permutations-page';
