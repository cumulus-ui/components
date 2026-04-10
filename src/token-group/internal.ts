import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import { tokenStyles } from '../token/styles.js';
import type { TokenGroupProps } from './interfaces.js';
import '../icon/index.js';

const hostStyles = css`:host { display: block; }`;

const inventedStyles = css`
  .label-tag {
    display: inline-block;
    margin-inline-start: var(--space-xxs, 4px);
    font-size: var(--font-size-body-s, 12px);
    color: var(--color-text-body-secondary, #5f6b7a);
  }
  .tags {
    display: inline;
    margin-inline-start: var(--space-xxs, 4px);
  }
`;

const tokenListStyles = css`
.list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs, 8px);
  list-style: none;
  margin: 0;
  padding: 0;
}
.list-vertical {
  flex-direction: column;
  align-items: flex-start;
}
.token {
  display: inline-flex;
  max-inline-size: 100%;
}
.toggle {
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-button-inline-icon-default, #006ce0);
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  padding: 0;
}
.toggle:hover {
  color: var(--color-text-button-inline-icon-hover, #002b66);
  text-decoration: underline;
}
`;

export class CsTokenGroupInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, tokenStyles, tokenListStyles, hostStyles, inventedStyles];

  @property({ attribute: false })
  items: ReadonlyArray<TokenGroupProps.Item> = [];

  @property({ type: String })
  alignment: TokenGroupProps.Alignment = 'horizontal';

  @property({ type: Number })
  limit?: number;

  @property({ type: Boolean, attribute: 'read-only' })
  readOnly = false;

  @property({ type: Boolean, attribute: 'disable-outer-padding' })
  disableOuterPadding = false;

  @property({ attribute: false })
  i18nStrings?: TokenGroupProps.I18nStrings;

  @property({ type: String, attribute: 'limit-show-fewer-aria-label' })
  limitShowFewerAriaLabel = '';

  @property({ type: String, attribute: 'limit-show-more-aria-label' })
  limitShowMoreAriaLabel = '';

  @state()
  private _expanded = false;

  private _onDismiss(itemIndex: number): void {
    const item = this.items[itemIndex];
    if (item?.disabled || this.readOnly) return;
    fireNonCancelableEvent(
      this,
      'dismiss',
      { itemIndex } as TokenGroupProps.DismissDetail
    );
  }

  private _toggleExpand(): void {
    this._expanded = !this._expanded;
  }

  private _renderToken(item: TokenGroupProps.Item, index: number): TemplateResult {
    const showDismiss = !item.disabled && !this.readOnly;
    const ariaDisabled = item.disabled ? 'true' : undefined;

    const boxClasses = {
      'token-box': true,
      'token-box-disabled': !!item.disabled,
      'token-box-readonly': this.readOnly,
      'token-box-without-dismiss': !showDismiss,
    };

    return html`
      <li class="token">
        <div
          class=${classMap(boxClasses)}
          role="group"
          aria-label=${item.label || ''}
          aria-disabled=${ifDefined(ariaDisabled)}
        >
          ${item.iconName
            ? html`<span class="icon"><cs-icon name=${item.iconName}></cs-icon></span>`
            : nothing}
          ${item.iconUrl
            ? html`<span class="icon"><cs-icon url=${item.iconUrl}></cs-icon></span>`
            : nothing}
          <div class="token-normal">
            <div>
              ${item.label || ''}
              ${item.labelTag
                ? html`<span class="label-tag"> ${item.labelTag}</span>`
                : nothing}
            </div>
            ${item.description
              ? html`<div class="description">${item.description}</div>`
              : nothing}
            ${item.tags && item.tags.length > 0
              ? html`<div class="tags">${item.tags.join(', ')}</div>`
              : nothing}
          </div>
          ${showDismiss
            ? html`
              <button
                class="dismiss-button"
                type="button"
                aria-label=${item.dismissLabel || 'Remove'}
                @click=${() => this._onDismiss(index)}
              >
                <cs-icon name="close" size="small"></cs-icon>
              </button>
            `
            : nothing}
        </div>
      </li>
    `;
  }

  override render(): TemplateResult {
    const hasItems = this.items.length > 0;
    const isLimited = this.limit != null && this.limit < this.items.length && !this._expanded;
    const visibleItems = isLimited ? this.items.slice(0, this.limit) : this.items;
    const hiddenCount = this.items.length - visibleItems.length;

    const showMoreLabel = this.i18nStrings?.limitShowMore || `Show more (+${hiddenCount})`;
    const showFewerLabel = this.i18nStrings?.limitShowFewer || 'Show fewer';

    const rootClasses = {
      'root': true,
      'has-items': hasItems,
      'no-padding': this.disableOuterPadding,
    };

    const listClasses = {
      'list': true,
      'list-vertical': this.alignment === 'vertical',
    };

    return html`
      <div class=${classMap(rootClasses)}>
        <ul class=${classMap(listClasses)} role="list">
          ${visibleItems.map((item, i) => this._renderToken(item, i))}
        </ul>
        ${this.limit != null && this.items.length > this.limit
          ? html`
            <button
              class="toggle"
              type="button"
              aria-label=${this._expanded
                ? this.limitShowFewerAriaLabel || showFewerLabel
                : this.limitShowMoreAriaLabel || showMoreLabel}
              @click=${this._toggleExpand}
            >
              ${this._expanded ? showFewerLabel : showMoreLabel}
            </button>
          `
          : nothing}
      </div>
    `;
  }
}
