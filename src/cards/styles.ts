// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
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
}

.header-variant-full-page.header-refresh {
  padding-block-start: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  padding-block-end: calc(var(--space-container-header-bottom-2taq8v, 8px) + var(--space-table-header-tools-full-page-bottom-9m47g6, 4px));
}

.list {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding-block: 0;
  padding-inline: 0;
  list-style: none;
  margin-block: 0;
  margin-inline-start: calc(var(--space-grid-gutter-whc3jp, 20px) * -1);
  margin-inline-end: 0;
}
.list.list-grid-1 > .card {
  inline-size: 100%;
}
.list.list-grid-2 > .card {
  inline-size: 50%;
}
.list.list-grid-3 > .card {
  inline-size: 33.3333333333%;
}
.list.list-grid-4 > .card {
  inline-size: 25%;
}
.list.list-grid-5 > .card {
  inline-size: 20%;
}
.list.list-grid-6 > .card {
  inline-size: 16.6666666667%;
}
.list.list-grid-7 > .card {
  inline-size: 14.2857142857%;
}
.list.list-grid-8 > .card {
  inline-size: 12.5%;
}
.list.list-grid-9 > .card {
  inline-size: 11.1111111111%;
}
.list.list-grid-10 > .card {
  inline-size: 10%;
}
.list.list-grid-11 > .card {
  inline-size: 9.0909090909%;
}
.list.list-grid-12 > .card {
  inline-size: 8.3333333333%;
}
.list.list-grid-13 > .card {
  inline-size: 7.6923076923%;
}
.list.list-grid-14 > .card {
  inline-size: 7.1428571429%;
}
.list.list-grid-15 > .card {
  inline-size: 6.6666666667%;
}
.list.list-grid-16 > .card {
  inline-size: 6.25%;
}
.list.list-grid-17 > .card {
  inline-size: 5.8823529412%;
}
.list.list-grid-18 > .card {
  inline-size: 5.5555555556%;
}
.list.list-grid-19 > .card {
  inline-size: 5.2631578947%;
}
.list.list-grid-20 > .card {
  inline-size: 5%;
}

.selection-control {
  position: absolute;
  box-sizing: border-box;
  inline-size: calc(var(--size-control-adm93y, 16px) + 2 * var(--space-card-horizontal-default-pihe12, 20px));
  inset-block-start: 0;
  inset-inline-end: 0;
  padding-block: var(--space-card-vertical-default-e40tif, 16px);
  padding-inline: var(--space-card-horizontal-default-pihe12, 20px);
}

.loading,
.empty {
  overflow: hidden;
  text-align: center;
  color: var(--color-text-empty-tlohug, #656871);
  margin-block-end: var(--space-scaled-l-sej05l, 20px);
}

.has-header {
  margin-block-start: var(--space-grid-gutter-whc3jp, 20px);
}
.has-header.refresh.header-variant-full-page {
  margin-block-start: var(--space-scaled-s-8ozaad, 12px);
}

.card {
  overflow-wrap: break-word;
  word-wrap: break-word;
  box-sizing: border-box;
  margin-block: 0;
  margin-inline: 0;
  padding-block-start: 0;
  padding-block-end: var(--space-grid-gutter-whc3jp, 20px);
  padding-inline-start: var(--space-grid-gutter-whc3jp, 20px);
  padding-inline-end: 0;
  list-style: none;
}
.card-header {
  font-family: var(--font-family-heading-ugphat, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-m-170yiy, 18px);
  line-height: var(--line-height-heading-m-uoaqdh, 22px);
  letter-spacing: var(--letter-spacing-heading-m-29ewnk, -0.01em);
  font-weight: var(--font-weight-heading-m-zf82dr, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
}
.card-header-inner-selectable {
  inline-size: 90%;
}
.card-selected {
  /* Used in test utils */
}

.section {
  display: inline-block;
  box-sizing: border-box;
  padding-block-end: var(--space-scaled-xs-xwoogq, 8px);
  padding-inline: 0;
  vertical-align: top;
}
.section-header {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  font-weight: var(--font-display-label-weight-zavpeo, 700);
  color: var(--color-text-label-28gfmc, #0f141a);
}

.section:not(:first-child) {
  padding-block-start: var(--space-xs-ymlm0b, 8px);
}

.section:last-child {
  padding-block-end: 0;
}

.footer-pagination {
  display: flex;
  justify-content: flex-end;
}
`;

export { componentStyles as cardsStyles };
export { sharedStyles };
