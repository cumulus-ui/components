// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  cursor: inherit;
  display: flex;
  inline-size: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
.root.refresh, .root:not(.root-no-actions) {
  row-gap: var(--space-scaled-xxs-pfm1nx, 4px);
}
.root-no-actions.root-variant-h2:not(.refresh), .root-no-actions.root-variant-h3:not(.refresh), .root-has-description.root-variant-h2:not(.refresh), .root-has-description.root-variant-h3:not(.refresh) {
  padding-block-end: var(--space-scaled-xxs-pfm1nx, 4px);
}
.root-no-actions:not(.root-has-description):not(.refresh) {
  padding-block-end: calc(var(--space-scaled-xs-xwoogq, 8px) + var(--space-xxxs-pajhad, 2px));
}
.root-no-actions.refresh.root-variant-h2, .root-no-actions.refresh.root-variant-h3 {
  row-gap: var(--space-scaled-xxxs-oo06c7, 2px);
}
.root.root-variant-h1:not(.refresh) {
  row-gap: var(--space-scaled-xxs-pfm1nx, 4px);
}
.root-no-actions:not(.root-has-description).refresh.root-variant-h3 {
  padding-block-end: var(--space-scaled-xs-xwoogq, 8px);
}
.root.root-variant-h1.root-has-description:not(.refresh) {
  padding-block-end: var(--space-scaled-2x-xxs-e79hr1, 4px);
}

.main {
  word-wrap: break-word;
  max-inline-size: 100%;
  display: flex;
  justify-content: space-between;
  inline-size: 100%;
  flex-wrap: wrap;
  column-gap: var(--space-xs-ymlm0b, 8px);
  row-gap: calc(var(--space-scaled-xxs-pfm1nx, 4px) + var(--space-scaled-xxxs-oo06c7, 2px));
}
.main.no-wrap {
  flex-wrap: nowrap;
}
.main.refresh {
  row-gap: var(--space-xxs-hwfkai, 4px);
}
.main-variant-h1 {
  row-gap: var(--space-scaled-2x-xxs-e79hr1, 4px);
}

.root-has-description > .main {
  row-gap: var(--space-scaled-2x-xxs-e79hr1, 4px);
}

.actions {
  display: flex;
  align-items: flex-start;
  min-block-size: var(--size-vertical-input-p1d7xx, 32px);
}
.actions-centered {
  align-items: center;
}
.actions-variant-h1.refresh {
  padding-block: calc((var(--line-height-heading-xl-hko6p0, 30px) - var(--size-vertical-input-p1d7xx, 32px)) / 2);
  padding-inline: 0;
}
.actions-variant-h2.refresh {
  padding-block: calc((var(--line-height-heading-l-mg5bx6, 24px) - var(--size-vertical-input-p1d7xx, 32px)) / 2);
  padding-inline: 0;
}
.actions-variant-h3.refresh {
  padding-block: calc((var(--line-height-heading-m-uoaqdh, 22px) - var(--size-vertical-input-p1d7xx, 32px)) / 2);
  padding-inline: 0;
}
.actions-variant-h1:not(.refresh) {
  padding-block: var(--space-scaled-xs-xwoogq, 8px);
  padding-inline: 0;
}
.actions-variant-h2:not(.refresh), .actions-variant-h3:not(.refresh) {
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-inline: 0;
}
.root-has-description > .main > .actions {
  padding-block-end: 0;
}

.title {
  min-inline-size: 0;
  word-break: break-word;
  color: var(--color-text-heading-default-izpp46, #0f141a);
}
.title-variant-h1 {
  font-size: var(--font-size-heading-xl-wvkbur, 24px);
  padding-block-start: var(--space-scaled-2x-xxs-e79hr1, 4px);
}
.title-variant-h1.refresh {
  padding-block-start: calc((var(--size-vertical-input-p1d7xx, 32px) - var(--line-height-heading-xl-hko6p0, 30px)) / 2);
}
.title-variant-h2 {
  font-size: var(--font-size-heading-l-vnacx6, 20px);
}
.title-variant-h2.refresh {
  padding-block-start: calc((var(--size-vertical-input-p1d7xx, 32px) - var(--line-height-heading-l-mg5bx6, 24px)) / 2);
}
.title-variant-h3 {
  font-size: var(--font-size-heading-m-170yiy, 18px);
}
.title-variant-h3.refresh {
  padding-block-start: calc((var(--size-vertical-input-p1d7xx, 32px) - var(--line-height-heading-m-uoaqdh, 22px)) / 2);
}
.title-variant-h2:not(.refresh), .title-variant-h3:not(.refresh) {
  padding-block-start: var(--space-scaled-xs-xwoogq, 8px);
}
.no-wrap > .title:not(.refresh) {
  padding-block-end: calc(var(--space-scaled-xxs-pfm1nx, 4px) + var(--space-scaled-xxxs-oo06c7, 2px));
}

.root-no-actions.root-has-description > .main > :not(.refresh).title-variant-h2, .root-no-actions.root-has-description > .main > :not(.refresh).title-variant-h3 {
  padding-block-end: var(--space-scaled-xxs-pfm1nx, 4px);
}

.root-variant-h1.root-no-actions:not(.root-has-description):not(.refresh) {
  padding-block-end: var(--space-scaled-2x-xxs-e79hr1, 4px);
}

.virtual-space {
  position: absolute !important;
  inset-block-start: -9999px !important;
  inset-inline-start: -9999px !important;
}

.info {
  padding-inline-end: var(--space-s-tvghoh, 12px);
}

.description {
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  color: var(--color-text-heading-secondary-iwtvf6, #424650);
}
.description-variant-h1 {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
}
.description-variant-h2 {
  font-size: var(--font-header-h2-description-size-g2wws3, 14px);
  line-height: var(--font-header-h2-description-line-height-ts2s6o, 20px);
}
.description-variant-h2:not(.refresh) {
  padding-block-end: var(--space-scaled-xxs-pfm1nx, 4px);
}
.description-variant-h3 {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
}
.description-variant-h3:not(.refresh) {
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
  padding-block-end: var(--space-scaled-xxs-pfm1nx, 4px);
}

.heading {
  margin-block: 0;
  margin-inline: 0;
  display: inline;
  font-size: inherit;
  margin-inline-end: var(--space-xs-ymlm0b, 8px);
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
  outline: var(--border-link-focus-ring-outline-1p0hnu, 0);
  outline-offset: 2px;
  outline-color: var(--color-border-item-focused-uk47pl, #006ce0);
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 var(--border-link-focus-ring-shadow-spread-39uvxr, 2px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.heading-variant-h1 {
  font-size: var(--font-size-heading-xl-wvkbur, 24px);
  line-height: var(--line-height-heading-xl-hko6p0, 30px);
  letter-spacing: var(--letter-spacing-heading-xl-ckkb6u, -0.02em);
}
.heading-variant-h2 {
  font-size: var(--font-size-heading-l-vnacx6, 20px);
  line-height: var(--line-height-heading-l-mg5bx6, 24px);
  letter-spacing: var(--letter-spacing-heading-l-5v6ibv, -0.015em);
}
.heading-variant-h3 {
  font-size: var(--font-size-heading-m-170yiy, 18px);
  line-height: var(--line-height-heading-m-uoaqdh, 22px);
  letter-spacing: var(--letter-spacing-heading-m-29ewnk, -0.01em);
}
.heading-text-variant-h1 {
  font-family: var(--font-family-heading-ugphat, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-xl-wvkbur, 24px);
  line-height: var(--line-height-heading-xl-hko6p0, 30px);
  letter-spacing: var(--letter-spacing-heading-xl-ckkb6u, -0.02em);
  font-weight: var(--font-weight-heading-xl-u3m4we, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
}
.heading-text-variant-h2 {
  font-family: var(--font-family-heading-ugphat, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-l-vnacx6, 20px);
  line-height: var(--line-height-heading-l-mg5bx6, 24px);
  letter-spacing: var(--letter-spacing-heading-l-5v6ibv, -0.015em);
  font-weight: var(--font-weight-heading-l-0t6dwc, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
}
.heading-text-variant-h3 {
  font-family: var(--font-family-heading-ugphat, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-m-170yiy, 18px);
  line-height: var(--line-height-heading-m-uoaqdh, 22px);
  letter-spacing: var(--letter-spacing-heading-m-29ewnk, -0.01em);
  font-weight: var(--font-weight-heading-m-zf82dr, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
}

.counter {
  color: var(--color-text-counter-bywf75, #656871);
  font-weight: 400;
}
`;

export { componentStyles as headerStyles };
export { sharedStyles };
