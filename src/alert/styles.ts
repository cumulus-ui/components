// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.alert {
  animation: awsui_awsui-motion-fade-in_mx3cw_84tu2_1 var(--motion-duration-show-paced, 180ms) var(--motion-easing-show-paced, ease-out);
}
@keyframes awsui_awsui-motion-fade-in_mx3cw_84tu2_1 {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .alert {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .alert, .awsui-mode-entering .alert {
  animation: none;
  transition: none;
}

.root {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  word-wrap: break-word;
  max-inline-size: 100%;
  overflow: hidden;
  display: block;
}
.root.hidden {
  display: none;
}

.alert {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  border-block-start: var(--border-width-alert-block-start, 2px) solid;
  border-block-end: var(--border-width-alert-block-end, 2px) solid;
  border-inline-start: var(--border-width-alert-inline-start, 2px) solid;
  border-inline-end: var(--border-width-alert-inline-end, 2px) solid;
  border-start-start-radius: var(--border-radius-alert, 12px);
  border-start-end-radius: var(--border-radius-alert, 12px);
  border-end-start-radius: var(--border-radius-alert, 12px);
  border-end-end-radius: var(--border-radius-alert, 12px);
  padding-block: var(--space-alert-vertical, 8px);
  padding-inline: var(--space-alert-horizontal, 16px);
  background-color: var(--color-background-container-content, #ffffff);
  --awsui-alert-focus-ring-box-shadow: 0 0 0 var(--awsui-alert-focus-ring-border-width, 2px) var(--awsui-alert-focus-ring-border-color, var(--color-border-item-focused, #006ce0));
}

.alert-wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: var(--space-alert-action-left, 12px);
}

.hidden {
  display: none;
}

.initial-hidden {
  overflow: hidden;
  block-size: 0;
}

.header,
.header-replacement {
  font-weight: var(--font-weight-alert-header, 700);
}

.action {
  white-space: nowrap;
}

.alert-focus-wrapper {
  flex: 1;
  min-inline-size: 70%;
  display: grid;
  grid-template-columns: min-content auto;
}
.alert-focus-wrapper:focus {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .alert-focus-wrapper:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .alert-focus-wrapper:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-focus-outline-gutter, 4px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .alert-focus-wrapper:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-button-focus-outline-gutter, 4px));
  inset-block-start: calc(-1 * var(--space-button-focus-outline-gutter, 4px));
  inline-size: calc(100% + var(--space-button-focus-outline-gutter, 4px) + var(--space-button-focus-outline-gutter, 4px));
  block-size: calc(100% + var(--space-button-focus-outline-gutter, 4px) + var(--space-button-focus-outline-gutter, 4px));
  border-start-start-radius: var(--awsui-alert-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-start-end-radius: var(--awsui-alert-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-start-radius: var(--awsui-alert-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-end-radius: var(--awsui-alert-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  box-shadow: var(--awsui-alert-focus-ring-box-shadow);
}

.text {
  min-inline-size: 0;
  padding-block: var(--border-width-button, 2px);
  padding-inline: 0;
  margin-block: var(--space-scaled-xxs, 4px);
  margin-inline: var(--space-xxs, 4px);
}
.text.icon {
  margin-inline-start: 0;
}
.text.message {
  margin-inline-end: var(--space-alert-message-right, 4px);
}

.action-wrapped {
  margin-block-end: var(--space-xxs, 4px);
}

.icon-size-medium > .alert-wrapper > .action-wrapped {
  margin-inline-start: calc(var(--size-icon-medium, 20px) + var(--space-xs, 8px));
}

.icon-size-big > .alert-wrapper > .action-wrapped {
  margin-inline-start: calc(var(--size-icon-big, 32px) + var(--space-xs, 8px));
}

.icon-size-normal > .alert-wrapper > .action-wrapped {
  margin-inline-start: calc(var(--size-icon-normal, 16px) + var(--space-xs, 8px));
}

.dismiss {
  margin-inline-end: calc(-1 * var(--space-xxs, 4px));
  margin-inline-start: var(--space-s, 12px);
}

.type-error {
  border-color: var(--color-border-status-error, #db0000);
  background-color: var(--color-background-status-error, #fff5f5);
}
.type-error > .alert-wrapper > .alert-focus-wrapper > .icon {
  color: var(--awsui-alert-icon-color, var(--color-text-status-error, #db0000));
}

.type-warning {
  border-color: var(--color-border-status-warning, #855900);
  background-color: var(--color-background-status-warning, #fffef0);
}
.type-warning > .alert-wrapper > .alert-focus-wrapper > .icon {
  color: var(--awsui-alert-icon-color, var(--color-text-status-warning, #855900));
}

.type-success {
  border-color: var(--color-border-status-success, #00802f);
  background-color: var(--color-background-status-success, #effff1);
}
.type-success > .alert-wrapper > .alert-focus-wrapper > .icon {
  color: var(--awsui-alert-icon-color, var(--color-text-status-success, #00802f));
}

.type-info {
  border-color: var(--color-border-status-info, #006ce0);
  background-color: var(--color-background-status-info, #f0fbff);
}
.type-info > .alert-wrapper > .alert-focus-wrapper > .icon {
  color: var(--awsui-alert-icon-color, var(--color-text-status-info, #006ce0));
}
`;

export { componentStyles as alertStyles };
export { sharedStyles };
