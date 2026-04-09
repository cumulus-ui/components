import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { SideNavigationProps } from './interfaces.js';
import '../icon/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsSideNavigationInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ attribute: false })
  header?: SideNavigationProps.Header;

  @property({ attribute: false })
  items: ReadonlyArray<SideNavigationProps.Item> = [];

  @property({ type: String })
  activeHref = '';

  @state()
  private _expandedSections: Set<string> = new Set();

  override connectedCallback(): void {
    super.connectedCallback();
    this._initExpandedState();
  }

  override willUpdate(changed: Map<string | number | symbol, unknown>): void {
    super.willUpdate(changed);
    if (changed.has('items') || changed.has('activeHref')) {
      this._initExpandedState();
    }
  }

  private _initExpandedState(): void {
    const expanded = new Set<string>();
    this._collectExpandedItems(this.items, expanded);
    this._expandedSections = expanded;
  }

  private _collectExpandedItems(
    items: ReadonlyArray<SideNavigationProps.Item>,
    expanded: Set<string>
  ): boolean {
    let containsActive = false;
    for (const item of items) {
      if (item.type === 'section') {
        const childActive = this._collectExpandedItems(item.items, expanded);
        if (childActive || item.defaultExpanded !== false) {
          expanded.add(this._sectionKey(item));
        }
        if (childActive) containsActive = true;
      } else if (item.type === 'expandable-link-group') {
        const childActive = this._collectExpandedItems(item.items, expanded);
        const selfActive = item.href === this.activeHref;
        if (childActive || selfActive || item.defaultExpanded) {
          expanded.add(this._sectionKey(item));
        }
        if (childActive || selfActive) containsActive = true;
      } else if (item.type === 'link' || item.type === 'link-group') {
        if (item.href === this.activeHref) containsActive = true;
        if (item.type === 'link-group') {
          const childActive = this._collectExpandedItems(item.items, expanded);
          if (childActive) containsActive = true;
        }
      } else if (item.type === 'section-group') {
        const childActive = this._collectExpandedItems(item.items, expanded);
        if (childActive) containsActive = true;
      }
    }
    return containsActive;
  }

  private _sectionKey(item: SideNavigationProps.Section | SideNavigationProps.ExpandableLinkGroup): string {
    return `${item.type}:${item.text}`;
  }

  private _isSectionExpanded(item: SideNavigationProps.Section | SideNavigationProps.ExpandableLinkGroup): boolean {
    return this._expandedSections.has(this._sectionKey(item));
  }

  private _toggleSection(item: SideNavigationProps.Section | SideNavigationProps.ExpandableLinkGroup): void {
    const key = this._sectionKey(item);
    const newExpanded = new Set(this._expandedSections);
    const wasExpanded = newExpanded.has(key);

    if (wasExpanded) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    this._expandedSections = newExpanded;

    fireNonCancelableEvent(this, 'change', {
      item,
      expanded: !wasExpanded,
      expandableParents: [],
    });
  }

  private _onLinkClick(
    item: { text?: string; href: string; type?: string },
    e: MouseEvent
  ): void {
    const isModified = e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
    if (isModified) return;

    fireNonCancelableEvent(this, 'follow', {
      href: item.href,
      text: item.text,
      type: item.type,
    });
  }

  private _renderHeader(): TemplateResult | typeof nothing {
    if (!this.header) return nothing;

    const hasLogo = !!this.header.logo;
    const headerLinkClasses = {
      'header-link': true,
      'header-link--has-logo': hasLogo,
    };

    return html`
      <div class="header">
        <a
          class=${classMap(headerLinkClasses)}
          href=${this.header.href}
          @click=${(e: MouseEvent) => this._onLinkClick(
            { text: this.header!.text, href: this.header!.href, type: 'section-header' },
            e
          )}
        >
          ${hasLogo
            ? html`<img class="header-logo" src=${this.header.logo!.src} alt=${ifDefined(this.header.logo!.alt)} />`
            : nothing
          }
          ${this.header.text
            ? html`<span class="header-link-text">${this.header.text}</span>`
            : nothing
          }
        </a>
      </div>
      <hr class="divider divider-header" />
    `;
  }

  private _renderLink(item: SideNavigationProps.Link): TemplateResult {
    const isActive = item.href === this.activeHref;
    const linkClasses = {
      'link': true,
      'link-active': isActive,
    };

    return html`
      <li class="list-item">
        <a
          class=${classMap(linkClasses)}
          href=${item.href}
          aria-current=${isActive ? 'page' : nothing}
          target=${item.external ? '_blank' : nothing}
          rel=${item.external ? 'noopener' : nothing}
          @click=${(e: MouseEvent) => this._onLinkClick(item, e)}
        >
          ${item.text}
          ${item.external
            ? html`<span class="external-icon"><cs-icon name="external" size="inherit"></cs-icon></span>`
            : nothing
          }
        </a>
      </li>
    `;
  }

  private _renderDivider(): TemplateResult {
    return html`<li class="list-item"><hr class="divider divider-default" /></li>`;
  }

  private _renderSection(item: SideNavigationProps.Section): TemplateResult {
    const expanded = this._isSectionExpanded(item);

    return html`
      <li class="list-item">
        <div class="section">
          <div>
            <button
              type="button"
              class="overflow-menu-control overflow-menu-control-expandable-menu-trigger"
              aria-expanded=${expanded}
              @click=${() => this._toggleSection(item)}
            >
              <span class="overflow-menu-list-item-text">${item.text}</span>
              <span class=${classMap({ 'icon': true, 'icon-open': expanded })}>
                <cs-icon name="caret-down-filled"></cs-icon>
              </span>
            </button>
          </div>
          ${expanded
            ? html`<ul class="list">${item.items.map(child => this._renderItem(child))}</ul>`
            : nothing
          }
        </div>
      </li>
    `;
  }

  private _renderExpandableLinkGroup(item: SideNavigationProps.ExpandableLinkGroup): TemplateResult {
    const expanded = this._isSectionExpanded(item);
    const isActive = item.href === this.activeHref;
    const linkClasses = {
      'link': true,
      'link-active': isActive,
    };

    return html`
      <li class="list-item">
        <div class="expandable-link-group">
          <div style="display:flex;align-items:center;">
            <button
              type="button"
              class="overflow-menu-control"
              style="flex-shrink:0;padding:0;inline-size:auto;"
              aria-expanded=${expanded}
              aria-label=${`Toggle ${item.text}`}
              @click=${() => this._toggleSection(item)}
            >
              <span class=${classMap({ 'icon': true, 'icon-open': expanded })}>
                <cs-icon name="caret-down-filled"></cs-icon>
              </span>
            </button>
            <a
              class=${classMap(linkClasses)}
              href=${item.href}
              aria-current=${isActive ? 'page' : nothing}
              @click=${(e: MouseEvent) => this._onLinkClick(item, e)}
            >
              ${item.text}
            </a>
          </div>
          ${expanded
            ? html`<ul class="list list-variant-expandable-link-group">${item.items.map(child => this._renderItem(child))}</ul>`
            : nothing
          }
        </div>
      </li>
    `;
  }

  private _renderLinkGroup(item: SideNavigationProps.LinkGroup): TemplateResult {
    const isActive = item.href === this.activeHref;
    const linkClasses = {
      'link': true,
      'link-active': isActive,
    };

    return html`
      <li class="list-item">
        <a
          class=${classMap(linkClasses)}
          href=${item.href}
          aria-current=${isActive ? 'page' : nothing}
          @click=${(e: MouseEvent) => this._onLinkClick(item, e)}
        >
          ${item.text}
        </a>
        ${item.items.length
          ? html`<ul class="list">${item.items.map(child => this._renderItem(child))}</ul>`
          : nothing
        }
      </li>
    `;
  }

  private _renderSectionGroup(item: SideNavigationProps.SectionGroup): TemplateResult {
    return html`
      <li class="list-item">
        <div class="section-group">${item.title}</div>
        <ul class="list list-variant-section-group">
          ${item.items.map(child => this._renderItem(child))}
        </ul>
      </li>
    `;
  }

  private _renderItem(item: SideNavigationProps.Item): TemplateResult {
    switch (item.type) {
      case 'link':
        return this._renderLink(item);
      case 'divider':
        return this._renderDivider();
      case 'section':
        return this._renderSection(item);
      case 'expandable-link-group':
        return this._renderExpandableLinkGroup(item);
      case 'link-group':
        return this._renderLinkGroup(item);
      case 'section-group':
        return this._renderSectionGroup(item);
      default:
        return html``;
    }
  }

  override render(): TemplateResult {
    return html`
      <nav class="root" aria-label=${ifDefined(this.ariaLabel || 'Side navigation')}>
        ${this._renderHeader()}
        <slot name="itemsControl"></slot>
        <div class="list-container">
          <ul class="list list-variant-root list-variant-root--first">
            ${this.items.map(item => this._renderItem(item))}
          </ul>
        </div>
      </nav>
    `;
  }
}
