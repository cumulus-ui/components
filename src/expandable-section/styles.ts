// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.content-enter {
  animation: awsui_awsui-motion-fade-in_gwq0h_1pven_1 var(--motion-duration-show-paced, 180ms) var(--motion-easing-show-paced, ease-out);
}
@keyframes awsui_awsui-motion-fade-in_gwq0h_1pven_1 {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .content-enter {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .content-enter, .awsui-mode-entering .content-enter {
  animation: none;
  transition: none;
}

.trigger-expanded {
  transition: border-bottom-color var(--motion-duration-show-paced, 180ms) var(--motion-easing-show-paced, ease-out);
}
@media (prefers-reduced-motion: reduce) {
  .trigger-expanded {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .trigger-expanded, .awsui-mode-entering .trigger-expanded {
  animation: none;
  transition: none;
}

.icon {
  transition: transform var(--motion-duration-rotate-90, 135ms) var(--motion-easing-rotate-90, cubic-bezier(0.165, 0.84, 0.44, 1));
}
@media (prefers-reduced-motion: reduce) {
  .icon {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .icon, .awsui-mode-entering .icon {
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
  min-inline-size: 0;
  word-break: break-word;
  display: block;
}

.expand-button {
  outline: none;
}

.icon {
  transform: rotate(-90deg);

}
.icon.expanded {
  transform: rotate(0deg);
}
.icon:dir(rtl) {
  transform: rotate(90deg);
}
.icon:dir(rtl).expanded {
  transform: rotate(0deg);
}

.icon-container {
  position: relative;
  margin-inline: calc((var(--line-height-body-m, 20px) - var(--size-icon-normal, 16px)) / -2) calc(var(--space-xxs, 4px) + var(--border-divider-list-width, 1px));
}
.icon-container-container {
  margin-inline-end: var(--space-xs, 8px);
}

.wrapper {
  box-sizing: border-box;
  border-block: none;
  border-inline: none;
  inline-size: 100%;
  line-height: var(--line-height-body-m, 20px);
  text-align: start;
}
.wrapper-default, .wrapper-inline, .wrapper-footer {
  border-block: var(--border-divider-section-width, 1px) solid transparent;
  border-inline: var(--border-divider-section-width, 1px) solid transparent;
}
.wrapper-navigation {
  border-inline-start: var(--border-divider-section-width, 1px) solid transparent;
}
.wrapper-navigation, .wrapper-container {
  display: flex;
  font-weight: var(--font-weight-heading-s, 700);
}
.wrapper-default, .wrapper-inline, .wrapper-navigation, .wrapper-footer, .wrapper-compact {
  color: var(--color-text-expandable-section-default, #0f141a);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.wrapper-default, .wrapper-inline, .wrapper-navigation, .wrapper-footer {
  font-size: var(--font-expandable-heading-size, 16px);
  letter-spacing: var(--letter-spacing-heading-s, -0.005em);
}
.wrapper-default {
  padding-block: var(--space-scaled-xxs, 4px);
  padding-inline-end: var(--space-xxs, 4px);
}
.wrapper-default.header-deprecated {
  padding-inline-start: var(--space-xxs, 4px);
}
.wrapper-default:not(.header-deprecated), .wrapper-inline:not(.header-deprecated) {
  padding-inline-start: calc(var(--size-icon-normal, 16px) + (var(--line-height-body-m, 20px) - var(--size-icon-normal, 16px)) / -2 + var(--space-xxs, 4px) + var(--border-divider-list-width, 1px));
}
.wrapper-default.wrapper-expanded, .wrapper-inline.wrapper-expanded {
  padding-block-end: var(--space-scaled-xxs, 4px);
  border-block-end-color: var(--color-border-divider-default, #c6c6cd);
}
.wrapper-footer {
  padding-block: var(--space-scaled-xxs, 4px);
}
.wrapper-footer, .wrapper-compact {
  padding-inline-end: 0;
}
.wrapper-footer.header-deprecated, .wrapper-compact.header-deprecated {
  padding-inline-start: 0;
}
.wrapper-footer:not(.header-deprecated), .wrapper-compact:not(.header-deprecated) {
  padding-inline-start: calc(var(--size-icon-normal, 16px) + (var(--line-height-body-m, 20px) - var(--size-icon-normal, 16px)) / -2 + var(--space-xxs, 4px) + var(--border-divider-list-width, 1px));
}
.wrapper-container {
  padding-block: var(--space-container-header-top, 12px) var(--space-container-header-bottom, 8px);
  padding-inline-end: var(--space-container-horizontal, 20px);
}
.wrapper-container:not(.wrapper-expanded) {
  padding-block-end: var(--space-container-header-top, 12px);
}
.wrapper-container.wrapper-not-expanded-without-actions {
  padding-block-end: calc(var(--space-container-header-top, 12px) + var(--space-scaled-xxs, 4px));
}
.wrapper-container.header-deprecated {
  padding-inline-start: var(--space-container-horizontal, 20px);
}
.wrapper-container:not(.header-deprecated) {
  padding-inline-start: calc(var(--space-container-horizontal, 20px) + calc(var(--size-icon-medium, 20px) + (var(--line-height-body-m, 20px) - var(--size-icon-normal, 16px)) / -2 + var(--space-xs, 8px)));
}
:host-context([data-awsui-focus-visible=true]) .wrapper-container:focus {
  padding-block: calc(var(--space-scaled-s, 12px) - var(--border-divider-section-width, 1px));
  padding-inline: calc(var(--space-l, 20px) - var(--border-divider-section-width, 1px));
}
.header-wrapper, .header-deprecated {
  display: flex;
  font-weight: var(--font-weight-heading-s, 700);
}
.header-wrapper {
  font-size: inherit;
  letter-spacing: inherit;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
}
.header-actions-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
:host-context([data-awsui-focus-visible=true]) .header-button:focus, :host-context([data-awsui-focus-visible=true]) .header-container-button:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .header-button:focus, :host-context([data-awsui-focus-visible=true]) .header-container-button:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(0px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .header-button:focus::before, :host-context([data-awsui-focus-visible=true]) .header-container-button:focus::before {
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
.header-button {
  box-sizing: border-box;
  display: flex;
  margin-inline-start: calc(-1 * calc(var(--size-icon-normal, 16px) + (var(--line-height-body-m, 20px) - var(--size-icon-normal, 16px)) / -2 + var(--space-xxs, 4px) + var(--border-divider-list-width, 1px)));
}
.header-container-button {
  margin-inline-start: calc(-1 * calc(var(--size-icon-medium, 20px) + (var(--line-height-body-m, 20px) - var(--size-icon-normal, 16px)) / -2 + var(--space-xs, 8px)));
}
.header-container {
  inline-size: 100%;
}
.header-container > .icon-container {
  margin-block-start: var(--space-expandable-section-icon-offset-top, 4px);
}
.header-navigation > .icon-container {
  display: inline-flex;
  cursor: pointer;
  color: var(--color-text-expandable-section-navigation-icon-default, #424650);
  border-block: 0;
  border-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  background: transparent;
  outline: none;
  text-decoration: none;
  flex-direction: column;
}
.header-navigation > .icon-container:hover {
  color: var(--color-text-expandable-section-hover, #006ce0);
}
:host-context([data-awsui-focus-visible=true]) .header-navigation > .icon-container:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .header-navigation > .icon-container:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(2px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .header-navigation > .icon-container:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 2px);
  inset-block-start: calc(-1 * 2px);
  inline-size: calc(100% + 2px + 2px);
  block-size: calc(100% + 2px + 2px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}

:not(.wrapper-compact) > .header-actions-wrapper {
  flex-wrap: wrap;
  column-gap: var(--space-xs, 8px);
  row-gap: var(--space-scaled-xxxs, 2px);
}

.content {
  display: none;
}
.content-default, .content-inline {
  padding-block: var(--space-scaled-xs, 8px);
  padding-inline: 0;
}
.content-footer {
  padding-block: var(--space-xs, 8px);
  padding-inline: 0;
}
.content-expanded {
  display: block;
}
.content-compact {
  padding-inline-start: calc(var(--size-icon-normal, 16px) + (var(--line-height-body-m, 20px) - var(--size-icon-normal, 16px)) / -2 + var(--space-xxs, 4px) + var(--border-divider-list-width, 1px));
}

.focusable:focus {
  outline: none;
  text-decoration: none;
}
:host-context([data-awsui-focus-visible=true]) .focusable:focus {
  outline: 2px dotted transparent;
  border-block: var(--border-width-button, 2px) solid var(--color-border-item-focused, #006ce0);
  border-inline: var(--border-width-button, 2px) solid var(--color-border-item-focused, #006ce0);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 var(--border-control-focus-ring-shadow-spread, 1px) var(--color-border-item-focused, #006ce0);
}

.click-target {
  cursor: pointer;
}
.click-target:not(.wrapper-container):not(.header-container-button):hover {
  color: var(--color-text-expandable-section-hover, #006ce0);
}
`;

export { componentStyles as expandableSectionStyles };
export { sharedStyles };
