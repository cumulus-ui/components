import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class RadioGroupWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-radio-group';

  findItems(): ElementWrapper[] {
    return this.findAll('.radio');
  }

  findNativeInputs(): ElementWrapper[] {
    return this.findAll('.native-input');
  }

  findItemByValue(value: string): ElementWrapper | null {
    const inputs = this.findNativeInputs();
    for (const input of inputs) {
      if ((input.getElement() as HTMLInputElement).value === value) {
        const label = input.getElement().closest('.radio');
        return label ? new ElementWrapper(label as HTMLElement) : null;
      }
    }
    return null;
  }

  findLabels(): ElementWrapper[] {
    return this.findAll('.radio-label');
  }

  findDescriptions(): ElementWrapper[] {
    return this.findAll('.radio-description');
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
