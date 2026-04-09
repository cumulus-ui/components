import { css, html, type TemplateResult } from 'lit';
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
import { inputStyles, sharedStyles } from '../input/styles.js';
import { componentStyles } from './styles.js';
import type { TimeInputProps } from './interfaces.js';

const Base = FormAssociatedMixin(CsBaseElement);

const hostStyles = css`:host { display: block; }`;

export class CsTimeInputInternal extends Base {
  static override styles = [sharedStyles, inputStyles, componentStyles, hostStyles];

  @consume({ context: formFieldContext, subscribe: true })
  private _formFieldCtx: FormFieldContext = defaultFormFieldContext;

  @property({ type: String })
  override value = '';

  @property({ type: String })
  format: string = 'hh:mm';

  @property({ type: String })
  placeholder = '';

  @property({ type: Boolean })
  readOnly = false;

  @property({ type: Boolean })
  invalid = false;

  @property({ type: Boolean })
  warning = false;

  @property({ type: Boolean })
  autoFocus = false;

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ type: String })
  ariaDescribedby: string | null = null;

  focus(options?: FocusOptions): void {
    this.shadowRoot?.querySelector<HTMLInputElement>('input')?.focus(options);
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

  private get _resolvedPlaceholder(): string {
    return this.placeholder || this.format;
  }

  private _onInput = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    const detail: TimeInputProps.ChangeDetail = { value: this.value };
    fireNonCancelableEvent(this, 'change', detail);
  };

  private _onBlur = (): void => {
    fireNonCancelableEvent(this, 'blur', {});
  };

  private _onFocus = (): void => {
    fireNonCancelableEvent(this, 'focus', {});
  };

  override render(): TemplateResult {
    const inputClasses = {
      'input': true,
      'input-readonly': this.readOnly,
      'input-invalid': this._isInvalid,
      'input-warning': this._isWarning,
    };

    const controlId = this._formFieldCtx.controlId || undefined;
    const ariaLabelledby = this._formFieldCtx.ariaLabelledby || undefined;

    return html`
      <div class="root">
        <div class="input-container">
          <input
            class=${classMap(inputClasses)}
            type="text"
            .value=${this.value}
            placeholder=${this._resolvedPlaceholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readOnly}
            ?autofocus=${this.autoFocus}
            id=${ifDefined(controlId)}
            aria-label=${ifDefined(this.ariaLabel || undefined)}
            aria-labelledby=${ifDefined(!this.ariaLabel ? ariaLabelledby : undefined)}
            aria-describedby=${ifDefined(this._resolvedAriaDescribedby)}
            aria-invalid=${ifDefined(this._isInvalid ? 'true' : undefined)}
            @input=${this._onInput}
            @blur=${this._onBlur}
            @focus=${this._onFocus}
          />
        </div>
      </div>
    `;
  }
}
