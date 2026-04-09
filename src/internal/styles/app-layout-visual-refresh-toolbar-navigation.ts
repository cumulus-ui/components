// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const appLayoutVisualRefreshToolbarNavigationStyles = css`
.app-layout-visual-refresh-toolbar-navigation--navigation-container {
  position: sticky;
  z-index: 830;
  background-color: var(--color-background-container-content, #ffffff);
  inset-block-end: 0;
  overflow-x: hidden;
  word-wrap: break-word;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
}
.app-layout-visual-refresh-toolbar-navigation--navigation-container:not(.app-layout-visual-refresh-toolbar-navigation--is-navigation-open) {
  inline-size: 0px;
  display: none;
}
.app-layout-visual-refresh-toolbar-navigation--navigation-container > .app-layout-visual-refresh-toolbar-navigation--navigation {
  flex-grow: 1;
  block-size: 100%;
  overflow-y: auto;

  overscroll-behavior-y: contain;
  inline-size: var(--awsui-navigation-width);
  position: relative;
}
@media (max-width: 688px) {
  .app-layout-visual-refresh-toolbar-navigation--navigation-container {
    --awsui-navigation-width: 100vw;
    z-index: 1001;
  }
}

.app-layout-visual-refresh-toolbar-navigation--hide-navigation {
  position: absolute;
  inset-inline-end: var(--space-m, 16px);
  inset-block-start: 14px;
}
`;
