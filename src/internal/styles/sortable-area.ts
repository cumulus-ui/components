// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
import { css } from 'lit';

export const sortableAreaStyles = css`
.drag-overlay {
  box-shadow: var(--shadow-container-active-ypjjoc, 0px 1px 1px 1px #e9ebed, 0px 6px 36px rgba(0, 7, 22, 0.1019607843));
  background-color: var(--color-background-container-content-6u8rvp, #ffffff);
}
.drag-overlay-item {
  border-start-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-start-end-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-end-radius: var(--border-radius-item-iwaia5, 8px);
  position: relative;
}
.drag-overlay-item {
  outline: 2px dotted transparent;
  outline-offset: calc(0px - 1px);
}
.drag-overlay-item::before {
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
.drag-overlay-container {
  border-start-start-radius: var(--border-radius-container-nsfwmm, 16px);
  border-start-end-radius: var(--border-radius-container-nsfwmm, 16px);
  border-end-start-radius: var(--border-radius-container-nsfwmm, 16px);
  border-end-end-radius: var(--border-radius-container-nsfwmm, 16px);
  position: relative;
}
.drag-overlay-container {
  outline: 2px dotted transparent;
  outline-offset: calc(0px - 1px);
}
.drag-overlay-container::before {
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

.active {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.placeholder {
  position: relative;
}
.placeholder:after {
  content: " ";
  position: absolute;
  inset: 0;
  background: var(--color-drag-placeholder-hover-qwadna, #d1f1ff);
}
.placeholder-item:after {
  border-start-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-start-end-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-end-radius: var(--border-radius-item-iwaia5, 8px);
}
.placeholder-container:after {
  border-start-start-radius: var(--border-radius-container-nsfwmm, 16px);
  border-start-end-radius: var(--border-radius-container-nsfwmm, 16px);
  border-end-start-radius: var(--border-radius-container-nsfwmm, 16px);
  border-end-end-radius: var(--border-radius-container-nsfwmm, 16px);
}

.sorting {
  transition: transform var(--motion-duration-transition-quick-mcm2y0, 90ms) var(--motion-easing-transition-quick-qxak3i, linear);
}
@media (prefers-reduced-motion: reduce) {
  .sorting {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .sorting, .awsui-mode-entering .sorting {
  animation: none;
  transition: none;
}
`;
