// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const appLayoutDrawerStyles = css`
.app-layout-drawer--toggle {
  box-sizing: border-box;
  padding-block: var(--space-xxs, 4px);
  padding-inline: 7px;
}

.app-layout-drawer--drawer-triggers {
  box-sizing: border-box;
}

.app-layout-drawer--drawer {
  flex-shrink: 0;
  position: relative;
  word-wrap: break-word;
  box-shadow: var(--shadow-panel, 0px 0px 0px 1px #b6bec9);
}
.app-layout-drawer--drawer:not(.app-layout-drawer--drawer-mobile) {
  z-index: 830;
}
.app-layout-drawer--drawer-closed {
  min-inline-size: 40px;
}
.app-layout-drawer--drawer-closed.app-layout-drawer--drawer-mobile {
  display: none;
}

.app-layout-drawer--drawer-content {
  position: fixed;
  overflow: auto;
  background-color: var(--color-background-layout-panel-content, #ffffff);
  display: flex;
  flex-direction: column;
}
.app-layout-drawer--drawer-mobile > .app-layout-drawer--drawer-content {
  z-index: 1001;
  inset: 0;
}
.app-layout-drawer--drawer-closed > .app-layout-drawer--drawer-content {
  inline-size: 40px;
}
.app-layout-drawer--drawer-closed > .app-layout-drawer--drawer-content.app-layout-drawer--drawer-content-clickable {
  cursor: pointer;
  color: var(--color-text-interactive-default, #424650);
}
.app-layout-drawer--drawer-closed > .app-layout-drawer--drawer-content.app-layout-drawer--drawer-content-clickable:hover {
  background: var(--color-background-layout-panel-hover, #ebebf0);
}
.app-layout-drawer--drawer-content > [aria-hidden=true] {
  display: none;
}
.app-layout-drawer--drawer-content > .app-layout-drawer--drawer-resize-content {
  overflow: auto;
  block-size: 100%;
  position: relative;
}
.app-layout-drawer--drawer-content > .app-layout-drawer--drawer-content-wrapper {
  flex: 1;
}

.app-layout-drawer--drawer-triggers-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: stretch;
}

.app-layout-drawer--drawer-trigger {
  padding-block: var(--space-xxs, 4px);
  padding-inline: 7px;
  cursor: pointer;
  color: var(--color-text-interactive-default, #424650);
}
.app-layout-drawer--drawer-trigger:not(:first-child) {
  border-block-start: 1px solid var(--color-border-layout, #c6c6cd);
}
.app-layout-drawer--drawer-trigger:hover {
  color: var(--color-text-layout-toggle-hover, #006ce0);
}
.app-layout-drawer--drawer-trigger-active, .app-layout-drawer--drawer-trigger-active:hover {
  background-color: var(--color-background-layout-toggle-selected-default, #006ce0);
  color: var(--color-text-layout-toggle-active, #ffffff);
}
.app-layout-drawer--drawer-content-clickable > .app-layout-drawer--drawer-triggers-wrapper > .app-layout-drawer--drawer-trigger:hover {
  color: var(--color-text-interactive-default, #424650);
}

.app-layout-drawer--resize-handle-wrapper {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  block-size: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
}

.app-layout-drawer--hide {
  display: none;
}
`;
