// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const expandToggleButtonStyles = css`
.expand-toggle-button--expand-toggle-icon {
  transition: transform var(--motion-duration-rotate-90, 135ms) var(--motion-easing-rotate-90, cubic-bezier(0.165, 0.84, 0.44, 1));
}
@media (prefers-reduced-motion: reduce) {
  .expand-toggle-button--expand-toggle-icon {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .expand-toggle-button--expand-toggle-icon, .awsui-mode-entering .expand-toggle-button--expand-toggle-icon {
  animation: none;
  transition: none;
}

.expand-toggle-button--expand-toggle-icon {
  transform: rotate(-90deg);

}
.expand-toggle-button--expand-toggle-icon:dir(rtl) {
  transform: rotate(90deg);
}
.expand-toggle-button--expand-toggle-icon-expanded {
  transform: rotate(0deg);

}
.expand-toggle-button--expand-toggle-icon-expanded:dir(rtl) {
  transform: rotate(0deg);
}

.expand-toggle-button--expand-toggle {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  cursor: pointer;
  inline-size: var(--space-m, 16px);
  block-size: var(--space-m, 16px);
  border-block: 0;
  border-inline: 0;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  background: none;
  outline: 0;
  color: var(--color-text-interactive-default, #424650);
}
:host-context([data-awsui-focus-visible=true]) .expand-toggle-button--expand-toggle:not(.expand-toggle-button--disable-focus-highlight):focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .expand-toggle-button--expand-toggle:not(.expand-toggle-button--disable-focus-highlight):focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-focus-outline-gutter, 4px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .expand-toggle-button--expand-toggle:not(.expand-toggle-button--disable-focus-highlight):focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-button-focus-outline-gutter, 4px));
  inset-block-start: calc(-1 * var(--space-button-focus-outline-gutter, 4px));
  inline-size: calc(100% + var(--space-button-focus-outline-gutter, 4px) + var(--space-button-focus-outline-gutter, 4px));
  block-size: calc(100% + var(--space-button-focus-outline-gutter, 4px) + var(--space-button-focus-outline-gutter, 4px));
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
.expand-toggle-button--expand-toggle:hover {
  color: var(--color-text-interactive-hover, #0f141a);
}
.expand-toggle-button--expand-toggle:active {
  color: var(--color-text-interactive-active, #0f141a);
}
`;
