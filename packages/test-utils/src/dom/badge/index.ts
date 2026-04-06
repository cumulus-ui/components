import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class BadgeWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-badge';

  findBadge(): ElementWrapper | null {
    return this.find('.badge');
  }

  getColor(): string | null {
    return this.getElement().getAttribute('color');
  }
}
