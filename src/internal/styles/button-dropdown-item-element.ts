// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const buttonDropdownItemElementStyles = css`
.button-dropdown-item-element--item-element {
  position: relative;
  z-index: 1;
  border-block: var(--border-item-width-miijiw, 2px) solid transparent;
  border-inline: var(--border-item-width-miijiw, 2px) solid transparent;
  list-style: none;
  padding-block: 0;
  padding-inline: 0;
  color: var(--color-text-dropdown-item-default-f1jr9u, #0f141a);
  margin-block-start: calc(-1 * var(--border-width-dropdown-youcay, 2px));
  cursor: pointer;
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--no-content-styling {
  padding-block: 0;
  padding-inline: 0;
  color: var(--color-text-dropdown-item-default-f1jr9u, #0f141a);
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--disabled {
  cursor: default;
  color: var(--color-text-dropdown-item-disabled-8m65hf, #b4b4bb);
}
.button-dropdown-item-element--item-element:first-child {
  margin-block-start: 0;
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--show-divider {
  border-block-end: var(--border-item-width-miijiw, 2px) solid var(--color-border-dropdown-group-ylcnh8, #c6c6cd);
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--highlighted {
  color: var(--color-text-dropdown-item-highlighted-yr1px8, #0f141a);
  z-index: 2;
  background-color: var(--color-background-dropdown-item-hover-yunepc, #f3f3f7);
  border-color: var(--color-border-dropdown-item-hover-aqfuxq, #8c8c94);
  border-start-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-start-end-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-start-radius: var(--border-radius-item-iwaia5, 8px);
  border-end-end-radius: var(--border-radius-item-iwaia5, 8px);
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--highlighted.button-dropdown-item-element--disabled {
  color: var(--color-text-dropdown-item-dimmed-tq8vh3, #b4b4bb);
  border-color: var(--color-border-dropdown-item-dimmed-hover-ga9sch, #8c8c94);
  background-color: var(--color-background-dropdown-item-dimmed-dhho03, transparent);
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--highlighted.button-dropdown-item-element--is-focused {
  border-color: var(--color-border-dropdown-item-focused-zacqlp, #424650);
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--highlighted.button-dropdown-item-element--is-focused:not(.button-dropdown-item-element--visual-refresh) {
  box-shadow: inset 0 0 0 var(--border-control-focus-ring-shadow-spread-9mjajk, 1px) var(--color-border-item-focused-uk47pl, #006ce0);
}

.button-dropdown-item-element--menu-item {
  min-inline-size: 0;
  word-break: break-word;
  display: flex;
  align-items: flex-start;
  padding-block: var(--space-xxs-hwfkai, 4px);
  padding-inline: var(--space-l-2ud1p3, 20px);
  color: inherit;
  text-decoration: none;


}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--no-content-styling {
  padding-block: 0;
  padding-inline: 0;
  color: var(--color-text-dropdown-item-default-f1jr9u, #0f141a);
}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style {
  padding-block-end: calc(var(--space-xxs-hwfkai, 4px) + var(--space-xxxs-pajhad, 2px));
  text-underline-offset: 0.25em;
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
  .button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style, .awsui-mode-entering .button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style {
  animation: none;
  transition: none;
}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-link-hover-2hfec2, #002b66));
}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style:focus {
  outline: none;
}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style:active {
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-link-hover-2hfec2, #002b66));
}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style:active, .button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style:focus, .button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style:hover {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style.button-dropdown-item-element--current-breadcrumb {
  font-weight: var(--font-weight-button-0eg20c, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
  color: var(--color-text-breadcrumb-current-2mqnkk, #656871);
  font-weight: 700;
  text-decoration: none;
}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style.button-dropdown-item-element--link-style-highlighted {
  color: var(--color-text-link-hover-2hfec2, #002b66);
}
.button-dropdown-item-element--menu-item:focus {
  outline: none;
}
.button-dropdown-item-element--has-category-header > .button-dropdown-item-element--menu-item, .button-dropdown-item-element--has-category-header > .button-dropdown-item-element--item-tooltip-wrapper > .button-dropdown-item-element--menu-item, .button-dropdown-item-element--has-category-header:not(.button-dropdown-item-element--has-checkmark) > span > .button-dropdown-item-element--menu-item {
  padding-inline-start: calc(var(--space-xs-ymlm0b, 8px) + var(--space-l-2ud1p3, 20px));
}
.button-dropdown-item-element--has-category-header > .button-dropdown-item-element--menu-item.button-dropdown-item-element--no-content-styling, .button-dropdown-item-element--has-category-header > .button-dropdown-item-element--item-tooltip-wrapper > .button-dropdown-item-element--menu-item.button-dropdown-item-element--no-content-styling, .button-dropdown-item-element--has-category-header:not(.button-dropdown-item-element--has-checkmark) > span > .button-dropdown-item-element--menu-item.button-dropdown-item-element--no-content-styling {
  padding-inline-start: 0;
}

.button-dropdown-item-element--icon {
  padding-inline-end: var(--space-xxs-hwfkai, 4px);
  flex-shrink: 0;
}
.button-dropdown-item-element--icon.button-dropdown-item-element--checkmark {
  color: var(--color-item-selected-72rnwy, #006ce0);
}
.button-dropdown-item-element--icon.button-dropdown-item-element--disabled {
  color: var(--color-text-interactive-disabled-1bqmrl, #b4b4bb);
}

.button-dropdown-item-element--external-icon {
  margin-inline-start: var(--space-xxs-hwfkai, 4px);
}

.button-dropdown-item-element--content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.button-dropdown-item-element--main-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-s-tvghoh, 12px);
}

.button-dropdown-item-element--label-tag {
  color: var(--color-text-body-default-vvtq8u, #0f141a);
}
.button-dropdown-item-element--label-tag.button-dropdown-item-element--disabled {
  color: var(--color-text-interactive-disabled-1bqmrl, #b4b4bb);
}

.button-dropdown-item-element--secondary-text {
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
  color: var(--color-text-dropdown-item-secondary-v12lfh, #656871);
}
.button-dropdown-item-element--secondary-text.button-dropdown-item-element--highlighted {
  color: var(--color-text-dropdown-item-highlighted-yr1px8, #0f141a);
}
.button-dropdown-item-element--secondary-text.button-dropdown-item-element--disabled {
  color: var(--color-text-interactive-disabled-1bqmrl, #b4b4bb);
}
`;
