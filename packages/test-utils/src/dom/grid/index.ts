import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class GridWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-grid';

  findGrid(): ElementWrapper | null {
    return this.find('.grid');
  }

  findColumns(): ElementWrapper[] {
    return this.findAll('.grid > *');
  }
}
