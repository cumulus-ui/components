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
}

.anchor-list {
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  position: relative;
  text-indent: 0;
}
.anchor-list::before {
  content: "";
  background-color: var(--color-border-divider-default, #c6c6cd);
  border-start-start-radius: var(--border-radius-tabs-focus-ring, 20px);
  border-start-end-radius: var(--border-radius-tabs-focus-ring, 20px);
  border-end-start-radius: var(--border-radius-tabs-focus-ring, 20px);
  border-end-end-radius: var(--border-radius-tabs-focus-ring, 20px);
  inset-block-end: -2px;
  pointer-events: none;
  position: absolute;
  inset-block-start: -2px;
  inline-size: 2px;
}

.anchor-item {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-secondary, #424650);
  font-weight: 400;
  margin-block: var(--space-scaled-xxs, 4px);
  margin-inline: 0;
  transition: var(--motion-duration-slow, 180ms);
  transition-property: all;
}
@media (prefers-reduced-motion: reduce) {
  .anchor-item {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .anchor-item, .awsui-mode-entering .anchor-item {
  animation: none;
  transition: none;
}
.anchor-item--active {
  position: relative;
}
.anchor-item--active::before {
  content: "";
  background-color: var(--color-text-accent, #006ce0);
  border-start-start-radius: var(--border-radius-tabs-focus-ring, 20px);
  border-start-end-radius: var(--border-radius-tabs-focus-ring, 20px);
  border-end-start-radius: var(--border-radius-tabs-focus-ring, 20px);
  border-end-end-radius: var(--border-radius-tabs-focus-ring, 20px);
  inset-block-end: -2px;
  pointer-events: none;
  position: absolute;
  inset-block-start: -2px;
  inline-size: 2px;
}

.anchor-link {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  align-items: baseline;
  color: var(--color-text-body-secondary, #424650);
  display: flex;
  flex-direction: row;
  font-weight: 400;
  text-decoration: none;
  transition: var(--motion-duration-slow, 180ms);
  transition-property: all;
}
@media (prefers-reduced-motion: reduce) {
  .anchor-link {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .anchor-link, .awsui-mode-entering .anchor-link {
  animation: none;
  transition: none;
}
:host-context([data-awsui-focus-visible=true]) .anchor-link:focus {
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
.anchor-link:hover {
  color: var(--color-text-accent, #006ce0);
}
.anchor-link:focus {
  outline: none;
}
.anchor-link:hover, .anchor-link:focus {
  text-decoration: none;
}
.anchor-link--active {
  font-weight: var(--font-wayfinding-link-active-weight, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  color: var(--color-text-accent, #006ce0);
}

.anchor-link-text {
  display: block;
}

.anchor-link-info {
  margin-inline-start: var(--space-xs, 8px);
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  font-weight: 700;
  letter-spacing: 0.005em;
  color: var(--color-text-link-default, #006ce0);
}
`;

export { componentStyles as anchorNavigationStyles };
export { sharedStyles };
