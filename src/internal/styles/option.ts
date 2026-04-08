// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const optionStyles = css`
.option--option {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: flex;
  align-items: flex-start;
  inline-size: 100%;
  min-inline-size: 0;
  box-sizing: border-box;
  color: inherit;
}
.option--option:not(.option--disabled) {
  cursor: inherit;
}
.option--option.option--parent {
  font-weight: bold;
}
.option--option.option--parent:not(.option--disabled):not(.option--highlighted) {
  color: var(--color-text-dropdown-group-label, #424650);
}

.option--content {
  inline-size: 100%;
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
}

.option--label-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.option--label,
.option--tag,
.option--label-tag {
  min-inline-size: 0;
  word-break: break-word;
}

.option--label,
.option--tag {
  flex-wrap: wrap;
}

.option--label-prefix {
  font-weight: 700;
}

.option--label-tag {
  padding-inline-start: var(--space-s, 12px);
  flex: auto;
  text-align: end;
}
.option--label-tag:empty {
  display: none;
}

.option--tags,
.option--description {
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
  color: var(--color-text-dropdown-item-secondary, #656871);
  flex-wrap: wrap;
}
.option--tags.option--highlighted,
.option--description.option--highlighted {
  color: var(--color-text-dropdown-item-secondary-hover, #656871);
}
.option--tags.option--selected,
.option--description.option--selected {
  color: var(--color-text-dropdown-item-secondary, #656871);
}

.option--tags {
  display: flex;
  align-items: stretch;
}

.option--tag:not(:last-child) {
  padding-inline-end: var(--space-m, 16px);
}

.option--icon {
  padding-inline-end: var(--space-xs, 8px);
  align-content: center;
  display: flex;
  flex-shrink: 0;
}

.option--filtering-match-highlight {
  background-color: var(--color-background-dropdown-item-filter-match, #f0fbff);
  color: var(--color-text-dropdown-item-filter-match, #006ce0);
  font-weight: bold;
}

.option--disabled {
  color: var(--color-text-dropdown-item-disabled, #b4b4bb);
  pointer-events: none;
}
.option--disabled > .option--content > .option--tags,
.option--disabled > .option--content > .option--description {
  color: currentColor;
}

.option--trigger-variant {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.option--custom-content {
  inline-size: 100%;
}
`;
