// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const appLayoutVisualRefreshStyles = css`
div.app-layout-visual-refresh--background {
  display: contents;
}
div.app-layout-visual-refresh--background > .app-layout-visual-refresh--scrolling-background {
  background-color: var(--color-background-layout-main, #ffffff);
  color: var(--color-text-body-default, #0f141a);
  grid-column: 1/span 5;
  grid-row: 1/9;
}

.app-layout-visual-refresh--breadcrumbs {
  background-color: var(--color-background-layout-main, #ffffff);
  grid-area: breadcrumbs;
}

.app-layout-visual-refresh--drawers-container {
  background-color: transparent;
  display: flex;
  grid-column: 5;
  grid-row: 1/span 9;
  block-size: var(--awsui-content-height);
  pointer-events: none;
  position: sticky;
  inset-block-start: var(--awsui-offset-top);
  z-index: 830;
}
.app-layout-visual-refresh--drawers-container.app-layout-visual-refresh--has-open-drawer {
  background-color: var(--color-background-container-content, #ffffff);
}
@media (min-width: 689px) {
  .app-layout-visual-refresh--drawers-container {
    max-inline-size: calc(var(--awsui-layout-width) - var(--awsui-main-offset-left) - var(--awsui-default-min-content-width) - var(--awsui-content-gap-right));
  }
}
@media (max-width: 688px) {
  .app-layout-visual-refresh--drawers-container {
    position: fixed;
    inset-inline-end: 0;
    z-index: 1001;
    /*
    When disableBodyScroll is true the offsetTop will be relative to the
    app layout and not the body. However, the drawer position changes
    to fixed in mobile viewports. The top value needs to include the
    header because fixed position switches the top value so it is now
    relative to the body.
    */
  }
  .app-layout-visual-refresh--drawers-container.app-layout-visual-refresh--disable-body-scroll {
    inset-block-start: var(--awsui-header-height);
  }
}

.app-layout-visual-refresh--drawers-desktop-triggers-container {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  background-color: transparent;
  box-sizing: border-box;
  block-size: 100%;
  overflow-y: hidden;
  overflow-x: hidden;

  overscroll-behavior-y: contain;
}
.app-layout-visual-refresh--drawers-desktop-triggers-container:not(.app-layout-visual-refresh--has-multiple-triggers).app-layout-visual-refresh--has-open-drawer {
  inline-size: 0;
}
.app-layout-visual-refresh--drawers-desktop-triggers-container.app-layout-visual-refresh--has-multiple-triggers.app-layout-visual-refresh--has-open-drawer {
  background-color: var(--color-background-container-content, #ffffff);
}
.app-layout-visual-refresh--drawers-desktop-triggers-container:not(.app-layout-visual-refresh--has-multiple-triggers):not(.app-layout-visual-refresh--has-open-drawer) {
  inline-size: calc(var(--space-layout-toggle-padding, 12px) * 2 + var(--space-layout-toggle-diameter, 36px));
}

.app-layout-visual-refresh--drawers-mobile-triggers-container {
  display: flex;
  justify-content: flex-end;
}

.app-layout-visual-refresh--drawers-trigger-content {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 8px);
  padding-block-start: var(--space-scaled-s, 12px);
  inline-size: calc(var(--space-layout-toggle-padding, 12px) * 2 + var(--space-layout-toggle-diameter, 36px));
}
.app-layout-visual-refresh--drawers-trigger-content:not(.app-layout-visual-refresh--has-multiple-triggers).app-layout-visual-refresh--has-open-drawer {
  opacity: 0;
}
.app-layout-visual-refresh--drawers-trigger-content:not(.app-layout-visual-refresh--has-multiple-triggers):not(.app-layout-visual-refresh--has-open-drawer) {
  opacity: 1;
}
.app-layout-visual-refresh--drawers-trigger-content > .app-layout-visual-refresh--drawers-trigger-overflow {
  padding-block: 0;
  padding-inline: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 688px) {
  .app-layout-visual-refresh--drawers-trigger {
    inline-size: 40px;
    display: flex;
    justify-content: center;
  }
}

.app-layout-visual-refresh--drawer {
  --awsui-drawer-size: 290px;
  background-color: var(--color-background-container-content, #ffffff);
  border-color: transparent;
  display: grid;
  grid-template-columns: var(--space-m, 16px) 1fr;
  flex-shrink: 0;
  block-size: 100%;
  overflow-y: hidden;
  overflow-x: hidden;

  overscroll-behavior-y: contain;
  pointer-events: auto;
  word-wrap: break-word;
}
.app-layout-visual-refresh--drawer > .app-layout-visual-refresh--drawer-content-container {
  grid-column: 1/span 2;
  grid-row: 1;
  inline-size: var(--awsui-drawer-size);
  display: grid;
  grid-template-columns: var(--space-m, 16px) 1fr auto var(--space-m, 16px);
  grid-template-rows: var(--size-vertical-panel-icon-offset, 15px) auto 1fr;
  overflow-y: auto;
}
.app-layout-visual-refresh--drawer > .app-layout-visual-refresh--drawer-content-container > .app-layout-visual-refresh--drawer-close-button {
  grid-column: 3;
  grid-row: 2;
  z-index: 1;
}
.app-layout-visual-refresh--drawer > .app-layout-visual-refresh--drawer-content-container > .app-layout-visual-refresh--drawer-content {
  grid-column: 1/span 4;
  block-size: var(--awsui-content-height);
}
.app-layout-visual-refresh--drawer > .app-layout-visual-refresh--drawer-content-container > .app-layout-visual-refresh--drawer-content.app-layout-visual-refresh--drawer-content-hidden {
  display: none;
}
.app-layout-visual-refresh--drawer > .app-layout-visual-refresh--drawer-slider {
  grid-column: 1;
  grid-row: 1;
  block-size: 100%;
  display: flex;
  align-items: center;
  z-index: 850;
}
.app-layout-visual-refresh--drawer:not(.app-layout-visual-refresh--is-drawer-open) {
  opacity: 0;
  inline-size: 0;
}
.app-layout-visual-refresh--drawer.app-layout-visual-refresh--is-drawer-open {
  border-inline-end: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
  border-inline-start: solid var(--border-divider-section-width, 1px) var(--color-border-divider-default, #c6c6cd);
  opacity: 1;
  inline-size: var(--awsui-drawer-size);
}
@media (min-width: 2541px) {
  .app-layout-visual-refresh--drawer.app-layout-visual-refresh--is-drawer-open {
    --awsui-drawer-size: 320px;
  }
}
@media (max-width: 688px) {
  .app-layout-visual-refresh--drawer.app-layout-visual-refresh--is-drawer-open {
    --awsui-drawer-size: 100vw;
    inline-size: 100vw;
  }
}

header.app-layout-visual-refresh--content {
  grid-area: header;
}

/*
The first and last column definitions have two responsibilities.
If Navigation and/or Tools exist then that will determine the width of
the first and last columns, respectively, and the content in these drawers
will create horizontal space from the center column content. However, if the
navigationHide and/or toolsHide properties have been set then the first
and last column width will default to the minimum content gap properties to
create the necessary visual space around the main content.

The minimum content width property is set to zero and applied under all
circumstances regardless of whether the minContentWidth property is
explicitly set in script.
*/
.app-layout-visual-refresh--layout {
  --awsui-breadcrumbs-gap: 0px;
  --awsui-content-gap-left: 0px;
  --awsui-content-gap-right: 0px;
  --awsui-content-height: calc(100vh - var(--awsui-header-height) - var(--awsui-footer-height));
  --awsui-default-max-content-width: 1280px;
  --awsui-default-min-content-width: 0px;
  --awsui-footer-height: 0px;
  --awsui-header-gap: 0px;
  --awsui-header-height: 0px;
  --awsui-layout-width: 0px;
  --awsui-main-gap: 0px;
  --awsui-main-offset-left: 0px;
  --awsui-main-template-rows: 1fr;
  --awsui-max-content-width: 0px;
  --awsui-min-content-width: 280px;
  --awsui-mobile-bar-height: calc(2 * var(--space-m, 16px) + var(--space-scaled-xs, 8px));
  --awsui-notifications-height: 0px;
  --awsui-offset-top: var(--awsui-header-height);
  --awsui-overlap-height: var(--space-dark-header-overlap-distance, 36px);
  --awsui-toggles-left-width: 0px;
  --awsui-toggles-right-width: 0px;
  background-color: var(--color-background-layout-main, #ffffff);
  color: var(--color-text-body-default, #0f141a);
  display: grid;
  grid-template-areas: ". . mobileToolbar . ." ". . notifications . ." ". . breadcrumbsGap . ." ". . breadcrumbs . ." ". . headerGap . ." ". . header . ." ". . mainGap . ." ". . main . ." ". . main . .";
  grid-template-columns: min-content minmax(var(--awsui-content-gap-left), 1fr) minmax(var(--awsui-default-min-content-width), var(--awsui-default-max-content-width)) minmax(var(--awsui-content-gap-right), 1fr) min-content;
  grid-template-rows: auto auto var(--awsui-breadcrumbs-gap) auto var(--awsui-header-gap) auto var(--awsui-main-gap) var(--awsui-overlap-height) var(--awsui-main-template-rows);
  min-block-size: var(--awsui-content-height);
  position: relative;
  /*
  Add unified max-width for AppLayout content based on breakpoints. Only use the max content
  width custom property for the middle column definition if the maxContentWidth property
  has been explicitly set to a non-zero value and subsequently set the has-max-content-width
  data attribute to true.
  */
  /*
  Only use the max content width custom property for the middle column definition
  if the maxContentWidth property has been explicitly set to a non-zero value and
  subsequently set the has-max-content-width data attribute to true.
  */
  /*
  Warning! This is a hack! We are implementing a short term fix to prevent the
  tools drawer from potentially getting pushed off screen. Currently there is no
  protection against a navigationWidth, minContentWidth, and toolsWidth that are
  in excess ove the available space in the viewport. To accomodate this we remove
  the minContentWidth and set it to zero in small viewports and below until the
  isMobile breakpoint sets the drawers to overlay at 100vw.
  */
  /*
  In desktop viewports the content gap property for the left and right
  columns should override the default of zero if the navigationHide
  or toolsHide property is set. This ensures adequate horizontal space
  for the center column from the edges of the viewport when there is
  not left or right content.

  Warning! If these design tokens change it will adversely impact the
  calculation used to determine the Split Panel maximum width in the
  handleSplitPanelMaxWidth function in the context.
  */
  /*
  In mobile viewports the Navigation and Tools drawers are hidden
  and triggered by the MobileToolbar which then take up the entire viewport.
  The center column needs permanent space from the horizontal viewport
  edges regardless of whether or not there is a Navigation or Tools.
  */
  /*
  Override the desktop gap values set above for the Notifications, Header, and Main
  components for mobile viewports.
  */
}
@media (min-width: 1401px) {
  .app-layout-visual-refresh--layout:not(.app-layout-visual-refresh--has-max-content-width) {
    --awsui-default-max-content-width: 1280px;
  }
}
@media (min-width: 1921px) {
  .app-layout-visual-refresh--layout:not(.app-layout-visual-refresh--has-max-content-width) {
    --awsui-default-max-content-width: 1440px;
  }
}
@media (min-width: 2541px) {
  .app-layout-visual-refresh--layout:not(.app-layout-visual-refresh--has-max-content-width) {
    --awsui-default-max-content-width: 1620px;
  }
}
@media (min-width: 1401px) {
  .app-layout-visual-refresh--layout:not(.app-layout-visual-refresh--has-max-content-width).app-layout-visual-refresh--content-type-dashboard {
    --awsui-default-max-content-width: 1280px;
  }
}
@media (min-width: 1921px) {
  .app-layout-visual-refresh--layout:not(.app-layout-visual-refresh--has-max-content-width).app-layout-visual-refresh--content-type-dashboard {
    --awsui-default-max-content-width: 1620px;
  }
}
@media (min-width: 2541px) {
  .app-layout-visual-refresh--layout:not(.app-layout-visual-refresh--has-max-content-width).app-layout-visual-refresh--content-type-dashboard {
    --awsui-default-max-content-width: 2160px;
  }
}
.app-layout-visual-refresh--layout:not(.app-layout-visual-refresh--has-max-content-width).app-layout-visual-refresh--content-type-table, .app-layout-visual-refresh--layout:not(.app-layout-visual-refresh--has-max-content-width).app-layout-visual-refresh--content-type-cards {
  --awsui-default-max-content-width: 100%;
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--has-max-content-width {
  --awsui-default-max-content-width: var(--awsui-max-content-width);
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--is-overlap-disabled {
  --awsui-overlap-height: 0;
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--is-hide-mobile-toolbar {
  --awsui-mobile-bar-height: 0px;
}
@media (min-width: 993px) {
  .app-layout-visual-refresh--layout {
    --awsui-default-min-content-width: var(--awsui-min-content-width, 280px);
  }
}
@media (max-width: 992px) {
  .app-layout-visual-refresh--layout {
    --awsui-default-min-content-width: 0px;
  }
}
@media (min-width: 689px) {
  .app-layout-visual-refresh--layout.app-layout-visual-refresh--has-content-gap-left {
    --awsui-content-gap-left: var(--space-layout-content-horizontal, 24px);
  }
  .app-layout-visual-refresh--layout.app-layout-visual-refresh--has-content-gap-right {
    --awsui-content-gap-right: var(--space-layout-content-horizontal, 24px);
  }
}
@media (max-width: 688px) {
  .app-layout-visual-refresh--layout {
    --awsui-content-gap-left: var(--space-l, 20px);
    --awsui-content-gap-right: var(--space-l, 20px);
  }
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--has-breadcrumbs {
  --awsui-breadcrumbs-gap: var(--space-scaled-m, 16px);
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--content-first-child-header, .app-layout-visual-refresh--layout.app-layout-visual-refresh--content-first-child-notifications:not(.app-layout-visual-refresh--has-breadcrumbs).app-layout-visual-refresh--has-header {
  --awsui-header-gap: var(--space-scaled-xs, 8px);
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--has-breadcrumbs.app-layout-visual-refresh--has-header {
  --awsui-header-gap: var(--space-scaled-xs, 8px);
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--content-first-child-notifications:not(.app-layout-visual-refresh--has-breadcrumbs):not(.app-layout-visual-refresh--has-header) {
  --awsui-main-gap: var(--space-xs, 8px);
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--has-breadcrumbs:not(.app-layout-visual-refresh--has-header) {
  --awsui-main-gap: var(--space-scaled-xxs, 4px);
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--has-header {
  --awsui-main-gap: var(--space-content-header-padding-bottom, 16px);
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--content-first-child-main:not(.app-layout-visual-refresh--disable-content-paddings) {
  --awsui-main-gap: var(--space-scaled-s, 12px);
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--content-first-child-main.app-layout-visual-refresh--disable-content-paddings {
  --awsui-main-gap: 0px;
}
@media (max-width: 688px) {
  .app-layout-visual-refresh--layout.app-layout-visual-refresh--content-first-child-header {
    --awsui-header-gap: var(--space-scaled-s, 12px);
  }
  .app-layout-visual-refresh--layout.app-layout-visual-refresh--content-first-child-notifications:not(.app-layout-visual-refresh--has-breadcrumbs).app-layout-visual-refresh--has-header {
    --awsui-header-gap: var(--space-scaled-s, 12px);
  }
  .app-layout-visual-refresh--layout.app-layout-visual-refresh--content-first-child-notifications:not(.app-layout-visual-refresh--has-breadcrumbs):not(.app-layout-visual-refresh--has-header), .app-layout-visual-refresh--layout.app-layout-visual-refresh--content-first-child-main:not(.app-layout-visual-refresh--disable-content-paddings) {
    --awsui-main-gap: var(--space-scaled-s, 12px);
  }
  .app-layout-visual-refresh--layout.app-layout-visual-refresh--content-first-child-main.app-layout-visual-refresh--disable-content-paddings {
    --awsui-main-gap: 0px;
  }
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--has-left-toggles-gutter {
  --awsui-toggles-left-width: calc(var(--space-layout-toggle-padding, 12px) + 36px);
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--has-right-toggles-gutter {
  --awsui-toggles-right-width: calc(var(--space-layout-toggle-padding, 12px) + 36px);
}

/*
If disableBodyScroll is true (very uncommon use case) then the AppLayout component
and not the document body will be the scrollable element. This requires a fixed height
instead of a minimum height with a vertical scroll policy. The offset top value for
components with position: sticky (MobileToolbar, Navigation, Notifications, Tools) will be
set zero since the AppLayout is nearest scrollable parent and any existing header does
not matter. The offset top value for AppLayout contentMain children with
position: sticky will be the value of the notifications height in addition to the
notifications top margin and some additional vertical space for aesthetics.
*/
.app-layout-visual-refresh--layout.app-layout-visual-refresh--disable-body-scroll {
  --awsui-main-template-rows: 1fr auto;
  --awsui-offset-top: 0px;
  block-size: var(--awsui-content-height);
  overflow-y: scroll;
}
.app-layout-visual-refresh--layout.app-layout-visual-refresh--disable-body-scroll.app-layout-visual-refresh--has-split-panel.app-layout-visual-refresh--split-panel-position-bottom {
  --awsui-main-template-rows: repeat(2, auto);
}

/*
This CSS class is applied to the document body to prevent overflow scrolling
when the navigation or tools drawers are open in responsive viewports.
*/
.app-layout-visual-refresh--block-body-scroll {
  overflow: hidden;
}

.app-layout-visual-refresh--unfocusable,
.app-layout-visual-refresh--unfocusable * {
  visibility: hidden !important;
}

.app-layout-visual-refresh--container {
  grid-area: main;
  padding-block-end: var(--space-layout-content-bottom, 40px);
  /*
  If the split panel is in the bottom position additional padding will need to be
  added to the content area. This is to ensure that the user is able to scroll
  far enough to see all of the content that would otherwise be obscured by the
  sticky position of the split panel.
  */
  /*
  If disableContentPaddings is enabled then the Main content has a different
  behavior inside the Layout grid. By default it will render across the entire
  grid column span. If the Navigation is open on the left, we increment the
  start column by one. If the Tools or Split Panel (in side position) is open
  on the right, we decrement the column end by one.
  */
}
.app-layout-visual-refresh--container.app-layout-visual-refresh--has-split-panel.app-layout-visual-refresh--split-panel-position-bottom {
  padding-block-end: calc(var(--awsui-split-panel-height) + var(--space-layout-content-bottom, 40px));
}
.app-layout-visual-refresh--container.app-layout-visual-refresh--disable-content-paddings {
  grid-column: 1/6;
  padding-block: 0;
  padding-inline: 0;
}
@media (min-width: 689px) {
  .app-layout-visual-refresh--container.app-layout-visual-refresh--disable-content-paddings.app-layout-visual-refresh--is-navigation-open {
    grid-column-start: 2;
  }
  .app-layout-visual-refresh--container.app-layout-visual-refresh--disable-content-paddings.app-layout-visual-refresh--is-tools-open, .app-layout-visual-refresh--container.app-layout-visual-refresh--disable-content-paddings.app-layout-visual-refresh--is-split-panel-open.app-layout-visual-refresh--split-panel-position-side, .app-layout-visual-refresh--container.app-layout-visual-refresh--disable-content-paddings.app-layout-visual-refresh--has-active-drawer {
    grid-column-end: 5;
  }
}

section.app-layout-visual-refresh--mobile-toolbar {
  align-items: center;
  background-color: var(--color-background-layout-main, #ffffff);
  border-block-end: 1px solid var(--color-border-divider-default, #c6c6cd);
  box-shadow: var(--shadow-sticky, 0px 4px 8px 1px rgba(0, 7, 22, 0.1));
  box-sizing: border-box;
  block-size: var(--awsui-mobile-bar-height);
  display: grid;
  grid-area: mobileToolbar;
  grid-column: 1/span 5;
  grid-template-columns: auto minmax(0, 1fr) auto;
  padding-block: 0;
  padding-inline: var(--space-m, 16px);
  position: sticky;
  inset-block-start: var(--awsui-offset-top);
  z-index: 1000;
}
section.app-layout-visual-refresh--mobile-toolbar:not(.app-layout-visual-refresh--remove-high-contrast-header) {
  background-color: var(--color-background-layout-main, #ffffff);
  box-shadow: var(--shadow-panel-toggle, 0px 6px 12px 1px rgba(0, 7, 22, 0.12));
}
section.app-layout-visual-refresh--mobile-toolbar > .app-layout-visual-refresh--mobile-toolbar-nav {
  grid-column: 1;
  margin-inline-end: var(--space-m, 16px);
}
section.app-layout-visual-refresh--mobile-toolbar > .app-layout-visual-refresh--mobile-toolbar-breadcrumbs {
  grid-column: 2;
  background-color: var(--color-background-layout-main, #ffffff);
}
section.app-layout-visual-refresh--mobile-toolbar > .app-layout-visual-refresh--mobile-toolbar-tools {
  grid-column: 3;
  margin-inline-start: var(--space-m, 16px);
}

.app-layout-visual-refresh--navigation-container {
  display: flex;
  grid-column: 1;
  grid-row: 1/span 9;
  block-size: var(--awsui-content-height);
  position: sticky;
  inset-block-start: var(--awsui-offset-top);
  z-index: 830;
  /*
  The navigation and tools containers (that contain the toggle buttons)
  stretch the full height of the app layout. Normally, this wouldn't be an
  issue because they sit above the app layout's content padding.

  But if disableContentPaddings is set to true and there are buttons on the
  left/right edges of the screen, they will be covered by the containers. So
  we need to disable pointer events in the container and re-enable them in
  the panels and toggle buttons.
  */
  pointer-events: none;
}
@media (max-width: 688px) {
  .app-layout-visual-refresh--navigation-container {
    inset-inline-start: 0;
    position: fixed;
    z-index: 1001;
    /*
    When disableBodyScroll is true the offsetTop will be relative to the
    app layout and not the body. However, the drawer position changes
    to fixed in mobile viewports. The top value needs to include the
    header because fixed position switches the top value so it is now
    relative to the body.
    */
  }
  .app-layout-visual-refresh--navigation-container.app-layout-visual-refresh--disable-body-scroll {
    inset-block-start: var(--awsui-header-height);
  }
}

nav.app-layout-visual-refresh--show-navigation {
  padding-block: var(--space-scaled-s, 12px);
  padding-inline: var(--space-layout-toggle-padding, 12px);
  /*
  Apply the animation only in desktop viewports because the MobileToolbar will
  take control in responsive viewports.
  */
}
@keyframes awsui_showButtons_hyvsj_1u13u_1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
nav.app-layout-visual-refresh--show-navigation.app-layout-visual-refresh--is-navigation-open {
  display: none;
}
@media (min-width: 689px) {
  nav.app-layout-visual-refresh--show-navigation:not(.app-layout-visual-refresh--is-navigation-open) {
    display: block;
  }
  nav.app-layout-visual-refresh--show-navigation:not(.app-layout-visual-refresh--is-navigation-open).app-layout-visual-refresh--animating {
    animation: awsui_showButtons_hyvsj_1u13u_1 var(--motion-duration-refresh-only-fast, 115ms);
  }
}
@media (min-width: 689px) and (prefers-reduced-motion: reduce) {
  nav.app-layout-visual-refresh--show-navigation:not(.app-layout-visual-refresh--is-navigation-open).app-layout-visual-refresh--animating {
    animation: none;
    transition: none;
  }
}
@media (min-width: 689px) {
  .awsui-motion-disabled nav.app-layout-visual-refresh--show-navigation:not(.app-layout-visual-refresh--is-navigation-open).app-layout-visual-refresh--animating, .awsui-mode-entering nav.app-layout-visual-refresh--show-navigation:not(.app-layout-visual-refresh--is-navigation-open).app-layout-visual-refresh--animating {
    animation: none;
    transition: none;
  }
}

nav.app-layout-visual-refresh--navigation {
  background-color: var(--color-background-container-content, #ffffff);
  inset-block-end: 0;
  block-size: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  overscroll-behavior-y: contain;
  position: relative;
  word-wrap: break-word;
  pointer-events: auto;
  border-inline-end: solid var(--border-divider-section-width, 1px) var(--color-border-divider-default, #c6c6cd);
  display: flex;
  flex-direction: column;
  /*
  A non-semantic node is added with a fixed width equal to the final Navigation
  width. This will create the visual appearance of horizontal movement and
  prevent unwanted text wrapping.
  */
}
@keyframes awsui_openNavigation_hyvsj_1u13u_1 {
  from {
    opacity: 0;
    inline-size: calc(var(--space-layout-toggle-padding, 12px) * 2 + var(--space-layout-toggle-diameter, 36px));
  }
  to {
    opacity: 1;
    inline-size: var(--awsui-navigation-width);
  }
}
nav.app-layout-visual-refresh--navigation:not(.app-layout-visual-refresh--is-navigation-open) {
  inline-size: 0;
  display: none;
}
nav.app-layout-visual-refresh--navigation.app-layout-visual-refresh--is-navigation-open.app-layout-visual-refresh--animating {
  animation: awsui_openNavigation_hyvsj_1u13u_1 var(--motion-duration-refresh-only-fast, 115ms);
}
@media (prefers-reduced-motion: reduce) {
  nav.app-layout-visual-refresh--navigation.app-layout-visual-refresh--is-navigation-open.app-layout-visual-refresh--animating {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled nav.app-layout-visual-refresh--navigation.app-layout-visual-refresh--is-navigation-open.app-layout-visual-refresh--animating, .awsui-mode-entering nav.app-layout-visual-refresh--navigation.app-layout-visual-refresh--is-navigation-open.app-layout-visual-refresh--animating {
  animation: none;
  transition: none;
}
nav.app-layout-visual-refresh--navigation > .app-layout-visual-refresh--animated-content {
  inline-size: var(--awsui-navigation-width);
}
nav.app-layout-visual-refresh--navigation > .app-layout-visual-refresh--content-container {
  flex-grow: 1;
}
@media (max-width: 688px) {
  nav.app-layout-visual-refresh--navigation {
    --awsui-navigation-width: 100vw;
  }
}

.app-layout-visual-refresh--hide-navigation {
  position: absolute;
  inset-inline-end: var(--space-m, 16px);
  inset-block-start: var(--size-vertical-panel-icon-offset, 15px);
}

.app-layout-visual-refresh--notifications {
  color: var(--color-text-body-default, #0f141a);
  grid-area: notifications;
  z-index: 850;
}
.app-layout-visual-refresh--notifications.app-layout-visual-refresh--has-notification-content {
  padding-block-start: var(--space-scaled-s, 12px);
}
@media (min-width: 689px) {
  .app-layout-visual-refresh--notifications.app-layout-visual-refresh--sticky-notifications {
    --awsui-flashbar-sticky-bottom-margin: var(--space-xxl, 32px);
    position: sticky;
    inset-block-start: var(--awsui-offset-top);
  }
  .app-layout-visual-refresh--notifications.app-layout-visual-refresh--sticky-notifications:not(.app-layout-visual-refresh--high-contrast) {
    background-color: var(--color-background-layout-main, #ffffff);
  }
  .app-layout-visual-refresh--notifications.app-layout-visual-refresh--has-notification-content {
    padding-block-start: var(--space-xs, 8px);
  }
}

/*
When the Split Panel is in the bottom position it was share the same row
as the content area. This row is defined as 1 fractional unit which will
consume the remaining vertical space in the grid after the notifications
and breadcrumbs.
*/
section.app-layout-visual-refresh--split-panel-bottom {
  /*
  The align self property will position the split panel at the bottom of the grid row.
  This could be off the viewport if the content area has enough content to be scrollable.
  */
  align-self: end;
  inset-block-end: var(--awsui-footer-height);
  display: none;
  grid-column: 1/6;
  grid-row: 9;
  block-size: auto;
  overflow-y: hidden;
  /*
  The position sticky will work in conjunction with the align self: end; property.
  If the grid row scrolls beyond the viewport, the sticky bottom position
  will lift it up above the footer so it is always visible.
  */
  position: sticky;
  z-index: 840;
  /*
  Unlike the side position the Split Panel is persistent in the DOM
  when in the bottom position.
  */
  /*
  Warning! This is a hack! The existing design token for the split panel
  shadow in the bottom position does not render in the refactored code.
  It appears to be related to the fact that the legacy split panel element
  has a height equal to the expanded height and a corresponding translation
  of the Y position so it is moved off the screen. This will need to be
  refactored with an adjustment to the split panel design token.
  */
  /*
  When the data attribute changes indicating the Split Panel has been opened
  apply the animation to the height property.
  */
}
@keyframes awsui_openSplitPanelBottom_hyvsj_1u13u_1 {
  from {
    block-size: var(--awsui-split-panel-reported-header-size, 0);
  }
  to {
    block-size: var(--awsui-split-panel-reported-size);
  }
}
section.app-layout-visual-refresh--split-panel-bottom.app-layout-visual-refresh--disable-body-scroll {
  inset-block-end: 0;
}
section.app-layout-visual-refresh--split-panel-bottom.app-layout-visual-refresh--is-navigation-open.app-layout-visual-refresh--position-bottom {
  grid-column-start: 2;
}
section.app-layout-visual-refresh--split-panel-bottom.app-layout-visual-refresh--has-open-drawer.app-layout-visual-refresh--position-bottom {
  grid-column-end: 5;
}
section.app-layout-visual-refresh--split-panel-bottom.app-layout-visual-refresh--position-bottom {
  display: block;
}
section.app-layout-visual-refresh--split-panel-bottom:not(.app-layout-visual-refresh--is-split-panel-open).app-layout-visual-refresh--position-bottom {
  box-shadow: rgba(0, 7, 22, 0.1) 0px -32px 32px -24px;
}
section.app-layout-visual-refresh--split-panel-bottom.app-layout-visual-refresh--is-split-panel-open.app-layout-visual-refresh--position-bottom {
  box-shadow: var(--shadow-split-bottom, 0px -36px 36px -36px rgba(0, 7, 22, 0.1));
}
section.app-layout-visual-refresh--split-panel-bottom.app-layout-visual-refresh--is-split-panel-open.app-layout-visual-refresh--position-bottom.app-layout-visual-refresh--animating {
  animation: awsui_openSplitPanelBottom_hyvsj_1u13u_1 var(--motion-duration-refresh-only-fast, 115ms);
}
@media (prefers-reduced-motion: reduce) {
  section.app-layout-visual-refresh--split-panel-bottom.app-layout-visual-refresh--is-split-panel-open.app-layout-visual-refresh--position-bottom.app-layout-visual-refresh--animating {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled section.app-layout-visual-refresh--split-panel-bottom.app-layout-visual-refresh--is-split-panel-open.app-layout-visual-refresh--position-bottom.app-layout-visual-refresh--animating, .awsui-mode-entering section.app-layout-visual-refresh--split-panel-bottom.app-layout-visual-refresh--is-split-panel-open.app-layout-visual-refresh--position-bottom.app-layout-visual-refresh--animating {
  animation: none;
  transition: none;
}

section.app-layout-visual-refresh--split-panel-side {
  block-size: 100%;
  overflow-x: hidden;
  pointer-events: auto;
  /*
  The min and max widths are applied when the Split Panel is opened otherwise
  it would not be possible to animate the width and the box shadow would
  be persistent in the DOM when closed.
  */
}
section.app-layout-visual-refresh--split-panel-side:not(.app-layout-visual-refresh--is-split-panel-open), section.app-layout-visual-refresh--split-panel-side.app-layout-visual-refresh--position-bottom {
  inline-size: 0;
}
section.app-layout-visual-refresh--split-panel-side.app-layout-visual-refresh--is-split-panel-open.app-layout-visual-refresh--position-side {
  max-inline-size: var(--awsui-split-panel-max-width, 280px);
  min-inline-size: var(--awsui-split-panel-min-width, 280px);
  border-inline-start: solid var(--border-divider-section-width, 1px) var(--color-border-divider-default, #c6c6cd);
}
section.app-layout-visual-refresh--split-panel-side.app-layout-visual-refresh--is-split-panel-open.app-layout-visual-refresh--position-side:not(.app-layout-visual-refresh--has-open-drawer) {
  border-inline-end: var(--border-divider-section-width, 1px) solid var(--color-border-divider-panel-side, #c6c6cd);
}

/*
The Tools component container has a max width calculation that depends on the
state of the other siblings within the Layout grid definition. The layout width
is set in the resize observer in the Layout component. The main offset left
will calculate the distance from the start of the Layout component. The minimum
content width has a default value that can be set directly with the minContentWidth
property. The content gap right is computed in the Layout styles based on the
viewport size and state of the Tools drawer.
*/
.app-layout-visual-refresh--tools-container {
  --awsui-tools-max-width: calc(var(--awsui-layout-width) - var(--awsui-main-offset-left) - var(--awsui-default-min-content-width) - var(--awsui-content-gap-right));
  display: flex;
  grid-column: 5;
  grid-row: 1/span 9;
  block-size: var(--awsui-content-height);
  max-inline-size: var(--awsui-tools-max-width);
  position: sticky;
  inset-block-start: var(--awsui-offset-top);
  z-index: 830;
  pointer-events: none;
}
@media (max-width: 688px) {
  .app-layout-visual-refresh--tools-container {
    --awsui-tools-max-width: none;
    --awsui-tools-width: auto;
    position: fixed;
    inset-inline-end: 0;
    z-index: 1001;
    /*
    When disableBodyScroll is true the offsetTop will be relative to the
    app layout and not the body. However, the drawer position changes
    to fixed in mobile viewports. The top value needs to include the
    header because fixed position switches the top value so it is now
    relative to the body.
    */
  }
  .app-layout-visual-refresh--tools-container.app-layout-visual-refresh--disable-body-scroll {
    inset-block-start: var(--awsui-header-height);
  }
}

.app-layout-visual-refresh--tools {
  background-color: var(--color-background-container-content, #ffffff);
  flex-shrink: 0;
  block-size: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  overscroll-behavior-y: contain;
  pointer-events: auto;
  position: relative;
  word-wrap: break-word;
  /*
  A non-semantic node is added with a fixed width equal to the final Tools
  width. This will create the visual appearance of horizontal movement and
  prevent unwanted text wrapping.
  */
  /*
  A right border is needed if the Tools is open and the buttons are persistent in
  the DOM. This creates a visual vertical boundary between the Tools and the Buttons
  only when they are both present. This is the circumstance when there is a Split Panel
  in the side position.
  */
}
@keyframes awsui_openTools_hyvsj_1u13u_1 {
  from {
    opacity: var(--awsui-tools-animation-starting-opacity, 0);
    inline-size: calc(var(--space-layout-toggle-padding, 12px) * 2 + var(--space-layout-toggle-diameter, 36px));
  }
  to {
    opacity: 1;
    inline-size: var(--awsui-tools-width);
  }
}
.app-layout-visual-refresh--tools:not(.app-layout-visual-refresh--is-tools-open) {
  inline-size: 0;
  display: none;
}
.app-layout-visual-refresh--tools.app-layout-visual-refresh--is-tools-open {
  border-inline-start: solid var(--border-divider-section-width, 1px) var(--color-border-divider-default, #c6c6cd);
}
.app-layout-visual-refresh--tools.app-layout-visual-refresh--is-tools-open.app-layout-visual-refresh--animating {
  animation: awsui_openTools_hyvsj_1u13u_1 var(--motion-duration-refresh-only-fast, 115ms);
}
@media (prefers-reduced-motion: reduce) {
  .app-layout-visual-refresh--tools.app-layout-visual-refresh--is-tools-open.app-layout-visual-refresh--animating {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .app-layout-visual-refresh--tools.app-layout-visual-refresh--is-tools-open.app-layout-visual-refresh--animating, .awsui-mode-entering .app-layout-visual-refresh--tools.app-layout-visual-refresh--is-tools-open.app-layout-visual-refresh--animating {
  animation: none;
  transition: none;
}
.app-layout-visual-refresh--tools > .app-layout-visual-refresh--animated-content {
  inline-size: var(--awsui-tools-width);
}
@media (min-width: 689px) {
  .app-layout-visual-refresh--tools.app-layout-visual-refresh--is-tools-open.app-layout-visual-refresh--has-tools-form-persistence {
    border-inline-end: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
  }
}
@media (max-width: 688px) {
  .app-layout-visual-refresh--tools {
    --awsui-tools-width: 100vw;
  }
}

.app-layout-visual-refresh--hide-tools {
  position: absolute;
  inset-inline-end: var(--space-m, 16px);
  inset-block-start: var(--size-vertical-panel-icon-offset, 15px);
  z-index: 1;
}

/*
Warning! If these design tokens for padding change it will adversely impact
the calculation used to determine the Split Panel maximum width in the
handleSplitPanelMaxWidth function in the context.
*/
.app-layout-visual-refresh--show-tools {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  box-sizing: border-box;
  padding-block: var(--space-scaled-s, 12px);
  padding-inline: var(--space-layout-toggle-padding, 12px);
  /*
  Apply the animation only in desktop viewports because the MobileToolbar will
  take control in responsive viewports.
  */
}
@keyframes awsui_showButtons_hyvsj_1u13u_1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.app-layout-visual-refresh--show-tools:not(.app-layout-visual-refresh--has-tools-form) {
  display: none;
}
@media (min-width: 689px) {
  .app-layout-visual-refresh--show-tools.app-layout-visual-refresh--has-tools-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs, 8px);
  }
  .app-layout-visual-refresh--show-tools.app-layout-visual-refresh--has-tools-form.app-layout-visual-refresh--animating {
    animation: awsui_showButtons_hyvsj_1u13u_1 var(--motion-duration-refresh-only-fast, 115ms);
  }
}
@media (min-width: 689px) and (prefers-reduced-motion: reduce) {
  .app-layout-visual-refresh--show-tools.app-layout-visual-refresh--has-tools-form.app-layout-visual-refresh--animating {
    animation: none;
    transition: none;
  }
}
@media (min-width: 689px) {
  .awsui-motion-disabled .app-layout-visual-refresh--show-tools.app-layout-visual-refresh--has-tools-form.app-layout-visual-refresh--animating, .awsui-mode-entering .app-layout-visual-refresh--show-tools.app-layout-visual-refresh--has-tools-form.app-layout-visual-refresh--animating {
    animation: none;
    transition: none;
  }
  .app-layout-visual-refresh--show-tools.app-layout-visual-refresh--has-tools-form-persistence {
    background-color: var(--color-background-container-content, #ffffff);
    z-index: 1;
  }
}

.app-layout-visual-refresh--trigger-button-styles {
  background: var(--color-background-layout-toggle-default, #424650);
  border-start-start-radius: 50%;
  border-start-end-radius: 50%;
  border-end-start-radius: 50%;
  border-end-end-radius: 50%;
  block-size: var(--space-layout-toggle-diameter, 36px);
  inline-size: var(--space-layout-toggle-diameter, 36px);
}
.app-layout-visual-refresh--trigger-button-styles:hover {
  background: var(--color-background-layout-toggle-hover, #656871);
}
.app-layout-visual-refresh--trigger-button-styles:active {
  background: var(--color-background-layout-toggle-active, #424650);
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
  color: var(--color-text-layout-toggle, #ffffff);
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
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
.app-layout-visual-refresh--trigger:focus {
  outline: none;
}
.app-layout-visual-refresh--trigger.app-layout-visual-refresh--selected {
  background: var(--color-background-layout-toggle-selected-default, #006ce0);
  color: var(--color-text-layout-toggle-selected, #ffffff);
}
.app-layout-visual-refresh--trigger.app-layout-visual-refresh--selected:hover {
  background: var(--color-background-layout-toggle-selected-hover, #004a9e);
}
.app-layout-visual-refresh--trigger.app-layout-visual-refresh--selected:active {
  background: var(--color-background-layout-toggle-selected-active, #006ce0);
}
.app-layout-visual-refresh--trigger.app-layout-visual-refresh--selected > .app-layout-visual-refresh--trigger-badge-wrapper {
  background: var(--color-background-layout-toggle-selected-default, #006ce0);
  color: var(--color-text-layout-toggle-selected, #ffffff);
}
.app-layout-visual-refresh--trigger.app-layout-visual-refresh--selected > .app-layout-visual-refresh--trigger-badge-wrapper:hover {
  background: var(--color-background-layout-toggle-selected-hover, #004a9e);
}
.app-layout-visual-refresh--trigger.app-layout-visual-refresh--selected > .app-layout-visual-refresh--trigger-badge-wrapper:active {
  background: var(--color-background-layout-toggle-selected-active, #006ce0);
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
  box-shadow: var(--shadow-panel-toggle, 0px 6px 12px 1px rgba(0, 7, 22, 0.12));
}

.app-layout-visual-refresh--dot {
  position: absolute;
  inline-size: 9px;
  block-size: 9px;
  border-start-start-radius: 8px;
  border-start-end-radius: 8px;
  border-end-start-radius: 8px;
  border-end-end-radius: 8px;
  background-color: var(--color-background-badge-icon, #db0000);
  inset-block-start: 0;
  inset-inline-end: 0;
}
`;
