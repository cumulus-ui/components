import { css, html, type TemplateResult, type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { FormAssociatedMixin } from '../internal/mixins/form-associated.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { consume } from '@lit/context';
import {
  formFieldContext,
  defaultFormFieldContext,
  type FormFieldContext,
} from '../internal/context/form-field-context.js';
import { generateUniqueId } from '../internal/hooks/use-unique-id.js';
import { componentStyles, sharedStyles } from './styles.js';
import { abstractSwitchStyles } from '../internal/styles/abstract-switch.js';
import type { ToggleProps } from './interfaces.js';

const Base = FormAssociatedMixin(CsBaseElement);

const hostStyles = css`:host { display: block; }`;

export class CsToggleInternal extends Base {
  static override styles = [sharedStyles, componentStyles, abstractSwitchStyles, hostStyles];

  @consume({ context: formFieldContext, subscribe: true })
  private _formFieldCtx: FormFieldContext = defaultFormFieldContext;

  @property({ type: Boolean })
  checked = false;

  @property({ type: Boolean })
  readOnly = false;

  @property({ type: String })
  description = '';

  @property({ type: String })
  override ariaLabel: string | null = null;

  private readonly _labelId = generateUniqueId('toggle-label');
  private readonly _descriptionId = generateUniqueId('toggle-desc');

  private get _resolvedAriaLabelledby(): string | undefined {
    if (this.ariaLabel) return undefined;
    const parts: string[] = [];
    if (this._formFieldCtx.ariaLabelledby) parts.push(this._formFieldCtx.ariaLabelledby);
    parts.push(this._labelId);
    return parts.join(' ');
  }

  private get _resolvedAriaDescribedby(): string | undefined {
    const parts: string[] = [];
    if (this.description) parts.push(this._descriptionId);
    if (this._formFieldCtx.ariaDescribedby) parts.push(this._formFieldCtx.ariaDescribedby);
    return parts.length ? parts.join(' ') : undefined;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    if (!this.value) {
      this.value = 'on';
    }
    this.addEventListener('click', this._onHostClick);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this._onHostClick);
  }

  override willUpdate(changed: PropertyValues): void {
    super.willUpdate(changed);

    if (changed.has('checked') || changed.has('value')) {
      this.setFormValue(this.checked ? (this.value || 'on') : null);
    }
  }

  focus(options?: FocusOptions): void {
    const input = this.shadowRoot?.querySelector<HTMLElement>('input');
    input?.focus(options);
  }

  private _onHostClick = (): void => {
    this._toggle();
  };

  private _preventNativeToggle(e: Event): void {
    e.preventDefault();
  }

  private _toggle(): void {
    if (this.disabled || this.readOnly) return;

    this.checked = !this.checked;

    const detail: ToggleProps.ChangeDetail = {
      checked: this.checked,
    };
    fireNonCancelableEvent(this, 'change', detail);
  }

  override render(): TemplateResult {
    const controlClasses = {
      'toggle-control': true,
      'toggle-control-checked': this.checked,
      'toggle-control-disabled': this.disabled,
      'toggle-control-readonly': this.readOnly,
    };

    const handleClasses = {
      'toggle-handle': true,
      'toggle-handle-checked': this.checked,
      'toggle-handle-disabled': this.disabled,
      'toggle-handle-readonly': this.readOnly,
    };

    const hasDescription = this.description.length > 0;

    return html`
      <span class="root abstract-switch--wrapper" @click=${this._preventNativeToggle}>
        <span class="abstract-switch--label-wrapper">
          <span class="abstract-switch--control ${classMap(controlClasses)}">
            <div class=${classMap(handleClasses)}></div>
            <input
              type="checkbox"
              class="abstract-switch--native-input"
              id=${ifDefined(this._formFieldCtx.controlId || undefined)}
              .checked=${this.checked}
              ?disabled=${this.disabled}
              ?readonly=${this.readOnly}
              aria-label=${ifDefined(this.ariaLabel || undefined)}
              aria-labelledby=${ifDefined(this._resolvedAriaLabelledby)}
              aria-describedby=${ifDefined(this._resolvedAriaDescribedby)}
              aria-invalid=${ifDefined(this._formFieldCtx.invalid ? 'true' : undefined)}
              aria-checked=${this.checked}
              @click=${this._preventNativeToggle}
            />
            <span class="abstract-switch--outline outline"></span>
          </span>
          <span class="abstract-switch--content">
            <span id=${this._labelId} class=${classMap({
              'abstract-switch--label': true,
              'abstract-switch--label-disabled': this.disabled,
            })}>
              <slot></slot>
            </span>
            ${hasDescription ? html`
              <span id=${this._descriptionId} class=${classMap({
                'abstract-switch--description': true,
                'abstract-switch--description-bottom-padding': true,
                'abstract-switch--description-disabled': this.disabled,
              })}>
                ${this.description}
              </span>
            ` : ''}
          </span>
        </span>
      </span>
    `;
  }
}
