// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.arrow {
  inline-size: 20px;
  block-size: 10px;
}
.arrow-outer, .arrow-inner {
  position: absolute;
  overflow: hidden;
  inline-size: 20px;
  block-size: 10px;
  inset-block-start: 0;
  inset-inline-start: 0;

}
.arrow-outer::after, .arrow-inner::after {
  content: "";
  box-sizing: border-box;
  display: inline-block;
  position: absolute;
  border-start-start-radius: 2px;
  border-start-end-radius: 0;
  border-end-start-radius: 0;
  border-end-end-radius: 0;
  inset-block-end: 0;
  inset-inline-start: 0;
  inline-size: 14px;
  block-size: 14px;
  transform: rotate(45deg);
  transform-origin: 0 100%;
}
.arrow-outer:dir(rtl)::after, .arrow-inner:dir(rtl)::after {
  transform: rotate(-45deg);
  transform-origin: 100% 100%;
}
.arrow-outer::after {
  background-color: var(--color-border-popover, #b4b4bb);
}
.arrow-inner {
  inset-block-start: calc(var(--border-width-popover, 2px) + 1px);
}
.arrow-inner::after {
  border-start-start-radius: 1px;
  border-start-end-radius: 0;
  border-end-start-radius: 0;
  border-end-end-radius: 0;
  background-color: var(--color-background-popover, #ffffff);
}
.arrow-position-right-top > .arrow-outer::after, .arrow-position-right-bottom > .arrow-outer::after {
  box-shadow: -0.71px 0.71px 4px -2px var(--color-shadow-default, rgba(15, 20, 26, 0.12));
}
.arrow-position-left-top > .arrow-outer::after, .arrow-position-left-bottom > .arrow-outer::after {
  box-shadow: 0.71px -0.71px 4px -2px var(--color-shadow-default, rgba(15, 20, 26, 0.12));
}
.arrow-position-top-center > .arrow-outer::after, .arrow-position-top-right > .arrow-outer::after, .arrow-position-top-left > .arrow-outer::after, .arrow-position-top-responsive > .arrow-outer::after {
  box-shadow: -0.71px -0.71px 4px -2px var(--color-shadow-default, rgba(15, 20, 26, 0.12));
}
.arrow-position-bottom-center > .arrow-outer::after, .arrow-position-bottom-right > .arrow-outer::after, .arrow-position-bottom-left > .arrow-outer::after, .arrow-position-bottom-responsive > .arrow-outer::after {
  box-shadow: 0.71px 0.71px 4px -2px var(--color-shadow-default, rgba(15, 20, 26, 0.12));
}

.arrow-variant-info > .arrow-outer::after {
  background-color: var(--color-border-status-info, #006ce0);
}
.arrow-variant-info > .arrow-inner::after {
  background-color: var(--color-background-status-info, #f0fbff);
}

.body {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  word-wrap: break-word;
  max-inline-size: 100%;
  overflow: hidden;
  padding-block: var(--space-s, 12px);
  padding-inline: var(--space-m, 16px);
}
.body-overflow-visible {
  overflow: visible;
}
.body-variant-chart {
  padding-block: var(--space-static-s, 12px);
  padding-inline: var(--space-static-s, 12px);
}

.has-dismiss {
  display: flex;
  align-items: baseline;
}

.dismiss {
  margin-block: calc(-1 * var(--space-xs, 8px));
  margin-inline-start: 0;
  margin-inline-end: calc(-1 * (var(--space-xxs, 4px) + var(--border-width-popover, 2px)));
  flex: 0 0 auto;
  order: 1;
}

.header-row {
  margin-block-end: var(--space-xs, 8px);
}

.header {
  word-wrap: break-word;
  max-inline-size: 100%;
  overflow: hidden;
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-xs, 14px);
  line-height: var(--line-height-heading-xs, 18px);
  letter-spacing: var(--letter-spacing-heading-xs, normal);
  font-weight: var(--font-weight-heading-xs, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  flex: 1 1 auto;

}
.header > h2 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-xs, 14px);
  line-height: var(--line-height-heading-xs, 18px);
  letter-spacing: var(--letter-spacing-heading-xs, normal);
  font-weight: var(--font-weight-heading-xs, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  display: inline;
}

.content {
  word-wrap: break-word;
  max-inline-size: 100%;
  overflow: hidden;
  word-break: normal;
  color: var(--color-text-body-secondary, #424650);
  flex: 1 1 auto;
  min-inline-size: 0;
}
.content-overflow-visible {
  overflow: visible;
}

.container {
  display: inline-block;
  position: fixed;
  inset-block-start: -9999px;
  inset-inline-start: -9999px;
  z-index: 2000;
}
.container::before {
  content: "";
  position: absolute;
}
.container:has(.container-arrow-position-bottom-left)::before, .container:has(.container-arrow-position-bottom-center)::before, .container:has(.container-arrow-position-bottom-right)::before {
  inset-inline: 0;
  inset-block-start: -10px;
  block-size: 10px;
}
.container:has(.container-arrow-position-top-left)::before, .container:has(.container-arrow-position-top-center)::before, .container:has(.container-arrow-position-top-right)::before {
  inset-inline: 0;
  inset-block-end: -10px;
  block-size: 10px;
}
.container:has(.container-arrow-position-right-top)::before, .container:has(.container-arrow-position-right-bottom)::before {
  inset-block: 0;
  inset-inline-start: -10px;
  inline-size: 10px;
}
.container:has(.container-arrow-position-left-top)::before, .container:has(.container-arrow-position-left-bottom)::before {
  inset-block: 0;
  inset-inline-end: -10px;
  inline-size: 10px;
}

.container-body {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  border-start-start-radius: var(--border-radius-popover, 8px);
  border-start-end-radius: var(--border-radius-popover, 8px);
  border-end-start-radius: var(--border-radius-popover, 8px);
  border-end-end-radius: var(--border-radius-popover, 8px);
  background-color: var(--color-background-popover, #ffffff);
  box-shadow: var(--shadow-popover, 0px 4px 20px 1px rgba(0, 7, 22, 0.1));
  border-block: var(--border-width-popover, 2px) solid var(--color-border-popover, #b4b4bb);
  border-inline: var(--border-width-popover, 2px) solid var(--color-border-popover, #b4b4bb);
}

.container-body-variant-annotation {
  background-color: var(--color-background-status-info, #f0fbff);
  border-color: var(--color-border-status-info, #006ce0);
}

.container-body-size-small {
  max-inline-size: 210px;
}
.container-body-size-small.fixed-width {
  inline-size: 210px;
}

.container-body-size-medium {
  max-inline-size: 310px;
}
.container-body-size-medium.fixed-width {
  inline-size: 310px;
}

.container-body-size-large {
  max-inline-size: 482px;
}
@media (max-width: 482px) {
  .container-body-size-large {
    max-inline-size: 310px;
  }
}
.container-body-size-large.fixed-width {
  inline-size: 482px;
}

.container-arrow {
  position: absolute;
  display: inline-block;
}
.container-arrow-position-right-top, .container-arrow-position-right-bottom {
  transform: rotate(-90deg);
  transform-origin: 0 100%;

}
.container-arrow-position-right-top:dir(rtl), .container-arrow-position-right-bottom:dir(rtl) {
  transform: rotate(90deg);
  transform-origin: 100% 100%;
}
.container-arrow-position-right-top {
  inset-block-start: calc(12px + 10px);
  inset-inline-start: 0;
}
.container-arrow-position-right-bottom {
  inset-block-end: 12px;
  inset-inline-start: 0;
}
.container-arrow-position-left-top, .container-arrow-position-left-bottom {
  transform: rotate(90deg);
  transform-origin: 100% 100%;

}
.container-arrow-position-left-top:dir(rtl), .container-arrow-position-left-bottom:dir(rtl) {
  transform: rotate(-90deg);
  transform-origin: 0% 100%;
}
.container-arrow-position-left-top {
  inset-block-start: calc(12px + 10px);
  inset-inline-end: 0;
}
.container-arrow-position-left-bottom {
  inset-block-end: 12px;
  inset-inline-end: 0;
}
.container-arrow-position-top-center, .container-arrow-position-top-right, .container-arrow-position-top-left, .container-arrow-position-top-responsive {
  transform: rotate(180deg);
  transform-origin: 50% 50%;
}
.container-arrow-position-top-center {
  inset-block-end: -10px;
  inset-inline-start: calc(50% - 10px);
}
.container-arrow-position-top-right {
  inset-block-end: -10px;
  inset-inline-start: 12px;
}
.container-arrow-position-top-left {
  inset-block-end: -10px;
  inset-inline-start: calc(100% - 20px - 12px);
}
.container-arrow-position-bottom-center {
  inset-block-start: -10px;
  inset-inline-start: calc(50% - 10px);
}
.container-arrow-position-bottom-right {
  inset-block-start: -10px;
  inset-inline-start: 12px;
}
.container-arrow-position-bottom-left {
  inset-block-start: -10px;
  inset-inline-start: calc(100% - 20px - 12px);
}

.container {
  animation: awsui_awsui-motion-fade-in_xjuzf_45l16_1 var(--motion-duration-show-paced, 180ms) var(--motion-easing-show-paced, ease-out);
}
@keyframes awsui_awsui-motion-fade-in_xjuzf_45l16_1 {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .container {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .container, .awsui-mode-entering .container {
  animation: none;
  transition: none;
}
.container.refresh {
  animation: awsui_awsui-motion-fade-in_xjuzf_45l16_1 var(--motion-duration-refresh-only-fast, 115ms) var(--motion-easing-refresh-only-a, cubic-bezier(0, 0, 0, 1));
}
@keyframes awsui_awsui-motion-fade-in_xjuzf_45l16_1 {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .container.refresh {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .container.refresh, .awsui-mode-entering .container.refresh {
  animation: none;
  transition: none;
}

.root {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  color: inherit;
}
.root.no-wrap {
  white-space: nowrap;
}
:host-context([data-awsui-focus-visible=true]) .root:has(.trigger-type-text-inline.overflow-ellipsis:focus, .trigger-type-text.overflow-ellipsis:focus) {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .root:has(.trigger-type-text-inline.overflow-ellipsis:focus, .trigger-type-text.overflow-ellipsis:focus) {
  outline: 2px dotted transparent;
  outline-offset: calc(1px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .root:has(.trigger-type-text-inline.overflow-ellipsis:focus, .trigger-type-text.overflow-ellipsis:focus)::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 1px);
  inset-block-start: calc(-1 * 1px);
  inline-size: calc(100% + 1px + 1px);
  block-size: calc(100% + 1px + 1px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}

.root-filtering-token {
  display: flex;
}

.trigger {
  display: inline-block;
  max-inline-size: 100%;
  color: inherit;
  text-align: inherit;
}

.overflow-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-inline-size: 0;
  word-break: break-word;
}

.trigger-type-text-inline {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  border-block: 0;
  /*
    This transparent border is necessary to maintain space between the trigger and the bottom-positioned popover.
  */
  border-block-end: var(--border-divider-list-width, 1px) dashed transparent;
  -webkit-text-decoration: underline dashed currentColor;
          text-decoration: underline dashed currentColor;
  text-decoration-thickness: var(--border-divider-list-width, 1px);
  text-underline-offset: 0.25em;
}
.trigger-type-text-inline.overflow-ellipsis {
  /*
    This style needs because of the overflow: hidden would otherwise conceal the underline styles.
  */
  padding-block-end: calc(0.25em + var(--border-divider-list-width, 1px));
}

.trigger-type-text {
  border-block: 0;
  border-block-end: var(--border-divider-list-width, 1px) dashed currentColor;
}

.trigger-type-text-inline,
.trigger-type-text {
  border-inline: 0;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  background-color: transparent;
  cursor: pointer;
}
.trigger-type-text-inline:focus,
.trigger-type-text:focus {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .trigger-type-text-inline:not(.overflow-ellipsis):focus,
:host-context([data-awsui-focus-visible=true]) .trigger-type-text:not(.overflow-ellipsis):focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .trigger-type-text-inline:not(.overflow-ellipsis):focus,
:host-context([data-awsui-focus-visible=true]) .trigger-type-text:not(.overflow-ellipsis):focus {
  outline: 2px dotted transparent;
  outline-offset: calc(1px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .trigger-type-text-inline:not(.overflow-ellipsis):focus::before,
:host-context([data-awsui-focus-visible=true]) .trigger-type-text:not(.overflow-ellipsis):focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 1px);
  inset-block-start: calc(-1 * 1px);
  inline-size: calc(100% + 1px + 1px);
  block-size: calc(100% + 1px + 1px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}

.trigger-type-filtering-token {
  display: flex;
}

.popover-inline-content {
  display: inline;
}

.hover-area {
  pointer-events: none;
  padding-block: var(--space-static-s, 12px);
  padding-inline: var(--space-static-s, 12px);
  margin-block: calc(-1 * var(--space-static-s, 12px));
  margin-inline: calc(-1 * var(--space-static-s, 12px));
}
`;

export { componentStyles as popoverStyles };
export { sharedStyles };
