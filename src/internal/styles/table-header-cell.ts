// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const tableHeaderCellStyles = css`
.table-header-cell--header-cell {
  position: relative;
  text-align: start;
  box-sizing: border-box;
  border-block-end: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-divider-default-nr68jt, #c6c6cd);
  background: var(--color-background-table-header-hdjxos, #ffffff);
  color: var(--color-text-column-header-e6urd1, #424650);
  font-weight: var(--font-weight-heading-s-lcx0ai, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-inline: var(--space-scaled-xs-xwoogq, 8px);
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  inset-block-start: calc(-1 * calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  inline-size: calc(100% + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)) + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  block-size: calc(100% + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)) + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--header-cell-fake-focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--header-cell-fake-focus {
  outline: 2px dotted transparent;
  outline-offset: calc(calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--header-cell-fake-focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  inset-block-start: calc(-1 * calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  inline-size: calc(100% + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)) + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  block-size: calc(100% + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)) + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
.table-header-cell--header-cell-sticky {
  border-block-end: var(--border-table-sticky-width-ai31mi, 1px) solid var(--color-border-divider-default-nr68jt, #c6c6cd);
}
.table-header-cell--header-cell-stuck:not(.table-header-cell--header-cell-variant-full-page) {
  border-block-end-color: transparent;
}
.table-header-cell--header-cell-variant-full-page {
  background: var(--color-background-layout-main-5ilwcb, #ffffff);
}
.table-header-cell--header-cell-variant-full-page.table-header-cell--header-cell-hidden {
  border-block-end-color: transparent;
}
.table-header-cell--header-cell-variant-embedded.table-header-cell--is-visual-refresh:not(:is(.table-header-cell--header-cell-sticky, .table-header-cell--sticky-cell)), .table-header-cell--header-cell-variant-borderless.table-header-cell--is-visual-refresh:not(:is(.table-header-cell--header-cell-sticky, .table-header-cell--sticky-cell)) {
  background: none;
}
.table-header-cell--header-cell:last-child, .table-header-cell--header-cell.table-header-cell--header-cell-sortable {
  padding-inline-end: var(--space-xs-ymlm0b, 8px);
}
.table-header-cell--header-cell.table-header-cell--sticky-cell {
  position: sticky;
  background: var(--color-background-table-header-hdjxos, #ffffff);
  z-index: 798;
  transition-property: padding;
  transition-duration: var(--motion-duration-transition-show-quick-5jnnjz, 90ms);
  transition-timing-function: var(--motion-easing-sticky-tn072u, cubic-bezier(1, 0, 0.83, 1));
}
@media (prefers-reduced-motion: reduce) {
  .table-header-cell--header-cell.table-header-cell--sticky-cell {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .table-header-cell--header-cell.table-header-cell--sticky-cell, .awsui-mode-entering .table-header-cell--header-cell.table-header-cell--sticky-cell {
  animation: none;
  transition: none;
}
.table-header-cell--header-cell.table-header-cell--sticky-cell.table-header-cell--table-variant-full-page {
  background: var(--color-background-layout-main-5ilwcb, #ffffff);
}
.table-header-cell--header-cell.table-header-cell--sticky-cell-pad-left:not(.table-header-cell--has-selection) {
  padding-inline-start: var(--space-table-horizontal-suurzj, 20px);
}
.table-header-cell--header-cell.table-header-cell--sticky-cell-last-inline-start {
  box-shadow: var(--shadow-sticky-column-first-trcd2o, 4px 0px 8px 1px rgba(0, 7, 22, 0.1));
  clip-path: inset(0px -24px 0px 0px);

}
.table-header-cell--header-cell.table-header-cell--sticky-cell-last-inline-start > .table-header-cell--resize-divider {
  display: none;
}
.table-header-cell--header-cell.table-header-cell--sticky-cell-last-inline-start:dir(rtl) {
  box-shadow: var(--shadow-sticky-column-last-qgh697, -4px 0 8px 1px rgba(0, 28, 36, 0.1));
  clip-path: inset(0 0 0 -24px);
}
.table-header-cell--header-cell.table-header-cell--sticky-cell-last-inline-end {
  box-shadow: var(--shadow-sticky-column-last-qgh697, -4px 0 8px 1px rgba(0, 28, 36, 0.1));
  clip-path: inset(0 0 0 -24px);

}
.table-header-cell--header-cell.table-header-cell--sticky-cell-last-inline-end:dir(rtl) {
  box-shadow: var(--shadow-sticky-column-first-trcd2o, 4px 0px 8px 1px rgba(0, 7, 22, 0.1));
  clip-path: inset(0 -24px 0 0);
}

.table-header-cell--sorting-icon {
  position: absolute;
  inset-block-start: 50%;
  transform: translateY(-50%);
  inset-inline-end: var(--space-xxs-hwfkai, 4px);
  color: var(--color-text-column-sorting-icon-fngn77, #424650);
}

.table-header-cell--edit-icon {
  margin-inline-start: var(--space-xxs-hwfkai, 4px);
  margin-block-start: var(--space-scaled-xxs-pfm1nx, 4px);
  color: inherit;
}

.table-header-cell--header-cell-content {
  position: relative;
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-inline-end: var(--space-s-tvghoh, 12px);
  padding-inline-start: var(--space-s-tvghoh, 12px);
}
.table-header-cell--header-cell-content.table-header-cell--header-cell-content-expandable {
  padding-inline-start: calc(var(--space-s-tvghoh, 12px) + var(--space-m-dsumyt, 16px) + var(--space-xs-ymlm0b, 8px));
}
.table-header-cell--header-cell-sortable > .table-header-cell--header-cell-content {
  padding-inline-end: calc(var(--space-xl-jfy3x4, 24px) + var(--space-xxs-hwfkai, 4px));
}
.table-header-cell--header-cell-content:focus {
  outline: none;
  text-decoration: none;
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell-content:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell-content:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell-content:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  inset-block-start: calc(-1 * calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  inline-size: calc(100% + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)) + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  block-size: calc(100% + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)) + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell-content.table-header-cell--header-cell-fake-focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell-content.table-header-cell--header-cell-fake-focus {
  outline: 2px dotted transparent;
  outline-offset: calc(calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell-content.table-header-cell--header-cell-fake-focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  inset-block-start: calc(-1 * calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  inline-size: calc(100% + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)) + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  block-size: calc(100% + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)) + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
.table-header-cell--header-cell-disabled.table-header-cell--header-cell-sorted > .table-header-cell--header-cell-content > .table-header-cell--sorting-icon {
  color: var(--color-text-interactive-disabled-1bqmrl, #b4b4bb);
}

.table-header-cell--header-cell-sortable:not(.table-header-cell--header-cell-disabled) > .table-header-cell--header-cell-content {
  cursor: pointer;
}
.table-header-cell--header-cell-sortable:not(.table-header-cell--header-cell-disabled) > .table-header-cell--header-cell-content:hover, .table-header-cell--header-cell-sortable:not(.table-header-cell--header-cell-disabled).table-header-cell--header-cell-sorted > .table-header-cell--header-cell-content {
  color: var(--color-text-interactive-active-uoe6zi, #0f141a);
}
.table-header-cell--header-cell-sortable:not(.table-header-cell--header-cell-disabled) > .table-header-cell--header-cell-content:hover > .table-header-cell--sorting-icon, .table-header-cell--header-cell-sortable:not(.table-header-cell--header-cell-disabled).table-header-cell--header-cell-sorted > .table-header-cell--header-cell-content > .table-header-cell--sorting-icon {
  color: var(--color-text-interactive-active-uoe6zi, #0f141a);
}

.table-header-cell--header-cell-text {
  line-height: var(--line-height-heading-xs-q9j004, 18px);
  padding-block: calc(var(--space-xxxs-pajhad, 2px) / 2);
}
.table-header-cell--header-cell-text:not(.table-header-cell--header-cell-text-wrap) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/*
In Visual Refresh the first cell in the header should align
with the left edge of the table as closely as possible. If the
last header cell is sortable the sort icon should align with the
settings icon in the pagination slot.
*/
.table-header-cell--header-cell:not(.table-header-cell--is-visual-refresh):first-child {
  padding-inline-start: var(--space-xs-ymlm0b, 8px);
}
.table-header-cell--header-cell:not(.table-header-cell--is-visual-refresh):first-child.table-header-cell--header-cell-content-expandable {
  padding-inline-start: calc(var(--space-xs-ymlm0b, 8px) + var(--space-m-dsumyt, 16px) + var(--space-xs-ymlm0b, 8px));
}

.table-header-cell--header-cell.table-header-cell--is-visual-refresh {
  /*
    Striped rows requires additional left padding because the
    shaded background makes the child content appear too close
    to the table edge.
  */
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px) + var(--space-scaled-xxs-pfm1nx, 4px)) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px) + var(--space-scaled-xxs-pfm1nx, 4px)));
  inset-block-start: calc(-1 * calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  inline-size: calc(100% + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px) + var(--space-scaled-xxs-pfm1nx, 4px)) + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  block-size: calc(100% + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)) + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child.table-header-cell--header-cell-fake-focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child.table-header-cell--header-cell-fake-focus {
  outline: 2px dotted transparent;
  outline-offset: calc(calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px) + var(--space-scaled-xxs-pfm1nx, 4px)) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child.table-header-cell--header-cell-fake-focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px) + var(--space-scaled-xxs-pfm1nx, 4px)));
  inset-block-start: calc(-1 * calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  inline-size: calc(100% + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px) + var(--space-scaled-xxs-pfm1nx, 4px)) + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  block-size: calc(100% + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)) + calc(-1 * var(--space-scaled-xxs-pfm1nx, 4px)));
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
.table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child > .table-header-cell--header-cell-content {
  padding-inline-start: 0px;
}
.table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child > .table-header-cell--header-cell-content.table-header-cell--header-cell-content-expandable {
  padding-inline-start: calc(0px + var(--space-m-dsumyt, 16px) + var(--space-xs-ymlm0b, 8px));
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child > .table-header-cell--header-cell-content:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child > .table-header-cell--header-cell-content:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px) + var(--space-scaled-xxs-pfm1nx, 4px)) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child > .table-header-cell--header-cell-content:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px) + var(--space-scaled-xxs-pfm1nx, 4px)));
  inset-block-start: calc(-1 * calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  inline-size: calc(100% + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px) + var(--space-scaled-xxs-pfm1nx, 4px)) + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  block-size: calc(100% + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)) + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child > .table-header-cell--header-cell-content.table-header-cell--header-cell-fake-focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child > .table-header-cell--header-cell-content.table-header-cell--header-cell-fake-focus {
  outline: 2px dotted transparent;
  outline-offset: calc(calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px) + var(--space-scaled-xxs-pfm1nx, 4px)) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child > .table-header-cell--header-cell-content.table-header-cell--header-cell-fake-focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px) + var(--space-scaled-xxs-pfm1nx, 4px)));
  inset-block-start: calc(-1 * calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  inline-size: calc(100% + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px) + var(--space-scaled-xxs-pfm1nx, 4px)) + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  block-size: calc(100% + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)) + calc(-1 * var(--space-table-header-focus-outline-gutter-ymwujm, 0px)));
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
.table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child:not(.table-header-cell--has-striped-rows):not(.table-header-cell--sticky-cell-pad-inline-start) {
  padding-inline-start: var(--space-xxxs-pajhad, 2px);
}
.table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child:not(.table-header-cell--has-striped-rows):not(.table-header-cell--sticky-cell-pad-inline-start).table-header-cell--header-cell-content-expandable {
  padding-inline-start: calc(var(--space-xxxs-pajhad, 2px) + var(--space-m-dsumyt, 16px) + var(--space-xs-ymlm0b, 8px));
}
.table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child.table-header-cell--has-striped-rows:not(.table-header-cell--sticky-cell-pad-inline-start) {
  padding-inline-start: var(--space-xxs-hwfkai, 4px);
}
.table-header-cell--header-cell.table-header-cell--is-visual-refresh:first-child.table-header-cell--has-striped-rows:not(.table-header-cell--sticky-cell-pad-inline-start).table-header-cell--header-cell-content-expandable {
  padding-inline-start: calc(var(--space-xxs-hwfkai, 4px) + var(--space-m-dsumyt, 16px) + var(--space-xs-ymlm0b, 8px));
}
.table-header-cell--header-cell.table-header-cell--is-visual-refresh:last-child.table-header-cell--header-cell-sortable:not(.table-header-cell--header-cell-resizable) {
  padding-inline-end: var(--space-xxxs-pajhad, 2px);
}
.table-header-cell--header-cell.table-header-cell--is-visual-refresh.table-header-cell--sticky-cell-pad-inline-start {
  padding-inline-start: var(--space-scaled-l-sej05l, 20px);
}
.table-header-cell--header-cell.table-header-cell--is-visual-refresh.table-header-cell--sticky-cell-pad-inline-start.table-header-cell--header-cell-content-expandable {
  padding-inline-start: calc(var(--space-scaled-l-sej05l, 20px) + var(--space-m-dsumyt, 16px) + var(--space-xs-ymlm0b, 8px));
}
`;
