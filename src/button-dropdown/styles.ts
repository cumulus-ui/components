// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.button-dropdown {
  display: inline-block;
}
.button-dropdown.full-width {
  inline-size: 100%;
  display: block;
}

.items-list-container {
  padding-block: 0;
  padding-inline: 0;
  margin-block: 0;
  margin-inline: 0;
  animation: awsui_awsui-motion-fade-in-0_sne0l_ncm5v_1 500ms var(--motion-easing-show-quick, ease-out);
  animation-fill-mode: none;
}
@media (prefers-reduced-motion: reduce) {
  .items-list-container {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .items-list-container, .awsui-mode-entering .items-list-container {
  animation: none;
  transition: none;
}

.rotate {
  transform: rotate(0deg);
  transition: transform var(--motion-duration-180-cxi9g7, 135ms) var(--motion-easing-180-7a58rc, cubic-bezier(0.165, 0.84, 0.44, 1));
}
@media (prefers-reduced-motion: reduce) {
  .rotate {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .rotate, .awsui-mode-entering .rotate {
  animation: none;
  transition: none;
}
.rotate-open {
  transform: rotate(-180deg);
}

.header {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-block: var(--space-s, 12px);
  padding-inline: var(--space-l, 20px);
  border-block-start: var(--border-width-dropdown, 2px) solid transparent;
  border-block-end: var(--border-width-dropdown, 2px) solid var(--color-border-dropdown-group, #c6c6cd);
  border-inline: var(--border-width-dropdown, 2px) solid transparent;
}

.title,
.description {
  color: var(--color-text-top-navigation-title, #0f141a);
}

.trigger-button.full-width {
  display: grid;
  grid-template-columns: 1fr auto;
}
.trigger-button.full-width.loading {
  grid-template-columns: auto 1fr auto;
}

.split-trigger-wrapper {
  display: flex;
}
.split-trigger-wrapper > .trigger-item > .trigger-button:focus, .split-trigger-wrapper > .trigger-item > .trigger-button:hover {
  z-index: 1;
}
.split-trigger-wrapper > .trigger-item:not(:last-child) > .trigger-button {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  padding-inline-end: var(--space-m, 16px);
  margin-inline-end: var(--space-xxxs, 2px);
}
.split-trigger-wrapper > .trigger-item:not(:last-child) > .trigger-button.has-no-text {
  padding-inline: var(--space-button-icon-only-horizontal, 6px);
}
.split-trigger-wrapper > .trigger-item:not(:last-child) > .trigger-button.has-no-text.visual-refresh {
  padding-inline-start: calc(var(--space-s, 12px) - 2px);
}
.split-trigger-wrapper > .trigger-item:not(:first-child) > .trigger-button {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  padding-inline: calc(var(--space-xs, 8px) - 2px);
}
.split-trigger-wrapper > .trigger-item:not(:first-child).visual-refresh > .trigger-button {
  padding-inline-end: calc(var(--space-s, 12px) - 2px);
}
.split-trigger-wrapper > .trigger-item.variant-normal:not(:last-child) > .trigger-button {
  margin-inline-end: 0;
}
.split-trigger-wrapper > .trigger-item.variant-normal:not(:first-child) > .trigger-button {
  margin-inline-start: calc(var(--border-width-button, 2px) * -1);
}

.split-trigger {
  display: contents;
}

.dropdown-trigger {
  display: contents;
}

.main-action-full-width {
  flex: 1 1 0;
}

.main-action-trigger-full-width {
  flex: 0 0 auto;
}
`;

export { componentStyles as buttonDropdownStyles };
export { sharedStyles };
