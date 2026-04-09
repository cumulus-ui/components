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

.search-field {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: var(--space-xs, 8px) var(--space-s, 12px);
}

.input-wrapper {
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  max-inline-size: calc(688px - 2 * var(--space-l, 20px));
}

.add-token {
  border-inline-start: 1px solid var(--color-border-divider-default, #c6c6cd);
  box-sizing: border-box;
  margin-inline-start: var(--space-m, 16px);
  padding-inline-start: var(--space-m, 16px);
}

.tokens {
  margin-block: var(--space-xs, 8px);
  margin-inline: 0;
}

.token-operator {
  font-weight: bold;
}

.property-editor {
  overflow-y: auto;
}
.property-editor-header {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  font-weight: bold;
  padding-block-start: var(--space-s, 12px);
  padding-block-end: var(--space-xxs, 4px);
  padding-inline: var(--space-s, 12px);
}
.property-editor-header-enum {
  display: flex;
  gap: var(--space-xs, 8px);
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  font-weight: bold;
  color: var(--color-text-dropdown-group-label, #424650);
  padding-block: calc(var(--space-xs, 8px) + var(--border-item-width, 2px) - var(--border-divider-list-width, 1px));
  padding-inline: calc(var(--space-field-horizontal, 12px) + var(--border-item-width, 2px));
}
.property-editor-form {
  padding-block-start: var(--space-xxs, 4px);
  padding-block-end: var(--space-s, 12px);
  padding-inline: var(--space-s, 12px);
}
.property-editor-cancel {
  margin-inline-end: var(--space-xs, 8px);
}
.property-editor-actions {
  display: flex;
  justify-content: flex-end;
  border-block-start: var(--border-divider-list-width, 1px) solid var(--color-border-dropdown-item-default, #c6c6cd);
  padding-inline: var(--space-l, 20px);
  padding-block: var(--space-s, 12px);
}

.property-editor-enum {
  display: flex;
  flex-direction: column;
}

.token-editor {
  display: flex;
  flex-direction: column;
  gap: var(--space-s, 12px);
  margin-block: var(--space-xxs, 4px);
  margin-inline: var(--space-xxs, 4px);
}
.token-editor-field-property {
  flex-grow: 2;
}
.token-editor-field-operator {
  flex-grow: 1;
}
.token-editor-field-value {
  flex-grow: 2;
}
.token-editor-multiselect-wrapper {
  position: relative;
  block-size: var(--size-vertical-input, 32px);
  min-inline-size: 200px;
}
.token-editor-multiselect-wrapper-inner {
  position: absolute;
  inline-size: 100%;
}
.token-editor-cancel {
  margin-inline-end: var(--space-xs, 8px);
}
.token-editor-actions {
  display: flex;
  justify-content: flex-end;
  padding-block-start: var(--space-s, 12px);
  border-block-start: 1px solid var(--color-border-dropdown-item-default, #c6c6cd);
  padding-inline-end: calc(var(--space-m, 16px) + var(--space-xxs, 4px));
  margin-inline: calc(-1 * var(--space-m, 16px) + -1 * var(--space-xxs, 4px));
  margin-block-start: var(--space-s, 12px);
}
.token-editor-grid {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: grid;
  gap: var(--space-s, 12px);
  grid-template-columns: minmax(min-content, 2fr) minmax(min-content, 120px) minmax(min-content, 3fr) min-content;
}
.token-editor-grid-group {
  display: contents;
}
.token-editor-grid.token-editor-narrow {
  grid-template-columns: minmax(100px, 1fr);
  gap: var(--space-m, 16px);
}
.token-editor-grid.token-editor-narrow > .token-editor-grid-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-s, 12px);
}
.token-editor-grid.token-editor-narrow > .token-editor-grid-group.token-editor-supports-groups {
  padding-block-end: var(--space-m, 16px);
  border-block-end: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
}
.token-editor-grid-header {
  color: var(--color-text-column-header, #424650);
  font-weight: var(--font-weight-heading-s, 700);
  padding-block: var(--space-scaled-xxs, 4px);
  text-align: start;
}
.token-editor-grid-cell:not(.token-editor-narrow) {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.token-editor-grid-cell.token-editor-narrow:nth-child(4) {
  display: flex;
  justify-content: flex-end;
}
.token-editor-add-token {
  margin-block-start: var(--space-s, 12px);
}

.custom-content-wrapper {
  display: contents;
}

.input {
  flex: 1;
}

.results {
  padding-block: calc(var(--space-scaled-xxs, 4px) + var(--border-width-field, 1px));
  padding-inline: 0;
}

.token-trigger {
  min-inline-size: 0;
  word-break: break-word;
}

.constraint {
  padding-block-start: var(--space-xxs, 4px);
  color: var(--color-text-form-secondary, #656871);
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
}
`;

export { componentStyles as propertyFilterStyles };
export { sharedStyles };
