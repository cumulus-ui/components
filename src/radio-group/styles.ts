// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.radio-group {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
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
  gap: var(--space-scaled-l-sej05l, 20px);
}

.radio + .radio:not(.horizontal) {
  margin-block-start: var(--space-scaled-xxs-pfm1nx, 4px);
}

.radio--has-description + .radio:not(.horizontal) {
  margin-block-start: var(--space-scaled-xs-xwoogq, 8px);
}

.radio.horizontal {
  max-inline-size: calc(16 * var(--space-scaled-xxl-6wgq96, 32px));
}
`;

export { componentStyles as radioGroupStyles };
export { sharedStyles };
