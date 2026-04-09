import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { PaginationProps } from './interfaces.js';
import '../icon/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsPaginationInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: Number })
  currentPageIndex = 1;

  @property({ type: Number })
  pagesCount = 0;

  @property({ type: Boolean })
  openEnd = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ attribute: false })
  ariaLabels?: PaginationProps.Labels;

  private _onPrev(): void {
    if (this.disabled || this.currentPageIndex <= 1) return;

    const requestedPageIndex = this.currentPageIndex - 1;
    fireNonCancelableEvent<PaginationProps.PageClickDetail>(
      this,
      'previousPageClick',
      { requestedPageIndex, requestedPageAvailable: true }
    );
    this.currentPageIndex = requestedPageIndex;
    fireNonCancelableEvent<PaginationProps.ChangeDetail>(
      this,
      'change',
      { currentPageIndex: this.currentPageIndex }
    );
  }

  private _onNext(): void {
    if (this.disabled) return;

    const requestedPageIndex = this.currentPageIndex + 1;
    const requestedPageAvailable = this.openEnd ? true : requestedPageIndex <= this.pagesCount;

    if (!this.openEnd && this.currentPageIndex >= this.pagesCount) return;

    fireNonCancelableEvent<PaginationProps.PageClickDetail>(
      this,
      'nextPageClick',
      { requestedPageIndex, requestedPageAvailable }
    );
    this.currentPageIndex = requestedPageIndex;
    fireNonCancelableEvent<PaginationProps.ChangeDetail>(
      this,
      'change',
      { currentPageIndex: this.currentPageIndex }
    );
  }

  private _onPageClick(pageIndex: number): void {
    if (this.disabled || pageIndex === this.currentPageIndex) return;

    this.currentPageIndex = pageIndex;
    fireNonCancelableEvent<PaginationProps.ChangeDetail>(
      this,
      'change',
      { currentPageIndex: this.currentPageIndex }
    );
  }

  private _getPageNumbers(): (number | 'dots')[] {
    const total = this.pagesCount;
    const current = this.currentPageIndex;
    const pages: (number | 'dots')[] = [];

    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
      return pages;
    }

    // Always show first page
    pages.push(1);

    if (current > 3) {
      pages.push('dots');
    }

    // Pages around current
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (current < total - 2) {
      pages.push('dots');
    }

    // Always show last page
    if (!this.openEnd) {
      pages.push(total);
    } else {
      pages.push('dots');
    }

    return pages;
  }

  private _renderPageButtons(): TemplateResult[] {
    const pages = this._getPageNumbers();
    const results: TemplateResult[] = [];

    for (let i = 0; i < pages.length; i++) {
      const p = pages[i];
      if (p === 'dots') {
        results.push(html`<li class="dots" aria-hidden="true">…</li>`);
      } else {
        const isCurrent = p === this.currentPageIndex;
        const pageLabel = this.ariaLabels?.pageLabel
          ? this.ariaLabels.pageLabel(p)
          : `Page ${p}`;

        results.push(html`
          <li class="page-item">
            <button
              class=${classMap({
                'button': true,
                'page-number': true,
                'button-current': isCurrent,
                'button-disabled': this.disabled,
              })}
              ?disabled=${this.disabled}
              aria-label=${pageLabel}
              aria-current=${isCurrent ? 'page' : nothing}
              @click=${() => this._onPageClick(p)}
            >${p}</button>
          </li>
        `);
      }
    }

    return results;
  }

  override render(): TemplateResult {
    const prevDisabled = this.disabled || this.currentPageIndex <= 1;
    const nextDisabled = this.disabled || (!this.openEnd && this.currentPageIndex >= this.pagesCount);

    return html`
      <nav class=${classMap({ root: true, 'root-disabled': this.disabled })}
        aria-label=${this.ariaLabels?.paginationLabel || 'Pagination'}>
        <ul class="root">
          <li class="page-item">
            <button
              class=${classMap({ button: true, arrow: true, 'button-disabled': prevDisabled })}
              ?disabled=${prevDisabled}
              @click=${this._onPrev}
              aria-label=${this.ariaLabels?.previousPageLabel || 'Previous page'}
            >
              <cs-icon name="angle-left"></cs-icon>
            </button>
          </li>
          ${this._renderPageButtons()}
          <li class="page-item">
            <button
              class=${classMap({ button: true, arrow: true, 'button-disabled': nextDisabled })}
              ?disabled=${nextDisabled}
              @click=${this._onNext}
              aria-label=${this.ariaLabels?.nextPageLabel || 'Next page'}
            >
              <cs-icon name="angle-right"></cs-icon>
            </button>
          </li>
        </ul>
      </nav>
    `;
  }
}
