// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  transition-property: background-color;
  transition-duration: var(--motion-duration-transition-show-paced, 180ms);
  transition-timing-function: var(--motion-easing-transition-show-paced, ease-out);
}
@media (prefers-reduced-motion: reduce) {
  .root {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .root, .awsui-mode-entering .root {
  animation: none;
  transition: none;
}

.root::before {
  transition-property: border-top-color, border-right-color, border-bottom-color, border-left-color;
  transition-duration: var(--motion-duration-transition-show-paced, 180ms);
  transition-timing-function: var(--motion-easing-transition-show-paced, ease-out);
}
@media (prefers-reduced-motion: reduce) {
  .root::before {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .root::before, .awsui-mode-entering .root::before {
  animation: none;
  transition: none;
}

.header-inner {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-s, 16px);
  line-height: var(--line-height-heading-s, 20px);
  letter-spacing: var(--letter-spacing-heading-s, -0.005em);
  font-weight: var(--font-weight-heading-s, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.header:not(:has(+ .body)) {
  flex: 1;
}

.body {
  flex: 1;
}

.footer:first-child {
  margin-block-start: auto;
}

.root {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  box-sizing: border-box;
  position: relative;
  background-color: var(--awsui-style-item-card-background-default, var(--color-background-item-card, #ffffff));
  min-inline-size: 0;
  box-shadow: var(--awsui-style-item-card-box-shadow-default, var(--shadow-item-card, none));
}
.root:before {
  content: "";
  position: absolute;
  inset-inline-start: 0px;
  inset-block-start: 0px;
  inline-size: 100%;
  block-size: 100%;
  pointer-events: none;
  background: transparent;
  box-sizing: border-box;
  box-shadow: none;
  border-color: transparent;
  border-block: solid var(--awsui-style-item-card-border-width-default, var(--border-width-item-card, 1px)) var(--awsui-style-item-card-border-color-default, var(--color-border-item-card, #c6c6cd));
  border-inline: solid var(--awsui-style-item-card-border-width-default, var(--border-width-item-card, 1px)) var(--awsui-style-item-card-border-color-default, var(--color-border-item-card, #c6c6cd));
}
.root::after {
  content: "";
  position: absolute;
  inset-inline-start: 0px;
  inset-block-start: 0px;
  inline-size: 100%;
  block-size: 100%;
  pointer-events: none;
  background: transparent;
  box-sizing: border-box;
}
.root:not(.refresh)::before {
  border-block-start: solid var(--awsui-style-item-card-border-width-default, var(--border-container-top-width, 0px)) var(--awsui-style-item-card-border-color-default, var(--color-border-container-top, transparent));
}
.root.highlighted {
  background-color: var(--color-background-item-selected, #f0fbff);
}
.root.highlighted:before {
  border-block: solid var(--border-width-item-card-highlighted, 2px) var(--color-border-item-card-highlighted, #006ce0);
  border-inline: solid var(--border-width-item-card-highlighted, 2px) var(--color-border-item-card-highlighted, #006ce0);
}
.root.variant-embedded > .inner-card, .root.variant-default > .inner-card {
  display: flex;
  flex-direction: column;
  block-size: 100%;
  inline-size: 100%;
}
.root.variant-embedded > .inner-card > .header + .body:not(.no-padding),
.root.variant-embedded > .inner-card > .header + .footer:not(.no-padding),
.root.variant-embedded > .inner-card > .body + .footer:not(.no-padding),
.root.variant-default > .inner-card > .header + .body:not(.no-padding),
.root.variant-default > .inner-card > .header + .footer:not(.no-padding),
.root.variant-default > .inner-card > .body + .footer:not(.no-padding) {
  padding-block-start: var(--space-xxs, 4px);
}
.root.variant-embedded > .inner-card > .header:not(.no-padding):has(+ .body, + .footer), .root.variant-embedded > .inner-card > .body:not(.no-padding):has(+ .body, + .footer), .root.variant-default > .inner-card > .header:not(.no-padding):has(+ .body, + .footer), .root.variant-default > .inner-card > .body:not(.no-padding):has(+ .body, + .footer) {
  padding-block-end: var(--space-xxs, 4px);
}
.root.variant-embedded, .root.variant-embedded:before, .root.variant-embedded::after, .root.variant-embedded > .inner-card {
  border-start-start-radius: var(--awsui-style-item-card-border-radius, var(--border-radius-item-card-embedded, 8px));
  border-start-end-radius: var(--awsui-style-item-card-border-radius, var(--border-radius-item-card-embedded, 8px));
  border-end-start-radius: var(--awsui-style-item-card-border-radius, var(--border-radius-item-card-embedded, 8px));
  border-end-end-radius: var(--awsui-style-item-card-border-radius, var(--border-radius-item-card-embedded, 8px));
}
.root.variant-embedded > .inner-card > .header:not(.no-padding),
.root.variant-embedded > .inner-card > .body:not(.no-padding),
.root.variant-embedded > .inner-card > .footer:not(.no-padding) {
  padding-block: var(--space-item-card-vertical-embedded, 10px);
  padding-inline-start: var(--space-item-card-horizontal-embedded, 12px);
}
.root.variant-embedded > .inner-card > .header:not(.no-padding):not(.with-actions),
.root.variant-embedded > .inner-card > .body:not(.no-padding):not(.with-actions),
.root.variant-embedded > .inner-card > .footer:not(.no-padding):not(.with-actions) {
  padding-inline-end: var(--space-item-card-horizontal-embedded, 12px);
}
.root.variant-embedded > .inner-card > .header:not(.no-padding).with-actions,
.root.variant-embedded > .inner-card > .body:not(.no-padding).with-actions,
.root.variant-embedded > .inner-card > .footer:not(.no-padding).with-actions {
  padding-inline-end: calc(var(--space-item-card-horizontal-embedded, 12px) - var(--space-xxs, 4px));
}
.root.variant-embedded > .inner-card > .header:not(.no-padding).with-actions {
  padding-block: calc(var(--space-item-card-vertical-embedded, 10px) - var(--space-scaled-xxs, 4px));
}
.root.variant-embedded > .inner-card > .header:not(.no-padding).with-actions:has(+ .body, + .footer) {
  padding-block-end: var(--space-xxs, 4px);
}
.root.variant-default, .root.variant-default:before, .root.variant-default::after, .root.variant-default > .inner-card {
  border-start-start-radius: var(--awsui-style-item-card-border-radius, var(--border-radius-item-card-default, 16px));
  border-start-end-radius: var(--awsui-style-item-card-border-radius, var(--border-radius-item-card-default, 16px));
  border-end-start-radius: var(--awsui-style-item-card-border-radius, var(--border-radius-item-card-default, 16px));
  border-end-end-radius: var(--awsui-style-item-card-border-radius, var(--border-radius-item-card-default, 16px));
}
.root.variant-default > .inner-card > .header:not(.no-padding),
.root.variant-default > .inner-card > .body:not(.no-padding),
.root.variant-default > .inner-card > .footer:not(.no-padding) {
  padding-block: var(--space-item-card-vertical-default, 16px);
  padding-inline-start: var(--space-item-card-horizontal-default, 20px);
}
.root.variant-default > .inner-card > .header:not(.no-padding):not(.with-actions),
.root.variant-default > .inner-card > .body:not(.no-padding):not(.with-actions),
.root.variant-default > .inner-card > .footer:not(.no-padding):not(.with-actions) {
  padding-inline-end: var(--space-item-card-horizontal-default, 20px);
}
.root.variant-default > .inner-card > .header:not(.no-padding).with-actions,
.root.variant-default > .inner-card > .body:not(.no-padding).with-actions,
.root.variant-default > .inner-card > .footer:not(.no-padding).with-actions {
  padding-inline-end: calc(var(--space-item-card-horizontal-default, 20px) - var(--space-xxs, 4px));
}
.root.variant-default > .inner-card > .header:not(.no-padding).with-actions {
  padding-block: calc(var(--space-item-card-vertical-default, 16px) - var(--space-scaled-xxs, 4px));
}
.root.variant-default > .inner-card > .header:not(.no-padding).with-actions:has(+ .body, + .footer) {
  padding-block-end: var(--space-xxs, 4px);
}

.full-height {
  block-size: 100%;
}

.description {
  color: var(--color-text-heading-secondary, #424650);
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
}

.icon { /* structural */ }
`;

export { componentStyles as itemCardStyles };
export { sharedStyles };
