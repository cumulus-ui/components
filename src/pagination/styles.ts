// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding-inline-start: 0;
  margin-block: 0;
  margin-inline: 0;
  list-style: none;
}

.button,
.dots {
  min-inline-size: var(--space-l-2ud1p3, 20px);
  border-block: var(--border-width-button-jm0qg7, 2px) solid transparent;
  border-inline: var(--border-width-button-jm0qg7, 2px) solid transparent;
}

.button {
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  background: transparent;
  line-height: inherit;
  padding-block: 0;
  padding-inline: 0;
}
.button:focus {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .button:focus {
  outline: 2px dotted transparent;
  border-block: var(--border-width-button-jm0qg7, 2px) solid var(--color-border-item-focused-uk47pl, #006ce0);
  border-inline: var(--border-width-button-jm0qg7, 2px) solid var(--color-border-item-focused-uk47pl, #006ce0);
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 var(--border-control-focus-ring-shadow-spread-9mjajk, 1px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.button-disabled {
  cursor: default;
  color: var(--color-text-interactive-disabled-1bqmrl, #b4b4bb);
}

.arrow {
  color: var(--color-text-interactive-default-ugh9wp, #424650);
}
.arrow:not(.button-disabled):hover {
  color: var(--color-text-interactive-hover-6naf7i, #0f141a);
}
.arrow.button-disabled {
  color: var(--color-text-interactive-disabled-1bqmrl, #b4b4bb);
}

.page-number {
  color: var(--color-text-pagination-page-number-default-74j15c, #424650);
}
.page-number:not(.button-disabled):hover {
  color: var(--color-text-interactive-hover-6naf7i, #0f141a);
}
.page-number.button-current {
  font-weight: var(--font-wayfinding-link-active-weight-ny4hup, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
  color: var(--color-text-interactive-active-uoe6zi, #0f141a);
}
.page-number.button-current.button-disabled {
  color: var(--color-text-pagination-page-number-active-disabled-gfl43p, #b4b4bb);
}
.page-number.button-disabled {
  color: var(--color-text-interactive-disabled-1bqmrl, #b4b4bb);
}

.dots {
  color: var(--color-text-interactive-default-ugh9wp, #424650);
}

.page-item,
.dots {
  margin-block: var(--space-scaled-xxs-pfm1nx, 4px);
  margin-inline: var(--space-xxs-hwfkai, 4px);
  text-align: center;
  box-sizing: border-box;
  padding-block: 0;
  padding-inline: 0;
}
.page-item:first-child,
.dots:first-child {
  margin-inline-start: 0;
}
.page-item:last-child,
.dots:last-child {
  margin-inline-end: 0;
}

.root-disabled > .dots {
  color: var(--color-text-interactive-disabled-1bqmrl, #b4b4bb);
}
`;

export { componentStyles as paginationStyles };
export { sharedStyles };
