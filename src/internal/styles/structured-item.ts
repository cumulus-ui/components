// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const structuredItemStyles = css`
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
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  column-gap: var(--space-xs-ymlm0b, 8px);
}
.root.disable-paddings {
  column-gap: 0;
}

.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
}

.content-wrap {
  flex-grow: 1;
  display: flex;
  align-items: baseline;
  flex-direction: row;
  column-gap: var(--space-xs-ymlm0b, 8px);
}
.disable-paddings > .main > .content-wrap {
  column-gap: 0;
}
.content-wrap.wrap-actions {
  flex-wrap: wrap;
}

.content {
  flex-grow: 1;
  min-inline-size: 0;
}

.actions {
  flex-shrink: 0;
  margin-inline-start: auto;
}
`;
