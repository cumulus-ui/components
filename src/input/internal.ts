import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { consume } from '@lit/context';
import { CsBaseElement } from '../internal/base-element.js';
import { FormControlMixin } from '../internal/mixins/form-control.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import {
  formFieldContext,
  defaultFormFieldContext,
  type FormFieldContext,
} from '../internal/context/form-field-context.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { InputProps, BaseChangeDetail } from './interfaces.js';
import '../icon/index.js';

const Base = FormControlMixin(CsBaseElement);

const hostStyles = css`:host { display: block; }`;

export class CsInputInternal extends Base {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @consume({ context: formFieldContext, subscribe: true })
  private _formFieldCtx: FormFieldContext = defaultFormFieldContext;

  @property({ type: String })
  override value = '';

  @property({ type: String })
  type: string = 'text';

  @property({ type: String })
  placeholder = '';

  @property({ type: Boolean, attribute: 'read-only' })
  readOnly = false;

  @property({ type: Boolean })
  invalid = false;

  @property({ type: Boolean })
  warning = false;

  @property({ type: Boolean, attribute: 'auto-focus' })
  autoFocus = false;

  @property({ type: String, attribute: 'input-mode' })
  override inputMode = '';

  @property({ type: Number })
  step: number | undefined;

  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  @property({ type: Boolean, attribute: 'aria-required' })
  override ariaRequired: string | null = null;

  @property({ type: String, attribute: 'aria-describedby' })
  ariaDescribedby: string | null = null;

  @property({ type: String, attribute: 'clear-aria-label' })
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
    fireNonCancelableEvent(this, 'change', detail);
  };

  private _onBlur = (): void => {
    fireNonCancelableEvent(this, 'blur', {});
  };

  private _onFocus = (): void => {
    fireNonCancelableEvent(this, 'focus', {});
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
    fireNonCancelableEvent(this, 'keydown', detail);
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
    fireNonCancelableEvent(this, 'keyup', detail);
  };

  private _onClear = (): void => {
    this.value = '';
    const detail: BaseChangeDetail = { value: this.value };
    fireNonCancelableEvent(this, 'change', detail);
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
            aria-required=${ifDefined(this.ariaRequired || undefined)}
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
