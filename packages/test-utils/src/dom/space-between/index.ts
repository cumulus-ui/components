import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class SpaceBetweenWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-space-between';

  findContainer(): ElementWrapper | null {
    return this.find('.root');
  }
}
