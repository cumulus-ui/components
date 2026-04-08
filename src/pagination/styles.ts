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
  min-inline-size: var(--space-l, 20px);
  border-block: var(--border-width-button, 2px) solid transparent;
  border-inline: var(--border-width-button, 2px) solid transparent;
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
  border-block: var(--border-width-button, 2px) solid var(--color-border-item-focused, #006ce0);
  border-inline: var(--border-width-button, 2px) solid var(--color-border-item-focused, #006ce0);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 var(--border-control-focus-ring-shadow-spread, 1px) var(--color-border-item-focused, #006ce0);
}
.button-disabled {
  cursor: default;
  color: var(--color-text-interactive-disabled, #b4b4bb);
}

.arrow {
  color: var(--color-text-interactive-default, #424650);
}
.arrow:not(.button-disabled):hover {
  color: var(--color-text-interactive-hover, #0f141a);
}
.arrow.button-disabled {
  color: var(--color-text-interactive-disabled, #b4b4bb);
}

.page-number {
  color: var(--color-text-pagination-page-number-default, #424650);
}
.page-number:not(.button-disabled):hover {
  color: var(--color-text-interactive-hover, #0f141a);
}
.page-number.button-current {
  font-weight: var(--font-wayfinding-link-active-weight, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  color: var(--color-text-interactive-active, #0f141a);
}
.page-number.button-current.button-disabled {
  color: var(--color-text-pagination-page-number-active-disabled, #b4b4bb);
}
.page-number.button-disabled {
  color: var(--color-text-interactive-disabled, #b4b4bb);
}

.dots {
  color: var(--color-text-interactive-default, #424650);
}

.page-item,
.dots {
  margin-block: var(--space-scaled-xxs, 4px);
  margin-inline: var(--space-xxs, 4px);
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
  color: var(--color-text-interactive-disabled, #b4b4bb);
}
`;

export { componentStyles as paginationStyles };
export { sharedStyles };
