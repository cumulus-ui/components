// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.button {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  min-inline-size: 0;
  word-break: break-word;
  font-weight: var(--font-weight-button-0eg20c, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
  letter-spacing: var(--font-button-letter-spacing-ufowe3, 0.005em);
  border-start-start-radius: var(--border-radius-button-7bgkcs, 20px);
  border-start-end-radius: var(--border-radius-button-7bgkcs, 20px);
  border-end-start-radius: var(--border-radius-button-7bgkcs, 20px);
  border-end-end-radius: var(--border-radius-button-7bgkcs, 20px);
  border-block: var(--border-width-button-jm0qg7, 2px) solid;
  border-inline: var(--border-width-button-jm0qg7, 2px) solid;
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-inline: var(--space-button-horizontal-k0c786, 20px);
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  --awsui-style-focus-ring-box-shadow-6b9ypa: 0 0 0 var(--awsui-style-focus-ring-border-width-6b9ypa, 2px) var(--awsui-style-focus-ring-border-color-6b9ypa, var(--color-border-item-focused-uk47pl, #006ce0));
}
.button.variant-normal {
  background: var(--awsui-style-background-default-6b9ypa, var(--color-background-button-normal-default-7f99mv, #ffffff));
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-button-normal-default-nzalii, #006ce0));
  border-color: var(--awsui-style-border-color-default-6b9ypa, var(--color-border-button-normal-default-glqfp1, #006ce0));
  box-shadow: var(--awsui-style-box-shadow-default-6b9ypa);
  position: relative;
  text-decoration: none;
}
.button.variant-normal:hover {
  background: var(--awsui-style-background-hover-6b9ypa, var(--color-background-button-normal-hover-53op9s, #f0fbff));
  border-color: var(--awsui-style-border-color-hover-6b9ypa, var(--color-border-button-normal-hover-6a2tdq, #002b66));
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-button-normal-hover-gusgyv, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover-6b9ypa);
  text-decoration: none;
}
.button.variant-normal:active {
  background: var(--awsui-style-background-active-6b9ypa, var(--color-background-button-normal-active-5imwxd, #d1f1ff));
  border-color: var(--awsui-style-border-color-active-6b9ypa, var(--color-border-button-normal-active-ru7yhb, #002b66));
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-button-normal-active-vihsxh, #002b66));
  box-shadow: var(--awsui-style-box-shadow-active-6b9ypa);
}
.button.variant-normal.disabled {
  background: var(--awsui-style-background-disabled-6b9ypa, var(--color-background-button-normal-disabled-hl039l, #ffffff));
  border-color: var(--awsui-style-border-color-disabled-6b9ypa, var(--color-border-button-normal-disabled-pkhetz, #b4b4bb));
  color: var(--awsui-style-color-disabled-6b9ypa, var(--color-text-button-normal-disabled-05p74s, #8c8c94));
  box-shadow: var(--awsui-style-box-shadow-disabled-6b9ypa);
  text-decoration: none;
  cursor: auto;
}
.button.variant-primary {
  background: var(--awsui-style-background-default-6b9ypa, var(--color-background-button-primary-default-vdt0fu, #006ce0));
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-button-primary-default-mwl31m, #ffffff));
  border-color: var(--awsui-style-border-color-default-6b9ypa, var(--color-background-button-primary-default-vdt0fu, #006ce0));
  box-shadow: var(--awsui-style-box-shadow-default-6b9ypa);
  position: relative;
  text-decoration: none;
}
.button.variant-primary:hover {
  background: var(--awsui-style-background-hover-6b9ypa, var(--color-background-button-primary-hover-mo85i6, #002b66));
  border-color: var(--awsui-style-border-color-hover-6b9ypa, var(--color-background-button-primary-hover-mo85i6, #002b66));
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-button-primary-hover-pw12ep, #ffffff));
  box-shadow: var(--awsui-style-box-shadow-hover-6b9ypa);
  text-decoration: none;
}
.button.variant-primary:active {
  background: var(--awsui-style-background-active-6b9ypa, var(--color-background-button-primary-active-5cqoqt, #002b66));
  border-color: var(--awsui-style-border-color-active-6b9ypa, var(--color-background-button-primary-active-5cqoqt, #002b66));
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-button-primary-active-refmba, #ffffff));
  box-shadow: var(--awsui-style-box-shadow-active-6b9ypa);
}
.button.variant-primary.disabled {
  background: var(--awsui-style-background-disabled-6b9ypa, var(--color-background-button-primary-disabled-sgo4zo, #ebebf0));
  border-color: var(--awsui-style-border-color-disabled-6b9ypa, var(--color-border-button-primary-disabled-b5p1ji, #ebebf0));
  color: var(--awsui-style-color-disabled-6b9ypa, var(--color-text-button-primary-disabled-q79gms, #8c8c94));
  box-shadow: var(--awsui-style-box-shadow-disabled-6b9ypa);
  text-decoration: none;
  cursor: auto;
}
.button.variant-link {
  background: var(--awsui-style-background-default-6b9ypa, transparent);
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-button-normal-default-nzalii, #006ce0));
  border-color: var(--awsui-style-border-color-default-6b9ypa, transparent);
  box-shadow: var(--awsui-style-box-shadow-default-6b9ypa);
  position: relative;
  text-decoration: none;
}
.button.variant-link:hover {
  background: var(--awsui-style-background-hover-6b9ypa, var(--color-background-button-link-hover-lhrs2u, #f0fbff));
  border-color: var(--awsui-style-border-color-hover-6b9ypa, var(--color-background-button-link-hover-lhrs2u, #f0fbff));
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-button-normal-hover-gusgyv, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover-6b9ypa);
  text-decoration: none;
}
.button.variant-link:active {
  background: var(--awsui-style-background-active-6b9ypa, var(--color-background-button-link-active-5oi2dp, #d1f1ff));
  border-color: var(--awsui-style-border-color-active-6b9ypa, var(--color-background-button-link-active-5oi2dp, #d1f1ff));
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-button-normal-active-vihsxh, #002b66));
  box-shadow: var(--awsui-style-box-shadow-active-6b9ypa);
}
.button.variant-link.disabled {
  background: var(--awsui-style-background-disabled-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-disabled-6b9ypa, transparent);
  color: var(--awsui-style-color-disabled-6b9ypa, var(--color-text-interactive-disabled-1bqmrl, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled-6b9ypa);
  text-decoration: none;
  cursor: auto;
}
.button.variant-icon {
  background: var(--awsui-style-background-default-6b9ypa, transparent);
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-interactive-default-ugh9wp, #424650));
  border-color: var(--awsui-style-border-color-default-6b9ypa, transparent);
  box-shadow: var(--awsui-style-box-shadow-default-6b9ypa);
  position: relative;
  text-decoration: none;
}
.button.variant-icon:hover {
  background: var(--awsui-style-background-hover-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-hover-6b9ypa, transparent);
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-interactive-hover-6naf7i, #0f141a));
  box-shadow: var(--awsui-style-box-shadow-hover-6b9ypa);
  text-decoration: none;
}
.button.variant-icon:active {
  background: var(--awsui-style-background-active-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-active-6b9ypa, transparent);
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-interactive-default-ugh9wp, #424650));
  box-shadow: var(--awsui-style-box-shadow-active-6b9ypa);
}
.button.variant-icon.disabled {
  background: var(--awsui-style-background-disabled-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-disabled-6b9ypa, transparent);
  color: var(--awsui-style-color-disabled-6b9ypa, var(--color-text-button-icon-disabled-nnofkn, #8c8c94));
  box-shadow: var(--awsui-style-box-shadow-disabled-6b9ypa);
  text-decoration: none;
  cursor: auto;
}
.button.variant-inline-icon {
  background: var(--awsui-style-background-default-6b9ypa, transparent);
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-button-inline-icon-default-sm4ql6, #006ce0));
  border-color: var(--awsui-style-border-color-default-6b9ypa, transparent);
  box-shadow: var(--awsui-style-box-shadow-default-6b9ypa);
  position: relative;
  text-decoration: none;
}
.button.variant-inline-icon:hover {
  background: var(--awsui-style-background-hover-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-hover-6b9ypa, transparent);
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-button-inline-icon-hover-rbyzfc, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover-6b9ypa);
  text-decoration: none;
}
.button.variant-inline-icon:active {
  background: var(--awsui-style-background-active-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-active-6b9ypa, transparent);
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-button-inline-icon-default-sm4ql6, #006ce0));
  box-shadow: var(--awsui-style-box-shadow-active-6b9ypa);
}
.button.variant-inline-icon.disabled {
  background: var(--awsui-style-background-disabled-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-disabled-6b9ypa, transparent);
  color: var(--awsui-style-color-disabled-6b9ypa, var(--color-text-button-inline-icon-disabled-82hho0, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled-6b9ypa);
  text-decoration: none;
  cursor: auto;
}
.button.variant-inline-icon-pointer-target {
  background: var(--awsui-style-background-default-6b9ypa, transparent);
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-button-inline-icon-default-sm4ql6, #006ce0));
  border-color: var(--awsui-style-border-color-default-6b9ypa, transparent);
  box-shadow: var(--awsui-style-box-shadow-default-6b9ypa);
  position: relative;
  text-decoration: none;
}
.button.variant-inline-icon-pointer-target:hover {
  background: var(--awsui-style-background-hover-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-hover-6b9ypa, transparent);
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-button-inline-icon-hover-rbyzfc, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover-6b9ypa);
  text-decoration: none;
}
.button.variant-inline-icon-pointer-target:active {
  background: var(--awsui-style-background-active-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-active-6b9ypa, transparent);
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-button-inline-icon-default-sm4ql6, #006ce0));
  box-shadow: var(--awsui-style-box-shadow-active-6b9ypa);
}
.button.variant-inline-icon-pointer-target.disabled {
  background: var(--awsui-style-background-disabled-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-disabled-6b9ypa, transparent);
  color: var(--awsui-style-color-disabled-6b9ypa, var(--color-text-button-inline-icon-disabled-82hho0, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled-6b9ypa);
  text-decoration: none;
  cursor: auto;
}
.button.variant-inline-link {
  background: var(--awsui-style-background-default-6b9ypa, transparent);
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-button-normal-default-nzalii, #006ce0));
  border-color: var(--awsui-style-border-color-default-6b9ypa, transparent);
  box-shadow: var(--awsui-style-box-shadow-default-6b9ypa);
  border-block-width: 0;
  border-inline-width: 0;
  position: relative;
  text-decoration: none;
  padding-block: 0;
  padding-inline: 0;
}
.button.variant-inline-link:hover {
  background: var(--awsui-style-background-hover-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-hover-6b9ypa, transparent);
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-button-normal-hover-gusgyv, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover-6b9ypa);
  text-decoration: none;
}
.button.variant-inline-link:active {
  background: var(--awsui-style-background-active-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-active-6b9ypa, transparent);
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-button-normal-active-vihsxh, #002b66));
  box-shadow: var(--awsui-style-box-shadow-active-6b9ypa);
}
.button.variant-inline-link.disabled {
  background: var(--awsui-style-background-disabled-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-disabled-6b9ypa, transparent);
  color: var(--awsui-style-color-disabled-6b9ypa, var(--color-text-interactive-disabled-1bqmrl, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled-6b9ypa);
  text-decoration: none;
  cursor: auto;
}
.button.variant-modal-dismiss {
  background: var(--awsui-style-background-default-6b9ypa, transparent);
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-interactive-default-ugh9wp, #424650));
  border-color: var(--awsui-style-border-color-default-6b9ypa, transparent);
  box-shadow: var(--awsui-style-box-shadow-default-6b9ypa);
  position: relative;
  text-decoration: none;
}
.button.variant-modal-dismiss:hover {
  background: var(--awsui-style-background-hover-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-hover-6b9ypa, transparent);
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-interactive-hover-6naf7i, #0f141a));
  box-shadow: var(--awsui-style-box-shadow-hover-6b9ypa);
  text-decoration: none;
}
.button.variant-modal-dismiss:active {
  background: var(--awsui-style-background-active-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-active-6b9ypa, transparent);
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-interactive-default-ugh9wp, #424650));
  box-shadow: var(--awsui-style-box-shadow-active-6b9ypa);
}
.button.variant-modal-dismiss.disabled {
  background: var(--awsui-style-background-disabled-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-disabled-6b9ypa, transparent);
  color: var(--awsui-style-color-disabled-6b9ypa, var(--color-text-interactive-disabled-1bqmrl, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled-6b9ypa);
  text-decoration: none;
  cursor: auto;
}
.button.variant-flashbar-icon {
  background: var(--awsui-style-background-default-6b9ypa, transparent);
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-interactive-inverted-default-xlc0d5, #dedee3));
  border-color: var(--awsui-style-border-color-default-6b9ypa, transparent);
  box-shadow: var(--awsui-style-box-shadow-default-6b9ypa);
  position: relative;
  text-decoration: none;
}
.button.variant-flashbar-icon:hover {
  background: var(--awsui-style-background-hover-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-hover-6b9ypa, transparent);
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-interactive-inverted-hover-65rnp7, #f9f9fa));
  box-shadow: var(--awsui-style-box-shadow-hover-6b9ypa);
  text-decoration: none;
}
.button.variant-flashbar-icon:active {
  background: var(--awsui-style-background-active-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-active-6b9ypa, transparent);
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-interactive-inverted-default-xlc0d5, #dedee3));
  box-shadow: var(--awsui-style-box-shadow-active-6b9ypa);
}
.button.variant-flashbar-icon.disabled {
  background: var(--awsui-style-background-disabled-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-disabled-6b9ypa, transparent);
  color: var(--awsui-style-color-disabled-6b9ypa, var(--color-text-interactive-disabled-1bqmrl, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled-6b9ypa);
  text-decoration: none;
  cursor: auto;
}
.button.variant-breadcrumb-group {
  background: var(--awsui-style-background-default-6b9ypa, transparent);
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-link-default-hude44, #006ce0));
  border-color: var(--awsui-style-border-color-default-6b9ypa, transparent);
  box-shadow: var(--awsui-style-box-shadow-default-6b9ypa);
  border-block-width: 0;
  border-inline-width: 0;
  position: relative;
  text-decoration: none;
  padding-block: 0;
  padding-inline: 0;
  font-weight: normal;
}
.button.variant-breadcrumb-group:hover {
  background: var(--awsui-style-background-hover-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-hover-6b9ypa, transparent);
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-link-hover-2hfec2, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover-6b9ypa);
  text-decoration: none;
}
.button.variant-breadcrumb-group:active {
  background: var(--awsui-style-background-active-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-active-6b9ypa, transparent);
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-link-default-hude44, #006ce0));
  box-shadow: var(--awsui-style-box-shadow-active-6b9ypa);
}
.button.variant-breadcrumb-group.disabled {
  background: var(--awsui-style-background-disabled-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-disabled-6b9ypa, transparent);
  color: var(--awsui-style-color-disabled-6b9ypa, var(--color-text-interactive-disabled-1bqmrl, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled-6b9ypa);
  text-decoration: none;
  cursor: auto;
}
.button.variant-menu-trigger {
  background: var(--awsui-style-background-default-6b9ypa, transparent);
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-button-normal-default-nzalii, #006ce0));
  border-color: var(--awsui-style-border-color-default-6b9ypa, transparent);
  box-shadow: var(--awsui-style-box-shadow-default-6b9ypa);
  position: relative;
  text-decoration: none;
}
.button.variant-menu-trigger:hover {
  background: var(--awsui-style-background-hover-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-hover-6b9ypa, transparent);
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-button-normal-hover-gusgyv, #002b66));
  box-shadow: var(--awsui-style-box-shadow-hover-6b9ypa);
  text-decoration: none;
}
.button.variant-menu-trigger:active {
  background: var(--awsui-style-background-active-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-active-6b9ypa, transparent);
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-button-normal-active-vihsxh, #002b66));
  box-shadow: var(--awsui-style-box-shadow-active-6b9ypa);
}
.button.variant-menu-trigger.disabled {
  background: var(--awsui-style-background-disabled-6b9ypa, transparent);
  border-color: var(--awsui-style-border-color-disabled-6b9ypa, transparent);
  color: var(--awsui-style-color-disabled-6b9ypa, var(--color-text-interactive-disabled-1bqmrl, #b4b4bb));
  box-shadow: var(--awsui-style-box-shadow-disabled-6b9ypa);
  text-decoration: none;
  cursor: auto;
}
.button:focus {
  outline: none;
  text-decoration: none;
}
:host-context([data-awsui-focus-visible=true]) .button:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .button:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-focus-outline-gutter-jj138g, 4px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .button:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-button-focus-outline-gutter-jj138g, 4px));
  inset-block-start: calc(-1 * var(--space-button-focus-outline-gutter-jj138g, 4px));
  inline-size: calc(100% + var(--space-button-focus-outline-gutter-jj138g, 4px) + var(--space-button-focus-outline-gutter-jj138g, 4px));
  block-size: calc(100% + var(--space-button-focus-outline-gutter-jj138g, 4px) + var(--space-button-focus-outline-gutter-jj138g, 4px));
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow-6b9ypa);
}
:host-context([data-awsui-focus-visible=true]) .button:focus.variant-icon, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-modal-dismiss, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-flashbar-icon {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .button:focus.variant-icon, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-modal-dismiss, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-flashbar-icon {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-focus-outline-gutter-jj138g, 4px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .button:focus.variant-icon::before, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-modal-dismiss::before, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-flashbar-icon::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-button-focus-outline-gutter-jj138g, 4px));
  inset-block-start: calc(-1 * var(--space-button-icon-focus-outline-gutter-vertical-r44mtq, 0px));
  inline-size: calc(100% + var(--space-button-focus-outline-gutter-jj138g, 4px) + var(--space-button-focus-outline-gutter-jj138g, 4px));
  block-size: calc(100% + var(--space-button-icon-focus-outline-gutter-vertical-r44mtq, 0px) + var(--space-button-icon-focus-outline-gutter-vertical-r44mtq, 0px));
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow-6b9ypa);
}
:host-context([data-awsui-focus-visible=true]) .button:focus.variant-inline-icon, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-inline-icon-pointer-target {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .button:focus.variant-inline-icon, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-inline-icon-pointer-target {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-inline-icon-focus-outline-gutter-zbfgku, 0px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .button:focus.variant-inline-icon::before, :host-context([data-awsui-focus-visible=true]) .button:focus.variant-inline-icon-pointer-target::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-button-inline-icon-focus-outline-gutter-zbfgku, 0px));
  inset-block-start: calc(-1 * var(--space-button-inline-icon-focus-outline-gutter-zbfgku, 0px));
  inline-size: calc(100% + var(--space-button-inline-icon-focus-outline-gutter-zbfgku, 0px) + var(--space-button-inline-icon-focus-outline-gutter-zbfgku, 0px));
  block-size: calc(100% + var(--space-button-inline-icon-focus-outline-gutter-zbfgku, 0px) + var(--space-button-inline-icon-focus-outline-gutter-zbfgku, 0px));
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
.button.button-no-text {
  padding-inline-start: var(--space-button-icon-only-horizontal-i85hxi, 6px);
  padding-inline-end: var(--space-button-icon-only-horizontal-i85hxi, 6px);
}
.button.button-no-wrap {
  white-space: nowrap;
}
.button.full-width {
  inline-size: 100%;
  text-align: center;
}
.button.variant-icon, .button.variant-inline-icon, .button.variant-inline-icon-pointer-target, .button.variant-flashbar-icon {
  padding-inline: var(--space-xxs-hwfkai, 4px);
}
.button.variant-modal-dismiss {
  padding-block: var(--space-button-modal-dismiss-vertical-vqfxjd, 2px);
  padding-inline: var(--space-xxs-hwfkai, 4px);
  margin-inline-end: calc(-1 * var(--space-xxs-hwfkai, 4px));
}
.button.variant-inline-icon {
  padding-block: 0;
  border-block-width: 0;
  border-inline-width: 0;
}
.button.variant-inline-icon-pointer-target {
  padding-block: var(--space-xxxs-pajhad, 2px);
  border-block-width: 0;
  border-inline-width: 0;
}
.button > .icon-left {
  position: relative;
  inset-inline-start: calc(-1 * var(--space-xxs-hwfkai, 4px));
  margin-inline-end: var(--space-xxs-hwfkai, 4px);
}
.button > .icon-right {
  position: relative;
  inset-inline-end: calc(-1 * var(--space-xxs-hwfkai, 4px));
  margin-inline-start: var(--space-xxs-hwfkai, 4px);
}
.button.variant-inline-link > .icon-left {
  inset-inline-start: 0;
  margin-inline-end: var(--space-xs-ymlm0b, 8px);
}
.button.variant-inline-link > .icon-right {
  inset-inline-end: 0;
  margin-inline-start: var(--space-xs-ymlm0b, 8px);
}
.button.button-no-text > .icon {
  margin-inline-start: auto;
  margin-inline-end: auto;
  inset-inline: 0;
}

.link.disabled:not(.disabled-with-reason) {
  pointer-events: none;
}
`;

export { componentStyles as buttonStyles };
export { sharedStyles };
