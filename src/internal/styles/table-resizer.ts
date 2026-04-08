// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const tableResizerStyles = css`
.table-resizer--resize-active:not(.table-resizer--resize-active-with-focus) * {
  cursor: col-resize;
  -webkit-user-select: none;
          user-select: none;
}

.table-resizer--resizer-wrapper {
  inset-block: 0;
  position: absolute;
  inset-inline-end: calc(-1 * var(--space-xl-jfy3x4, 24px) / 2);
  inline-size: var(--space-xl-jfy3x4, 24px);
  overflow: hidden;
  z-index: 10;
}
th:last-child > .table-resizer--resizer-wrapper:has(.table-resizer--divider-interactive).table-resizer--is-borderless {
  inset-inline-end: 0;
}

.table-resizer--resizer-button-wrapper {
  block-size: 100%;
}

th:not(:last-child) > .table-resizer--divider,
.table-resizer--divider-interactive {
  position: absolute;
  outline: none;
  pointer-events: none;
  inset-inline-end: 0;
  inset-block-end: 0;
  inset-block-start: 0;
  min-block-size: var(--line-height-heading-xs-q9j004, 18px);
  max-block-size: calc(100% - calc(2 * var(--space-xs-ymlm0b, 8px) + var(--space-xxxs-pajhad, 2px)));
  margin-block: auto;
  margin-inline: auto;
  border-inline-start: var(--border-item-width-miijiw, 2px) solid var(--color-border-divider-interactive-default-r928dz, #8c8c94);
  box-sizing: border-box;
}

th:not(:last-child) > .table-resizer--divider-disabled {
  border-inline-start-color: var(--color-border-divider-default-nr68jt, #c6c6cd);
}

.table-resizer--divider-interactive {
  inset-inline-end: calc(var(--space-xl-jfy3x4, 24px) / 2);
}

th:last-child > .table-resizer--resizer-wrapper.table-resizer--visual-refresh.table-resizer--is-borderless .table-resizer--divider-interactive {
  inset-inline-end: 0;
}

.table-resizer--divider-active {
  border-inline-start: 2px solid var(--color-border-divider-active-biq3j4, #0f141a);
}

.table-resizer--resizer {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  border-block: none;
  border-inline: none;
  background: none;
  inset-block: 0;
  cursor: col-resize;
  block-size: 100%;
  inline-size: var(--space-xl-jfy3x4, 24px);
}
.table-resizer--resizer:focus {
  outline: none;
  text-decoration: none;
}
.table-resizer--resize-active .table-resizer--resizer {
  pointer-events: none;
}
.table-resizer--resizer:hover + .table-resizer--divider {
  border-inline-start: 2px solid var(--color-border-divider-active-biq3j4, #0f141a);
}
:host-context([data-awsui-focus-visible=true]) .table-resizer--resizer.table-resizer--has-focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .table-resizer--resizer.table-resizer--has-focus {
  outline: 2px dotted transparent;
  outline-offset: calc(calc(var(--space-table-header-focus-outline-gutter-ymwujm, 0px) - 2px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .table-resizer--resizer.table-resizer--has-focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * calc(var(--space-table-header-focus-outline-gutter-ymwujm, 0px) - 2px));
  inset-block-start: calc(-1 * calc(var(--space-table-header-focus-outline-gutter-ymwujm, 0px) - 2px));
  inline-size: calc(100% + calc(var(--space-table-header-focus-outline-gutter-ymwujm, 0px) - 2px) + calc(var(--space-table-header-focus-outline-gutter-ymwujm, 0px) - 2px));
  block-size: calc(100% + calc(var(--space-table-header-focus-outline-gutter-ymwujm, 0px) - 2px) + calc(var(--space-table-header-focus-outline-gutter-ymwujm, 0px) - 2px));
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}

.table-resizer--tracker {
  display: none;
  position: absolute;
  border-inline-start: var(--border-divider-list-width-tdfx1x, 1px) dashed var(--color-border-divider-active-biq3j4, #0f141a);
  inline-size: 0;
  inset-block: 0;
}
.table-resizer--resize-active .table-resizer--tracker {
  display: block;
}
`;
