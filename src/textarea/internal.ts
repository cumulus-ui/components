import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { consume } from '@lit/context';
import { CsBaseElement } from '../internal/base-element.js';
import { FormControlMixin } from '../internal/mixins/form-associated.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import {
  formFieldContext,
  defaultFormFieldContext,
  type FormFieldContext,
} from '../internal/context/form-field-context.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { TextareaProps } from './interfaces.js';

const Base = FormControlMixin(CsBaseElement);

const hostStyles = css`:host { display: block; }`;

export class CsTextareaInternal extends Base {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @consume({ context: formFieldContext, subscribe: true })
  private _formFieldCtx: FormFieldContext = defaultFormFieldContext;

  @property({ type: String })
  override value = '';

  @property({ type: String })
  placeholder = '';

  @property({ type: Boolean, attribute: 'read-only' })
  readOnly = false;

  @property({ type: Boolean })
  invalid = false;

  @property({ type: Boolean })
  warning = false;

  @property({ type: Number })
  rows = 3;

  @property({ type: Boolean, attribute: 'auto-focus' })
  autoFocus = false;

  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  @property({ type: String, attribute: 'aria-describedby' })
  ariaDescribedby: string | null = null;

  focus(options?: FocusOptions): void {
    this._getTextarea()?.focus(options);
  }

  private _getTextarea(): HTMLTextAreaElement | null | undefined {
    return this.shadowRoot?.querySelector<HTMLTextAreaElement>('textarea');
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

  private _onInput = (e: Event): void => {
    const target = e.target as HTMLTextAreaElement;
    this.value = target.value;
    const detail: TextareaProps.ChangeDetail = { value: this.value };
    fireNonCancelableEvent(this, 'change', detail);
  };

  private _onBlur = (): void => {
    fireNonCancelableEvent(this, 'blur', {});
  };

  private _onFocus = (): void => {
    fireNonCancelableEvent(this, 'focus', {});
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    const detail: TextareaProps.KeyDetail = {
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
    const detail: TextareaProps.KeyDetail = {
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

  override render(): TemplateResult {
    const textareaClasses = {
      'textarea': true,
      'textarea-readonly': this.readOnly,
      'textarea-invalid': this._isInvalid,
      'textarea-warning': this._isWarning,
    };

    const controlId = this._formFieldCtx.controlId || undefined;
    const ariaLabelledby = this._formFieldCtx.ariaLabelledby || undefined;

    return html`
      <div class="root">
        <textarea
          class=${classMap(textareaClasses)}
          .value=${this.value}
          placeholder=${ifDefined(this.placeholder || undefined)}
          rows=${this.rows}
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
          @keydown=${this._onKeyDown}
          @keyup=${this._onKeyUp}
        ></textarea>
      </div>
    `;
  }
}
