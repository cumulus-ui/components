// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const appLayoutVisualRefreshToolbarToolbarStyles = css`
.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar {
  background-color: var(--color-background-layout-panel-content, #ffffff);
  box-sizing: border-box;
  position: sticky;
  z-index: 1000;
  display: flex;
  transition: ease var(--motion-duration-refresh-only-slow, 250ms);
  transition-property: inset-block-start, opacity;
}
@media (prefers-reduced-motion: reduce) {
  .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar, .awsui-mode-entering .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar {
  animation: none;
  transition: none;
}
.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar.app-layout-visual-refresh-toolbar-toolbar--with-ai-drawer:not(:has(.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom)):before, .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar.app-layout-visual-refresh-toolbar-toolbar--with-ai-drawer:not(:has(.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom)):after {
  content: "";
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  inline-size: 5px;
  block-size: 5px;
  background: #161d26;
  }
@media not print {
  .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar.app-layout-visual-refresh-toolbar-toolbar--with-ai-drawer:not(:has(.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom)):before, .awsui-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar.app-layout-visual-refresh-toolbar-toolbar--with-ai-drawer:not(:has(.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom)):before, .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar.app-layout-visual-refresh-toolbar-toolbar--with-ai-drawer:not(:has(.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom)):after, .awsui-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar.app-layout-visual-refresh-toolbar-toolbar--with-ai-drawer:not(:has(.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom)):after {
    content: "";
    position: absolute;
    inset-block-start: 42px;
    inset-inline-start: 0;
    inline-size: var(--border-divider-section-width, 1px);
    block-size: calc(100vh - 42px);
    background: var(--color-border-layout, #c6c6cd);
  }
}
.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar.app-layout-visual-refresh-toolbar-toolbar--with-ai-drawer:not(:has(.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom)):after {
  background-color: var(--color-background-layout-panel-content, #ffffff);
  border-start-start-radius: var(--space-xxs, 4px);
}
@media not print {
  .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar.app-layout-visual-refresh-toolbar-toolbar--with-ai-drawer:not(:has(.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom)):after, .awsui-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar.app-layout-visual-refresh-toolbar-toolbar--with-ai-drawer:not(:has(.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom)):after {
    display: none;
  }
}
.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar.app-layout-visual-refresh-toolbar-toolbar--disable-body-scroll {
  inset-block-start: 0px;
}
.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom {
  grid-column: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding-inline: var(--space-static-s, 12px);
  box-sizing: border-box;
  /**
   * Button sizing adjustments for theme-specific design requirements
   *
   * Light mode: Button width is set to 100% + border width to intentionally overlap
   * with the bottom border, as specified in the UI design.
   *
   * Dark mode: Resets the overlap styling due to different design requirements
   * where overlap should not occur.
   */
  block-size: calc(100% + var(--border-divider-section-width, 1px));
  background: #161d26;
}
@media not print {
  .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom, .awsui-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom {
    block-size: 100%;
  }
}
.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom:before, .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom:after {
  content: "";
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: -5px;
  inline-size: 5px;
  block-size: 5px;
  background: #161d26;
}
@media not print {
  .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom:before, .awsui-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom:before, .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom:after, .awsui-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom:after {
    display: none;
  }
}
.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-ai-custom:after {
  background-color: var(--color-background-layout-panel-content, #ffffff);
  border-start-start-radius: var(--space-xxs, 4px);
}
.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--toolbar-container {
  block-size: 100%;
  align-items: center;
  display: grid;
  inline-size: 100%;
  grid-template-columns: min-content min-content minmax(0, 3fr) minmax(auto, 1fr);
  grid-template-rows: 1fr;
}
@media not print {
  .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--toolbar-container, .awsui-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--toolbar-container {
    border-block-start: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
  }
  .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--toolbar-container.app-layout-visual-refresh-toolbar-toolbar--with-ai-drawer, .awsui-dark-mode .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--toolbar-container.app-layout-visual-refresh-toolbar-toolbar--with-ai-drawer {
    border-start-start-radius: var(--space-xxs, 4px);
    border-inline-start: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
  }
}
.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--toolbar-container > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-nav {
  grid-column: 2;
  padding-inline-start: var(--space-m, 16px);
  padding-inline-end: var(--space-static-xxs, 4px);
}
.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--toolbar-container > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-breadcrumbs {
  grid-column: 3;
  padding-inline: var(--space-static-xs, 8px);
  background-color: transparent;
  flex: 1 0;
}
.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--toolbar-container > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-breadcrumbs:first-child {
  padding-inline: calc(var(--space-static-xs, 8px) + var(--space-static-m, 16px));
}
.app-layout-visual-refresh-toolbar-toolbar--universal-toolbar > .app-layout-visual-refresh-toolbar-toolbar--toolbar-container > .app-layout-visual-refresh-toolbar-toolbar--universal-toolbar-drawers {
  grid-column: 4;
  column-gap: var(--space-static-xs, 8px);
  display: flex;
  justify-content: flex-end;
  block-size: 100%;
}

.app-layout-visual-refresh-toolbar-toolbar--drawers-desktop-triggers-container,
.app-layout-visual-refresh-toolbar-toolbar--drawers-mobile-triggers-container {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  background-color: transparent;
  padding-inline: var(--space-m, 16px);
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: hidden;

  overscroll-behavior-y: contain;

  overscroll-behavior-x: contain;
  inline-size: 100%;
}

.app-layout-visual-refresh-toolbar-toolbar--drawers-trigger-content {
  block-size: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: var(--space-xs, 8px);
  justify-content: flex-end;
  padding-inline-start: var(--space-xs, 8px);
}

.app-layout-visual-refresh-toolbar-toolbar--group-divider {
  border-inline-end: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
  block-size: 60%;
}

@media (max-width: 688px) {
  .app-layout-visual-refresh-toolbar-toolbar--drawers-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.app-layout-visual-refresh-toolbar-toolbar--block-body-scroll {
  overflow: hidden;
}
`;
