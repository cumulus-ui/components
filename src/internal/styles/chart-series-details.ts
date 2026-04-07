// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const chartSeriesDetailsStyles = css`
.dimmed {
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
  .dimmed {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .dimmed, .awsui-mode-entering .dimmed {
  animation: none;
  transition: none;
}

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

.root {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.value {
  text-align: end;
  margin-inline-start: var(--space-xxl-32srm4, 32px);
}
.value.expandable {
  font-weight: var(--font-weight-heading-s-lcx0ai, 700);
}

.list-item,
.inner-list-item {
  list-style: none;
}

.inner-list-item,
.list-item > .key-value-pair,
.list-item > .expandable-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  inline-size: 100%;
}
.inner-list-item > .key,
.list-item > .key-value-pair > .key,
.list-item > .expandable-section > .key {
  min-inline-size: 0;
  word-break: break-word;
  display: inline-flex;
  color: var(--color-text-group-label-a2qc05, #424650);
}

.sub-items:not(.expandable) {
  padding-inline-start: calc(14px + var(--space-xxs-hwfkai, 4px));
}
.sub-items.expandable {
  padding-inline-start: 0;
}
.sub-items.expandable > .inner-list-item > .value {
  white-space: nowrap;
}

.list {
  display: flex;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  list-style: none;
  flex-direction: column;
}
.list > .list-item > .key-value-pair > .key {
  align-items: flex-start;
}
.list > .list-item.dimmed {
  opacity: 0.35;
}

.list:not(.compact) > .list-item:not(:first-child),
.inner-list-item {
  margin-block-start: var(--space-scaled-xxs-pfm1nx, 4px);
}

.list-item.with-sub-items:not(.expandable) > .key-value-pair > .key,
.list-item.with-sub-items:not(.expandable) > .key-value-pair > .value {
  font-weight: var(--font-weight-heading-s-lcx0ai, 700);
}

.full-width {
  inline-size: 100%;
}
`;
