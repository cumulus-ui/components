import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class ListWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-list';

  findItems(): ElementWrapper[] {
    return this.findAll('.item');
  }

  findItemByIndex(index: number): ElementWrapper | null {
    const items = this.findItems();
    return items[index] ?? null;
  }

  findItemContent(item: ElementWrapper): ElementWrapper | null {
    return item.find('.item-primary');
  }

  findItemSecondaryContent(item: ElementWrapper): ElementWrapper | null {
    return item.find('.item-secondary');
  }

  findItemIcon(item: ElementWrapper): ElementWrapper | null {
    return item.find('.item-icon');
  }

  findItemActions(item: ElementWrapper): ElementWrapper | null {
    return item.find('.item-actions');
  }
}
