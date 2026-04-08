// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.tutorial-panel {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  padding-block-start: 0;
  padding-block-end: var(--space-m, 16px);
  padding-inline: var(--space-l, 20px);
}
.tutorial-panel:focus {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .tutorial-panel:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .tutorial-panel:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(0px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .tutorial-panel:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 0px);
  inset-block-start: calc(-1 * 0px);
  inline-size: calc(100% + 0px + 0px);
  block-size: calc(100% + 0px + 0px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
`;

export { componentStyles as tutorialPanelStyles };
export { sharedStyles };
