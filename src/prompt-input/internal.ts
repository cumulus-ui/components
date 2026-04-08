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

  @property({ type: String })
  actionButtonAriaLabel = 'Submit';

  @property({ type: String })
  actionButtonIconName = 'send';

  @property({ type: Boolean })
  disableActionButton = false;

  @property({ type: String })
  override ariaLabel: string | null = null;

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
    };

    const textareaClasses = {
      'textarea': true,
      'textarea-readonly': this.readOnly,
    };

    return html`
      <div class=${classMap(rootClasses)}>
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
