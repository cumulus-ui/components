// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const menuDropdownStyles = css`
.menu-dropdown--button {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  min-inline-size: 0;
  word-break: break-word;
  font-weight: var(--font-weight-button, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  white-space: nowrap;
  block-size: 100%;
  padding-inline: var(--space-xs, 8px);
  text-decoration: none;
  cursor: pointer;
  border-block: transparent;
  border-inline: transparent;
  background: transparent;
  color: var(--color-text-interactive-default, #424650);
}
.menu-dropdown--button:hover {
  color: var(--color-text-interactive-hover, #0f141a);
  text-decoration: none;
}
.menu-dropdown--button:active, .menu-dropdown--button.menu-dropdown--expanded {
  background: transparent;
  color: var(--color-text-interactive-active, #0f141a);
}
.menu-dropdown--button.menu-dropdown--expanded {
  color: var(--color-text-accent, #006ce0);
}
.menu-dropdown--button:focus {
  outline: none;
  text-decoration: none;
}
.menu-dropdown--button.menu-dropdown--offset-right-none {
  margin-inline-end: 0;
}
.menu-dropdown--button.menu-dropdown--offset-right-l {
  margin-inline-end: var(--space-s, 12px);
}
.menu-dropdown--button.menu-dropdown--offset-right-xxl {
  margin-inline-end: var(--space-xl, 24px);
}
:host-context([data-awsui-focus-visible=true]) .menu-dropdown--button:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .menu-dropdown--button:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(-1px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .menu-dropdown--button:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * -1px);
  inset-block-start: calc(-1 * -1px);
  inline-size: calc(100% + -1px + -1px);
  block-size: calc(100% + -1px + -1px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}

.menu-dropdown--text {
  margin-inline-end: var(--space-xs, 8px);
}

.menu-dropdown--icon + .menu-dropdown--text {
  margin-inline-start: var(--space-xs, 8px);
}
`;
