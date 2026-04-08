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
  min-inline-size: 0;
  word-break: break-word;
}
.root > .list {
  list-style: none;
  padding-inline-start: 0;
  margin-block: 0;
}
.root > .list > .container {
  display: grid;
  grid-template-columns: var(--space-static-l-n53k41, 20px) 1fr;
  grid-template-rows: minmax(var(--space-static-l-n53k41, 20px), auto);
}
.root > .list > .container > .header {
  display: flex;
  gap: var(--space-xxs-hwfkai, 4px);
  grid-row: 1;
  grid-column: 1/span 2;
}
.root > .list > .container > .details {
  align-items: center;
  grid-row: 2;
  grid-column: 2;
  margin-block-end: var(--space-static-xs-gnm0mz, 8px);
}
.root > .list > .container > .connector {
  grid-row: 2;
  grid-column: 1;
  background-color: var(--color-border-divider-default-nr68jt, #c6c6cd);
  margin-block: 0;
  border-block: 0;
  border-inline: 0;
  inline-size: var(--border-divider-list-width-tdfx1x, 1px);
  block-size: auto;
  min-block-size: var(--space-static-xs-gnm0mz, 8px);
  position: relative;
  inset-inline-end: var(--space-static-xxxs-yidks1, 2px);
}
.root > .list > :last-of-type > .connector {
  display: none;
}
.root > .list.custom > .details {
  margin-block-end: 0;
}

.horizontal > .list {
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-auto-flow: column;
}
.horizontal > .list > .container {
  display: grid;
  grid-template-columns: var(--space-static-l-n53k41, 20px) 1fr;
  grid-template-rows: minmax(var(--space-static-l-n53k41, 20px), auto);
  align-items: center;
}
.horizontal > .list > .container > .header {
  display: flex;
  grid-row: 1;
  grid-column: 1/span 2;
  align-items: center;
}
.horizontal > .list > .container > .header > .connector {
  display: block;
  flex: 1;
  background-color: var(--color-border-divider-default-nr68jt, #c6c6cd);
  margin-block: 0;
  border-block: 0;
  border-inline: 0;
  min-block-size: 0;
  inset-inline-end: 0;
  block-size: var(--border-divider-list-width-tdfx1x, 1px);
  inline-size: auto;
  min-inline-size: var(--space-static-xs-gnm0mz, 8px);
  margin-inline-end: var(--space-static-xxs-ns94dp, 4px);
}
.horizontal > .list > .container > .horizontal-header {
  grid-row: 2;
  grid-column: 1/span 3;
  padding-inline-end: var(--space-xs-ymlm0b, 8px);
}
.horizontal > .list > .container > .details {
  grid-row: 3;
  grid-column: 1/span 3;
  padding-inline-end: var(--space-xs-ymlm0b, 8px);
}
.horizontal > .list > .container:last-child > .header > .connector {
  display: none;
}
`;

export { componentStyles as stepsStyles };
export { sharedStyles };
