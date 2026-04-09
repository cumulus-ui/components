import { css, html, svg, type PropertyValues } from 'lit';
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
import { checkboxIconStyles } from '../internal/styles/checkbox-icon.js';
import type { CheckboxProps } from './interfaces.js';

const Base = FormAssociatedMixin(CsBaseElement);

const hostStyles = css`:host { display: block; }`;

export class CsCheckboxInternal extends Base {
  static override styles = [sharedStyles, componentStyles, abstractSwitchStyles, checkboxIconStyles, hostStyles];

  @consume({ context: formFieldContext, subscribe: true })
  private _formFieldCtx: FormFieldContext = defaultFormFieldContext;

  @property({ type: Boolean })
  checked = false;

  @property({ type: Boolean })
  indeterminate = false;

  @property({ type: Boolean })
  readOnly = false;

  @property({ type: String })
  description = '';

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ type: String })
  override ariaRequired: string | null = null;

  @property({ type: String })
  ariaControls: string | null = null;

  private readonly _labelId = generateUniqueId('checkbox-label');
  private readonly _descriptionId = generateUniqueId('checkbox-desc');

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

  private _onHostClick = (): void => {
    this._toggle();
  };

  private _preventNativeToggle(e: Event): void {
    e.preventDefault();
  }

  private _toggle(): void {
    if (this.disabled || this.readOnly) return;

    this.checked = !this.checked;
    this.indeterminate = false;

    const detail: CheckboxProps.ChangeDetail = {
      checked: this.checked,
      indeterminate: false,
    };
    fireNonCancelableEvent(this, 'change', detail);
  }

  override render() {
    const styledBoxClasses = {
      'checkbox-icon--styled-box': true,
      'checkbox-icon--styled-box-checked': this.checked && !this.indeterminate,
      'checkbox-icon--styled-box-indeterminate': this.indeterminate,
      'checkbox-icon--styled-box-disabled': this.disabled,
      'checkbox-icon--styled-box-readonly': this.readOnly,
    };

    const styledLineClasses = {
      'checkbox-icon--styled-line': true,
      'checkbox-icon--styled-line-disabled': this.disabled,
      'checkbox-icon--styled-line-readonly': this.readOnly,
    };

    const hasDescription = this.description.length > 0;

    return html`
      <span class="root abstract-switch--wrapper" @click=${this._preventNativeToggle}>
        <span class="abstract-switch--label-wrapper">
          <span class="abstract-switch--control checkbox-control">
            <svg class="checkbox-icon--root" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><rect class=${classMap(styledBoxClasses)} x="0.5" y="0.5" width="15" height="15" rx="3" ry="3" />${
              this.checked && !this.indeterminate
                ? svg`<polyline class=${classMap(styledLineClasses)} points="3.5,8 7,11 12,4" />`
                : this.indeterminate
                  ? svg`<polyline class=${classMap(styledLineClasses)} points="3.5,8 12.5,8" />`
                  : ''
            }</svg>
            <input
              type="checkbox"
              class="abstract-switch--native-input"
              id=${ifDefined(this._formFieldCtx.controlId || undefined)}
              .checked=${this.checked}
              .indeterminate=${this.indeterminate}
              ?disabled=${this.disabled}
              ?readonly=${this.readOnly}
              aria-label=${ifDefined(this.ariaLabel || undefined)}
              aria-labelledby=${ifDefined(this._resolvedAriaLabelledby)}
              aria-required=${ifDefined(this.ariaRequired || undefined)}
              aria-controls=${ifDefined(this.ariaControls || undefined)}
              aria-describedby=${ifDefined(this._resolvedAriaDescribedby)}
              aria-invalid=${ifDefined(this._formFieldCtx.invalid ? 'true' : undefined)}
              aria-checked=${this.indeterminate ? 'mixed' : this.checked}
              @click=${this._preventNativeToggle}
            />
            <span class="abstract-switch--outline outline"></span>
          </span>
          <span class="abstract-switch--content">
            <span id=${this._labelId} class=${classMap({
              'abstract-switch--label': true,
              'abstract-switch--label-disabled': this.disabled,
            })}><slot></slot></span>
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
