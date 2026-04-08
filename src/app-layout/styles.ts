// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--color-text-body-default, #0f141a);
}

.root-no-scroll {
  position: relative;
  z-index: 1;
}

.layout {
  flex: 1 1 auto;
  display: flex;
  align-items: stretch;
  background-color: var(--color-background-layout-main, #ffffff);
}
.layout-no-scroll {
  overflow: hidden;
}

.layout-main {
  flex: 1;
  min-inline-size: 0;
  background-color: var(--color-background-layout-main, #ffffff);
  position: relative;
}
.layout-main-scrollable {
  overflow: auto;
}

.unfocusable * {
  visibility: hidden;
}

.breadcrumbs-desktop {
  padding-block-start: var(--space-scaled-m, 16px);
  padding-block-end: var(--space-scaled-s, 12px);
}

.content-header-wrapper {
  padding-block-end: var(--space-content-header-padding-bottom, 16px);
}

.content-wrapper {
  padding-block-end: var(--space-layout-content-bottom, 40px);
}

.content-overlapped {
  margin-block-start: calc(-1 * var(--space-dark-header-overlap-distance, 36px));
}

.content-extra-top-padding {
  padding-block-start: var(--space-scaled-m, 16px);
}
`;

export { componentStyles as appLayoutStyles };
export { sharedStyles };
