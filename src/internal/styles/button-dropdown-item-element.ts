// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const buttonDropdownItemElementStyles = css`
.button-dropdown-item-element--item-element {
  position: relative;
  z-index: 1;
  border-block: var(--border-item-width, 2px) solid transparent;
  border-inline: var(--border-item-width, 2px) solid transparent;
  list-style: none;
  padding-block: 0;
  padding-inline: 0;
  color: var(--color-text-dropdown-item-default, #0f141a);
  margin-block-start: calc(-1 * var(--border-width-dropdown, 2px));
  cursor: pointer;
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--no-content-styling {
  padding-block: 0;
  padding-inline: 0;
  color: var(--color-text-dropdown-item-default, #0f141a);
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--disabled {
  cursor: default;
  color: var(--color-text-dropdown-item-disabled, #b4b4bb);
}
.button-dropdown-item-element--item-element:first-child {
  margin-block-start: 0;
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--show-divider {
  border-block-end: var(--border-item-width, 2px) solid var(--color-border-dropdown-group, #c6c6cd);
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--highlighted {
  color: var(--color-text-dropdown-item-highlighted, #0f141a);
  z-index: 2;
  background-color: var(--color-background-dropdown-item-hover, #f3f3f7);
  border-color: var(--color-border-dropdown-item-hover, #8c8c94);
  border-start-start-radius: var(--border-radius-item, 8px);
  border-start-end-radius: var(--border-radius-item, 8px);
  border-end-start-radius: var(--border-radius-item, 8px);
  border-end-end-radius: var(--border-radius-item, 8px);
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--highlighted.button-dropdown-item-element--disabled {
  color: var(--color-text-dropdown-item-dimmed, #b4b4bb);
  border-color: var(--color-border-dropdown-item-dimmed-hover, #8c8c94);
  background-color: var(--color-background-dropdown-item-dimmed, transparent);
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--highlighted.button-dropdown-item-element--is-focused {
  border-color: var(--color-border-dropdown-item-focused, #424650);
}
.button-dropdown-item-element--item-element.button-dropdown-item-element--highlighted.button-dropdown-item-element--is-focused:not(.button-dropdown-item-element--visual-refresh) {
  box-shadow: inset 0 0 0 var(--border-control-focus-ring-shadow-spread, 1px) var(--color-border-item-focused, #006ce0);
}

.button-dropdown-item-element--menu-item {
  min-inline-size: 0;
  word-break: break-word;
  display: flex;
  align-items: flex-start;
  padding-block: var(--space-xxs, 4px);
  padding-inline: var(--space-l, 20px);
  color: inherit;
  text-decoration: none;


}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--no-content-styling {
  padding-block: 0;
  padding-inline: 0;
  color: var(--color-text-dropdown-item-default, #0f141a);
}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style {
  padding-block-end: calc(var(--space-xxs, 4px) + var(--space-xxxs, 2px));
  text-underline-offset: 0.25em;
  text-decoration-thickness: 1px;
  color: var(--awsui-style-color-default, var(--color-text-link-default, #006ce0));
  font-weight: inherit;
  letter-spacing: normal;
  text-decoration-line: underline;
  text-decoration-color: currentColor;
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium, 165ms);
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
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style:focus {
  outline: none;
}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style:active, .button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style:focus, .button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style:hover {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style.button-dropdown-item-element--current-breadcrumb {
  font-weight: var(--font-weight-button, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  color: var(--color-text-breadcrumb-current, #656871);
  font-weight: 700;
  text-decoration: none;
}
.button-dropdown-item-element--menu-item.button-dropdown-item-element--link-style.button-dropdown-item-element--link-style-highlighted {
  color: var(--color-text-link-hover, #002b66);
}
.button-dropdown-item-element--menu-item:focus {
  outline: none;
}
.button-dropdown-item-element--has-category-header > .button-dropdown-item-element--menu-item, .button-dropdown-item-element--has-category-header > .button-dropdown-item-element--item-tooltip-wrapper > .button-dropdown-item-element--menu-item, .button-dropdown-item-element--has-category-header:not(.button-dropdown-item-element--has-checkmark) > span > .button-dropdown-item-element--menu-item {
  padding-inline-start: calc(var(--space-xs, 8px) + var(--space-l, 20px));
}
.button-dropdown-item-element--has-category-header > .button-dropdown-item-element--menu-item.button-dropdown-item-element--no-content-styling, .button-dropdown-item-element--has-category-header > .button-dropdown-item-element--item-tooltip-wrapper > .button-dropdown-item-element--menu-item.button-dropdown-item-element--no-content-styling, .button-dropdown-item-element--has-category-header:not(.button-dropdown-item-element--has-checkmark) > span > .button-dropdown-item-element--menu-item.button-dropdown-item-element--no-content-styling {
  padding-inline-start: 0;
}

.button-dropdown-item-element--icon {
  padding-inline-end: var(--space-xxs, 4px);
  flex-shrink: 0;
}
.button-dropdown-item-element--icon.button-dropdown-item-element--checkmark {
  color: var(--color-item-selected, #006ce0);
}
.button-dropdown-item-element--icon.button-dropdown-item-element--disabled {
  color: var(--color-text-interactive-disabled, #b4b4bb);
}

.button-dropdown-item-element--external-icon {
  margin-inline-start: var(--space-xxs, 4px);
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
  gap: var(--space-s, 12px);
}

.button-dropdown-item-element--label-tag {
  color: var(--color-text-body-default, #0f141a);
}
.button-dropdown-item-element--label-tag.button-dropdown-item-element--disabled {
  color: var(--color-text-interactive-disabled, #b4b4bb);
}

.button-dropdown-item-element--secondary-text {
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
  color: var(--color-text-dropdown-item-secondary, #656871);
}
.button-dropdown-item-element--secondary-text.button-dropdown-item-element--highlighted {
  color: var(--color-text-dropdown-item-highlighted, #0f141a);
}
.button-dropdown-item-element--secondary-text.button-dropdown-item-element--disabled {
  color: var(--color-text-interactive-disabled, #b4b4bb);
}
`;
