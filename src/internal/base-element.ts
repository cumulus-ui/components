import { LitElement } from 'lit';
import type { PropertyDeclaration } from 'lit';

export class CsBaseElement extends LitElement {
  static createProperty(name: PropertyKey, options?: PropertyDeclaration): void {
    if (typeof name === 'string' && options?.attribute !== false && !options?.attribute) {
      const kebab = name.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);
      if (kebab !== name) {
        options = { ...options, attribute: kebab };
      }
    }
    super.createProperty(name, options);
  }
}
