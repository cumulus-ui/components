import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { consume } from '@lit/context';
import { CsBaseElement } from '../internal/base-element.js';
import { FormAssociatedMixin } from '../internal/mixins/form-associated.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import {
  formFieldContext,
  defaultFormFieldContext,
  type FormFieldContext,
} from '../internal/context/form-field-context.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { InputProps, BaseChangeDetail } from './interfaces.js';
import '../icon/index.js';

const Base = FormAssociatedMixin(CsBaseElement);

const hostStyles = css`:host { display: block; }`;

export class CsInputInternal extends Base {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @consume({ context: formFieldContext, subscribe: true })
  private _formFieldCtx: FormFieldContext = defaultFormFieldContext;

  @property({ type: String })
  override value = '';

  @property({ type: String, reflect: true })
  type: string = 'text';

  @property({ type: String })
  placeholder = '';

  @property({ type: Boolean, reflect: true })
  readOnly = false;

  @property({ type: Boolean, reflect: true })
  invalid = false;

  @property({ type: Boolean, reflect: true })
  warning = false;

  @property({ type: Boolean })
  autoFocus = false;

  @property({ type: String })
  override inputMode = '';

  @property({ type: Number })
  step: number | undefined;

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ type: String })
  ariaDescribedby: string | null = null;

  @property({ type: String })
  clearAriaLabel = '';

  focus(options?: FocusOptions): void {
    this._getInput()?.focus(options);
  }

  select(): void {
    this._getInput()?.select();
  }

  private _getInput(): HTMLInputElement | null | undefined {
    return this.shadowRoot?.querySelector<HTMLInputElement>('input');
  }

  private get _isInvalid(): boolean {
    return this.invalid || this._formFieldCtx.invalid;
  }

  private get _isWarning(): boolean {
    return (this.warning || this._formFieldCtx.warning) && !this._isInvalid;
  }

  private get _resolvedAriaDescribedby(): string | undefined {
    const parts: string[] = [];
    if (this.ariaDescribedby) parts.push(this.ariaDescribedby);
    if (this._formFieldCtx.ariaDescribedby) parts.push(this._formFieldCtx.ariaDescribedby);
    return parts.length ? parts.join(' ') : undefined;
  }

  private get _showClearButton(): boolean {
    return !!this.clearAriaLabel && this.value.length > 0 && !this.disabled && !this.readOnly;
  }

  private _onInput = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    const detail: BaseChangeDetail = { value: this.value };
    fireNonCancelableEvent(this as unknown as HTMLElement, 'change', detail);
  };

  private _onBlur = (): void => {
    fireNonCancelableEvent(this as unknown as HTMLElement, 'blur', null);
  };

  private _onFocus = (): void => {
    fireNonCancelableEvent(this as unknown as HTMLElement, 'focus', null);
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    const detail: InputProps.KeyDetail = {
      keyCode: e.keyCode,
      key: e.key,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      altKey: e.altKey,
      metaKey: e.metaKey,
      isComposing: e.isComposing,
    };
    fireNonCancelableEvent(this as unknown as HTMLElement, 'keydown', detail);
  };

  private _onKeyUp = (e: KeyboardEvent): void => {
    const detail: InputProps.KeyDetail = {
      keyCode: e.keyCode,
      key: e.key,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      altKey: e.altKey,
      metaKey: e.metaKey,
      isComposing: e.isComposing,
    };
    fireNonCancelableEvent(this as unknown as HTMLElement, 'keyup', detail);
  };

  private _onClear = (): void => {
    this.value = '';
    const detail: BaseChangeDetail = { value: '' };
    fireNonCancelableEvent(this as unknown as HTMLElement, 'change', detail);
    this.focus();
  };

  override render(): TemplateResult {
    const inputClasses = {
      'input': true,
      'input-readonly': this.readOnly,
      'input-invalid': this._isInvalid,
      'input-warning': this._isWarning,
      'input-disabled': this.disabled,
      'input-has-clear-button': this._showClearButton,
      [`input-type-${this.type}`]: true,
    };

    const inputContainerClasses = {
      'input-container': true,
      'input-invalid': this._isInvalid,
      'input-warning': this._isWarning,
      'input-readonly': this.readOnly,
      [`input-type-${this.type}`]: true,
    };

    const controlId = this._formFieldCtx.controlId || undefined;
    const ariaLabelledby = this._formFieldCtx.ariaLabelledby || undefined;

    return html`
      <div class="root">
        <div class=${classMap(inputContainerClasses)}>
          <input
            class=${classMap(inputClasses)}
            type=${this.type}
            .value=${this.value}
            placeholder=${ifDefined(this.placeholder || undefined)}
            ?disabled=${this.disabled}
            ?readonly=${this.readOnly}
            ?autofocus=${this.autoFocus}
            inputmode=${ifDefined(this.inputMode || undefined)}
            step=${ifDefined(this.step)}
            id=${ifDefined(controlId)}
            aria-label=${ifDefined(this.ariaLabel || undefined)}
            aria-labelledby=${ifDefined(!this.ariaLabel ? ariaLabelledby : undefined)}
            aria-describedby=${ifDefined(this._resolvedAriaDescribedby)}
            aria-invalid=${ifDefined(this._isInvalid ? 'true' : undefined)}
            @input=${this._onInput}
            @blur=${this._onBlur}
            @focus=${this._onFocus}
            @keydown=${this._onKeyDown}
            @keyup=${this._onKeyUp}
          />
          ${this._showClearButton ? html`
            <span class="input-icon-right">
              <button
                type="button"
                aria-label=${this.clearAriaLabel}
                @click=${this._onClear}
              >
                <cs-icon name="close" size="small"></cs-icon>
              </button>
            </span>
          ` : nothing}
        </div>
      </div>
    `;
  }
}
