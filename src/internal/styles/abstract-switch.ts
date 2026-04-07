// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const abstractSwitchStyles = css`
.content,
.description,
.label {
  display: block;
}

.label {
  color: var(--color-text-form-default-47mtz6, #0f141a);
}

.outline {
  display: none;
}
.outline.show-outline {
  display: block;
}

:host-context([data-awsui-focus-visible=true]) .native-input:focus + .outline {
  display: block;
}

.wrapper {
  min-inline-size: 0;
  word-break: break-word;
  display: flex;
}

.label-wrapper {
  position: relative;
  display: flex;
  cursor: default;
}

.content {
  min-inline-size: 0;
  word-break: break-word;
}

.empty-content {
  inline-size: 0px;
}

.description {
  color: var(--color-text-form-secondary-1nm780, #656871);
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
}
.description-bottom-padding {
  padding-block-end: var(--space-scaled-xxs-pfm1nx, 4px);
}

.label,
.description {
  padding-inline-start: var(--space-xs-ymlm0b, 8px);
}
.label-disabled,
.description-disabled {
  color: var(--color-text-control-disabled-upk9lz, #b4b4bb);
}

.control {
  position: relative;


}
.control > input, .control > svg, .control > .outline {
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  inset-block-start: 0;
  inset-inline-start: 0;
}
.control > input {
  opacity: 0;
  z-index: 1;
  -webkit-user-select: none;
          user-select: none;
  cursor: default;
  margin-block: 0;
  margin-inline: 0;
}
`;
