import { CsAnnotationContextInternal } from './internal.js';

export class CsAnnotationContext extends CsAnnotationContextInternal {}

customElements.define('cs-annotation-context', CsAnnotationContext);

export type { AnnotationContextProps } from './interfaces.js';
export { annotationContext, type AnnotationContextValue } from './internal.js';
