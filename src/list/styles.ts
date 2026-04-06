// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
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
  list-style: none;
  padding-block: 0;
  padding-inline: 0;
  margin-block: 0;
  margin-inline: 0;
  position: relative;
}

.item:not(:last-child) {
  border-block-end: var(--border-divider-list-width-tdfx1x, 1px) solid var(--color-border-divider-secondary-qoitch, #ebebf0);
}
.item:not(.disable-item-paddings) {
  padding-block: var(--space-scaled-xs-xwoogq, 8px);
}
.item:first-child.disable-paddings {
  padding-block-start: 0;
}
.item:last-child.disable-paddings {
  padding-block-end: 0;
}

.sortable-item {
  display: flex;
  align-items: baseline;
}
.sortable-item:not(.disable-item-paddings) {
  column-gap: var(--space-xxs-hwfkai, 4px);
}
`;

export { componentStyles as listStyles };
export { sharedStyles };
