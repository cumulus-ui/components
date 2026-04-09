import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { TokenProps } from './interfaces.js';
import '../icon/index.js';

const hostStyles = css`:host { display: inline-block; }`;

const inventedStyles = css`
  .label-tag {
    display: inline-block;
    margin-inline-start: var(--space-xxs, 4px);
    font-size: var(--font-body-s-size, 12px);
    color: var(--color-text-body-secondary, #5f6b7a);
  }
  .description {
    font-size: var(--font-body-s-size, 12px);
    color: var(--color-text-body-secondary, #5f6b7a);
  }
`;

export class CsTokenInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles, inventedStyles];

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ type: String })
  labelTag = '';

  @property({ type: String })
  description = '';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  readOnly = false;

  @property({ type: Boolean, reflect: true })
  dismissible = false;

  @property({ type: String })
  dismissLabel = 'Remove';

  @property({ type: String, reflect: true })
  variant: TokenProps.Variant = 'normal';

  private _onDismiss = (): void => {
    if (this.disabled || this.readOnly) return;
    fireNonCancelableEvent(this as unknown as HTMLElement, 'dismiss', {});
  };

  override render(): TemplateResult {
    const isInline = this.variant === 'inline';
    const showDismiss = this.dismissible && !this.disabled && !this.readOnly;

    const boxClasses = {
      'token-box': !isInline,
      'token-box-inline': isInline,
      'token-box-disabled': this.disabled,
      'token-box-readonly': this.readOnly,
      'token-box-without-dismiss': !showDismiss && !isInline,
    };

    const tokenClasses = {
      'token-normal': !isInline,
      'token-inline': isInline,
    };

    const ariaDisabled = this.disabled ? 'true' : undefined;

    if (isInline) {
      return html`
        <div class=${classMap({ root: true })}>
          <div
            class=${classMap(boxClasses)}
            role="group"
            aria-label=${ifDefined(this.ariaLabel || undefined)}
            aria-disabled=${ifDefined(ariaDisabled)}
          >
            <slot name="icon"></slot>
            <span class="token-option-inline">
              <slot></slot>
            </span>
            ${showDismiss
              ? html`
                <button
                  class="dismiss-button dismiss-button-inline"
                  type="button"
                  aria-label=${this.dismissLabel}
                  @click=${this._onDismiss}
                >
                  <cs-icon name="close" size="small"></cs-icon>
                </button>
              `
              : nothing}
          </div>
        </div>
      `;
    }

    return html`
      <div class=${classMap({ root: true })}>
        <div
          class=${classMap(boxClasses)}
          role="group"
          aria-label=${ifDefined(this.ariaLabel || undefined)}
          aria-disabled=${ifDefined(ariaDisabled)}
        >
          <slot name="icon"></slot>
          <div class=${classMap(tokenClasses)}>
            <div>
              <slot></slot>
              ${this.labelTag
                ? html`<span class="label-tag"> ${this.labelTag}</span>`
                : nothing}
            </div>
            ${this.description
              ? html`<div class="description">${this.description}</div>`
              : nothing}
          </div>
          ${showDismiss
            ? html`
              <button
                class="dismiss-button"
                type="button"
                aria-label=${this.dismissLabel}
                @click=${this._onDismiss}
              >
                <cs-icon name="close" size="small"></cs-icon>
              </button>
            `
            : nothing}
        </div>
      </div>
    `;
  }
}
