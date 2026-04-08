// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const appLayoutTogglesStyles = css`
.app-layout-toggles--toggle-button {
  cursor: pointer;
  border-block: 0;
  border-inline: 0;
  padding-block: calc(var(--space-scaled-xxs, 4px) + 1px);
  padding-inline: calc(var(--space-xxs, 4px) + 1px);
  background: transparent;
  color: currentColor;
}
.app-layout-toggles--toggle-button:focus {
  outline: none;
  text-decoration: none;
}
:host-context([data-awsui-focus-visible=true]) .app-layout-toggles--toggle-button:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .app-layout-toggles--toggle-button:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-inline-icon-focus-outline-gutter, 0px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .app-layout-toggles--toggle-button:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-button-inline-icon-focus-outline-gutter, 0px));
  inset-block-start: calc(-1 * var(--space-button-inline-icon-focus-outline-gutter, 0px));
  inline-size: calc(100% + var(--space-button-inline-icon-focus-outline-gutter, 0px) + var(--space-button-inline-icon-focus-outline-gutter, 0px));
  block-size: calc(100% + var(--space-button-inline-icon-focus-outline-gutter, 0px) + var(--space-button-inline-icon-focus-outline-gutter, 0px));
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}

.app-layout-toggles--close-button {
  position: absolute;
  outline: none;
  inset-inline-end: var(--space-m, 16px);
  inset-block-start: var(--size-vertical-panel-icon-offset, 15px);
  z-index: 1;
}
`;
