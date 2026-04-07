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

.anchor-list {
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  position: relative;
  text-indent: 0;
}
.anchor-list::before {
  content: "";
  background-color: var(--color-border-divider-default-nr68jt, #c6c6cd);
  border-start-start-radius: var(--border-radius-tabs-focus-ring-o4qku1, 20px);
  border-start-end-radius: var(--border-radius-tabs-focus-ring-o4qku1, 20px);
  border-end-start-radius: var(--border-radius-tabs-focus-ring-o4qku1, 20px);
  border-end-end-radius: var(--border-radius-tabs-focus-ring-o4qku1, 20px);
  inset-block-end: -2px;
  pointer-events: none;
  position: absolute;
  inset-block-start: -2px;
  inline-size: 2px;
}

.anchor-item {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-secondary-yna5sb, #424650);
  font-weight: 400;
  margin-block: var(--space-scaled-xxs-pfm1nx, 4px);
  margin-inline: 0;
  transition: var(--motion-duration-slow-zji5vl, 180ms);
  transition-property: all;
}
@media (prefers-reduced-motion: reduce) {
  .anchor-item {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .anchor-item, .awsui-mode-entering .anchor-item {
  animation: none;
  transition: none;
}
.anchor-item--active {
  position: relative;
}
.anchor-item--active::before {
  content: "";
  background-color: var(--color-text-accent-n1kmht, #006ce0);
  border-start-start-radius: var(--border-radius-tabs-focus-ring-o4qku1, 20px);
  border-start-end-radius: var(--border-radius-tabs-focus-ring-o4qku1, 20px);
  border-end-start-radius: var(--border-radius-tabs-focus-ring-o4qku1, 20px);
  border-end-end-radius: var(--border-radius-tabs-focus-ring-o4qku1, 20px);
  inset-block-end: -2px;
  pointer-events: none;
  position: absolute;
  inset-block-start: -2px;
  inline-size: 2px;
}

.anchor-link {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  align-items: baseline;
  color: var(--color-text-body-secondary-yna5sb, #424650);
  display: flex;
  flex-direction: row;
  font-weight: 400;
  text-decoration: none;
  transition: var(--motion-duration-slow-zji5vl, 180ms);
  transition-property: all;
}
@media (prefers-reduced-motion: reduce) {
  .anchor-link {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .anchor-link, .awsui-mode-entering .anchor-link {
  animation: none;
  transition: none;
}
:host-context([data-awsui-focus-visible=true]) .anchor-link:focus {
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
.anchor-link:hover {
  color: var(--color-text-accent-n1kmht, #006ce0);
}
.anchor-link:focus {
  outline: none;
}
.anchor-link:hover, .anchor-link:focus {
  text-decoration: none;
}
.anchor-link--active {
  font-weight: var(--font-wayfinding-link-active-weight-ny4hup, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
  color: var(--color-text-accent-n1kmht, #006ce0);
}

.anchor-link-text {
  display: block;
}

.anchor-link-info {
  margin-inline-start: var(--space-xs-ymlm0b, 8px);
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
  font-weight: 700;
  letter-spacing: 0.005em;
  color: var(--color-text-link-default-hude44, #006ce0);
}
`;

export { componentStyles as anchorNavigationStyles };
export { sharedStyles };
