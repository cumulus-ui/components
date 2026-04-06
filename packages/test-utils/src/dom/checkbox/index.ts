import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class CheckboxWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-checkbox';

  findNativeInput(): ElementWrapper | null {
    return this.find('.native-input');
  }

  findLabel(): ElementWrapper | null {
    return this.find('.label');
  }

  findDescription(): ElementWrapper | null {
    return this.find('.description');
  }

  isChecked(): boolean {
    const input = this.findNativeInput();
    if (!input) return false;
    return (input.getElement() as HTMLInputElement).checked;
  }

  isIndeterminate(): boolean {
    const input = this.findNativeInput();
    if (!input) return false;
    return (input.getElement() as HTMLInputElement).indeterminate;
  }

  isDisabled(): boolean {
    const input = this.findNativeInput();
    if (!input) return false;
    return (input.getElement() as HTMLInputElement).disabled;
  }
}
