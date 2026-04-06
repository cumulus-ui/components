import { ComponentWrapper } from '../core/component-wrapper.js';

export function createWrapper(container: Element): ComponentWrapper {
  if (container instanceof HTMLElement && container.shadowRoot) {
    return new ComponentWrapper(container);
  }
  return new ComponentWrapper(container as HTMLElement);
}

export { ElementWrapper } from '../core/element-wrapper.js';
export { ComponentWrapper } from '../core/component-wrapper.js';
export { CheckboxWrapper } from './checkbox/index.js';
export { SpinnerWrapper } from './spinner/index.js';
export { BadgeWrapper } from './badge/index.js';
export { LiveRegionWrapper } from './live-region/index.js';
export { RadioGroupWrapper } from './radio-group/index.js';
export { TilesWrapper } from './tiles/index.js';
export { IconWrapper } from './icon/index.js';
export { BoxWrapper } from './box/index.js';
export { GridWrapper } from './grid/index.js';
export { SpaceBetweenWrapper } from './space-between/index.js';
export { TextContentWrapper } from './text-content/index.js';
export { ListWrapper } from './list/index.js';
export { TreeViewWrapper } from './tree-view/index.js';
export { FileDropzoneWrapper } from './file-dropzone/index.js';
export { AnchorNavigationWrapper } from './anchor-navigation/index.js';
