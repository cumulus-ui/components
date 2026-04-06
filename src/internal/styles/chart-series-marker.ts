// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
import { css } from 'lit';

export const chartSeriesMarkerStyles = css`
.marker {
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
.marker--line {
  margin-block-start: 9px;
  block-size: 4px;
}
.marker--rectangle {
  block-size: 14px;
  border-start-start-radius: 2px;
  border-start-end-radius: 2px;
  border-end-start-radius: 2px;
  border-end-end-radius: 2px;
}
.marker--hollow-rectangle {
  block-size: 14px;
  border-start-start-radius: 2px;
  border-start-end-radius: 2px;
  border-end-start-radius: 2px;
  border-end-end-radius: 2px;
}
.marker--hollow-rectangle::after {
  content: "";
  display: block;
  margin-block: 2px;
  margin-inline: 2px;
  block-size: 10px;
  background-color: var(--color-background-container-content-6u8rvp, #ffffff);
  opacity: 0.5;
}
.marker--dashed {
  block-size: 4px;
  inline-size: 6px;
  margin-block-start: 9px;
  margin-inline-end: 12px;
}
.marker--dashed::after {
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
