import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class LiveRegionWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-live-region';

  findLiveRegion(): ElementWrapper | null {
    return this.find('[aria-live]');
  }

  isAssertive(): boolean {
    return this.getElement().hasAttribute('assertive');
  }

  isHidden(): boolean {
    return this.getElement().hasAttribute('hidden');
  }
}
