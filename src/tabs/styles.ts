// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.tabs-header {
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  display: flex;
  flex-wrap: wrap;
}

.tab-header-scroll-container {
  display: flex;
  flex-grow: 1;
  max-inline-size: 100%;
}

.tabs-header-list {
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  position: relative;
  inline-size: 100%;
  scroll-snap-type: inline proximity;
  scrollbar-width: none; /* Firefox */
}
.tabs-header-list::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.pagination-button {
  margin-block: var(--space-scaled-s, 12px);
  margin-inline: 0;
  padding-block: 0;
  padding-inline: var(--space-xxs, 4px);
  display: flex;
}
.pagination-button-left {
  border-inline-end: var(--border-divider-section-width, 1px) solid var(--color-border-control-disabled, #dedee3);
}
.pagination-button-left-scrollable {
  z-index: 1;
  box-shadow: 5px 0px 4px -3px var(--color-border-tabs-shadow, rgba(15, 20, 26, 0.12)), 1px 0px 0px 0px var(--color-border-tabs-shadow, rgba(15, 20, 26, 0.12));
}
.pagination-button-right {
  border-inline-start: var(--border-divider-section-width, 1px) solid var(--color-border-control-disabled, #dedee3);
}
.pagination-button-right-scrollable {
  z-index: 1;
  box-shadow: -5px 0px 4px -3px var(--color-border-tabs-shadow, rgba(15, 20, 26, 0.12)), -1px 0px 0px 0 var(--color-border-tabs-shadow, rgba(15, 20, 26, 0.12));
}

.actions-container {
  flex-shrink: 0;
  align-self: center;
  padding-block: var(--space-xs, 8px);
  padding-inline: var(--space-xs, 8px);
  margin-inline-start: auto;
}

.tabs-tab {
  list-style: none;
  padding-block: 0;
  padding-inline: 0;
  flex-shrink: 0;
  display: flex;
  max-inline-size: calc(90% - var(--space-l, 20px));
  scroll-snap-align: start;
}

.tabs-tab-label {
  display: flex;
  align-items: center;
  padding-inline: var(--space-xs, 8px);
  padding-block: var(--space-scaled-2x-xxs, 4px);
  text-align: start;
  position: relative;
  min-inline-size: 0;
  word-break: break-word;
}

.tabs-tab-header-container {
  position: relative;
  border-block: var(--border-divider-section-width, 1px) solid transparent;
  border-inline: var(--border-divider-section-width, 1px) solid transparent;
  padding-inline: var(--space-xs, 8px);
  display: flex;
  align-items: stretch;
}
.tabs-tab-header-container > .tabs-tab-dismiss, .tabs-tab-header-container > .tabs-tab-action {
  position: relative;
  display: flex;
  align-items: center;
}
.tabs-tab-header-container.refresh > span:first-of-type {
  margin-inline-start: calc(-1 * var(--space-scaled-xs, 8px));
}

.tabs-tab-header-container:not(.tabs-tab-disabled):after {
  content: "";
  position: absolute;
  inset-inline-start: 0;
  inline-size: calc(100% - 1px);
  inset-block-end: calc(-1 * var(--border-divider-section-width, 1px));
  block-size: var(--awsui-style-tabs-active-indicator-width, var(--border-active-width, 4px));
  border-start-start-radius: var(--awsui-style-tabs-active-indicator-border-radius, var(--border-radius-tabs-focus-ring, 20px));
  border-start-end-radius: var(--awsui-style-tabs-active-indicator-border-radius, var(--border-radius-tabs-focus-ring, 20px));
  border-end-start-radius: var(--awsui-style-tabs-active-indicator-border-radius, var(--border-radius-tabs-focus-ring, 20px));
  border-end-end-radius: var(--awsui-style-tabs-active-indicator-border-radius, var(--border-radius-tabs-focus-ring, 20px));
  background: var(--awsui-style-tabs-active-indicator-color, var(--color-border-tabs-underline, #006ce0));
  opacity: 0;
}
.tabs-tab-header-container:not(.tabs-tab-disabled).refresh:after {
  transition: opacity var(--motion-duration-refresh-only-medium, 165ms) var(--motion-easing-refresh-only-c, cubic-bezier(0.84, 0, 0.16, 1));
}
@media (prefers-reduced-motion: reduce) {
  .tabs-tab-header-container:not(.tabs-tab-disabled).refresh:after {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .tabs-tab-header-container:not(.tabs-tab-disabled).refresh:after, .awsui-mode-entering .tabs-tab-header-container:not(.tabs-tab-disabled).refresh:after {
  animation: none;
  transition: none;
}

.tabs-tab:not(:last-child) > .tabs-tab-header-container {
  margin-inline-end: calc(-1 * var(--border-divider-section-width, 1px));
}
.tabs-tab:not(:last-child) > .tabs-tab-header-container:before {
  content: "";
  position: absolute;
  border-inline-end: var(--awsui-style-tabs-separator-width, var(--border-divider-section-width, 1px)) solid var(--awsui-style-tabs-separator-color, var(--color-border-tabs-divider, #c6c6cd));
  inset: var(--space-scaled-s, 12px) 0;
  opacity: 1;
}
.tabs-tab:not(:last-child) > .tabs-tab-header-container.refresh:before {
  inset: calc(var(--space-static-s, 12px) - var(--border-active-width, 4px)) 0;
}

.tabs-tab-link {
  position: relative;
  display: flex;
  align-items: stretch;
  text-decoration: none;
  cursor: pointer;
  padding-block-start: calc(var(--space-scaled-s, 12px) - 2px);
  padding-block-end: calc(var(--space-scaled-s, 12px) - 1px);
  padding-inline: 0;
  margin-block-start: 1px;
  border-block: var(--border-divider-section-width, 1px) solid var(--awsui-style-border-color-default, transparent);
  border-inline: var(--border-divider-section-width, 1px) solid var(--awsui-style-border-color-default, transparent);
  font-size: var(--font-tabs-size, 16px);
  line-height: var(--font-tabs-line-height, 20px);
  font-weight: var(--font-wayfinding-link-active-weight, 700);
  color: var(--awsui-style-color-default, var(--color-text-interactive-default, #424650));
  background-color: var(--awsui-style-background-default, transparent);
  padding-inline-start: calc(var(--space-xxs, 4px) - 1px);
  padding-inline-end: var(--space-xxs, 4px);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.tabs-tab-link.refresh {
  padding-block-start: calc(var(--space-static-xs, 8px) - 1px);
  padding-block-end: calc(var(--space-static-xs, 8px) - 1px);
  margin-block-start: 0;
}
.tabs-tab-link:hover {
  color: var(--awsui-style-color-hover, var(--color-text-accent, #006ce0));
  border-color: var(--awsui-style-border-color-hover, var(--awsui-style-border-color-default, transparent));
  background-color: var(--awsui-style-background-hover, var(--awsui-style-background-default, transparent));
}
.tabs-tab-link:focus {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .tabs-tab-link:focus {
  --awsui-style-focus-ring-box-shadow: 0 0 0 var(--awsui-style-focus-ring-border-width, 2px) var(--awsui-style-focus-ring-border-color, var(--color-border-item-focused, #006ce0));
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .tabs-tab-link:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-tabs-focus-outline-gutter, -8px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .tabs-tab-link:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-tabs-focus-outline-gutter, -8px));
  inset-block-start: calc(-1 * var(--space-tabs-focus-outline-gutter, -8px));
  inline-size: calc(100% + var(--space-tabs-focus-outline-gutter, -8px) + var(--space-tabs-focus-outline-gutter, -8px));
  block-size: calc(100% + var(--space-tabs-focus-outline-gutter, -8px) + var(--space-tabs-focus-outline-gutter, -8px));
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow);
  z-index: 1;
}

.tabs-tab:first-child {
  margin-inline-start: 1px;
  scroll-margin-inline-start: 1px;
}
.tabs-tab:first-child > .tabs-tab-header-container {
  padding-inline-start: calc(var(--space-xs, 8px) - 1px);
}

.tabs-tab:last-child {
  margin-inline-end: 1px;
  scroll-margin-inline-end: 1px;
}
.tabs-tab:last-child > .tabs-tab-header-container {
  padding-inline-end: calc(var(--space-xs, 8px) - 1px);
}

.tabs-tab-disabled, .tabs-tab-disabled:hover {
  cursor: default;
  color: var(--awsui-style-color-disabled, var(--color-text-interactive-disabled, #b4b4bb));
  border-color: var(--awsui-style-border-color-disabled, transparent);
  background-color: var(--awsui-style-background-disabled, transparent);
  font-weight: var(--font-tabs-disabled-weight, 700);
}

.tabs-tab-active:not(.tabs-tab-disabled) {
  color: var(--awsui-style-color-active, var(--color-text-accent, #006ce0));
  border-color: var(--awsui-style-border-color-active, transparent);
  background-color: var(--awsui-style-background-active, transparent);
}
.tabs-tab-active:not(.tabs-tab-disabled):after {
  opacity: 1;
}

.tabs-header-with-divider {
  border-block-end: var(--border-divider-section-width, 1px) solid var(--color-border-tabs-divider, #c6c6cd);
}

.tabs-tab-focusable {
  /* used to manage focusable logic */
}

.root {
  /* used in test-utils or tests */
}

.tabs {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: block;
  inline-size: 100%;
}

.tabs-content {
  display: none;
}

.fit-height {
  display: flex;
  flex-direction: column;
  block-size: 100%;
}

.tabs-content-active {
  display: block;
  flex: 1;
}
:host-context([data-awsui-focus-visible=true]) .tabs-content-active:focus {
  outline: 2px dotted transparent;
  outline-offset: 2px;
  border-start-start-radius: var(--border-radius-container, 16px);
  border-start-end-radius: var(--border-radius-container, 16px);
  border-end-start-radius: var(--border-radius-container, 16px);
  border-end-end-radius: var(--border-radius-container, 16px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}

.tabs-content-wrapper.with-paddings > .tabs-content {
  padding-block: var(--space-scaled-m, 16px);
  padding-inline: 0;
}
.fit-height > .tabs-content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.fit-height > .tabs-content-wrapper > .tabs-container-content-wrapper {
  block-size: 100%;
  display: flex;
  flex-direction: column;
}
.tabs-container-content-wrapper.with-paddings > .tabs-content {
  padding-block-start: var(--space-tabs-content-top, 12px);
  padding-block-end: var(--space-scaled-l, 20px);
  padding-inline: var(--space-container-horizontal, 20px);
}

.disabled-reason-tooltip {
  /* used in test-utils or tests */
}

.tabs-tab-focused {
  /* used to manage focusable state for disabled with reason tabs */
}
`;

export { componentStyles as tabsStyles };
export { sharedStyles };
