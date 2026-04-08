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
  flex-shrink: 0;
  position: relative;
  min-inline-size: 0;
  word-break: break-word;
  background-color: var(--color-background-layout-panel-content, #ffffff);
  z-index: 840;
}
.drawer-closed:not(.refresh) {
  min-inline-size: 40px;
}

.drawer-content-side {
  display: flex;
  align-items: center;
  block-size: 100%;
  overflow: auto;
}
.drawer-content-side > [aria-hidden=true], .drawer-closed.refresh > .drawer-content-side {
  display: none;
}
.drawer-closed:not(.refresh) > .drawer-content-side {
  inline-size: 40px;
}
.drawer-closed:not(.refresh) > .drawer-content-side:hover {
  background: var(--color-background-layout-panel-hover, #ebebf0);
}

:not(.drawer-closed) > .drawer-content-bottom {
  overflow-y: auto;
  position: absolute;
  inset: 0;
  clip-path: border-box;
}

.position-bottom {
  position: fixed;
  overflow-y: auto;
  /*
  Removed the position fixed with the AppLayout refactor because the
  SplitPanel is no longer in fixed position in the DOM.
  */
}
.position-bottom:not(.hidden) {
  border-block-start: var(--border-panel-top-width, 1px) solid var(--color-border-divider-panel-bottom, #c6c6cd);
}
.position-bottom:not(.refresh) {
  box-shadow: var(--shadow-split-bottom, 0px -36px 36px -36px rgba(0, 7, 22, 0.1));
  border-inline-start: var(--border-divider-section-width, 1px) solid var(--color-border-divider-panel-bottom, #c6c6cd);
  border-inline-end: var(--border-divider-section-width, 1px) solid var(--color-border-divider-panel-bottom, #c6c6cd);
}
.position-bottom.drawer-closed {
  overflow: hidden;
}
.position-bottom.drawer-closed.drawer-clickable:hover {
  cursor: pointer;
  background: var(--color-background-layout-panel-hover, #ebebf0);
}
.position-bottom > .drawer-content-bottom > [aria-hidden=true] {
  display: none;
}
.position-bottom.refresh {
  position: relative;
}

.position-side {
  border-block-start: none;
  box-shadow: var(--shadow-split-side, -1px 0px 1px 0px #e9ebed, -36px 6px 36px -36px rgba(0, 7, 22, 0.1));
  block-size: 100%;
}
.position-side.with-toolbar {
  box-shadow: none;
}

.slider-wrapper-bottom {
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  inline-size: 100%;
  block-size: 18px;
  display: flex;
  justify-content: center;
  z-index: 2;
}

.slider-wrapper-side {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  block-size: 100%;
  inline-size: 18px;
  display: flex;
  align-items: center;
  z-index: 1;
}
.slider-wrapper-side.with-toolbar {
  position: unset;
}

.open-button-side {
  flex: 0 0 auto;
  align-self: flex-start;
  box-sizing: border-box;
  margin-block-start: var(--space-xxs, 4px);
  margin-block-end: 0;
  margin-inline: auto;
}

.pane-header-wrapper-bottom {
  position: sticky;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  padding-block: 0;
  padding-inline: var(--space-layout-content-horizontal, 24px);
}
.drawer-mobile > .drawer-content-bottom > .pane-header-wrapper-bottom {
  padding-block: 0;
  padding-inline: var(--space-l, 20px);
}
.drawer-disable-content-paddings > .drawer-content-bottom > .pane-header-wrapper-bottom {
  padding-block: 0;
  padding-inline: var(--space-l, 20px);
}
:not(.drawer-closed) > .drawer-content-bottom > .pane-header-wrapper-bottom {
  background-color: var(--color-background-layout-panel-content, #ffffff);
  border-block-end: var(--border-panel-header-width, 1px) solid var(--color-border-panel-header, #c6c6cd);
}
.with-toolbar:not(.drawer-closed) > .drawer-content-bottom > .pane-header-wrapper-bottom {
  border-color: transparent;
}

.content-bottom {
  padding-block: 0;
  padding-inline: var(--space-layout-content-horizontal, 24px);
  margin-block-start: var(--space-panel-split-top, 20px);
  position: relative;
  z-index: 0;
}
.with-toolbar > .drawer-content-bottom > .content-bottom {
  margin-block-start: 0px;
}
.drawer-mobile > .drawer-content-bottom > .content-bottom {
  padding-block: 0;
  padding-inline: var(--space-l, 20px);
}
.drawer-disable-content-paddings > .drawer-content-bottom > .content-bottom {
  padding-block: 0;
  padding-inline: 0;
}

.pane-bottom-center-align {
  display: flex;
  justify-content: center;
}

.pane-bottom-content-nav-padding {
  padding-inline-start: calc(var(--space-layout-toggle-diameter, 36px) + 2 * var(--space-layout-toggle-padding, 12px));
}

.pane-bottom-content-tools-padding {
  padding-inline-end: calc(var(--space-layout-toggle-diameter, 36px) + 2 * var(--space-layout-toggle-padding, 12px));
}

.content-bottom-max-width {
  flex-grow: 1;
  max-inline-size: 100%;
}

.content-side {
  flex: auto;
  align-self: flex-start;
  box-sizing: border-box;
  overflow-y: auto;
  inset-block-start: 0;
  inset-inline: 0;
  block-size: 100%;
}
.content-side.with-toolbar {
  position: absolute;
}
.content-side > .pane-header-wrapper-side {
  padding-block: 0;
  padding-inline-end: var(--space-m, 16px);
  padding-inline-start: var(--space-panel-side-left, 28px);
  border-block-end: var(--border-panel-header-width, 1px) solid var(--color-border-panel-header, #c6c6cd);
}
.content-side.with-toolbar > .pane-header-wrapper-side {
  border-color: transparent;
}
.content-side > .pane-content-wrapper-side {
  padding-block: 0;
  padding-inline-start: var(--space-panel-side-left, 28px);
  padding-inline-end: var(--space-panel-side-right, 24px);
  margin-block-start: var(--space-panel-split-top, 20px);
  margin-block-end: var(--space-panel-split-bottom, 20px);
}
.content-side.with-toolbar > .pane-content-wrapper-side {
  margin-block-start: 0px;
}

.header {
  inline-size: 100%;
  margin-block: var(--size-vertical-panel-icon-offset, 15px);
  margin-inline: 0;
}
.header.with-toolbar {
  margin-block: 14px;
}
.header-main-row, .header-main-content {
  display: flex;
}
.header-main-row {
  align-items: flex-start;
}
.header-main-content {
  flex: auto;
  flex-direction: row;
  column-gap: var(--space-scaled-xs, 8px);
  row-gap: var(--space-scaled-xxs, 4px);
  justify-content: space-between;
  align-items: flex-start;
}
.header-tag-and-info {
  flex-grow: 1;
  margin-block-start: calc(var(--space-scaled-xxs, 4px) + 1px);
  line-height: var(--line-height-body-s, 16px);
}
.header-tag-and-info.with-description {
  margin-block-end: var(--space-scaled-xxxs, 2px);
}
.header-tag.with-info, .header-text {
  display: inline;
}
.header-tag {
  margin-block: 0;
}
.header-before-slot, .header-text {
  font-size: var(--font-panel-header-size, 18px);
  letter-spacing: var(--letter-spacing-heading-m, -0.01em);
  line-height: var(--font-panel-header-line-height, 22px);
  font-weight: var(--font-weight-heading-l, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.header-before-slot {
  margin-block-start: calc(-1 * calc(var(--space-scaled-xxs, 4px) + 1px));
}
.header-tag.with-info > .header-before-slot, .header-before-slot.with-header-text {
  display: inline-block;
}
.header-before-slot.with-header-text, .header-tag.with-info {
  margin-inline-end: var(--space-scaled-xs, 8px);
}
.header-actions-slot {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  min-block-size: calc(var(--font-panel-header-line-height, 22px) + 2 * calc(var(--space-scaled-xxs, 4px) + 1px));
}
.header-description {
  color: var(--color-text-heading-secondary, #424650);
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  margin-block: 0;
}

.header-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 0 0 auto;
  margin-inline-start: var(--space-xs, 8px);
}

.divider {
  border-inline-end: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
  margin-block: var(--space-scaled-xxs, 4px);
  margin-inline: var(--space-scaled-xs, 8px);
}
`;

export { componentStyles as splitPanelStyles };
export { sharedStyles };
