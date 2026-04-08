// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const chartSeriesMarkerStyles = css`
.chart-series-marker--marker {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  margin-inline-end: var(--space-xxs, 4px);
  margin-block-start: var(--space-xxs, 4px);
  border-start-start-radius: 2px;
  border-start-end-radius: 2px;
  border-end-start-radius: 2px;
  border-end-end-radius: 2px;
  inline-size: 14px;
  flex-shrink: 0;
  cursor: inherit;
}
.chart-series-marker--marker--line {
  margin-block-start: 9px;
  block-size: 4px;
}
.chart-series-marker--marker--rectangle {
  block-size: 14px;
  border-start-start-radius: 2px;
  border-start-end-radius: 2px;
  border-end-start-radius: 2px;
  border-end-end-radius: 2px;
}
.chart-series-marker--marker--hollow-rectangle {
  block-size: 14px;
  border-start-start-radius: 2px;
  border-start-end-radius: 2px;
  border-end-start-radius: 2px;
  border-end-end-radius: 2px;
}
.chart-series-marker--marker--hollow-rectangle::after {
  content: "";
  display: block;
  margin-block: 2px;
  margin-inline: 2px;
  block-size: 10px;
  background-color: var(--color-background-container-content, #ffffff);
  opacity: 0.5;
}
.chart-series-marker--marker--dashed {
  block-size: 4px;
  inline-size: 6px;
  margin-block-start: 9px;
  margin-inline-end: 12px;
}
.chart-series-marker--marker--dashed::after {
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
`;
