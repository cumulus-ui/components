import { css, html, type PropertyValues, type TemplateResult } from 'lit';
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
import { radioButtonStyles } from '../internal/styles/radio-button.js';
import type { RadioGroupProps } from './interfaces.js';

const Base = FormAssociatedMixin(CsBaseElement);

const hostStyles = css`:host { display: block; }`;

export class CsRadioGroupInternal extends Base {
  static override styles = [sharedStyles, componentStyles, abstractSwitchStyles, radioButtonStyles, hostStyles];

  @consume({ context: formFieldContext, subscribe: true })
  private _formFieldCtx: FormFieldContext = defaultFormFieldContext;

  @property({ type: String })
  override value = '';

  @property({ attribute: false })
  items: ReadonlyArray<RadioGroupProps.RadioButtonDefinition> = [];

  @property({ type: String, attribute: 'aria-label' })
  controlAriaLabel = '';

  @property({ type: Boolean, attribute: 'aria-required' })
  controlAriaRequired = false;

  @property({ type: String, attribute: 'aria-controls' })
  controlAriaControls = '';

  @property({ type: Boolean })
  readOnly = false;

  @property({ type: String })
  direction: 'horizontal' | 'vertical' = 'vertical';

  private readonly _groupName = generateUniqueId('radio');
  private _focusedIndex = -1;

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._onKeyDown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeyDown);
  }

  override willUpdate(changed: PropertyValues): void {
    super.willUpdate(changed);

    if (changed.has('value')) {
      this.setFormValue(this.value || null);
    }
  }

  focus(): void {
    const inputs = this._getRadioInputs();
    if (inputs.length === 0) return;

    const selectedIdx = this._getSelectedIndex();
    const focusIdx = selectedIdx >= 0 ? selectedIdx : this._getFirstEnabledIndex();
    if (focusIdx >= 0) {
      inputs[focusIdx].focus();
    }
  }

  private _getRadioInputs(): HTMLInputElement[] {
    const root = this.shadowRoot;
    if (!root) return [];
    return Array.from(root.querySelectorAll<HTMLInputElement>('.abstract-switch--native-input'));
  }

  private _getSelectedIndex(): number {
    return this.items.findIndex((item) => item.value === this.value);
  }

  private _getFirstEnabledIndex(): number {
    return this.items.findIndex((item) => !item.disabled);
  }

  private _getEnabledIndices(): number[] {
    return this.items.reduce<number[]>((acc, item, i) => {
      if (!item.disabled) acc.push(i);
      return acc;
    }, []);
  }

  private _onKeyDown = (e: KeyboardEvent): void => {
    const enabledIndices = this._getEnabledIndices();
    if (enabledIndices.length === 0) return;

    const isVertical = this.direction === 'vertical';
    const prevKey = isVertical ? 'ArrowUp' : 'ArrowLeft';
    const nextKey = isVertical ? 'ArrowDown' : 'ArrowRight';
    const altPrevKey = 'ArrowLeft';
    const altNextKey = 'ArrowRight';

    let direction = 0;
    if (e.key === prevKey || e.key === altPrevKey) direction = -1;
    else if (e.key === nextKey || e.key === altNextKey) direction = 1;
    else return;

    e.preventDefault();

    const currentEnabledPos = enabledIndices.indexOf(this._focusedIndex);
    let nextPos: number;

    if (currentEnabledPos === -1) {
      nextPos = direction === 1 ? 0 : enabledIndices.length - 1;
    } else {
      nextPos = currentEnabledPos + direction;
      if (nextPos < 0) nextPos = enabledIndices.length - 1;
      else if (nextPos >= enabledIndices.length) nextPos = 0;
    }

    const nextIndex = enabledIndices[nextPos];
    this._focusedIndex = nextIndex;

    const inputs = this._getRadioInputs();
    if (inputs[nextIndex]) {
      inputs[nextIndex].focus();
    }

    if (!this.readOnly) {
      this._selectItem(this.items[nextIndex].value);
    }
  };

  private _onItemClick(item: RadioGroupProps.RadioButtonDefinition): void {
    if (this.disabled || item.disabled || this.readOnly) return;
    this._selectItem(item.value);
  }

  private _onFocus(index: number): void {
    this._focusedIndex = index;
  }

  private _selectItem(itemValue: string): void {
    if (this.value === itemValue) return;

    this.value = itemValue;
    const detail: RadioGroupProps.ChangeDetail = { value: itemValue };
    fireNonCancelableEvent(this, 'change', detail);
  }

  private _getTabIndex(index: number): number {
    const selectedIdx = this._getSelectedIndex();
    if (selectedIdx >= 0) {
      return index === selectedIdx ? 0 : -1;
    }
    // No selection: first enabled item is tabbable
    const firstEnabled = this._getFirstEnabledIndex();
    return index === firstEnabled ? 0 : -1;
  }

  override render(): TemplateResult {
    const groupName = this.name || this._groupName;

    const groupClasses = {
      'root': true,
      'radio-group': true,
      'horizontal-group': this.direction === 'horizontal',
    };

    return html`
      <div
        class=${classMap(groupClasses)}
        role="radiogroup"
        id=${ifDefined(this._formFieldCtx.controlId || undefined)}
        aria-label=${ifDefined(this.controlAriaLabel || undefined)}
        aria-labelledby=${ifDefined(!this.controlAriaLabel ? (this._formFieldCtx.ariaLabelledby || undefined) : undefined)}
        aria-describedby=${ifDefined(this._formFieldCtx.ariaDescribedby || undefined)}
        aria-required=${ifDefined(this.controlAriaRequired ? 'true' : undefined)}
        aria-controls=${ifDefined(this.controlAriaControls || undefined)}
        aria-disabled=${ifDefined(this.disabled ? 'true' : undefined)}
        aria-readonly=${ifDefined(this.readOnly ? 'true' : undefined)}
      >
        ${this.items.map((item, index) => this._renderItem(item, index, groupName))}
      </div>
    `;
  }

  private _renderItem(
    item: RadioGroupProps.RadioButtonDefinition,
    index: number,
    groupName: string,
  ): TemplateResult {
    const isChecked = item.value === this.value;
    const isDisabled = this.disabled || !!item.disabled;
    const itemId = item.controlId || generateUniqueId('radio-item');
    const labelId = `${itemId}-label`;
    const descId = item.description ? `${itemId}-desc` : undefined;

    const itemClasses = {
      'root': true,
      'radio': true,
      'abstract-switch--wrapper': true,
      'selected': isChecked,
      'radio--has-description': !!item.description,
      'horizontal': this.direction === 'horizontal',
    };

    const controlClasses = {
      'abstract-switch--control': true,
      'radio-button--radio-control': true,
    };

    return html`
      <span
        class=${classMap(itemClasses)}
        @click=${(e: Event) => {
          e.preventDefault();
          this._onItemClick(item);
        }}
      >
        <span class="abstract-switch--label-wrapper">
          <span class=${classMap(controlClasses)}>
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <circle class=${classMap({
                'radio-button--styled-circle-border': true,
                'radio-button--styled-circle-disabled': isDisabled,
                'radio-button--styled-circle-readonly': this.readOnly,
              })} stroke-width="6.25" cx="50" cy="50" r="46" />
              <circle class=${classMap({
                'radio-button--styled-circle-fill': true,
                'radio-button--styled-circle-checked': isChecked,
                'radio-button--styled-circle-disabled': isDisabled,
                'radio-button--styled-circle-readonly': this.readOnly,
              })} stroke-width="30" cx="50" cy="50" r="35" />
            </svg>
            <input
              type="radio"
              class="abstract-switch--native-input"
              name=${groupName}
              .value=${item.value}
              .checked=${isChecked}
              ?disabled=${isDisabled}
              ?readonly=${this.readOnly}
              tabindex=${this._getTabIndex(index)}
              aria-labelledby=${labelId}
              aria-describedby=${ifDefined(descId)}
              @click=${(e: Event) => e.preventDefault()}
              @focus=${() => this._onFocus(index)}
            />
            <span class="abstract-switch--outline radio-button--outline"></span>
          </span>
          <span class="abstract-switch--content">
            <span id=${labelId} class=${classMap({
              'abstract-switch--label': true,
              'abstract-switch--label-disabled': isDisabled,
            })}>
              ${item.label}
            </span>
            ${item.description ? html`
              <span
                id=${descId!}
                class=${classMap({
                  'abstract-switch--description': true,
                  'abstract-switch--description-disabled': isDisabled,
                })}
              >
                ${item.description}
              </span>
            ` : ''}
          </span>
        </span>
      </span>
    `;
  }
}
