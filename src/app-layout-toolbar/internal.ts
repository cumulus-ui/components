import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsAppLayoutInternal } from '../app-layout/internal.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import type { AppLayoutProps } from '../app-layout/interfaces.js';
import type { AppLayoutToolbarProps } from './interfaces.js';

const toolbarStyles = css`
  .toolbar {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 48px;
    padding: 0 12px;
    background: var(--color-background-container-content, #ffffff);
    border-bottom: 1px solid var(--color-divider-default, #e9ebed);
    box-sizing: border-box;
  }

  .toolbar__nav-trigger,
  .toolbar__tools-trigger,
  .toolbar__drawer-trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 0;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: var(--color-text-interactive-default, #414d5c);
    cursor: pointer;
    position: relative;
  }

  .toolbar__nav-trigger:hover,
  .toolbar__tools-trigger:hover,
  .toolbar__drawer-trigger:hover {
    background: var(--color-background-button-hover, #f2f3f3);
  }

  .toolbar__nav-trigger:focus-visible,
  .toolbar__tools-trigger:focus-visible,
  .toolbar__drawer-trigger:focus-visible {
    outline: 2px solid var(--color-item-focused, #0972d3);
    outline-offset: 2px;
  }

  .toolbar__drawer-trigger--active {
    background: var(--color-background-button-normal, #e9ebed);
    color: var(--color-text-interactive, #0972d3);
  }

  .toolbar__breadcrumbs {
    flex: 1;
    min-width: 0;
    padding: 0 8px;
  }

  .toolbar__separator {
    width: 1px;
    height: 24px;
    background: var(--color-divider-default, #e9ebed);
    margin: 0 4px;
    flex-shrink: 0;
  }

  .toolbar__badge {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-background-notification-badge, #d91515);
  }

  .toolbar__drawer-panel {
    border-left: 1px solid var(--color-divider-default, #e9ebed);
  }
`;

export class CsAppLayoutToolbarInternal extends CsAppLayoutInternal {
  static override styles = [
    ...CsAppLayoutInternal.styles,
    toolbarStyles,
  ];

  @property({ type: Boolean, reflect: true })
  navigationTriggerHide = false;

  @property({ type: String, reflect: true })
  activeDrawerId: string | null = null;

  @property({ attribute: false })
  toolbarDrawers: Array<AppLayoutToolbarProps.Drawer> = [];

  private _handleToggleDrawer(id: string): void {
    const newId = this.activeDrawerId === id ? null : id;
    this.activeDrawerId = newId;
    fireNonCancelableEvent<AppLayoutProps.DrawerChangeDetail>(this, 'drawerChange', {
      activeDrawerId: newId,
    });
  }

  private _handleNavToggle(open: boolean): void {
    this.navigationOpen = open;
    fireNonCancelableEvent<AppLayoutProps.ChangeDetail>(this, 'navigationChange', { open });
  }

  private _handleToolsToggle(open: boolean): void {
    this.toolsOpen = open;
    fireNonCancelableEvent<AppLayoutProps.ChangeDetail>(this, 'toolsChange', { open });
  }

  focusNavigation(): void {
    const navTrigger = this.shadowRoot?.querySelector<HTMLButtonElement>('.toolbar__nav-trigger');
    navTrigger?.focus();
  }

  override render(): TemplateResult {
    const activeDrawer = this.toolbarDrawers.find(d => d.id === this.activeDrawerId);
    const activeDrawerWidth = activeDrawer?.defaultSize ?? 290;

    const layoutMainClasses = {
      'layout-main': true,
      'layout-main-scrollable': true,
    };

    const contentWrapperClasses = {
      'content-wrapper': true,
      'app-layout-content-wrapper--content-wrapper': !this.disableContentPaddings,
    };

    const navigationClasses = {
      'app-layout-drawer--drawer': true,
    };

    const toolsClasses = {
      'app-layout-drawer--drawer': true,
    };

    return html`
      <div class="root">
        <div class="toolbar" role="toolbar" aria-label="Application toolbar">
          ${!this.navigationHide && !this.navigationTriggerHide ? html`
            <button
              type="button"
              class="toolbar__nav-trigger"
              aria-label="${this.navigationOpen ? 'Close navigation' : 'Open navigation'}"
              aria-expanded="${this.navigationOpen}"
              @click=${() => this._handleNavToggle(!this.navigationOpen)}
            >
              <cs-icon name="menu"></cs-icon>
            </button>
            <div class="toolbar__separator"></div>
          ` : nothing}

          <div class="toolbar__breadcrumbs">
            <slot name="breadcrumbs"></slot>
          </div>

          ${this.toolbarDrawers.length > 0 ? html`
            <div class="toolbar__separator"></div>
            ${this.toolbarDrawers.map(drawer => html`
              <button
                type="button"
                class="toolbar__drawer-trigger ${this.activeDrawerId === drawer.id ? 'toolbar__drawer-trigger--active' : ''}"
                aria-label="${drawer.ariaLabels?.triggerButton ?? drawer.ariaLabels?.drawerName ?? drawer.id}"
                aria-expanded="${this.activeDrawerId === drawer.id}"
                @click=${() => this._handleToggleDrawer(drawer.id)}
              >
                <cs-icon name="${drawer.trigger?.iconName ?? 'status-info'}"></cs-icon>
                ${drawer.badge ? html`<span class="toolbar__badge"></span>` : nothing}
              </button>
            `)}
          ` : nothing}

          ${!this.toolsHide ? html`
            <div class="toolbar__separator"></div>
            <button
              type="button"
              class="toolbar__tools-trigger"
              aria-label="${this.toolsOpen ? 'Close tools' : 'Open tools'}"
              aria-expanded="${this.toolsOpen}"
              @click=${() => this._handleToolsToggle(!this.toolsOpen)}
            >
              <cs-icon name="status-info"></cs-icon>
            </button>
          ` : nothing}
        </div>

        <div class="layout">
          ${!this.navigationHide ? html`
            <div
              class=${classMap(navigationClasses)}
              style="width: ${this.navigationWidth}px; ${!this.navigationOpen ? 'display: none' : ''}"
              role="navigation"
              aria-label="Navigation drawer"
            >
              <slot name="navigation"></slot>
            </div>
          ` : nothing}

          <div
            class=${classMap(layoutMainClasses)}
          >
            <div class="app-layout-notifications--notifications">
              <slot name="notifications"></slot>
            </div>
            <main
              class=${classMap(contentWrapperClasses)}
              style="${this.maxContentWidth ? `max-width: ${this.maxContentWidth}px` : ''};
                     ${this.minContentWidth ? `min-width: ${this.minContentWidth}px` : ''}"
            >
              <slot></slot>
            </main>
          </div>

          ${!this.toolsHide && this.toolsOpen ? html`
            <div
              class=${classMap(toolsClasses)}
              style="width: ${this.toolsWidth}px"
              role="complementary"
              aria-label="Tools drawer"
            >
              <slot name="tools"></slot>
            </div>
          ` : nothing}

          ${activeDrawer ? html`
            <div
              class="app-layout-drawer--drawer toolbar__drawer-panel"
              style="width: ${activeDrawerWidth}px"
              role="complementary"
              aria-label="${activeDrawer.ariaLabels?.drawerName ?? activeDrawer.id}"
            >
              <slot name="drawer-${activeDrawer.id}"></slot>
            </div>
          ` : nothing}
        </div>

        <slot name="drawers" style="display:none"></slot>
      </div>
    `;
  }
}
