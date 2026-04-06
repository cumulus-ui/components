// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
export interface PaginationProps {
  /**
   * Index of the current page. The first page has an index of 1.
   */
  currentPageIndex: number;
  /**
   * Sets the total number of pages. Only positive integers are allowed.
   */
  pagesCount: number;
  /**
   * Sets the pagination variant. It can be either default (when setting it to `false`) or open ended (when setting it
   * to `true`). Default pagination navigates you through the items list. The open-end variant enables you
   * to lazy-load your items because it always displays three dots before the next page icon. The next page button is
   * never disabled. When the user clicks on it but there are no more items to show, the
   * `onNextPageClick` handler is called with `requestedPageAvailable: false` in the event detail.
   */
  openEnd?: boolean;
  /**
   * If set to `true`, the pagination links will be disabled. Use it, for example, if you want to prevent the user
   * from changing page before items are loaded.
   */
  disabled?: boolean;
  /**
   * Adds aria-labels to the pagination buttons:
   * * `paginationLabel` (string) - Label for the entire pagination group. It allows users to distinguish context
   * * in cases of multiple pagination components in a page.
   * * `previousPageLabel` (string) - Previous page button.
   * * `pageLabel` (number => string) - Individual page button, this function is called for every page number that's rendered.
   * * `nextPageLabel` (string) - Next page button
   *
   * Example:
   * ```
   * {
   *   nextPageLabel: 'Next page',
   *   paginationLabel: 'Table pagination',
   *   previousPageLabel: 'Previous page',
   *   pageLabel: pageNumber => `Page ${pageNumber}`
   * }
   * ```
   * @i18n
   */
  ariaLabels?: PaginationProps.Labels;
  /** @event change — CustomEvent<PaginationProps.ChangeDetail> */
  /** @event previousPageClick — CustomEvent<PaginationProps.PageClickDetail> */
  /** @event nextPageClick — CustomEvent<PaginationProps.PageClickDetail> */
}
export declare namespace PaginationProps {
  interface Labels {
    nextPageLabel?: string;
    paginationLabel?: string;
    previousPageLabel?: string;
    pageLabel?: (pageNumber: number) => string;
  }
  interface PageClickDetail {
    requestedPageAvailable: boolean;
    requestedPageIndex: number;
  }
  interface ChangeDetail {
    currentPageIndex: number;
  }
}
