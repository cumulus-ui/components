// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.visible-content-title {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  font-weight: var(--font-display-label-weight, 700);
  color: var(--color-text-form-label, #0f141a);
  margin-block-start: 0;
  margin-block-end: var(--space-scaled-l, 20px);
  margin-inline: 0;
}

.visible-content-group-label {
  color: var(--color-text-group-label, #424650);
  padding-block-end: var(--space-xs, 8px);
  border-block-end: var(--border-divider-list-width, 1px) solid var(--color-border-divider-secondary, #ebebf0);
}

.visible-content-option {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-block: var(--space-xs, 8px);
  padding-inline-start: var(--space-scaled-l, 20px);
  padding-inline-end: 0px;
  border-block-end: var(--border-divider-list-width, 1px) solid var(--color-border-divider-secondary, #ebebf0);
}
.visible-content-option:last-child {
  border-block-end: none;
}

.visible-content-option-label {
  overflow: hidden;
  text-overflow: ellipsis;
  padding-inline-end: var(--space-l, 20px);
  flex-grow: 1;
}

.content-display-option-content {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: flex;
  align-items: flex-start;
  padding-block: var(--space-scaled-xs, 8px);
  padding-inline-end: var(--space-xs, 8px);
  border-start-start-radius: var(--border-radius-item, 8px);
  border-start-end-radius: var(--border-radius-item, 8px);
  border-end-start-radius: var(--border-radius-item, 8px);
  border-end-end-radius: var(--border-radius-item, 8px);
}

.content-display-option-label {
  flex-grow: 1;
  min-inline-size: 0;
  word-break: break-word;
  padding-inline-end: var(--space-l, 20px);
}

.content-display-title {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  font-weight: var(--font-display-label-weight, 700);
  color: var(--color-text-form-label, #0f141a);
  margin-block: 0;
  margin-inline: 0;
}

.content-display-description {
  color: var(--color-text-form-secondary, #656871);
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
  margin-block-start: var(--space-scaled-xxxs, 2px);
}

.content-display-option-list {
  position: relative;
  list-style: none;
  padding-block: 0;
  padding-inline: 0;
}

.second-column-small {
  padding-block-start: calc(2 * var(--space-scaled-l, 20px));
}
`;

export { componentStyles as collectionPreferencesStyles };
export { sharedStyles };
