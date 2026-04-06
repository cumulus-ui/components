import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class FileDropzoneWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-file-dropzone';

  findDropzone(): ElementWrapper | null {
    return this.find('.root');
  }

  isActive(): boolean {
    const dropzone = this.findDropzone();
    if (!dropzone) return false;
    return dropzone.getElement().classList.contains('hovered');
  }
}
