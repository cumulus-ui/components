// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.drawer {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  word-wrap: break-word;
}
.drawer.with-footer {
  display: flex;
  flex-direction: column;
  min-block-size: 100%;
}
.drawer.with-footer > .content {
  flex: 1;
}

.header {
  font-size: var(--font-panel-header-size-33h9j8, 18px);
  letter-spacing: var(--letter-spacing-heading-m-29ewnk, -0.01em);
  line-height: var(--font-panel-header-line-height-8xb2qj, 22px);
  font-weight: var(--font-weight-heading-l-0t6dwc, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
  display: flex;
  justify-content: space-between;
  color: var(--color-text-heading-default-izpp46, #0f141a);
  padding-block: var(--space-panel-header-vertical-ckfgmy, 20px);
  padding-inline: var(--space-panel-side-left-u1m3s9, 28px) calc(var(--space-l-2ud1p3, 20px) + var(--space-scaled-xxl-6wgq96, 32px));
  border-block-end: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-panel-header-ygztvl, #c6c6cd);


}
@media (min-width: 689px) {
  .header.with-additional-action {
    /*
      this padding is needed when the drawer renders inside a runtime drawer and the runtime drawer has an additional action
      on the right (or left in rtl). in this case this padding ensures that the drawer's content does not overlap with runtime actions
    */
    padding-inline: var(--space-panel-side-left-u1m3s9, 28px) calc(var(--space-xxxl-aut1u7, 40px) + var(--space-scaled-xxl-6wgq96, 32px));
  }
}
.header.with-runtime-context {
  padding-block: 14px;
}
.with-toolbar > .header {
  border-color: transparent;
  margin-block-end: 0px;
}
.header h2,
.header h3,
.header h4,
.header h5,
.header h6 {
  font-size: var(--font-panel-header-size-33h9j8, 18px);
  letter-spacing: var(--letter-spacing-heading-m-29ewnk, -0.01em);
  line-height: var(--font-panel-header-line-height-8xb2qj, 22px);
  font-weight: var(--font-weight-heading-l-0t6dwc, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
  padding-block: 0;
  margin-block: 0;
}

.header-actions {
  display: inline-flex;
  align-items: flex-start;
  z-index: 1;
}

.content-with-paddings:not(:empty) {
  padding-block-start: var(--space-panel-content-top-qvd1dr, 20px);
  padding-inline-start: var(--space-panel-side-left-u1m3s9, 28px);
  padding-inline-end: var(--space-panel-side-right-8wwirc, 24px);
  padding-block-end: var(--space-panel-content-bottom-24c6lu, 40px);
}

.footer {
  background-color: var(--color-background-container-content-6u8rvp, #ffffff);
  border-block-start: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-panel-header-ygztvl, #c6c6cd);
  padding-block: var(--space-panel-content-top-qvd1dr, 20px);
  padding-inline: var(--space-panel-side-left-u1m3s9, 28px) var(--space-panel-side-right-8wwirc, 24px);
}
.footer.is-sticky {
  position: sticky;
  inset-block-end: 0;
  inset-inline-start: 0;
  inset-inline-end: 0;
  z-index: 810;
}
`;

export { componentStyles as drawerStyles };
export { sharedStyles };
