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
}

.wizard.refresh {
  column-gap: var(--space-xl-jfy3x4, 24px);
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  row-gap: var(--space-scaled-xxs-pfm1nx, 4px);
}
.wizard.refresh.small-container {
  grid-template-columns: minmax(0, 1fr) 0;
  grid-template-rows: auto auto 1fr;
  row-gap: var(--space-scaled-xxs-pfm1nx, 4px);
}

.wizard:not(.refresh) {
  display: flex;
}
.wizard:not(.refresh).small-container {
  flex-direction: column;
  gap: var(--space-s-tvghoh, 12px);
}

.navigation.refresh {
  grid-column: 1;
  grid-row: 1/span 2;
  padding-block-start: calc(var(--space-xs-ymlm0b, 8px) + var(--space-scaled-xxs-pfm1nx, 4px));


}
.navigation.refresh > ul.refresh {
  position: relative;
  margin-block: 0;
  margin-inline: 0;
  padding-block-start: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-block-end: 0;
  padding-inline: 0;
  inline-size: 260px;
  box-sizing: border-box;
}
.navigation.refresh > ul.refresh > li {
  display: grid;
  column-gap: var(--space-xs-ymlm0b, 8px);
  grid-template-columns: var(--space-l-2ud1p3, 20px) 1fr;
  grid-template-rows: repeat(2, auto);
  padding-block: 0;
  padding-inline: 0;
}
.navigation.refresh > ul.refresh > li > hr {
  background-color: var(--color-border-divider-default-nr68jt, #c6c6cd);
  border-block: 0;
  border-inline: 0;
  grid-column: 1;
  block-size: 100%;
  inline-size: var(--space-xxxs-pajhad, 2px);
}
.navigation.refresh > ul.refresh > li > .number {
  color: var(--color-text-small-m1tr70, #656871);
  font-size: var(--font-size-body-s-smc8cv, 12px);
  grid-column: 2;
  grid-row: 1;
}
.navigation.refresh > ul.refresh > li > a {
  align-items: start;
  column-gap: var(--space-xs-ymlm0b, 8px);
  cursor: pointer;
  display: grid;
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  grid-column: 1/span 2;
  grid-row: 2;
  grid-template-columns: var(--space-l-2ud1p3, 20px) 1fr;
}
.navigation.refresh > ul.refresh > li > a > .circle {
  border-start-start-radius: 100%;
  border-start-end-radius: 100%;
  border-end-start-radius: 100%;
  border-end-end-radius: 100%;
  grid-column: 1;
  block-size: 10px;
  justify-self: center;
  margin-block-start: 6px;
  inline-size: 10px;
}
.navigation.refresh > ul.refresh > li > a > .title {
  min-inline-size: 0;
  word-break: break-word;
  grid-column: 2;
}
:host-context([data-awsui-focus-visible=true]) .navigation.refresh > ul.refresh > li > a:focus {
  outline: thin dotted;
  outline: var(--border-link-focus-ring-outline-1p0hnu, 0);
  outline-offset: 2px;
  outline-color: var(--color-border-item-focused-uk47pl, #006ce0);
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 var(--border-link-focus-ring-shadow-spread-39uvxr, 2px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.navigation.refresh > ul.refresh > li:first-child > hr {
  grid-row: 2/span 2;
}
.navigation.refresh > ul.refresh > li:not(:first-child) > .number {
  margin-block-start: var(--space-m-dsumyt, 16px);
}
.navigation.refresh > ul.refresh > li:last-child > hr {
  grid-row: 1;
}
.navigation.refresh > ul.refresh > li:only-of-type > hr {
  display: none;
}
.navigation.refresh > ul.refresh > li:not(:first-child):not(:last-child) > hr {
  grid-row: 1/span 3;
}
.navigation.refresh > ul.refresh > li.active > a {
  cursor: text;
}
.navigation.refresh > ul.refresh > li.active > a > .circle {
  background-color: var(--color-background-control-checked-ka7kc2, #006ce0);
  box-shadow: 0 0 0 3px var(--color-background-container-content-6u8rvp, #ffffff), 0 0 0 5px var(--color-background-control-checked-ka7kc2, #006ce0), 0 0 0 7px var(--color-background-container-content-6u8rvp, #ffffff);
}
.navigation.refresh > ul.refresh > li.active > a > .title {
  color: var(--color-background-control-checked-ka7kc2, #006ce0);
  font-weight: 700;
}
.navigation.refresh > ul.refresh > li.disabled > a {
  cursor: text;
}
.navigation.refresh > ul.refresh > li.disabled > a > .circle {
  background-color: var(--color-background-container-content-6u8rvp, #ffffff);
  box-shadow: 0 0 0 2px var(--color-text-interactive-disabled-1bqmrl, #b4b4bb), 0 0 0 4px var(--color-background-container-content-6u8rvp, #ffffff);
}
.navigation.refresh > ul.refresh > li.disabled > a > .title {
  color: var(--color-text-status-inactive-gy7337, #656871);
}
.navigation.refresh > ul.refresh > li.enabled > a > .circle {
  background-color: var(--color-text-interactive-default-ugh9wp, #424650);
  box-shadow: 0 0 0 2px var(--color-text-interactive-default-ugh9wp, #424650), 0 0 0 4px var(--color-background-container-content-6u8rvp, #ffffff);
}
.navigation.refresh > ul.refresh > li.enabled > a > .title {
  color: var(--color-text-interactive-default-ugh9wp, #424650);
}
.navigation.refresh > ul.refresh > li.enabled > a:hover > .circle {
  background-color: var(--color-background-control-checked-ka7kc2, #006ce0);
  box-shadow: 0 0 0 2px var(--color-background-control-checked-ka7kc2, #006ce0), 0 0 0 4px var(--color-background-container-content-6u8rvp, #ffffff);
}
.navigation.refresh > ul.refresh > li.enabled > a:hover > .title {
  color: var(--color-background-control-checked-ka7kc2, #006ce0);
}

.navigation:not(.refresh) {
  color: var(--color-text-disabled-rox5hg, #b4b4bb);
  display: inline-block;
  margin-inline-end: calc(2 * var(--space-xxxl-aut1u7, 40px));
  min-inline-size: 200px;
  padding-block-start: var(--space-xxs-hwfkai, 4px);
  inline-size: 200px;


}
.navigation:not(.refresh) > ul:not(.refresh) {
  list-style: none;
  padding-block: 0;
  padding-inline: 0;
  margin-block: 0;
  margin-inline: 0;
}
.navigation:not(.refresh) > ul:not(.refresh) > li {
  min-inline-size: 0;
  word-break: break-word;
  padding-block: 0 var(--space-scaled-m-m892r9, 16px);
}
.navigation:not(.refresh) > ul:not(.refresh) > li:not(:first-child) {
  margin-block-start: var(--space-scaled-m-m892r9, 16px);
}
.navigation:not(.refresh) > ul:not(.refresh) > li:not(:last-child) {
  border-block-end: var(--border-divider-list-width-tdfx1x, 1px) solid var(--color-border-layout-ayg8vb, #c6c6cd);
}

.form:not(.refresh) {
  min-inline-size: 0;
  word-break: break-word;
  inline-size: 100%;
}
.form:not(.refresh) > .form-header {
  position: relative;
  margin-block-end: var(--space-scaled-m-m892r9, 16px);
}

.form.refresh {
  min-inline-size: 0;
  word-break: break-word;
  display: contents;
}
.form.refresh > .form-header {
  grid-column: 2;
  grid-row: 1;
  color: var(--color-text-body-default-vvtq8u, #0f141a);
}
.form.refresh > .form-header > .form-header-content {
  padding-block-start: calc(var(--space-xl-jfy3x4, 24px) + var(--space-scaled-xxxs-oo06c7, 2px));
  padding-block-end: var(--space-scaled-s-8ozaad, 12px);
}
.form.refresh > .form-component {
  grid-column: 2;
  grid-row: 2;
}
.form.refresh.small-container > .form-header {
  grid-column: 1/span 2;
  grid-row: 2;
}
.form.refresh.small-container > .form-header > .form-header-content {
  padding-block-start: 0;
}
.form.refresh.small-container > .form-component {
  grid-column: 1/span 2;
  grid-row: 3;
}

.navigation.hidden {
  display: none;
}

.collapsed-steps {
  grid-column: 1/span 2;
  grid-row: 1;
}

/* Override fixed sidebar width for expandable navigation */
.navigation.refresh.collapsed-steps-navigation {
  grid-column: unset;
  grid-row: unset;
  padding-block-start: 0;
}
.navigation.refresh.collapsed-steps-navigation > ul.refresh {
  inline-size: 100%;
}

.form-header-component-wrapper {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .form-header-component-wrapper:focus {
  outline: thin dotted;
  outline: var(--border-link-focus-ring-outline-1p0hnu, 0);
  outline-offset: 2px;
  outline-color: var(--color-border-item-focused-uk47pl, #006ce0);
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 var(--border-link-focus-ring-shadow-spread-39uvxr, 2px) var(--color-border-item-focused-uk47pl, #006ce0);
}

.navigation-link-active {
  font-weight: 700;
  color: var(--color-text-body-default-vvtq8u, #0f141a);
}

.navigation-link-disabled {
  color: var(--color-text-status-inactive-gy7337, #656871);
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
}
`;

export { componentStyles as wizardStyles };
export { sharedStyles };
