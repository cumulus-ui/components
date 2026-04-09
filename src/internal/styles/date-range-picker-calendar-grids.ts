// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const dateRangePickerCalendarGridsStyles = css`
.date-range-picker-calendar-grids--grid {
  inline-size: var(--size-calendar-grid-width, 238px);
  border-spacing: 0;
}

.date-range-picker-calendar-grids--grid-cell {
  inline-size: 14.2857142857%;
  word-break: break-word;
  text-align: center;
  font-weight: unset;
}

.date-range-picker-calendar-grids--day-header {
  padding-block-start: var(--space-s, 12px);
  padding-block-end: var(--space-xxs, 4px);
  padding-inline: 0;
  color: var(--color-text-calendar-month, #656871);
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
}

.date-range-picker-calendar-grids--day,
.date-range-picker-calendar-grids--month {
  border-block-end: 1px solid var(--color-border-calendar-grid, transparent);
  border-inline-end: 1px solid var(--color-border-calendar-grid, transparent);
  padding-block: var(--space-xxs, 4px);
  padding-inline: 0;
  color: var(--color-text-dropdown-item-disabled, #b4b4bb);
  position: relative;
}
.date-range-picker-calendar-grids--day:focus,
.date-range-picker-calendar-grids--month:focus {
  outline: none;
}
.date-range-picker-calendar-grids--day::after,
.date-range-picker-calendar-grids--month::after {
  content: "";
  position: absolute;
  z-index: 1;
  inset-block-start: calc(-1 * var(--border-item-width, 2px));
  inset-block-end: -1px;
  inset-inline-start: -1px;
  inset-inline-end: calc(-1 * var(--border-item-width, 2px));
  background-color: transparent;
}
:host-context([data-awsui-focus-visible=true]) .date-range-picker-calendar-grids--day:focus,
:host-context([data-awsui-focus-visible=true]) .date-range-picker-calendar-grids--month:focus {
  z-index: 2;
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .date-range-picker-calendar-grids--day:focus,
:host-context([data-awsui-focus-visible=true]) .date-range-picker-calendar-grids--month:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-calendar-grid-focus-outline-gutter, -5px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .date-range-picker-calendar-grids--day:focus::before,
:host-context([data-awsui-focus-visible=true]) .date-range-picker-calendar-grids--month:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-calendar-grid-focus-outline-gutter, -5px));
  inset-block-start: calc(-1 * var(--space-calendar-grid-focus-outline-gutter, -5px));
  inline-size: calc(100% + var(--space-calendar-grid-focus-outline-gutter, -5px) + var(--space-calendar-grid-focus-outline-gutter, -5px));
  block-size: calc(100% + var(--space-calendar-grid-focus-outline-gutter, -5px) + var(--space-calendar-grid-focus-outline-gutter, -5px));
  border-start-start-radius: var(--border-radius-calendar-day-focus-ring, 3px);
  border-start-end-radius: var(--border-radius-calendar-day-focus-ring, 3px);
  border-end-start-radius: var(--border-radius-calendar-day-focus-ring, 3px);
  border-end-end-radius: var(--border-radius-calendar-day-focus-ring, 3px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
.date-range-picker-calendar-grids--day > .date-range-picker-calendar-grids--day-inner,
.date-range-picker-calendar-grids--day > .date-range-picker-calendar-grids--month-inner,
.date-range-picker-calendar-grids--month > .date-range-picker-calendar-grids--day-inner,
.date-range-picker-calendar-grids--month > .date-range-picker-calendar-grids--month-inner {
  position: relative;
  z-index: 1;
}

.date-range-picker-calendar-grids--in-first-row:not(.date-range-picker-calendar-grids--in-previous-month),
.date-range-picker-calendar-grids--in-first-row:not(.date-range-picker-calendar-grids--in-previous-year) {
  border-block-start: 1px solid var(--color-border-calendar-grid, transparent);
}

.date-range-picker-calendar-grids--in-previous-month:not(.date-range-picker-calendar-grids--last-day-of-month),
.date-range-picker-calendar-grids--in-previous-year:not(.date-range-picker-calendar-grids--last-month-of-year) {
  border-inline-end-color: transparent;
}

.date-range-picker-calendar-grids--in-next-month,
.date-range-picker-calendar-grids--in-next-year {
  border-color: transparent;
}

.date-range-picker-calendar-grids--in-first-column {
  border-inline-start: 1px solid 1px solid var(--color-border-calendar-grid, transparent);
}
.date-range-picker-calendar-grids--in-first-column.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-month, .date-range-picker-calendar-grids--in-first-column.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-year {
  border-inline-start: 1px solid var(--color-border-calendar-grid, transparent);
}

.date-range-picker-calendar-grids--enabled {
  cursor: pointer;
}
.date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-month, .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-year {
  color: var(--color-text-dropdown-item-default, #0f141a);
}
.date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-month:not(.date-range-picker-calendar-grids--in-range), .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-month:not(.date-range-picker-calendar-grids--in-range)::after, .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-month.date-range-picker-calendar-grids--end-date.date-range-picker-calendar-grids--start-date, .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-month.date-range-picker-calendar-grids--end-date.date-range-picker-calendar-grids--start-date::after, .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-month.date-range-picker-calendar-grids--no-range, .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-month.date-range-picker-calendar-grids--no-range::after, .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-year:not(.date-range-picker-calendar-grids--in-range), .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-year:not(.date-range-picker-calendar-grids--in-range)::after, .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-year.date-range-picker-calendar-grids--end-date.date-range-picker-calendar-grids--start-date, .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-year.date-range-picker-calendar-grids--end-date.date-range-picker-calendar-grids--start-date::after, .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-year.date-range-picker-calendar-grids--no-range, .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-year.date-range-picker-calendar-grids--no-range::after {
  border-start-start-radius: var(--border-radius-item, 8px);
  border-start-end-radius: var(--border-radius-item, 8px);
  border-end-start-radius: var(--border-radius-item, 8px);
  border-end-end-radius: var(--border-radius-item, 8px);
}
.date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-month:hover, .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-year:hover {
  color: var(--color-text-calendar-date-hover, #0f141a);
  background-color: var(--color-background-dropdown-item-hover, #f3f3f7);
}
.date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-month:hover:not(.date-range-picker-calendar-grids--selected)::after, .date-range-picker-calendar-grids--enabled.date-range-picker-calendar-grids--in-visible-calendar.date-range-picker-calendar-grids--in-current-year:hover:not(.date-range-picker-calendar-grids--selected)::after {
  border-block: var(--border-item-width, 2px) solid var(--color-border-dropdown-item-hover, #8c8c94);
  border-inline: var(--border-item-width, 2px) solid var(--color-border-dropdown-item-hover, #8c8c94);
}

.date-range-picker-calendar-grids--today:not(.date-range-picker-calendar-grids--in-range),
.date-range-picker-calendar-grids--this-month:not(.date-range-picker-calendar-grids--in-range) {
  background-color: var(--color-background-calendar-current-date, #f3f3f7);
  border-start-start-radius: var(--border-radius-item, 8px);
  border-start-end-radius: var(--border-radius-item, 8px);
  border-end-start-radius: var(--border-radius-item, 8px);
  border-end-end-radius: var(--border-radius-item, 8px);
  font-weight: 700;
}

.date-range-picker-calendar-grids--selected {
  border-color: transparent;
  position: relative;
  z-index: 2;
  font-weight: 700;
}
:host-context([data-awsui-focus-visible=true]) .date-range-picker-calendar-grids--selected:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .date-range-picker-calendar-grids--selected:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-calendar-grid-selected-focus-outline-gutter, -5px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .date-range-picker-calendar-grids--selected:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-calendar-grid-selected-focus-outline-gutter, -5px));
  inset-block-start: calc(-1 * var(--space-calendar-grid-selected-focus-outline-gutter, -5px));
  inline-size: calc(100% + var(--space-calendar-grid-selected-focus-outline-gutter, -5px) + var(--space-calendar-grid-selected-focus-outline-gutter, -5px));
  block-size: calc(100% + var(--space-calendar-grid-selected-focus-outline-gutter, -5px) + var(--space-calendar-grid-selected-focus-outline-gutter, -5px));
  border-start-start-radius: var(--border-radius-calendar-day-focus-ring, 3px);
  border-start-end-radius: var(--border-radius-calendar-day-focus-ring, 3px);
  border-end-start-radius: var(--border-radius-calendar-day-focus-ring, 3px);
  border-end-end-radius: var(--border-radius-calendar-day-focus-ring, 3px);
  box-shadow: 0 0 0 2px var(--color-border-calendar-grid-selected-focus-ring, #f9f9fa);
}
:host-context([data-awsui-focus-visible=true]) .date-range-picker-calendar-grids--selected:focus::before {
  z-index: 1;
}
.date-range-picker-calendar-grids--selected::after {
  background-color: var(--color-background-control-checked, #006ce0);
  border-block: var(--border-item-width, 2px) solid var(--color-background-control-checked, #006ce0);
  border-inline: var(--border-item-width, 2px) solid var(--color-background-control-checked, #006ce0);
  z-index: 0;
}
.date-range-picker-calendar-grids--selected > .date-range-picker-calendar-grids--day-inner,
.date-range-picker-calendar-grids--selected > .date-range-picker-calendar-grids--month-inner {
  color: var(--color-background-control-default, #ffffff);
  position: relative;
  z-index: 2;
}

.date-range-picker-calendar-grids--in-range {
  background-color: var(--color-background-dropdown-item-selected, #f0fbff);
  font-weight: 700;
}
.date-range-picker-calendar-grids--in-range.date-range-picker-calendar-grids--in-range-border-block-start::after {
  border-block-start: var(--border-item-width, 2px) solid var(--color-background-control-checked, #006ce0);
}
.date-range-picker-calendar-grids--in-range.date-range-picker-calendar-grids--in-range-border-inline-end::after {
  border-inline-end: var(--border-item-width, 2px) solid var(--color-background-control-checked, #006ce0);
}
.date-range-picker-calendar-grids--in-range.date-range-picker-calendar-grids--in-range-border-block-end::after {
  border-block-end: var(--border-item-width, 2px) solid var(--color-background-control-checked, #006ce0);
}
.date-range-picker-calendar-grids--in-range.date-range-picker-calendar-grids--in-range-border-inline-start::after {
  border-inline-start: var(--border-item-width, 2px) solid var(--color-background-control-checked, #006ce0);
}
.date-range-picker-calendar-grids--in-range.date-range-picker-calendar-grids--in-range-border-block-start.date-range-picker-calendar-grids--in-range-border-inline-end, .date-range-picker-calendar-grids--in-range.date-range-picker-calendar-grids--in-range-border-block-start.date-range-picker-calendar-grids--in-range-border-inline-end::after {
  border-start-end-radius: var(--border-radius-item, 8px);
}
.date-range-picker-calendar-grids--in-range.date-range-picker-calendar-grids--in-range-border-block-end.date-range-picker-calendar-grids--in-range-border-inline-end, .date-range-picker-calendar-grids--in-range.date-range-picker-calendar-grids--in-range-border-block-end.date-range-picker-calendar-grids--in-range-border-inline-end::after {
  border-end-end-radius: var(--border-radius-item, 8px);
}
.date-range-picker-calendar-grids--in-range.date-range-picker-calendar-grids--in-range-border-block-end.date-range-picker-calendar-grids--in-range-border-inline-start, .date-range-picker-calendar-grids--in-range.date-range-picker-calendar-grids--in-range-border-block-end.date-range-picker-calendar-grids--in-range-border-inline-start::after {
  border-end-start-radius: var(--border-radius-item, 8px);
}
.date-range-picker-calendar-grids--in-range.date-range-picker-calendar-grids--in-range-border-block-start.date-range-picker-calendar-grids--in-range-border-inline-start, .date-range-picker-calendar-grids--in-range.date-range-picker-calendar-grids--in-range-border-block-start.date-range-picker-calendar-grids--in-range-border-inline-start::after {
  border-start-start-radius: var(--border-radius-item, 8px);
}

.date-range-picker-calendar-grids--no-range, .date-range-picker-calendar-grids--no-range::after {
  border-start-start-radius: var(--border-radius-item, 8px);
}
.date-range-picker-calendar-grids--no-range, .date-range-picker-calendar-grids--no-range::after {
  border-start-end-radius: var(--border-radius-item, 8px);
}
.date-range-picker-calendar-grids--no-range, .date-range-picker-calendar-grids--no-range::after {
  border-end-start-radius: var(--border-radius-item, 8px);
}
.date-range-picker-calendar-grids--no-range, .date-range-picker-calendar-grids--no-range::after {
  border-end-end-radius: var(--border-radius-item, 8px);
}
`;
