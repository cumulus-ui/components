// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.button {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  min-inline-size: 0;
  word-break: break-word;
  font-weight: var(--font-weight-button, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  letter-spacing: var(--font-button-letter-spacing, 0.005em);
  border-start-start-radius: var(--border-radius-button, 20px);
  border-start-end-radius: var(--border-radius-button, 20px);
  border-end-start-radius: var(--border-radius-button, 20px);
  border-end-end-radius: var(--border-radius-button, 20px);
  border-block: var(--border-width-button, 2px) solid;
  border-inline: var(--border-width-button, 2px) solid;
  padding-block: var(--space-scaled-xxs, 4px);
  padding-inline: var(--space-button-horizontal, 20px);
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  --awsui-style-focus-ring-box-shadow: 0 0 0 var(--awsui-style-focus-ring-border-width, 2px) var(--awsui-style-focus-ring-border-color, var(--color-border-item-focused, #006ce0));
}
.button.variant-normal {
  background: var(--awsui-style-background-default, var(--color-background-button-normal-default, #ffffff));
  color: var(--awsui-style-color-default, var(--color-text-button-normal-default, #006ce0));
  border-color: var(--awsui-style-border-color-default, var(--color-border-button-normal-default, #006ce0));
  box-shadow: var(--awsui-style-box-shadow-default);
  position: relative;
  text-decoration: none;
}
.button.variant-normal:hover {
  background: var(--awsui-style-background-hover, var(--color-background-button-normal-hover, #f0fbff));
  border-color: var(--awsui-style-border-color-hover, var(--color-border-button-normal-hover, #002b66));
  color: var(--awsui-style-color-hover, var(--color-text-button-normal-hover, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover);
  text-decoration: none;
}
.button.variant-normal:active {
  background: var(--awsui-style-background-active, var(--color-background-button-normal-active, #d1f1ff));
  border-color: var(--awsui-style-border-color-active, var(--color-border-button-normal-active, #002b66));
  color: var(--awsui-style-color-active, var(--color-text-button-normal-active, #002b66));
  box-shadow: var(--awsui-style-box-shadow-active);
}
.button.variant-normal.disabled {
  background: var(--awsui-style-background-disabled, var(--color-background-button-normal-disabled, #ffffff));
  border-color: var(--awsui-style-border-color-disabled, var(--color-border-button-normal-disabled, #b4b4bb));
  color: var(--awsui-style-color-disabled, var(--color-text-button-normal-disabled, #8c8c94));
  box-shadow: var(--awsui-style-box-shadow-disabled);
  text-decoration: none;
  cursor: auto;
}
.button.variant-primary {
  background: var(--awsui-style-background-default, var(--color-background-button-primary-default, #006ce0));
  color: var(--awsui-style-color-default, var(--color-text-button-primary-default, #ffffff));
  border-color: var(--awsui-style-border-color-default, var(--color-background-button-primary-default, #006ce0));
  box-shadow: var(--awsui-style-box-shadow-default);
  position: relative;
  text-decoration: none;
}
.button.variant-primary:hover {
  background: var(--awsui-style-background-hover, var(--color-background-button-primary-hover, #002b66));
  border-color: var(--awsui-style-border-color-hover, var(--color-background-button-primary-hover, #002b66));
  color: var(--awsui-style-color-hover, var(--color-text-button-primary-hover, #ffffff));
  box-shadow: var(--awsui-style-box-shadow-hover);
  text-decoration: none;
}
.button.variant-primary:active {
  background: var(--awsui-style-background-active, var(--color-background-button-primary-active, #002b66));
  border-color: var(--awsui-style-border-color-active, var(--color-background-button-primary-active, #002b66));
  color: var(--awsui-style-color-active, var(--color-text-button-primary-active, #ffffff));
  box-shadow: var(--awsui-style-box-shadow-active);
}
.button.variant-primary.disabled {
  background: var(--awsui-style-background-disabled, var(--color-background-button-primary-disabled, #ebebf0));
  border-color: var(--awsui-style-border-color-disabled, var(--color-border-button-primary-disabled, #ebebf0));
  color: var(--awsui-style-color-disabled, var(--color-text-button-primary-disabled, #8c8c94));
  box-shadow: var(--awsui-style-box-shadow-disabled);
  text-decoration: none;
  cursor: auto;
}
.button.variant-link {
  background: var(--awsui-style-background-default, transparent);
  color: var(--awsui-style-color-default, var(--color-text-button-normal-default, #006ce0));
  border-color: var(--awsui-style-border-color-default, transparent);
  box-shadow: var(--awsui-style-box-shadow-default);
  position: relative;
  text-decoration: none;
}
.button.variant-link:hover {
  background: var(--awsui-style-background-hover, var(--color-background-button-link-hover, #f0fbff));
  border-color: var(--awsui-style-border-color-hover, var(--color-background-button-link-hover, #f0fbff));
  color: var(--awsui-style-color-hover, var(--color-text-button-normal-hover, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover);
  text-decoration: none;
}
.button.variant-link:active {
  background: var(--awsui-style-background-active, var(--color-background-button-link-active, #d1f1ff));
  border-color: var(--awsui-style-border-color-active, var(--color-background-button-link-active, #d1f1ff));
  color: var(--awsui-style-color-active, var(--color-text-button-normal-active, #002b66));
  box-shadow: var(--awsui-style-box-shadow-active);
}
.button.variant-link.disabled {
  background: var(--awsui-style-background-disabled, transparent);
  border-color: var(--awsui-style-border-color-disabled, transparent);
  color: var(--awsui-style-color-disabled, var(--color-text-interactive-disabled, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled);
  text-decoration: none;
  cursor: auto;
}
.button.variant-icon {
  background: var(--awsui-style-background-default, transparent);
  color: var(--awsui-style-color-default, var(--color-text-interactive-default, #424650));
  border-color: var(--awsui-style-border-color-default, transparent);
  box-shadow: var(--awsui-style-box-shadow-default);
  position: relative;
  text-decoration: none;
}
.button.variant-icon:hover {
  background: var(--awsui-style-background-hover, transparent);
  border-color: var(--awsui-style-border-color-hover, transparent);
  color: var(--awsui-style-color-hover, var(--color-text-interactive-hover, #0f141a));
  box-shadow: var(--awsui-style-box-shadow-hover);
  text-decoration: none;
}
.button.variant-icon:active {
  background: var(--awsui-style-background-active, transparent);
  border-color: var(--awsui-style-border-color-active, transparent);
  color: var(--awsui-style-color-active, var(--color-text-interactive-default, #424650));
  box-shadow: var(--awsui-style-box-shadow-active);
}
.button.variant-icon.disabled {
  background: var(--awsui-style-background-disabled, transparent);
  border-color: var(--awsui-style-border-color-disabled, transparent);
  color: var(--awsui-style-color-disabled, var(--color-text-button-icon-disabled, #8c8c94));
  box-shadow: var(--awsui-style-box-shadow-disabled);
  text-decoration: none;
  cursor: auto;
}
.button.variant-inline-icon {
  background: var(--awsui-style-background-default, transparent);
  color: var(--awsui-style-color-default, var(--color-text-button-inline-icon-default, #006ce0));
  border-color: var(--awsui-style-border-color-default, transparent);
  box-shadow: var(--awsui-style-box-shadow-default);
  position: relative;
  text-decoration: none;
}
.button.variant-inline-icon:hover {
  background: var(--awsui-style-background-hover, transparent);
  border-color: var(--awsui-style-border-color-hover, transparent);
  color: var(--awsui-style-color-hover, var(--color-text-button-inline-icon-hover, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover);
  text-decoration: none;
}
.button.variant-inline-icon:active {
  background: var(--awsui-style-background-active, transparent);
  border-color: var(--awsui-style-border-color-active, transparent);
  color: var(--awsui-style-color-active, var(--color-text-button-inline-icon-default, #006ce0));
  box-shadow: var(--awsui-style-box-shadow-active);
}
.button.variant-inline-icon.disabled {
  background: var(--awsui-style-background-disabled, transparent);
  border-color: var(--awsui-style-border-color-disabled, transparent);
  color: var(--awsui-style-color-disabled, var(--color-text-button-inline-icon-disabled, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled);
  text-decoration: none;
  cursor: auto;
}
.button.variant-inline-icon-pointer-target {
  background: var(--awsui-style-background-default, transparent);
  color: var(--awsui-style-color-default, var(--color-text-button-inline-icon-default, #006ce0));
  border-color: var(--awsui-style-border-color-default, transparent);
  box-shadow: var(--awsui-style-box-shadow-default);
  position: relative;
  text-decoration: none;
}
.button.variant-inline-icon-pointer-target:hover {
  background: var(--awsui-style-background-hover, transparent);
  border-color: var(--awsui-style-border-color-hover, transparent);
  color: var(--awsui-style-color-hover, var(--color-text-button-inline-icon-hover, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover);
  text-decoration: none;
}
.button.variant-inline-icon-pointer-target:active {
  background: var(--awsui-style-background-active, transparent);
  border-color: var(--awsui-style-border-color-active, transparent);
  color: var(--awsui-style-color-active, var(--color-text-button-inline-icon-default, #006ce0));
  box-shadow: var(--awsui-style-box-shadow-active);
}
.button.variant-inline-icon-pointer-target.disabled {
  background: var(--awsui-style-background-disabled, transparent);
  border-color: var(--awsui-style-border-color-disabled, transparent);
  color: var(--awsui-style-color-disabled, var(--color-text-button-inline-icon-disabled, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled);
  text-decoration: none;
  cursor: auto;
}
.button.variant-inline-link {
  background: var(--awsui-style-background-default, transparent);
  color: var(--awsui-style-color-default, var(--color-text-button-normal-default, #006ce0));
  border-color: var(--awsui-style-border-color-default, transparent);
  box-shadow: var(--awsui-style-box-shadow-default);
  border-block-width: 0;
  border-inline-width: 0;
  position: relative;
  text-decoration: none;
  padding-block: 0;
  padding-inline: 0;
}
.button.variant-inline-link:hover {
  background: var(--awsui-style-background-hover, transparent);
  border-color: var(--awsui-style-border-color-hover, transparent);
  color: var(--awsui-style-color-hover, var(--color-text-button-normal-hover, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover);
  text-decoration: none;
}
.button.variant-inline-link:active {
  background: var(--awsui-style-background-active, transparent);
  border-color: var(--awsui-style-border-color-active, transparent);
  color: var(--awsui-style-color-active, var(--color-text-button-normal-active, #002b66));
  box-shadow: var(--awsui-style-box-shadow-active);
}
.button.variant-inline-link.disabled {
  background: var(--awsui-style-background-disabled, transparent);
  border-color: var(--awsui-style-border-color-disabled, transparent);
  color: var(--awsui-style-color-disabled, var(--color-text-interactive-disabled, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled);
  text-decoration: none;
  cursor: auto;
}
.button.variant-modal-dismiss {
  background: var(--awsui-style-background-default, transparent);
  color: var(--awsui-style-color-default, var(--color-text-interactive-default, #424650));
  border-color: var(--awsui-style-border-color-default, transparent);
  box-shadow: var(--awsui-style-box-shadow-default);
  position: relative;
  text-decoration: none;
}
.button.variant-modal-dismiss:hover {
  background: var(--awsui-style-background-hover, transparent);
  border-color: var(--awsui-style-border-color-hover, transparent);
  color: var(--awsui-style-color-hover, var(--color-text-interactive-hover, #0f141a));
  box-shadow: var(--awsui-style-box-shadow-hover);
  text-decoration: none;
}
.button.variant-modal-dismiss:active {
  background: var(--awsui-style-background-active, transparent);
  border-color: var(--awsui-style-border-color-active, transparent);
  color: var(--awsui-style-color-active, var(--color-text-interactive-default, #424650));
  box-shadow: var(--awsui-style-box-shadow-active);
}
.button.variant-modal-dismiss.disabled {
  background: var(--awsui-style-background-disabled, transparent);
  border-color: var(--awsui-style-border-color-disabled, transparent);
  color: var(--awsui-style-color-disabled, var(--color-text-interactive-disabled, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled);
  text-decoration: none;
  cursor: auto;
}
.button.variant-flashbar-icon {
  background: var(--awsui-style-background-default, transparent);
  color: var(--awsui-style-color-default, var(--color-text-interactive-inverted-default, #dedee3));
  border-color: var(--awsui-style-border-color-default, transparent);
  box-shadow: var(--awsui-style-box-shadow-default);
  position: relative;
  text-decoration: none;
}
.button.variant-flashbar-icon:hover {
  background: var(--awsui-style-background-hover, transparent);
  border-color: var(--awsui-style-border-color-hover, transparent);
  color: var(--awsui-style-color-hover, var(--color-text-interactive-inverted-hover, #f9f9fa));
  box-shadow: var(--awsui-style-box-shadow-hover);
  text-decoration: none;
}
.button.variant-flashbar-icon:active {
  background: var(--awsui-style-background-active, transparent);
  border-color: var(--awsui-style-border-color-active, transparent);
  color: var(--awsui-style-color-active, var(--color-text-interactive-inverted-default, #dedee3));
  box-shadow: var(--awsui-style-box-shadow-active);
}
.button.variant-flashbar-icon.disabled {
  background: var(--awsui-style-background-disabled, transparent);
  border-color: var(--awsui-style-border-color-disabled, transparent);
  color: var(--awsui-style-color-disabled, var(--color-text-interactive-disabled, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled);
  text-decoration: none;
  cursor: auto;
}
.button.variant-breadcrumb-group {
  background: var(--awsui-style-background-default, transparent);
  color: var(--awsui-style-color-default, var(--color-text-link-default, #006ce0));
  border-color: var(--awsui-style-border-color-default, transparent);
  box-shadow: var(--awsui-style-box-shadow-default);
  border-block-width: 0;
  border-inline-width: 0;
  position: relative;
  text-decoration: none;
  padding-block: 0;
  padding-inline: 0;
  font-weight: normal;
}
.button.variant-breadcrumb-group:hover {
  background: var(--awsui-style-background-hover, transparent);
  border-color: var(--awsui-style-border-color-hover, transparent);
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover);
  text-decoration: none;
}
.button.variant-breadcrumb-group:active {
  background: var(--awsui-style-background-active, transparent);
  border-color: var(--awsui-style-border-color-active, transparent);
  color: var(--awsui-style-color-active, var(--color-text-link-default, #006ce0));
  box-shadow: var(--awsui-style-box-shadow-active);
}
.button.variant-breadcrumb-group.disabled {
  background: var(--awsui-style-background-disabled, transparent);
  border-color: var(--awsui-style-border-color-disabled, transparent);
  color: var(--awsui-style-color-disabled, var(--color-text-interactive-disabled, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled);
  text-decoration: none;
  cursor: auto;
}
.button.variant-menu-trigger {
  background: var(--awsui-style-background-default, transparent);
  color: var(--awsui-style-color-default, var(--color-text-button-normal-default, #006ce0));
  border-color: var(--awsui-style-border-color-default, transparent);
  box-shadow: var(--awsui-style-box-shadow-default);
  position: relative;
  text-decoration: none;
}
.button.variant-menu-trigger:hover {
  background: var(--awsui-style-background-hover, transparent);
  border-color: var(--awsui-style-border-color-hover, transparent);
  color: var(--awsui-style-color-hover, var(--color-text-button-normal-hover, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover);
  text-decoration: none;
}
.button.variant-menu-trigger:active {
  background: var(--awsui-style-background-active, transparent);
  border-color: var(--awsui-style-border-color-active, transparent);
  color: var(--awsui-style-color-active, var(--color-text-button-normal-active, #002b66));
  box-shadow: var(--awsui-style-box-shadow-active);
}
.button.variant-menu-trigger.disabled {
  background: var(--awsui-style-background-disabled, transparent);
  border-color: var(--awsui-style-border-color-disabled, transparent);
  color: var(--awsui-style-color-disabled, var(--color-text-interactive-disabled, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled);
  text-decoration: none;
  cursor: auto;
}
.button:focus {
  outline: none;
  text-decoration: none;
}
:host-context([data-awsui-focus-visible=true]) .button:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .button:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-focus-outline-gutter, 4px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .button:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-button-focus-outline-gutter, 4px));
  inset-block-start: calc(-1 * var(--space-button-focus-outline-gutter, 4px));
  inline-size: calc(100% + var(--space-button-focus-outline-gutter, 4px) + var(--space-button-focus-outline-gutter, 4px));
  block-size: calc(100% + var(--space-button-focus-outline-gutter, 4px) + var(--space-button-focus-outline-gutter, 4px));
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow);
}
:host-context([data-awsui-focus-visible=true]) .button:focus.variant-icon, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-modal-dismiss, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-flashbar-icon {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .button:focus.variant-icon, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-modal-dismiss, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-flashbar-icon {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-focus-outline-gutter, 4px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .button:focus.variant-icon::before, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-modal-dismiss::before, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-flashbar-icon::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-button-focus-outline-gutter, 4px));
  inset-block-start: calc(-1 * var(--space-button-icon-focus-outline-gutter-vertical, 0px));
  inline-size: calc(100% + var(--space-button-focus-outline-gutter, 4px) + var(--space-button-focus-outline-gutter, 4px));
  block-size: calc(100% + var(--space-button-icon-focus-outline-gutter-vertical, 0px) + var(--space-button-icon-focus-outline-gutter-vertical, 0px));
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow);
}
:host-context([data-awsui-focus-visible=true]) .button:focus.variant-inline-icon, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-inline-icon-pointer-target {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .button:focus.variant-inline-icon, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-inline-icon-pointer-target {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-inline-icon-focus-outline-gutter, 0px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .button:focus.variant-inline-icon::before, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-inline-icon-pointer-target::before {
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
.button.button-no-text {
  padding-inline-start: var(--space-button-icon-only-horizontal, 6px);
  padding-inline-end: var(--space-button-icon-only-horizontal, 6px);
}
.button.button-no-wrap {
  white-space: nowrap;
}
.button.full-width {
  inline-size: 100%;
  text-align: center;
}
.button.variant-icon, .button.variant-inline-icon, .button.variant-inline-icon-pointer-target, .button.variant-flashbar-icon {
  padding-inline: var(--space-xxs, 4px);
}
.button.variant-modal-dismiss {
  padding-block: var(--space-button-modal-dismiss-vertical, 2px);
  padding-inline: var(--space-xxs, 4px);
  margin-inline-end: calc(-1 * var(--space-xxs, 4px));
}
.button.variant-inline-icon {
  padding-block: 0;
  border-block-width: 0;
  border-inline-width: 0;
}
.button.variant-inline-icon-pointer-target {
  padding-block: var(--space-xxxs, 2px);
  border-block-width: 0;
  border-inline-width: 0;
}
.button > .icon-left {
  position: relative;
  inset-inline-start: calc(-1 * var(--space-xxs, 4px));
  margin-inline-end: var(--space-xxs, 4px);
}
.button > .icon-right {
  position: relative;
  inset-inline-end: calc(-1 * var(--space-xxs, 4px));
  margin-inline-start: var(--space-xxs, 4px);
}
.button.variant-inline-link > .icon-left {
  inset-inline-start: 0;
  margin-inline-end: var(--space-xs, 8px);
}
.button.variant-inline-link > .icon-right {
  inset-inline-end: 0;
  margin-inline-start: var(--space-xs, 8px);
}
.button.button-no-text > .icon {
  margin-inline-start: auto;
  margin-inline-end: auto;
  inset-inline: 0;
}

.link.disabled:not(.disabled-with-reason) {
  pointer-events: none;
}
`;

export { componentStyles as buttonStyles };
export { sharedStyles };
