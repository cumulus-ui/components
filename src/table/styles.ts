// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  inline-size: 100%;
}

.tools {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: var(--space-scaled-xs, 8px) var(--space-l, 20px);
  padding-block-start: var(--space-scaled-xs, 8px);
  padding-block-end: var(--space-table-header-tools-bottom, 0px);
  padding-inline: 0;
}
.tools-filtering {
  max-inline-size: 100%;
}
@supports (flex-basis: fit-content) {
  .tools-filtering {
    flex: 1 1 fit-content;
  }
}
@supports not (flex-basis: fit-content) {
  .tools-filtering {
    flex: 1 1 auto;
  }
}
.tools-align-right {
  display: flex;
  margin-inline-start: auto;
}
.tools-pagination + .tools-preferences {
  border-inline-start: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
  box-sizing: border-box;
  margin-inline-start: var(--space-xs, 8px);
  padding-inline-start: var(--space-xs, 8px);
}
.tools-small > .tools-filtering {
  flex-basis: 100%;
}

.table {
  inline-size: 100%;
  border-spacing: 0;
  position: relative;
  box-sizing: border-box;
}
.table-layout-fixed {
  table-layout: fixed;
}

.wrapper {
  position: relative;
  box-sizing: border-box;
  inline-size: 100%;
  overflow-x: auto;
  scrollbar-width: none; /* Hide scrollbar in Firefox */
}
.wrapper.variant-stacked > .table, .wrapper.variant-stacked > .wrapper-content-measure, .wrapper.variant-container > .table, .wrapper.variant-container > .wrapper-content-measure {
  padding-inline: var(--space-table-horizontal, 20px);
}
.wrapper.variant-stacked:not(.has-footer), .wrapper.variant-container:not(.has-footer) {
  padding-block-end: var(--space-table-content-bottom, 4px);
}
.wrapper:not(.has-header) {
  border-start-end-radius: var(--border-radius-container, 16px);
  border-start-start-radius: var(--border-radius-container, 16px);
}
.wrapper::-webkit-scrollbar {
  display: none; /* Hide scrollbar in Safari and Chrome */
}
:host-context([data-awsui-focus-visible=true]) .wrapper:focus {
  outline: 2px dotted transparent;
  outline-offset: 2px;
  border-start-start-radius: var(--border-radius-container, 16px);
  border-start-end-radius: var(--border-radius-container, 16px);
  border-end-start-radius: var(--border-radius-container, 16px);
  border-end-end-radius: var(--border-radius-container, 16px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}

.cell-merged {
  text-align: center;
  padding-block: 0;
  padding-inline: 0;
}
.cell-merged.has-footer {
  /*
  Add a bottom border to the body cell of an empty table as a separator between the
  table and the footer
  */
  border-block-end: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
}
.cell-merged-content {
  box-sizing: border-box;
  inline-size: 100%;
  padding-block-start: var(--space-scaled-m, 16px);
  padding-block-end: var(--space-scaled-l, 20px);
  padding-inline: var(--space-l, 20px);
}
@supports (position: sticky) {
  .cell-merged-content {
    position: sticky;
    inset-inline-start: 0;
    margin-block: 0;
    margin-inline: calc(-2 * var(--space-table-horizontal, 20px));
  }
}

.empty {
  color: var(--color-text-empty, #656871);
}

/*
The min/max/width token values in Visual Refresh should align
the table header and body cells selection control with the table
filter search icon.
*/
.selection-control {
  box-sizing: border-box;
  max-inline-size: var(--size-table-selection-horizontal, 40px);
  min-inline-size: var(--size-table-selection-horizontal, 40px);
  position: relative;
  inline-size: var(--size-table-selection-horizontal, 40px);
}
.selection-control.selection-control-header {
  padding-block: var(--space-scaled-xs, 8px);
  padding-inline: var(--space-scaled-l, 20px);
  border-inline-start: var(--border-item-width, 2px) solid transparent;
}

.header-secondary {
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  box-sizing: border-box;
  inline-size: 100%;
  border-start-start-radius: 0;
  border-start-end-radius: 0;
  border-end-start-radius: 0;
  border-end-end-radius: 0;
  background: var(--color-background-table-header, #ffffff);
}
.header-secondary.variant-full-page {
  background: var(--color-background-layout-main, #ffffff);
}
.header-secondary.variant-stacked > .table, .header-secondary.variant-container > .table {
  padding-inline: var(--space-table-horizontal, 20px);
}
.header-secondary.variant-stacked:not(.table-has-header), .header-secondary.variant-container:not(.table-has-header) {
  border-start-start-radius: var(--border-radius-container, 16px);
  border-start-end-radius: var(--border-radius-container, 16px);
}
.header-secondary::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.header-secondary.table-has-header {
  border-block-start: var(--border-divider-list-width, 1px) solid var(--color-border-container-divider, transparent);
}

.header-controls {
  padding-block: var(--space-container-header-top, 12px) var(--space-container-header-bottom, 8px);
}
.header-controls.variant-full-page {
  padding-block: 0 calc(var(--space-container-header-bottom, 8px) + var(--space-table-header-tools-full-page-bottom, 4px));
}
.header-controls.variant-stacked, .header-controls.variant-container {
  padding-inline: calc(var(--space-table-horizontal, 20px) + var(--space-table-header-horizontal, 0px));
}
.header-controls.variant-embedded, .header-controls.variant-borderless {
  padding-inline: var(--space-table-header-horizontal, 0px);
  padding-block-start: var(--space-table-embedded-header-top, 0px);
}

.footer-wrapper.variant-stacked, .footer-wrapper.variant-container {
  padding-inline: var(--space-table-horizontal, 20px);
}

.footer {
  padding-block: var(--space-scaled-s, 12px);
  padding-inline: var(--space-table-footer-horizontal, 0px);
}
.footer-with-pagination {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-scaled-s, 12px);
}
.footer-pagination {
  margin-inline-start: auto;
}
`;

export { componentStyles as tableStyles };
export { sharedStyles };
