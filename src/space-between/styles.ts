// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  display: flex;
}

.child:empty {
  display: none;
}

/*
 * Horizontal variant
 */
.horizontal {
  flex-direction: row;
  flex-wrap: wrap;
}
.horizontal-xxxs {
  gap: var(--space-xxxs, 2px);
}
.horizontal-xxs {
  gap: var(--space-xxs, 4px);
}
.horizontal-xs {
  gap: var(--space-xs, 8px);
}
.horizontal-s {
  gap: var(--space-s, 12px);
}
.horizontal-m {
  gap: var(--space-m, 16px);
}
.horizontal-l {
  gap: var(--space-l, 20px);
}
.horizontal-xl {
  gap: var(--space-xl, 24px);
}
.horizontal-xxl {
  gap: var(--space-xxl, 32px);
}

/*
 * Vertical variant
 */
.vertical {
  flex-direction: column;
}
.vertical-xxxs {
  row-gap: var(--space-xxxs, 2px);
}
.vertical-xxs {
  row-gap: var(--space-xxs, 4px);
}
.vertical-xs {
  row-gap: var(--space-xs, 8px);
}
.vertical-s {
  row-gap: var(--space-scaled-s, 12px);
}
.vertical-m {
  row-gap: var(--space-scaled-m, 16px);
}
.vertical-l {
  row-gap: var(--space-scaled-l, 20px);
}
.vertical-xl {
  row-gap: var(--space-scaled-xl, 24px);
}
.vertical-xxl {
  row-gap: var(--space-scaled-xxl, 32px);
}

.align-center {
  align-items: center;
}

.align-start {
  align-items: start;
}

.align-end {
  align-items: end;
}
`;

export { componentStyles as spaceBetweenStyles };
export { sharedStyles };
