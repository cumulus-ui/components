import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class IconWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-icon';

  findSvg(): ElementWrapper | null {
    return this.find('svg');
  }

  findImg(): ElementWrapper | null {
    return this.find('img');
  }

  findInnerSpan(): ElementWrapper | null {
    return this.find('.icon');
  }
}
