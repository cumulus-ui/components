// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.layout {
  --awsui-content-layout-default-horizontal-padding-6b9ypa: var(--space-layout-content-horizontal-buc0zz, 24px);
  --awsui-content-layout-max-content-width-6b9ypa: 0px;
  --awsui-content-layout-main-gap-6b9ypa: 0px;
  display: grid;
  grid-template-columns: 0 0 1fr minmax(0, var(--awsui-content-layout-max-content-width-6b9ypa)) 1fr 0 0;
  grid-template-rows: var(--awsui-content-layout-main-gap-6b9ypa) min-content min-content auto var(--space-dark-header-overlap-distance-ld45ap, 36px) 1fr;
  min-block-size: 100%;
}
@media (max-width: 688px) {
  .layout {
    --awsui-content-layout-default-horizontal-padding-6b9ypa: var(--space-l-2ud1p3, 20px);
  }
}
.layout > .background {
  grid-column: 1/8;
  grid-row: 1/6;
  color: var(--color-text-body-default-vvtq8u, #0f141a);
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
  padding-block-end: var(--space-xs-ymlm0b, 8px);
}
.layout > .breadcrumbs {
  grid-column: 4;
  grid-row: 3;
  padding-block-end: var(--space-xs-ymlm0b, 8px);
}
.layout.default-padding {
  --awsui-content-layout-main-gap-6b9ypa: var(--space-scaled-m-m892r9, 16px);
  grid-template-columns: var(--awsui-toggles-left-width-6b9ypa, 0) var(--awsui-content-layout-default-horizontal-padding-6b9ypa, 0) 1fr minmax(0, var(--awsui-content-layout-max-content-width-6b9ypa)) 1fr var(--awsui-content-layout-default-horizontal-padding-6b9ypa, 0) var(--awsui-toggles-right-width-6b9ypa, 0);
}
.layout > .header-wrapper {
  grid-column: 4;
  grid-row: 4;
  padding-block-end: var(--space-content-header-padding-bottom-rvy5xz, 16px);
}
.layout > .header-wrapper.with-divider {
  border-block-end: 1px solid var(--color-border-divider-default-nr68jt, #c6c6cd);
}
.layout > .content {
  grid-column: 4;
  grid-row: 5/8;
}
.layout:not(.has-header) {
  grid-template-rows: var(--awsui-content-layout-main-gap-6b9ypa) min-content min-content 0 calc(var(--space-dark-header-overlap-distance-ld45ap, 36px)) 1fr;
}
.layout.is-overlap-disabled {
  grid-template-rows: var(--awsui-content-layout-main-gap-6b9ypa) min-content min-content auto 0 1fr;
}

.layout.is-visual-refresh > .background.has-default-background {
  background-color: var(--color-background-layout-main-5ilwcb, #ffffff);
}

.layout:not(.is-visual-refresh).has-notifications {
  --awsui-content-layout-main-gap-6b9ypa: 0px;
}
.layout:not(.is-visual-refresh) > .notifications {
  grid-column: 1/8;
}
`;

export { componentStyles as contentLayoutStyles };
export { sharedStyles };
