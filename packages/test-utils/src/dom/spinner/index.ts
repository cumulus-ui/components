import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class SpinnerWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-spinner';

  findCircle(): ElementWrapper | null {
    return this.find('.circle');
  }

  getSize(): string | null {
    return this.getElement().getAttribute('size');
  }

  getVariant(): string | null {
    return this.getElement().getAttribute('variant');
  }
}
