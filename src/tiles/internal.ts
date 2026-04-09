import { css, html, type PropertyValues, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { FormAssociatedMixin } from '../internal/mixins/form-associated.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { generateUniqueId } from '../internal/hooks/use-unique-id.js';
import { componentStyles, sharedStyles } from './styles.js';
import { abstractSwitchStyles } from '../internal/styles/abstract-switch.js';
import { radioButtonStyles } from '../internal/styles/radio-button.js';
import type { TilesProps } from './interfaces.js';

const Base = FormAssociatedMixin(CsBaseElement);

const hostStyles = css`:host { display: block; }`;

export class CsTilesInternal extends Base {
  static override styles = [sharedStyles, componentStyles, abstractSwitchStyles, radioButtonStyles, hostStyles];

  @property({ type: String })
  override value = '';

  @property({ attribute: false })
  items: ReadonlyArray<TilesProps.TilesDefinition> = [];

  @property({ type: String, attribute: 'aria-label' })
  controlAriaLabel = '';

  @property({ type: Boolean, attribute: 'aria-required' })
  controlAriaRequired = false;

  @property({ type: String, attribute: 'aria-controls' })
  controlAriaControls = '';

  @property({ type: Number })
  columns?: number;

  @property({ type: Boolean })
  readOnly = false;

  private readonly _groupName = generateUniqueId('tiles');
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

  private _computeColumns(): number {
    if (this.columns !== undefined) return Math.min(Math.max(this.columns, 1), 4);
    const count = this.items.length;
    if (count === 4 || count === 8) return 2;
    return Math.min(count, 3);
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

    let direction = 0;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') direction = -1;
    else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') direction = 1;
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

  private _onTileClick(item: TilesProps.TilesDefinition): void {
    if (this.disabled || item.disabled || this.readOnly) return;
    this._selectItem(item.value);
  }

  private _onFocus(index: number): void {
    this._focusedIndex = index;
  }

  private _selectItem(itemValue: string): void {
    if (this.value === itemValue) return;

    this.value = itemValue;
    const detail: TilesProps.ChangeDetail = { value: itemValue };
    fireNonCancelableEvent(this, 'change', detail);
  }

  private _getTabIndex(index: number): number {
    const selectedIdx = this._getSelectedIndex();
    if (selectedIdx >= 0) {
      return index === selectedIdx ? 0 : -1;
    }
    const firstEnabled = this._getFirstEnabledIndex();
    return index === firstEnabled ? 0 : -1;
  }

  override render(): TemplateResult {
    const groupName = this.name || this._groupName;
    const cols = this._computeColumns();

    return html`
      <div
        class="root"
        role="radiogroup"
        aria-label=${ifDefined(this.controlAriaLabel || undefined)}
        aria-required=${ifDefined(this.controlAriaRequired ? 'true' : undefined)}
        aria-controls=${ifDefined(this.controlAriaControls || undefined)}
        aria-disabled=${ifDefined(this.disabled ? 'true' : undefined)}
        aria-readonly=${ifDefined(this.readOnly ? 'true' : undefined)}
      >
        <div class=${classMap({
          'columns': true,
          [`column-${cols}`]: true,
        })}>
          ${this.items.map((item, index) => this._renderTile(item, index, groupName))}
        </div>
      </div>
    `;
  }

  private _renderTile(
    item: TilesProps.TilesDefinition,
    index: number,
    groupName: string,
  ): TemplateResult {
    const isSelected = item.value === this.value;
    const isDisabled = this.disabled || !!item.disabled;
    const itemId = item.controlId || generateUniqueId('tile-item');
    const labelId = `${itemId}-label`;
    const descId = item.description ? `${itemId}-desc` : undefined;

    const tileClasses = {
      'tile-container': true,
      'refresh': true,
      'breakpoint-xs': true,
      'selected': isSelected,
      'disabled': isDisabled,
      'readonly': this.readOnly,
      'has-metadata': !!item.description || !!item.image,
    };

    const controlClasses = {
      'control': true,
      'no-image': !item.image,
    };

    return html`
      <div
        class=${classMap(tileClasses)}
        @click=${(e: Event) => {
          e.preventDefault();
          this._onTileClick(item);
        }}
      >
        <div class=${classMap(controlClasses)}>
          <span class=${classMap({
              'root': true,
              'abstract-switch--wrapper': true,
              'selected': isSelected,
            })}>
            <span class="abstract-switch--label-wrapper">
              <span class="abstract-switch--control radio-button--radio-control">
                <svg viewBox="0 0 100 100" aria-hidden="true">
                  <circle class=${classMap({
                    'radio-button--styled-circle-border': true,
                    'radio-button--styled-circle-disabled': isDisabled,
                    'radio-button--styled-circle-readonly': this.readOnly,
                  })} stroke-width="6.25" cx="50" cy="50" r="46" />
                  <circle class=${classMap({
                    'radio-button--styled-circle-fill': true,
                    'radio-button--styled-circle-checked': isSelected,
                    'radio-button--styled-circle-disabled': isDisabled,
                    'radio-button--styled-circle-readonly': this.readOnly,
                  })} stroke-width="30" cx="50" cy="50" r="35" />
                </svg>
                <input
                  type="radio"
                  class="abstract-switch--native-input"
                  name=${groupName}
                  .value=${item.value}
                  .checked=${isSelected}
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
                <span
                  id=${labelId}
                  class=${classMap({
                    'abstract-switch--label': true,
                    'abstract-switch--label-disabled': isDisabled,
                  })}
                >
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
        </div>
        ${item.image ? html`
          <div class=${classMap({
            'image': true,
            'disabled': isDisabled,
          })}>
            ${item.image}
          </div>
        ` : ''}
      </div>
    `;
  }
}
