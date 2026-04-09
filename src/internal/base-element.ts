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
      // Reflect all primitive properties by default — HTML-first library
      if (options?.reflect === undefined) {
        options = { ...options, reflect: true };
      }
    }
    super.createProperty(name, options);
  }
}
