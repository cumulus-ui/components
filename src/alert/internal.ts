import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import { alertActionsWrapperStyles } from '../internal/styles/alert-actions-wrapper.js';
import type { AlertProps } from './interfaces.js';
import '../icon/index.js';
import '../button/index.js';

const hostStyles = css`:host { display: block; }`;

const iconNameMap: Record<AlertProps.Type, string> = {
  info: 'status-info',
  success: 'status-positive',
  warning: 'status-warning',
  error: 'status-negative',
};

export class CsAlertInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, alertActionsWrapperStyles, hostStyles];

  @property({ type: String, reflect: true })
  type: AlertProps.Type = 'info';

  @property({ type: Boolean, reflect: true })
  visible = true;

  @property({ type: Boolean, reflect: true })
  dismissible = false;

  @property({ type: String })
  dismissAriaLabel = '';

  @property({ type: String })
  header = '';

  @property({ type: String })
  statusIconAriaLabel = '';

  focus(options?: FocusOptions): void {
    const wrapper = this.shadowRoot?.querySelector<HTMLElement>('.alert-focus-wrapper');
    wrapper?.focus(options);
  }

  private _onDismiss = (): void => {
    fireNonCancelableEvent(this, 'dismiss', {});
  };

  override render(): TemplateResult {
    const iconName = iconNameMap[this.type];

    const rootClasses = {
      'root': true,
      'hidden': !this.visible,
    };

    const alertClasses = {
      'alert': true,
      [`type-${this.type}`]: true,
      'icon-size-normal': true,
    };

    return html`
      <div class=${classMap(rootClasses)}>
        <div class=${classMap(alertClasses)} role="alert">
          <div class="alert-wrapper">
            <div class="alert-focus-wrapper" tabindex="-1">
              <div class="text icon">
                <cs-icon
                  name=${iconName}
                  aria-label=${ifDefined(this.statusIconAriaLabel || undefined)}
                ></cs-icon>
              </div>
              <div class="text message">
                ${this.header
                  ? html`<div class="header">${this.header}</div>`
                  : nothing}
                <div class="content">
                  <slot></slot>
                </div>
              </div>
            </div>
            <div class="action">
              <div class="alert-actions-wrapper--root">
                <slot name="action"></slot>
              </div>
            </div>
            ${this.dismissible
              ? html`
                <div class="dismiss">
                  <cs-button
                    variant="icon"
                    icon-name="close"
                    aria-label=${ifDefined(this.dismissAriaLabel || 'Dismiss')}
                    @click=${this._onDismiss}
                  ></cs-button>
                </div>
              `
              : nothing}
          </div>
        </div>
      </div>
    `;
  }
}
