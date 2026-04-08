// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const columnLayoutFlexibleColumnLayoutStyles = css`
dl.column-layout-flexible-column-layout--css-grid {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

.column-layout-flexible-column-layout--css-grid {
  display: grid;
  gap: var(--space-grid-gutter-whc3jp, 20px);
}
.column-layout-flexible-column-layout--css-grid.column-layout-flexible-column-layout--grid-no-gutters {
  gap: 0;
}
.column-layout-flexible-column-layout--css-grid.column-layout-flexible-column-layout--grid-variant-text-grid > .column-layout-flexible-column-layout--item {
  padding-inline: var(--space-grid-gutter-whc3jp, 20px);
  position: relative;

}
.column-layout-flexible-column-layout--css-grid.column-layout-flexible-column-layout--grid-variant-text-grid > .column-layout-flexible-column-layout--item::before {
  content: "";
  position: absolute;
  inset-block-start: 0;
  inset-block-end: 0;
  inset-inline-start: 0;
  border-inline-start: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-divider-default-nr68jt, #c6c6cd);
  transform: translateX(calc(-0.5 * var(--space-grid-gutter-whc3jp, 20px)));
}
.column-layout-flexible-column-layout--css-grid.column-layout-flexible-column-layout--grid-variant-text-grid > .column-layout-flexible-column-layout--item:dir(rtl)::before {
  transform: translateX(calc(0.5 * var(--space-grid-gutter-whc3jp, 20px)));
}
.column-layout-flexible-column-layout--css-grid.column-layout-flexible-column-layout--grid-variant-text-grid > .column-layout-flexible-column-layout--item.column-layout-flexible-column-layout--first-column {
  padding-inline-start: 0;
}
.column-layout-flexible-column-layout--css-grid.column-layout-flexible-column-layout--grid-variant-text-grid > .column-layout-flexible-column-layout--item.column-layout-flexible-column-layout--first-column::before {
  display: none;
}
`;
