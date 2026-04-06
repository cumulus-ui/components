import { ElementWrapper } from './element-wrapper.js';

export class ComponentWrapper extends ElementWrapper {
  /** Override in subclasses: `static rootSelector = 'cs-button'` */
  static rootSelector = '*';

  findByClass(className: string): ElementWrapper | null {
    return this.find(`.${className}`);
  }

  findByTag(tagName: string): ElementWrapper | null {
    return this.find(tagName);
  }
}
