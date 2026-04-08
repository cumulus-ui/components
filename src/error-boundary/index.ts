import { CsErrorBoundaryInternal } from './internal.js';

export class CsErrorBoundary extends CsErrorBoundaryInternal {}

customElements.define('cs-error-boundary', CsErrorBoundary);

export type { ErrorBoundaryProps } from './interfaces.js';
