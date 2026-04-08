// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  /* used in test-utils for component to distinguish input from other input-like components, for example autosuggest */
}

.input {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  padding-block: var(--space-scaled-xxs, 4px);
  padding-inline: var(--space-field-horizontal, 12px);
  color: var(--awsui-style-color-default, var(--color-text-body-default, #0f141a));
  inline-size: 100%;
  cursor: text;
  box-sizing: border-box;
  background-color: var(--awsui-style-background-default, var(--color-background-input-default, #ffffff));
  border-start-start-radius: var(--border-radius-input, 8px);
  border-start-end-radius: var(--border-radius-input, 8px);
  border-end-start-radius: var(--border-radius-input, 8px);
  border-end-end-radius: var(--border-radius-input, 8px);
  border-block: var(--border-width-field, 1px) solid var(--awsui-style-border-color-default, var(--color-border-input-default, #8c8c94));
  border-inline: var(--border-width-field, 1px) solid var(--awsui-style-border-color-default, var(--color-border-input-default, #8c8c94));
  box-shadow: var(--awsui-style-box-shadow-default);
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  block-size: var(--size-vertical-input, 32px);
}
.input:hover {
  border-color: var(--awsui-style-border-color-hover, var(--awsui-style-border-color-default, var(--color-border-input-default, #8c8c94)));
  color: var(--awsui-style-color-hover, var(--awsui-style-border-color-default, var(--color-text-body-default, #0f141a)));
  background-color: var(--awsui-style-background-hover, var(--awsui-style-background-default, var(--color-background-input-default, #ffffff)));
  box-shadow: var(--awsui-style-box-shadow-hover, --awsui-style-box-shadow-default);
}
.input.input-readonly {
  background-color: var(--awsui-style-background-readonly, var(--awsui-style-background-default, var(--color-background-input-default, #ffffff)));
  border-block: var(--border-width-field, 1px) solid var(--awsui-style-border-color-readonly, var(--awsui-style-border-color-default, var(--color-border-input-disabled, #ebebf0)));
  border-inline: var(--border-width-field, 1px) solid var(--awsui-style-border-color-readonly, var(--awsui-style-border-color-default, var(--color-border-input-disabled, #ebebf0)));
  color: var(--awsui-style-color-readonly, var(--awsui-style-color-default, var(--color-text-body-default, #0f141a)));
  box-shadow: var(--awsui-style-box-shadow-readonly);
}
.input::-webkit-input-placeholder {
  color: var(--awsui-style-placeholder-color, var(--color-text-input-placeholder, #656871));
  font-size: var(--awsui-style-placeholder-font-size);
  font-style: var(--awsui-style-placeholder-font-style, italic);
  font-weight: var(--awsui-style-placeholder-font-weight);
  -webkit-user-select: none;
          user-select: none;
}
.input::-moz-placeholder {
  color: var(--awsui-style-placeholder-color, var(--color-text-input-placeholder, #656871));
  font-size: var(--awsui-style-placeholder-font-size);
  font-style: var(--awsui-style-placeholder-font-style, italic);
  font-weight: var(--awsui-style-placeholder-font-weight);
  opacity: 1;
}
.input:-moz-placeholder {
  color: var(--awsui-style-placeholder-color, var(--color-text-input-placeholder, #656871));
  font-size: var(--awsui-style-placeholder-font-size);
  font-style: var(--awsui-style-placeholder-font-style, italic);
  font-weight: var(--awsui-style-placeholder-font-weight);
  opacity: 1;
}
.input:focus {
  outline: 2px dotted transparent;
  border-block: var(--border-width-field, 1px) solid var(--awsui-style-border-color-focus, var(--color-border-input-focused, #006ce0));
  border-inline: var(--border-width-field, 1px) solid var(--awsui-style-border-color-focus, var(--color-border-input-focused, #006ce0));
  border-start-start-radius: var(--border-radius-input, 8px);
  border-start-end-radius: var(--border-radius-input, 8px);
  border-end-start-radius: var(--border-radius-input, 8px);
  border-end-end-radius: var(--border-radius-input, 8px);
  box-shadow: var(--awsui-style-box-shadow-focus, 0 0 0 var(--border-control-focus-ring-shadow-spread, 1px) var(--color-border-item-focused, #006ce0));
  color: var(--awsui-style-color-focus, var(--color-text-body-default, #0f141a));
  background-color: var(--awsui-style-background-focus, var(--color-background-input-default, #ffffff));
}
.input:disabled {
  background-color: var(--awsui-style-background-disabled, var(--color-background-input-disabled, #ebebf0));
  border-block: var(--border-width-field, 1px) solid var(--awsui-style-border-color-disabled, var(--color-border-input-disabled, #ebebf0));
  border-inline: var(--border-width-field, 1px) solid var(--awsui-style-border-color-disabled, var(--color-border-input-disabled, #ebebf0));
  color: var(--awsui-style-color-disabled, var(--color-text-input-disabled, #b4b4bb));
  cursor: default;
  box-shadow: var(--awsui-style-box-shadow-disabled);
}
.input:disabled::-webkit-input-placeholder {
  color: var(--awsui-style-placeholder-color, var(--color-text-input-placeholder-disabled, #b4b4bb));
  -webkit-user-select: none;
          user-select: none;
}
.input:disabled::-moz-placeholder {
  color: var(--awsui-style-placeholder-color, var(--color-text-input-placeholder-disabled, #b4b4bb));
  opacity: 1;
}
.input:disabled:-moz-placeholder {
  color: var(--awsui-style-placeholder-color, var(--color-text-input-placeholder-disabled, #b4b4bb));
  opacity: 1;
}
.input:invalid {
  box-shadow: none;
}
.input.input-invalid {
  color: var(--awsui-style-color-default, var(--color-text-status-error, #db0000));
  border-color: var(--awsui-style-border-color-default, var(--color-text-status-error, #db0000));
  padding-inline-start: calc(var(--space-field-horizontal, 12px) - (var(--border-invalid-width, 8px) - var(--border-width-field, 1px)));
  border-inline-start-width: var(--border-invalid-width, 8px);
}
.input.input-invalid:focus {
  box-shadow: var(--awsui-style-box-shadow-focus, 0 0 0 var(--border-control-invalid-focus-ring-shadow-spread, 2px) var(--color-border-item-focused, #006ce0));
}
.input.input-invalid.input-has-icon-left {
  padding-inline-start: calc(var(--space-field-icon-offset, 36px) - (var(--border-invalid-width, 8px) - var(--border-width-field, 1px)));
}
.input.input-warning {
  color: var(--awsui-style-color-default, var(--color-text-status-warning, #855900));
  border-color: var(--awsui-style-border-color-default, var(--color-text-status-warning, #855900));
  padding-inline-start: calc(var(--space-field-horizontal, 12px) - (var(--border-invalid-width, 8px) - var(--border-width-field, 1px)));
  border-inline-start-width: var(--border-invalid-width, 8px);
}
.input.input-warning:focus {
  box-shadow: var(--awsui-style-box-shadow-focus, 0 0 0 var(--border-control-invalid-focus-ring-shadow-spread, 2px) var(--color-border-item-focused, #006ce0));
}
.input.input-warning.input-has-icon-left {
  padding-inline-start: calc(var(--space-field-icon-offset, 36px) - (var(--border-invalid-width, 8px) - var(--border-width-field, 1px)));
}
.input.input-type-search {
  box-sizing: border-box;
  -webkit-appearance: none;
}
.input.input-type-search::-webkit-search-decoration {
  -webkit-appearance: none;
}
.input.input-type-search::-webkit-search-cancel-button {
  display: none;
}
.input.input-has-icon-left {
  padding-inline-start: var(--space-field-icon-offset, 36px);
}
.input.input-has-icon-right {
  padding-inline-end: var(--space-field-icon-offset, 36px);
}
.input.input-has-no-border-radius {
  border-start-start-radius: var(--border-radius-dropdown, 8px);
  border-start-end-radius: var(--border-radius-dropdown, 8px);
  border-end-start-radius: var(--border-radius-dropdown, 8px);
  border-end-end-radius: var(--border-radius-dropdown, 8px);
}

.input-container {
  display: flex;
  position: relative;
}

.input-icon-left {
  position: absolute;
  pointer-events: none;
  inset-inline-start: var(--space-field-horizontal, 12px);
  inset-block-start: calc(50% - var(--line-height-body-m, 20px) / 2);
}

.input-icon-right {
  position: absolute;
  inset-block-start: calc(calc(50% - var(--line-height-body-m, 20px) / 2) - var(--space-xxxs, 2px));
  inset-inline-end: calc(var(--space-field-horizontal, 12px) - var(--space-xxs, 4px));
}
`;

export { componentStyles as inputStyles };
export { sharedStyles };
