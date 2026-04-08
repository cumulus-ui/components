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
}

.outline {
  --awsui-style-focus-ring-box-shadow-6b9ypa: 0 0 0 var(--awsui-style-focus-ring-border-width-6b9ypa, 2px) var(--awsui-style-focus-ring-border-color-6b9ypa, var(--color-border-item-focused-uk47pl, #006ce0));
  position: relative;
}
.outline {
  outline: 2px dotted transparent;
  outline-offset: calc(2px - 1px);
}
.outline::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 2px);
  inset-block-start: calc(-1 * 2px);
  inline-size: calc(100% + 2px + 2px);
  block-size: calc(100% + 2px + 2px);
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow-6b9ypa);
}

.toggle-control {
  forced-color-adjust: none;
  margin-block-start: calc((var(--line-height-body-m-2mh3ke, 20px) - 16px) / 2);
  min-block-size: 16px;
  min-inline-size: 24px;
  block-size: 16px;
  inline-size: 24px;
  background: var(--color-background-toggle-default-kjlhv0, #424650);
  border-start-start-radius: 8px;
  border-start-end-radius: 8px;
  border-end-start-radius: 8px;
  border-end-end-radius: 8px;
}
.toggle-control-checked {
  background: var(--color-background-control-checked-ka7kc2, #006ce0);
}
.toggle-control-disabled {
  background: var(--color-background-control-disabled-1f3718, #dedee3);
}
.toggle-control-disabled.toggle-control-checked {
  background: var(--color-background-toggle-checked-disabled-amxc0a, #b8e7ff);
}
.toggle-control-readonly {
  background: var(--color-background-control-disabled-1f3718, #dedee3);
}

.toggle-handle {
  display: block;
  position: absolute;
  border-start-start-radius: 6px;
  border-start-end-radius: 6px;
  border-end-start-radius: 6px;
  border-end-end-radius: 6px;
  background: var(--color-foreground-control-default-eto4wy, #ffffff);
  box-shadow: 1px 1px rgba(0, 0, 0, 0.25);
  inline-size: 12px;
  block-size: 12px;
  inset-block-start: 2px;
  inset-inline-start: 2px;
  transition: transform var(--motion-duration-fast-unntf6, 90ms) var(--motion-easing-ease-out-quart-p9axhm, cubic-bezier(0.165, 0.84, 0.44, 1)), background-color var(--motion-duration-fast-unntf6, 90ms) var(--motion-easing-ease-out-quart-p9axhm, cubic-bezier(0.165, 0.84, 0.44, 1));
}
@media (prefers-reduced-motion: reduce) {
  .toggle-handle {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .toggle-handle, .awsui-mode-entering .toggle-handle {
  animation: none;
  transition: none;
}
.toggle-handle-checked {
  transform: translateX(8px);

}
.toggle-handle-checked:dir(rtl) {
  transform: translateX(-8px);
}
.toggle-handle-disabled {
  background: var(--color-foreground-control-disabled-txi6cf, #ffffff);
  box-shadow: none;
}
.toggle-handle-readonly:not(.toggle-handle-disabled) {
  box-shadow: none;
}
.toggle-handle-readonly:not(.toggle-handle-disabled).toggle-handle-checked {
  background: var(--color-foreground-control-read-only-7ydvuj, #656871);
}
`;

export { componentStyles as toggleStyles };
export { sharedStyles };
