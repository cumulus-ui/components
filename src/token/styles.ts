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

.dismiss-button {
  align-self: flex-start;
  margin-block-end: 0;
  margin-inline-start: var(--space-xxs, 4px);
  border-block: var(--border-width-field, 1px) solid transparent;
  border-inline: var(--border-width-field, 1px) solid transparent;
  padding-block: 0;
  padding-inline: var(--space-xxs, 4px);
  color: var(--awsui-token-style-dismiss-color-default, var(--color-text-button-inline-icon-default, #006ce0));
  background-color: transparent;
  cursor: pointer;
  --awsui-style-focus-ring-box-shadow: 0 0 0 var(--awsui-style-focus-ring-border-width, 2px) var(--awsui-style-focus-ring-border-color, var(--color-border-item-focused, #006ce0));
}
:host-context([data-awsui-focus-visible=true]) .dismiss-button:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .dismiss-button:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(0px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .dismiss-button:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 0px);
  inset-block-start: calc(-1 * 0px);
  inline-size: calc(100% + 0px + 0px);
  block-size: calc(100% + 0px + 0px);
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow);
}
.dismiss-button:focus {
  outline: none;
  text-decoration: none;
}
.dismiss-button:hover {
  color: var(--awsui-token-style-dismiss-color-hover, var(--color-text-button-inline-icon-hover, #002b66));
}
.dismiss-button-inline {
  padding-inline: 0;
  display: flex;
  align-items: center;
  align-self: center;
}

.icon {
  padding-inline-end: var(--space-xs, 8px);
  align-self: flex-start;
  display: flex;
  flex-shrink: 0;
}
.icon-inline {
  padding-inline-end: var(--space-xxs, 4px);
  align-self: center;
}

.token-normal {
  block-size: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-xxs, 4px);
}

.token-inline {
  display: inline-flex;
  max-inline-size: 100%;
}
:host-context([data-awsui-focus-visible=true]) .token-inline:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .token-inline:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(0px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .token-inline:focus::before {
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

.token-option-inline {
  max-block-size: 20px;
}

.token-box {
  position: relative;
  block-size: 100%;
  border-block: var(--border-width-token, 2px) solid var(--awsui-token-style-border-color-default, var(--color-border-item-selected, #006ce0));
  border-inline: var(--border-width-token, 2px) solid var(--awsui-token-style-border-color-default, var(--color-border-item-selected, #006ce0));
  padding-block-start: var(--space-scaled-xxs, 4px);
  padding-block-end: var(--space-scaled-xxs, 4px);
  padding-inline-start: var(--space-field-horizontal, 12px);
  padding-inline-end: var(--space-xxs, 4px);
  display: flex;
  align-items: flex-start;
  background: var(--awsui-token-style-background-default, var(--color-background-item-selected, #f0fbff));
  border-start-start-radius: var(--border-radius-token, 8px);
  border-start-end-radius: var(--border-radius-token, 8px);
  border-end-start-radius: var(--border-radius-token, 8px);
  border-end-end-radius: var(--border-radius-token, 8px);
  color: var(--color-text-body-default, #0f141a);
  box-sizing: border-box;
}
.token-box-without-dismiss {
  padding-inline-end: var(--space-field-horizontal, 12px);
}

.token-box-inline {
  position: relative;
  block-size: 20px;
  max-block-size: 20px;
  border-block: var(--border-width-field, 1px) solid var(--awsui-token-style-border-color-default, var(--color-border-item-selected, #006ce0));
  border-inline: var(--border-width-field, 1px) solid var(--awsui-token-style-border-color-default, var(--color-border-item-selected, #006ce0));
  padding-inline-start: var(--space-scaled-xxs, 4px);
  padding-inline-end: var(--space-scaled-xxs, 4px);
  display: flex;
  align-items: center;
  background: var(--awsui-token-style-background-default, var(--color-background-item-selected, #f0fbff));
  border-start-start-radius: var(--space-scaled-xxs, 4px);
  border-start-end-radius: var(--space-scaled-xxs, 4px);
  border-end-start-radius: var(--space-scaled-xxs, 4px);
  border-end-end-radius: var(--space-scaled-xxs, 4px);
  color: var(--color-text-body-default, #0f141a);
  box-sizing: border-box;
  max-inline-size: 100%;
}

.disable-padding {
  padding-block-start: 0;
  padding-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
}

.token-box-readonly,
.token-box-disabled {
  pointer-events: none;
}
.token-box-readonly > .dismiss-button,
.token-box-disabled > .dismiss-button {
  cursor: initial;
}

.token-box-readonly {
  border-color: var(--awsui-token-style-border-color-read-only, var(--color-border-input-disabled, #ebebf0));
  background: var(--awsui-token-style-background-read-only, var(--color-background-container-content, #ffffff));
}
.token-box-readonly > .dismiss-button {
  color: var(--awsui-token-style-dismiss-color-read-only, var(--color-text-button-inline-icon-disabled, #b4b4bb));
}

.token-box-disabled {
  border-color: var(--awsui-token-style-border-color-disabled, var(--color-border-control-disabled, #dedee3));
  background: var(--awsui-token-style-background-disabled, var(--color-background-container-content, #ffffff));
  color: var(--color-text-disabled, #b4b4bb);
}
.token-box-disabled > .dismiss-button {
  color: var(--awsui-token-style-dismiss-color-disabled, var(--color-text-button-inline-icon-disabled, #b4b4bb));
}
`;

export { componentStyles as tokenStyles };
export { sharedStyles };
