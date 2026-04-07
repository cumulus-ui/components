import { css, html, nothing, type TemplateResult } from 'lit';
import { CsBaseElement } from '../internal/base-element.js';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { repeat } from 'lit/directives/repeat.js';
import { componentStyles, sharedStyles } from './styles.js';
import { structuredItemStyles } from '../internal/styles/structured-item.js';
import type { ListProps } from './interfaces.js';

interface RenderedItem {
  id: string;
  content: unknown;
  secondaryContent?: unknown;
  icon?: unknown;
  actions?: unknown;
  announcementLabel?: string;
}

const hostStyles = css`:host { display: block; }`;

export class CsListInternal<T = any> extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, structuredItemStyles, hostStyles];

  @property({ attribute: false })
  items: ReadonlyArray<T> = [];

  @property({ attribute: false })
  renderItem: ((item: T) => RenderedItem) | undefined;

  @property({ type: String })
  tagOverride?: 'ol' | 'ul';

  @property({ type: String, attribute: 'label' })
  listLabel = '';

  @property({ type: String, attribute: 'labelledby' })
  listLabelledby = '';

  @property({ type: String, attribute: 'describedby' })
  listDescribedby = '';

  @property({ type: Boolean })
  sortable = false;

  @property({ type: Boolean })
  sortDisabled = false;

  @property({ type: Boolean })
  disableItemPaddings = false;

  @property({ type: Boolean })
  disablePaddings = false;

  @property({ attribute: false })
  i18nStrings?: ListProps.I18nStrings;

  private _renderListItem(rendered: RenderedItem): TemplateResult {
    const itemClasses = {
      'item': true,
      'disable-item-paddings': this.disableItemPaddings,
      'disable-paddings': this.disablePaddings,
    };

    return html`
      <li class=${classMap(itemClasses)} data-item-id=${rendered.id}>
        ${rendered.icon ? html`<span class="item-icon">${rendered.icon}</span>` : nothing}
        <span class="item-content">
          <span class="item-primary">${rendered.content}</span>
          ${rendered.secondaryContent
            ? html`<span class="item-secondary">${rendered.secondaryContent}</span>`
            : nothing}
        </span>
        ${rendered.actions ? html`<span class="item-actions">${rendered.actions}</span>` : nothing}
      </li>
    `;
  }

  override render() {
    if (!this.renderItem) return nothing;

    const renderedItems = this.items.map((item) => this.renderItem!(item));
    const tag = this.tagOverride ?? (this.sortable ? 'ol' : 'ul');

    const listClasses = {
      'root': true,
      'disable-paddings': this.disablePaddings,
    };

    const content = repeat(
      renderedItems,
      (r) => r.id,
      (r) => this._renderListItem(r),
    );

    if (tag === 'ol') {
      return html`
        <ol
          class=${classMap(listClasses)}
          role="list"
          aria-label=${ifDefined(this.listLabel || undefined)}
          aria-labelledby=${ifDefined(this.listLabelledby || undefined)}
          aria-describedby=${ifDefined(this.listDescribedby || undefined)}
        >${content}</ol>
      `;
    }

    return html`
      <ul
        class=${classMap(listClasses)}
        role="list"
        aria-label=${ifDefined(this.listLabel || undefined)}
        aria-labelledby=${ifDefined(this.listLabelledby || undefined)}
        aria-describedby=${ifDefined(this.listDescribedby || undefined)}
      >${content}</ul>
    `;
  }
}
