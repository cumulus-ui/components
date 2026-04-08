// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.icon {
  position: relative;
  display: inline-block;
  vertical-align: top;



}
.icon-flex-height {
  display: inline-flex;
  align-items: center;
}
.icon > svg {
  pointer-events: none;
}
.icon > svg {
  fill: none;
}
.icon > svg * {
  stroke: currentColor;
}
.icon > svg .stroke-linejoin-round {
  stroke-linejoin: round;
}
.icon > svg .stroke-linecap-square {
  stroke-linecap: square;
}
.icon > svg .stroke-linecap-round {
  stroke-linecap: round;
}
.icon > svg .filled {
  fill: currentColor;
}
.icon > svg .no-stroke {
  stroke: none;
}
.icon.size-small {
  inline-size: var(--size-icon-normal, 16px);
  box-sizing: border-box;
}
.icon.size-small-mapped-height {
  block-size: var(--line-height-body-s, 16px);
  padding-block: calc((var(--line-height-body-s, 16px) - var(--size-icon-normal, 16px)) / 2);
  padding-inline: 0;
}
.icon.size-small > svg,
.icon.size-small > img {
  inline-size: var(--size-icon-normal, 16px);
  block-size: var(--size-icon-normal, 16px);
  vertical-align: top;
}
.icon.size-small > svg,
.icon.size-small > svg * {
  stroke-width: calc(var(--border-width-icon-small, 2px) / 1);
}
.icon.size-normal {
  inline-size: var(--size-icon-normal, 16px);
  box-sizing: border-box;
}
.icon.size-normal-mapped-height {
  block-size: var(--line-height-body-m, 20px);
  padding-block: calc((var(--line-height-body-m, 20px) - var(--size-icon-normal, 16px)) / 2);
  padding-inline: 0;
}
.icon.size-normal > svg,
.icon.size-normal > img {
  inline-size: var(--size-icon-normal, 16px);
  block-size: var(--size-icon-normal, 16px);
  vertical-align: top;
}
.icon.size-normal > svg,
.icon.size-normal > svg * {
  stroke-width: calc(var(--border-width-icon-normal, 2px) / 1);
}
.icon.size-medium {
  inline-size: var(--size-icon-medium, 20px);
  box-sizing: border-box;
}
.icon.size-medium-mapped-height {
  block-size: var(--line-height-heading-l, 24px);
  padding-block: calc((var(--line-height-heading-l, 24px) - var(--size-icon-medium, 20px)) / 2);
  padding-inline: 0;
}
.icon.size-medium > svg,
.icon.size-medium > img {
  inline-size: var(--size-icon-medium, 20px);
  block-size: var(--size-icon-medium, 20px);
  vertical-align: top;
}
.icon.size-medium > svg,
.icon.size-medium > svg * {
  stroke-width: calc(var(--border-width-icon-medium, 2px) / 1.25);
}
.icon.size-big {
  inline-size: var(--size-icon-big, 32px);
  box-sizing: border-box;
}
.icon.size-big-mapped-height {
  block-size: var(--line-height-heading-xl, 30px);
  padding-block: calc((var(--line-height-heading-xl, 30px) - var(--size-icon-big, 32px)) / 2);
  padding-inline: 0;
}
.icon.size-big > svg,
.icon.size-big > img {
  inline-size: var(--size-icon-big, 32px);
  block-size: var(--size-icon-big, 32px);
  vertical-align: top;
}
.icon.size-big > svg,
.icon.size-big > svg * {
  stroke-width: calc(var(--border-width-icon-big, 3px) / 2);
}
.icon.size-large {
  inline-size: var(--size-icon-large, 48px);
  box-sizing: border-box;
}
.icon.size-large-mapped-height {
  block-size: var(--line-height-display-l, 48px);
  padding-block: calc((var(--line-height-display-l, 48px) - var(--size-icon-large, 48px)) / 2);
  padding-inline: 0;
}
.icon.size-large > svg,
.icon.size-large > img {
  inline-size: var(--size-icon-large, 48px);
  block-size: var(--size-icon-large, 48px);
  vertical-align: top;
}
.icon.size-large > svg,
.icon.size-large > svg * {
  stroke-width: calc(var(--border-width-icon-large, 4px) / 3);
}
.icon.variant-normal {
  color: currentColor;
}
.icon.variant-disabled {
  color: var(--color-text-interactive-disabled, #b4b4bb);
}
.icon.variant-inverted {
  color: var(--color-text-inverted, #ffffff);
}
.icon.variant-subtle {
  color: var(--color-text-icon-subtle, #656871);
}
.icon.variant-warning {
  color: var(--color-text-status-warning, #855900);
}
.icon.variant-error {
  color: var(--color-text-status-error, #db0000);
}
.icon.variant-success {
  color: var(--color-text-status-success, #00802f);
}
.icon.variant-link {
  color: var(--color-text-link-default, #006ce0);
}
.icon:is(.name-angle-left-double,
.name-angle-left,
.name-angle-right-double,
.name-angle-right,
.name-arrow-left,
.name-arrow-right,
.name-caret-left-filled,
.name-caret-right-filled,
.name-audio-full,
.name-audio-half,
.name-audio-off,
.name-external,
.name-redo,
.name-resize-area,
.name-send,
.name-shrink,
.name-undo,
.name-view-vertical):dir(rtl) {
  transform: scaleX(-1);
}

.badge::after {
  content: "";
  position: absolute;
  inline-size: 6px;
  block-size: 6px;
  border-start-start-radius: 4px;
  border-start-end-radius: 4px;
  border-end-start-radius: 4px;
  border-end-end-radius: 4px;
  background-color: var(--color-background-badge-icon, #db0000);
  inset-block-start: 0px;
  inset-inline-end: -3px;
}
`;

export { componentStyles as iconStyles };
export { sharedStyles };
