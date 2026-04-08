// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.drawer {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
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
  font-size: var(--font-panel-header-size, 18px);
  letter-spacing: var(--letter-spacing-heading-m, -0.01em);
  line-height: var(--font-panel-header-line-height, 22px);
  font-weight: var(--font-weight-heading-l, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  display: flex;
  justify-content: space-between;
  color: var(--color-text-heading-default, #0f141a);
  padding-block: var(--space-panel-header-vertical, 20px);
  padding-inline: var(--space-panel-side-left, 28px) calc(var(--space-l, 20px) + var(--space-scaled-xxl, 32px));
  border-block-end: var(--border-divider-section-width, 1px) solid var(--color-border-panel-header, #c6c6cd);


}
@media (min-width: 689px) {
  .header.with-additional-action {
    /*
      this padding is needed when the drawer renders inside a runtime drawer and the runtime drawer has an additional action
      on the right (or left in rtl). in this case this padding ensures that the drawer's content does not overlap with runtime actions
    */
    padding-inline: var(--space-panel-side-left, 28px) calc(var(--space-xxxl, 40px) + var(--space-scaled-xxl, 32px));
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
  font-size: var(--font-panel-header-size, 18px);
  letter-spacing: var(--letter-spacing-heading-m, -0.01em);
  line-height: var(--font-panel-header-line-height, 22px);
  font-weight: var(--font-weight-heading-l, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  padding-block: 0;
  margin-block: 0;
}

.header-actions {
  display: inline-flex;
  align-items: flex-start;
  z-index: 1;
}

.content-with-paddings:not(:empty) {
  padding-block-start: var(--space-panel-content-top, 20px);
  padding-inline-start: var(--space-panel-side-left, 28px);
  padding-inline-end: var(--space-panel-side-right, 24px);
  padding-block-end: var(--space-panel-content-bottom, 40px);
}

.footer {
  background-color: var(--color-background-container-content, #ffffff);
  border-block-start: var(--border-divider-section-width, 1px) solid var(--color-border-panel-header, #c6c6cd);
  padding-block: var(--space-panel-content-top, 20px);
  padding-inline: var(--space-panel-side-left, 28px) var(--space-panel-side-right, 24px);
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
