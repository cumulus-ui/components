// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
div.column-layout {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  word-wrap: break-word;
}
div.column-layout > .grid {
  margin-block: calc(var(--space-grid-gutter-whc3jp, 20px) / -2);
  margin-inline: calc(var(--space-grid-gutter-whc3jp, 20px) / -2);


}
div.column-layout > .grid.grid-no-gutters {
  margin-block: 0;
  margin-inline: 0;
}
div.column-layout > .grid.grid-variant-text-grid {
  margin-block: calc(-1 * var(--space-grid-gutter-whc3jp, 20px) / 2);
  margin-inline: calc(-1 * var(--space-grid-gutter-whc3jp, 20px));

}
div.column-layout > .grid.grid-variant-text-grid > * {
  border-inline-start: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-divider-default-nr68jt, #c6c6cd);
}
div.column-layout > .grid.grid-variant-text-grid.grid-breakpoint-default > *:nth-child(1n+1) {
  border-inline-start-width: 0;
}
div.column-layout > .grid.grid-variant-text-grid.grid-columns-1.grid-breakpoint-xxs > *:nth-child(1n+1) {
  border-inline-start-width: 0;
}
div.column-layout > .grid.grid-variant-text-grid.grid-columns-1.grid-breakpoint-xs > *:nth-child(1n+1) {
  border-inline-start-width: 0;
}
div.column-layout > .grid.grid-variant-text-grid.grid-columns-2.grid-breakpoint-xxs > *:nth-child(2n+1) {
  border-inline-start-width: 0;
}
div.column-layout > .grid.grid-variant-text-grid.grid-columns-2.grid-breakpoint-xs > *:nth-child(2n+1) {
  border-inline-start-width: 0;
}
div.column-layout > .grid.grid-variant-text-grid.grid-columns-3.grid-breakpoint-xxs > *:nth-child(2n+1) {
  border-inline-start-width: 0;
}
div.column-layout > .grid.grid-variant-text-grid.grid-columns-3.grid-breakpoint-xs > *:nth-child(3n+1) {
  border-inline-start-width: 0;
}
div.column-layout > .grid.grid-variant-text-grid.grid-columns-4.grid-breakpoint-xxs > *:nth-child(2n+1) {
  border-inline-start-width: 0;
}
div.column-layout > .grid.grid-variant-text-grid.grid-columns-4.grid-breakpoint-xs > *:nth-child(4n+1) {
  border-inline-start-width: 0;
}
div.column-layout > .grid:not(.grid-no-gutters) > * {
  padding-block: calc(var(--space-grid-gutter-whc3jp, 20px) / 2);
  padding-inline: calc(var(--space-grid-gutter-whc3jp, 20px) / 2);
}
div.column-layout > .grid:not(.grid-no-gutters).grid-variant-text-grid > * {
  padding-block: 0;
  padding-inline: var(--space-grid-gutter-whc3jp, 20px);
  margin-block: calc(var(--space-grid-gutter-whc3jp, 20px) / 2);
  margin-inline: 0;
}
div.column-layout > .grid.grid-vertical-borders > * {
  border-inline-end: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-divider-default-nr68jt, #c6c6cd);
}
div.column-layout > .grid.grid-vertical-borders.grid-breakpoint-default > *:nth-child(1n) {
  border-inline-end-width: 0;
}
div.column-layout > .grid.grid-vertical-borders.grid-columns-1.grid-breakpoint-xxs > *:nth-child(1n) {
  border-inline-end-width: 0;
}
div.column-layout > .grid.grid-vertical-borders.grid-columns-1.grid-breakpoint-xs > *:nth-child(1n) {
  border-inline-end-width: 0;
}
div.column-layout > .grid.grid-vertical-borders.grid-columns-2.grid-breakpoint-xxs > *:nth-child(2n) {
  border-inline-end-width: 0;
}
div.column-layout > .grid.grid-vertical-borders.grid-columns-2.grid-breakpoint-xs > *:nth-child(2n) {
  border-inline-end-width: 0;
}
div.column-layout > .grid.grid-vertical-borders.grid-columns-3.grid-breakpoint-xxs > *:nth-child(2n) {
  border-inline-end-width: 0;
}
div.column-layout > .grid.grid-vertical-borders.grid-columns-3.grid-breakpoint-xs > *:nth-child(3n) {
  border-inline-end-width: 0;
}
div.column-layout > .grid.grid-vertical-borders.grid-columns-4.grid-breakpoint-xxs > *:nth-child(2n) {
  border-inline-end-width: 0;
}
div.column-layout > .grid.grid-vertical-borders.grid-columns-4.grid-breakpoint-xs > *:nth-child(4n) {
  border-inline-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders > * {
  border-block-end: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-divider-default-nr68jt, #c6c6cd);
}
div.column-layout > .grid.grid-horizontal-borders > *:last-child {
  border-block-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders.grid-columns-2.grid-breakpoint-xxs > *:nth-last-child(2):nth-child(2n+1) {
  border-block-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders.grid-columns-2.grid-breakpoint-xs > *:nth-last-child(2):nth-child(2n+1) {
  border-block-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders.grid-columns-3.grid-breakpoint-xxs > *:nth-last-child(2):nth-child(2n+1) {
  border-block-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders.grid-columns-3.grid-breakpoint-xs > *:nth-last-child(2):nth-child(3n+1) {
  border-block-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders.grid-columns-3.grid-breakpoint-xs > *:nth-last-child(2):nth-child(3n+2) {
  border-block-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders.grid-columns-3.grid-breakpoint-xs > *:nth-last-child(3):nth-child(3n+1) {
  border-block-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders.grid-columns-4.grid-breakpoint-xxs > *:nth-last-child(2):nth-child(2n+1) {
  border-block-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders.grid-columns-4.grid-breakpoint-xs > *:nth-last-child(2):nth-child(4n+1) {
  border-block-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders.grid-columns-4.grid-breakpoint-xs > *:nth-last-child(2):nth-child(4n+2) {
  border-block-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders.grid-columns-4.grid-breakpoint-xs > *:nth-last-child(2):nth-child(4n+3) {
  border-block-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders.grid-columns-4.grid-breakpoint-xs > *:nth-last-child(3):nth-child(4n+1) {
  border-block-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders.grid-columns-4.grid-breakpoint-xs > *:nth-last-child(3):nth-child(4n+2) {
  border-block-end-width: 0;
}
div.column-layout > .grid.grid-horizontal-borders.grid-columns-4.grid-breakpoint-xs > *:nth-last-child(4):nth-child(4n+1) {
  border-block-end-width: 0;
}
`;

export { componentStyles as columnLayoutStyles };
export { sharedStyles };
