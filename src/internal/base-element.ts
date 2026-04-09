import { LitElement } from 'lit';
import type { PropertyDeclaration } from 'lit';

export class CsBaseElement extends LitElement {
  static createProperty(name: PropertyKey, options?: PropertyDeclaration): void {
    if (typeof name === 'string' && options?.attribute !== false) {
      // Auto-kebab camelCase property names to HTML attributes
      if (!options?.attribute) {
        const kebab = name.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);
        if (kebab !== name) {
          options = { ...options, attribute: kebab };
        }
      }
      // Reflect non-empty values to attributes for SSR
      if (options?.reflect === undefined) {
        const isStringType = !options?.type || options.type === String;
        if (isStringType && !options?.converter) {
          options = {
            ...options,
            reflect: true,
            converter: {
              fromAttribute: (value: string | null) => value ?? '',
              toAttribute: (value: unknown) => (value === '' || value == null) ? null : String(value),
            },
          };
        } else {
          options = { ...options, reflect: true };
        }
      }
    }
    super.createProperty(name, options);
  }
}
