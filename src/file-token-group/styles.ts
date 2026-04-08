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

.file-loading-overlay {
  position: absolute;
  inset-inline-end: var(--space-static-xs, 8px);
  inset-block-end: var(--space-static-xxs, 4px);
}
.file-loading-overlay-single-row {
  inset-inline-end: var(--space-static-xxl, 32px);
}

.file-name-container {
  all: unset;
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
  cursor: default;
  text-align: start;
}
:host-context([data-awsui-focus-visible=true]) .file-name-container:focus-visible:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .file-name-container:focus-visible:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-focus-outline-gutter, 4px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .file-name-container:focus-visible:focus::before {
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

.file-option-name,
.file-option-size,
.file-option-last-modified {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.file-option {
  inline-size: 100%;
  min-inline-size: 0;
  display: flex;
  gap: var(--space-scaled-xs, 8px);
}

.file-option-thumbnail {
  margin-block-start: var(--space-static-xxs, 4px);
}

.file-option-thumbnail-image {
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
  inline-size: 48px;
  block-size: 48px;
  object-fit: cover;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.file-option-metadata {
  inline-size: 100%;
}
.file-option-metadata.with-image {
  inline-size: calc(100% - 48px);
}
.file-option-metadata.single-row-loading {
  inline-size: calc(100% - var(--size-icon-normal, 16px));
}

.token {
  position: relative;
  block-size: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-xxs, 4px);
}
.token-grid {
  display: grid;
  grid-template-rows: max-content auto;
}
@media (max-width: 688px) {
  .token-grid {
    display: flex;
  }
}
.token-contains-image {
  grid-template-rows: 68px auto;
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
.token-box.horizontal {
  max-inline-size: 230px;
}
@media (max-width: 688px) {
  .token-box.horizontal {
    max-inline-size: 100%;
  }
}
.token-box.error {
  border-color: var(--color-border-status-error, #db0000);
  border-inline-start-width: var(--border-invalid-width, 8px);
}
.token-box.error > .dismiss-button {
  color: var(--color-text-interactive-default, #424650);
}
.token-box.error > .dismiss-button:hover {
  color: var(--color-text-interactive-hover, #0f141a);
}
.token-box.warning {
  border-color: var(--color-border-status-warning, #855900);
  border-inline-start-width: var(--border-invalid-width, 8px);
}
.token-box.warning > .dismiss-button {
  color: var(--color-text-interactive-default, #424650);
}
.token-box.warning > .dismiss-button:hover {
  color: var(--color-text-interactive-hover, #0f141a);
}
.token-box.read-only {
  border-color: var(--color-border-input-disabled, #ebebf0);
  background-color: var(--color-background-container-content, #ffffff);
  pointer-events: none;
}
.token-box.read-only > .dismiss-button {
  color: var(--color-text-button-inline-icon-disabled, #b4b4bb);
}
.token-box.read-only > .dismiss-button:hover {

  cursor: initial;
  color: var(--color-text-button-inline-icon-disabled, #b4b4bb);
}
.token-box.loading {
  border-color: var(--color-border-control-disabled, #dedee3);
  background-color: var(--color-background-container-content, #ffffff);
}
`;

export { componentStyles as fileTokenGroupStyles };
export { sharedStyles };
