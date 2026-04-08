import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { CardsProps } from './interfaces.js';
import '../checkbox/index.js';
import '../spinner/index.js';

const hostStyles = css`:host { display: block; }`;

const DEFAULT_CARDS_PER_ROW: ReadonlyArray<CardsProps.CardsLayout> = [
  { cards: 1 },
  { minWidth: 768, cards: 2 },
  { minWidth: 992, cards: 3 },
  { minWidth: 1200, cards: 4 },
  { minWidth: 1400, cards: 5 },
  { minWidth: 1920, cards: 6 },
];

export class CsCardsInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ attribute: false })
  items: ReadonlyArray<unknown> = [];

  @property({ attribute: false })
  cardDefinition: CardsProps.CardDefinition<unknown> = {};

  @property({ attribute: false })
  selectedItems: ReadonlyArray<unknown> = [];

  @property({ type: String, reflect: true })
  selectionType: CardsProps.SelectionType | 'none' = 'none';

  @property({ attribute: false })
  trackBy?: CardsProps.TrackBy<unknown>;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: String })
  loadingText = '';

  @property({ attribute: false })
  cardsPerRow?: ReadonlyArray<CardsProps.CardsLayout>;

  @property({ type: String, reflect: true })
  variant: 'container' | 'full-page' = 'container';

  @property({ attribute: false })
  visibleSections?: ReadonlyArray<string>;

  @property({ attribute: false })
  ariaLabels?: CardsProps.AriaLabels<unknown>;

  @property({ attribute: false })
  isItemDisabled?: CardsProps.IsItemDisabled<unknown>;

  @state()
  private _columns = 1;

  private _hasHeader = false;

  private _resizeObserver?: ResizeObserver;

  override connectedCallback(): void {
    super.connectedCallback();
    this._resizeObserver = new ResizeObserver(() => this._updateColumns());
    this._resizeObserver.observe(this);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._resizeObserver?.disconnect();
  }

  private _onHeaderSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasHeader = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _updateColumns(): void {
    const width = this.clientWidth;
    const layouts = this.cardsPerRow ?? DEFAULT_CARDS_PER_ROW;

    let cols = 1;
    for (const layout of layouts) {
      if (!layout.minWidth || width >= layout.minWidth) {
        cols = layout.cards;
      }
    }
    this._columns = Math.min(Math.max(cols, 1), 20);
  }

  private _getItemKey(item: unknown, index: number): string {
    if (!this.trackBy) return String(index);
    if (typeof this.trackBy === 'function') return this.trackBy(item);
    return String((item as Record<string, unknown>)[this.trackBy]);
  }

  private _isSelected(item: unknown): boolean {
    if (!this.selectedItems.length) return false;
    const key = this._getItemKey(item, -1);
    return this.selectedItems.some((sel, i) => this._getItemKey(sel, i) === key);
  }

  private _isDisabled(item: unknown): boolean {
    return this.isItemDisabled ? this.isItemDisabled(item) : false;
  }

  private _onSelectionChange(item: unknown): void {
    if (this._isDisabled(item)) return;

    let newSelection: unknown[];
    if (this.selectionType === 'single') {
      newSelection = [item];
    } else {
      if (this._isSelected(item)) {
        const key = this._getItemKey(item, -1);
        newSelection = this.selectedItems.filter(
          (sel, i) => this._getItemKey(sel, i) !== key
        );
      } else {
        newSelection = [...this.selectedItems, item];
      }
    }

    const detail: CardsProps.SelectionChangeDetail<unknown> = {
      selectedItems: newSelection,
    };
    fireNonCancelableEvent(this, 'selectionChange', detail);
  }

  private _renderCardSections(item: unknown): TemplateResult | typeof nothing {
    const sections = this.cardDefinition.sections;
    if (!sections?.length) return nothing;

    const visible = this.visibleSections;

    return html`${sections
      .filter(section => !visible || !section.id || visible.includes(section.id))
      .map(section => {
        const width = section.width ?? 100;
        return html`
          <div class="section" style="inline-size: ${width}%">
            ${section.header ? html`<div class="section-header">${section.header}</div>` : nothing}
            ${section.content ? html`<div class="section-content">${section.content(item)}</div>` : nothing}
          </div>
        `;
      })}`;
  }

  private _renderCard(item: unknown, index: number): TemplateResult {
    const isSelectable = this.selectionType !== 'none';
    const isSelected = isSelectable && this._isSelected(item);
    const isDisabled = isSelectable && this._isDisabled(item);
    const headerContent = this.cardDefinition.header?.(item);

    const cardClasses = {
      'card': true,
      'card-selected': isSelected,
    };

    const cardHeaderClasses = {
      'card-header': true,
      'card-header-inner-selectable': isSelectable,
    };

    const selectionLabel = this.ariaLabels?.itemSelectionLabel
      ? this.ariaLabels.itemSelectionLabel({ selectedItems: [...this.selectedItems] }, item)
      : undefined;

    return html`
      <li class=${classMap(cardClasses)} data-item-index=${index}>
        <cs-container variant="default">
          <div slot="header" style="position: relative;">
            <div class=${classMap(cardHeaderClasses)}>
              ${headerContent ?? nothing}
            </div>
            ${isSelectable ? html`
              <div class="selection-control">
                <cs-checkbox
                  .checked=${isSelected}
                  ?disabled=${isDisabled}
                  aria-label=${selectionLabel ?? `Select item ${index + 1}`}
                  @change=${() => this._onSelectionChange(item)}
                ></cs-checkbox>
              </div>
            ` : nothing}
          </div>
          ${this._renderCardSections(item)}
        </cs-container>
      </li>
    `;
  }

  override render(): TemplateResult {
    const hasItems = this.items.length > 0;
    const showLoading = this.loading;
    const showEmpty = !showLoading && !hasItems;

    const listClasses = {
      'list': true,
      [`list-grid-${this._columns}`]: true,
    };

    const bodyClasses = {
      'has-header': this._hasHeader,
    };

    const groupLabel = this.ariaLabels?.selectionGroupLabel ?? 'Items';

    return html`
      <div class="root">
        <div class="header">
          <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        </div>
        <slot name="filter"></slot>
        <slot name="pagination"></slot>
        <div class=${classMap(bodyClasses)}>
          ${showLoading ? html`
            <div class="loading" role="status">
              <cs-spinner size="large"></cs-spinner>
              ${this.loadingText ? html`<span>${this.loadingText}</span>` : nothing}
            </div>
          ` : showEmpty ? html`
            <div class="empty">
              <slot name="empty"></slot>
            </div>
          ` : html`
            <ol class=${classMap(listClasses)} aria-label=${groupLabel}>
              ${this.items.map((item, i) => this._renderCard(item, i))}
            </ol>
          `}
        </div>
      </div>
    `;
  }
}
