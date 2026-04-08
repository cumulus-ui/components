// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  cursor: inherit;
  display: flex;
  inline-size: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
.root.refresh, .root:not(.root-no-actions) {
  row-gap: var(--space-scaled-xxs, 4px);
}
.root-no-actions.root-variant-h2:not(.refresh), .root-no-actions.root-variant-h3:not(.refresh), .root-has-description.root-variant-h2:not(.refresh), .root-has-description.root-variant-h3:not(.refresh) {
  padding-block-end: var(--space-scaled-xxs, 4px);
}
.root-no-actions:not(.root-has-description):not(.refresh) {
  padding-block-end: calc(var(--space-scaled-xs, 8px) + var(--space-xxxs, 2px));
}
.root-no-actions.refresh.root-variant-h2, .root-no-actions.refresh.root-variant-h3 {
  row-gap: var(--space-scaled-xxxs, 2px);
}
.root.root-variant-h1:not(.refresh) {
  row-gap: var(--space-scaled-xxs, 4px);
}
.root-no-actions:not(.root-has-description).refresh.root-variant-h3 {
  padding-block-end: var(--space-scaled-xs, 8px);
}
.root.root-variant-h1.root-has-description:not(.refresh) {
  padding-block-end: var(--space-scaled-2x-xxs, 4px);
}

.main {
  word-wrap: break-word;
  max-inline-size: 100%;
  display: flex;
  justify-content: space-between;
  inline-size: 100%;
  flex-wrap: wrap;
  column-gap: var(--space-xs, 8px);
  row-gap: calc(var(--space-scaled-xxs, 4px) + var(--space-scaled-xxxs, 2px));
}
.main.no-wrap {
  flex-wrap: nowrap;
}
.main.refresh {
  row-gap: var(--space-xxs, 4px);
}
.main-variant-h1 {
  row-gap: var(--space-scaled-2x-xxs, 4px);
}

.root-has-description > .main {
  row-gap: var(--space-scaled-2x-xxs, 4px);
}

.actions {
  display: flex;
  align-items: flex-start;
  min-block-size: var(--size-vertical-input, 32px);
}
.actions-centered {
  align-items: center;
}
.actions-variant-h1.refresh {
  padding-block: calc((var(--line-height-heading-xl, 30px) - var(--size-vertical-input, 32px)) / 2);
  padding-inline: 0;
}
.actions-variant-h2.refresh {
  padding-block: calc((var(--line-height-heading-l, 24px) - var(--size-vertical-input, 32px)) / 2);
  padding-inline: 0;
}
.actions-variant-h3.refresh {
  padding-block: calc((var(--line-height-heading-m, 22px) - var(--size-vertical-input, 32px)) / 2);
  padding-inline: 0;
}
.actions-variant-h1:not(.refresh) {
  padding-block: var(--space-scaled-xs, 8px);
  padding-inline: 0;
}
.actions-variant-h2:not(.refresh), .actions-variant-h3:not(.refresh) {
  padding-block: var(--space-scaled-xxs, 4px);
  padding-inline: 0;
}
.root-has-description > .main > .actions {
  padding-block-end: 0;
}

.title {
  min-inline-size: 0;
  word-break: break-word;
  color: var(--color-text-heading-default, #0f141a);
}
.title-variant-h1 {
  font-size: var(--font-size-heading-xl, 24px);
  padding-block-start: var(--space-scaled-2x-xxs, 4px);
}
.title-variant-h1.refresh {
  padding-block-start: calc((var(--size-vertical-input, 32px) - var(--line-height-heading-xl, 30px)) / 2);
}
.title-variant-h2 {
  font-size: var(--font-size-heading-l, 20px);
}
.title-variant-h2.refresh {
  padding-block-start: calc((var(--size-vertical-input, 32px) - var(--line-height-heading-l, 24px)) / 2);
}
.title-variant-h3 {
  font-size: var(--font-size-heading-m, 18px);
}
.title-variant-h3.refresh {
  padding-block-start: calc((var(--size-vertical-input, 32px) - var(--line-height-heading-m, 22px)) / 2);
}
.title-variant-h2:not(.refresh), .title-variant-h3:not(.refresh) {
  padding-block-start: var(--space-scaled-xs, 8px);
}
.no-wrap > .title:not(.refresh) {
  padding-block-end: calc(var(--space-scaled-xxs, 4px) + var(--space-scaled-xxxs, 2px));
}

.root-no-actions.root-has-description > .main > :not(.refresh).title-variant-h2, .root-no-actions.root-has-description > .main > :not(.refresh).title-variant-h3 {
  padding-block-end: var(--space-scaled-xxs, 4px);
}

.root-variant-h1.root-no-actions:not(.root-has-description):not(.refresh) {
  padding-block-end: var(--space-scaled-2x-xxs, 4px);
}

.virtual-space {
  position: absolute !important;
  inset-block-start: -9999px !important;
  inset-inline-start: -9999px !important;
}

.info {
  padding-inline-end: var(--space-s, 12px);
}

.description {
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  color: var(--color-text-heading-secondary, #424650);
}
.description-variant-h1 {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
}
.description-variant-h2 {
  font-size: var(--font-header-h2-description-size, 14px);
  line-height: var(--font-header-h2-description-line-height, 20px);
}
.description-variant-h2:not(.refresh) {
  padding-block-end: var(--space-scaled-xxs, 4px);
}
.description-variant-h3 {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
}
.description-variant-h3:not(.refresh) {
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
  padding-block-end: var(--space-scaled-xxs, 4px);
}

.heading {
  margin-block: 0;
  margin-inline: 0;
  display: inline;
  font-size: inherit;
  margin-inline-end: var(--space-xs, 8px);
}
.heading:only-child {
  margin-block: 0;
  margin-inline: 0;
}
.heading:focus {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .heading:focus {
  outline: thin dotted;
  outline: var(--border-link-focus-ring-outline, 0);
  outline-offset: 2px;
  outline-color: var(--color-border-item-focused, #006ce0);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 var(--border-link-focus-ring-shadow-spread, 2px) var(--color-border-item-focused, #006ce0);
}
.heading-variant-h1 {
  font-size: var(--font-size-heading-xl, 24px);
  line-height: var(--line-height-heading-xl, 30px);
  letter-spacing: var(--letter-spacing-heading-xl, -0.02em);
}
.heading-variant-h2 {
  font-size: var(--font-size-heading-l, 20px);
  line-height: var(--line-height-heading-l, 24px);
  letter-spacing: var(--letter-spacing-heading-l, -0.015em);
}
.heading-variant-h3 {
  font-size: var(--font-size-heading-m, 18px);
  line-height: var(--line-height-heading-m, 22px);
  letter-spacing: var(--letter-spacing-heading-m, -0.01em);
}
.heading-text-variant-h1 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-xl, 24px);
  line-height: var(--line-height-heading-xl, 30px);
  letter-spacing: var(--letter-spacing-heading-xl, -0.02em);
  font-weight: var(--font-weight-heading-xl, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.heading-text-variant-h2 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-l, 20px);
  line-height: var(--line-height-heading-l, 24px);
  letter-spacing: var(--letter-spacing-heading-l, -0.015em);
  font-weight: var(--font-weight-heading-l, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.heading-text-variant-h3 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-m, 18px);
  line-height: var(--line-height-heading-m, 22px);
  letter-spacing: var(--letter-spacing-heading-m, -0.01em);
  font-weight: var(--font-weight-heading-m, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}

.counter {
  color: var(--color-text-counter, #656871);
  font-weight: 400;
}
`;

export { componentStyles as headerStyles };
export { sharedStyles };
