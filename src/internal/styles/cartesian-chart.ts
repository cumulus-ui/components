// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const cartesianChartStyles = css`
.axis,
.vertical-marker {
  stroke: var(--color-charts-line-axis-b95ncf, #dedee3);
  stroke-width: 1px;
}

.axis--emphasized {
  stroke-width: 2px;
}

.axis-label {
  font-weight: bold;
  fill: var(--color-text-body-default-vvtq8u, #0f141a);
}

.grid {
  stroke: var(--color-charts-line-grid-kjxf3m, #dedee3);
  stroke-width: 1px;
}

.ticks__line {
  stroke: var(--color-charts-line-tick-xmcbvk, #dedee3);
  stroke-width: 1px;
}

.ticks__text {
  font-size: var(--font-chart-detail-size-9qr25q, 12px);
  fill: var(--color-text-body-secondary-yna5sb, #424650);
}

.ticks--bottom > .ticks__text {
  text-anchor: middle;
  dominant-baseline: hanging;
}

.labels-inline-start > .ticks > .ticks__text {
  text-anchor: end;
  dominant-baseline: central;
}

.labels-inline-start {
  position: relative;
  margin-inline-end: 12px;
}
.labels-inline-start > .axis-label {
  position: absolute;
  visibility: visible;
  white-space: nowrap;
}

.labels-inline-start__label {
  position: absolute;
}

.labels-inline-start--hidden {
  visibility: hidden;
}
.labels-inline-start--hidden > .labels-inline-start__label {
  position: relative;
  white-space: nowrap;
}

.labels-block-end {
  position: relative;
  display: block;
  inline-size: 100%;
  overflow: visible;
}

.vertical-marker {
  pointer-events: none;
}

.vertical-marker-circle {
  fill: var(--color-background-container-content-6u8rvp, #ffffff);
  pointer-events: none;
  stroke-width: var(--border-line-chart-width-tesor1, 2px);
}

.vertical-marker-circle-active {
  cursor: pointer;
  stroke-width: var(--border-line-chart-width-tesor1, 2px);
}

.focus-outline {
  outline: none;
  pointer-events: none;
  fill: none;
  stroke: var(--color-border-item-focused-uk47pl, #006ce0);
  stroke-width: 2px;
}

.chart-container {
  display: flex;
  inline-size: 100%;
  flex-direction: column;
}
.chart-container.fit-height {
  block-size: 100%;
  min-block-size: inherit;
}

.chart-container-outer {
  display: flex;
}
.chart-container-outer.fit-height {
  flex: 1;
}
.chart-container-outer.fit-height:not(.axis-label + .chart-container-outer.fit-height, .chart-container-outer.fit-height.has-filters) {
  margin-block-start: calc(0.5 * var(--font-chart-detail-size-9qr25q, 12px));
}

.chart-container-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  inline-size: 100%;
}

.chart-container-plot-wrapper.fit-height {
  display: block;
  position: relative;
  flex: 1;
}

.chart-container-plot.fit-height {
  display: block;
  position: absolute;
  inset: 0;
}

.chart-container-bottom-labels.fit-height {
  display: block;
}
`;
