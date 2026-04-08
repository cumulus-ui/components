// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  word-wrap: break-word;
  position: relative;
}
.root.fit-height {
  display: flex;
  flex-direction: column;
  block-size: 100%;
}
.root.fit-height.with-side-media {
  flex-direction: row;
}
.root.variant-default, .root.variant-stacked {
  background-color: var(--color-background-container-content, #ffffff);
  border-start-start-radius: var(--border-radius-container, 16px);
  border-start-end-radius: var(--border-radius-container, 16px);
  border-end-start-radius: var(--border-radius-container, 16px);
  border-end-end-radius: var(--border-radius-container, 16px);
  box-sizing: border-box;
}
.root.variant-default.refresh, .root.variant-stacked.refresh {
  border-block: solid var(--border-divider-section-width, 1px) var(--color-border-divider-default, #c6c6cd);
  border-inline: solid var(--border-divider-section-width, 1px) var(--color-border-divider-default, #c6c6cd);
}
.root.variant-default:not(.refresh)::before, .root.variant-stacked:not(.refresh)::before {
  content: "";
  position: absolute;
  inset-inline-start: 0px;
  inset-block-start: 0px;
  inline-size: 100%;
  block-size: 100%;
  pointer-events: none;
  background: transparent;
  box-sizing: border-box;
  border-color: transparent;
  border-block-start: var(--border-container-top-width, 0px) solid var(--color-border-container-top, transparent);
  border-start-start-radius: var(--border-radius-container, 16px);
  border-start-end-radius: var(--border-radius-container, 16px);
  border-end-start-radius: var(--border-radius-container, 16px);
  border-end-end-radius: var(--border-radius-container, 16px);
  z-index: 1;
}
.root.variant-default:not(.refresh)::after, .root.variant-stacked:not(.refresh)::after {
  content: "";
  position: absolute;
  inset-inline-start: 0px;
  inset-block-start: 0px;
  inline-size: 100%;
  block-size: 100%;
  pointer-events: none;
  background: transparent;
  box-sizing: border-box;
  border-start-start-radius: var(--border-radius-container, 16px);
  border-start-end-radius: var(--border-radius-container, 16px);
  border-end-start-radius: var(--border-radius-container, 16px);
  border-end-end-radius: var(--border-radius-container, 16px);
  box-shadow: var(--shadow-container, 0px 0px 1px 1px #e9ebed, 0px 1px 8px 2px rgba(0, 7, 22, 0.12));
}
.root.variant-stacked:not(:last-child), .root.variant-stacked:not(:last-child)::before, .root.variant-stacked:not(:last-child)::after {
  border-end-end-radius: 0;
  border-end-start-radius: 0;
  border-block-end-width: 0;
}
.root.variant-stacked + .root.variant-stacked, .root.variant-stacked + .root.variant-stacked::before, .root.variant-stacked + .root.variant-stacked::after {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
}
.root.variant-stacked + .root.variant-stacked:not(.refresh)::before {
  border-block-start: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
}
.root.sticky-enabled:not(.refresh)::before {
  inset-block-start: calc(-1 * var(--border-container-top-width, 0px));
}
.root.sticky-enabled:not(.refresh).variant-stacked::before {
  inset-block-start: calc(-1 * var(--border-divider-section-width, 1px));
}
.root.with-stuck-sticky-header-at-bottom {
  border-end-end-radius: 0;
  border-end-start-radius: 0;
}

.with-side-media {
  display: flex;
  flex-direction: row;
}

.with-top-media {
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  inline-size: 100%;
}
.content-wrapper-fit-height {
  block-size: 100%;
  overflow: hidden;
  border-end-start-radius: var(--border-radius-container, 16px);
  border-end-end-radius: var(--border-radius-container, 16px);
}

.media {
  overflow: hidden;
  flex-shrink: 0;
}
.media img,
.media video,
.media picture {
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
  object-position: center;
}
.media iframe {
  inline-size: 100%;
  block-size: 100%;
  border-block: 0;
  border-inline: 0;
}
.media-top {
  max-block-size: 66%;
  border-start-start-radius: calc(var(--border-radius-container, 16px) - 1px);
  border-start-end-radius: calc(var(--border-radius-container, 16px) - 1px);
}
.media-side {
  max-inline-size: 66%;
  border-start-start-radius: calc(var(--border-radius-container, 16px) - 1px);
  border-end-start-radius: calc(var(--border-radius-container, 16px) - 1px);
}

.header {
  background-color: var(--color-background-container-header, #ffffff);
  border-start-start-radius: var(--border-radius-container, 16px);
  border-start-end-radius: var(--border-radius-container, 16px);
}
.header.header-full-page {
  background-color: var(--color-background-layout-main, #ffffff);
}
.header-variant-embedded.refresh:not(.header-sticky-enabled) {
  background-color: transparent;
}
.header.header-with-media {
  background: none;
}
.header.header-with-media:not(:empty) {
  border-block-end: none;
}
.header-sticky-disabled {
  position: relative;
  z-index: 1;
}
.header-sticky-enabled {
  inset-block-start: 0;

  position: sticky;
  z-index: 800;
}
.header-stuck {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
  border-end-start-radius: 0;
  border-end-end-radius: 0;
}
.header-stuck::before {
  border-block: 0;
  border-inline: 0;
}
.header-stuck:not(.header-variant-cards) {
  box-shadow: var(--shadow-sticky-embedded, 0px 2px 0px 0px #e9ebed, 0px 16px 16px -12px rgba(0, 7, 22, 0.1));
}
.header-dynamic-height.header-stuck {
  margin-block-end: calc(var(--line-height-heading-xl, 30px) - var(--line-height-heading-l, 24px));
}
.header:not(:empty) {
  border-block-end: var(--border-container-sticky-width, 0px) solid var(--color-border-container-divider, transparent);
}
.header.with-paddings {
  padding-block-start: var(--space-container-header-top, 12px);
  padding-block-end: var(--space-container-header-bottom, 8px);
  padding-inline: var(--space-container-horizontal, 20px);
}
.header.with-paddings.header-variant-cards {
  padding-block: var(--space-container-header-top, 12px);
  padding-inline: var(--space-container-horizontal, 20px);
}
.header.with-hidden-content {
  border-end-start-radius: var(--border-radius-container, 16px);
  border-end-end-radius: var(--border-radius-container, 16px);
}
.header-variant-cards {
  border-start-start-radius: var(--border-radius-container, 16px);
  border-start-end-radius: var(--border-radius-container, 16px);
  border-end-start-radius: var(--border-radius-container, 16px);
  border-end-end-radius: var(--border-radius-container, 16px);
  box-sizing: border-box;
}
.header-variant-cards.refresh {
  border-block: solid var(--border-divider-section-width, 1px) var(--color-border-divider-default, #c6c6cd);
  border-inline: solid var(--border-divider-section-width, 1px) var(--color-border-divider-default, #c6c6cd);
}
.header-variant-cards:not(.refresh)::before {
  content: "";
  position: absolute;
  inset-inline-start: 0px;
  inset-block-start: 0px;
  inline-size: 100%;
  block-size: 100%;
  pointer-events: none;
  background: transparent;
  box-sizing: border-box;
  border-color: transparent;
  border-block-start: var(--border-container-top-width, 0px) solid var(--color-border-container-top, transparent);
  border-start-start-radius: var(--border-radius-container, 16px);
  border-start-end-radius: var(--border-radius-container, 16px);
  border-end-start-radius: var(--border-radius-container, 16px);
  border-end-end-radius: var(--border-radius-container, 16px);
  z-index: 1;
}
.header-variant-cards:not(.refresh)::after {
  content: "";
  position: absolute;
  inset-inline-start: 0px;
  inset-block-start: 0px;
  inline-size: 100%;
  block-size: 100%;
  pointer-events: none;
  background: transparent;
  box-sizing: border-box;
  border-start-start-radius: var(--border-radius-container, 16px);
  border-start-end-radius: var(--border-radius-container, 16px);
  border-end-start-radius: var(--border-radius-container, 16px);
  border-end-end-radius: var(--border-radius-container, 16px);
  box-shadow: var(--shadow-container, 0px 0px 1px 1px #e9ebed, 0px 1px 8px 2px rgba(0, 7, 22, 0.12));
}
.header-variant-cards:not(.header-sticky-enabled) {
  position: relative;
}
.header-variant-cards.header-stuck::after, .header-variant-cards.header-stuck::before {
  border-block: 0;
  border-inline: 0;
  border-start-start-radius: 0;
  border-start-end-radius: 0;
}
.header-variant-full-page.header-stuck {
  box-shadow: none;
}
.header-variant-full-page.header-stuck > .header-cover {
  background-color: var(--color-background-layout-main, #ffffff);
  inline-size: 100%;
  position: absolute;
  block-size: var(--space-scaled-s, 12px);
  inset-block-start: calc(-1 * var(--space-scaled-s, 12px));
}
.header-variant-full-page.header-stuck::before {
  content: "";
  position: absolute;
  pointer-events: none;
  inset-inline-end: 0;
  inset-inline-start: 0;
  inset-block-end: 0;
  inset-block-start: 0;
  border-block-end: solid var(--border-divider-section-width, 1px) var(--color-border-divider-default, #c6c6cd);
}
.header-variant-full-page.header-stuck::after {
  content: "";
  position: absolute;
  inset: 0;
  box-shadow: var(--shadow-sticky, 0px 4px 8px 1px rgba(0, 7, 22, 0.1));
  clip-path: polygon(-999% 100%, 999% 100%, 999% 999%, -999% 999%);
}

.content {
  flex: 1;
}
.content-fit-height {
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.content-inner {
  flex: 1;
}
.content-inner.with-paddings {
  padding-block: var(--space-scaled-l, 20px);
  padding-inline: var(--space-container-horizontal, 20px);
}
.content-inner.with-paddings.with-header {
  padding-block-start: var(--space-container-content-top, 4px);
}

.footer.with-paddings {
  padding-block: var(--space-scaled-s, 12px);
  padding-inline: var(--space-container-horizontal, 20px);
}
.footer.with-divider {
  border-block-start: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
}
`;

export { componentStyles as containerStyles };
export { sharedStyles };
