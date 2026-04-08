// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.key-value-pairs {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.group-title {
  padding-block-end: var(--space-scaled-m, 16px);
}

.group-list {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  display: flex;
  flex-direction: column;
  row-gap: var(--space-scaled-m, 16px);
}

.term {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  font-weight: var(--font-display-label-weight, 700);
  color: var(--color-text-label, #0f141a);
  margin-block-end: var(--space-key-value-gap, 0px);
}

.key-label {
  display: inline-flex;
  margin-inline-end: var(--space-xs, 8px);
}
.key-label:only-child {
  margin-block: 0;
  margin-inline: 0;
}

.detail {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  margin-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}

.info {
  display: inline-flex;
  padding-inline-start: var(--space-xs, 8px);
  border-inline-start: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
}
`;

export { componentStyles as keyValuePairsStyles };
export { sharedStyles };
