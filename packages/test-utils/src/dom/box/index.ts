import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class BoxWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-box';

  findContent(): ElementWrapper | null {
    return this.find('.box');
  }
}
