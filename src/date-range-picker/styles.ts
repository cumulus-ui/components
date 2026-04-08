// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.calendar {
  animation: awsui_awsui-motion-fade-in-0_mgja0_1ueys_1 var(--motion-duration-show-quick-tyvnyw, 135ms) var(--motion-easing-show-quick-9hlj8q, ease-out);
  animation-fill-mode: both;
}
@keyframes awsui_awsui-motion-fade-in-0_mgja0_1ueys_1 {
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

.root {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
.root:not(.wide) {
  max-inline-size: 32em;
}
.root.wide {
  max-inline-size: 39em;
}

.focus-lock {
  display: contents;
}

.trigger-flexbox {
  display: flex;
}

.calendar-container {
  inline-size: calc(2 * var(--size-calendar-grid-width-hv3136, 238px) + var(--space-xs-ymlm0b, 8px));
}
.calendar-container.one-grid {
  inline-size: var(--size-calendar-grid-width-hv3136, 238px);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.calendar-header-pages-wrapper {
  position: absolute;
  inset: 0;
  margin-block: 0;
  margin-inline: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  pointer-events: none;
}
.calendar-header-page {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  font-weight: 700;
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  display: flex;
  pointer-events: auto;
}

.date-and-time-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--size-calendar-grid-width-hv3136, 238px), 1fr));
  gap: var(--space-xs-ymlm0b, 8px);
}

.date-and-time-wrapper {
  inline-size: var(--size-calendar-grid-width-hv3136, 238px);
  display: grid;
  gap: var(--space-xs-ymlm0b, 8px);
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
}

.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  border-block-start: 1px solid var(--color-border-dropdown-item-default-kape37, #c6c6cd);
  padding-block-start: 0;
  padding-block-end: var(--space-s-tvghoh, 12px);
  padding-inline: var(--space-l-2ud1p3, 20px);
}
.footer.has-clear-button {
  justify-content: space-between;
}
.footer.one-grid {
  padding-block-start: 0;
  padding-block-end: var(--space-s-tvghoh, 12px);
  padding-inline: var(--space-xs-ymlm0b, 8px);
}

.footer-button-wrapper {
  padding-block-start: var(--space-s-tvghoh, 12px);
}
.footer-button-wrapper:last-child {
  margin-inline-start: auto;
}

.icon-wrapper {
  color: var(--color-text-interactive-default-ugh9wp, #424650);
  margin-inline-end: var(--space-xs-ymlm0b, 8px);
}

.label {
  cursor: default;
}

.label.label-enabled:hover > .trigger-flexbox > .icon-wrapper {
  color: var(--color-text-interactive-hover-6naf7i, #0f141a);
}

.label-text {
  color: var(--color-text-input-placeholder-dclg8u, #656871);
  font-style: italic;
}

.label-token-nowrap {
  white-space: nowrap;
}

.dropdown {
  overflow: auto;
  border-block-start: 1px solid var(--color-border-container-top-k3vmoz, transparent);
  border-block-end: 1px solid var(--color-border-container-top-k3vmoz, transparent);
  border-start-start-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  border-start-end-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  border-end-start-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  border-end-end-radius: var(--border-radius-dropdown-fgc2a1, 8px);
}
.dropdown:focus {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .dropdown:focus {
  outline: 2px dotted transparent;
  outline-offset: 2px;
  border-start-start-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  border-start-end-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  border-end-start-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  border-end-end-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}

.dropdown-content {
  background-color: var(--color-background-container-content-6u8rvp, #ffffff);
  inline-size: calc(2 * var(--size-calendar-grid-width-hv3136, 238px) + var(--space-xs-ymlm0b, 8px) + 2 * var(--space-l-2ud1p3, 20px));
}
.dropdown-content.one-grid {
  inline-size: calc(var(--size-calendar-grid-width-hv3136, 238px) + 2 * var(--space-l-2ud1p3, 20px));
}
`;

export { componentStyles as dateRangePickerStyles };
export { sharedStyles };
