import { css, html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
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
import { computePosition, flip, offset, shift } from '@floating-ui/dom';
import { componentStyles, sharedStyles } from './styles.js';
import { componentStyles as inputComponentStyles } from '../input/styles.js';
import type { OptionDefinition } from '../internal/generated/cloudscape-types.js';

const Base = FormAssociatedMixin(CsBaseElement);

const hostStyles = css`:host { display: block; }`;

const dropdownStyles = css`
  .dropdown {
    position: absolute;
    z-index: 999;
    max-block-size: 200px;
    overflow-y: auto;
    background: var(--color-background-dropdown-item-default, #ffffff);
    border-block: 1px solid var(--color-border-dropdown-container, #8c8c94);
    border-inline: 1px solid var(--color-border-dropdown-container, #8c8c94);
    border-radius: var(--border-radius-dropdown, 8px);
    box-shadow: 0px 4px 20px 1px rgba(0, 7, 22, 0.10);
    padding-block: 4px;
    box-sizing: border-box;
  }

  .option {
    padding-block: 4px;
    padding-inline: 12px;
    font-size: var(--font-size-body-m, 14px);
    line-height: var(--line-height-body-m, 20px);
    cursor: pointer;
    color: var(--color-text-body-default, #0f141a);
  }

  .option-highlighted {
    background: var(--color-background-dropdown-item-hover, #f0fbff);
  }

  .option-disabled {
    color: var(--color-text-interactive-disabled, #b4b4bb);
    cursor: default;
  }
`;

export class CsAutosuggestInternal extends Base {
  static override styles = [sharedStyles, inputComponentStyles, componentStyles, hostStyles, dropdownStyles];

  @consume({ context: formFieldContext, subscribe: true })
  private _formFieldCtx: FormFieldContext = defaultFormFieldContext;

  @property({ type: String })
  override value = '';

  @property({ attribute: false })
  options: ReadonlyArray<OptionDefinition | (OptionDefinition & { options: ReadonlyArray<OptionDefinition> })> = [];

  @property({ type: String })
  placeholder = '';

  @property({ type: Boolean, attribute: 'read-only' })
  readOnly = false;

  @property({ type: Boolean })
  invalid = false;

  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  @property({ attribute: false })
  enteredTextLabel?: (value: string) => string;

  @property({ type: String, attribute: 'filtering-type' })
  filteringType: string = 'auto';

  @state()
  private _open = false;

  @state()
  private _highlightedIndex = -1;

  private _inputRef: Ref<HTMLInputElement> = createRef();

  @query('.dropdown')
  private _dropdownEl!: HTMLElement;

  private readonly _listboxId = generateUniqueId('autosuggest-listbox');
  private _flatOptions: OptionDefinition[] = [];

  private get _isInvalid(): boolean {
    return this.invalid || this._formFieldCtx.invalid;
  }

  private get _filteredOptions(): OptionDefinition[] {
    if (this.filteringType !== 'auto' || !this.value) return this._flatOptions;
    const lower = this.value.toLowerCase();
    return this._flatOptions.filter(opt => {
      const label = (opt.label || opt.value || '').toLowerCase();
      const desc = (opt.description || '').toLowerCase();
      return label.includes(lower) || desc.includes(lower);
    });
  }

  override willUpdate(changed: PropertyValues): void {
    super.willUpdate(changed);
    if (changed.has('options')) {
      this._flattenOptions();
    }
  }

  private _flattenOptions(): void {
    const result: OptionDefinition[] = [];
    for (const item of this.options) {
      if ('options' in item) {
        const group = item as OptionDefinition & { options: ReadonlyArray<OptionDefinition> };
        for (const child of group.options) {
          result.push(child);
        }
      } else {
        result.push(item);
      }
    }
    this._flatOptions = result;
  }

  focus(options?: FocusOptions): void {
    this._inputRef.value?.focus(options);
  }

  select(): void {
    this._inputRef.value?.select();
  }

  private _onInput = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this._open = true;
    this._highlightedIndex = -1;
    fireNonCancelableEvent(this, 'change', { value: this.value });
  };

  private _onFocus = (): void => {
    this._open = true;
    fireNonCancelableEvent(this, 'focus', {});
  };

  private _onBlur = (): void => {
    this._open = false;
    this._highlightedIndex = -1;
    fireNonCancelableEvent(this, 'blur', {});
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    const filtered = this._filteredOptions;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!this._open) {
          this._open = true;
          this._highlightedIndex = 0;
        } else {
          this._highlightedIndex = this._highlightedIndex < filtered.length - 1
            ? this._highlightedIndex + 1
            : 0;
        }
        this._scrollHighlightedIntoView();
        break;

      case 'ArrowUp':
        e.preventDefault();
        if (this._open) {
          this._highlightedIndex = this._highlightedIndex > 0
            ? this._highlightedIndex - 1
            : filtered.length - 1;
          this._scrollHighlightedIntoView();
        }
        break;

      case 'Enter':
        if (this._open && this._highlightedIndex >= 0 && this._highlightedIndex < filtered.length) {
          e.preventDefault();
          this._selectOption(filtered[this._highlightedIndex]);
        }
        break;

      case 'Escape':
        if (this._open) {
          e.preventDefault();
          e.stopPropagation();
          this._open = false;
          this._highlightedIndex = -1;
        }
        break;
    }
  };

  private _scrollHighlightedIntoView(): void {
    this.updateComplete.then(() => {
      const highlighted = this.shadowRoot?.querySelector('.option-highlighted');
      highlighted?.scrollIntoView({ block: 'nearest' });
    });
  }

  private _selectOption(option: OptionDefinition): void {
    if (option.disabled) return;

    const newValue = option.value || '';
    this.value = newValue;
    this._open = false;
    this._highlightedIndex = -1;

    fireNonCancelableEvent(this, 'change', { value: newValue });
    fireNonCancelableEvent(this, 'select', {
      value: newValue,
      selectedOption: option,
    });
  }

  private _onDropdownMouseDown = (e: Event): void => {
    e.preventDefault();
  };

  private _onOptionClick(option: OptionDefinition): void {
    if (option.disabled) return;
    this._selectOption(option);
  }

  override async updated(changed: PropertyValues): Promise<void> {
    super.updated(changed);
    if (this._open && this._inputRef.value && this._dropdownEl) {
      await this._updatePosition();
    }
  }

  private async _updatePosition(): Promise<void> {
    if (!this._inputRef.value || !this._dropdownEl) return;

    const { x, y } = await computePosition(
      this._inputRef.value,
      this._dropdownEl,
      {
        placement: 'bottom-start',
        strategy: 'absolute',
        middleware: [
          offset(4),
          flip({ padding: 8 }),
          shift({ padding: 8 }),
        ],
      }
    );

    Object.assign(this._dropdownEl.style, {
      left: `${x}px`,
      top: `${y}px`,
      inlineSize: `${this._inputRef.value.offsetWidth}px`,
    });
  }

  override render(): TemplateResult {
    const filtered = this._filteredOptions;
    const showDropdown = this._open && filtered.length > 0 && !this.readOnly && !this.disabled;

    const inputClasses = {
      'input': true,
      'input-readonly': this.readOnly,
      'input-invalid': this._isInvalid,
      'input-disabled': this.disabled,
    };

    return html`
      <div class="root">
        <div class="layout-strut">
          <input
            ${ref(this._inputRef)}
            class=${classMap(inputClasses)}
            type="text"
            .value=${this.value}
            placeholder=${ifDefined(this.placeholder || undefined)}
            ?disabled=${this.disabled}
            ?readonly=${this.readOnly}
            id=${ifDefined(this._formFieldCtx.controlId || undefined)}
            aria-label=${ifDefined(this.ariaLabel || undefined)}
            aria-labelledby=${ifDefined(!this.ariaLabel ? (this._formFieldCtx.ariaLabelledby || undefined) : undefined)}
            aria-describedby=${ifDefined(this._formFieldCtx.ariaDescribedby || undefined)}
            aria-invalid=${ifDefined(this._isInvalid ? 'true' : undefined)}
            aria-autocomplete="list"
            aria-expanded=${showDropdown ? 'true' : 'false'}
            aria-controls=${ifDefined(showDropdown ? this._listboxId : undefined)}
            aria-activedescendant=${ifDefined(
              showDropdown && this._highlightedIndex >= 0
                ? `${this._listboxId}-option-${this._highlightedIndex}`
                : undefined
            )}
            role="combobox"
            autocomplete="off"
            @input=${this._onInput}
            @focus=${this._onFocus}
            @blur=${this._onBlur}
            @keydown=${this._onKeyDown}
          />
          ${showDropdown ? html`
            <div
              class="dropdown"
              role="listbox"
              id=${this._listboxId}
              @mousedown=${this._onDropdownMouseDown}
            >
              ${filtered.map((opt, i) => this._renderOption(opt, i))}
            </div>
          ` : nothing}
        </div>
      </div>
    `;
  }

  private _renderOption(option: OptionDefinition, index: number): TemplateResult {
    const isHighlighted = index === this._highlightedIndex;
    const isDisabled = !!option.disabled;

    const classes = {
      'option': true,
      'option-highlighted': isHighlighted,
      'option-disabled': isDisabled,
    };

    return html`
      <div
        class=${classMap(classes)}
        id=${`${this._listboxId}-option-${index}`}
        role="option"
        aria-selected=${isHighlighted ? 'true' : 'false'}
        aria-disabled=${ifDefined(isDisabled ? 'true' : undefined)}
        @click=${() => this._onOptionClick(option)}
      >
        ${option.label || option.value || ''}
      </div>
    `;
  }
}
