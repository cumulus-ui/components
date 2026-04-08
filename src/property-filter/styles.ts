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

.search-field {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: var(--space-xs-ymlm0b, 8px) var(--space-s-tvghoh, 12px);
}

.input-wrapper {
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  max-inline-size: calc(688px - 2 * var(--space-l-2ud1p3, 20px));
}

.add-token {
  border-inline-start: 1px solid var(--color-border-divider-default-nr68jt, #c6c6cd);
  box-sizing: border-box;
  margin-inline-start: var(--space-m-dsumyt, 16px);
  padding-inline-start: var(--space-m-dsumyt, 16px);
}

.tokens {
  margin-block: var(--space-xs-ymlm0b, 8px);
  margin-inline: 0;
}

.token-operator {
  font-weight: bold;
}

.property-editor {
  overflow-y: auto;
}
.property-editor-header {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  font-weight: bold;
  padding-block-start: var(--space-s-tvghoh, 12px);
  padding-block-end: var(--space-xxs-hwfkai, 4px);
  padding-inline: var(--space-s-tvghoh, 12px);
}
.property-editor-header-enum {
  display: flex;
  gap: var(--space-xs-ymlm0b, 8px);
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  font-weight: bold;
  color: var(--color-text-dropdown-group-label-2tmyik, #424650);
  padding-block: calc(var(--space-xs-ymlm0b, 8px) + var(--border-item-width-miijiw, 2px) - var(--border-divider-list-width-tdfx1x, 1px));
  padding-inline: calc(var(--space-field-horizontal-0aq2ch, 12px) + var(--border-item-width-miijiw, 2px));
}
.property-editor-form {
  padding-block-start: var(--space-xxs-hwfkai, 4px);
  padding-block-end: var(--space-s-tvghoh, 12px);
  padding-inline: var(--space-s-tvghoh, 12px);
}
.property-editor-cancel {
  margin-inline-end: var(--space-xs-ymlm0b, 8px);
}
.property-editor-actions {
  display: flex;
  justify-content: flex-end;
  border-block-start: var(--border-divider-list-width-tdfx1x, 1px) solid var(--color-border-dropdown-item-default-kape37, #c6c6cd);
  padding-inline: var(--space-l-2ud1p3, 20px);
  padding-block: var(--space-s-tvghoh, 12px);
}

.property-editor-enum {
  display: flex;
  flex-direction: column;
}

.token-editor {
  display: flex;
  flex-direction: column;
  gap: var(--space-s-tvghoh, 12px);
  margin-block: var(--space-xxs-hwfkai, 4px);
  margin-inline: var(--space-xxs-hwfkai, 4px);
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
  block-size: var(--size-vertical-input-p1d7xx, 32px);
  min-inline-size: 200px;
}
.token-editor-multiselect-wrapper-inner {
  position: absolute;
  inline-size: 100%;
}
.token-editor-cancel {
  margin-inline-end: var(--space-xs-ymlm0b, 8px);
}
.token-editor-actions {
  display: flex;
  justify-content: flex-end;
  padding-block-start: var(--space-s-tvghoh, 12px);
  border-block-start: 1px solid var(--color-border-dropdown-item-default-kape37, #c6c6cd);
  padding-inline-end: calc(var(--space-m-dsumyt, 16px) + var(--space-xxs-hwfkai, 4px));
  margin-inline: calc(-1 * var(--space-m-dsumyt, 16px) + -1 * var(--space-xxs-hwfkai, 4px));
  margin-block-start: var(--space-s-tvghoh, 12px);
}
.token-editor-grid {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: grid;
  gap: var(--space-s-tvghoh, 12px);
  grid-template-columns: minmax(min-content, 2fr) minmax(min-content, 120px) minmax(min-content, 3fr) min-content;
}
.token-editor-grid-group {
  display: contents;
}
.token-editor-grid.token-editor-narrow {
  grid-template-columns: minmax(100px, 1fr);
  gap: var(--space-m-dsumyt, 16px);
}
.token-editor-grid.token-editor-narrow > .token-editor-grid-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-s-tvghoh, 12px);
}
.token-editor-grid.token-editor-narrow > .token-editor-grid-group.token-editor-supports-groups {
  padding-block-end: var(--space-m-dsumyt, 16px);
  border-block-end: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-divider-default-nr68jt, #c6c6cd);
}
.token-editor-grid-header {
  color: var(--color-text-column-header-e6urd1, #424650);
  font-weight: var(--font-weight-heading-s-lcx0ai, 700);
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
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
  margin-block-start: var(--space-s-tvghoh, 12px);
}

.custom-content-wrapper {
  display: contents;
}

.input {
  flex: 1;
}

.results {
  padding-block: calc(var(--space-scaled-xxs-pfm1nx, 4px) + var(--border-width-field-2xc78x, 1px));
  padding-inline: 0;
}

.token-trigger {
  min-inline-size: 0;
  word-break: break-word;
}

.constraint {
  padding-block-start: var(--space-xxs-hwfkai, 4px);
  color: var(--color-text-form-secondary-1nm780, #656871);
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
}
`;

export { componentStyles as propertyFilterStyles };
export { sharedStyles };
