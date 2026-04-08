import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import '../button/index.js';
import '../icon/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsPromptInputInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  value = '';

  @property({ type: String })
  placeholder = '';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  readOnly = false;

  @property({ type: Boolean, reflect: true })
  invalid = false;

  @property({ type: Boolean, reflect: true })
  warning = false;

  @property({ type: String })
  actionButtonAriaLabel = 'Submit';

  @property({ type: String })
  actionButtonIconName = 'send';

  @property({ type: Boolean })
  disableActionButton = false;

  @property({ type: String })
  override ariaLabel: string | null = null;

  private _hasSecondaryContent = false;
  private _hasSecondaryActions = false;

  private _onSecondaryContentSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasSecondaryContent = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _onSecondaryActionsSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasSecondaryActions = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  focus(options?: FocusOptions): void {
    const textarea = this.shadowRoot?.querySelector<HTMLTextAreaElement>('.textarea');
    textarea?.focus(options);
  }

  private _onTextareaInput = (e: Event): void => {
    const textarea = e.target as HTMLTextAreaElement;
    this.value = textarea.value;
    fireNonCancelableEvent(this as unknown as HTMLElement, 'change', { value: this.value });
  };

  private _onTextareaKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      this._fireAction();
    }
  };

  private _onActionClick = (): void => {
    this._fireAction();
  };

  private _fireAction(): void {
    if (this.disabled || this.readOnly || this.disableActionButton) return;
    fireNonCancelableEvent(this as unknown as HTMLElement, 'action', { value: this.value });
  }

  override render(): TemplateResult {
    const rootClasses = {
      'root': true,
      'disabled': this.disabled,
      'textarea-readonly': this.readOnly,
      'textarea-invalid': this.invalid,
      'textarea-warning': this.warning && !this.invalid,
    };

    const textareaClasses = {
      'textarea': true,
      'textarea-readonly': this.readOnly,
      'textarea-invalid': this.invalid,
      'textarea-warning': this.warning && !this.invalid,
    };

    return html`
      <div class=${classMap(rootClasses)}>
        ${this._hasSecondaryContent
          ? html`<div class="secondary-content"><slot name="secondary-content" @slotchange=${this._onSecondaryContentSlotChange}></slot></div>`
          : html`<slot name="secondary-content" @slotchange=${this._onSecondaryContentSlotChange} style="display:none"></slot>`}
        <div class="textarea-wrapper">
          <textarea
            class=${classMap(textareaClasses)}
            .value=${this.value}
            placeholder=${ifDefined(this.placeholder || undefined)}
            ?disabled=${this.disabled}
            ?readonly=${this.readOnly}
            aria-label=${ifDefined(this.ariaLabel || undefined)}
            rows="1"
            @input=${this._onTextareaInput}
            @keydown=${this._onTextareaKeyDown}
          ></textarea>
          ${this._hasSecondaryActions
            ? html`<span class="secondary-actions"><slot name="secondary-actions" @slotchange=${this._onSecondaryActionsSlotChange}></slot></span>`
            : html`<slot name="secondary-actions" @slotchange=${this._onSecondaryActionsSlotChange} style="display:none"></slot>`}
          <span class="primary-action">
            <cs-button
              class="action-button"
              variant="icon"
              icon-name=${this.actionButtonIconName}
              aria-label=${this.actionButtonAriaLabel}
              ?disabled=${this.disabled || this.disableActionButton}
              @click=${this._onActionClick}
            ></cs-button>
          </span>
        </div>
      </div>
    `;
  }
}
