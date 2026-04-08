// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.link {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: inline;
  white-space: inherit;
  --awsui-style-focus-ring-box-shadow: 0 0 0 var(--awsui-style-focus-ring-border-width, var(--border-link-focus-ring-shadow-spread, 2px)) var(--awsui-style-focus-ring-border-color, var(--color-border-item-focused, #006ce0));
  text-underline-offset: 0.25em;
  text-decoration-thickness: 1px;
  color: var(--awsui-style-color-default, var(--color-text-link-default, #006ce0));
  font-weight: inherit;
  letter-spacing: normal;
  text-decoration-line: none;
  text-decoration-color: transparent;
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium, 165ms);
}
@media (prefers-reduced-motion: reduce) {
  .link {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .link, .awsui-mode-entering .link {
  animation: none;
  transition: none;
}
.link:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.link:focus {
  outline: none;
}
.link:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.link:active, .link:focus, .link:hover {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}
.link.variant-secondary {
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  color: var(--awsui-style-color-default, var(--color-text-link-default, #006ce0));
  font-weight: inherit;
  letter-spacing: normal;
  text-decoration-line: none;
  text-decoration-color: transparent;
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium, 165ms);
}
@media (prefers-reduced-motion: reduce) {
  .link.variant-secondary {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .link.variant-secondary, .awsui-mode-entering .link.variant-secondary {
  animation: none;
  transition: none;
}
.link.variant-secondary:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.link.variant-secondary:focus {
  outline: none;
}
.link.variant-secondary:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.link.variant-secondary:active, .link.variant-secondary:focus, .link.variant-secondary:hover {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}
.link.variant-primary {
  color: var(--awsui-style-color-default, var(--color-text-link-default, #006ce0));
  font-weight: inherit;
  letter-spacing: normal;
  text-decoration-line: underline;
  text-decoration-color: currentColor;
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium, 165ms);
}
@media (prefers-reduced-motion: reduce) {
  .link.variant-primary {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .link.variant-primary, .awsui-mode-entering .link.variant-primary {
  animation: none;
  transition: none;
}
.link.variant-primary:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.link.variant-primary:focus {
  outline: none;
}
.link.variant-primary:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.link.variant-primary:active, .link.variant-primary:focus, .link.variant-primary:hover {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}
.link.variant-info {
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  color: var(--awsui-style-color-default, var(--color-text-link-default, #006ce0));
  font-weight: 700;
  letter-spacing: 0.005em;
  text-decoration-line: none;
  text-decoration-color: transparent;
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium, 165ms);
}
@media (prefers-reduced-motion: reduce) {
  .link.variant-info {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .link.variant-info, .awsui-mode-entering .link.variant-info {
  animation: none;
  transition: none;
}
.link.variant-info:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.link.variant-info:focus {
  outline: none;
}
.link.variant-info:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.link.variant-info:active, .link.variant-info:focus, .link.variant-info:hover {
  text-decoration-line: underline;
  text-decoration-color: var(--color-text-link-button-underline-hover, transparent);
}
.link.variant-value-large {
  color: var(--awsui-style-color-default, var(--color-text-link-default, #006ce0));
  font-weight: var(--font-box-value-large-weight, 700);
  text-decoration-line: underline;
  text-decoration-color: currentColor;
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium, 165ms);
}
@media (prefers-reduced-motion: reduce) {
  .link.variant-value-large {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .link.variant-value-large, .awsui-mode-entering .link.variant-value-large {
  animation: none;
  transition: none;
}
.link.variant-value-large:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.link.variant-value-large:focus {
  outline: none;
}
.link.variant-value-large:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.link.variant-value-large:active, .link.variant-value-large:focus, .link.variant-value-large:hover {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}
.link.variant-top-navigation {
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  color: var(--awsui-style-color-default, var(--color-text-interactive-default, #424650));
  font-weight: 700;
  letter-spacing: 0.005em;
  text-decoration-line: none;
  text-decoration-color: transparent;
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium, 165ms);
}
@media (prefers-reduced-motion: reduce) {
  .link.variant-top-navigation {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .link.variant-top-navigation, .awsui-mode-entering .link.variant-top-navigation {
  animation: none;
  transition: none;
}
.link.variant-top-navigation:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-interactive-hover, #0f141a));
}
.link.variant-top-navigation:focus {
  outline: none;
}
.link.variant-top-navigation:active {
  color: var(--awsui-style-color-active, var(--color-text-interactive-active, #0f141a));
}
.link.variant-top-navigation:active, .link.variant-top-navigation:focus, .link.variant-top-navigation:hover {
  text-decoration-line: underline;
  text-decoration-color: transparent;
}
.link.variant-recovery {
  color: var(--awsui-style-color-default, var(--color-text-link-default, #006ce0));
  font-weight: var(--font-link-button-weight, 700);
  letter-spacing: var(--font-link-button-letter-spacing, 0.005em);
  text-decoration-line: underline;
  text-decoration-color: var(--color-text-link-button-underline, transparent);
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium, 165ms);
}
@media (prefers-reduced-motion: reduce) {
  .link.variant-recovery {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .link.variant-recovery, .awsui-mode-entering .link.variant-recovery {
  animation: none;
  transition: none;
}
.link.variant-recovery:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.link.variant-recovery:focus {
  outline: none;
}
.link.variant-recovery:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.link.variant-recovery:active, .link.variant-recovery:focus, .link.variant-recovery:hover {
  text-decoration-line: underline;
  text-decoration-color: var(--color-text-link-button-underline-hover, transparent);
}
.link.button {
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  color: var(--awsui-style-color-default, var(--color-text-link-button-normal-default, #006ce0));
  font-weight: 700;
  letter-spacing: var(--font-button-letter-spacing, 0.005em);
  text-decoration-line: none;
  text-decoration-color: transparent;
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium, 165ms);
}
@media (prefers-reduced-motion: reduce) {
  .link.button {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .link.button, .awsui-mode-entering .link.button {
  animation: none;
  transition: none;
}
.link.button:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-link-button-normal-hover, #002b66));
}
.link.button:focus {
  outline: none;
}
.link.button:active {
  color: var(--awsui-style-color-active, var(--color-text-link-button-normal-active, #002b66));
}
.link.button:active, .link.button:focus, .link.button:hover {
  text-decoration-line: underline;
  text-decoration-color: transparent;
}
.link.color-inverted {
  color: var(--color-text-notification-default, #f9f9fa);
}
.link.color-inverted:not(.button) {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}
.link.color-inverted:hover {
  color: var(--color-text-link-inverted-hover, #ffffff);
}
:host-context([data-awsui-focus-visible=true]) .link:focus {
  outline: thin dotted;
  outline: var(--border-link-focus-ring-outline, 0);
  outline-offset: 2px;
  outline-color: var(--awsui-style-focus-ring-border-color, var(--color-border-item-focused, #006ce0));
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow);
}
.link.font-size-body-s {
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
  text-underline-offset: 0.3em;
  text-decoration-thickness: 1px;
}
.link.font-size-body-m {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  text-underline-offset: 0.25em;
  text-decoration-thickness: 1px;
}
.link.font-size-heading-xs {
  font-size: var(--font-size-heading-xs, 14px);
  line-height: var(--line-height-heading-xs, 18px);
  letter-spacing: var(--letter-spacing-heading-xs, normal);
  text-underline-offset: 0.25em;
  text-decoration-thickness: 1px;
}
.link.font-size-heading-s {
  font-size: var(--font-size-heading-s, 16px);
  line-height: var(--line-height-heading-s, 20px);
  letter-spacing: var(--letter-spacing-heading-s, -0.005em);
  text-underline-offset: 0.3em;
  text-decoration-thickness: 1px;
}
.link.font-size-heading-m {
  font-size: var(--font-size-heading-m, 18px);
  line-height: var(--line-height-heading-m, 22px);
  letter-spacing: var(--letter-spacing-heading-m, -0.01em);
  text-underline-offset: 0.25em;
  text-decoration-thickness: 1px;
}
.link.font-size-heading-l {
  font-size: var(--font-size-heading-l, 20px);
  line-height: var(--line-height-heading-l, 24px);
  letter-spacing: var(--letter-spacing-heading-l, -0.015em);
  text-underline-offset: 0.25em;
  text-decoration-thickness: 1px;
}
.link.font-size-heading-xl {
  font-size: var(--font-size-heading-xl, 24px);
  line-height: var(--line-height-heading-xl, 30px);
  letter-spacing: var(--letter-spacing-heading-xl, -0.02em);
  text-underline-offset: 0.25em;
  text-decoration-thickness: 1px;
}
.link.font-size-display-l {
  font-size: var(--font-size-display-l, 42px);
  line-height: var(--line-height-display-l, 48px);
  letter-spacing: var(--letter-spacing-display-l, -0.03em);
  text-underline-offset: 0.25em;
  text-decoration-thickness: 2px;
}
.link.font-size-inherit {
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-underline-offset: 0.25em;
  text-decoration-thickness: 1px;
}

.icon-wrapper {
  white-space: nowrap;
}

.icon {
  display: inline-block;
}
`;

export { componentStyles as linkStyles };
export { sharedStyles };
