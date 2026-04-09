// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  font-size: var(--font-size-body-s, 12px);
  padding-block: var(--space-s, 12px);
  position: relative;
  max-inline-size: 800px;
  margin-inline: calc(var(--space-m, 16px) / 2);
}

.slider {
  display: flex;
  align-items: center;
}
.slider-track, .slider-range {
  position: absolute;
  border-start-start-radius: 3px;
  border-start-end-radius: 3px;
  border-end-start-radius: 3px;
  border-end-end-radius: 3px;
  margin-block-start: var(--space-xs, 8px);
  margin-inline: calc(var(--space-m, 16px) / -2);
}
.slider-track {
  background-color: var(--awsui-style-slider-track-background-color, var(--color-background-slider-track-default, #8c8c94));
  inline-size: calc(100% + var(--space-m, 16px));
  block-size: 2px;
  cursor: pointer;
}
.slider-track.disabled {
  cursor: default;
  background-color: var(--awsui-style-slider-track-background-color, var(--color-background-control-disabled, #dedee3));
}
.slider-track.readonly:not(.slider-track.disabled) {
  cursor: default;
  background-color: var(--awsui-style-slider-track-background-color, var(--color-background-control-disabled, #dedee3));
}
.slider-range {
  background-color: var(--awsui-style-slider-range-background-default, var(--color-background-slider-range-default, #006ce0));
  block-size: 4px;
  inline-size: calc(var(--awsui-slider-range-inline-size) + var(--space-m, 16px));
}
.slider-range.error {
  background-color: var(--awsui-style-slider-range-background-default, var(--color-background-slider-range-error-default, #db0000));
}
.slider-range.warning {
  background-color: var(--awsui-style-slider-range-background-default, var(--color-background-slider-range-warning-default, #855900));
}
.slider-range.active {
  background-color: var(--awsui-style-slider-range-background-active, var(--color-background-slider-range-active, #004a9e));
}
.slider-range.error-active {
  background-color: var(--awsui-style-slider-range-background-active, var(--color-background-slider-range-error-active, #db0000));
}
.slider-range.warning-active {
  background-color: var(--awsui-style-slider-range-background-active, var(--color-background-slider-range-warning-active, #855900));
}
.slider-range.disabled {
  background-color: var(--awsui-style-slider-range-background-default, var(--color-background-control-disabled, #dedee3));
}
.slider-range.readonly:not(.slider-range.disabled) {
  inline-size: calc(var(--awsui-slider-range-inline-size) + var(--space-s, 12px));
  background-color: var(--awsui-style-slider-range-background-default, var(--color-foreground-control-read-only, #656871));
}

.labels {
  display: grid;
  grid-template-columns: 3fr repeat(calc((var(--awsui-slider-label-count) - 2) / 2 + (var(--awsui-slider-label-count) - 2) / 2 - 1), 2fr) 3fr;
  grid-auto-rows: 100%;
  padding-block-start: var(--space-m, 16px);
}
.labels-noref {
  grid-template-columns: 1fr 1fr;
}
.labels-reference {
  grid-column-start: var(--awsui-slider-reference-column);
  grid-column-end: var(--awsui-slider-next-reference-column);
  grid-row: 1;
  justify-self: center;
  text-align: center;
}
.labels-min {
  grid-column: 1;
  grid-row: 1;
  grid-column-end: var(--awsui-slider-min-end);
  margin-inline-start: calc(var(--space-m, 16px) / -2);
}
.labels-max {
  text-align: end;
  justify-content: flex-end;
  grid-row: 1;
  grid-column-end: calc(var(--awsui-slider-label-count) + 1);
  grid-column-start: var(--awsui-slider-max-start);
  margin-inline-end: calc(var(--space-m, 16px) / -2);
}
.labels-aria-description {
  display: none;
}
@media (max-width: 576px) {
  .labels {
    grid-template-columns: 1fr 1fr;
  }
  .labels-min {
    grid-column: 1;
  }
  .labels-max {
    grid-column: 2;
  }
  .labels > .labels-reference {
    display: none;
  }
}

.ticks {
  display: grid;
  grid-template-columns: repeat(var(--awsui-slider-tick-count), 1fr);
  inline-size: calc(100% - var(--space-m, 16px));
  margin-inline: calc(var(--space-m, 16px) / 2);
}
.ticks-wrapper {
  block-size: 0;
  display: flex;
  margin-inline: calc(var(--space-m, 16px) / -2);
}

.tick {
  grid-row: 1;
  block-size: var(--space-xs, 8px);
  inline-size: var(--space-xxxs, 2px);
  padding-inline: 0;
  padding-block: 0;
  background: var(--awsui-style-slider-track-background-color, var(--color-background-slider-track-default, #8c8c94));
  inset-block-start: -4px;
}
.tick.middle:first-child, .tick.middle:last-child {
  visibility: hidden;
}
.tick.filled {
  background: var(--awsui-style-slider-range-background-default, var(--color-background-slider-range-default, #006ce0));
}
.tick.filled.readonly:not(.disabled) {
  background: var(--awsui-style-slider-track-background-color, var(--color-foreground-control-read-only, #656871));
}
.tick.active {
  background: var(--awsui-style-slider-range-background-active, var(--color-background-slider-range-active, #004a9e));
}
.tick.error {
  background: var(--awsui-style-slider-track-background-color, var(--color-background-slider-range-error-default, #db0000));
}
.tick.warning {
  background: var(--awsui-style-slider-track-background-color, var(--color-background-slider-range-warning-default, #855900));
}
.tick.error-active {
  background-color: var(--awsui-style-slider-range-background-active, var(--color-background-slider-range-error-active, #db0000));
}
.tick.warning-active {
  background-color: var(--awsui-style-slider-range-background-active, var(--color-background-slider-range-warning-active, #855900));
}
.tick.disabled {
  background: var(--awsui-style-slider-track-background-color, var(--color-background-control-disabled, #dedee3));
}
.tick.readonly {
  background: var(--awsui-style-slider-track-background-color, var(--color-background-control-disabled, #dedee3));
}

.tooltip-thumb {
  position: absolute;
  inline-size: var(--space-xxl, 32px);
  block-size: var(--space-xxl, 32px);
  margin-block-start: calc(var(--space-s, 12px) / -1);
  inset-inline-start: var(--awsui-slider-tooltip-position);
}
.tooltip-thumb.readonly {
  inline-size: var(--space-xl, 24px);
  block-size: var(--space-xl, 24px);
  margin-block-start: calc(var(--space-xs, 8px) / -1);
}

.thumb {
  background: transparent;
  appearance: none;
  position: absolute;
  block-size: 0;
  inline-size: calc(100% + var(--space-m, 16px));
  margin-inline-start: calc(var(--space-m, 16px) / -2);
  outline: 0;
  margin-block-start: var(--space-xxs, 4px);
  cursor: pointer;
  touch-action: none;
}
.thumb.disabled {
  cursor: default;
}
.thumb.readonly:not(.thumb.disabled) {
  cursor: default;
}
.thumb.readonly:not(.thumb.disabled):focus::-webkit-slider-thumb, .thumb.readonly:not(.thumb.disabled):active::-webkit-slider-thumb {
  block-size: var(--space-s, 12px);
  inline-size: var(--space-s, 12px);
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--color-foreground-control-read-only, #656871);
  background: var(--color-foreground-control-read-only, #656871);
  border-color: var(--color-background-slider-handle-active, #004a9e);
  border-block-width: 2px;
  border-inline-width: 2px;
}
.thumb.readonly:not(.thumb.disabled):focus::-moz-range-thumb, .thumb.readonly:not(.thumb.disabled):active::-moz-range-thumb {
  block-size: var(--space-s, 12px);
  inline-size: var(--space-s, 12px);
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--color-foreground-control-read-only, #656871);
  background: var(--color-foreground-control-read-only, #656871);
  border-color: var(--color-background-slider-handle-active, #004a9e);
  border-block-width: 2px;
  border-inline-width: 2px;
}
.thumb.min {
  margin-inline-start: calc(-1px + var(--space-m, 16px) / -2);
}
.thumb.max {
  margin-inline-start: calc(1px + var(--space-m, 16px) / -2);
}
.thumb::-webkit-slider-thumb {
  appearance: none;
  appearance: none;
  background: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-default, #006ce0));
  border-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-default, #006ce0));
  border-block-width: 2px;
  border-inline-width: 2px;
  border-start-start-radius: var(--awsui-style-slider-handle-border-radius, 50%);
  border-start-end-radius: var(--awsui-style-slider-handle-border-radius, 50%);
  border-end-start-radius: var(--awsui-style-slider-handle-border-radius, 50%);
  border-end-end-radius: var(--awsui-style-slider-handle-border-radius, 50%);
  box-shadow: none;
  cursor: pointer;
  block-size: var(--space-m, 16px);
  inline-size: var(--space-m, 16px);
  pointer-events: all;
  position: relative;
}
.thumb::-moz-range-thumb {
  appearance: none;
  appearance: none;
  background: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-default, #006ce0));
  border-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-default, #006ce0));
  border-block-width: 2px;
  border-inline-width: 2px;
  border-start-start-radius: var(--awsui-style-slider-handle-border-radius, 50%);
  border-start-end-radius: var(--awsui-style-slider-handle-border-radius, 50%);
  border-end-start-radius: var(--awsui-style-slider-handle-border-radius, 50%);
  border-end-end-radius: var(--awsui-style-slider-handle-border-radius, 50%);
  box-shadow: none;
  cursor: pointer;
  block-size: var(--space-m, 16px);
  inline-size: var(--space-m, 16px);
  pointer-events: all;
  position: relative;
}
.thumb:hover::-webkit-slider-thumb {
  background: var(--awsui-style-slider-handle-background-hover, var(--color-background-slider-handle-default, #006ce0));
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--awsui-style-slider-handle-background-hover, var(--color-background-slider-handle-default, #006ce0));
}
.thumb:hover::-moz-range-thumb {
  background: var(--awsui-style-slider-handle-background-hover, var(--color-background-slider-handle-default, #006ce0));
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--awsui-style-slider-handle-background-hover, var(--color-background-slider-handle-default, #006ce0));
}
.thumb:focus::-webkit-slider-thumb, .thumb:active::-webkit-slider-thumb {
  block-size: 20px;
  inline-size: 20px;
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-active, #004a9e));
  background: var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-active, #004a9e));
  border-color: var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-active, #004a9e));
  border-block-width: 2px;
  border-inline-width: 2px;
}
.thumb:focus::-moz-range-thumb, .thumb:active::-moz-range-thumb {
  block-size: 20px;
  inline-size: 20px;
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-active, #004a9e));
  background: var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-active, #004a9e));
  border-color: var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-active, #004a9e));
  border-block-width: 2px;
  border-inline-width: 2px;
}

.error::-webkit-slider-thumb {
  background-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-error-default, #db0000));
  border-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-error-default, #db0000));
}
.error::-moz-range-thumb {
  background-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-error-default, #db0000));
  border-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-error-default, #db0000));
}
.error:hover::-webkit-slider-thumb {
  background-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-error-active, #db0000));
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-error-active, #db0000));
}
.error:hover::-moz-range-thumb {
  background-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-error-active, #db0000));
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-error-active, #db0000));
}
.error:focus::-webkit-slider-thumb, .error:active::-webkit-slider-thumb {
  background-color: var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-error-active, #db0000));
  border-block-width: 2px;
  border-inline-width: 2px;
  border-color: var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-error-active, #db0000));
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-error-active, #db0000));
}
.error:focus::-moz-range-thumb, .error:active::-moz-range-thumb {
  background-color: var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-error-active, #db0000));
  border-block-width: 2px;
  border-inline-width: 2px;
  border-color: var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-error-active, #db0000));
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-error-active, #db0000));
}

.warning::-webkit-slider-thumb {
  background-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-warning-default, #855900));
  border-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-warning-default, #855900));
}
.warning::-moz-range-thumb {
  background-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-warning-default, #855900));
  border-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-warning-default, #855900));
}
.warning:hover::-webkit-slider-thumb {
  background-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-warning-active, #855900));
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-warning-active, #855900));
}
.warning:hover::-moz-range-thumb {
  background-color: var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-warning-active, #855900));
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--awsui-style-slider-handle-background-default, var(--color-background-slider-handle-warning-active, #855900));
}
.warning:focus::-webkit-slider-thumb, .warning:active::-webkit-slider-thumb {
  background-color: var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-warning-active, #855900));
  border-block-width: 2px;
  border-inline-width: 2px;
  border-color: var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-warning-active, #855900));
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-warning-active, #855900));
}
.warning:focus::-moz-range-thumb, .warning:active::-moz-range-thumb {
  background-color: var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-warning-active, #855900));
  border-block-width: 2px;
  border-inline-width: 2px;
  border-color: var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-warning-active, #855900));
  box-shadow: 0px 0 0 2px var(--color-background-slider-handle-ring, #ffffff), 0 0 0 4px var(--awsui-style-slider-handle-background-active, var(--color-background-slider-handle-warning-active, #855900));
}

.disabled::-webkit-slider-thumb,
.disabled:hover::-webkit-slider-thumb,
.disabled:active::-webkit-slider-thumb {
  block-size: var(--space-m, 16px);
  inline-size: var(--space-m, 16px);
  background-color: var(--awsui-style-slider-handle-background-default, var(--color-background-control-disabled, #dedee3));
  border-color: var(--awsui-style-slider-handle-background-default, var(--color-background-control-disabled, #dedee3));
  box-shadow: none;
  pointer-events: none;
}
.disabled::-moz-range-thumb,
.disabled:hover::-moz-range-thumb,
.disabled:active::-moz-range-thumb {
  block-size: var(--space-m, 16px);
  inline-size: var(--space-m, 16px);
  background-color: var(--awsui-style-slider-handle-background-default, var(--color-background-control-disabled, #dedee3));
  border-color: var(--awsui-style-slider-handle-background-default, var(--color-background-control-disabled, #dedee3));
  box-shadow: none;
  pointer-events: none;
}

.readonly:not(.disabled)::-webkit-slider-thumb,
.readonly:not(.disabled):hover::-webkit-slider-thumb,
.readonly:not(.disabled):active::-webkit-slider-thumb {
  block-size: var(--space-s, 12px);
  inline-size: var(--space-s, 12px);
  background-color: var(--awsui-style-slider-handle-background-default, var(--color-foreground-control-read-only, #656871));
  border-color: var(--awsui-style-slider-handle-background-default, var(--color-foreground-control-read-only, #656871));
  box-shadow: none;
  pointer-events: none;
  cursor: initial;
}
.readonly:not(.disabled)::-moz-range-thumb,
.readonly:not(.disabled):hover::-moz-range-thumb,
.readonly:not(.disabled):active::-moz-range-thumb {
  block-size: var(--space-s, 12px);
  inline-size: var(--space-s, 12px);
  background-color: var(--awsui-style-slider-handle-background-default, var(--color-foreground-control-read-only, #656871));
  border-color: var(--awsui-style-slider-handle-background-default, var(--color-foreground-control-read-only, #656871));
  box-shadow: none;
  pointer-events: none;
  cursor: initial;
}

.tick-marks {
  position: relative;
}
.tick-mark {
  position: absolute;
  block-size: var(--space-xs, 8px);
  inline-size: var(--space-xxxs, 2px);
  background: var(--color-background-slider-track-default, #8c8c94);
}
`;

export { componentStyles as sliderStyles };
export { sharedStyles };
