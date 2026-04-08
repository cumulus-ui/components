// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.segment {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  word-wrap: break-word;
  max-inline-size: 100%;
  overflow: hidden;
  font-weight: var(--font-weight-button, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  letter-spacing: 0.25px;
  padding-block: var(--space-scaled-xxs, 4px);
  padding-inline: calc(var(--space-button-horizontal, 20px) - var(--space-static-xxs, 4px));
  background: var(--awsui-style-background-default, var(--color-background-segment-default, #ffffff));
  color: var(--awsui-style-color-default, var(--color-text-segment-default, #424650));
  overflow: visible;
  border-start-start-radius: calc(var(--border-radius-button, 20px) - 3px);
  border-start-end-radius: calc(var(--border-radius-button, 20px) - 3px);
  border-end-start-radius: calc(var(--border-radius-button, 20px) - 3px);
  border-end-end-radius: calc(var(--border-radius-button, 20px) - 3px);
  position: relative;
  block-size: calc(100% - var(--space-static-xxs, 4px));
  display: flex;
  align-items: center;
  border-inline: none;
  border-block: none;
  --awsui-style-focus-ring-box-shadow: 0 0 0 var(--awsui-style-focus-ring-border-width, 2px) var(--awsui-style-focus-ring-border-color, var(--color-border-item-focused, #006ce0));
}
.segment:not(.refresh) {
  block-size: calc(100% - var(--space-static-xxs, 4px) - 2 * var(--border-width-field, 1px));
}
.segment:focus {
  outline: none;
}
.segment.disabled {
  background: var(--awsui-style-background-disabled, var(--color-background-segment-disabled, #ffffff));
  color: var(--awsui-style-color-disabled, var(--color-text-interactive-disabled, #b4b4bb));
}
:host-context([data-awsui-focus-visible=true]) .segment:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .segment:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-segmented-control-focus-outline-gutter, 6px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .segment:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-segmented-control-focus-outline-gutter, 6px));
  inset-block-start: calc(-1 * var(--space-segmented-control-focus-outline-gutter, 6px));
  inline-size: calc(100% + var(--space-segmented-control-focus-outline-gutter, 6px) + var(--space-segmented-control-focus-outline-gutter, 6px));
  block-size: calc(100% + var(--space-segmented-control-focus-outline-gutter, 6px) + var(--space-segmented-control-focus-outline-gutter, 6px));
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow);
  z-index: 1;
}
.segment:not(:last-child)::after {
  content: "";
  position: absolute;
  inset-inline-end: calc(-1 * (var(--space-static-xxs, 4px) + 1px));
  block-size: calc(100% - (var(--space-static-xxs, 4px) + var(--space-static-xxxs, 2px)) * 2);
  min-block-size: calc(var(--line-height-body-m, 20px) - var(--space-static-xxs, 4px) * 2);
  inline-size: 1px;
  background: var(--color-border-input-default, #8c8c94);
  z-index: 1;
}
.segment:not(.refresh):not(:last-child)::after {
  inset-inline-end: calc(-1 * var(--space-static-xxs, 4px));
}
.segment:nth-child(1) {
  grid-column: 1;
}
.segment:nth-child(2) {
  grid-column: 2;
}
.segment:nth-child(3) {
  grid-column: 3;
}
.segment:nth-child(4) {
  grid-column: 4;
}
.segment:nth-child(5) {
  grid-column: 5;
}
.segment:nth-child(6) {
  grid-column: 6;
}
.segment.selected {
  background: var(--awsui-style-background-active, var(--color-background-segment-active, #006ce0));
  color: var(--awsui-style-color-active, var(--color-text-segment-active, #ffffff));
}
.segment:hover:not(.selected):not(.disabled):not(:focus) {
  background: var(--awsui-style-background-hover, var(--color-background-segment-hover, #f0fbff));
  color: var(--awsui-style-color-hover, var(--color-text-segment-hover, #002b66));
  cursor: pointer;
}

.with-text {
  position: relative;
  inset-inline-start: calc(-1 * var(--space-xxs, 4px));
  margin-inline-end: var(--space-xxs, 4px);
}

.with-no-text {
  margin-inline: auto;
  inset-inline: 0;
}

.root {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.segment-part {
  display: inline-grid;
  border-inline: solid var(--border-width-field, 1px) var(--color-border-input-default, #8c8c94);
  border-block: solid var(--border-width-field, 1px) var(--color-border-input-default, #8c8c94);
  border-start-start-radius: var(--border-radius-button, 20px);
  border-start-end-radius: var(--border-radius-button, 20px);
  border-end-start-radius: var(--border-radius-button, 20px);
  border-end-end-radius: var(--border-radius-button, 20px);
  background-color: var(--color-background-segment-wrapper, #ffffff);
  align-items: center;
  min-block-size: calc(var(--line-height-body-m, 20px) + var(--space-static-xxs, 4px));
  padding-block: calc(var(--space-static-xxs, 4px) / 2 - var(--border-width-field, 1px));
  padding-inline: calc(var(--space-static-xxs, 4px) - var(--border-width-field, 1px));
  gap: calc(var(--space-static-xxs, 4px) * 2 + 1px);
}
.segment-part:not(.refresh) {
  padding-inline: calc(var(--space-static-xxxs, 2px) + var(--border-width-field, 1px));
  padding-block: 0;
  gap: calc(var(--space-static-xxs, 4px) * 2 - 1px);
}
@media (max-width: 688px) {
  .segment-part {
    display: none;
  }
}

.select {
  display: none;
}
@media (max-width: 688px) {
  .select {
    display: block;
  }
}

.segment-count-2 {
  grid-template-columns: repeat(2, auto);
}

.segment-count-3 {
  grid-template-columns: repeat(3, auto);
}

.segment-count-4 {
  grid-template-columns: repeat(4, auto);
}

.segment-count-5 {
  grid-template-columns: repeat(5, auto);
}

.segment-count-6 {
  grid-template-columns: repeat(6, auto);
}

.disabled-reason-tooltip {
  /* used in test-utils or tests */
}
`;

export { componentStyles as segmentedControlStyles };
export { sharedStyles };
