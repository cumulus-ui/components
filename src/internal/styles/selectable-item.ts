// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const selectableItemStyles = css`
.selectable-item--selectable-item {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  position: relative;
  list-style: none;
  z-index: 1;
  border-width: 0;
  background-color: var(--color-background-dropdown-item-default, #ffffff);
  color: var(--color-text-dropdown-item-default, #0f141a);
  padding-block: var(--border-item-width, 2px);
  padding-inline: var(--border-item-width, 2px);
  overflow: hidden;
  box-shadow: inset 0 var(--border-divider-list-width, 1px) 0 0 var(--color-border-dropdown-item-default, #c6c6cd), inset 0 calc(-1 * var(--border-divider-list-width, 1px)) 0 0 var(--color-border-dropdown-item-default, #c6c6cd);
}
.selectable-item--selectable-item.selectable-item--parent.selectable-item--interactiveGroups:not(.selectable-item--highlighted):not(.selectable-item--selected) {
  box-shadow: inset 0 var(--border-divider-list-width, 1px) 0 0 var(--color-border-dropdown-item-default, #c6c6cd), inset 0 calc(-1 * var(--border-divider-list-width, 1px)) 0 0 var(--color-border-dropdown-item-default, #c6c6cd);
}
.selectable-item--selectable-item > .selectable-item--selectable-item-content {
  padding-block: var(--space-xxs, 4px);
  padding-inline: var(--space-field-horizontal, 12px);
}
.selectable-item--selectable-item.selectable-item--pad-bottom {
  padding-block-end: var(--border-item-width, 2px);
  box-shadow: inset 0 var(--border-divider-list-width, 1px) 0 0 var(--color-border-dropdown-item-default, #c6c6cd);
}
.selectable-item--selectable-item.selectable-item--pad-bottom > .selectable-item--selectable-item-content {
  padding-block-end: calc(var(--space-xxs, 4px) + var(--space-xxxs, 2px));
}
.selectable-item--selectable-item:not(:first-child), .selectable-item--selectable-item.selectable-item--virtual {
  margin-block-start: calc(-1 * var(--border-item-width, 2px));
}
.selectable-item--selectable-item.selectable-item--has-background {
  background-color: var(--color-background-dropdown-item-hover, #f3f3f7);
}
.selectable-item--selectable-item.selectable-item--child {
  padding-inline-start: var(--border-item-width, 2px);
}
.selectable-item--selectable-item.selectable-item--child > .selectable-item--selectable-item-content {
  padding-inline-start: var(--space-xxl, 32px);
}
.selectable-item--selectable-item.selectable-item--disabled > .selectable-item--selectable-item-content {
  color: var(--color-text-dropdown-item-disabled, #b4b4bb);
}
.selectable-item--selectable-item.selectable-item--highlighted, .selectable-item--selectable-item.selectable-item--selected {
  color: var(--color-text-dropdown-item-highlighted, #0f141a);
  border-start-start-radius: var(--border-radius-item, 8px);
  border-start-end-radius: var(--border-radius-item, 8px);
  border-end-start-radius: var(--border-radius-item, 8px);
  border-end-end-radius: var(--border-radius-item, 8px);
}
.selectable-item--selectable-item.selectable-item--highlighted {
  z-index: 3;
  background-color: var(--color-background-dropdown-item-hover, #f3f3f7);
  box-shadow: inset 0 0 0 var(--border-item-width, 2px) var(--color-border-dropdown-item-hover, #8c8c94);
}
.selectable-item--selectable-item.selectable-item--highlighted.selectable-item--is-keyboard {
  box-shadow: inset 0 0 0 var(--border-item-width, 2px) var(--color-border-dropdown-item-focused, #424650);
}
.selectable-item--selectable-item.selectable-item--highlighted.selectable-item--disabled {
  box-shadow: inset 0 0 0 var(--border-item-width, 2px) var(--color-border-dropdown-item-dimmed-hover, #8c8c94);
  background-color: var(--color-background-dropdown-item-dimmed, transparent);
}
.selectable-item--selectable-item.selectable-item--highlighted.selectable-item--disabled > .selectable-item--selectable-item-content {
  color: var(--color-text-dropdown-item-dimmed, #b4b4bb);
}
.selectable-item--selectable-item.selectable-item--highlighted:not(.selectable-item--visual-refresh).selectable-item--is-keyboard {
  box-shadow: inset 0 0 0 var(--border-control-focus-ring-shadow-spread, 1px) var(--color-border-item-focused, #006ce0);
}
.selectable-item--selectable-item.selectable-item--selected {
  z-index: 2;
  background-color: var(--color-background-dropdown-item-selected, #f0fbff);
  box-shadow: inset 0 0 0 var(--border-item-width, 2px) var(--color-border-dropdown-item-selected, #006ce0);
}
.selectable-item--selectable-item.selectable-item--selected.selectable-item--highlighted {
  box-shadow: inset 0 0 0 var(--border-item-width, 2px) var(--color-border-dropdown-item-selected, #006ce0), inset 0 0 0 calc(2 * var(--border-item-width, 2px)) var(--color-border-dropdown-item-hover, #8c8c94);
}
.selectable-item--selectable-item.selectable-item--selected.selectable-item--highlighted.selectable-item--is-keyboard {
  box-shadow: inset 0 0 0 var(--border-item-width, 2px) var(--color-border-dropdown-item-selected, #006ce0), inset 0 0 0 calc(2 * var(--border-item-width, 2px)) var(--color-border-dropdown-item-focused, #424650);
}
.selectable-item--selectable-item.selectable-item--selected.selectable-item--next-item-selected {
  border-end-start-radius: 0;
  border-end-end-radius: 0;
}
.selectable-item--selectable-item.selectable-item--selected.selectable-item--highlighted:not(.selectable-item--visual-refresh) {
  box-shadow: inset 0 0 0 var(--border-item-width, 2px) var(--color-border-dropdown-item-hover, #8c8c94);
}
.selectable-item--selectable-item.selectable-item--selected.selectable-item--highlighted:not(.selectable-item--visual-refresh).selectable-item--is-keyboard {
  box-shadow: inset 0 0 0 var(--border-item-width, 2px) var(--color-border-dropdown-item-focused, #424650);
}
.selectable-item--selectable-item.selectable-item--selected + .selectable-item--selectable-item.selectable-item--selected, .selectable-item--selectable-item.selectable-item--selected.selectable-item--previous-item-selected {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
}
.selectable-item--selectable-item.selectable-item--parent:not(.selectable-item--disabled) > .selectable-item--selectable-item-content {
  color: var(--color-text-dropdown-group-label, #424650);
}
.selectable-item--selectable-item.selectable-item--parent:not(.selectable-item--interactiveGroups) {
  box-shadow: inset 0 var(--border-divider-list-width, 1px) 0 0 var(--color-border-dropdown-group, #c6c6cd), inset 0 calc(-1 * var(--border-divider-list-width, 1px)) 0 0 var(--color-border-dropdown-item-default, #c6c6cd);
  padding-block: 0;
  padding-inline: 0;
}
.selectable-item--selectable-item.selectable-item--parent:not(.selectable-item--interactiveGroups):not(:has(> .selectable-item--selectable-item-content)) {
  padding-block: var(--border-item-width, 2px);
  padding-inline: var(--border-item-width, 2px);
}
.selectable-item--selectable-item.selectable-item--parent:not(.selectable-item--interactiveGroups) > .selectable-item--selectable-item-content {
  padding-block: var(--space-xs, 8px);
  padding-inline: var(--space-xs, 8px);
  font-weight: bold;
}
.selectable-item--selectable-item.selectable-item--parent.selectable-item--interactiveGroups > .selectable-item--selectable-item-content {
  padding-block: var(--space-xs, 8px);
  padding-inline: var(--space-field-horizontal, 12px);
  font-weight: bold;
}
.selectable-item--selectable-item.selectable-item--parent.selectable-item--interactiveGroups.selectable-item--highlighted > .selectable-item--selectable-item-content {
  color: var(--color-text-dropdown-item-highlighted, #0f141a);
}
.selectable-item--selectable-item:not(.selectable-item--disabled):not(.selectable-item--parent), .selectable-item--selectable-item.selectable-item--interactiveGroups:not(.selectable-item--disabled) {
  cursor: pointer;
}
.selectable-item--selectable-item.selectable-item--sticky + .selectable-item--selectable-item:not(.selectable-item--sticky):not(.selectable-item--highlighted):not(.selectable-item--selected) {
  box-shadow: inset 0 calc(-1 * var(--border-divider-list-width, 1px)) 0 0 var(--color-border-dropdown-item-default, #c6c6cd);
}
.selectable-item--selectable-item.selectable-item--sticky {
  position: sticky;
  inset-block-start: 0;
  margin-block-end: var(--border-item-width, 2px);
  z-index: 4;
  padding-inline: var(--border-item-width, 2px);
}
.selectable-item--selectable-item.selectable-item--sticky.selectable-item--highlighted, .selectable-item--selectable-item.selectable-item--sticky.selectable-item--selected {
  padding-inline: var(--border-item-width, 2px);
}
.selectable-item--selectable-item.selectable-item--sticky > .selectable-item--selectable-item-content {
  padding-inline: var(--space-field-horizontal, 12px);
}
.selectable-item--selectable-item.selectable-item--sticky:not(.selectable-item--highlighted):not(.selectable-item--selected) {
  box-shadow: inset 0 var(--border-divider-list-width, 1px) 0 0 var(--color-border-dropdown-item-default, #c6c6cd), inset 0 calc(-1 * var(--border-divider-list-width, 1px)) 0 0 var(--color-border-dropdown-item-default, #c6c6cd), inset var(--border-width-popover, 2px) 0 0 0 var(--color-border-dropdown-container, #b4b4bb);
}
.selectable-item--selectable-item.selectable-item--sticky:not(.selectable-item--highlighted):not(.selectable-item--selected):not(.selectable-item--with-scrollbar) {
  box-shadow: inset 0 var(--border-divider-list-width, 1px) 0 0 var(--color-border-dropdown-item-default, #c6c6cd), inset 0 calc(-1 * var(--border-divider-list-width, 1px)) 0 0 var(--color-border-dropdown-item-default, #c6c6cd), inset var(--border-width-popover, 2px) 0 0 0 var(--color-border-dropdown-container, #b4b4bb), inset calc(-1 * var(--border-width-popover, 2px)) 0 0 0 var(--color-border-dropdown-container, #b4b4bb);
}
.selectable-item--selectable-item.selectable-item--sticky:not(.selectable-item--highlighted):not(.selectable-item--selected):not(.selectable-item--after-header) {
  border-start-start-radius: var(--border-radius-item, 8px);
}
.selectable-item--selectable-item.selectable-item--sticky:not(.selectable-item--highlighted):not(.selectable-item--selected):not(.selectable-item--after-header):not(.selectable-item--selectable-item.selectable-item--sticky:not(.selectable-item--highlighted):not(.selectable-item--selected):not(.selectable-item--after-header).selectable-item--with-scrollbar) {
  border-start-end-radius: var(--border-radius-item, 8px);
}
.selectable-item--selectable-item.selectable-item--sticky:not(.selectable-item--highlighted):not(.selectable-item--selected).selectable-item--after-header {
  box-shadow: inset 0 var(--border-divider-list-width, 1px) 0 0 var(--color-background-dropdown-item-default, #ffffff), inset 0 calc(-1 * var(--border-divider-list-width, 1px)) 0 0 var(--color-border-dropdown-item-default, #c6c6cd), inset var(--border-width-popover, 2px) 0 0 0 var(--color-border-dropdown-container, #b4b4bb);
}
.selectable-item--selectable-item.selectable-item--sticky:not(.selectable-item--highlighted):not(.selectable-item--selected).selectable-item--after-header:not(.selectable-item--with-scrollbar) {
  box-shadow: inset 0 var(--border-divider-list-width, 1px) 0 0 var(--color-background-dropdown-item-default, #ffffff), inset 0 calc(-1 * var(--border-divider-list-width, 1px)) 0 0 var(--color-border-dropdown-item-default, #c6c6cd), inset var(--border-width-popover, 2px) 0 0 0 var(--color-border-dropdown-container, #b4b4bb), inset calc(-1 * var(--border-width-popover, 2px)) 0 0 0 var(--color-border-dropdown-container, #b4b4bb);
}
.selectable-item--selectable-item.selectable-item--sticky.selectable-item--disabled.selectable-item--highlighted, .selectable-item--selectable-item.selectable-item--sticky.selectable-item--disabled.selectable-item--selected {
  box-shadow: none;
}
.selectable-item--selectable-item.selectable-item--virtual {
  position: absolute;
  inset-block-start: var(--border-dropdown-virtual-offset-width, 2px);
  inset-inline-start: 0;
  inline-size: 100%;
  box-sizing: border-box;
}
.selectable-item--selectable-item.selectable-item--virtual:first-of-type:not(.selectable-item--selected, .selectable-item--highlighted) {
  box-shadow: inset 0 var(--border-divider-list-width, 1px) 0 0 var(--color-border-dropdown-item-top, transparent), inset 0 calc(-1 * var(--border-divider-list-width, 1px)) 0 0 var(--color-border-dropdown-item-default, #c6c6cd);
}
.selectable-item--selectable-item.selectable-item--virtual.selectable-item--parent:not(.selectable-item--interactiveGroups) {
  box-shadow: inset 0 var(--border-divider-list-width, 1px) 0 0 var(--color-border-dropdown-group, #c6c6cd), inset 0 calc(-1 * var(--border-divider-list-width, 1px)) 0 0 var(--color-border-dropdown-item-default, #c6c6cd);
}

.selectable-item--measure-strut {
  position: absolute;
  pointer-events: none;
  block-size: 100%;
  inline-size: 100%;
  inset-block-start: 0;
  inset-inline-start: 0;
}
.selectable-item--selectable-item.selectable-item--virtual > .selectable-item--measure-strut {
  block-size: calc(100% - var(--border-item-width, 2px));
}

.selectable-item--screenreader-content {
  position: absolute !important;
  inset-block-start: -9999px !important;
  inset-inline-start: -9999px !important;
}
`;
