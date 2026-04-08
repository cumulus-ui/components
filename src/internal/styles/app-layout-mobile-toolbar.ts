// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const appLayoutMobileToolbarStyles = css`
.app-layout-mobile-toolbar--block-body-scroll {
  overflow: hidden;
}

.app-layout-mobile-toolbar--mobile-bar {
  position: sticky;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 1000;
  inline-size: 100%;
  box-sizing: border-box;
  background-color: var(--color-background-layout-mobile-panel, #0f141a);
  box-shadow: var(--shadow-panel, 0px 0px 0px 1px #b6bec9);
  block-size: calc(2 * var(--space-m, 16px) + var(--space-scaled-xs, 8px));
}

.app-layout-mobile-toolbar--mobile-bar-breadcrumbs {
  min-inline-size: 0;
  flex: 1;
  margin-inline-start: var(--space-m, 16px);
  margin-inline-end: var(--space-m, 16px);
}

.app-layout-mobile-toolbar--mobile-toggle {
  box-sizing: border-box;
  cursor: pointer;
  z-index: 1;
  padding-block: var(--space-xxs, 4px);
  padding-inline: 7px;
  inline-size: 40px;
  color: var(--color-text-interactive-default, #424650);
}
.app-layout-mobile-toolbar--mobile-toggle-type-navigation {
  border-inline-end: 1px solid var(--color-border-layout, #c6c6cd);
}
.app-layout-mobile-toolbar--mobile-toggle-type-tools, .app-layout-mobile-toolbar--mobile-toggle-type-drawer {
  border-inline-start: 1px solid var(--color-border-layout, #c6c6cd);
}
.app-layout-mobile-toolbar--mobile-toggle:hover {
  background: var(--color-background-layout-panel-hover, #ebebf0);
}

.app-layout-mobile-toolbar--drawers-container {
  display: flex;
  align-items: stretch;
}
`;
