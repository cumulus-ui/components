// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
import { css } from 'lit';

export const optionStyles = css`
.option {
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
.option:not(.disabled) {
  cursor: inherit;
}
.option.parent {
  font-weight: bold;
}
.option.parent:not(.disabled):not(.highlighted) {
  color: var(--color-text-dropdown-group-label-2tmyik, #424650);
}

.content {
  inline-size: 100%;
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
}

.label-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.label,
.tag,
.label-tag {
  min-inline-size: 0;
  word-break: break-word;
}

.label,
.tag {
  flex-wrap: wrap;
}

.label-prefix {
  font-weight: 700;
}

.label-tag {
  padding-inline-start: var(--space-s-tvghoh, 12px);
  flex: auto;
  text-align: end;
}
.label-tag:empty {
  display: none;
}

.tags,
.description {
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
  color: var(--color-text-dropdown-item-secondary-v12lfh, #656871);
  flex-wrap: wrap;
}
.tags.highlighted,
.description.highlighted {
  color: var(--color-text-dropdown-item-secondary-hover-de15wb, #656871);
}
.tags.selected,
.description.selected {
  color: var(--color-text-dropdown-item-secondary-v12lfh, #656871);
}

.tags {
  display: flex;
  align-items: stretch;
}

.tag:not(:last-child) {
  padding-inline-end: var(--space-m-dsumyt, 16px);
}

.icon {
  padding-inline-end: var(--space-xs-ymlm0b, 8px);
  align-content: center;
  display: flex;
  flex-shrink: 0;
}

.filtering-match-highlight {
  background-color: var(--color-background-dropdown-item-filter-match-49b5vt, #f0fbff);
  color: var(--color-text-dropdown-item-filter-match-ebhvct, #006ce0);
  font-weight: bold;
}

.disabled {
  color: var(--color-text-dropdown-item-disabled-8m65hf, #b4b4bb);
  pointer-events: none;
}
.disabled > .content > .tags,
.disabled > .content > .description {
  color: currentColor;
}

.trigger-variant {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.custom-content {
  inline-size: 100%;
}
`;
