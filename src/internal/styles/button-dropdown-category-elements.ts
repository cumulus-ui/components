// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const buttonDropdownCategoryElementsStyles = css`
.button-dropdown-category-elements--header {
  position: relative;
  margin-block: 0;
  margin-inline: 0;
  color: var(--color-text-dropdown-group-label, #424650);
  border-block: var(--border-divider-list-width, 1px) solid transparent;
  border-inline: var(--border-divider-list-width, 1px) solid transparent;
  border-inline-width: 0;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: calc(var(--space-xxs, 4px) + var(--border-item-width, 2px) - var(--border-divider-list-width, 1px));
  padding-inline: calc(var(--space-button-horizontal, 20px) + var(--border-item-width, 2px));
  z-index: 1;
}
.button-dropdown-category-elements--header.button-dropdown-category-elements--disabled {
  color: var(--color-text-dropdown-item-disabled, #b4b4bb);
  cursor: default;
}
.button-dropdown-category-elements--header.button-dropdown-category-elements--no-content-styling {
  padding-block: calc(var(--border-item-width, 2px) - var(--border-divider-list-width, 1px));
  padding-inline: var(--border-item-width, 2px);
  font-weight: normal;
  color: inherit;
}
.button-dropdown-category-elements--header.button-dropdown-category-elements--expandable-header {
  border-block-start-color: var(--color-border-dropdown-group, #c6c6cd);
  border-block-end-color: var(--color-border-dropdown-group, #c6c6cd);
  cursor: pointer;
}
.button-dropdown-category-elements--header.button-dropdown-category-elements--expandable-header.button-dropdown-category-elements--disabled {
  cursor: default;
}
.button-dropdown-category-elements--header.button-dropdown-category-elements--expandable-header:focus {
  outline: none;
}
.button-dropdown-category-elements--header.button-dropdown-category-elements--expandable-header.button-dropdown-category-elements--rolled-down {
  border-block-end-color: transparent;
}
.button-dropdown-category-elements--header.button-dropdown-category-elements--expandable-header.button-dropdown-category-elements--highlighted {
  background-color: var(--color-background-dropdown-item-hover, #f3f3f7);
  color: var(--color-text-dropdown-item-highlighted, #0f141a);
  padding-block: var(--space-xxs, 4px);
  padding-inline: var(--space-button-horizontal, 20px);
  border-block: var(--border-item-width, 2px) solid var(--color-border-dropdown-item-hover, #8c8c94);
  border-inline: var(--border-item-width, 2px) solid var(--color-border-dropdown-item-hover, #8c8c94);
  border-start-start-radius: var(--border-radius-item, 8px);
  border-start-end-radius: var(--border-radius-item, 8px);
  border-end-start-radius: var(--border-radius-item, 8px);
  border-end-end-radius: var(--border-radius-item, 8px);
  z-index: 2;
}
.button-dropdown-category-elements--header.button-dropdown-category-elements--expandable-header.button-dropdown-category-elements--highlighted.button-dropdown-category-elements--no-content-styling {
  padding-block: 0;
  padding-inline: 0;
  color: inherit;
}
.button-dropdown-category-elements--header.button-dropdown-category-elements--expandable-header.button-dropdown-category-elements--highlighted.button-dropdown-category-elements--disabled {
  background-color: var(--color-background-dropdown-item-dimmed, transparent);
  border-color: var(--color-border-dropdown-item-dimmed-hover, #8c8c94);
  color: var(--color-text-dropdown-item-dimmed, #b4b4bb);
}
.button-dropdown-category-elements--header.button-dropdown-category-elements--expandable-header.button-dropdown-category-elements--highlighted.button-dropdown-category-elements--is-focused {
  border-color: var(--color-border-dropdown-item-focused, #424650);
}
.button-dropdown-category-elements--header.button-dropdown-category-elements--expandable-header.button-dropdown-category-elements--highlighted.button-dropdown-category-elements--is-focused:not(.button-dropdown-category-elements--visual-refresh) {
  box-shadow: inset 0 0 0 var(--border-control-focus-ring-shadow-spread, 1px) var(--color-border-item-focused, #006ce0);
}

.button-dropdown-category-elements--category {
  list-style: none;
  margin-block-start: calc(-1 * var(--border-divider-list-width, 1px));
  padding-block: 0;
  padding-inline: 0;
}
.button-dropdown-category-elements--category:first-child {
  margin-block-start: 0;
}
.button-dropdown-category-elements--category.button-dropdown-category-elements--expandable {
  border-block-start: 0;
}
.button-dropdown-category-elements--category:last-child {
  border-block-end: none;
}
.button-dropdown-category-elements--category.button-dropdown-category-elements--variant-navigation {
  padding-block-start: var(--space-xxs, 4px);
}
.button-dropdown-category-elements--category.button-dropdown-category-elements--variant-navigation.button-dropdown-category-elements--expandable {
  padding-block-start: 0;
}

.button-dropdown-category-elements--expand-icon {
  position: relative;
  inset-inline-end: calc(-1 * var(--space-s, 12px));
  inline-size: var(--space-m, 16px);
  display: inline-block;
  margin-inline-start: auto;
  transition: transform var(--motion-duration-rotate-180, 135ms) var(--motion-easing-rotate-180, cubic-bezier(0.165, 0.84, 0.44, 1));
}
@media (prefers-reduced-motion: reduce) {
  .button-dropdown-category-elements--expand-icon {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .button-dropdown-category-elements--expand-icon, .awsui-mode-entering .button-dropdown-category-elements--expand-icon {
  animation: none;
  transition: none;
}
.button-dropdown-category-elements--expand-icon-up {
  transform: rotate(-180deg);
}
.button-dropdown-category-elements--expand-icon-right {
  transform: rotate(-90deg);

}
.button-dropdown-category-elements--expand-icon-right:dir(rtl) {
  transform: rotate(90deg);
}

.button-dropdown-category-elements--items-list-container {
  padding-block: 0;
  padding-inline: 0;
  margin-block-start: -1px;
  margin-block-end: 0;
  margin-inline: 0;
  overflow-y: auto;
}

.button-dropdown-category-elements--in-dropdown {
  margin-block-end: -1px;
}

.button-dropdown-category-elements--icon-wrapper {
  margin-inline-end: var(--space-xxs, 4px);
}

.button-dropdown-category-elements--header-content {
  display: flex;
  align-items: center;
}
`;
