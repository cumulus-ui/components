// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const appLayoutVisualRefreshToolbarDrawerStyles = css`
.app-layout-visual-refresh-toolbar-drawer--drawer {
  position: sticky;
  z-index: 830;
  background-color: var(--color-background-container-content, #ffffff);
  display: grid;
  grid-template-columns: var(--space-m, 16px) 1fr;
  inline-size: var(--awsui-drawer-size);
  block-size: 100%;
  overflow: hidden;

  overscroll-behavior-y: contain;
  pointer-events: auto;
  word-wrap: break-word;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--with-expanded-motion {
  transition: inline-size var(--motion-duration-refresh-only-slow, 250ms) var(--motion-easing-refresh-only-a, cubic-bezier(0, 0, 0, 1)), block-size var(--motion-duration-refresh-only-slow, 250ms) var(--motion-easing-refresh-only-a, cubic-bezier(0, 0, 0, 1)), min-inline-size var(--motion-duration-refresh-only-slow, 250ms) var(--motion-easing-refresh-only-a, cubic-bezier(0, 0, 0, 1));
}
@media (prefers-reduced-motion: reduce) {
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--with-expanded-motion {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--with-expanded-motion, .awsui-mode-entering .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--with-expanded-motion {
  animation: none;
  transition: none;
}
@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-drawer--drawer:not(.app-layout-visual-refresh-toolbar-drawer--legacy):not(.app-layout-visual-refresh-toolbar-drawer--ai-drawer):not(.app-layout-visual-refresh-toolbar-drawer--bottom-drawer) {
    border-inline-start: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
  }
}
@media (max-width: 688px) {
  .app-layout-visual-refresh-toolbar-drawer--drawer {
    inline-size: 100%;
  }
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--last-opened {
    z-index: 1001;
  }
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--drawer-global {
  display: block;
}
@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--drawer-global {
    inline-size: var(--awsui-drawer-size);
  }
}
@media (max-width: 688px) {
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--drawer-global:not(.app-layout-visual-refresh-toolbar-drawer--last-opened):not(.app-layout-visual-refresh-toolbar-drawer--drawer-expanded) {
    display: none;
  }
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--drawer-hidden {
  display: none;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--drawer-expanded {
  inline-size: 100%;
}
@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--drawer-expanded {
    border-inline-start: none;
  }
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--drawer-expanded.app-layout-visual-refresh-toolbar-drawer--has-next-siblings > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper:after {
    content: "";
    position: absolute;
    block-size: 100%;
    inline-size: 8px;
    inset-inline-end: 0;
    background: var(--color-gap-global-drawer, #ebebf0);
    border-inline-start: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
    box-sizing: border-box;
  }
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--drawer-expanded > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper {
    inline-size: 100%;
    grid-template-columns: 8px 1fr;
  }
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--drawer-expanded > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container {
    grid-column: 2;
  }
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--drawer-expanded > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-gap {
    grid-column: 1;
    grid-row: 1;
    block-size: 100%;
    inline-size: 8px;
    background: var(--color-gap-global-drawer, #ebebf0);
    border-inline-end: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
  }
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container {
  grid-column: 1/span 2;
  grid-row: 1;
  display: grid;
  grid-template-columns: var(--space-m, 16px) 1fr auto var(--space-m, 16px);
  grid-template-rows: 14px auto 1fr;
  overflow-y: auto;
  min-inline-size: var(--awsui-drawer-size);
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-close-button {
  grid-column: 3;
  grid-row: 2;
  z-index: 1;
  align-self: start;
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-expanded-mode-button {
  grid-column: 2;
  grid-row: 2;
  z-index: 1;
  align-self: start;
  display: flex;
  justify-content: flex-end;
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content {
  grid-column: 1/span 4;
  grid-row: 1/span 2;
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content.app-layout-visual-refresh-toolbar-drawer--drawer-content-hidden {
  display: none;
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-slider {
  z-index: 850;
  grid-column: 1;
  grid-row: 1;
  block-size: 100%;
  display: flex;
  align-items: center;
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper {
  display: grid;
  min-inline-size: var(--awsui-drawer-size);
  grid-template-columns: 8px var(--space-m, 16px) 1fr;
  overflow: hidden;
}
@media (max-width: 688px) {
  .app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper {
    grid-template-columns: 1fr;
  }
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-gap {
  grid-column: 1;
  grid-row: 1;
  block-size: 100%;
  inline-size: 8px;
  background: var(--color-gap-global-drawer, #ebebf0);
  border-inline-end: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
  box-sizing: border-box;
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-slider {
  z-index: 850;
  grid-column: 2;
  grid-row: 1;
  display: flex;
  align-items: center;
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container {
  grid-row: 1;
  display: grid;
  grid-template-columns: var(--space-m, 16px) 1fr auto var(--space-m, 16px);
  grid-template-rows: 14px auto 1fr;
  overflow-y: auto;
}
@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container {
    grid-column: 2/span 2;
  }
}
@media (max-width: 688px) {
  .app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container {
    grid-column: 1/span 2;
  }
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-actions {
  position: absolute;
  display: flex;
  inset-block-start: 0;
  inset-inline-end: 0;
  padding-inline-end: var(--space-m, 16px);
  padding-block-start: 14px;
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-close-button {
  grid-column: 3;
  grid-row: 2;
  z-index: 1;
  align-self: start;
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-expanded-mode-button {
  grid-column: 2;
  grid-row: 2;
  z-index: 1;
  align-self: start;
  display: flex;
  justify-content: flex-end;
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content {
  grid-column: 1/span 4;
  grid-row: 1/span 2;
}
.app-layout-visual-refresh-toolbar-drawer--drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content.app-layout-visual-refresh-toolbar-drawer--drawer-content-hidden {
  display: none;
}
@media (max-width: 688px) {
  @media not print {
    .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-drawer--drawer:not(.app-layout-visual-refresh-toolbar-drawer--ai-drawer), .awsui-dark-mode .app-layout-visual-refresh-toolbar-drawer--drawer:not(.app-layout-visual-refresh-toolbar-drawer--ai-drawer) {
      border-block-start: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
    }
  }
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer {
  grid-template-columns: 1fr var(--space-xs, 8px);
  background: #161d26;
}
@media (max-width: 688px) {
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer {
    grid-template-columns: 1fr;
    z-index: 1001;
  }
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-slider {
  z-index: 850;
  display: flex;
  justify-content: center;
  inline-size: var(--space-xs, 8px);
  overflow: hidden;
  grid-column: 2;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer .app-layout-visual-refresh-toolbar-drawer--ai-drawer-slider-handle {
  color: var(--color-text-interactive-inverted-default, #dedee3);
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer .app-layout-visual-refresh-toolbar-drawer--ai-drawer-slider-handle:hover {
  stroke: var(--color-text-interactive-inverted-hover, #f9f9fa);
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container {
  min-inline-size: calc(var(--awsui-drawer-min-size) - var(--space-xs, 8px));
  grid-column: 1/span 1;
  background-color: var(--color-background-layout-panel-content, #ffffff);
}
@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container {
    border-start-end-radius: var(--space-xxs, 4px);
  }
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content {
  grid-row: 1/span 4;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header {
  block-size: 42px;
  position: sticky;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  inset-block-start: 0;
  background-color: var(--color-background-layout-panel-content, #ffffff);
  border-block-end: 2px solid;
  border-image: linear-gradient(90deg, #962eff 0%, #5c7fff 30%, #09f 50%, #b8e7ff 70%, #8575ff 100%) 1;
  box-sizing: border-box;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header-content {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  block-size: 100%;
  padding-inline-start: var(--space-l, 20px);
  padding-inline-end: var(--space-m, 16px);
}
@media not print {
  .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header-content, .awsui-dark-mode .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header-content {
    border-block-start: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
  }
  @media (min-width: 689px) {
    .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header-content:has(+ .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot), .awsui-dark-mode .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header-content:has(+ .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot) {
      border-inline-end: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
      border-start-end-radius: var(--space-xxs, 4px);
    }
  }
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header-content > .app-layout-visual-refresh-toolbar-drawer--drawer-actions {
  display: flex;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  block-size: 100%;
  padding-inline: var(--space-static-m, 16px);
  background-color: #161d26;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot:before, .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot:after {
  content: "";
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: -5px;
  inline-size: 5px;
  block-size: 5px;
  background: #161d26;
}
@media not print {
  .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot:before, .awsui-dark-mode .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot:before, .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot:after, .awsui-dark-mode .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot:after {
    display: none;
  }
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot:after {
  background-color: var(--color-background-layout-panel-content, #ffffff);
  border-start-end-radius: var(--space-xxs, 4px);
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-button-wrapper {
  position: relative;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-button-wrapper:has(:focus-visible) {
  position: relative;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-button-wrapper:has(:focus-visible) {
  outline: 2px dotted transparent;
  outline-offset: calc(3px - 1px);
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-button-wrapper:has(:focus-visible)::before {
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
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-button-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-button {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  min-inline-size: 0;
  word-break: break-word;
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
  border-start-start-radius: var(--space-static-xxs, 4px);
  border-start-end-radius: var(--space-static-xxs, 4px);
  border-end-start-radius: var(--space-static-xxs, 4px);
  border-end-end-radius: var(--space-static-xxs, 4px);
  border-width: 0;
  padding-inline: var(--space-static-xs, 8px);
  padding-block: var(--space-static-xxs, 4px);
  background: radial-gradient(203.69% 159.19% at 95% -11.67%, #ffbb45 0%, #f90 30%, #fa6f00 60%);
  color: #ffffff;
  cursor: pointer;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-button-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-button:focus {
  outline: none;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-slot > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-button-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-back-to-console-custom-button {
  all: initial;
  display: flex;
  cursor: pointer;
  text-align: center;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container > .app-layout-visual-refresh-toolbar-drawer--drawer-content > .app-layout-visual-refresh-toolbar-drawer--drawer-content-content {
  display: flex;
  flex-direction: column;
  block-size: calc(100% - 42px);
}
@media (min-width: 689px) {
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer:not(.app-layout-visual-refresh-toolbar-drawer--drawer-expanded) > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container {
    clip-path: inset(0 0 -9999px 0 round 0 var(--space-xxs, 4px) 0 0);

  }
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer:not(.app-layout-visual-refresh-toolbar-drawer--drawer-expanded) > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container:dir(rtl) {
    clip-path: inset(0 0 -9999px 0 round var(--space-xxs, 4px) 0 0 0);
  }
  @media not print {
    .awsui-polaris-dark-mode .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer:not(.app-layout-visual-refresh-toolbar-drawer--drawer-expanded) > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container, .awsui-dark-mode .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer:not(.app-layout-visual-refresh-toolbar-drawer--drawer-expanded) > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container {
      border-inline-end: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
    }
  }
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer.app-layout-visual-refresh-toolbar-drawer--drawer-expanded {
  grid-template-columns: 1fr;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--ai-drawer.app-layout-visual-refresh-toolbar-drawer--drawer-expanded > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container {
  border-start-end-radius: 0;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--bottom-drawer {
  display: block;
  inline-size: 100%;
  block-size: var(--awsui-bottom-drawer-size);
}
@media (max-width: 688px) {
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--bottom-drawer {
    block-size: 100%;
  }
  .app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--bottom-drawer.app-layout-visual-refresh-toolbar-drawer--last-opened {
    z-index: 1001;
  }
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--bottom-drawer.app-layout-visual-refresh-toolbar-drawer--drawer-hidden {
  display: none;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--bottom-drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper {
  display: block;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--bottom-drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-gap {
  block-size: 8px;
  inline-size: 100%;
  border-block-start: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
  border-block-end: var(--border-divider-section-width, 1px) solid var(--color-border-layout, #c6c6cd);
  box-sizing: content-box;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--bottom-drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-slider {
  block-size: auto;
  justify-content: center;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--bottom-drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--bottom-drawer-content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  inset-block-start: 0;
  box-sizing: border-box;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--bottom-drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--bottom-drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--bottom-drawer-content-header-content {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  block-size: 100%;
  padding-inline-end: var(--space-m, 16px);
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--bottom-drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--bottom-drawer-content-header > .app-layout-visual-refresh-toolbar-drawer--bottom-drawer-content-header-content > .app-layout-visual-refresh-toolbar-drawer--bottom-drawer-actions {
  display: flex;
}
.app-layout-visual-refresh-toolbar-drawer--drawer.app-layout-visual-refresh-toolbar-drawer--bottom-drawer > .app-layout-visual-refresh-toolbar-drawer--global-drawer-wrapper > .app-layout-visual-refresh-toolbar-drawer--drawer-content-container {
  grid-template-columns: 1fr;
  grid-template-rows: auto;
}

.app-layout-visual-refresh-toolbar-drawer--runtime-feature-notifications-drawer-content {
  border-block-start: 1px solid var(--color-border-divider-default, #c6c6cd);
}

.app-layout-visual-refresh-toolbar-drawer--runtime-feature-notifications-footer {
  border-block-start: var(--border-divider-list-width, 1px) solid var(--color-border-divider-secondary, #ebebf0);
}
`;
