// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const appLayoutVisualRefreshToolbarToolbarTriggerButtonStyles = css`
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger {
  all: initial;
  cursor: pointer;
  color: var(--color-text-interactive-default, #424650);
  text-align: center;
}
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger.app-layout-visual-refresh-toolbar-toolbar-trigger-button--custom {
  display: flex;
  block-size: 100%;
  inline-size: 100%;
  box-sizing: border-box;
}
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger-with-badge {
  clip-path: path("M29.2862 10.4145C28.7243 10.5998 28.1238 10.7 27.4999 10.7C24.3519 10.7 21.7999 8.14803 21.7999 5C21.7999 3.92883 22.0954 2.92667 22.6093 2.07057C20.3785 0.754846 17.7774 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 13.4007 29.7497 11.8599 29.2862 10.4145Z");

}
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger-with-badge:dir(rtl) {
  clip-path: path("M2.21384 10.4145C2.77569 10.5998 3.37617 10.7 4.00007 10.7C7.1481 10.7 9.70007 8.14803 9.70007 5C9.70007 3.92883 9.4046 2.92667 8.89071 2.07057C11.1215 0.754846 13.7226 0 16.5 0C24.7843 0 31.5 6.71573 31.5 15C31.5 23.2843 24.7843 30 16.5 30C8.21573 30 1.5 23.2843 1.5 15C1.5 13.4007 1.75029 11.8599 2.21384 10.4145Z");
}
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger:focus {
  outline: none;
}
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger.app-layout-visual-refresh-toolbar-toolbar-trigger-button--circle {
  border-start-start-radius: 50%;
  border-start-end-radius: 50%;
  border-end-start-radius: 50%;
  border-end-end-radius: 50%;
  block-size: 30px;
  inline-size: 30px;
}
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger.app-layout-visual-refresh-toolbar-toolbar-trigger-button--circle:hover {
  background: var(--color-background-input-disabled, #ebebf0);
  color: var(--color-text-interactive-hover, #0f141a);
}
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger.app-layout-visual-refresh-toolbar-toolbar-trigger-button--circle:active {
  background: var(--color-background-control-disabled, #dedee3);
  color: var(--color-text-interactive-hover, #0f141a);
}
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger.app-layout-visual-refresh-toolbar-toolbar-trigger-button--circle.app-layout-visual-refresh-toolbar-toolbar-trigger-button--selected {
  background: var(--color-background-layout-toggle-selected-default, #006ce0);
  color: var(--color-text-layout-toggle-selected, #ffffff);
}
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger.app-layout-visual-refresh-toolbar-toolbar-trigger-button--circle.app-layout-visual-refresh-toolbar-toolbar-trigger-button--selected:hover {
  background: var(--color-background-layout-toggle-selected-hover, #004a9e);
}
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger.app-layout-visual-refresh-toolbar-toolbar-trigger-button--circle.app-layout-visual-refresh-toolbar-toolbar-trigger-button--selected:active {
  background: var(--color-background-layout-toggle-selected-active, #006ce0);
}

.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger-wrapper {
  position: relative;
}
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger-wrapper:has(:focus-visible) {
  position: relative;
}
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger-wrapper:has(:focus-visible) {
  outline: 2px dotted transparent;
  outline-offset: calc(3px - 1px);
}
.app-layout-visual-refresh-toolbar-toolbar-trigger-button--trigger-wrapper:has(:focus-visible)::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 3px);
  inset-block-start: calc(-1 * 3px);
  inline-size: calc(100% + 3px + 3px);
  block-size: calc(100% + 3px + 3px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}

.app-layout-visual-refresh-toolbar-toolbar-trigger-button--dot {
  position: absolute;
  inline-size: 8px;
  block-size: 8px;
  border-start-start-radius: 8px;
  border-start-end-radius: 8px;
  border-end-start-radius: 8px;
  border-end-end-radius: 8px;
  background-color: var(--color-background-badge-icon, #db0000);
  inset-block-start: 1px;
  inset-inline-end: -1px;
}
`;
