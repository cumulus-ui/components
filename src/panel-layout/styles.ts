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
  block-size: 100%;
  overflow: hidden;
  display: flex;
}

.panel {
  display: flex;
  flex-shrink: 0;
}
.panel > .handle {
  display: flex;
  align-items: center;
}
.panel > .panel-content {
  overflow-y: auto;
  overflow-x: visible;
  flex-grow: 1;
}
:host-context([data-awsui-focus-visible=true]) .panel > .panel-content:focus {
  border-start-start-radius: calc(var(--border-radius-control-default-focus-ring, 4px) + 2px);
  border-start-end-radius: calc(var(--border-radius-control-default-focus-ring, 4px) + 2px);
  border-end-start-radius: calc(var(--border-radius-control-default-focus-ring, 4px) + 2px);
  border-end-end-radius: calc(var(--border-radius-control-default-focus-ring, 4px) + 2px);
  outline: 2px solid var(--color-border-item-focused, #006ce0);
  outline-offset: calc(-1 * 2px);
}
.display-main-only > .panel {
  display: none;
}
.display-panel-only > .panel {
  flex: 1;
  overflow-y: auto;
  overflow-x: visible;
}

.content {
  overflow-y: auto;
  flex-grow: 1;
  flex-shrink: 1;
}
.display-panel-only > .content {
  display: none;
}
:host-context([data-awsui-focus-visible=true]) .content:focus {
  border-start-start-radius: calc(var(--border-radius-control-default-focus-ring, 4px) + 2px);
  border-start-end-radius: calc(var(--border-radius-control-default-focus-ring, 4px) + 2px);
  border-end-start-radius: calc(var(--border-radius-control-default-focus-ring, 4px) + 2px);
  border-end-end-radius: calc(var(--border-radius-control-default-focus-ring, 4px) + 2px);
  outline: 2px solid var(--color-border-item-focused, #006ce0);
  outline-offset: calc(-1 * 2px);
}
`;

export { componentStyles as panelLayoutStyles };
export { sharedStyles };
