import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class TilesWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-tiles';

  findTiles(): ElementWrapper[] {
    return this.findAll('.tile-container');
  }

  findNativeInputs(): ElementWrapper[] {
    return this.findAll('.native-input');
  }

  findTileByValue(value: string): ElementWrapper | null {
    const inputs = this.findNativeInputs();
    for (const input of inputs) {
      if ((input.getElement() as HTMLInputElement).value === value) {
        const tile = input.getElement().closest('.tile-container');
        return tile ? new ElementWrapper(tile as HTMLElement) : null;
      }
    }
    return null;
  }

  findLabels(): ElementWrapper[] {
    return this.findAll('.tile-label');
  }

  findDescriptions(): ElementWrapper[] {
    return this.findAll('.tile-description');
  }

  findImages(): ElementWrapper[] {
    return this.findAll('.image');
  }

  getSelectedValue(): string | null {
    const inputs = this.findNativeInputs();
    for (const input of inputs) {
      if ((input.getElement() as HTMLInputElement).checked) {
        return (input.getElement() as HTMLInputElement).value;
      }
    }
    return null;
  }
}
