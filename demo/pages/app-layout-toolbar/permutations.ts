import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/app-layout-toolbar/index.js';
import '../../../src/side-navigation/index.js';
import '../../../src/help-panel/index.js';
import '../../../src/header/index.js';
import '../../../src/container/index.js';
import '../../../src/breadcrumb-group/index.js';
import '../../../src/flashbar/index.js';
import '../../../src/icon/index.js';

@customElement('app-layout-toolbar-permutations-page')
export class AppLayoutToolbarPermutationsPage extends PermutationsPageBase {
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
  @state() private _activeDrawerId: string | null = null;

  private _onNavChange(e: CustomEvent<{ open: boolean }>) {
    this._navOpen = e.detail.open;
  }

  private _onToolsChange(e: CustomEvent<{ open: boolean }>) {
    this._toolsOpen = e.detail.open;
  }

  private _onDrawerChange(e: CustomEvent<{ activeDrawerId: string | null }>) {
    this._activeDrawerId = e.detail.activeDrawerId;
  }

  private _drawers = [
    {
      id: 'security',
      trigger: { iconName: 'lock-private' as const },
      ariaLabels: { drawerName: 'Security', triggerButton: 'Security' },
      badge: true,
      defaultSize: 320,
    },
    {
      id: 'pro-help',
      trigger: { iconName: 'status-info' as const },
      ariaLabels: { drawerName: 'Pro Help', triggerButton: 'Pro Help' },
      defaultSize: 290,
    },
  ];

  override render() {
    return html`
      <h2>AppLayoutToolbar — Permutations</h2>

      <section class="demo-section">
        <h3>Full Toolbar Layout with Navigation, Drawers, and Tools</h3>
        <div class="layout-container">
          <cs-app-layout-toolbar
            .navigationOpen=${this._navOpen}
            .toolsOpen=${this._toolsOpen}
            .toolbarDrawers=${this._drawers}
            .activeDrawerId=${this._activeDrawerId}
            @navigationChange=${this._onNavChange}
            @toolsChange=${this._onToolsChange}
            @drawerChange=${this._onDrawerChange}
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
                  { type: 'info', content: 'Toolbar layout groups all triggers at the top.' },
                ]}
              ></cs-flashbar>
            </div>
            <cs-container>
              <cs-header slot="header" variant="h1">Toolbar Layout</cs-header>
              Main content area. All triggers (navigation, drawers, tools) are in the toolbar bar above.
            </cs-container>
            <div slot="tools">
              <cs-help-panel>
                <cs-header slot="header" variant="h2">Help</cs-header>
                This is the help panel content.
              </cs-help-panel>
            </div>
            <div slot="drawer-security">
              <div style="padding: 16px;">Security drawer content with badge notification.</div>
            </div>
            <div slot="drawer-pro-help">
              <div style="padding: 16px;">Pro Help drawer content.</div>
            </div>
          </cs-app-layout-toolbar>
        </div>
      </section>

      <section class="demo-section">
        <h3>Navigation Trigger Hidden</h3>
        <div class="layout-container">
          <cs-app-layout-toolbar navigation-trigger-hide .navigationOpen=${true}>
            <div slot="navigation">
              <div style="padding: 16px;">Navigation content (opened programmatically)</div>
            </div>
            <div slot="breadcrumbs">
              <cs-breadcrumb-group
                .items=${[{ text: 'Home', href: '#/' }, { text: 'Page', href: '#/page' }]}
              ></cs-breadcrumb-group>
            </div>
            Main content with hidden navigation trigger.
          </cs-app-layout-toolbar>
        </div>
      </section>

      <section class="demo-section">
        <h3>Tools Hidden</h3>
        <div class="layout-container">
          <cs-app-layout-toolbar tools-hide .navigationOpen=${true}>
            <div slot="navigation">
              <div style="padding: 16px;">Navigation content</div>
            </div>
            Main content without tools panel.
          </cs-app-layout-toolbar>
        </div>
      </section>

      <section class="demo-section">
        <h3>Minimal — No Navigation, No Tools</h3>
        <div class="layout-container">
          <cs-app-layout-toolbar navigation-hide tools-hide>
            <div slot="breadcrumbs">
              <cs-breadcrumb-group
                .items=${[{ text: 'Home', href: '#/' }]}
              ></cs-breadcrumb-group>
            </div>
            Minimal toolbar with only breadcrumbs.
          </cs-app-layout-toolbar>
        </div>
      </section>
    `;
  }
}

export const tagName = 'app-layout-toolbar-permutations-page';
