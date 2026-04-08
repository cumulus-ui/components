// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.empty-appear {
  animation: awsui_awsui-motion-fade-in_n4qlp_3vim8_1 var(--motion-duration-transition-show-paced-t8d1os, 180ms) var(--motion-easing-transition-show-paced-x2k7uh, ease-out);
}
@keyframes awsui_awsui-motion-fade-in_n4qlp_3vim8_1 {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .empty-appear {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .empty-appear, .awsui-mode-entering .empty-appear {
  animation: none;
  transition: none;
}

.root {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: grid;
  grid-template-rows: min-content;
  gap: var(--space-grid-gutter-whc3jp, 20px);
  align-items: start;
}

.empty {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-empty-tlohug, #656871);
  grid-column: 1/-1;
}

.row {
  display: contents;
}

.divider {
  grid-column: 1/-1;
  border-block-start: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-divider-default-nr68jt, #c6c6cd);
}

.field {
  min-inline-size: 40px;
}

.additional-info {
  color: var(--color-text-form-secondary-1nm780, #656871);
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
  display: block;
  word-wrap: break-word;
  margin-block-start: var(--space-xxs-hwfkai, 4px);

}
.additional-info > a {
  text-underline-offset: 0.3em;
  text-decoration-thickness: 1px;
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-link-default-hude44, #006ce0));
  font-weight: inherit;
  letter-spacing: normal;
  text-decoration-line: underline;
  text-decoration-color: currentColor;
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium-5rbn3k, 165ms);
}
@media (prefers-reduced-motion: reduce) {
  .additional-info > a {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .additional-info > a, .awsui-mode-entering .additional-info > a {
  animation: none;
  transition: none;
}
.additional-info > a:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-link-hover-2hfec2, #002b66));
}
.additional-info > a:focus {
  outline: none;
}
.additional-info > a:active {
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-link-hover-2hfec2, #002b66));
}
.additional-info > a:active, .additional-info > a:focus, .additional-info > a:hover {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}

.add-row {
  grid-column: 1/-1;
}

.remove-button-container {
  display: inline-block;
}

.remove-button-field-padding {
  padding-block-start: calc(var(--space-xxs-hwfkai, 4px) + var(--line-height-body-m-2mh3ke, 20px));
}

.remove-button-own-row {
  justify-self: end;
}
`;

export { componentStyles as attributeEditorStyles };
export { sharedStyles };
