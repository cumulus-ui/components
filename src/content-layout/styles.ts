// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.layout {
  --awsui-content-layout-default-horizontal-padding: var(--space-layout-content-horizontal, 24px);
  --awsui-content-layout-max-content-width: 0px;
  --awsui-content-layout-main-gap: 0px;
  display: grid;
  grid-template-columns: 0 0 1fr minmax(0, var(--awsui-content-layout-max-content-width)) 1fr 0 0;
  grid-template-rows: var(--awsui-content-layout-main-gap) min-content min-content auto var(--space-dark-header-overlap-distance, 36px) 1fr;
  min-block-size: 100%;
}
@media (max-width: 688px) {
  .layout {
    --awsui-content-layout-default-horizontal-padding: var(--space-l, 20px);
  }
}
.layout > .background {
  grid-column: 1/8;
  grid-row: 1/6;
  color: var(--color-text-body-default, #0f141a);
}
.layout > .background.is-overlap-disabled {
  grid-row: 1/5;
}
.layout > .background > .header-background {
  inline-size: 100%;
  block-size: 100%;
}
.layout > .notifications {
  grid-column: 4;
  grid-row: 2;
  padding-block-end: var(--space-xs, 8px);
}
.layout > .breadcrumbs {
  grid-column: 4;
  grid-row: 3;
  padding-block-end: var(--space-xs, 8px);
}
.layout.default-padding {
  --awsui-content-layout-main-gap: var(--space-scaled-m, 16px);
  grid-template-columns: var(--awsui-toggles-left-width, 0) var(--awsui-content-layout-default-horizontal-padding, 0) 1fr minmax(0, var(--awsui-content-layout-max-content-width)) 1fr var(--awsui-content-layout-default-horizontal-padding, 0) var(--awsui-toggles-right-width, 0);
}
.layout > .header-wrapper {
  grid-column: 4;
  grid-row: 4;
  padding-block-end: var(--space-content-header-padding-bottom, 16px);
}
.layout > .header-wrapper.with-divider {
  border-block-end: 1px solid var(--color-border-divider-default, #c6c6cd);
}
.layout > .content {
  grid-column: 4;
  grid-row: 5/8;
}
.layout:not(.has-header) {
  grid-template-rows: var(--awsui-content-layout-main-gap) min-content min-content 0 calc(var(--space-dark-header-overlap-distance, 36px)) 1fr;
}
.layout.is-overlap-disabled {
  grid-template-rows: var(--awsui-content-layout-main-gap) min-content min-content auto 0 1fr;
}

.layout.is-visual-refresh > .background.has-default-background {
  background-color: var(--color-background-layout-main, #ffffff);
}

.layout:not(.is-visual-refresh).has-notifications {
  --awsui-content-layout-main-gap: 0px;
}
.layout:not(.is-visual-refresh) > .notifications {
  grid-column: 1/8;
}
`;

export { componentStyles as contentLayoutStyles };
export { sharedStyles };
