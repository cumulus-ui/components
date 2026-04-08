// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const optionStyles = css`
.option--option {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: flex;
  align-items: flex-start;
  inline-size: 100%;
  min-inline-size: 0;
  box-sizing: border-box;
  color: inherit;
}
.option--option:not(.option--option--disabled) {
  cursor: inherit;
}
.option--option.option--parent {
  font-weight: bold;
}
.option--option.option--parent:not(.option--option--disabled):not(.option--option--highlighted) {
  color: var(--color-text-dropdown-group-label-2tmyik, #424650);
}

.option--option--content {
  inline-size: 100%;
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
}

.option--option--label-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.option--label,
.option--tag,
.option--option--label-tag {
  min-inline-size: 0;
  word-break: break-word;
}

.option--label,
.option--tag {
  flex-wrap: wrap;
}

.option--option--label-prefix {
  font-weight: 700;
}

.option--option--label-tag {
  padding-inline-start: var(--space-s-tvghoh, 12px);
  flex: auto;
  text-align: end;
}
.option--option--label-tag:empty {
  display: none;
}

.option--tags,
.option--option--description {
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
  color: var(--color-text-dropdown-item-secondary-v12lfh, #656871);
  flex-wrap: wrap;
}
.option--tags.option--option--highlighted,
.option--option--description.option--option--highlighted {
  color: var(--color-text-dropdown-item-secondary-hover-de15wb, #656871);
}
.option--tags.option--option--selected,
.option--option--description.option--option--selected {
  color: var(--color-text-dropdown-item-secondary-v12lfh, #656871);
}

.option--tags {
  display: flex;
  align-items: stretch;
}

.option--tag:not(:last-child) {
  padding-inline-end: var(--space-m-dsumyt, 16px);
}

.option--icon {
  padding-inline-end: var(--space-xs-ymlm0b, 8px);
  align-content: center;
  display: flex;
  flex-shrink: 0;
}

.option--option--filtering-match-highlight {
  background-color: var(--color-background-dropdown-item-filter-match-49b5vt, #f0fbff);
  color: var(--color-text-dropdown-item-filter-match-ebhvct, #006ce0);
  font-weight: bold;
}

.option--option--disabled {
  color: var(--color-text-dropdown-item-disabled-8m65hf, #b4b4bb);
  pointer-events: none;
}
.option--option--disabled > .option--option--content > .option--tags,
.option--option--disabled > .option--option--content > .option--option--description {
  color: currentColor;
}

.option--option--trigger-variant {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.option--option--custom-content {
  inline-size: 100%;
}
`;
