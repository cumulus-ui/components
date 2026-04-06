import type { SelectorWrapper } from '../index.js';
import { createWrapper } from '../index.js';

export const AnchorNavigationSelectors = {
  root: 'cs-anchor-navigation',
  nav: '.root',
  list: '.anchor-list',
  link: '.anchor-link',
  activeLink: '.anchor-link--active',
  info: '.anchor-link-info',
} as const;

export function createAnchorNavigationWrapper(): SelectorWrapper {
  return createWrapper(AnchorNavigationSelectors.root);
}
