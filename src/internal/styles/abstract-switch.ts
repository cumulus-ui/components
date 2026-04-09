// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const abstractSwitchStyles = css`
.abstract-switch--content,
.abstract-switch--description,
.abstract-switch--label {
  display: block;
}

.abstract-switch--label {
  color: var(--color-text-form-default, #0f141a);
}

.abstract-switch--outline {
  display: none;
}
.abstract-switch--outline.abstract-switch--show-outline {
  display: block;
}

:host-context([data-awsui-focus-visible=true]) .abstract-switch--native-input:focus + .abstract-switch--outline {
  display: block;
}

.abstract-switch--wrapper {
  min-inline-size: 0;
  word-break: break-word;
  display: flex;
}

.abstract-switch--label-wrapper {
  position: relative;
  display: flex;
  cursor: default;
}

.abstract-switch--content {
  min-inline-size: 0;
  word-break: break-word;
}

.abstract-switch--empty-content {
  inline-size: 0px;
}

.abstract-switch--description {
  color: var(--color-text-form-secondary, #656871);
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
}
.abstract-switch--description-bottom-padding {
  padding-block-end: var(--space-scaled-xxs, 4px);
}

.abstract-switch--label,
.abstract-switch--description {
  padding-inline-start: var(--space-xs, 8px);
}
.abstract-switch--label-disabled,
.abstract-switch--description-disabled {
  color: var(--color-text-control-disabled, #b4b4bb);
}

.abstract-switch--control {
  position: relative;
  overflow: visible;
}
.abstract-switch--control > input, .abstract-switch--control > svg, .abstract-switch--control > .abstract-switch--outline {
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  inset-block-start: 0;
  inset-inline-start: 0;
}
.abstract-switch--control > input {
  opacity: 0;
  z-index: 1;
  -webkit-user-select: none;
          user-select: none;
  cursor: default;
  margin-block: 0;
  margin-inline: 0;
}
`;
