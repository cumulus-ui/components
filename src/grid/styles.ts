// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.grid {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: flex;
  flex-wrap: wrap;
  margin-block: calc(var(--space-grid-gutter-whc3jp, 20px) / -2);
  margin-inline: calc(var(--space-grid-gutter-whc3jp, 20px) / -2);
  pointer-events: none;
}
.grid.no-gutters {
  margin-block: 0;
  margin-inline: 0;
}

.grid-column {
  box-sizing: border-box;
  position: relative;
  padding-block: calc(var(--space-grid-gutter-whc3jp, 20px) / 2);
  padding-inline: calc(var(--space-grid-gutter-whc3jp, 20px) / 2);
  display: flex;
}
.grid.no-gutters > .grid-column {
  padding-block: 0;
  padding-inline: 0;
}
.grid-column.colspan-1 {
  flex: 0 0 8.3333333333%;
  max-inline-size: 8.3333333333%;
}
.grid-column.push-1 {
  inset-inline-start: 8.3333333333%;
}
.grid-column.pull-1 {
  inset-inline-end: 8.3333333333%;
}
.grid-column.colspan-2 {
  flex: 0 0 16.6666666667%;
  max-inline-size: 16.6666666667%;
}
.grid-column.push-2 {
  inset-inline-start: 16.6666666667%;
}
.grid-column.pull-2 {
  inset-inline-end: 16.6666666667%;
}
.grid-column.colspan-3 {
  flex: 0 0 25%;
  max-inline-size: 25%;
}
.grid-column.push-3 {
  inset-inline-start: 25%;
}
.grid-column.pull-3 {
  inset-inline-end: 25%;
}
.grid-column.colspan-4 {
  flex: 0 0 33.3333333333%;
  max-inline-size: 33.3333333333%;
}
.grid-column.push-4 {
  inset-inline-start: 33.3333333333%;
}
.grid-column.pull-4 {
  inset-inline-end: 33.3333333333%;
}
.grid-column.colspan-5 {
  flex: 0 0 41.6666666667%;
  max-inline-size: 41.6666666667%;
}
.grid-column.push-5 {
  inset-inline-start: 41.6666666667%;
}
.grid-column.pull-5 {
  inset-inline-end: 41.6666666667%;
}
.grid-column.colspan-6 {
  flex: 0 0 50%;
  max-inline-size: 50%;
}
.grid-column.push-6 {
  inset-inline-start: 50%;
}
.grid-column.pull-6 {
  inset-inline-end: 50%;
}
.grid-column.colspan-7 {
  flex: 0 0 58.3333333333%;
  max-inline-size: 58.3333333333%;
}
.grid-column.push-7 {
  inset-inline-start: 58.3333333333%;
}
.grid-column.pull-7 {
  inset-inline-end: 58.3333333333%;
}
.grid-column.colspan-8 {
  flex: 0 0 66.6666666667%;
  max-inline-size: 66.6666666667%;
}
.grid-column.push-8 {
  inset-inline-start: 66.6666666667%;
}
.grid-column.pull-8 {
  inset-inline-end: 66.6666666667%;
}
.grid-column.colspan-9 {
  flex: 0 0 75%;
  max-inline-size: 75%;
}
.grid-column.push-9 {
  inset-inline-start: 75%;
}
.grid-column.pull-9 {
  inset-inline-end: 75%;
}
.grid-column.colspan-10 {
  flex: 0 0 83.3333333333%;
  max-inline-size: 83.3333333333%;
}
.grid-column.push-10 {
  inset-inline-start: 83.3333333333%;
}
.grid-column.pull-10 {
  inset-inline-end: 83.3333333333%;
}
.grid-column.colspan-11 {
  flex: 0 0 91.6666666667%;
  max-inline-size: 91.6666666667%;
}
.grid-column.push-11 {
  inset-inline-start: 91.6666666667%;
}
.grid-column.pull-11 {
  inset-inline-end: 91.6666666667%;
}
.grid-column.colspan-12 {
  flex: 0 0 100%;
  max-inline-size: 100%;
}
.grid-column.push-12 {
  inset-inline-start: 100%;
}
.grid-column.pull-12 {
  inset-inline-end: 100%;
}
.grid-column.push-0 {
  inset-inline-start: auto;
}
.grid-column.pull-0 {
  inset-inline-end: auto;
}
.grid-column.offset-1 {
  margin-inline-start: 8.3333333333%;
}
.grid-column.offset-2 {
  margin-inline-start: 16.6666666667%;
}
.grid-column.offset-3 {
  margin-inline-start: 25%;
}
.grid-column.offset-4 {
  margin-inline-start: 33.3333333333%;
}
.grid-column.offset-5 {
  margin-inline-start: 41.6666666667%;
}
.grid-column.offset-6 {
  margin-inline-start: 50%;
}
.grid-column.offset-7 {
  margin-inline-start: 58.3333333333%;
}
.grid-column.offset-8 {
  margin-inline-start: 66.6666666667%;
}
.grid-column.offset-9 {
  margin-inline-start: 75%;
}
.grid-column.offset-10 {
  margin-inline-start: 83.3333333333%;
}
.grid-column.offset-11 {
  margin-inline-start: 91.6666666667%;
}

.restore-pointer-events {
  pointer-events: auto;
  inline-size: 100%;
}
`;

export { componentStyles as gridStyles };
export { sharedStyles };
