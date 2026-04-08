// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.top-navigation {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  background: var(--color-background-container-content-6u8rvp, #ffffff);
  border-block-end: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-divider-default-nr68jt, #c6c6cd);
}
.top-navigation > .padding-box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  block-size: calc(var(--space-xxxl-aut1u7, 40px) + var(--space-scaled-m-m892r9, 16px));
  padding-inline-start: var(--space-xxl-32srm4, 32px);
}
.top-navigation.medium > .padding-box, .top-navigation.narrow > .padding-box {
  padding-inline-start: var(--space-l-2ud1p3, 20px);
}
.top-navigation.medium > .padding-box {
  block-size: calc(var(--space-xxxl-aut1u7, 40px) + var(--space-scaled-xs-xwoogq, 8px));
  padding-inline-end: 0;
}
.top-navigation.narrow > .padding-box {
  block-size: var(--space-xxxl-aut1u7, 40px);
}

.virtual {
  inline-size: 9000px;
}

.hidden {
  position: absolute !important;
  inset-block-start: -9999px !important;
  inset-inline-start: -9999px !important;
  visibility: hidden;
}

.hidden *:not(#awsui_\9 _k5dlb_vnjbq_1) {
  visibility: hidden;
}

.identity {
  min-inline-size: 0;
}
.identity > .identity-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-text-top-navigation-title-en0v40, #0f141a);
}
.identity > .identity-link:hover {
  color: var(--color-text-accent-n1kmht, #006ce0);
}
:host-context([data-awsui-focus-visible=true]) .identity > .identity-link:focus {
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
.identity.no-logo {
  min-inline-size: 100px;
}

.logo {
  display: block;
  max-block-size: var(--space-xxl-32srm4, 32px);
  margin-inline-end: var(--space-s-tvghoh, 12px);
  inline-size: auto;
  flex-shrink: 0;
  min-inline-size: 10px;
}
.logo.narrow {
  max-block-size: var(--space-xl-jfy3x4, 24px);
}

.title {
  font-family: var(--font-family-heading-ugphat, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-m-170yiy, 18px);
  line-height: var(--line-height-heading-m-uoaqdh, 22px);
  letter-spacing: var(--letter-spacing-heading-m-29ewnk, -0.01em);
  font-weight: var(--font-weight-heading-m-zf82dr, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.no-logo > .identity-link > .title {
  font-weight: 700;
}

.inputs {
  display: flex;
  flex: 1;
  padding-block: 0;
  padding-inline: var(--space-m-dsumyt, 16px);
  justify-content: center;
}

.search {
  inline-size: 100%;
  max-inline-size: 340px;
}
.search-expanded {
  max-inline-size: none;
}

.utilities {
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: stretch;
  block-size: 100%;
}
.medium > .padding-box > .utilities, .narrow > .padding-box > .utilities {
  padding-inline-start: 0;
}

.utility-wrapper {
  display: flex;
  position: relative;
  flex-shrink: 0;
  align-items: center;
  padding-block: 0;
  padding-inline: var(--space-m-dsumyt, 16px);
}
.utility-wrapper::after {
  display: block;
  position: absolute;
  content: "";
  inline-size: 1px;
  inset-inline-end: 0;
  inset-block: var(--space-s-tvghoh, 12px);
  background: var(--color-border-divider-default-nr68jt, #c6c6cd);
}
.utility-wrapper:last-of-type::after {
  display: none;
}

.utility-type-button-link {
  padding-block: 0;
  padding-inline: var(--space-l-2ud1p3, 20px);
}

.utility-type-menu-dropdown {
  padding-block: 0;
  padding-inline: var(--space-s-tvghoh, 12px);
  align-items: stretch;
}
.utility-type-menu-dropdown:not(.narrow):last-of-type, .utility-type-menu-dropdown:not(.medium):last-of-type {
  padding-inline-end: 0;
}

.utility-type-button-primary-button {
  inset-inline-start: -1px;
  border-inline-start: 1px solid var(--color-background-container-content-6u8rvp, #ffffff);
}
.utility-type-button-primary-button::after {
  display: none;
}

.utility-link-icon {
  margin-inline-start: var(--space-xxs-hwfkai, 4px);
}

.utility-button-external-icon {
  display: inline-block;
}

.offset-right-none {
  margin-inline-end: 0;
}

.offset-right-l {
  margin-inline-end: var(--space-xxs-hwfkai, 4px);
}

.offset-right-xxl {
  margin-inline-end: var(--space-m-dsumyt, 16px);
}

/* Overflow Menu */
.overflow-menu-drawer {
  position: fixed;
  block-size: 100%;
  inline-size: 100%;
  z-index: 1001;
}

.overflow-menu {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  background: var(--color-background-container-content-6u8rvp, #ffffff);
  block-size: 100%;
}

.overflow-menu-header {
  display: flex;
  align-items: center;
  min-block-size: var(--font-panel-header-line-height-8xb2qj, 22px);
  padding-block: var(--space-scaled-m-m892r9, 16px);
  padding-inline: var(--space-scaled-m-m892r9, 16px);
  border-block-end: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-divider-default-nr68jt, #c6c6cd);
}
.overflow-menu-header-text {
  color: var(--color-text-heading-default-izpp46, #0f141a);
  flex: 1;
  margin-block: 0;
  margin-inline: 0;
  text-align: center;
}
.overflow-menu-header-text--title {

  font-size: var(--font-panel-header-size-33h9j8, 18px);
  letter-spacing: var(--letter-spacing-heading-m-29ewnk, -0.01em);
  line-height: var(--font-panel-header-line-height-8xb2qj, 22px);
  font-weight: var(--font-weight-heading-l-0t6dwc, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
}
.overflow-menu-header-text--secondary {
  font-size: var(--font-header-h2-description-size-g2wws3, 14px);
  line-height: var(--font-header-h2-description-line-height-ts2s6o, 20px);
  font-weight: 400;
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
}

.overflow-menu-control {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: flex;
  inline-size: 100%;
  padding-block: 0;
  padding-inline: 0;
  background: none;
  border-block: none;
  border-inline: none;
}
.overflow-menu-list-item-utility > .overflow-menu-control {
  padding-block: var(--space-scaled-m-m892r9, 16px);
  padding-inline: var(--space-scaled-m-m892r9, 16px);
}
.overflow-menu-control:hover {
  color: var(--color-text-accent-n1kmht, #006ce0);
  cursor: pointer;
}
.overflow-menu-control-link {
  text-decoration: none;
}
.overflow-menu-control-expandable-menu-trigger {
  color: var(--color-text-dropdown-group-label-2tmyik, #424650);
  font-weight: bold;
}
.overflow-menu-control-expandable-menu-trigger:hover {
  color: var(--color-text-accent-n1kmht, #006ce0);
}
:host-context([data-awsui-focus-visible=true]) .overflow-menu-control:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .overflow-menu-control:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-focus-outline-gutter-jj138g, 4px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .overflow-menu-control:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-button-focus-outline-gutter-jj138g, 4px));
  inset-block-start: calc(-1 * var(--space-button-focus-outline-gutter-jj138g, 4px));
  inline-size: calc(100% + var(--space-button-focus-outline-gutter-jj138g, 4px) + var(--space-button-focus-outline-gutter-jj138g, 4px));
  block-size: calc(100% + var(--space-button-focus-outline-gutter-jj138g, 4px) + var(--space-button-focus-outline-gutter-jj138g, 4px));
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}

.overflow-menu-list {
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
}
.overflow-menu-list-submenu {
  margin-block: var(--space-scaled-xxs-pfm1nx, 4px);
  margin-inline: 0;
}

.overflow-menu-list-item {
  box-sizing: border-box;
  letter-spacing: var(--font-button-letter-spacing-ufowe3, 0.005em);
}
.overflow-menu-list-item-icon {
  margin-inline-end: var(--space-xxs-hwfkai, 4px);
}
.overflow-menu-list-item-text {
  flex: 1;
}
.overflow-menu-list-item-utility {
  font-weight: var(--font-weight-button-0eg20c, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
  border-block-end: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-divider-default-nr68jt, #c6c6cd);
}
.overflow-menu-list-item-submenu {
  border-block-start: var(--border-divider-section-width-uwo8my, 1px) solid transparent;
  border-block-end: var(--border-divider-section-width-uwo8my, 1px) solid transparent;
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-inline: var(--space-scaled-l-sej05l, 20px);
}
.overflow-menu-list-item-dropdown-menu {
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-inline: var(--space-scaled-s-8ozaad, 12px);
}
.overflow-menu-list-item-expandable {
  border-block-start-color: var(--color-border-divider-default-nr68jt, #c6c6cd);
  border-block-end-color: var(--color-border-divider-default-nr68jt, #c6c6cd);
}

.icon {
  transform: rotate(0deg);
  transition: transform var(--motion-duration-rotate-180-cxi9g7, 135ms) var(--motion-easing-rotate-180-7a58rc, cubic-bezier(0.165, 0.84, 0.44, 1));
}
@media (prefers-reduced-motion: reduce) {
  .icon {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .icon, .awsui-mode-entering .icon {
  animation: none;
  transition: none;
}
.icon-open {
  transform: rotate(-180deg);
}
`;

export { componentStyles as topNavigationStyles };
export { sharedStyles };
