// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.breadcrumb-group {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  margin-block: 0;
  margin-inline: 0;
  padding-block: var(--space-xxs-hwfkai, 4px);
  padding-inline: 0;
}
.breadcrumb-group > .breadcrumb-group-list {
  display: flex;
  align-items: center;
  padding-block: 0;
  padding-inline: 0;
  margin-block: 0;
  margin-inline: 0;
  list-style: none;
  inline-size: 100%;
  flex-wrap: nowrap;
}
.breadcrumb-group > .breadcrumb-group-list.ghost {
  flex-wrap: wrap;
  position: absolute;
  inset-inline-start: -9000px;
}
.breadcrumb-group > .breadcrumb-group-list > .item,
.breadcrumb-group > .breadcrumb-group-list > .ghost-item,
.breadcrumb-group > .breadcrumb-group-list > .ellipsis {
  display: inline-block;
  padding-block: 0;
  padding-inline: 0;
  margin-block: 0;
  margin-inline: 0;
}
.breadcrumb-group > .breadcrumb-group-list > .item:last-child {
  flex-shrink: 1;
  min-inline-size: 0;
}
.breadcrumb-group > .breadcrumb-group-list > .item.hide {
  display: none;
}
.breadcrumb-group > .breadcrumb-group-list > .ellipsis {
  display: none;
}
.breadcrumb-group > .breadcrumb-group-list > .ellipsis.visible {
  display: flex;
  flex-shrink: 0;
}
.breadcrumb-group > .breadcrumb-group-list > .ellipsis > .icon {
  margin-block: 0;
  margin-inline: 10px;
  color: var(--color-text-breadcrumb-icon-9j48ot, #8c8c94);
}

.breadcrumbs-skeleton {
  display: none;
}

.collapsed-button {
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
  color: var(--color-text-interactive-default-ugh9wp, #424650);
  cursor: pointer;
  padding-block: 0;
  padding-inline: 0;
  border-inline: none;
  border-block: none;
  background: none;
  display: flex;
  gap: var(--space-xxs-hwfkai, 4px);
  max-inline-size: 100%;
}
:host-context([data-awsui-focus-visible=true]) .collapsed-button:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .collapsed-button:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-focus-outline-gutter-jj138g, 4px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .collapsed-button:focus::before {
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
.collapsed-button:hover {
  color: var(--color-text-interactive-hover-6naf7i, #0f141a);
}
.collapsed-button > :last-child {
  color: var(--color-text-breadcrumb-current-2mqnkk, #656871);
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.collapsed-button > :last-child:hover {
  color: var(--color-text-interactive-hover-6naf7i, #0f141a);
}

.button-icon {
  transform: rotate(0deg);
  transition: transform var(--motion-duration-rotate-180-cxi9g7, 135ms) var(--motion-easing-rotate-180-7a58rc, cubic-bezier(0.165, 0.84, 0.44, 1));
}
@media (prefers-reduced-motion: reduce) {
  .button-icon {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .button-icon, .awsui-mode-entering .button-icon {
  animation: none;
  transition: none;
}
.button-icon-open {
  transform: rotate(-180deg);
}

.hidden {
  display: none;
}
`;

export { componentStyles as breadcrumbGroupStyles };
export { sharedStyles };
