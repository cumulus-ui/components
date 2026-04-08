// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  /* used in test-utils for component to distinguish input from other input-like components, for example autosuggest */
}

.input {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-inline: var(--space-field-horizontal-0aq2ch, 12px);
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-body-default-vvtq8u, #0f141a));
  inline-size: 100%;
  cursor: text;
  box-sizing: border-box;
  background-color: var(--awsui-style-background-default-6b9ypa, var(--color-background-input-default-ifz5bb, #ffffff));
  border-start-start-radius: var(--border-radius-input-7q0str, 8px);
  border-start-end-radius: var(--border-radius-input-7q0str, 8px);
  border-end-start-radius: var(--border-radius-input-7q0str, 8px);
  border-end-end-radius: var(--border-radius-input-7q0str, 8px);
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--awsui-style-border-color-default-6b9ypa, var(--color-border-input-default-317xk5, #8c8c94));
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--awsui-style-border-color-default-6b9ypa, var(--color-border-input-default-317xk5, #8c8c94));
  box-shadow: var(--awsui-style-box-shadow-default-6b9ypa);
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  block-size: var(--size-vertical-input-p1d7xx, 32px);
}
.input:hover {
  border-color: var(--awsui-style-border-color-hover-6b9ypa, var(--awsui-style-border-color-default-6b9ypa, var(--color-border-input-default-317xk5, #8c8c94)));
  color: var(--awsui-style-color-hover-6b9ypa, var(--awsui-style-border-color-default-6b9ypa, var(--color-text-body-default-vvtq8u, #0f141a)));
  background-color: var(--awsui-style-background-hover-6b9ypa, var(--awsui-style-background-default-6b9ypa, var(--color-background-input-default-ifz5bb, #ffffff)));
  box-shadow: var(--awsui-style-box-shadow-hover-6b9ypa, --awsui-style-box-shadow-default-6b9ypa);
}
.input.input-readonly {
  background-color: var(--awsui-style-background-readonly-6b9ypa, var(--awsui-style-background-default-6b9ypa, var(--color-background-input-default-ifz5bb, #ffffff)));
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--awsui-style-border-color-readonly-6b9ypa, var(--awsui-style-border-color-default-6b9ypa, var(--color-border-input-disabled-zgnzvk, #ebebf0)));
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--awsui-style-border-color-readonly-6b9ypa, var(--awsui-style-border-color-default-6b9ypa, var(--color-border-input-disabled-zgnzvk, #ebebf0)));
  color: var(--awsui-style-color-readonly-6b9ypa, var(--awsui-style-color-default-6b9ypa, var(--color-text-body-default-vvtq8u, #0f141a)));
  box-shadow: var(--awsui-style-box-shadow-readonly-6b9ypa);
}
.input::-webkit-input-placeholder {
  color: var(--awsui-style-placeholder-color-6b9ypa, var(--color-text-input-placeholder-dclg8u, #656871));
  font-size: var(--awsui-style-placeholder-font-size-6b9ypa);
  font-style: var(--awsui-style-placeholder-font-style-6b9ypa, italic);
  font-weight: var(--awsui-style-placeholder-font-weight-6b9ypa);
  -webkit-user-select: none;
          user-select: none;
}
.input::-moz-placeholder {
  color: var(--awsui-style-placeholder-color-6b9ypa, var(--color-text-input-placeholder-dclg8u, #656871));
  font-size: var(--awsui-style-placeholder-font-size-6b9ypa);
  font-style: var(--awsui-style-placeholder-font-style-6b9ypa, italic);
  font-weight: var(--awsui-style-placeholder-font-weight-6b9ypa);
  opacity: 1;
}
.input:-moz-placeholder {
  color: var(--awsui-style-placeholder-color-6b9ypa, var(--color-text-input-placeholder-dclg8u, #656871));
  font-size: var(--awsui-style-placeholder-font-size-6b9ypa);
  font-style: var(--awsui-style-placeholder-font-style-6b9ypa, italic);
  font-weight: var(--awsui-style-placeholder-font-weight-6b9ypa);
  opacity: 1;
}
.input:focus {
  outline: 2px dotted transparent;
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--awsui-style-border-color-focus-6b9ypa, var(--color-border-input-focused-4z0pgn, #006ce0));
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--awsui-style-border-color-focus-6b9ypa, var(--color-border-input-focused-4z0pgn, #006ce0));
  border-start-start-radius: var(--border-radius-input-7q0str, 8px);
  border-start-end-radius: var(--border-radius-input-7q0str, 8px);
  border-end-start-radius: var(--border-radius-input-7q0str, 8px);
  border-end-end-radius: var(--border-radius-input-7q0str, 8px);
  box-shadow: var(--awsui-style-box-shadow-focus-6b9ypa, 0 0 0 var(--border-control-focus-ring-shadow-spread-9mjajk, 1px) var(--color-border-item-focused-uk47pl, #006ce0));
  color: var(--awsui-style-color-focus-6b9ypa, var(--color-text-body-default-vvtq8u, #0f141a));
  background-color: var(--awsui-style-background-focus-6b9ypa, var(--color-background-input-default-ifz5bb, #ffffff));
}
.input:disabled {
  background-color: var(--awsui-style-background-disabled-6b9ypa, var(--color-background-input-disabled-dihaja, #ebebf0));
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--awsui-style-border-color-disabled-6b9ypa, var(--color-border-input-disabled-zgnzvk, #ebebf0));
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--awsui-style-border-color-disabled-6b9ypa, var(--color-border-input-disabled-zgnzvk, #ebebf0));
  color: var(--awsui-style-color-disabled-6b9ypa, var(--color-text-input-disabled-wh1f3y, #b4b4bb));
  cursor: default;
  box-shadow: var(--awsui-style-box-shadow-disabled-6b9ypa);
}
.input:disabled::-webkit-input-placeholder {
  color: var(--awsui-style-placeholder-color-6b9ypa, var(--color-text-input-placeholder-disabled-wg87og, #b4b4bb));
  -webkit-user-select: none;
          user-select: none;
}
.input:disabled::-moz-placeholder {
  color: var(--awsui-style-placeholder-color-6b9ypa, var(--color-text-input-placeholder-disabled-wg87og, #b4b4bb));
  opacity: 1;
}
.input:disabled:-moz-placeholder {
  color: var(--awsui-style-placeholder-color-6b9ypa, var(--color-text-input-placeholder-disabled-wg87og, #b4b4bb));
  opacity: 1;
}
.input:invalid {
  box-shadow: none;
}
.input.input-invalid {
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-status-error-ksqavh, #db0000));
  border-color: var(--awsui-style-border-color-default-6b9ypa, var(--color-text-status-error-ksqavh, #db0000));
  padding-inline-start: calc(var(--space-field-horizontal-0aq2ch, 12px) - (var(--border-invalid-width-3xd6e1, 8px) - var(--border-width-field-2xc78x, 1px)));
  border-inline-start-width: var(--border-invalid-width-3xd6e1, 8px);
}
.input.input-invalid:focus {
  box-shadow: var(--awsui-style-box-shadow-focus-6b9ypa, 0 0 0 var(--border-control-invalid-focus-ring-shadow-spread-9jjf96, 2px) var(--color-border-item-focused-uk47pl, #006ce0));
}
.input.input-invalid.input-has-icon-left {
  padding-inline-start: calc(var(--space-field-icon-offset-ikwzwx, 36px) - (var(--border-invalid-width-3xd6e1, 8px) - var(--border-width-field-2xc78x, 1px)));
}
.input.input-warning {
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-status-warning-6meo06, #855900));
  border-color: var(--awsui-style-border-color-default-6b9ypa, var(--color-text-status-warning-6meo06, #855900));
  padding-inline-start: calc(var(--space-field-horizontal-0aq2ch, 12px) - (var(--border-invalid-width-3xd6e1, 8px) - var(--border-width-field-2xc78x, 1px)));
  border-inline-start-width: var(--border-invalid-width-3xd6e1, 8px);
}
.input.input-warning:focus {
  box-shadow: var(--awsui-style-box-shadow-focus-6b9ypa, 0 0 0 var(--border-control-invalid-focus-ring-shadow-spread-9jjf96, 2px) var(--color-border-item-focused-uk47pl, #006ce0));
}
.input.input-warning.input-has-icon-left {
  padding-inline-start: calc(var(--space-field-icon-offset-ikwzwx, 36px) - (var(--border-invalid-width-3xd6e1, 8px) - var(--border-width-field-2xc78x, 1px)));
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
  padding-inline-start: var(--space-field-icon-offset-ikwzwx, 36px);
}
.input.input-has-icon-right {
  padding-inline-end: var(--space-field-icon-offset-ikwzwx, 36px);
}
.input.input-has-no-border-radius {
  border-start-start-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  border-start-end-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  border-end-start-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  border-end-end-radius: var(--border-radius-dropdown-fgc2a1, 8px);
}

.input-container {
  display: flex;
  position: relative;
}

.input-icon-left {
  position: absolute;
  pointer-events: none;
  inset-inline-start: var(--space-field-horizontal-0aq2ch, 12px);
  inset-block-start: calc(50% - var(--line-height-body-m-2mh3ke, 20px) / 2);
}

.input-icon-right {
  position: absolute;
  inset-block-start: calc(calc(50% - var(--line-height-body-m-2mh3ke, 20px) / 2) - var(--space-xxxs-pajhad, 2px));
  inset-inline-end: calc(var(--space-field-horizontal-0aq2ch, 12px) - var(--space-xxs-hwfkai, 4px));
}
`;

export { componentStyles as inputStyles };
export { sharedStyles };
