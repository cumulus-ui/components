// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const chartLegendStyles = css`
.chart-legend--marker {
  transition: opacity var(--motion-duration-transition-quick-mcm2y0, 90ms) var(--motion-easing-transition-quick-qxak3i, linear);
}
@media (prefers-reduced-motion: reduce) {
  .chart-legend--marker {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .chart-legend--marker, .awsui-mode-entering .chart-legend--marker {
  animation: none;
  transition: none;
}

.chart-legend--root {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
.chart-legend--root:focus {
  outline: none;
}

.chart-legend--title {
  /* used in test utils */
}

.chart-legend--list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  gap: var(--space-scaled-xxs-pfm1nx, 4px) var(--space-m-dsumyt, 16px);
}

.chart-legend--marker {
  display: inline-flex;
  align-items: flex-start;
  padding-block: 0;
  padding-inline: 0;
  border-block: 0;
  border-inline: 0;
  background-color: transparent;
  cursor: pointer;
  opacity: 1;
}
.chart-legend--marker:focus {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .chart-legend--marker:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .chart-legend--marker:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(2px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .chart-legend--marker:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 2px);
  inset-block-start: calc(-1 * 2px);
  inline-size: calc(100% + 2px + 2px);
  block-size: calc(100% + 2px + 2px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
.chart-legend--marker.chart-legend--marker--dimmed {
  opacity: 0.35;
}
.chart-legend--marker.chart-legend--marker--highlighted {
  /* used in test utils */
}
`;
