// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const tableStickyScrollbarStyles = css`
.table-sticky-scrollbar--sticky-scrollbar {
  block-size: 15px;
  position: sticky;
  display: none;
  overflow-x: auto;
  overflow-y: hidden;
  inset-block-end: 0;
  inline-size: 100%;
}
.table-sticky-scrollbar--sticky-scrollbar[data-stuck=false] {
  clip-path: inset(-9999px 0 0 0 round var(--border-radius-container-nsfwmm, 16px));
}
.table-sticky-scrollbar--sticky-scrollbar-content {
  block-size: 15px;
}
.table-sticky-scrollbar--sticky-scrollbar-visible {
  display: block;
}
.table-sticky-scrollbar--sticky-scrollbar-native-invisible {
  margin-block-start: -15px;
}
.table-sticky-scrollbar--sticky-scrollbar-offset {
  z-index: 799;
}
.table-sticky-scrollbar--sticky-scrollbar-offset:not(.table-sticky-scrollbar--is-visual-refresh) {
  background-color: var(--color-background-container-content-6u8rvp, #ffffff);
  block-size: 15px;
  margin-block-start: calc(-1 * var(--border-divider-section-width-uwo8my, 1px));
  border-block-start: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-divider-default-nr68jt, #c6c6cd);
}
.table-sticky-scrollbar--sticky-scrollbar-offset.table-sticky-scrollbar--is-visual-refresh {
  margin-block-start: -5px;
}
`;
