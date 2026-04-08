// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const tableBodyCellStyles = css`
.table-body-cell--expandable-toggle-wrapper {
  position: absolute;
  inset-block: 0;
  display: flex;
  align-items: center;
}

.table-body-cell--body-cell {
  box-sizing: border-box;
  border-block-start: var(--border-divider-list-width, 1px) solid transparent;
  border-block-end: var(--border-divider-list-width, 1px) solid var(--color-border-divider-secondary, #ebebf0);
  word-wrap: break-word;
  font-weight: inherit;
  text-align: start;
}
.table-body-cell--body-cell > .table-body-cell--body-cell-content {
  padding-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-0 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 0 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-0 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + -1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-1 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 1 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-1 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 0 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-2 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 2 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-2 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-3 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 3 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-3 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 2 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-4 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 4 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-4 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 3 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-5 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 5 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-5 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 4 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-6 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 6 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-6 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 5 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-7 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 7 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-7 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 6 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-8 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 8 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-8 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 7 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-9 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-9 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 8 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-next > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--expandable-level-next > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) + (9 - 1) * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell > .table-body-cell--body-cell-content {
  padding-inline-end: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell > .table-body-cell--body-cell-content {
  padding-block-start: calc(var(--space-scaled-xs, 8px) - 1 * var(--border-divider-list-width, 1px) + 2px);
  margin-block-start: calc(-1 * 2px);
}
.table-body-cell--body-cell > .table-body-cell--body-cell-content {
  padding-block-end: calc(calc(var(--space-scaled-xs, 8px) + var(--border-item-width, 2px) - var(--border-divider-list-width, 1px)) - 1 * var(--border-divider-list-width, 1px) + 2px);
  margin-block-end: calc(-1 * 2px);
}
.table-body-cell--body-cell-align-top {
  vertical-align: top;
}
.table-body-cell--body-cell-content {
  box-sizing: border-box;
}
.table-body-cell--body-cell-content:not(.table-body-cell--body-cell-wrap) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.table-body-cell--body-cell-counter {
  display: inline;
  color: var(--color-text-body-secondary, #424650);
  font-size: var(--font-size-body-s, 12px);
  vertical-align: bottom;
}
.table-body-cell--body-cell:first-child {
  border-inline-start: var(--border-item-width, 2px) solid transparent;
}
.table-body-cell--body-cell:first-child > .table-body-cell--body-cell-content {
  padding-inline-start: calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell:first-child > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-0 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 0 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-0 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px) + -1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-1 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 1 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-1 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px) + 0 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-2 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 2 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-2 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px) + 1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-3 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 3 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-3 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px) + 2 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-4 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 4 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-4 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px) + 3 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-5 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 5 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-5 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px) + 4 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-6 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 6 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-6 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px) + 5 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-7 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 7 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-7 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px) + 6 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-8 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 8 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-8 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px) + 7 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-9 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-9 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px) + 8 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-next > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:first-child.table-body-cell--expandable-level-next > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px) - 1 * var(--border-divider-list-width, 1px)) + (9 - 1) * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell:last-child {
  border-inline-end: var(--border-item-width, 2px) solid transparent;
}
.table-body-cell--body-cell:last-child > .table-body-cell--body-cell-content {
  padding-inline-end: calc(calc(var(--space-l, 20px) - var(--border-item-width, 2px)) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child {
  /*
    Remove the placeholder border if the row is not selectable.
    Rows that are not selectable will reserve the horizontal space
    that the placeholder border would consume.
  */
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child > .table-body-cell--body-cell-content {
  padding-inline-start: calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-0 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 0 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-0 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px) + -1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-1 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 1 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-1 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px) + 0 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-2 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 2 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-2 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px) + 1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-3 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 3 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-3 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px) + 2 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-4 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 4 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-4 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px) + 3 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-5 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 5 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-5 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px) + 4 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-6 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 6 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-6 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px) + 5 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-7 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 7 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-7 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px) + 6 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-8 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 8 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-8 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px) + 7 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-9 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-9 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px) + 8 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-next > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--expandable-level-next > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px)) + (9 - 1) * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover > .table-body-cell--body-cell-content {
  padding-inline-start: calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-0 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 0 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-0 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + -1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-1 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 1 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-1 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 0 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-2 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 2 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-2 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-3 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 3 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-3 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 2 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-4 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 4 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-4 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 3 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-5 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 5 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-5 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 4 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-6 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 6 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-6 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 5 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-7 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 7 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-7 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 6 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-8 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 8 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-8 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 7 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-9 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-9 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 8 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-next > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-next > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(calc(var(--space-xxxs, 2px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) + (9 - 1) * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows > .table-body-cell--body-cell-content {
  padding-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-0 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 0 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-0 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + -1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-1 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 1 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-1 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 0 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-2 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 2 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-2 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-3 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 3 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-3 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 2 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-4 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 4 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-4 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 3 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-5 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 5 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-5 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 4 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-6 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 6 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-6 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 5 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-7 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 7 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-7 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 6 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-8 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 8 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-8 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 7 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-9 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-9 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 8 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-next > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--expandable-level-next > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) + (9 - 1) * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover > .table-body-cell--body-cell-content {
  padding-inline-start: calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-0 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 0 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-0 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + -1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-1 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 1 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-1 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 0 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-2 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 2 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-2 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-3 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 3 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-3 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 2 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-4 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 4 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-4 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 3 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-5 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 5 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-5 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 4 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-6 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 6 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-6 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 5 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-7 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 7 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-7 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 6 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-8 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 8 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-8 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 7 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-9 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-9 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 8 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-next > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-next > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) + (9 - 1) * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start > .table-body-cell--body-cell-content {
  padding-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-0 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 0 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-0 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + -1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-1 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 1 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-1 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 0 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-2 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 2 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-2 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-3 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 3 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-3 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 2 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-4 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 4 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-4 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 3 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-5 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 5 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-5 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 4 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-6 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 6 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-6 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 5 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-7 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 7 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-7 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 6 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-8 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 8 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-8 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 7 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-9 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-9 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 8 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-next > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start.table-body-cell--expandable-level-next > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) + (9 - 1) * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover > .table-body-cell--body-cell-content {
  padding-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-0 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 0 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-0 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + -1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-1 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 1 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-1 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 0 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-2 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 2 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-2 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-3 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 3 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-3 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 2 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-4 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 4 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-4 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 3 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-5 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 5 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-5 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 4 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-6 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 6 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-6 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 5 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-7 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 7 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-7 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 6 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-8 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 8 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-8 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 7 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-9 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-9 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 8 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-next > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:first-child.table-body-cell--has-striped-rows.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-next > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) + (9 - 1) * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection) > .table-body-cell--body-cell-content {
  padding-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection) > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-0 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 0 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-0 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + -1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-1 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 1 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-1 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 0 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-2 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 2 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-2 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-3 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 3 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-3 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 2 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-4 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 4 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-4 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 3 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-5 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 5 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-5 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 4 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-6 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 6 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-6 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 5 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-7 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 7 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-7 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 6 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-8 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 8 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-8 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 7 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-9 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-9 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px) + 8 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-next > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection).table-body-cell--expandable-level-next > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) - 1 * var(--border-divider-list-width, 1px)) + (9 - 1) * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover > .table-body-cell--body-cell-content {
  padding-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-0 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 0 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-0 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + -1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-1 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 1 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-1 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 0 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-2 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 2 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-2 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-3 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 3 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-3 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 2 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-4 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 4 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-4 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 3 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-5 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 5 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-5 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 4 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-6 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 6 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-6 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 5 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-7 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 7 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-7 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 6 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-8 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 8 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-8 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 7 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-9 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-9 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px) + 8 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-next > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell-pad-inline-start:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable).table-body-cell--body-cell-editable:hover.table-body-cell--expandable-level-next > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(calc(var(--space-scaled-l, 20px) + var(--border-divider-list-width, 1px) - 1 * var(--border-divider-list-width, 1px)) + (9 - 1) * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--is-visual-refresh:first-child:not(.table-body-cell--has-selection):not(.table-body-cell--body-cell-editable) {
  border-inline-start: none;
}
.table-body-cell--body-cell-first-row {
  border-block-start: var(--border-item-width, 2px) solid transparent;
}
.table-body-cell--body-cell-last-row:not(.table-body-cell--body-cell-selected):not(.table-body-cell--has-footer) {
  border-block-end: var(--border-item-width, 2px) solid transparent;
}
.table-body-cell--body-cell-last-row:not(.table-body-cell--body-cell-selected).table-body-cell--has-footer {
  /*
  Add a bottom border to the body cells of the last row as a separator between the
  table and the footer
  */
  border-block-end: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
}
.table-body-cell--body-cell-shaded {
  background: var(--color-background-cell-shaded, #f6f6f9);
}
.table-body-cell--body-cell.table-body-cell--has-striped-rows:not(.table-body-cell--body-cell-selected):not(.table-body-cell--body-cell-last-row) {
  border-block-end-color: var(--color-border-cell-shaded, #dedee3);
}
.table-body-cell--body-cell-selected {
  background-color: var(--color-background-item-selected, #f0fbff);
  border-block-start: var(--border-item-width, 2px) solid var(--color-border-item-selected, #006ce0);
  border-block-end: var(--border-item-width, 2px) solid var(--color-border-item-selected, #006ce0);
}
.table-body-cell--body-cell-selected > .table-body-cell--body-cell-content {
  padding-block-end: calc(var(--space-scaled-xs, 8px) - 1 * var(--border-divider-list-width, 1px) + 2px);
  margin-block-end: calc(-1 * 2px);
}
.table-body-cell--body-cell-selected.table-body-cell--body-cell-last-row.table-body-cell--is-visual-refresh > .table-body-cell--body-cell-content {
  padding-block-end: calc(calc(var(--space-scaled-xs, 8px) + var(--border-divider-list-width, 1px)) - 1 * var(--border-divider-list-width, 1px) + 2px);
  margin-block-end: calc(-1 * 2px);
}
.table-body-cell--body-cell-selected:first-child {
  border-inline-start: var(--border-item-width, 2px) solid var(--color-border-item-selected, #006ce0);
  border-start-start-radius: var(--border-radius-item, 8px);
  border-start-end-radius: 0;
  border-end-start-radius: var(--border-radius-item, 8px);
  border-end-end-radius: 0;
}
.table-body-cell--body-cell-selected:last-child {
  border-inline-end: var(--border-item-width, 2px) solid var(--color-border-item-selected, #006ce0);
  border-start-start-radius: 0;
  border-start-end-radius: var(--border-radius-item, 8px);
  border-end-start-radius: 0;
  border-end-end-radius: var(--border-radius-item, 8px);
}
.table-body-cell--body-cell.table-body-cell--sticky-cell {
  position: sticky;
  background: var(--color-background-container-content, #ffffff);
  z-index: 798;
  transition-property: padding;
  transition-duration: var(--motion-duration-transition-show-quick, 90ms);
  transition-timing-function: var(--motion-easing-sticky, cubic-bezier(1, 0, 0.83, 1));
}
@media (prefers-reduced-motion: reduce) {
  .table-body-cell--body-cell.table-body-cell--sticky-cell {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .table-body-cell--body-cell.table-body-cell--sticky-cell, .awsui-mode-entering .table-body-cell--body-cell.table-body-cell--sticky-cell {
  animation: none;
  transition: none;
}
.table-body-cell--body-cell.table-body-cell--sticky-cell.table-body-cell--table-variant-full-page {
  background: var(--color-background-layout-main, #ffffff);
}
.table-body-cell--body-cell.table-body-cell--sticky-cell.table-body-cell--body-cell-shaded {
  background: var(--color-background-cell-shaded, #f6f6f9);
}
.table-body-cell--body-cell.table-body-cell--sticky-cell.table-body-cell--body-cell-selected {
  background-color: var(--color-background-item-selected, #f0fbff);
}
.table-body-cell--body-cell.table-body-cell--sticky-cell.table-body-cell--body-cell-selected:first-child {
  box-shadow: 0 0 0 4px var(--color-background-container-content, #ffffff);
  clip-path: inset(0 0 0 0);
}
.table-body-cell--body-cell.table-body-cell--sticky-cell.table-body-cell--body-cell-selected:last-child {
  box-shadow: 4px 0 0 0 var(--color-background-container-content, #ffffff);
  clip-path: inset(0 0 0 0);
}
.table-body-cell--body-cell.table-body-cell--sticky-cell.table-body-cell--body-cell-selected:last-child.table-body-cell--sticky-cell-last-inline-end {
  box-shadow: var(--shadow-sticky-column-last, -4px 0 8px 1px rgba(0, 28, 36, 0.1)), 8px 0 0 0 var(--color-background-container-content, #ffffff);
  clip-path: inset(0 0 0 -24px);

}
.table-body-cell--body-cell.table-body-cell--sticky-cell.table-body-cell--body-cell-selected:last-child.table-body-cell--sticky-cell-last-inline-end:dir(rtl) {
  box-shadow: var(--shadow-sticky-column-first, 4px 0px 8px 1px rgba(0, 7, 22, 0.1));
  clip-path: inset(0 -24px 0 0);
}
.table-body-cell--body-cell.table-body-cell--sticky-cell-last-inline-start {
  box-shadow: var(--shadow-sticky-column-first, 4px 0px 8px 1px rgba(0, 7, 22, 0.1));
  clip-path: inset(0px -24px 0px 0px);

}
.table-body-cell--body-cell.table-body-cell--sticky-cell-last-inline-start:dir(rtl) {
  box-shadow: var(--shadow-sticky-column-last, -4px 0 8px 1px rgba(0, 28, 36, 0.1));
  clip-path: inset(0 0 0 -24px);
}
.table-body-cell--body-cell.table-body-cell--sticky-cell-last-inline-end {
  box-shadow: var(--shadow-sticky-column-last, -4px 0 8px 1px rgba(0, 28, 36, 0.1));
  clip-path: inset(0 0 0 -24px);

}
.table-body-cell--body-cell.table-body-cell--sticky-cell-last-inline-end:dir(rtl) {
  box-shadow: var(--shadow-sticky-column-first, 4px 0px 8px 1px rgba(0, 7, 22, 0.1));
  clip-path: inset(0 -24px 0 0);
}
.table-body-cell--body-cell-selected:not(:first-child) > .table-body-cell--body-cell-content {
  padding-block-start: calc(calc(var(--space-scaled-xs, 8px) + var(--border-item-width, 2px) - var(--border-divider-list-width, 1px)) - 1 * var(--border-divider-list-width, 1px) + 2px);
  margin-block-start: calc(-1 * 2px);
}
.table-body-cell--body-cell:not(.table-body-cell--body-cell-selected).table-body-cell--body-cell-next-selected {
  border-block-end: 0;
}
.table-body-cell--body-cell:not(.table-body-cell--body-cell-selected).table-body-cell--body-cell-next-selected > .table-body-cell--body-cell-content {
  padding-block-end: calc(calc(var(--space-scaled-xs, 8px) + var(--border-divider-list-width, 1px)) - 1 * var(--border-divider-list-width, 1px) + 2px);
  margin-block-end: calc(-1 * 2px);
}
.table-body-cell--body-cell-selected.table-body-cell--body-cell-prev-selected {
  border-block-start: var(--border-divider-list-width, 1px) solid var(--color-border-item-placeholder, #006ce0);
}
.table-body-cell--body-cell-selected.table-body-cell--body-cell-prev-selected > .table-body-cell--body-cell-content {
  padding-block-start: calc(calc(var(--space-scaled-xs, 8px) + var(--border-item-width, 2px) - var(--border-divider-list-width, 1px)) - 1 * var(--border-divider-list-width, 1px) + 2px);
  margin-block-start: calc(-1 * 2px);
}
.table-body-cell--body-cell-selected.table-body-cell--body-cell-next-selected {
  border-block-end-width: var(--border-divider-list-width, 1px);
}
.table-body-cell--body-cell-selected.table-body-cell--body-cell-next-selected:first-child {
  border-end-start-radius: 0;
}
.table-body-cell--body-cell-selected.table-body-cell--body-cell-next-selected:last-child {
  border-end-end-radius: 0;
}
.table-body-cell--body-cell-selected.table-body-cell--body-cell-prev-selected:first-child {
  border-start-start-radius: 0;
}
.table-body-cell--body-cell-selected.table-body-cell--body-cell-prev-selected:last-child {
  border-start-end-radius: 0;
}
.table-body-cell--body-cell-selected:not(.table-body-cell--body-cell-prev-selected) > .table-body-cell--body-cell-content {
  padding-block-start: calc(var(--space-scaled-xs, 8px) - 1 * var(--border-divider-list-width, 1px) + 2px);
  margin-block-start: calc(-1 * 2px);
}
.table-body-cell--body-cell-editor-wrapper {
  padding-block: 0;
  padding-inline-start: 0;
  padding-inline-end: calc(var(--space-xs, 8px) + var(--space-xxs, 4px));
}
.table-body-cell--body-cell-success {
  padding-block: 0;
  padding-inline-start: 0;
  padding-inline-end: calc(calc(var(--space-xs, 8px) + var(--space-xxs, 4px)) + calc(var(--size-icon-normal, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell-success, .table-body-cell--body-cell-editor-wrapper {
  inset-block: 0;
  inset-inline-end: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.table-body-cell--body-cell-editor {
  cursor: pointer;
  outline: 0;
  background: 0;
  border-block: 0;
  border-inline: 0;
  padding-block: var(--space-scaled-xxs, 4px);
  padding-inline: var(--space-scaled-xxs, 4px);
  min-block-size: 10px;
  min-inline-size: 10px;
  color: var(--color-text-button-normal-default, #006ce0);
}
.table-body-cell--body-cell-editor-disabled {
  color: var(--color-text-disabled-inline-edit, #424650);
}
.table-body-cell--body-cell-editor:hover {
  color: var(--color-text-button-normal-hover, #002b66);
}
.table-body-cell--body-cell-editor:active {
  color: var(--color-text-button-normal-active, #002b66);
}
.table-body-cell--body-cell-editor-row {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  column-gap: var(--space-xxs, 4px);
}
.table-body-cell--body-cell-editor-row > :not(:last-child) {
  flex-grow: 1;
}
.table-body-cell--body-cell-editor-controls {
  flex-shrink: 0;
}
.table-body-cell--body-cell-editor-row-editor {
  max-inline-size: calc(100% - 6 * var(--space-xxs, 4px) - 2 * var(--size-icon-normal, 16px));
}
:host-context([data-awsui-focus-visible=true]) .table-body-cell--body-cell-editor-focusable:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .table-body-cell--body-cell-editor-focusable:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(-1px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .table-body-cell--body-cell-editor-focusable:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * -1px);
  inset-block-start: calc(-1 * -1px);
  inline-size: calc(100% + -1px + -1px);
  block-size: calc(100% + -1px + -1px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
:host-context([data-awsui-focus-visible=true]) .table-body-cell--body-cell-editor-focusable:focus.table-body-cell--sticky-cell {
  position: sticky;
}
.table-body-cell--body-cell-editor-icon {
  display: none;
}
.table-body-cell--body-cell.table-body-cell--body-cell-expandable {
  position: relative;
}
.table-body-cell--body-cell.table-body-cell--body-cell-expandable.table-body-cell--sticky-cell {
  position: sticky;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable {
  position: relative;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--sticky-cell {
  position: sticky;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active > .table-body-cell--body-cell-content {
  overflow: visible;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active > .table-body-cell--body-cell-content {
  padding-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-0 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 0 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-0 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + -1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-1 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 1 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-1 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 0 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-2 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 2 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-2 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 1 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-3 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 3 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-3 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 2 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-4 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 4 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-4 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 3 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-5 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 5 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-5 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 4 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-6 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 6 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-6 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 5 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-7 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 7 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-7 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 6 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-8 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 8 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-8 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 7 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-9 > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-9 > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px) + 8 * (var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-next > .table-body-cell--body-cell-content {
  padding-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2);
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) / 2 + 9 * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active.table-body-cell--expandable-level-next > .table-body-cell--expandable-toggle-wrapper {
  margin-inline-start: calc(calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px)) + (9 - 1) * calc(var(--space-m, 16px) + var(--space-xs, 8px)));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active > .table-body-cell--body-cell-content {
  padding-inline-end: calc(var(--space-xxs, 4px) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active > .table-body-cell--body-cell-content {
  padding-block-start: calc(var(--space-scaled-xxxs, 2px) - 1 * var(--border-divider-list-width, 1px) + 2px);
  margin-block-start: calc(-1 * 2px);
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable.table-body-cell--body-cell-edit-active > .table-body-cell--body-cell-content {
  padding-block-end: calc(calc(var(--space-scaled-xxxs, 2px) + 1px) - 1 * var(--border-divider-list-width, 1px) + 2px);
  margin-block-end: calc(-1 * 2px);
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--resizable-columns) > .table-body-cell--body-cell-content {
  padding-inline-end: calc(calc(var(--space-scaled-l, 20px) + var(--space-l, 20px)) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active) > .table-body-cell--body-cell-editor-wrapper, .table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active) > .table-body-cell--expandable-cell-content > .table-body-cell--body-cell-editor-wrapper {
  opacity: 0;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable):focus-within {
  position: relative;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable):focus-within {
  outline: 2px dotted transparent;
  outline-offset: calc(calc(-1 * var(--space-scaled-xxs, 4px)) - 1px);
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable):focus-within::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * calc(-1 * var(--space-scaled-xxs, 4px)));
  inset-block-start: calc(-1 * calc(-1 * var(--space-scaled-xxs, 4px)));
  inline-size: calc(100% + calc(-1 * var(--space-scaled-xxs, 4px)) + calc(-1 * var(--space-scaled-xxs, 4px)));
  block-size: calc(100% + calc(-1 * var(--space-scaled-xxs, 4px)) + calc(-1 * var(--space-scaled-xxs, 4px)));
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable):focus-within.table-body-cell--sticky-cell {
  position: sticky;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable):focus-within.table-body-cell--is-visual-refresh:first-child {
  position: relative;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable):focus-within.table-body-cell--is-visual-refresh:first-child {
  outline: 2px dotted transparent;
  outline-offset: calc(calc(1 * var(--space-scaled-xxs, 4px)) - 1px);
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable):focus-within.table-body-cell--is-visual-refresh:first-child::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * calc(1 * var(--space-scaled-xxs, 4px)));
  inset-block-start: calc(-1 * calc(-1 * var(--space-scaled-xxs, 4px)));
  inline-size: calc(100% + calc(1 * var(--space-scaled-xxs, 4px)) + calc(-1 * var(--space-scaled-xxs, 4px)));
  block-size: calc(100% + calc(-1 * var(--space-scaled-xxs, 4px)) + calc(-1 * var(--space-scaled-xxs, 4px)));
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):not(.table-body-cell--body-cell-expandable):focus-within.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell {
  position: sticky;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):focus-within:focus-within .table-body-cell--body-cell-editor-icon, .table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active).table-body-cell--body-cell-edit-disabled-popover .table-body-cell--body-cell-editor-icon {
  display: unset;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):focus-within:focus-within.table-body-cell--body-cell-has-success > .table-body-cell--body-cell-content, .table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active).table-body-cell--body-cell-edit-disabled-popover.table-body-cell--body-cell-has-success > .table-body-cell--body-cell-content {
  padding-inline-end: calc(calc(var(--space-scaled-l, 20px) + var(--space-l, 20px) + calc(var(--size-icon-normal, 16px) + var(--space-xs, 8px))) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):focus-within:focus-within > .table-body-cell--body-cell-content, .table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active).table-body-cell--body-cell-edit-disabled-popover > .table-body-cell--body-cell-content {
  padding-inline-end: calc(calc(var(--space-scaled-l, 20px) + var(--space-l, 20px)) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):focus-within:focus-within > .table-body-cell--body-cell-editor-wrapper, .table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):focus-within:focus-within > .table-body-cell--expandable-cell-content > .table-body-cell--body-cell-editor-wrapper, .table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active).table-body-cell--body-cell-edit-disabled-popover > .table-body-cell--body-cell-editor-wrapper, .table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active).table-body-cell--body-cell-edit-disabled-popover > .table-body-cell--expandable-cell-content > .table-body-cell--body-cell-editor-wrapper {
  opacity: 1;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):focus-within:focus-within > .table-body-cell--body-cell-success, .table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active).table-body-cell--body-cell-edit-disabled-popover > .table-body-cell--body-cell-success {
  opacity: 1;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):focus-within:focus-within.table-body-cell--sticky-cell, .table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active).table-body-cell--body-cell-edit-disabled-popover.table-body-cell--sticky-cell {
  position: sticky;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover {
  position: relative;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover .table-body-cell--body-cell-editor-icon {
  display: unset;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover:not(.table-body-cell--body-cell-expandable) {
  cursor: pointer;
  background-color: var(--color-background-dropdown-item-hover, #f3f3f7);
  border-block: var(--border-divider-list-width, 1px) solid var(--color-border-editable-cell-hover, #8c8c94);
  border-inline: var(--border-divider-list-width, 1px) solid var(--color-border-editable-cell-hover, #8c8c94);
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover.table-body-cell--sticky-cell {
  position: sticky;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover:first-child {
  inset-inline: 0;
  border-start-start-radius: var(--border-radius-item, 8px);
  border-end-start-radius: var(--border-radius-item, 8px);
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover:last-child {
  border-start-end-radius: var(--border-radius-item, 8px);
  border-end-end-radius: var(--border-radius-item, 8px);
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover > .table-body-cell--body-cell-editor-wrapper > .table-body-cell--body-cell-content, .table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover > .table-body-cell--expandable-cell-content > .table-body-cell--body-cell-editor-wrapper > .table-body-cell--body-cell-content {
  padding-inline-end: calc(calc(calc(var(--space-xs, 8px) + var(--space-xxs, 4px)) - 2 * var(--border-divider-list-width, 1px)) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover > .table-body-cell--body-cell-success > .table-body-cell--body-cell-content {
  padding-inline-end: calc(calc(calc(calc(var(--space-xs, 8px) + var(--space-xxs, 4px)) + calc(var(--size-icon-normal, 16px) + var(--space-xs, 8px))) - 2 * var(--border-divider-list-width, 1px)) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover.table-body-cell--body-cell-last-row.table-body-cell--body-cell-selected > .table-body-cell--body-cell-content, .table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover.table-body-cell--body-cell-next-selected > .table-body-cell--body-cell-content {
  padding-block: calc(calc(var(--space-scaled-xs, 8px) - var(--border-divider-list-width, 1px) / 2) - 1 * var(--border-divider-list-width, 1px) + 2px);
  margin-block: calc(-1 * 2px);
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover.table-body-cell--body-cell-last-row:not(.table-body-cell--body-cell-expandable):not(.table-body-cell--body-cell-selected) > .table-body-cell--body-cell-content {
  padding-block-start: calc(calc(var(--space-scaled-xs, 8px) - (var(--border-divider-list-width, 1px))) - 1 * var(--border-divider-list-width, 1px) + 2px);
  margin-block-start: calc(-1 * 2px);
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover.table-body-cell--body-cell-first-row:not(.table-body-cell--body-cell-expandable):not(.table-body-cell--body-cell-selected) > .table-body-cell--body-cell-content {
  padding-block: calc(calc(var(--space-scaled-xs, 8px) - (var(--border-divider-list-width, 1px))) - 1 * var(--border-divider-list-width, 1px) + 2px);
  margin-block: calc(-1 * 2px);
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover > .table-body-cell--body-cell-content {
  padding-inline-end: calc(calc(var(--space-scaled-l, 20px) + var(--space-l, 20px)) - 1 * var(--border-divider-list-width, 1px));
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover > .table-body-cell--body-cell-editor-wrapper, .table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover > .table-body-cell--expandable-cell-content > .table-body-cell--body-cell-editor-wrapper {
  opacity: 1;
}
.table-body-cell--body-cell.table-body-cell--body-cell-editable:not(.table-body-cell--body-cell-edit-active):hover:hover > .table-body-cell--body-cell-success {
  opacity: 1;
}
:host-context([data-awsui-focus-visible=true]) .table-body-cell--body-cell:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .table-body-cell--body-cell:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(calc(-1 * var(--space-scaled-xxs, 4px)) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .table-body-cell--body-cell:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * calc(-1 * var(--space-scaled-xxs, 4px)));
  inset-block-start: calc(-1 * calc(-1 * var(--space-scaled-xxs, 4px)));
  inline-size: calc(100% + calc(-1 * var(--space-scaled-xxs, 4px)) + calc(-1 * var(--space-scaled-xxs, 4px)));
  block-size: calc(100% + calc(-1 * var(--space-scaled-xxs, 4px)) + calc(-1 * var(--space-scaled-xxs, 4px)));
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
:host-context([data-awsui-focus-visible=true]) .table-body-cell--body-cell:focus.table-body-cell--sticky-cell {
  position: sticky;
}
:host-context([data-awsui-focus-visible=true]) .table-body-cell--body-cell:focus.table-body-cell--is-visual-refresh:first-child {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .table-body-cell--body-cell:focus.table-body-cell--is-visual-refresh:first-child {
  outline: 2px dotted transparent;
  outline-offset: calc(calc(1 * var(--space-scaled-xxs, 4px)) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .table-body-cell--body-cell:focus.table-body-cell--is-visual-refresh:first-child::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * calc(1 * var(--space-scaled-xxs, 4px)));
  inset-block-start: calc(-1 * calc(-1 * var(--space-scaled-xxs, 4px)));
  inline-size: calc(100% + calc(1 * var(--space-scaled-xxs, 4px)) + calc(-1 * var(--space-scaled-xxs, 4px)));
  block-size: calc(100% + calc(-1 * var(--space-scaled-xxs, 4px)) + calc(-1 * var(--space-scaled-xxs, 4px)));
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
:host-context([data-awsui-focus-visible=true]) .table-body-cell--body-cell:focus.table-body-cell--is-visual-refresh:first-child.table-body-cell--sticky-cell {
  position: sticky;
}
`;
