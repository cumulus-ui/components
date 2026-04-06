import { CsBadgeInternal } from './internal.js';

export class CsBadge extends CsBadgeInternal {}

customElements.define('cs-badge', CsBadge);

export type { BadgeProps } from './interfaces.js';
