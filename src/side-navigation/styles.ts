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
  min-inline-size: 0;
  word-break: break-word;
}

.header {
  font-size: var(--font-panel-header-size, 18px);
  letter-spacing: var(--letter-spacing-heading-m, -0.01em);
  line-height: var(--font-panel-header-line-height, 22px);
  font-weight: var(--font-weight-heading-l, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  margin-block: 0;
  margin-inline: 0;
  padding-block: var(--space-panel-header-vertical, 20px);
  padding-inline-start: var(--space-panel-nav-left, 28px);
  padding-inline-end: calc(var(--space-scaled-xxl, 32px) + var(--space-xl, 24px));
}

.header-link {
  font-size: var(--font-panel-header-size, 18px);
  letter-spacing: var(--letter-spacing-heading-m, -0.01em);
  line-height: var(--font-panel-header-line-height, 22px);
  font-weight: var(--font-weight-heading-l, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  color: var(--color-text-heading-default, #0f141a);
  min-block-size: var(--font-panel-header-line-height, 22px);
  display: flex;
}
.header-link--has-logo > .header-link-text {
  font-weight: 400;
  align-self: center;
}

.header-logo {
  margin-inline-end: var(--space-s, 12px);
  margin-block-start: var(--space-xxxs, 2px);
  max-inline-size: calc(1.25 * var(--size-icon-big, 32px));
  align-self: flex-start;
}
.header-logo--stretched {
  max-inline-size: 100%;
  margin-inline-end: 0;
}

.items-control {
  padding-inline: var(--space-l, 20px);
}

.list-container {
  margin-block-end: var(--space-panel-content-bottom, 40px);
}

.items-control,
.list-container {
  margin-block-start: var(--space-panel-content-top, 20px);
}
.with-toolbar > .divider-header + .items-control,
.with-toolbar > .divider-header + .list-container {
  margin-block-start: 0;
}

.list {
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline-end: 0;
  padding-inline-start: var(--space-l, 20px);
}

.list-variant-root {
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline-start: var(--space-panel-nav-left, 28px);
  padding-inline-end: var(--space-panel-side-right, 24px);
}
.list-variant-root--first {
  margin-block-start: 0;
}

.list-variant-expandable-link-group {
  padding-inline-start: var(--space-xxxl, 40px);
}

.list-item {
  margin-block: var(--space-scaled-xs, 8px);
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  list-style: none;
}
.list-variant-root--first > .list-item:first-child {
  margin-block-start: 0px;
}

.section,
.expandable-link-group {
  margin-inline-start: calc(-1 * var(--space-l, 20px));
}
.section--no-ident,
.expandable-link-group--no-ident {
  margin-inline-start: 0;
}

.section {
  margin-block: calc(var(--space-scaled-2x-l, 20px) - var(--border-divider-section-width, 1px));

}
.section.refresh {
  margin-block: calc(var(--space-scaled-2x-m, 16px) - var(--border-divider-section-width, 1px));
}
.list-variant-root--first > .list-item:first-child > .section {
  margin-block-start: 0px;
}
.section > div {
  padding-block: 0;
  padding-inline: 0;
}

.list-variant-section-group {
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
}

.section-group {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-m, 18px);
  line-height: var(--line-height-heading-m, 22px);
  letter-spacing: var(--letter-spacing-heading-m, -0.01em);
  font-weight: var(--font-weight-heading-m, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  margin-block: 0;
  margin-inline: 0;
}

.link {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-secondary, #424650);
  font-weight: 400;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.link-active {
  font-weight: var(--font-wayfinding-link-active-weight, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  color: var(--color-text-accent, #006ce0);
}

.header-link,
.link {
  text-decoration: none;
}
.header-link:hover,
.link:hover {
  color: var(--color-text-accent, #006ce0);
}
.header-link:focus,
.link:focus {
  outline: none;
}
.header-link:hover, .header-link:focus, .link:hover, .link:focus {
  text-decoration: none;
}
:host-context([data-awsui-focus-visible=true]) .header-link:focus,
:host-context([data-awsui-focus-visible=true]) .link:focus {
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

.info {
  margin-inline-start: var(--space-xs, 8px);
}

.external-icon {
  margin-inline-start: var(--space-xxs, 4px);
}

.divider {
  border-block: none;
  border-inline: none;
}

.divider-default {
  margin-block: var(--space-scaled-2x-xl, 24px);
  margin-inline: calc(-1 * var(--space-panel-divider-margin-horizontal, 8px));
  border-block-start: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
}

.divider-header {
  margin-block: 0;
  border-block-start: var(--border-divider-section-width, 1px) solid var(--color-border-panel-header, #c6c6cd);
}
.with-toolbar > .divider-header {
  border-color: transparent;
}
`;

export { componentStyles as sideNavigationStyles };
export { sharedStyles };
