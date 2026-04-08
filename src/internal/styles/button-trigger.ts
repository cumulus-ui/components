// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const buttonTriggerStyles = css`
.button-trigger--button-trigger > .button-trigger--arrow {
  transition: transform var(--motion-duration-rotate-180-cxi9g7, 135ms) var(--motion-easing-rotate-180-7a58rc, cubic-bezier(0.165, 0.84, 0.44, 1));
}
@media (prefers-reduced-motion: reduce) {
  .button-trigger--button-trigger > .button-trigger--arrow {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .button-trigger--button-trigger > .button-trigger--arrow, .awsui-mode-entering .button-trigger--button-trigger > .button-trigger--arrow {
  animation: none;
  transition: none;
}

.button-trigger--button-trigger {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  position: relative;
  display: flex;
  inline-size: 100%;
  justify-content: space-between;
  align-items: center;
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-inline: var(--space-field-horizontal-0aq2ch, 12px);
  background-color: var(--color-background-input-default-ifz5bb, #ffffff);
  border-start-start-radius: var(--border-radius-input-7q0str, 8px);
  border-start-end-radius: var(--border-radius-input-7q0str, 8px);
  border-end-start-radius: var(--border-radius-input-7q0str, 8px);
  border-end-end-radius: var(--border-radius-input-7q0str, 8px);
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--color-border-input-default-317xk5, #8c8c94);
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--color-border-input-default-317xk5, #8c8c94);
  min-block-size: var(--size-vertical-input-p1d7xx, 32px);
}
.button-trigger--button-trigger.button-trigger--in-filtering-token-root, .button-trigger--button-trigger.button-trigger--in-filtering-token-nested {
  padding-block: 0px;
  padding-inline: var(--space-field-horizontal-0aq2ch, 12px);
  border-block-width: var(--border-width-token-2ukdpu, 2px);
  border-inline-width: var(--border-width-token-2ukdpu, 2px);
  border-color: var(--color-border-item-selected-wl5ttm, #006ce0);
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  block-size: 100%;
  min-block-size: unset;
}
:host-context([data-awsui-focus-visible=true]) .button-trigger--button-trigger.button-trigger--in-filtering-token-root:focus, :host-context([data-awsui-focus-visible=true]) .button-trigger--button-trigger.button-trigger--in-filtering-token-nested:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .button-trigger--button-trigger.button-trigger--in-filtering-token-root:focus, :host-context([data-awsui-focus-visible=true]) .button-trigger--button-trigger.button-trigger--in-filtering-token-nested:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-filtering-token-operation-select-focus-outline-gutter-jacx1t, -5px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .button-trigger--button-trigger.button-trigger--in-filtering-token-root:focus::before, :host-context([data-awsui-focus-visible=true]) .button-trigger--button-trigger.button-trigger--in-filtering-token-nested:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-filtering-token-operation-select-focus-outline-gutter-jacx1t, -5px));
  inset-block-start: calc(-1 * var(--space-filtering-token-operation-select-focus-outline-gutter-jacx1t, -5px));
  inline-size: calc(100% + var(--space-filtering-token-operation-select-focus-outline-gutter-jacx1t, -5px) + var(--space-filtering-token-operation-select-focus-outline-gutter-jacx1t, -5px));
  block-size: calc(100% + var(--space-filtering-token-operation-select-focus-outline-gutter-jacx1t, -5px) + var(--space-filtering-token-operation-select-focus-outline-gutter-jacx1t, -5px));
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
.button-trigger--button-trigger.button-trigger--in-filtering-token-nested {
  border-start-start-radius: calc(var(--border-radius-input-7q0str, 8px) / 2);
  border-end-start-radius: calc(var(--border-radius-input-7q0str, 8px) / 2);
}
.button-trigger--button-trigger.button-trigger--has-caret {
  padding-inline-end: var(--space-field-icon-offset-ikwzwx, 36px);
}
.button-trigger--button-trigger > .button-trigger--placeholder {
  color: var(--color-text-input-placeholder-dclg8u, #656871);
  font-style: italic;
}
.button-trigger--button-trigger > .button-trigger--arrow {
  position: absolute;
  inset-inline-end: var(--space-field-horizontal-0aq2ch, 12px);
  inset-block-start: calc(50% - var(--line-height-body-m-2mh3ke, 20px) / 2);
  color: var(--color-text-button-inline-icon-default-sm4ql6, #006ce0);
}
.button-trigger--button-trigger:hover > .button-trigger--arrow {
  color: var(--color-text-button-inline-icon-hover-rbyzfc, #002b66);
}
.button-trigger--button-trigger.button-trigger--pressed > .button-trigger--arrow {
  transform: rotate(-180deg);
}
.button-trigger--button-trigger.button-trigger--disabled {
  background-color: var(--color-background-input-disabled-dihaja, #ebebf0);
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--color-border-input-disabled-zgnzvk, #ebebf0);
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--color-border-input-disabled-zgnzvk, #ebebf0);
  color: var(--color-text-input-disabled-wh1f3y, #b4b4bb);
  cursor: auto;
}
.button-trigger--button-trigger.button-trigger--disabled > .button-trigger--arrow {
  color: var(--color-text-button-inline-icon-disabled-82hho0, #b4b4bb);
}
.button-trigger--button-trigger.button-trigger--disabled.button-trigger--in-filtering-token {
  background-color: var(--color-background-input-disabled-dihaja, #ebebf0);
  border-block: var(--border-width-token-2ukdpu, 2px) solid var(--color-border-input-disabled-zgnzvk, #ebebf0);
  border-inline: var(--border-width-token-2ukdpu, 2px) solid var(--color-border-input-disabled-zgnzvk, #ebebf0);
  color: var(--color-text-input-disabled-wh1f3y, #b4b4bb);
  cursor: auto;
  border-color: var(--color-border-control-disabled-uj7t08, #dedee3);
}
.button-trigger--button-trigger.button-trigger--disabled > .button-trigger--placeholder {
  color: var(--color-text-input-placeholder-disabled-wg87og, #b4b4bb);
}
.button-trigger--button-trigger.button-trigger--readonly:not(.button-trigger--button-trigger.button-trigger--disabled):not(.button-trigger--button-trigger.button-trigger--in-filtering-token) {
  background-color: var(--color-background-input-default-ifz5bb, #ffffff);
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--color-border-input-disabled-zgnzvk, #ebebf0);
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--color-border-input-disabled-zgnzvk, #ebebf0);
}
.button-trigger--button-trigger:focus {
  outline: none;
  text-decoration: none;
}
:host-context([data-awsui-focus-visible=true]) .button-trigger--button-trigger:not(.button-trigger--in-filtering-token):focus {
  outline: 2px dotted transparent;
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--color-border-input-focused-4z0pgn, #006ce0);
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--color-border-input-focused-4z0pgn, #006ce0);
  border-start-start-radius: var(--border-radius-input-7q0str, 8px);
  border-start-end-radius: var(--border-radius-input-7q0str, 8px);
  border-end-start-radius: var(--border-radius-input-7q0str, 8px);
  border-end-end-radius: var(--border-radius-input-7q0str, 8px);
  box-shadow: 0 0 0 var(--border-control-focus-ring-shadow-spread-9mjajk, 1px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.button-trigger--button-trigger:not(.button-trigger--in-filtering-token):invalid {
  box-shadow: none;
}
.button-trigger--button-trigger:not(.button-trigger--in-filtering-token).button-trigger--invalid, .button-trigger--button-trigger:not(.button-trigger--in-filtering-token).button-trigger--invalid:focus {
  color: var(--color-text-status-error-ksqavh, #db0000);
  border-color: var(--color-text-status-error-ksqavh, #db0000);
  padding-inline-start: calc(var(--space-field-horizontal-0aq2ch, 12px) - (var(--border-invalid-width-3xd6e1, 8px) - var(--border-width-field-2xc78x, 1px)));
  border-inline-start-width: var(--border-invalid-width-3xd6e1, 8px);
}
.button-trigger--button-trigger:not(.button-trigger--in-filtering-token).button-trigger--invalid:focus, .button-trigger--button-trigger:not(.button-trigger--in-filtering-token).button-trigger--invalid:focus:focus {
  box-shadow: 0 0 0 var(--border-control-invalid-focus-ring-shadow-spread-9jjf96, 2px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.button-trigger--button-trigger:not(.button-trigger--in-filtering-token).button-trigger--warning, .button-trigger--button-trigger:not(.button-trigger--in-filtering-token).button-trigger--warning:focus {
  color: var(--color-text-status-warning-6meo06, #855900);
  border-color: var(--color-text-status-warning-6meo06, #855900);
  padding-inline-start: calc(var(--space-field-horizontal-0aq2ch, 12px) - (var(--border-invalid-width-3xd6e1, 8px) - var(--border-width-field-2xc78x, 1px)));
  border-inline-start-width: var(--border-invalid-width-3xd6e1, 8px);
}
.button-trigger--button-trigger:not(.button-trigger--in-filtering-token).button-trigger--warning:focus, .button-trigger--button-trigger:not(.button-trigger--in-filtering-token).button-trigger--warning:focus:focus {
  box-shadow: 0 0 0 var(--border-control-invalid-focus-ring-shadow-spread-9jjf96, 2px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.button-trigger--button-trigger.button-trigger--custom-option {
  padding-block: 0;
  padding-inline-start: 0;
  overflow: clip;
}
.button-trigger--button-trigger.button-trigger--inline-tokens {
  padding-block: 0;
}
`;
