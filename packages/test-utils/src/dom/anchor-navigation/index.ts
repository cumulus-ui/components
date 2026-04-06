import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class AnchorNavigationWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-anchor-navigation';

  findNav(): ElementWrapper | null {
    return this.find('.root');
  }

  findLinks(): ElementWrapper[] {
    return this.findAll('.anchor-link');
  }

  findActiveLink(): ElementWrapper | null {
    return this.find('.anchor-link--active');
  }
}
