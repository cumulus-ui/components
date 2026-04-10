import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { FormProps } from './interfaces.js';
import '../alert/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsFormInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  header = '';

  @property({ type: String, attribute: 'error-text' })
  errorText = '';

  @property({ type: String, attribute: 'error-icon-aria-label' })
  errorIconAriaLabel = '';

  @property({ type: String })
  variant: FormProps['variant'] = 'embedded';

  private _hasActions = false;
  private _hasSecondaryActions = false;

  private _onActionsSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasActions = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _onSecondaryActionsSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasSecondaryActions = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  override render(): TemplateResult {
    const hasError = !!this.errorText;
    const hasFooter = this._hasActions || this._hasSecondaryActions;

    return html`
      <div class="root">
        ${this.header
          ? html`<div class="header"><slot name="header">${this.header}</slot></div>`
          : html`<slot name="header"></slot>`}

        <div class="content">
          ${hasError
            ? html`
              <cs-alert
                type="error"
                status-icon-aria-label=${this.errorIconAriaLabel || 'Error'}
              >${this.errorText}</cs-alert>
            `
            : nothing}
          <slot></slot>
        </div>

        ${hasFooter
          ? html`
            <div class="footer">
              <div class="actions-section">
                <div class="actions">
                  <slot name="actions" @slotchange=${this._onActionsSlotChange}></slot>
                </div>
                <div class="secondary-actions">
                  <slot name="secondaryActions" @slotchange=${this._onSecondaryActionsSlotChange}></slot>
                </div>
              </div>
            </div>
          `
          : html`
            <slot name="actions" @slotchange=${this._onActionsSlotChange} style="display:none"></slot>
            <slot name="secondaryActions" @slotchange=${this._onSecondaryActionsSlotChange} style="display:none"></slot>
          `}
      </div>
    `;
  }
}
