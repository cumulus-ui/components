// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  transition-property: background-color;
  transition-duration: var(--motion-duration-transition-show-paced-t8d1os, 180ms);
  transition-timing-function: var(--motion-easing-transition-show-paced-x2k7uh, ease-out);
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
  transition-duration: var(--motion-duration-transition-show-paced-t8d1os, 180ms);
  transition-timing-function: var(--motion-easing-transition-show-paced-x2k7uh, ease-out);
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
  font-family: var(--font-family-heading-ugphat, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-s-zp08en, 16px);
  line-height: var(--line-height-heading-s-hmi4vc, 20px);
  letter-spacing: var(--letter-spacing-heading-s-4st9ep, -0.005em);
  font-weight: var(--font-weight-heading-s-lcx0ai, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
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
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  box-sizing: border-box;
  position: relative;
  background-color: var(--awsui-style-item-card-background-default-6b9ypa, var(--color-background-item-card-ww2wfv, #ffffff));
  min-inline-size: 0;
  box-shadow: var(--awsui-style-item-card-box-shadow-default-6b9ypa, var(--shadow-item-card-282f8w, none));
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
  border-block: solid var(--awsui-style-item-card-border-width-default-6b9ypa, var(--border-width-item-card-3wmyp3, 1px)) var(--awsui-style-item-card-border-color-default-6b9ypa, var(--color-border-item-card-fia23i, #c6c6cd));
  border-inline: solid var(--awsui-style-item-card-border-width-default-6b9ypa, var(--border-width-item-card-3wmyp3, 1px)) var(--awsui-style-item-card-border-color-default-6b9ypa, var(--color-border-item-card-fia23i, #c6c6cd));
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
  border-block-start: solid var(--awsui-style-item-card-border-width-default-6b9ypa, var(--border-container-top-width-n1eke6, 0px)) var(--awsui-style-item-card-border-color-default-6b9ypa, var(--color-border-container-top-k3vmoz, transparent));
}
.root.highlighted {
  background-color: var(--color-background-item-selected-9gppru, #f0fbff);
}
.root.highlighted:before {
  border-block: solid var(--border-width-item-card-highlighted-jay4ll, 2px) var(--color-border-item-card-highlighted-5l7rko, #006ce0);
  border-inline: solid var(--border-width-item-card-highlighted-jay4ll, 2px) var(--color-border-item-card-highlighted-5l7rko, #006ce0);
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
  padding-block-start: var(--space-xxs-hwfkai, 4px);
}
.root.variant-embedded > .inner-card > .header:not(.no-padding):has(+ .body, + .footer), .root.variant-embedded > .inner-card > .body:not(.no-padding):has(+ .body, + .footer), .root.variant-default > .inner-card > .header:not(.no-padding):has(+ .body, + .footer), .root.variant-default > .inner-card > .body:not(.no-padding):has(+ .body, + .footer) {
  padding-block-end: var(--space-xxs-hwfkai, 4px);
}
.root.variant-embedded, .root.variant-embedded:before, .root.variant-embedded::after, .root.variant-embedded > .inner-card {
  border-start-start-radius: var(--awsui-style-item-card-border-radius-6b9ypa, var(--border-radius-item-card-embedded-l0g6e3, 8px));
  border-start-end-radius: var(--awsui-style-item-card-border-radius-6b9ypa, var(--border-radius-item-card-embedded-l0g6e3, 8px));
  border-end-start-radius: var(--awsui-style-item-card-border-radius-6b9ypa, var(--border-radius-item-card-embedded-l0g6e3, 8px));
  border-end-end-radius: var(--awsui-style-item-card-border-radius-6b9ypa, var(--border-radius-item-card-embedded-l0g6e3, 8px));
}
.root.variant-embedded > .inner-card > .header:not(.no-padding),
.root.variant-embedded > .inner-card > .body:not(.no-padding),
.root.variant-embedded > .inner-card > .footer:not(.no-padding) {
  padding-block: var(--space-item-card-vertical-embedded-zuozef, 10px);
  padding-inline-start: var(--space-item-card-horizontal-embedded-e0vef5, 12px);
}
.root.variant-embedded > .inner-card > .header:not(.no-padding):not(.with-actions),
.root.variant-embedded > .inner-card > .body:not(.no-padding):not(.with-actions),
.root.variant-embedded > .inner-card > .footer:not(.no-padding):not(.with-actions) {
  padding-inline-end: var(--space-item-card-horizontal-embedded-e0vef5, 12px);
}
.root.variant-embedded > .inner-card > .header:not(.no-padding).with-actions,
.root.variant-embedded > .inner-card > .body:not(.no-padding).with-actions,
.root.variant-embedded > .inner-card > .footer:not(.no-padding).with-actions {
  padding-inline-end: calc(var(--space-item-card-horizontal-embedded-e0vef5, 12px) - var(--space-xxs-hwfkai, 4px));
}
.root.variant-embedded > .inner-card > .header:not(.no-padding).with-actions {
  padding-block: calc(var(--space-item-card-vertical-embedded-zuozef, 10px) - var(--space-scaled-xxs-pfm1nx, 4px));
}
.root.variant-embedded > .inner-card > .header:not(.no-padding).with-actions:has(+ .body, + .footer) {
  padding-block-end: var(--space-xxs-hwfkai, 4px);
}
.root.variant-default, .root.variant-default:before, .root.variant-default::after, .root.variant-default > .inner-card {
  border-start-start-radius: var(--awsui-style-item-card-border-radius-6b9ypa, var(--border-radius-item-card-default-pi9u8q, 16px));
  border-start-end-radius: var(--awsui-style-item-card-border-radius-6b9ypa, var(--border-radius-item-card-default-pi9u8q, 16px));
  border-end-start-radius: var(--awsui-style-item-card-border-radius-6b9ypa, var(--border-radius-item-card-default-pi9u8q, 16px));
  border-end-end-radius: var(--awsui-style-item-card-border-radius-6b9ypa, var(--border-radius-item-card-default-pi9u8q, 16px));
}
.root.variant-default > .inner-card > .header:not(.no-padding),
.root.variant-default > .inner-card > .body:not(.no-padding),
.root.variant-default > .inner-card > .footer:not(.no-padding) {
  padding-block: var(--space-item-card-vertical-default-ppqfu4, 16px);
  padding-inline-start: var(--space-item-card-horizontal-default-obq2ks, 20px);
}
.root.variant-default > .inner-card > .header:not(.no-padding):not(.with-actions),
.root.variant-default > .inner-card > .body:not(.no-padding):not(.with-actions),
.root.variant-default > .inner-card > .footer:not(.no-padding):not(.with-actions) {
  padding-inline-end: var(--space-item-card-horizontal-default-obq2ks, 20px);
}
.root.variant-default > .inner-card > .header:not(.no-padding).with-actions,
.root.variant-default > .inner-card > .body:not(.no-padding).with-actions,
.root.variant-default > .inner-card > .footer:not(.no-padding).with-actions {
  padding-inline-end: calc(var(--space-item-card-horizontal-default-obq2ks, 20px) - var(--space-xxs-hwfkai, 4px));
}
.root.variant-default > .inner-card > .header:not(.no-padding).with-actions {
  padding-block: calc(var(--space-item-card-vertical-default-ppqfu4, 16px) - var(--space-scaled-xxs-pfm1nx, 4px));
}
.root.variant-default > .inner-card > .header:not(.no-padding).with-actions:has(+ .body, + .footer) {
  padding-block-end: var(--space-xxs-hwfkai, 4px);
}

.full-height {
  block-size: 100%;
}

.description {
  color: var(--color-text-heading-secondary-iwtvf6, #424650);
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
}
`;

export { componentStyles as itemCardStyles };
export { sharedStyles };
