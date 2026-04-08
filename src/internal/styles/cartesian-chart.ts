// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const cartesianChartStyles = css`
.cartesian-chart--axis,
.cartesian-chart--vertical-marker {
  stroke: var(--color-charts-line-axis-b95ncf, #dedee3);
  stroke-width: 1px;
}

.cartesian-chart--axis--emphasized {
  stroke-width: 2px;
}

.cartesian-chart--axis-label {
  font-weight: bold;
  fill: var(--color-text-body-default-vvtq8u, #0f141a);
}

.cartesian-chart--grid {
  stroke: var(--color-charts-line-grid-kjxf3m, #dedee3);
  stroke-width: 1px;
}

.cartesian-chart--ticks__line {
  stroke: var(--color-charts-line-tick-xmcbvk, #dedee3);
  stroke-width: 1px;
}

.cartesian-chart--ticks__text {
  font-size: var(--font-chart-detail-size-9qr25q, 12px);
  fill: var(--color-text-body-secondary-yna5sb, #424650);
}

.cartesian-chart--ticks--bottom > .cartesian-chart--ticks__text {
  text-anchor: middle;
  dominant-baseline: hanging;
}

.cartesian-chart--labels-inline-start > .cartesian-chart--ticks > .cartesian-chart--ticks__text {
  text-anchor: end;
  dominant-baseline: central;
}

.cartesian-chart--labels-inline-start {
  position: relative;
  margin-inline-end: 12px;
}
.cartesian-chart--labels-inline-start > .cartesian-chart--axis-label {
  position: absolute;
  visibility: visible;
  white-space: nowrap;
}

.cartesian-chart--labels-inline-start__label {
  position: absolute;
}

.cartesian-chart--labels-inline-start--hidden {
  visibility: hidden;
}
.cartesian-chart--labels-inline-start--hidden > .cartesian-chart--labels-inline-start__label {
  position: relative;
  white-space: nowrap;
}

.cartesian-chart--labels-block-end {
  position: relative;
  display: block;
  inline-size: 100%;
  overflow: visible;
}

.cartesian-chart--vertical-marker {
  pointer-events: none;
}

.cartesian-chart--vertical-marker-circle {
  fill: var(--color-background-container-content-6u8rvp, #ffffff);
  pointer-events: none;
  stroke-width: var(--border-line-chart-width-tesor1, 2px);
}

.cartesian-chart--vertical-marker-circle-active {
  cursor: pointer;
  stroke-width: var(--border-line-chart-width-tesor1, 2px);
}

.cartesian-chart--focus-outline {
  outline: none;
  pointer-events: none;
  fill: none;
  stroke: var(--color-border-item-focused-uk47pl, #006ce0);
  stroke-width: 2px;
}

.cartesian-chart--chart-container {
  display: flex;
  inline-size: 100%;
  flex-direction: column;
}
.cartesian-chart--chart-container.cartesian-chart--fit-height {
  block-size: 100%;
  min-block-size: inherit;
}

.cartesian-chart--chart-container-outer {
  display: flex;
}
.cartesian-chart--chart-container-outer.cartesian-chart--fit-height {
  flex: 1;
}
.cartesian-chart--chart-container-outer.cartesian-chart--fit-height:not(.cartesian-chart--axis-label + .cartesian-chart--chart-container-outer.cartesian-chart--fit-height, .cartesian-chart--chart-container-outer.cartesian-chart--fit-height.cartesian-chart--has-filters) {
  margin-block-start: calc(0.5 * var(--font-chart-detail-size-9qr25q, 12px));
}

.cartesian-chart--chart-container-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  inline-size: 100%;
}

.cartesian-chart--chart-container-plot-wrapper.cartesian-chart--fit-height {
  display: block;
  position: relative;
  flex: 1;
}

.cartesian-chart--chart-container-plot.cartesian-chart--fit-height {
  display: block;
  position: absolute;
  inset: 0;
}

.cartesian-chart--chart-container-bottom-labels.cartesian-chart--fit-height {
  display: block;
}
`;
