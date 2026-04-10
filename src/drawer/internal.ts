import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';

const hostStyles = css`:host { display: block; }`;

export class CsDrawerInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: Boolean })
  loading = false;

  @property({ type: Boolean, attribute: 'disable-content-paddings' })
  disableContentPaddings = false;

  private _hasHeader = false;
  private _hasFooter = false;
  private _hasHeaderActions = false;

  private _onHeaderSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasHeader = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _onFooterSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasFooter = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _onHeaderActionsSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasHeaderActions = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  override render(): TemplateResult {
    const drawerClasses = {
      'drawer': true,
      'with-footer': this._hasFooter,
    };

    const headerClasses = {
      'header': true,
    };

    const contentClasses = {
      'content': true,
      'content-with-paddings': !this.disableContentPaddings,
    };

    const footerClasses = {
      'footer': true,
    };

    return html`
      <div class=${classMap(drawerClasses)} role="region">
        ${this._hasHeader || this.loading
          ? html`
            <div class=${classMap(headerClasses)}>
              <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
              ${this._hasHeaderActions
                ? html`<div class="header-actions"><slot name="headerActions" @slotchange=${this._onHeaderActionsSlotChange}></slot></div>`
                : html`<slot name="headerActions" @slotchange=${this._onHeaderActionsSlotChange} style="display:none"></slot>`
              }
            </div>
          `
          : html`
            <slot name="header" @slotchange=${this._onHeaderSlotChange} style="display:none"></slot>
            <slot name="headerActions" @slotchange=${this._onHeaderActionsSlotChange} style="display:none"></slot>
          `
        }
        <div class=${classMap(contentClasses)}>
          ${this.loading
            ? html`<cs-spinner size="large"></cs-spinner>`
            : html`<slot></slot>`
          }
        </div>
        ${this._hasFooter
          ? html`<div class=${classMap(footerClasses)}><slot name="footer" @slotchange=${this._onFooterSlotChange}></slot></div>`
          : html`<slot name="footer" @slotchange=${this._onFooterSlotChange} style="display:none"></slot>`
        }
      </div>
    `;
  }
}
