import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import { breadcrumbGroupItemStyles } from '../internal/styles/breadcrumb-group-item.js';
import type { BreadcrumbGroupProps } from './interfaces.js';
import '../icon/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsBreadcrumbGroupInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, breadcrumbGroupItemStyles, hostStyles];

  @property({ type: Array })
  items: ReadonlyArray<BreadcrumbGroupProps.Item> = [];

  @property({ type: String })
  override ariaLabel: string | null = 'Breadcrumbs';

  private _onItemClick(item: BreadcrumbGroupProps.Item, index: number, e: MouseEvent): void {
    const isLast = index === this.items.length - 1;
    if (isLast) return;

    const isModified = e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
    if (isModified) return;

    fireNonCancelableEvent(this, 'follow', {
      item,
      text: item.text,
      href: item.href,
    });
  }

  private _renderItem(item: BreadcrumbGroupProps.Item, index: number): TemplateResult {
    const isLast = index === this.items.length - 1;

    const breadcrumbClasses = {
      'breadcrumb-group-item--breadcrumb': true,
      'breadcrumb-group-item--last': isLast,
    };

    const anchorClasses = {
      'breadcrumb-group-item--anchor': true,
    };

    return html`
      <li class="item">
        <div class=${classMap(breadcrumbClasses)}>
          ${isLast
            ? html`
              <span class=${classMap(anchorClasses)} aria-current="page">
                <span class="breadcrumb-group-item--text">${item.text}</span>
              </span>
            `
            : html`
              <a
                class=${classMap(anchorClasses)}
                href=${item.href}
                @click=${(e: MouseEvent) => this._onItemClick(item, index, e)}
              >
                <span class="breadcrumb-group-item--text">${item.text}</span>
              </a>
              <span class="breadcrumb-group-item--icon">
                <cs-icon name="angle-right"></cs-icon>
              </span>
            `
          }
        </div>
      </li>
    `;
  }

  override render(): TemplateResult {
    return html`
      <nav
        class="breadcrumb-group"
        aria-label=${ifDefined(this.ariaLabel || 'Breadcrumbs')}
      >
        <ol class="breadcrumb-group-list">
          ${this.items.map((item, i) => this._renderItem(item, i))}
        </ol>
      </nav>
    `;
  }
}
