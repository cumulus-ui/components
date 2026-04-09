import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { FlashbarProps } from './interfaces.js';
import '../icon/index.js';
import '../button/index.js';

const hostStyles = css`:host { display: block; }`;

const iconNameMap: Record<string, string> = {
  info: 'status-info',
  success: 'status-positive',
  warning: 'status-warning',
  error: 'status-negative',
  'in-progress': 'status-in-progress',
};

export class CsFlashbarInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ attribute: false })
  items: ReadonlyArray<FlashbarProps.MessageDefinition> = [];

  @property({ type: String })
  ariaLabel = '';

  private _onDismiss(index: number): void {
    const item = this.items[index];
    if (item?.onDismiss) {
      (item.onDismiss as (event: CustomEvent) => void)(new CustomEvent('dismiss'));
    }
    fireNonCancelableEvent(this, 'dismiss', { index, item });
  }

  private _onButtonClick(index: number): void {
    const item = this.items[index];
    if (item?.onButtonClick) {
      (item.onButtonClick as (event: CustomEvent) => void)(new CustomEvent('click'));
    }
  }

  private _renderFlashItem(item: FlashbarProps.MessageDefinition, index: number): TemplateResult {
    const type = item.loading ? 'info' : (item.type || 'info');
    const iconName = item.loading ? 'status-in-progress' : iconNameMap[type] || 'status-info';
    const role = item.ariaRole || 'status';

    const flashClasses = {
      'flash': true,
      [`flash-type-${type}`]: true,
    };

    return html`
      <li class="flash-list-item">
        <div class=${classMap(flashClasses)} role=${role}>
          <div class="flash-icon">
            <cs-icon
              name=${iconName}
              aria-label=${ifDefined(item.statusIconAriaLabel || undefined)}
            ></cs-icon>
          </div>
          <div class="flash-body">
            <div class="flash-focus-container" tabindex="-1">
              <div class="flash-message">
                ${item.header
                  ? html`<div class="flash-header">${item.header}</div>`
                  : nothing}
                ${item.content
                  ? html`<div class="flash-content"><span class="flash-text">${item.content}</span></div>`
                  : nothing}
              </div>
            </div>
            ${item.buttonText
              ? html`<div class="action-button-wrapper">
                  <cs-button variant="link" @click=${() => this._onButtonClick(index)}>${item.buttonText}</cs-button>
                </div>`
              : nothing}
          </div>
          ${item.dismissible
            ? html`<div class="dismiss-button-wrapper">
                <cs-button
                  class="dismiss-button"
                  variant="icon"
                  icon-name="close"
                  aria-label=${ifDefined(item.dismissLabel || 'Dismiss')}
                  @click=${() => this._onDismiss(index)}
                ></cs-button>
              </div>`
            : nothing}
        </div>
      </li>
    `;
  }

  override render(): TemplateResult {
    return html`
      <div class="flashbar" aria-label=${ifDefined(this.ariaLabel || 'Notifications')}>
        <ul class="flash-list">
          ${this.items.map((item, i) => this._renderFlashItem(item, i))}
        </ul>
      </div>
    `;
  }
}
