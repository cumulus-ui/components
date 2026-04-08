import { CsBreadcrumbGroupInternal } from './internal.js';

export class CsBreadcrumbGroup extends CsBreadcrumbGroupInternal {}

customElements.define('cs-breadcrumb-group', CsBreadcrumbGroup);

export type { BreadcrumbGroupProps } from './interfaces.js';
