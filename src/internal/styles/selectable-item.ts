// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
import { css } from 'lit';

export const selectableItemStyles = css`
.selectable-item {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  position: relative;
  list-style: none;
  z-index: 1;
  border-width: 0;
  background-color: var(--color-background-dropdown-item-default-qmc033, #ffffff);
  color: var(--color-text-dropdown-item-default-f1jr9u, #0f141a);
  padding-block: var(--border-item-width-miijiw, 2px);
  padding-inline: var(--border-item-width-miijiw, 2px);
  overflow: hidden;
  box-shadow: inset 0 var(--border-divider-list-width-tdfx1x, 1px) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd), inset 0 calc(-1 * var(--border-divider-list-width-tdfx1x, 1px)) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd);
}
.selectable-item.parent.interactiveGroups:not(.highlighted):not(.selected) {
  box-shadow: inset 0 var(--border-divider-list-width-tdfx1x, 1px) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd), inset 0 calc(-1 * var(--border-divider-list-width-tdfx1x, 1px)) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd);
}
.selectable-item > .selectable-item-content {
  padding-block: var(--space-xxs-hwfkai, 4px);
  padding-inline: var(--space-field-horizontal-0aq2ch, 12px);
}
.selectable-item.pad-bottom {
  padding-block-end: var(--border-item-width-miijiw, 2px);
  box-shadow: inset 0 var(--border-divider-list-width-tdfx1x, 1px) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd);
}
.selectable-item.pad-bottom > .selectable-item-content {
  padding-block-end: calc(var(--space-xxs-hwfkai, 4px) + var(--space-xxxs-pajhad, 2px));
}
.selectable-item:not(:first-child), .selectable-item.virtual {
  margin-block-start: calc(-1 * var(--border-item-width-miijiw, 2px));
}
.selectable-item.has-background {
  background-color: var(--color-background-dropdown-item-hover-yunepc, #f3f3f7);
}
.selectable-item.child {
  padding-inline-start: var(--border-item-width-miijiw, 2px);
}
.selectable-item.child > .selectable-item-content {
  padding-inline-start: var(--space-xxl-32srm4, 32px);
}
.selectable-item.disabled > .selectable-item-content {
  color: var(--color-text-dropdown-item-disabled-8m65hf, #b4b4bb);
}
.selectable-item.highlighted, .selectable-item.selected {
  color: var(--color-text-dropdown-item-highlighted-yr1px8, #0f141a);
  border-start-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-start-end-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-end-radius: var(--border-radius-item-iwaia5, 8px);
}
.selectable-item.highlighted {
  z-index: 3;
  background-color: var(--color-background-dropdown-item-hover-yunepc, #f3f3f7);
  box-shadow: inset 0 0 0 var(--border-item-width-miijiw, 2px) var(--color-border-dropdown-item-hover-aqfuxq, #8c8c94);
}
.selectable-item.highlighted.is-keyboard {
  box-shadow: inset 0 0 0 var(--border-item-width-miijiw, 2px) var(--color-border-dropdown-item-focused-zacqlp, #424650);
}
.selectable-item.highlighted.disabled {
  box-shadow: inset 0 0 0 var(--border-item-width-miijiw, 2px) var(--color-border-dropdown-item-dimmed-hover-ga9sch, #8c8c94);
  background-color: var(--color-background-dropdown-item-dimmed-dhho03, transparent);
}
.selectable-item.highlighted.disabled > .selectable-item-content {
  color: var(--color-text-dropdown-item-dimmed-tq8vh3, #b4b4bb);
}
.selectable-item.highlighted:not(.visual-refresh).is-keyboard {
  box-shadow: inset 0 0 0 var(--border-control-focus-ring-shadow-spread-9mjajk, 1px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.selectable-item.selected {
  z-index: 2;
  background-color: var(--color-background-dropdown-item-selected-f3v6te, #f0fbff);
  box-shadow: inset 0 0 0 var(--border-item-width-miijiw, 2px) var(--color-border-dropdown-item-selected-dl2ezh, #006ce0);
}
.selectable-item.selected.highlighted {
  box-shadow: inset 0 0 0 var(--border-item-width-miijiw, 2px) var(--color-border-dropdown-item-selected-dl2ezh, #006ce0), inset 0 0 0 calc(2 * var(--border-item-width-miijiw, 2px)) var(--color-border-dropdown-item-hover-aqfuxq, #8c8c94);
}
.selectable-item.selected.highlighted.is-keyboard {
  box-shadow: inset 0 0 0 var(--border-item-width-miijiw, 2px) var(--color-border-dropdown-item-selected-dl2ezh, #006ce0), inset 0 0 0 calc(2 * var(--border-item-width-miijiw, 2px)) var(--color-border-dropdown-item-focused-zacqlp, #424650);
}
.selectable-item.selected.next-item-selected {
  border-end-start-radius: 0;
  border-end-end-radius: 0;
}
.selectable-item.selected.highlighted:not(.visual-refresh) {
  box-shadow: inset 0 0 0 var(--border-item-width-miijiw, 2px) var(--color-border-dropdown-item-hover-aqfuxq, #8c8c94);
}
.selectable-item.selected.highlighted:not(.visual-refresh).is-keyboard {
  box-shadow: inset 0 0 0 var(--border-item-width-miijiw, 2px) var(--color-border-dropdown-item-focused-zacqlp, #424650);
}
.selectable-item.selected + .selectable-item.selected, .selectable-item.selected.previous-item-selected {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
}
.selectable-item.parent:not(.disabled) > .selectable-item-content {
  color: var(--color-text-dropdown-group-label-2tmyik, #424650);
}
.selectable-item.parent:not(.interactiveGroups) {
  box-shadow: inset 0 var(--border-divider-list-width-tdfx1x, 1px) 0 0 var(--color-border-dropdown-group-ylcnh8, #c6c6cd), inset 0 calc(-1 * var(--border-divider-list-width-tdfx1x, 1px)) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd);
  padding-block: 0;
  padding-inline: 0;
}
.selectable-item.parent:not(.interactiveGroups):not(:has(> .selectable-item-content)) {
  padding-block: var(--border-item-width-miijiw, 2px);
  padding-inline: var(--border-item-width-miijiw, 2px);
}
.selectable-item.parent:not(.interactiveGroups) > .selectable-item-content {
  padding-block: var(--space-xs-ymlm0b, 8px);
  padding-inline: var(--space-xs-ymlm0b, 8px);
  font-weight: bold;
}
.selectable-item.parent.interactiveGroups > .selectable-item-content {
  padding-block: var(--space-xs-ymlm0b, 8px);
  padding-inline: var(--space-field-horizontal-0aq2ch, 12px);
  font-weight: bold;
}
.selectable-item.parent.interactiveGroups.highlighted > .selectable-item-content {
  color: var(--color-text-dropdown-item-highlighted-yr1px8, #0f141a);
}
.selectable-item:not(.disabled):not(.parent), .selectable-item.interactiveGroups:not(.disabled) {
  cursor: pointer;
}
.selectable-item.sticky + .selectable-item:not(.sticky):not(.highlighted):not(.selected) {
  box-shadow: inset 0 calc(-1 * var(--border-divider-list-width-tdfx1x, 1px)) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd);
}
.selectable-item.sticky {
  position: sticky;
  inset-block-start: 0;
  margin-block-end: var(--border-item-width-miijiw, 2px);
  z-index: 4;
  padding-inline: var(--border-item-width-miijiw, 2px);
}
.selectable-item.sticky.highlighted, .selectable-item.sticky.selected {
  padding-inline: var(--border-item-width-miijiw, 2px);
}
.selectable-item.sticky > .selectable-item-content {
  padding-inline: var(--space-field-horizontal-0aq2ch, 12px);
}
.selectable-item.sticky:not(.highlighted):not(.selected) {
  box-shadow: inset 0 var(--border-divider-list-width-tdfx1x, 1px) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd), inset 0 calc(-1 * var(--border-divider-list-width-tdfx1x, 1px)) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd), inset var(--border-width-popover-nflirh, 2px) 0 0 0 var(--color-border-dropdown-container-cmthq7, #b4b4bb);
}
.selectable-item.sticky:not(.highlighted):not(.selected):not(.with-scrollbar) {
  box-shadow: inset 0 var(--border-divider-list-width-tdfx1x, 1px) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd), inset 0 calc(-1 * var(--border-divider-list-width-tdfx1x, 1px)) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd), inset var(--border-width-popover-nflirh, 2px) 0 0 0 var(--color-border-dropdown-container-cmthq7, #b4b4bb), inset calc(-1 * var(--border-width-popover-nflirh, 2px)) 0 0 0 var(--color-border-dropdown-container-cmthq7, #b4b4bb);
}
.selectable-item.sticky:not(.highlighted):not(.selected):not(.after-header) {
  border-start-start-radius: var(--border-radius-item-iwaia5, 8px);
}
.selectable-item.sticky:not(.highlighted):not(.selected):not(.after-header):not(.selectable-item.sticky:not(.highlighted):not(.selected):not(.after-header).with-scrollbar) {
  border-start-end-radius: var(--border-radius-item-iwaia5, 8px);
}
.selectable-item.sticky:not(.highlighted):not(.selected).after-header {
  box-shadow: inset 0 var(--border-divider-list-width-tdfx1x, 1px) 0 0 var(--color-background-dropdown-item-default-qmc033, #ffffff), inset 0 calc(-1 * var(--border-divider-list-width-tdfx1x, 1px)) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd), inset var(--border-width-popover-nflirh, 2px) 0 0 0 var(--color-border-dropdown-container-cmthq7, #b4b4bb);
}
.selectable-item.sticky:not(.highlighted):not(.selected).after-header:not(.with-scrollbar) {
  box-shadow: inset 0 var(--border-divider-list-width-tdfx1x, 1px) 0 0 var(--color-background-dropdown-item-default-qmc033, #ffffff), inset 0 calc(-1 * var(--border-divider-list-width-tdfx1x, 1px)) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd), inset var(--border-width-popover-nflirh, 2px) 0 0 0 var(--color-border-dropdown-container-cmthq7, #b4b4bb), inset calc(-1 * var(--border-width-popover-nflirh, 2px)) 0 0 0 var(--color-border-dropdown-container-cmthq7, #b4b4bb);
}
.selectable-item.sticky.disabled.highlighted, .selectable-item.sticky.disabled.selected {
  box-shadow: none;
}
.selectable-item.virtual {
  position: absolute;
  inset-block-start: var(--border-dropdown-virtual-offset-width-3wp954, 2px);
  inset-inline-start: 0;
  inline-size: 100%;
  box-sizing: border-box;
}
.selectable-item.virtual:first-of-type:not(.selected, .highlighted) {
  box-shadow: inset 0 var(--border-divider-list-width-tdfx1x, 1px) 0 0 var(--color-border-dropdown-item-top-gp2d1p, transparent), inset 0 calc(-1 * var(--border-divider-list-width-tdfx1x, 1px)) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd);
}
.selectable-item.virtual.parent:not(.interactiveGroups) {
  box-shadow: inset 0 var(--border-divider-list-width-tdfx1x, 1px) 0 0 var(--color-border-dropdown-group-ylcnh8, #c6c6cd), inset 0 calc(-1 * var(--border-divider-list-width-tdfx1x, 1px)) 0 0 var(--color-border-dropdown-item-default-kape37, #c6c6cd);
}

.measure-strut {
  position: absolute;
  pointer-events: none;
  block-size: 100%;
  inline-size: 100%;
  inset-block-start: 0;
  inset-inline-start: 0;
}
.selectable-item.virtual > .measure-strut {
  block-size: calc(100% - var(--border-item-width-miijiw, 2px));
}

.screenreader-content {
  position: absolute !important;
  inset-block-start: -9999px !important;
  inset-inline-start: -9999px !important;
}
`;
