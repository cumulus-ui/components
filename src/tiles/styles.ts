// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
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

.root {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  min-inline-size: 0;
  word-break: break-word;
  display: block;
}

.tile-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--color-border-input-default-317xk5, #8c8c94);
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--color-border-input-default-317xk5, #8c8c94);
  border-start-start-radius: var(--border-radius-tiles-wm1vgw, 8px);
  border-start-end-radius: var(--border-radius-tiles-wm1vgw, 8px);
  border-end-start-radius: var(--border-radius-tiles-wm1vgw, 8px);
  border-end-end-radius: var(--border-radius-tiles-wm1vgw, 8px);
  background: var(--color-background-input-default-ifz5bb, #ffffff);
  padding-block: var(--space-xs-ymlm0b, 8px);
  padding-inline: var(--space-scaled-m-m892r9, 16px);
  transition: border-color var(--motion-duration-transition-quick-mcm2y0, 90ms) var(--motion-easing-transition-quick-qxak3i, linear), background-color var(--motion-duration-transition-quick-mcm2y0, 90ms) var(--motion-easing-transition-quick-qxak3i, linear);
}
@media (prefers-reduced-motion: reduce) {
  .tile-container {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .tile-container, .awsui-mode-entering .tile-container {
  animation: none;
  transition: none;
}
.tile-container.refresh {
  padding-block: var(--space-xs-ymlm0b, 8px);
  padding-inline: var(--space-s-tvghoh, 12px);
}
.tile-container.refresh.selected:not(.disabled):not(.readonly) {
  box-shadow: inset 0 0 0 var(--border-width-field-2xc78x, 1px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.tile-container.has-metadata {
  padding-block-end: var(--space-s-tvghoh, 12px);
}
.tile-container.has-metadata.refresh {
  padding-block-end: var(--space-scaled-s-8ozaad, 12px);
}
.tile-container.selected {
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--color-border-item-selected-wl5ttm, #006ce0);
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--color-border-item-selected-wl5ttm, #006ce0);
  background: var(--color-background-item-selected-9gppru, #f0fbff);
}
.tile-container.disabled {
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--color-border-tiles-disabled-19olbu, #ebebf0);
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--color-border-tiles-disabled-19olbu, #ebebf0);
  background: var(--color-background-tiles-disabled-4ynms7, #ebebf0);
}
.tile-container.readonly {
  background-color: var(--color-background-input-default-ifz5bb, #ffffff);
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--color-border-input-disabled-zgnzvk, #ebebf0);
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--color-border-input-disabled-zgnzvk, #ebebf0);
}

.columns {
  display: flex;
  flex-wrap: wrap;
  margin-block: calc(var(--space-tile-gutter-bi2bdv, 24px) / -4);
  margin-inline-start: calc(var(--space-tile-gutter-bi2bdv, 24px) / -4);
  margin-inline-end: calc(var(--space-tile-gutter-bi2bdv, 24px) / -4);
}
.columns.column-1 > .tile-container {
  margin-block: calc(var(--space-tile-gutter-bi2bdv, 24px) / 4);
  margin-inline: calc(var(--space-tile-gutter-bi2bdv, 24px) / 4);
  box-sizing: border-box;
  flex: 0 0 calc(100% - var(--space-tile-gutter-bi2bdv, 24px)/2);
  max-inline-size: calc(100% - var(--space-tile-gutter-bi2bdv, 24px)/2);
}
.columns.column-1 > .tile-container.breakpoint-xs {
  flex: 0 0 calc(100% - var(--space-tile-gutter-bi2bdv, 24px)/2);
  max-inline-size: calc(100% - var(--space-tile-gutter-bi2bdv, 24px)/2);
}
.columns.column-1 > .tile-container.breakpoint-xxs {
  flex: 0 0 calc(100% - var(--space-tile-gutter-bi2bdv, 24px)/2);
  max-inline-size: calc(100% - var(--space-tile-gutter-bi2bdv, 24px)/2);
}
.columns.column-2 > .tile-container {
  margin-block: calc(var(--space-tile-gutter-bi2bdv, 24px) / 4);
  margin-inline: calc(var(--space-tile-gutter-bi2bdv, 24px) / 4);
  box-sizing: border-box;
  flex: 0 0 calc(100% - var(--space-tile-gutter-bi2bdv, 24px)/2);
  max-inline-size: calc(100% - var(--space-tile-gutter-bi2bdv, 24px)/2);
}
.columns.column-2 > .tile-container.breakpoint-xs {
  flex: 0 0 calc(50% - var(--space-tile-gutter-bi2bdv, 24px)/2);
  max-inline-size: calc(50% - var(--space-tile-gutter-bi2bdv, 24px)/2);
}
.columns.column-2 > .tile-container.breakpoint-xxs {
  flex: 0 0 calc(50% - var(--space-tile-gutter-bi2bdv, 24px)/2);
  max-inline-size: calc(50% - var(--space-tile-gutter-bi2bdv, 24px)/2);
}
.columns.column-3 > .tile-container {
  margin-block: calc(var(--space-tile-gutter-bi2bdv, 24px) / 4);
  margin-inline: calc(var(--space-tile-gutter-bi2bdv, 24px) / 4);
  box-sizing: border-box;
  flex: 0 0 calc(100% - var(--space-tile-gutter-bi2bdv, 24px)/2);
  max-inline-size: calc(100% - var(--space-tile-gutter-bi2bdv, 24px)/2);
}
.columns.column-3 > .tile-container.breakpoint-xs {
  flex: 0 0 calc(33.3333333333% - var(--space-tile-gutter-bi2bdv, 24px)/2);
  max-inline-size: calc(33.3333333333% - var(--space-tile-gutter-bi2bdv, 24px)/2);
}
.columns.column-3 > .tile-container.breakpoint-xxs {
  flex: 0 0 calc(50% - var(--space-tile-gutter-bi2bdv, 24px)/2);
  max-inline-size: calc(50% - var(--space-tile-gutter-bi2bdv, 24px)/2);
}
.columns.column-4 > .tile-container {
  margin-block: calc(var(--space-tile-gutter-bi2bdv, 24px) / 4);
  margin-inline: calc(var(--space-tile-gutter-bi2bdv, 24px) / 4);
  box-sizing: border-box;
  flex: 0 0 calc(100% - var(--space-tile-gutter-bi2bdv, 24px)/2);
  max-inline-size: calc(100% - var(--space-tile-gutter-bi2bdv, 24px)/2);
}
.columns.column-4 > .tile-container.breakpoint-xs {
  flex: 0 0 calc(25% - var(--space-tile-gutter-bi2bdv, 24px)/2);
  max-inline-size: calc(25% - var(--space-tile-gutter-bi2bdv, 24px)/2);
}
.columns.column-4 > .tile-container.breakpoint-xxs {
  flex: 0 0 calc(50% - var(--space-tile-gutter-bi2bdv, 24px)/2);
  max-inline-size: calc(50% - var(--space-tile-gutter-bi2bdv, 24px)/2);
}

.control {
  flex-grow: 1;
  margin-block-end: var(--space-s-tvghoh, 12px);
}
.control.no-image {
  margin-block-end: 0;
}

.image {
  text-align: center;
}
.image > img {
  max-inline-size: 100%;
}
.image.disabled > img {
  opacity: 0.3;
}
`;

export { componentStyles as tilesStyles };
export { sharedStyles };
