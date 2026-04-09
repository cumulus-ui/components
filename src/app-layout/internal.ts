import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import { appLayoutContentWrapperStyles } from '../internal/styles/app-layout-content-wrapper.js';
import { appLayoutDrawerStyles } from '../internal/styles/app-layout-drawer.js';
import { appLayoutMobileToolbarStyles } from '../internal/styles/app-layout-mobile-toolbar.js';
import { appLayoutNotificationsStyles } from '../internal/styles/app-layout-notifications.js';
import { appLayoutResizeStyles } from '../internal/styles/app-layout-resize.js';
import { appLayoutRuntimeDrawerStyles } from '../internal/styles/app-layout-runtime-drawer.js';
import { appLayoutSplitPanelStyles } from '../internal/styles/app-layout-split-panel.js';
import { appLayoutTogglesStyles } from '../internal/styles/app-layout-toggles.js';
import { appLayoutVisualRefreshStyles } from '../internal/styles/app-layout-visual-refresh.js';

import type { AppLayoutProps } from './interfaces.js';

const hostStyles = css`
  :host {
    display: block;
    min-height: 100vh;
  }
`;

export class CsAppLayoutInternal extends CsBaseElement {
  static override styles = [
    sharedStyles,
    componentStyles,
    appLayoutContentWrapperStyles,
    appLayoutDrawerStyles,
    appLayoutMobileToolbarStyles,
    appLayoutNotificationsStyles,
    appLayoutResizeStyles,
    appLayoutRuntimeDrawerStyles,
    appLayoutSplitPanelStyles,
    appLayoutTogglesStyles,
    appLayoutVisualRefreshStyles,
    hostStyles,
  ];

  @property({ type: Boolean, reflect: true })
  navigationOpen = false;

  @property({ type: Number })
  navigationWidth = 280;

  @property({ type: Boolean, reflect: true })
  navigationHide = false;

  @property({ type: Boolean, reflect: true })
  toolsOpen = false;

  @property({ type: Number })
  toolsWidth = 290;

  @property({ type: Boolean, reflect: true })
  toolsHide = false;

  @property({ type: String })
  contentType: AppLayoutProps.ContentType = 'default';

  @property({ type: String })
  headerSelector = '';

  @property({ type: String })
  footerSelector = '';

  @property({ type: Number })
  maxContentWidth = 0;

  @property({ type: Number })
  minContentWidth = 280;

  @property({ type: Boolean, reflect: true })
  disableContentPaddings = false;

  private _toggleNav(open: boolean): void {
    this.navigationOpen = open;
    fireNonCancelableEvent<AppLayoutProps.ChangeDetail>(this, 'navigationChange', { open });
  }

  private _toggleTools(open: boolean): void {
    this.toolsOpen = open;
    fireNonCancelableEvent<AppLayoutProps.ChangeDetail>(this, 'toolsChange', { open });
  }

  override render(): TemplateResult {
    const rootClasses = {
      'root': true,
    };

    const layoutClasses = {
      'layout': true,
    };

    const layoutMainClasses = {
      'layout-main': true,
      'layout-main-scrollable': true,
    };

    const contentWrapperClasses = {
      'content-wrapper': true,
      'app-layout-content-wrapper--content-wrapper': !this.disableContentPaddings,
    };

    const breadcrumbsClasses = {
      'breadcrumbs-desktop': true,
    };

    const navigationClasses = {
      'app-layout-drawer--drawer': true,
    };

    const toolsClasses = {
      'app-layout-drawer--drawer': true,
    };

    return html`
      <div class=${classMap(rootClasses)}>
        <div class=${classMap(layoutClasses)}>

          ${!this.navigationHide ? html`
            <div
              class=${classMap(navigationClasses)}
              style=${styleMap({ width: this.navigationWidth + 'px', ...(this.navigationOpen ? {} : { display: 'none' }) })}
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
            <div class=${classMap(breadcrumbsClasses)}>
              <slot name="breadcrumbs"></slot>
            </div>
            <main
              class=${classMap(contentWrapperClasses)}
              style=${styleMap({ ...(this.maxContentWidth ? { 'max-width': this.maxContentWidth + 'px' } : {}), ...(this.minContentWidth ? { 'min-width': this.minContentWidth + 'px' } : {}) })}
            >
              <slot></slot>
            </main>
          </div>

          ${!this.toolsHide ? html`
            <div
              class=${classMap(toolsClasses)}
              style=${styleMap({ width: this.toolsWidth + 'px', ...(this.toolsOpen ? {} : { display: 'none' }) })}
              role="complementary"
              aria-label="Tools drawer"
            >
              <slot name="tools"></slot>
            </div>
          ` : nothing}
        </div>

        ${!this.navigationHide && !this.navigationOpen ? html`
          <button
            type="button"
            class="app-layout-toggles--toggle-button"
            aria-label="Open navigation"
            @click=${() => this._toggleNav(true)}
          >
            <cs-icon name="menu"></cs-icon>
          </button>
        ` : nothing}

        ${!this.navigationHide && this.navigationOpen ? html`
          <button
            type="button"
            class="app-layout-toggles--toggle-button app-layout-toggles--close-button"
            aria-label="Close navigation"
            @click=${() => this._toggleNav(false)}
          >
            <cs-icon name="close"></cs-icon>
          </button>
        ` : nothing}

        ${!this.toolsHide && !this.toolsOpen ? html`
          <button
            type="button"
            class="app-layout-toggles--toggle-button"
            aria-label="Open tools"
            @click=${() => this._toggleTools(true)}
          >
            <cs-icon name="status-info"></cs-icon>
          </button>
        ` : nothing}

        ${!this.toolsHide && this.toolsOpen ? html`
          <button
            type="button"
            class="app-layout-toggles--toggle-button app-layout-toggles--close-button"
            aria-label="Close tools"
            @click=${() => this._toggleTools(false)}
          >
            <cs-icon name="close"></cs-icon>
          </button>
        ` : nothing}

        <slot name="drawers" style="display:none"></slot>
      </div>
    `;
  }
}
