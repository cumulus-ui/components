// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.radio-group {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
.radio-group:not(.horizontal-group) {
  display: block;
}
.radio-group.horizontal-group {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: var(--space-scaled-l, 20px);
}

.radio + .radio:not(.horizontal) {
  margin-block-start: var(--space-scaled-xxs, 4px);
}

.radio--has-description + .radio:not(.horizontal) {
  margin-block-start: var(--space-scaled-xs, 8px);
}

.radio.horizontal {
  max-inline-size: calc(16 * var(--space-scaled-xxl, 32px));
}
`;

export { componentStyles as radioGroupStyles };
export { sharedStyles };
