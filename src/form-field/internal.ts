import { css, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { provide } from '@lit/context';
import { CsBaseElement } from '../internal/base-element.js';
import { generateUniqueId } from '../internal/hooks/use-unique-id.js';
import { formFieldContext, type FormFieldContext } from '../internal/context/form-field-context.js';
import { componentStyles, sharedStyles } from './styles.js';
import '../icon/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsFormFieldInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  label = '';

  @property({ type: String })
  description = '';

  @property({ type: String })
  constraintText = '';

  @property({ type: String })
  errorText = '';

  @property({ type: String })
  warningText = '';

  @property({ type: Boolean })
  stretch = false;

  @property({ type: String })
  controlId?: string;

  @provide({ context: formFieldContext })
  _context: FormFieldContext = {
    controlId: '',
    ariaLabelledby: '',
    ariaDescribedby: '',
    invalid: false,
    warning: false,
  };

  private _generatedId = generateUniqueId('formfield');

  private _slotRef: HTMLSlotElement | null = null;

  private get _controlId(): string {
    return this.controlId || this._generatedId;
  }

  private get _labelId(): string {
    return `${this._controlId}-label`;
  }

  private get _descriptionId(): string {
    return `${this._controlId}-description`;
  }

  private get _constraintId(): string {
    return `${this._controlId}-constraint`;
  }

  private get _errorId(): string {
    return `${this._controlId}-error`;
  }

  private get _warningId(): string {
    return `${this._controlId}-warning`;
  }

  private _buildAriaDescribedby(): string {
    const parts: string[] = [];
    if (this.description) parts.push(this._descriptionId);
    if (this.errorText) parts.push(this._errorId);
    else if (this.warningText) parts.push(this._warningId);
    if (this.constraintText) parts.push(this._constraintId);
    return parts.join(' ');
  }

  override willUpdate(): void {
    this._context = {
      controlId: this._controlId,
      ariaLabelledby: this.label ? this._labelId : '',
      ariaDescribedby: this._buildAriaDescribedby(),
      invalid: !!this.errorText,
      warning: !!this.warningText && !this.errorText,
    };
  }

  override updated(): void {
    this._configureSlottedControls();
  }

  private _onDefaultSlotChange = (): void => {
    this._configureSlottedControls();
  };

  private _configureSlottedControls(): void {
    if (!this._slotRef) {
      this._slotRef = this.renderRoot.querySelector('slot:not([name])');
    }
    if (!this._slotRef) return;

    const elements = this._slotRef.assignedElements({ flatten: true });
    for (const el of elements) {
      if (
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        el instanceof HTMLSelectElement
      ) {
        if (!el.id) el.id = this._controlId;
        if (this.label) {
          el.setAttribute('aria-label', this.label);
        }
        if (this.errorText) {
          el.setAttribute('aria-invalid', 'true');
        } else {
          el.removeAttribute('aria-invalid');
        }
      }
    }
  }

  private _renderError() {
    if (!this.errorText) return nothing;
    return html`
      <div class="error" id=${this._errorId}>
        <div class="error-icon-shake-wrapper">
          <div class="error-icon-scale-wrapper">
            <cs-icon name="status-negative" size="small"></cs-icon>
          </div>
        </div>
        <span class="error__message">${this.errorText}</span>
      </div>
    `;
  }

  private _renderWarning() {
    if (!this.warningText || this.errorText) return nothing;
    return html`
      <div class="warning" id=${this._warningId}>
        <div class="warning-icon-shake-wrapper">
          <div class="warning-icon-scale-wrapper">
            <cs-icon name="status-warning" size="small"></cs-icon>
          </div>
        </div>
        <span class="warning__message">${this.warningText}</span>
      </div>
    `;
  }

  override render() {
    const hasValidationText = !!this.errorText || !!this.warningText;
    const hasHints = !!this.constraintText || hasValidationText;

    return html`
      <div class="root">
        <div class="label-wrapper">
          ${this.label
            ? html`<label class="label" id=${this._labelId} for=${this._controlId}>${this.label}</label>`
            : nothing}
          <slot name="info"></slot>
        </div>
        ${this.description
          ? html`<div class="description" id=${this._descriptionId}>${this.description}</div>`
          : nothing}
        <div class="controls">
          <div class="control">
            <slot @slotchange=${this._onDefaultSlotChange}></slot>
          </div>
          <slot name="secondaryControl"></slot>
        </div>
        ${hasHints
          ? html`
            <div class="hints">
              ${this._renderError()}
              ${this._renderWarning()}
              ${this.constraintText
                ? html`<div class=${classMap({
                    'constraint': true,
                    'constraint-has-validation-text': hasValidationText,
                  })} id=${this._constraintId}>${this.constraintText}</div>`
                : nothing}
            </div>
          `
          : nothing}
      </div>
    `;
  }
}
