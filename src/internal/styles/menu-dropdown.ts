// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
import { css } from 'lit';

export const menuDropdownStyles = css`
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
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  white-space: nowrap;
  block-size: 100%;
  padding-inline: var(--space-xs-ymlm0b, 8px);
  text-decoration: none;
  cursor: pointer;
  border-block: transparent;
  border-inline: transparent;
  background: transparent;
  color: var(--color-text-interactive-default-ugh9wp, #424650);
}
.button:hover {
  color: var(--color-text-interactive-hover-6naf7i, #0f141a);
  text-decoration: none;
}
.button:active, .button.expanded {
  background: transparent;
  color: var(--color-text-interactive-active-uoe6zi, #0f141a);
}
.button.expanded {
  color: var(--color-text-accent-n1kmht, #006ce0);
}
.button:focus {
  outline: none;
  text-decoration: none;
}
.button.offset-right-none {
  margin-inline-end: 0;
}
.button.offset-right-l {
  margin-inline-end: var(--space-s-tvghoh, 12px);
}
.button.offset-right-xxl {
  margin-inline-end: var(--space-xl-jfy3x4, 24px);
}
:host-context([data-awsui-focus-visible=true]) .button:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .button:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(-1px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .button:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * -1px);
  inset-block-start: calc(-1 * -1px);
  inline-size: calc(100% + -1px + -1px);
  block-size: calc(100% + -1px + -1px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}

.text {
  margin-inline-end: var(--space-xs-ymlm0b, 8px);
}

.icon + .text {
  margin-inline-start: var(--space-xs-ymlm0b, 8px);
}
`;
