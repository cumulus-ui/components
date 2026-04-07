import { css, html, svg, type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { FormAssociatedMixin } from '../internal/mixins/form-associated.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { generateUniqueId } from '../internal/hooks/use-unique-id.js';
import { componentStyles, sharedStyles } from './styles.js';
import { abstractSwitchStyles } from '../internal/styles/abstract-switch.js';
import type { CheckboxProps } from './interfaces.js';

const Base = FormAssociatedMixin(CsBaseElement);

const hostStyles = css`
  :host { display: block; }
  .checkbox-icon {
    position: absolute;
    inline-size: 100%;
    block-size: 100%;
    inset-block-start: 0;
    inset-inline-start: 0;
  }
  .checkbox-icon > .styled-box {
    fill: var(--color-background-control-default-4jb21l, #ffffff);
    stroke: var(--color-border-control-default-sh3548, #8c8c94);
    stroke-width: var(--border-width-field-2xc78x, 1px);
  }
  .checkbox-icon > .styled-box-checked,
  .checkbox-icon > .styled-box-indeterminate {
    fill: var(--color-background-control-checked-ka7kc2, #006ce0);
    stroke: var(--color-border-control-checked-bdv28l, #006ce0);
  }
  .checkbox-icon > .styled-box-disabled,
  .checkbox-icon > .styled-box-readonly {
    fill: var(--color-background-control-disabled-1f3718, #dedee3);
    stroke: var(--color-border-control-disabled-uj7t08, #dedee3);
  }
  .checkbox-icon > .styled-line {
    stroke: var(--color-foreground-control-default-eto4wy, #ffffff);
    stroke-width: 2;
    fill: none;
  }
  .checkbox-icon > .styled-line-disabled {
    stroke: var(--color-foreground-control-disabled-txi6cf, #ffffff);
  }
  .checkbox-icon > .styled-line-readonly {
    stroke: var(--color-foreground-control-read-only-7ydvuj, #656871);
  }
`;

export class CsCheckboxInternal extends Base {
  static override styles = [sharedStyles, componentStyles, abstractSwitchStyles, hostStyles];

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  @property({ type: Boolean, reflect: true })
  readOnly = false;

  @property({ type: String })
  description = '';

  @property({ type: String })
  ariaLabel = '';

  @property({ type: Boolean })
  ariaRequired = false;

  private readonly _labelId = generateUniqueId('checkbox-label');
  private readonly _descriptionId = generateUniqueId('checkbox-desc');

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
      'styled-box': true,
      'styled-box-checked': this.checked && !this.indeterminate,
      'styled-box-indeterminate': this.indeterminate,
      'styled-box-disabled': this.disabled,
      'styled-box-readonly': this.readOnly,
    };

    const styledLineClasses = {
      'styled-line': true,
      'styled-line-disabled': this.disabled,
      'styled-line-readonly': this.readOnly,
    };

    const hasDescription = this.description.length > 0;
    const ariaDescribedBy = hasDescription ? this._descriptionId : undefined;

    return html`
      <label class="root wrapper" @click=${this._preventNativeToggle}>
        <span class="label-wrapper">
          <span class=${classMap({
              'control': true,
              'checkbox-control': true,
              'checkbox-control--checked': this.checked && !this.indeterminate,
              'checkbox-control--indeterminate': this.indeterminate,
            })}>
            <svg class="checkbox-icon" viewBox="0 0 16 16" aria-hidden="true"><rect class=${classMap(styledBoxClasses)} x="0.5" y="0.5" width="15" height="15" rx="3" ry="3" />${
              this.checked && !this.indeterminate
                ? svg`<polyline class=${classMap(styledLineClasses)} points="3.5,8 7,11 12,4" />`
                : this.indeterminate
                  ? svg`<polyline class=${classMap(styledLineClasses)} points="3.5,8 12.5,8" />`
                  : ''
            }</svg>
            <input
              type="checkbox"
              class="native-input"
              .checked=${this.checked}
              .indeterminate=${this.indeterminate}
              ?disabled=${this.disabled}
              ?readonly=${this.readOnly}
              aria-label=${ifDefined(this.ariaLabel || undefined)}
              aria-required=${ifDefined(this.ariaRequired ? 'true' : undefined)}
              aria-describedby=${ifDefined(ariaDescribedBy)}
              aria-checked=${this.indeterminate ? 'mixed' : this.checked}
              @click=${this._preventNativeToggle}
            />
            <span class="outline"></span>
          </span>
          <span class="content">
            <span id=${this._labelId} class=${classMap({
              'label': true,
              'label-disabled': this.disabled,
            })}>
              <slot></slot>
            </span>
            ${hasDescription ? html`
              <span id=${this._descriptionId} class=${classMap({
                'description': true,
                'description-bottom-padding': true,
                'description-disabled': this.disabled,
              })}>
                ${this.description}
              </span>
            ` : ''}
          </span>
        </span>
      </label>
    `;
  }
}
