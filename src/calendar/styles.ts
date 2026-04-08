// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.calendar {
  animation: awsui_awsui-motion-fade-in-0_1ykar_1p0hg_1 var(--motion-duration-show-quick-tyvnyw, 135ms) var(--motion-easing-show-quick-9hlj8q, ease-out);
  animation-fill-mode: both;
}
@keyframes awsui_awsui-motion-fade-in-0_1ykar_1p0hg_1 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .calendar {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .calendar, .awsui-mode-entering .calendar {
  animation: none;
  transition: none;
}

.calendar {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: block;
  inline-size: var(--size-calendar-grid-width-hv3136, 238px);
  overflow: auto;
}
.calendar-inner {
  margin-block: var(--space-xs-ymlm0b, 8px);
  margin-inline: var(--space-xs-ymlm0b, 8px);
}
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.calendar-header-title {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  font-weight: 700;
  color: var(--color-text-dropdown-item-default-f1jr9u, #0f141a);
  margin-block: 0;
  margin-inline: 0;
}
.calendar-next-btn {
  /* used for identifying element */
}
.calendar-prev-btn {
  /* used for identifying element */
}
.calendar-grid {
  inline-size: 100%;
  table-layout: fixed;
}
.calendar-grid:not(.calendar-grid-dense) {
  border-spacing: var(--space-calendar-grid-gutter-zojo6r, 6px);
  padding-block: var(--space-xs-ymlm0b, 8px);
  padding-inline: var(--space-xs-ymlm0b, 8px);
}
.calendar-grid-dense {
  border-spacing: 0;
}
.calendar-grid-cell {
  word-break: break-word;
  text-align: center;
  font-weight: unset;
}
.calendar-date-header {
  padding-block-start: var(--space-s-tvghoh, 12px);
  padding-block-end: var(--space-xxs-hwfkai, 4px);
  padding-inline: 0;
  color: var(--color-text-calendar-month-ea0e93, #656871);
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
}
.calendar-date {
  border-block-end: 1px solid var(--color-border-calendar-grid-67r4w4, transparent);
  border-inline-end: 1px solid var(--color-border-calendar-grid-67r4w4, transparent);
  padding-block: var(--space-xxs-hwfkai, 4px);
  padding-inline: 0;
  color: var(--color-text-dropdown-item-disabled-8m65hf, #b4b4bb);
  position: relative;
}
.calendar-date:first-child {
  border-inline-start: 1px solid var(--color-border-calendar-grid-67r4w4, transparent);
}
.calendar-date-enabled {
  cursor: pointer;
  color: var(--color-text-dropdown-item-secondary-v12lfh, #656871);
}
.calendar-date-enabled::after {
  border-start-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-start-end-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-end-radius: var(--border-radius-item-iwaia5, 8px);
}
.calendar-date-enabled.calendar-date-current-page {
  color: var(--color-text-dropdown-item-default-f1jr9u, #0f141a);
}
.calendar-date-enabled.calendar-date-current-page:hover {
  border-start-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-start-end-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-end-radius: var(--border-radius-item-iwaia5, 8px);
  color: var(--color-text-calendar-date-hover-3fcriv, #0f141a);
  background-color: var(--color-background-dropdown-item-hover-yunepc, #f3f3f7);
}
.calendar-date-enabled.calendar-date-current-page:hover:not(.calendar-date-selected)::after {
  border-block: var(--border-item-width-miijiw, 2px) solid var(--color-border-dropdown-item-hover-aqfuxq, #8c8c94);
  border-inline: var(--border-item-width-miijiw, 2px) solid var(--color-border-dropdown-item-hover-aqfuxq, #8c8c94);
}
.calendar-date-current {
  border-start-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-start-end-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-end-radius: var(--border-radius-item-iwaia5, 8px);
  background-color: var(--color-background-calendar-current-date-sk0f6i, #f3f3f7);
  font-weight: 700;
}
.calendar-date::after {
  content: "";
  position: absolute;
  z-index: 1;
  background-color: transparent;
  inset-block-start: calc(-1 * var(--border-item-width-miijiw, 2px));
  inset-inline-start: calc(-1 * var(--border-item-width-miijiw, 2px));
  inset-inline-end: calc(-1 * var(--border-item-width-miijiw, 2px));
}
.calendar-date:not(.calendar-date-dense)::after {
  inset-block-end: calc(-1 * var(--border-item-width-miijiw, 2px));
  inset-inline-start: calc(-1 * var(--border-item-width-miijiw, 2px));
}
.calendar-date-dense::after {
  inset-block-end: -1px;
  inset-inline-start: -1px;
}
.calendar-date > .date-inner {
  position: relative;
  z-index: 1;
}
.calendar-date:focus {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .calendar-date:focus:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .calendar-date:focus:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .calendar-date:focus:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px));
  inset-block-start: calc(-1 * var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px));
  inline-size: calc(100% + var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px) + var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px));
  block-size: calc(100% + var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px) + var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px));
  border-start-start-radius: var(--border-radius-calendar-day-focus-ring-xvvbuc, 3px);
  border-start-end-radius: var(--border-radius-calendar-day-focus-ring-xvvbuc, 3px);
  border-end-start-radius: var(--border-radius-calendar-day-focus-ring-xvvbuc, 3px);
  border-end-end-radius: var(--border-radius-calendar-day-focus-ring-xvvbuc, 3px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
:host-context([data-awsui-focus-visible=true]) .calendar-date:focus:focus::before {
  z-index: 2;
}
.calendar-date-selected {
  border-color: transparent;
  position: relative;
  z-index: 2;
  font-weight: 700;
}
:host-context([data-awsui-focus-visible=true]) .calendar-date-selected:focus:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .calendar-date-selected:focus:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .calendar-date-selected:focus:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px));
  inset-block-start: calc(-1 * var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px));
  inline-size: calc(100% + var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px) + var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px));
  block-size: calc(100% + var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px) + var(--space-calendar-grid-focus-outline-gutter-vvh43m, -5px));
  border-start-start-radius: var(--border-radius-calendar-day-focus-ring-xvvbuc, 3px);
  border-start-end-radius: var(--border-radius-calendar-day-focus-ring-xvvbuc, 3px);
  border-end-start-radius: var(--border-radius-calendar-day-focus-ring-xvvbuc, 3px);
  border-end-end-radius: var(--border-radius-calendar-day-focus-ring-xvvbuc, 3px);
  box-shadow: 0 0 0 2px var(--color-border-calendar-grid-selected-focus-ring-jk1fb0, #f9f9fa);
}
:host-context([data-awsui-focus-visible=true]) .calendar-date-selected:focus:focus::before {
  z-index: 2;
}
.calendar-date-selected::after {
  border-start-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-start-end-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-end-radius: var(--border-radius-item-iwaia5, 8px);
  background-color: var(--color-background-control-checked-ka7kc2, #006ce0);
  border-block: var(--border-item-width-miijiw, 2px) solid var(--color-background-control-checked-ka7kc2, #006ce0);
  border-inline: var(--border-item-width-miijiw, 2px) solid var(--color-background-control-checked-ka7kc2, #006ce0);
}
.calendar-date-selected > .date-inner {
  z-index: 2;
  color: var(--color-background-control-default-4jb21l, #ffffff);
  position: relative;
}
.calendar-row:first-child > .calendar-date {
  border-block-start: 1px solid var(--color-border-calendar-grid-67r4w4, transparent);
}

.disabled-reason-tooltip {
  /* used in test-utils or tests */
}
`;

export { componentStyles as calendarStyles };
export { sharedStyles };
