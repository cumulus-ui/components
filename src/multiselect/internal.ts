import { css, html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
import { CsBaseElement } from '../internal/base-element.js';
import { FormAssociatedMixin } from '../internal/mixins/form-associated.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { computePosition, flip, offset, shift } from '@floating-ui/dom';
import { componentStyles, sharedStyles } from './styles.js';
import { selectPartsStyles } from '../internal/styles/select-parts.js';
import type { MultiselectProps } from './interfaces.js';
import type { OptionDefinition, OptionGroup } from '../internal/generated/cloudscape-types.js';
import '../icon/index.js';
import '../token-group/index.js';
import type { TokenGroupProps } from '../token-group/interfaces.js';

const Base = FormAssociatedMixin(CsBaseElement);

const hostStyles = css`:host { display: block; }`;

const internalStyles = css`
.trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  inline-size: 100%;
  min-block-size: 32px;
  padding-block: var(--space-scaled-xxs, 4px);
  padding-inline: var(--space-field-horizontal, 12px);
  border-width: var(--border-width-field, 2px);
  border-style: solid;
  border-color: var(--color-border-input-default, #8c8f94);
  border-radius: var(--border-radius-input, 8px);
  background: var(--color-background-input-default, #ffffff);
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  cursor: pointer;
  outline: none;
  font-family: inherit;
  text-align: start;
}
.trigger:focus-visible {
  border-color: var(--color-border-item-focused, #006ce0);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
.trigger-disabled {
  background: var(--color-background-input-disabled, #ebebf0);
  border-color: var(--color-border-input-disabled, #ebebf0);
  color: var(--color-text-input-disabled, #b4b4bb);
  cursor: default;
}
.trigger-invalid {
  border-color: var(--color-text-status-error, #db0000);
}
.trigger-label {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.trigger-arrow {
  flex-shrink: 0;
  margin-inline-start: var(--space-xs, 8px);
  color: var(--color-text-button-inline-icon-default, #006ce0);
  transition: transform 0.15s ease;
}
.trigger-arrow-open {
  transform: rotate(180deg);
}
.dropdown {
  position: fixed;
  z-index: 2000;
  min-inline-size: 100%;
  max-block-size: 300px;
  overflow-y: auto;
  background: var(--color-background-dropdown-item-default, #ffffff);
  border: 1px solid var(--color-border-dropdown, #c6c6cd);
  border-radius: var(--border-radius-dropdown, 8px);
  box-shadow: var(--shadow-dropdown, 0px 4px 20px 1px rgba(0, 7, 22, 0.10));
  padding-block: var(--space-xxs, 4px);
}
.filter-container {
  padding: var(--space-xxs, 4px) var(--space-xs, 8px);
  border-block-end: 1px solid var(--color-border-dropdown, #c6c6cd);
}
.filter-input {
  display: block;
  inline-size: 100%;
  padding: var(--space-scaled-xxs, 4px) var(--space-field-horizontal, 12px);
  border: 1px solid var(--color-border-input-default, #8c8f94);
  border-radius: var(--border-radius-input, 8px);
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  outline: none;
  font-family: inherit;
}
.filter-input:focus {
  border-color: var(--color-border-item-focused, #006ce0);
}
.option-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.option {
  display: flex;
  align-items: center;
  padding: var(--space-scaled-xxs, 4px) var(--space-xs, 8px);
  cursor: pointer;
  min-block-size: 32px;
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
}
.option-highlighted {
  background: var(--color-background-dropdown-item-hover, #f0f0f0);
}
.option-selected {
  font-weight: 700;
}
.option-disabled {
  color: var(--color-text-input-disabled, #b4b4bb);
  cursor: default;
}
.option-checkbox {
  position: relative;
  min-block-size: var(--size-control, 16px);
  min-inline-size: var(--size-control, 16px);
  block-size: var(--size-control, 16px);
  inline-size: var(--size-control, 16px);
  margin-inline-end: var(--space-xs, 8px);
  border: 2px solid var(--color-border-input-default, #8c8f94);
  border-radius: 3px;
  background: var(--color-background-input-default, #ffffff);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.option-checkbox-checked {
  background: var(--color-item-selected, #006ce0);
  border-color: var(--color-item-selected, #006ce0);
}
.option-checkbox-checked::after {
  content: '';
  display: block;
  inline-size: 6px;
  block-size: 10px;
  border: solid #ffffff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-block-start: -2px;
}
.option-content {
  flex: 1;
  min-inline-size: 0;
}
.option-label {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.option-label-tag {
  margin-inline-start: var(--space-xs, 8px);
  color: var(--color-text-body-secondary, #656871);
  font-size: var(--font-size-body-s, 12px);
}
.option-description {
  color: var(--color-text-body-secondary, #656871);
  font-size: var(--font-size-body-s, 12px);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.group-label {
  padding: var(--space-scaled-xxs, 4px) var(--space-xs, 8px);
  font-weight: 700;
  font-size: var(--font-size-body-s, 12px);
  color: var(--color-text-body-secondary, #656871);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-block-start: 1px solid var(--color-border-dropdown, #c6c6cd);
  margin-block-start: var(--space-xxs, 4px);
}
.group-label:first-child {
  border-block-start: none;
  margin-block-start: 0;
}
.no-matches {
  padding: var(--space-xs, 8px);
  color: var(--color-text-body-secondary, #656871);
  font-style: italic;
  text-align: center;
}
.tokens {
  margin-block-start: var(--space-scaled-xs, 8px);
}
`;

interface FlatOption {
  option: OptionDefinition;
  groupLabel?: string;
  groupIndex?: number;
}

function isGroup(item: OptionDefinition | OptionGroup): item is OptionGroup {
  return 'options' in item && Array.isArray((item as OptionGroup).options);
}

export class CsMultiselectInternal extends Base {
  static override styles = [sharedStyles, componentStyles, selectPartsStyles, internalStyles, hostStyles];

  @property({ attribute: false })
  selectedOptions: ReadonlyArray<MultiselectProps.Option> = [];

  @property({ attribute: false })
  options: MultiselectProps.Options = [];

  @property({ type: String })
  filteringType: 'none' | 'auto' | 'manual' = 'none';

  @property({ type: String })
  placeholder = '';

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ type: Boolean })
  invalid = false;

  @property({ type: Number })
  tokenLimit?: number;

  @property({ type: Boolean })
  hideTokens = false;

  @property({ type: Boolean })
  keepOpen = false;

  @property({ type: String })
  filteringPlaceholder = '';

  @property({ attribute: false })
  deselectAriaLabel?: MultiselectProps.DeselectAriaLabelFunction;

  @state()
  private _open = false;

  @state()
  private _filterText = '';

  @state()
  private _highlightedIndex = -1;

  @query('.trigger')
  private _triggerEl!: HTMLElement;

  @query('.dropdown')
  private _dropdownEl!: HTMLElement;

  private _filterInputRef: Ref<HTMLInputElement> = createRef();

  private _cleanupOutsideClick: (() => void) | null = null;

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._onKeyDown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeyDown);
    this._removeOutsideClickListener();
  }

  override updated(changed: PropertyValues): void {
    super.updated(changed);
    if (changed.has('_open')) {
      if (this._open) {
        this._updatePosition();
        this._addOutsideClickListener();
        if (this._hasFiltering()) {
          this.updateComplete.then(() => {
            this._filterInputRef.value?.focus();
          });
        }
      } else {
        this._removeOutsideClickListener();
        this._filterText = '';
        this._highlightedIndex = -1;
      }
    }
  }

  focus(options?: FocusOptions): void {
    this._triggerEl?.focus(options);
  }

  private _hasFiltering(): boolean {
    return this.filteringType !== 'none';
  }

  private _flattenOptions(): FlatOption[] {
    const result: FlatOption[] = [];
    if (!this.options) return result;

    let groupIdx = 0;
    for (const item of this.options) {
      if (isGroup(item)) {
        const group = item as OptionGroup;
        for (const opt of group.options) {
          result.push({ option: opt, groupLabel: group.label, groupIndex: groupIdx });
        }
        groupIdx++;
      } else {
        result.push({ option: item as OptionDefinition });
      }
    }
    return result;
  }

  private _getFilteredOptions(): FlatOption[] {
    const all = this._flattenOptions();
    if (!this._hasFiltering() || this.filteringType === 'manual' || !this._filterText) {
      return all;
    }

    const lower = this._filterText.toLowerCase();
    return all.filter(({ option }) => {
      const fields = [option.label, option.value, option.description, option.labelTag];
      return fields.some(f => f && f.toLowerCase().includes(lower));
    });
  }

  private _isOptionSelected(option: OptionDefinition): boolean {
    return this.selectedOptions.some(
      s => s.value === option.value && s.label === option.label
    );
  }

  private _onTriggerClick = (): void => {
    if (this.disabled) return;
    this._open = !this._open;
  };

  private _onOptionClick(option: OptionDefinition, e: Event): void {
    e.stopPropagation();
    if (option.disabled) return;

    let newSelected: ReadonlyArray<MultiselectProps.Option>;
    if (this._isOptionSelected(option)) {
      newSelected = this.selectedOptions.filter(
        s => !(s.value === option.value && s.label === option.label)
      );
    } else {
      newSelected = [...this.selectedOptions, option];
    }

    this.selectedOptions = newSelected;
    this.value = newSelected.map(o => o.value).filter(Boolean).join(',');

    fireNonCancelableEvent(
      this,
      'change',
      { selectedOptions: newSelected } as MultiselectProps.MultiselectChangeDetail
    );

    if (!this.keepOpen) {
      this._open = false;
      this._triggerEl?.focus();
    }
  }

  private _onTokenDismiss = (e: CustomEvent<TokenGroupProps.DismissDetail>): void => {
    const idx = e.detail.itemIndex;
    const tokenItems = this._getTokenItems();
    if (idx < 0 || idx >= tokenItems.length) return;

    const dismissed = tokenItems[idx];
    const newSelected = this.selectedOptions.filter(
      s => !(s.value === dismissed.value && s.label === dismissed.label)
    );
    this.selectedOptions = newSelected;
    this.value = newSelected.map(o => o.value).filter(Boolean).join(',');

    fireNonCancelableEvent(
      this,
      'change',
      { selectedOptions: newSelected } as MultiselectProps.MultiselectChangeDetail
    );
  };

  private _onFilterInput = (e: Event): void => {
    this._filterText = (e.target as HTMLInputElement).value;
    this._highlightedIndex = 0;
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (!this._open) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
        if (this.disabled) return;
        e.preventDefault();
        this._open = true;
        this._highlightedIndex = 0;
      }
      return;
    }

    const filtered = this._getFilteredOptions();
    const enabledIndices = filtered
      .map((f, i) => ({ ...f, index: i }))
      .filter(f => !f.option.disabled)
      .map(f => f.index);

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        if (enabledIndices.length === 0) break;
        const currentPos = enabledIndices.indexOf(this._highlightedIndex);
        if (currentPos === -1 || currentPos >= enabledIndices.length - 1) {
          this._highlightedIndex = enabledIndices[0];
        } else {
          this._highlightedIndex = enabledIndices[currentPos + 1];
        }
        this._scrollHighlightedIntoView();
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        if (enabledIndices.length === 0) break;
        const currentPos = enabledIndices.indexOf(this._highlightedIndex);
        if (currentPos <= 0) {
          this._highlightedIndex = enabledIndices[enabledIndices.length - 1];
        } else {
          this._highlightedIndex = enabledIndices[currentPos - 1];
        }
        this._scrollHighlightedIntoView();
        break;
      }
      case 'Enter': {
        e.preventDefault();
        if (this._highlightedIndex >= 0 && this._highlightedIndex < filtered.length) {
          const item = filtered[this._highlightedIndex];
          if (!item.option.disabled) {
            this._onOptionClick(item.option, e);
          }
        }
        break;
      }
      case 'Escape': {
        e.preventDefault();
        e.stopPropagation();
        this._open = false;
        this._triggerEl?.focus();
        break;
      }
    }
  };

  private _scrollHighlightedIntoView(): void {
    this.updateComplete.then(() => {
      const items = this.shadowRoot?.querySelectorAll('.option');
      if (items && items[this._highlightedIndex]) {
        items[this._highlightedIndex].scrollIntoView({ block: 'nearest' });
      }
    });
  }

  private async _updatePosition(): Promise<void> {
    await this.updateComplete;
    if (!this._triggerEl || !this._dropdownEl) return;

    const { x, y } = await computePosition(
      this._triggerEl,
      this._dropdownEl,
      {
        placement: 'bottom-start',
        strategy: 'fixed',
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
      minWidth: `${this._triggerEl.offsetWidth}px`,
    });
  }

  private _addOutsideClickListener(): void {
    this._removeOutsideClickListener();
    const handler = (e: MouseEvent) => {
      const path = e.composedPath();
      if (!path.includes(this)) {
        this._open = false;
      }
    };
    requestAnimationFrame(() => {
      document.addEventListener('click', handler, true);
      this._cleanupOutsideClick = () => {
        document.removeEventListener('click', handler, true);
      };
    });
  }

  private _removeOutsideClickListener(): void {
    this._cleanupOutsideClick?.();
    this._cleanupOutsideClick = null;
  }

  private _getTokenItems(): MultiselectProps.Option[] {
    return [...this.selectedOptions];
  }

  private _renderOption(flat: FlatOption, index: number): TemplateResult {
    const opt = flat.option;
    const isHighlighted = index === this._highlightedIndex;
    const isSelected = this._isOptionSelected(opt);

    const classes = {
      'option': true,
      'option-highlighted': isHighlighted,
      'option-selected': isSelected,
      'option-disabled': !!opt.disabled,
    };

    const checkboxClasses = {
      'option-checkbox': true,
      'option-checkbox-checked': isSelected,
    };

    return html`
      <li
        class=${classMap(classes)}
        role="option"
        aria-selected=${isSelected}
        aria-disabled=${ifDefined(opt.disabled ? 'true' : undefined)}
        @click=${(e: Event) => this._onOptionClick(opt, e)}
        @mouseenter=${() => { if (!opt.disabled) this._highlightedIndex = index; }}
      >
        <div class=${classMap(checkboxClasses)}></div>
        <div class="option-content">
          <div class="option-label">
            ${opt.label || opt.value || ''}
            ${opt.labelTag ? html`<span class="option-label-tag">${opt.labelTag}</span>` : nothing}
          </div>
          ${opt.description ? html`<div class="option-description">${opt.description}</div>` : nothing}
        </div>
      </li>
    `;
  }

  private _renderDropdownContent(): TemplateResult {
    const filtered = this._getFilteredOptions();

    let lastGroupIndex: number | undefined;
    const items: TemplateResult[] = [];
    filtered.forEach((flat, idx) => {
      if (flat.groupIndex !== undefined && flat.groupIndex !== lastGroupIndex) {
        lastGroupIndex = flat.groupIndex;
        items.push(html`<li class="group-label" role="presentation">${flat.groupLabel || ''}</li>`);
      }
      items.push(this._renderOption(flat, idx));
    });

    if (items.length === 0) {
      items.push(html`<li class="no-matches" role="presentation">No matches found</li>`);
    }

    return html`
      ${this._hasFiltering() ? html`
        <div class="filter-container select-parts--filter">
          <input
            ${ref(this._filterInputRef)}
            class="filter-input"
            type="text"
            placeholder=${this.filteringPlaceholder || 'Filter'}
            aria-label=${this.filteringPlaceholder || 'Filter options'}
            .value=${this._filterText}
            @input=${this._onFilterInput}
            @click=${(e: Event) => e.stopPropagation()}
          />
        </div>
      ` : nothing}
      <ul class="option-list" role="listbox" aria-multiselectable="true" aria-label=${ifDefined(this.ariaLabel || undefined)}>
        ${items}
      </ul>
    `;
  }

  private _renderTokens(): TemplateResult | typeof nothing {
    if (this.hideTokens || this.selectedOptions.length === 0) return nothing;

    const tokenItems: TokenGroupProps.Item[] = this.selectedOptions.map(opt => ({
      label: opt.label || opt.value || '',
      description: opt.description,
      dismissLabel: this.deselectAriaLabel ? this.deselectAriaLabel(opt) : `Remove ${opt.label || opt.value || ''}`,
    }));

    return html`
      <div class="tokens">
        <cs-token-group
          .items=${tokenItems}
          .limit=${this.tokenLimit}
          @dismiss=${this._onTokenDismiss}
        ></cs-token-group>
      </div>
    `;
  }

  override render(): TemplateResult {
    const count = this.selectedOptions.length;
    const triggerLabel = count > 0 ? `${count} option${count > 1 ? 's' : ''} selected` : '';
    const showPlaceholder = count === 0;

    const triggerClasses = {
      'trigger': true,
      'select-parts--trigger': true,
      'trigger-disabled': this.disabled,
      'trigger-invalid': this.invalid,
    };

    return html`
      <div class="root">
        <button
          class=${classMap(triggerClasses)}
          type="button"
          aria-haspopup="listbox"
          aria-expanded=${this._open}
          aria-label=${ifDefined(this.ariaLabel || undefined)}
          aria-disabled=${ifDefined(this.disabled ? 'true' : undefined)}
          ?disabled=${false}
          tabindex=${this.disabled ? -1 : 0}
          @click=${this._onTriggerClick}
        >
          <span class="trigger-label ${showPlaceholder ? 'select-parts--placeholder' : ''}">
            ${showPlaceholder ? this.placeholder || '\u00a0' : triggerLabel}
          </span>
          <span class="trigger-arrow ${this._open ? 'trigger-arrow-open' : ''}">
            <cs-icon name="caret-down-filled" size="small"></cs-icon>
          </span>
        </button>
        ${this._open ? html`
          <div class="dropdown" @click=${(e: Event) => e.stopPropagation()}>
            ${this._renderDropdownContent()}
          </div>
        ` : nothing}
        ${this._renderTokens()}
      </div>
    `;
  }
}
