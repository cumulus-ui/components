import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { SegmentedControlProps } from './interfaces.js';
import '../icon/index.js';

const hostStyles = css`:host { display: inline-flex; }`;

export class CsSegmentedControlInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  selectedId: string | null = '';

  @property({ type: Array })
  options: ReadonlyArray<SegmentedControlProps.Option> = [];

  @property({ type: String })
  label = '';

  @property({ type: String })
  ariaLabelledby = '';

  private _focusedIndex = -1;

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._onKeyDown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeyDown);
  }

  private _getEnabledIndices(): number[] {
    return this.options.reduce<number[]>((acc, opt, i) => {
      if (!opt.disabled) acc.push(i);
      return acc;
    }, []);
  }

  private _getSegmentButtons(): HTMLButtonElement[] {
    const root = this.shadowRoot;
    if (!root) return [];
    return Array.from(root.querySelectorAll<HTMLButtonElement>('.segment'));
  }

  private _onKeyDown = (e: KeyboardEvent): void => {
    const enabledIndices = this._getEnabledIndices();
    if (enabledIndices.length === 0) return;

    let direction = 0;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') direction = -1;
    else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') direction = 1;
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

    const buttons = this._getSegmentButtons();
    if (buttons[nextIndex]) {
      buttons[nextIndex].focus();
    }

    this._selectSegment(this.options[nextIndex]);
  };

  private _onSegmentClick(option: SegmentedControlProps.Option): void {
    if (option.disabled) return;
    this._selectSegment(option);
  }

  private _onSegmentFocus(index: number): void {
    this._focusedIndex = index;
  }

  private _selectSegment(option: SegmentedControlProps.Option): void {
    if (option.disabled || this.selectedId === option.id) return;

    this.selectedId = option.id;
    const detail: SegmentedControlProps.ChangeDetail = { selectedId: option.id };
    fireNonCancelableEvent(this as unknown as HTMLElement, 'change', detail);
  }

  private _getTabIndex(index: number): number {
    const selectedIdx = this.options.findIndex(o => o.id === this.selectedId);
    if (selectedIdx >= 0) {
      return index === selectedIdx ? 0 : -1;
    }
    const firstEnabled = this.options.findIndex(o => !o.disabled);
    return index === firstEnabled ? 0 : -1;
  }

  override render(): TemplateResult {
    const count = Math.min(this.options.length, 6);
    const segmentCountClass = `segment-count-${count}`;

    return html`
      <div class="root">
        <div
          class=${classMap({ 'segment-part': true, [segmentCountClass]: true })}
          role="group"
          aria-label=${ifDefined(this.label || undefined)}
          aria-labelledby=${ifDefined(!this.label && this.ariaLabelledby ? this.ariaLabelledby : undefined)}
        >
          ${this.options.map((option, index) => this._renderSegment(option, index))}
        </div>
      </div>
    `;
  }

  private _renderSegment(option: SegmentedControlProps.Option, index: number): TemplateResult {
    const isSelected = option.id === this.selectedId;
    const isDisabled = !!option.disabled;

    const segmentClasses = {
      'segment': true,
      'selected': isSelected,
      'disabled': isDisabled,
    };

    return html`
      <button
        class=${classMap(segmentClasses)}
        type="button"
        ?disabled=${isDisabled}
        aria-pressed=${isSelected ? 'true' : 'false'}
        aria-label=${ifDefined(option.iconName && !option.text ? (option.iconAlt || undefined) : undefined)}
        tabindex=${this._getTabIndex(index)}
        @click=${() => this._onSegmentClick(option)}
        @focus=${() => this._onSegmentFocus(index)}
      >
        ${option.iconName ? html`
          <cs-icon
            class=${option.text ? 'with-text' : 'with-no-text'}
            name=${option.iconName}
          ></cs-icon>
        ` : ''}
        ${option.text ? html`<span>${option.text}</span>` : ''}
      </button>
    `;
  }
}
