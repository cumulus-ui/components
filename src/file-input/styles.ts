// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  position: relative;
}

.file-input {
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  block-size: 1px;
  inline-size: 1px;
  margin-block: -1px;
  margin-inline: -1px;
  padding-block: 0;
  padding-inline: 0;
  overflow: hidden;
}

:host-context([data-awsui-focus-visible=true]) .file-input-button.force-focus-outline-icon {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .file-input-button.force-focus-outline-icon {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-focus-outline-gutter, 4px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .file-input-button.force-focus-outline-icon::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-button-focus-outline-gutter, 4px));
  inset-block-start: calc(-1 * var(--space-button-icon-focus-outline-gutter-vertical, 0px));
  inline-size: calc(100% + var(--space-button-focus-outline-gutter, 4px) + var(--space-button-focus-outline-gutter, 4px));
  block-size: calc(100% + var(--space-button-icon-focus-outline-gutter-vertical, 0px) + var(--space-button-icon-focus-outline-gutter-vertical, 0px));
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
:host-context([data-awsui-focus-visible=true]) .file-input-button.force-focus-outline-button {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .file-input-button.force-focus-outline-button {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-focus-outline-gutter, 4px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .file-input-button.force-focus-outline-button::before {
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
`;

export { componentStyles as fileInputStyles };
export { sharedStyles };
