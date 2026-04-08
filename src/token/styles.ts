// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.dismiss-button {
  align-self: flex-start;
  margin-block-end: 0;
  margin-inline-start: var(--space-xxs-hwfkai, 4px);
  border-block: var(--border-width-field-2xc78x, 1px) solid transparent;
  border-inline: var(--border-width-field-2xc78x, 1px) solid transparent;
  padding-block: 0;
  padding-inline: var(--space-xxs-hwfkai, 4px);
  color: var(--awsui-token-style-dismiss-color-default-6b9ypa, var(--color-text-button-inline-icon-default-sm4ql6, #006ce0));
  background-color: transparent;
  cursor: pointer;
  --awsui-style-focus-ring-box-shadow-6b9ypa: 0 0 0 var(--awsui-style-focus-ring-border-width-6b9ypa, 2px) var(--awsui-style-focus-ring-border-color-6b9ypa, var(--color-border-item-focused-uk47pl, #006ce0));
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
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow-6b9ypa);
}
.dismiss-button:focus {
  outline: none;
  text-decoration: none;
}
.dismiss-button:hover {
  color: var(--awsui-token-style-dismiss-color-hover-6b9ypa, var(--color-text-button-inline-icon-hover-rbyzfc, #002b66));
}
.dismiss-button-inline {
  padding-inline: 0;
  display: flex;
  align-items: center;
  align-self: center;
}

.icon {
  padding-inline-end: var(--space-xs-ymlm0b, 8px);
  align-self: flex-start;
  display: flex;
  flex-shrink: 0;
}
.icon-inline {
  padding-inline-end: var(--space-xxs-hwfkai, 4px);
  align-self: center;
}

.token-normal {
  block-size: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-xxs-hwfkai, 4px);
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
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}

.token-option-inline {
  max-block-size: 20px;
}

.token-box {
  position: relative;
  block-size: 100%;
  border-block: var(--border-width-token-2ukdpu, 2px) solid var(--awsui-token-style-border-color-default-6b9ypa, var(--color-border-item-selected-wl5ttm, #006ce0));
  border-inline: var(--border-width-token-2ukdpu, 2px) solid var(--awsui-token-style-border-color-default-6b9ypa, var(--color-border-item-selected-wl5ttm, #006ce0));
  padding-block-start: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-block-end: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-inline-start: var(--space-field-horizontal-0aq2ch, 12px);
  padding-inline-end: var(--space-xxs-hwfkai, 4px);
  display: flex;
  align-items: flex-start;
  background: var(--awsui-token-style-background-default-6b9ypa, var(--color-background-item-selected-9gppru, #f0fbff));
  border-start-start-radius: var(--border-radius-token-ycnemh, 8px);
  border-start-end-radius: var(--border-radius-token-ycnemh, 8px);
  border-end-start-radius: var(--border-radius-token-ycnemh, 8px);
  border-end-end-radius: var(--border-radius-token-ycnemh, 8px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  box-sizing: border-box;
}
.token-box-without-dismiss {
  padding-inline-end: var(--space-field-horizontal-0aq2ch, 12px);
}

.token-box-inline {
  position: relative;
  block-size: 20px;
  max-block-size: 20px;
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--awsui-token-style-border-color-default-6b9ypa, var(--color-border-item-selected-wl5ttm, #006ce0));
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--awsui-token-style-border-color-default-6b9ypa, var(--color-border-item-selected-wl5ttm, #006ce0));
  padding-inline-start: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-inline-end: var(--space-scaled-xxs-pfm1nx, 4px);
  display: flex;
  align-items: center;
  background: var(--awsui-token-style-background-default-6b9ypa, var(--color-background-item-selected-9gppru, #f0fbff));
  border-start-start-radius: var(--space-scaled-xxs-pfm1nx, 4px);
  border-start-end-radius: var(--space-scaled-xxs-pfm1nx, 4px);
  border-end-start-radius: var(--space-scaled-xxs-pfm1nx, 4px);
  border-end-end-radius: var(--space-scaled-xxs-pfm1nx, 4px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
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
  border-color: var(--awsui-token-style-border-color-read-only-6b9ypa, var(--color-border-input-disabled-zgnzvk, #ebebf0));
  background: var(--awsui-token-style-background-read-only-6b9ypa, var(--color-background-container-content-6u8rvp, #ffffff));
}
.token-box-readonly > .dismiss-button {
  color: var(--awsui-token-style-dismiss-color-read-only-6b9ypa, var(--color-text-button-inline-icon-disabled-82hho0, #b4b4bb));
}

.token-box-disabled {
  border-color: var(--awsui-token-style-border-color-disabled-6b9ypa, var(--color-border-control-disabled-uj7t08, #dedee3));
  background: var(--awsui-token-style-background-disabled-6b9ypa, var(--color-background-container-content-6u8rvp, #ffffff));
  color: var(--color-text-disabled-rox5hg, #b4b4bb);
}
.token-box-disabled > .dismiss-button {
  color: var(--awsui-token-style-dismiss-color-disabled-6b9ypa, var(--color-text-button-inline-icon-disabled-82hho0, #b4b4bb));
}
`;

export { componentStyles as tokenStyles };
export { sharedStyles };
