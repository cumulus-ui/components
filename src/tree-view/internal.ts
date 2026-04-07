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
      <svg class="${expanded ? 'expand-toggle-icon expand-toggle-icon-expanded' : 'expand-toggle-icon'}"
           width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }

  private _renderNode(item: T, index: number, level: number): TemplateResult {
    if (!this.renderItem || !this.getItemId || !this.getItemChildren) return html``;

    const id = this.getItemId(item, index);
    const rendered = this.renderItem(item, index);
    const children = this.getItemChildren(item, index);
    const hasChildren = children !== undefined && children.length > 0;
    const expanded = this._isExpanded(id);

    const expandLabel = this.i18nStrings?.expandButtonLabel?.(item) ?? 'Expand';
    const collapseLabel = this.i18nStrings?.collapseButtonLabel?.(item) ?? 'Collapse';

    return html`
      <li
        class="${level > 0 ? 'treeitem offset' : 'treeitem'}"
        role="treeitem"
        aria-expanded=${hasChildren ? String(expanded) : nothing}
        data-node-id=${id}
      >
        <div class="treeitem-content-wrapper">
          <div class="expand-toggle-wrapper">
            ${hasChildren
              ? html`
                <button
                  class="expand-toggle toggle"
                  aria-label=${expanded ? collapseLabel : expandLabel}
                  @click=${() => this._handleToggle(item, id, expanded)}
                  tabindex="-1"
                >
                  ${this._renderToggleIcon(expanded)}
                </button>`
              : nothing}
          </div>
          <div class="structured-item-wrapper">
            <span class="tree-item-focus-target" tabindex=${level === 0 ? '0' : '-1'}></span>
            ${rendered.icon ? html`<span class="node-icon">${rendered.icon}</span>` : nothing}
            <span class="tree-item-structured-item">
              <span>${rendered.content}</span>
              ${rendered.secondaryContent
                ? html`<span>${rendered.secondaryContent}</span>`
                : nothing}
            </span>
            ${rendered.actions ? html`<span>${rendered.actions}</span>` : nothing}
          </div>
        </div>
        ${hasChildren ? html`
          <ul class="${expanded ? 'treeitem-group' : 'treeitem-group'}" role="group"
              style="${expanded ? '' : 'display:none'}">
            ${children!.map((child, i) => this._renderNode(child, i, level + 1))}
          </ul>
        ` : nothing}
      </li>
    `;
  }

  override render() {
    if (!this.renderItem || !this.getItemId || !this.getItemChildren) return nothing;

    const rootClasses = {
      'root': true,
      'tree': true,
      'root--connector-lines': this.connectorLines === 'vertical',
    };

    return html`
      <ul
        class=${classMap(rootClasses)}
        role="tree"
        aria-label=${ifDefined(this.controlAriaLabel || undefined)}
        aria-labelledby=${ifDefined(this.controlAriaLabelledby || undefined)}
        aria-describedby=${ifDefined(this.controlAriaDescribedby || undefined)}
      >
        ${this.items.map((item, i) => this._renderNode(item, i, 0))}
      </ul>
    `;
  }
}
