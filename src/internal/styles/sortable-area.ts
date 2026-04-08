// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const sortableAreaStyles = css`
.sortable-area--drag-overlay {
  box-shadow: var(--shadow-container-active-ypjjoc, 0px 1px 1px 1px #e9ebed, 0px 6px 36px rgba(0, 7, 22, 0.1019607843));
  background-color: var(--color-background-container-content-6u8rvp, #ffffff);
}
.sortable-area--drag-overlay-item {
  border-start-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-start-end-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-end-radius: var(--border-radius-item-iwaia5, 8px);
  position: relative;
}
.sortable-area--drag-overlay-item {
  outline: 2px dotted transparent;
  outline-offset: calc(0px - 1px);
}
.sortable-area--drag-overlay-item::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 0px);
  inset-block-start: calc(-1 * 0px);
  inline-size: calc(100% + 0px + 0px);
  block-size: calc(100% + 0px + 0px);
  border-start-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-start-end-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-end-radius: var(--border-radius-item-iwaia5, 8px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
.sortable-area--drag-overlay-container {
  border-start-start-radius: var(--border-radius-container-nsfwmm, 16px);
  border-start-end-radius: var(--border-radius-container-nsfwmm, 16px);
  border-end-start-radius: var(--border-radius-container-nsfwmm, 16px);
  border-end-end-radius: var(--border-radius-container-nsfwmm, 16px);
  position: relative;
}
.sortable-area--drag-overlay-container {
  outline: 2px dotted transparent;
  outline-offset: calc(0px - 1px);
}
.sortable-area--drag-overlay-container::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 0px);
  inset-block-start: calc(-1 * 0px);
  inline-size: calc(100% + 0px + 0px);
  block-size: calc(100% + 0px + 0px);
  border-start-start-radius: var(--border-radius-container-nsfwmm, 16px);
  border-start-end-radius: var(--border-radius-container-nsfwmm, 16px);
  border-end-start-radius: var(--border-radius-container-nsfwmm, 16px);
  border-end-end-radius: var(--border-radius-container-nsfwmm, 16px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}

.sortable-area--active {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.sortable-area--placeholder {
  position: relative;
}
.sortable-area--placeholder:after {
  content: " ";
  position: absolute;
  inset: 0;
  background: var(--color-drag-placeholder-hover-qwadna, #d1f1ff);
}
.sortable-area--placeholder-item:after {
  border-start-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-start-end-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-end-radius: var(--border-radius-item-iwaia5, 8px);
}
.sortable-area--placeholder-container:after {
  border-start-start-radius: var(--border-radius-container-nsfwmm, 16px);
  border-start-end-radius: var(--border-radius-container-nsfwmm, 16px);
  border-end-start-radius: var(--border-radius-container-nsfwmm, 16px);
  border-end-end-radius: var(--border-radius-container-nsfwmm, 16px);
}

.sortable-area--sorting {
  transition: transform var(--motion-duration-transition-quick-mcm2y0, 90ms) var(--motion-easing-transition-quick-qxak3i, linear);
}
@media (prefers-reduced-motion: reduce) {
  .sortable-area--sorting {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .sortable-area--sorting, .awsui-mode-entering .sortable-area--sorting {
  animation: none;
  transition: none;
}
`;
