import { css, html, nothing, type TemplateResult } from 'lit';
import { CsBaseElement } from '../internal/base-element.js';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import { treeViewTreeItemStyles } from '../internal/styles/tree-view-tree-item.js';
import { expandToggleButtonStyles } from '../internal/styles/expand-toggle-button.js';
import { treeViewVerticalConnectorStyles } from '../internal/styles/tree-view-vertical-connector.js';
import type { TreeViewProps } from './interfaces.js';

const hostStyles = css`:host { display: block; }`;

export class CsTreeViewInternal<T = any> extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, treeViewTreeItemStyles, expandToggleButtonStyles, treeViewVerticalConnectorStyles, hostStyles];

  @property({ attribute: false })
  items: ReadonlyArray<T> = [];

  @property({ attribute: false })
  renderItem: ((item: T, index: number) => TreeViewProps.TreeItem) | undefined;

  @property({ attribute: false })
  getItemId: ((item: T, index: number) => string) | undefined;

  @property({ attribute: false })
  getItemChildren: ((item: T, index: number) => ReadonlyArray<T> | undefined) | undefined;

  @property({ attribute: false })
  expandedItems?: ReadonlyArray<string>;

  @property({ type: String, attribute: 'aria-label' })
  controlAriaLabel = '';

  @property({ type: String, attribute: 'aria-labelledby' })
  controlAriaLabelledby = '';

  @property({ type: String, attribute: 'aria-describedby' })
  controlAriaDescribedby = '';

  @property({ type: String })
  connectorLines?: TreeViewProps.ConnectorLinesVariant;

  @property({ attribute: false })
  i18nStrings?: TreeViewProps.I18nStrings<T>;

  @property({ attribute: false })
  renderItemToggleIcon?: (data: TreeViewProps.ItemToggleRenderIconData) => unknown;

  private _expandedSet = new Set<string>();

  override willUpdate(changed: import('lit').PropertyValues): void {
    if (changed.has('expandedItems' as keyof this)) {
      this._expandedSet = new Set(this.expandedItems ?? []);
    }
  }

  private _isExpanded(id: string): boolean {
    return this._expandedSet.has(id);
  }

  private _handleToggle(item: T, id: string, expanded: boolean): void {
    const detail: TreeViewProps.ItemToggleDetail<T> = { id, item, expanded: !expanded };
    fireNonCancelableEvent(this as unknown as HTMLElement, 'itemToggle', detail);
  }

  private _renderToggleIcon(expanded: boolean): TemplateResult {
    if (this.renderItemToggleIcon) {
      return html`${this.renderItemToggleIcon({ expanded })}`;
    }

    return html`
      <span class=${classMap({
        'expand-toggle-icon': true,
        'expand-toggle-icon-expanded': expanded,
        'icon': true,
        'size-small': true,
        'size-small-mapped-height': true,
        'variant-normal': true,
      })}>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
          <path class="filled stroke-linejoin-round" d="m8 11 4-6H4l4 6Z"></path>
        </svg>
      </span>
    `;
  }

  private _renderNode(item: T, index: number, level: number, globalIndex: { value: number }): TemplateResult {
    if (!this.renderItem || !this.getItemId || !this.getItemChildren) return html``;

    const id = this.getItemId(item, index);
    const rendered = this.renderItem(item, index);
    const children = this.getItemChildren(item, index);
    const hasChildren = children !== undefined && children.length > 0;
    const expanded = this._isExpanded(id);
    globalIndex.value++;

    const contentLabel = typeof rendered.content === 'string' ? rendered.content : id;

    return html`
      <li
        class=${classMap({ 'treeitem': true, 'offset': level > 0, 'expandable': hasChildren, 'expanded': hasChildren && expanded })}
        role="treeitem"
        aria-expanded=${hasChildren ? String(expanded) : nothing}
        aria-level=${level + 1}
        data-node-id=${id}
      >
        <div class="treeitem-content-wrapper">
          <div class="expand-toggle-wrapper">
            <div class="toggle">
              ${hasChildren
                ? html`
                  <button
                    class="expand-toggle disable-focus-highlight tree-item-focus-target"
                    type="button"
                    tabindex="-1"
                    aria-label=${contentLabel}
                    aria-expanded=${String(expanded)}
                    @click=${() => this._handleToggle(item, id, expanded)}
                  >
                    ${this._renderToggleIcon(expanded)}
                  </button>`
                : html`
                  <div class="tree-item-focus-target"
                    role="group"
                    tabindex="-1"
                    aria-label=${contentLabel}
                  ></div>`}
            </div>
          </div>
          <div class="structured-item-wrapper">
            <div class="root tree-item-structured-item">
              ${rendered.icon ? html`<div class="icon">${rendered.icon}</div>` : nothing}
              <div class="main">
                <div class="content-wrap">
                  <div class="content">
                    ${rendered.content}
                  </div>
                </div>
                ${rendered.secondaryContent
                  ? html`<div>${rendered.secondaryContent}</div>`
                  : nothing}
              </div>
              ${rendered.actions ? html`<div class="actions">${rendered.actions}</div>` : nothing}
            </div>
          </div>
        </div>
        ${hasChildren && expanded ? html`
          <ul class="treeitem-group" role="group">
            ${children!.map((child, i) => this._renderNode(child, i, level + 1, globalIndex))}
          </ul>
        ` : nothing}
      </li>
    `;
  }

  override render() {
    if (!this.renderItem || !this.getItemId || !this.getItemChildren) return nothing;

    const rootClasses = {
      'root': true,
      'root--connector-lines': this.connectorLines === 'vertical',
    };

    const globalIndex = { value: 0 };

    return html`
      <div class=${classMap(rootClasses)}>
        <ul
          class="tree"
          role="tree"
          aria-label=${ifDefined(this.controlAriaLabel || undefined)}
          aria-labelledby=${ifDefined(this.controlAriaLabelledby || undefined)}
          aria-describedby=${ifDefined(this.controlAriaDescribedby || undefined)}
        >
          ${this.items.map((item, i) => this._renderNode(item, i, 0, globalIndex))}
        </ul>
      </div>
    `;
  }
}
