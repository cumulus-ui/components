// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const appLayoutVisualRefreshToolbarSkeletonStyles = css`
.app-layout-visual-refresh-toolbar-skeleton--root {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  color: var(--color-text-body-default, #0f141a);
  background-color: var(--color-background-layout-main, #ffffff);
  --awsui-max-content-width: 100%;
  display: grid;
  grid-template-areas: "toolbar    toolbar     toolbar" ".       notifications  ." ".           main       .";
  grid-template-columns: var(--space-layout-content-horizontal, 24px) minmax(0, 1fr) var(--space-layout-content-horizontal, 24px);
  grid-template-rows: min-content min-content 1fr;
}
@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-skeleton--root {
    grid-template-areas: "ai-drawer toolbar    toolbar      toolbar       toolbar   toolbar         toolbar  toolbar" "ai-drawer navigation .         notifications    .         sideSplitPanel  tools    global-tools" "ai-drawer navigation .             main         .         sideSplitPanel  tools    global-tools" "ai-drawer bottom-tool bottom-tool bottom-tool  bottom-tool  bottom-tool bottom-tool global-tools";
    grid-template-columns: min-content min-content minmax(var(--space-layout-content-horizontal, 24px), 1fr) minmax(0, var(--awsui-max-content-width)) minmax(var(--space-layout-content-horizontal, 24px), 1fr) min-content min-content;
    grid-template-rows: min-content min-content 1fr min-content min-content;
  }
  .app-layout-visual-refresh-toolbar-skeleton--root.app-layout-visual-refresh-toolbar-skeleton--has-adaptive-widths-default {
    --awsui-max-content-width: 1620px;
  }
}
@media (min-width: 689px) and (min-width: 1401px) {
  .app-layout-visual-refresh-toolbar-skeleton--root.app-layout-visual-refresh-toolbar-skeleton--has-adaptive-widths-dashboard {
    --awsui-max-content-width: 1280px;
  }
}
@media (min-width: 689px) and (min-width: 1921px) {
  .app-layout-visual-refresh-toolbar-skeleton--root.app-layout-visual-refresh-toolbar-skeleton--has-adaptive-widths-dashboard {
    --awsui-max-content-width: 1620px;
  }
}
@media (min-width: 689px) and (min-width: 2541px) {
  .app-layout-visual-refresh-toolbar-skeleton--root.app-layout-visual-refresh-toolbar-skeleton--has-adaptive-widths-dashboard {
    --awsui-max-content-width: 2160px;
  }
}
@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-skeleton--root.app-layout-visual-refresh-toolbar-skeleton--drawer-expanded-mode {
    grid-template-columns: 0 0 0 0 0 0 0 auto;
  }
  .app-layout-visual-refresh-toolbar-skeleton--root.app-layout-visual-refresh-toolbar-skeleton--drawer-expanded-mode.app-layout-visual-refresh-toolbar-skeleton--ai-drawer-expanded-mode {
    grid-template-columns: auto 0 0 0 0 0 0 0;
  }
  .app-layout-visual-refresh-toolbar-skeleton--root.app-layout-visual-refresh-toolbar-skeleton--drawer-expanded-mode.app-layout-visual-refresh-toolbar-skeleton--bottom-drawer-expanded-mode {
    grid-template-rows: auto;
    grid-template-columns: 0 0 0 0 0 auto 0 0;
  }
}

.app-layout-visual-refresh-toolbar-skeleton--ai-drawer,
.app-layout-visual-refresh-toolbar-skeleton--navigation,
.app-layout-visual-refresh-toolbar-skeleton--tools,
.app-layout-visual-refresh-toolbar-skeleton--global-tools,
.app-layout-visual-refresh-toolbar-skeleton--bottom-tool {
  grid-row: 1/-1;
  grid-column: 1/-1;
  background: var(--color-background-container-content, #ffffff);
  opacity: 1;
}
@media (max-width: 688px) {
  .app-layout-visual-refresh-toolbar-skeleton--ai-drawer,
  .app-layout-visual-refresh-toolbar-skeleton--navigation,
  .app-layout-visual-refresh-toolbar-skeleton--tools,
  .app-layout-visual-refresh-toolbar-skeleton--global-tools,
  .app-layout-visual-refresh-toolbar-skeleton--bottom-tool {
    inline-size: 100%;
  }
}

@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-skeleton--bottom-tool {
    grid-area: bottom-tool;
    position: sticky;
    inset-block-end: 0;
    overflow: hidden;
    z-index: 840;
  }
}

@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-skeleton--ai-drawer {
    grid-area: ai-drawer;
    position: sticky;
  }
}

.app-layout-visual-refresh-toolbar-skeleton--navigation {
  z-index: 830;
}
@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-skeleton--navigation {
    grid-area: navigation;
    inline-size: var(--awsui-navigation-width);
    border-inline-end: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
  }
}
@media (max-width: 688px) {
  .app-layout-visual-refresh-toolbar-skeleton--navigation {
    z-index: 1001;
  }
}

@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-skeleton--tools {
    grid-area: tools;

  }
  .app-layout-visual-refresh-toolbar-skeleton--tools:not(:has(> [data-testid])) {
    inline-size: var(--awsui-tools-width);
  }
  .app-layout-visual-refresh-toolbar-skeleton--tools:not(:has(> [data-testid])).app-layout-visual-refresh-toolbar-skeleton--tools-open {
    border-inline-start: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
  }
}

@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-skeleton--global-tools {
    display: flex;
    grid-area: global-tools;
    justify-content: flex-end;
  }
}

@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-skeleton--split-panel-side {
    grid-area: sideSplitPanel;
    border-inline-start: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
    opacity: 1;
  }
}

.app-layout-visual-refresh-toolbar-skeleton--split-panel-bottom {
  position: sticky;
  z-index: 840;
  align-self: end;
  grid-area: main;
  grid-column: 1/-1;
}
@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-skeleton--split-panel-bottom {
    grid-column: 3/6;
  }
}

.app-layout-visual-refresh-toolbar-skeleton--panel-hidden {
  border-block: none;
  border-inline: none;
  opacity: 0;
  z-index: 0;
}
.app-layout-visual-refresh-toolbar-skeleton--panel-hidden.app-layout-visual-refresh-toolbar-skeleton--navigation, .app-layout-visual-refresh-toolbar-skeleton--panel-hidden.app-layout-visual-refresh-toolbar-skeleton--tools, .app-layout-visual-refresh-toolbar-skeleton--panel-hidden.app-layout-visual-refresh-toolbar-skeleton--global-tools {
  inline-size: 0px;
}

.app-layout-visual-refresh-toolbar-skeleton--toolbar-container {
  grid-area: toolbar;
  block-size: 42px;
  border-block-end: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
  box-sizing: border-box;
}

.app-layout-visual-refresh-toolbar-skeleton--notifications-container {
  grid-area: notifications;
}

.app-layout-visual-refresh-toolbar-skeleton--notifications-background {
  background: var(--color-background-layout-main, #ffffff);
  grid-area: notifications;
  grid-column: 1/-1;
}
@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-skeleton--notifications-background {
    grid-column: 3/6;
  }
}

.app-layout-visual-refresh-toolbar-skeleton--main-landmark {
  display: contents;
}

.app-layout-visual-refresh-toolbar-skeleton--main {
  grid-area: main;
  margin-block-start: var(--space-scaled-s, 12px);
  margin-block-end: var(--space-layout-content-bottom, 40px);
}
.app-layout-visual-refresh-toolbar-skeleton--main-disable-paddings {
  margin-block: 0;
  grid-column: 1/-1;
}
@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-skeleton--main-disable-paddings {
    grid-column: 3/6;
  }
}

.app-layout-visual-refresh-toolbar-skeleton--content-header {
  margin-block-end: var(--space-content-header-padding-bottom, 16px);
}

.app-layout-visual-refresh-toolbar-skeleton--content {
  display: contents;
}

@media (max-width: 688px) {
  .app-layout-visual-refresh-toolbar-skeleton--unfocusable-mobile * {
    visibility: hidden;
  }
}

.app-layout-visual-refresh-toolbar-skeleton--hidden {
  display: none;
}

.app-layout-visual-refresh-toolbar-skeleton--breadcrumbs-own:not(:empty) + .app-layout-visual-refresh-toolbar-skeleton--breadcrumbs-discovered {
  display: none;
}
`;
