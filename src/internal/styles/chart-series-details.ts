// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const chartSeriesDetailsStyles = css`
.chart-series-details--dimmed {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  transition: opacity var(--motion-duration-transition-quick-mcm2y0, 90ms) var(--motion-easing-transition-quick-qxak3i, linear);
  transition-delay: var(--motion-duration-transition-quick-mcm2y0, 90ms);
}
@media (prefers-reduced-motion: reduce) {
  .chart-series-details--dimmed {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .chart-series-details--dimmed, .awsui-mode-entering .chart-series-details--dimmed {
  animation: none;
  transition: none;
}

.chart-series-details--marker {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  margin-inline-end: var(--space-xxs-hwfkai, 4px);
  margin-block-start: var(--space-xxs-hwfkai, 4px);
  border-start-start-radius: 2px;
  border-start-end-radius: 2px;
  border-end-start-radius: 2px;
  border-end-end-radius: 2px;
  inline-size: 14px;
  flex-shrink: 0;
  cursor: inherit;
}
.chart-series-details--marker--line {
  margin-block-start: 9px;
  block-size: 4px;
}
.chart-series-details--marker--rectangle {
  block-size: 14px;
  border-start-start-radius: 2px;
  border-start-end-radius: 2px;
  border-end-start-radius: 2px;
  border-end-end-radius: 2px;
}
.chart-series-details--marker--hollow-rectangle {
  block-size: 14px;
  border-start-start-radius: 2px;
  border-start-end-radius: 2px;
  border-end-start-radius: 2px;
  border-end-end-radius: 2px;
}
.chart-series-details--marker--hollow-rectangle::after {
  content: "";
  display: block;
  margin-block: 2px;
  margin-inline: 2px;
  block-size: 10px;
  background-color: var(--color-background-container-content-6u8rvp, #ffffff);
  opacity: 0.5;
}
.chart-series-details--marker--dashed {
  block-size: 4px;
  inline-size: 6px;
  margin-block-start: 9px;
  margin-inline-end: 12px;
}
.chart-series-details--marker--dashed::after {
  content: "";
  display: block;
  inline-size: 6px;
  block-size: 4px;
  margin-inline-start: 8px;
  border-start-start-radius: 2px;
  border-start-end-radius: 2px;
  border-end-start-radius: 2px;
  border-end-end-radius: 2px;
  background-color: inherit;
}

.chart-series-details--root {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.chart-series-details--value {
  text-align: end;
  margin-inline-start: var(--space-xxl-32srm4, 32px);
}
.chart-series-details--value.chart-series-details--expandable {
  font-weight: var(--font-weight-heading-s-lcx0ai, 700);
}

.chart-series-details--list-item,
.chart-series-details--inner-list-item {
  list-style: none;
}

.chart-series-details--inner-list-item,
.chart-series-details--list-item > .chart-series-details--key-value-pair,
.chart-series-details--list-item > .chart-series-details--expandable-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  inline-size: 100%;
}
.chart-series-details--inner-list-item > .chart-series-details--key,
.chart-series-details--list-item > .chart-series-details--key-value-pair > .chart-series-details--key,
.chart-series-details--list-item > .chart-series-details--expandable-section > .chart-series-details--key {
  min-inline-size: 0;
  word-break: break-word;
  display: inline-flex;
  color: var(--color-text-group-label-a2qc05, #424650);
}

.chart-series-details--sub-items:not(.chart-series-details--expandable) {
  padding-inline-start: calc(14px + var(--space-xxs-hwfkai, 4px));
}
.chart-series-details--sub-items.chart-series-details--expandable {
  padding-inline-start: 0;
}
.chart-series-details--sub-items.chart-series-details--expandable > .chart-series-details--inner-list-item > .chart-series-details--value {
  white-space: nowrap;
}

.chart-series-details--list {
  display: flex;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  list-style: none;
  flex-direction: column;
}
.chart-series-details--list > .chart-series-details--list-item > .chart-series-details--key-value-pair > .chart-series-details--key {
  align-items: flex-start;
}
.chart-series-details--list > .chart-series-details--list-item.chart-series-details--dimmed {
  opacity: 0.35;
}

.chart-series-details--list:not(.chart-series-details--compact) > .chart-series-details--list-item:not(:first-child),
.chart-series-details--inner-list-item {
  margin-block-start: var(--space-scaled-xxs-pfm1nx, 4px);
}

.chart-series-details--list-item.chart-series-details--with-sub-items:not(.chart-series-details--expandable) > .chart-series-details--key-value-pair > .chart-series-details--key,
.chart-series-details--list-item.chart-series-details--with-sub-items:not(.chart-series-details--expandable) > .chart-series-details--key-value-pair > .chart-series-details--value {
  font-weight: var(--font-weight-heading-s-lcx0ai, 700);
}

.chart-series-details--full-width {
  inline-size: 100%;
}
`;
