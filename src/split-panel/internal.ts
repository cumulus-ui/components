import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { SplitPanelProps } from './interfaces.js';
import '../icon/index.js';
import '../button/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsSplitPanelInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  header = '';

  @property({ type: Boolean, reflect: true })
  hidePreferencesButton = false;

  @property({ type: String, reflect: true })
  closeBehavior: 'collapse' | 'hide' = 'collapse';

  @property({ type: Number })
  size = 250;

  @property({ type: String, attribute: 'panel-aria-label' })
  panelAriaLabel = '';

  @property({ type: Object })
  i18nStrings?: SplitPanelProps.I18nStrings;

  @state()
  private _isOpen = true;

  @state()
  private _position: 'bottom' | 'side' = 'bottom';

  private _onClose = (): void => {
    this._isOpen = false;
    this.requestUpdate();
  };

  private _onOpen = (): void => {
    this._isOpen = true;
    this.requestUpdate();
  };

  private _onPreferencesClick = (): void => {
    const newPosition = this._position === 'bottom' ? 'side' : 'bottom';
    this._position = newPosition;
    fireNonCancelableEvent(this as unknown as HTMLElement, 'preferencesChange', { position: newPosition });
  };

  private get _regionLabel(): string {
    return this.panelAriaLabel || this.header;
  }

  override render(): TemplateResult {
    const closeLabel = this.i18nStrings?.closeButtonAriaLabel ?? 'Close';
    const openLabel = this.i18nStrings?.openButtonAriaLabel ?? 'Open';

    if (!this._isOpen && this.closeBehavior === 'hide') {
      return html``;
    }

    const isBottom = this._position === 'bottom';

    const drawerClasses = {
      'drawer': true,
      'drawer-closed': !this._isOpen,
      'position-bottom': isBottom,
      'position-side': !isBottom,
      'refresh': true,
    };

    const headerClasses = {
      'header': true,
    };

    const contentBottomClasses = {
      'content-bottom': true,
    };

    const contentSideClasses = {
      'content-side': true,
    };

    const paneHeaderBottomClasses = {
      'pane-header-wrapper-bottom': true,
    };

    const paneHeaderSideClasses = {
      'pane-header-wrapper-side': true,
    };

    if (!this._isOpen) {
      return html`
        <div class=${classMap(drawerClasses)}
             role="region"
             aria-label=${this._regionLabel}>
          ${isBottom
            ? html`
              <div class="drawer-content-bottom">
                <div class=${classMap(paneHeaderBottomClasses)}>
                  <div class=${classMap(headerClasses)}>
                    <div class="header-main-row">
                      <div class="header-main-content">
                        <div class="header-text">${this.header}</div>
                      </div>
                      <div class="header-buttons">
                        <cs-button
                          variant="icon"
                          icon-name="angle-up"
                          aria-label=${openLabel}
                          @click=${this._onOpen}
                        ></cs-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `
            : html`
              <div class="drawer-content-side">
                <cs-button
                  class="open-button-side"
                  variant="icon"
                  icon-name="angle-left"
                  aria-label=${openLabel}
                  @click=${this._onOpen}
                ></cs-button>
              </div>
            `
          }
        </div>
      `;
    }

    return html`
      <div class=${classMap(drawerClasses)}
           role="region"
           aria-label=${this._regionLabel}
           style="block-size: ${this.size}px;">
        ${isBottom
          ? html`
            <div class="drawer-content-bottom">
              <div class=${classMap(paneHeaderBottomClasses)}>
                <div class=${classMap(headerClasses)}>
                  <div class="header-main-row">
                    <div class="header-main-content">
                      <div class="header-text">${this.header}</div>
                    </div>
                    <div class="header-buttons">
                      ${!this.hidePreferencesButton
                        ? html`
                          <cs-button
                            variant="icon"
                            icon-name="resize-area"
                            aria-label="Preferences"
                            @click=${this._onPreferencesClick}
                          ></cs-button>
                          <div class="divider"></div>
                        `
                        : nothing
                      }
                      <cs-button
                        variant="icon"
                        icon-name="angle-down"
                        aria-label=${closeLabel}
                        @click=${this._onClose}
                      ></cs-button>
                    </div>
                  </div>
                </div>
              </div>
              <div class=${classMap(contentBottomClasses)}>
                <slot></slot>
              </div>
            </div>
          `
          : html`
            <div class="drawer-content-side">
              <div class=${classMap(contentSideClasses)}>
                <div class=${classMap(paneHeaderSideClasses)}>
                  <div class=${classMap(headerClasses)}>
                    <div class="header-main-row">
                      <div class="header-main-content">
                        <div class="header-text">${this.header}</div>
                      </div>
                      <div class="header-buttons">
                        ${!this.hidePreferencesButton
                          ? html`
                            <cs-button
                              variant="icon"
                              icon-name="resize-area"
                              aria-label="Preferences"
                              @click=${this._onPreferencesClick}
                            ></cs-button>
                            <div class="divider"></div>
                          `
                          : nothing
                        }
                        <cs-button
                          variant="icon"
                          icon-name="close"
                          aria-label=${closeLabel}
                          @click=${this._onClose}
                        ></cs-button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pane-content-wrapper-side">
                  <slot></slot>
                </div>
              </div>
            </div>
          `
        }
      </div>
    `;
  }
}
