import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class TextContentWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-text-content';

  findContent(): ElementWrapper | null {
    return this.find('.text-content');
  }
}
