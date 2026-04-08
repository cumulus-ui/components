// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const appLayoutVisualRefreshStyles = css`
.app-layout-visual-refresh--breadcrumbs {
  background-color: var(--color-background-layout-main-5ilwcb, #ffffff);
  grid-area: breadcrumbs;
}

.app-layout-visual-refresh--drawers-container {
  background-color: transparent;
  display: flex;
  grid-column: 5;
  grid-row: 1/span 9;
  block-size: var(--awsui-content-height-6b9ypa);
  pointer-events: none;
  position: sticky;
  inset-block-start: var(--awsui-offset-top-6b9ypa);
  z-index: 830;
}
.app-layout-visual-refresh--drawers-container.app-layout-visual-refresh--has-open-drawer {
  background-color: var(--color-background-container-content-6u8rvp, #ffffff);
}
@media (min-width: 689px) {
  .app-layout-visual-refresh--drawers-container {
    max-inline-size: calc(var(--awsui-layout-width-6b9ypa) - var(--awsui-main-offset-left-6b9ypa) - var(--awsui-default-min-content-width-6b9ypa) - var(--awsui-content-gap-right-6b9ypa));
  }
}
@media (max-width: 688px) {
  .app-layout-visual-refresh--drawers-container {
    position: fixed;
    inset-inline-end: 0;
    z-index: 1001;

header.app-layout-visual-refresh--content {
  grid-area: header;
}

.app-layout-visual-refresh--container {
  grid-area: main;
  padding-block-end: var(--space-layout-content-bottom-zeb1g9, 40px);


section.app-layout-visual-refresh--mobile-toolbar {
  align-items: center;
  background-color: var(--color-background-layout-main-5ilwcb, #ffffff);
  border-block-end: 1px solid var(--color-border-divider-default-nr68jt, #c6c6cd);
  box-shadow: var(--shadow-sticky-lolw8j, 0px 4px 8px 1px rgba(0, 7, 22, 0.1));
  box-sizing: border-box;
  block-size: var(--awsui-mobile-bar-height-6b9ypa);
  display: grid;
  grid-area: mobileToolbar;
  grid-column: 1/span 5;
  grid-template-columns: auto minmax(0, 1fr) auto;
  padding-block: 0;
  padding-inline: var(--space-m-dsumyt, 16px);
  position: sticky;
  inset-block-start: var(--awsui-offset-top-6b9ypa);
  z-index: 1000;
}
section.app-layout-visual-refresh--mobile-toolbar:not(.app-layout-visual-refresh--remove-high-contrast-header) {
  background-color: var(--color-background-layout-main-5ilwcb, #ffffff);
  box-shadow: var(--shadow-panel-toggle-qddz27, 0px 6px 12px 1px rgba(0, 7, 22, 0.12));
}
section.app-layout-visual-refresh--mobile-toolbar > .app-layout-visual-refresh--mobile-toolbar-nav {
  grid-column: 1;
  margin-inline-end: var(--space-m-dsumyt, 16px);
}
section.app-layout-visual-refresh--mobile-toolbar > .app-layout-visual-refresh--mobile-toolbar-breadcrumbs {
  grid-column: 2;
  background-color: var(--color-background-layout-main-5ilwcb, #ffffff);
}
section.app-layout-visual-refresh--mobile-toolbar > .app-layout-visual-refresh--mobile-toolbar-tools {
  grid-column: 3;
  margin-inline-start: var(--space-m-dsumyt, 16px);
}

.app-layout-visual-refresh--navigation-container {
  display: flex;
  grid-column: 1;
  grid-row: 1/span 9;
  block-size: var(--awsui-content-height-6b9ypa);
  position: sticky;
  inset-block-start: var(--awsui-offset-top-6b9ypa);
  z-index: 830;

.app-layout-visual-refresh--notifications {
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  grid-area: notifications;
  z-index: 850;
}
.app-layout-visual-refresh--notifications.app-layout-visual-refresh--has-notification-content {
  padding-block-start: var(--space-scaled-s-8ozaad, 12px);
}
@media (min-width: 689px) {
  .app-layout-visual-refresh--notifications.app-layout-visual-refresh--sticky-notifications {
    --awsui-flashbar-sticky-bottom-margin-6b9ypa: var(--space-xxl-32srm4, 32px);
    position: sticky;
    inset-block-start: var(--awsui-offset-top-6b9ypa);
  }
  .app-layout-visual-refresh--notifications.app-layout-visual-refresh--sticky-notifications:not(.app-layout-visual-refresh--high-contrast) {
    background-color: var(--color-background-layout-main-5ilwcb, #ffffff);
  }
  .app-layout-visual-refresh--notifications.app-layout-visual-refresh--has-notification-content {
    padding-block-start: var(--space-xs-ymlm0b, 8px);
  }
}

.app-layout-visual-refresh--trigger-button-styles {
  background: var(--color-background-layout-toggle-default-2hgjdu, #424650);
  border-start-start-radius: 50%;
  border-start-end-radius: 50%;
  border-end-start-radius: 50%;
  border-end-end-radius: 50%;
  block-size: var(--space-layout-toggle-diameter-j2qffw, 36px);
  inline-size: var(--space-layout-toggle-diameter-j2qffw, 36px);
}
.app-layout-visual-refresh--trigger-button-styles:hover {
  background: var(--color-background-layout-toggle-hover-0cpm7g, #656871);
}
.app-layout-visual-refresh--trigger-button-styles:active {
  background: var(--color-background-layout-toggle-active-ap91vm, #424650);
}

.app-layout-visual-refresh--trigger-badge-wrapper {
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: path("M34.2193 10.1845C33.3961 10.579 32.4739 10.8 31.5 10.8C28.0206 10.8 25.2 7.97939 25.2 4.5C25.2 3.52614 25.421 2.6039 25.8155 1.78066C23.4518 0.639587 20.8006 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18C36 15.1994 35.3604 12.5482 34.2193 10.1845Z");

}
.app-layout-visual-refresh--trigger-badge-wrapper:dir(rtl) {
  clip-path: path("M1.78066 10.1845C2.6039 10.579 3.52615 10.8 4.5 10.8C7.97939 10.8 10.8 7.97939 10.8 4.5C10.8 3.52614 10.579 2.6039 10.1845 1.78066C12.5482 0.639587 15.1994 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 15.1994 0.639587 12.5482 1.78066 10.1845Z");
}

/*
Warning! If these design tokens for width change it will adversely impact
the calculation used to determine the Split Panel maximum width in the
handleSplitPanelMaxWidth function in the context.
*/
.app-layout-visual-refresh--trigger {
  border-block: none;
  border-inline: none;
  padding-inline: 0;
  color: var(--color-text-layout-toggle-1a15s3, #ffffff);
  cursor: pointer;
  pointer-events: auto;
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .app-layout-visual-refresh--trigger:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .app-layout-visual-refresh--trigger:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(3px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .app-layout-visual-refresh--trigger:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 3px);
  inset-block-start: calc(-1 * 3px);
  inline-size: calc(100% + 3px + 3px);
  block-size: calc(100% + 3px + 3px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
.app-layout-visual-refresh--trigger:focus {
  outline: none;
}
.app-layout-visual-refresh--trigger.app-layout-visual-refresh--selected {
  background: var(--color-background-layout-toggle-selected-default-izfana, #006ce0);
  color: var(--color-text-layout-toggle-selected-xpximc, #ffffff);
}
.app-layout-visual-refresh--trigger.app-layout-visual-refresh--selected:hover {
  background: var(--color-background-layout-toggle-selected-hover-7953u1, #004a9e);
}
.app-layout-visual-refresh--trigger.app-layout-visual-refresh--selected:active {
  background: var(--color-background-layout-toggle-selected-active-zcl8w3, #006ce0);
}
.app-layout-visual-refresh--trigger.app-layout-visual-refresh--selected > .app-layout-visual-refresh--trigger-badge-wrapper {
  background: var(--color-background-layout-toggle-selected-default-izfana, #006ce0);
  color: var(--color-text-layout-toggle-selected-xpximc, #ffffff);
}
.app-layout-visual-refresh--trigger.app-layout-visual-refresh--selected > .app-layout-visual-refresh--trigger-badge-wrapper:hover {
  background: var(--color-background-layout-toggle-selected-hover-7953u1, #004a9e);
}
.app-layout-visual-refresh--trigger.app-layout-visual-refresh--selected > .app-layout-visual-refresh--trigger-badge-wrapper:active {
  background: var(--color-background-layout-toggle-selected-active-zcl8w3, #006ce0);
}
.app-layout-visual-refresh--trigger.app-layout-visual-refresh--badge, .app-layout-visual-refresh--trigger.app-layout-visual-refresh--badge:hover, .app-layout-visual-refresh--trigger.app-layout-visual-refresh--badge:active {
  background: transparent;
}

.app-layout-visual-refresh--trigger-wrapper {
  position: relative;
  border-start-start-radius: 50%;
  border-start-end-radius: 50%;
  border-end-start-radius: 50%;
  border-end-end-radius: 50%;
}
.app-layout-visual-refresh--trigger-wrapper:not(.app-layout-visual-refresh--remove-high-contrast-header) {
  box-shadow: var(--shadow-panel-toggle-qddz27, 0px 6px 12px 1px rgba(0, 7, 22, 0.12));
}

.app-layout-visual-refresh--dot {
  position: absolute;
  inline-size: 9px;
  block-size: 9px;
  border-start-start-radius: 8px;
  border-start-end-radius: 8px;
  border-end-start-radius: 8px;
  border-end-end-radius: 8px;
  background-color: var(--color-background-badge-icon-jyxnxa, #db0000);
  inset-block-start: 0;
  inset-inline-end: 0;
}
`;
