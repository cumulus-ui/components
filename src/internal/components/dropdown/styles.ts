import { css } from 'lit';
import {
  colorBackgroundContainerContent,
  colorBorderDropdownContainer,
  borderRadiusDropdown,
  shadowContainerActive,
  spaceScaledXxs,
} from '../../tokens.js';

export const dropdownStyles = css`
  :host {
    display: inline-block;
    position: relative;
  }

  .cs-dropdown__trigger {
    display: inline-block;
  }

  .cs-dropdown__content-wrapper {
    display: none;
    position: absolute;
    z-index: 2000;
    min-width: 0;
  }

  .cs-dropdown__content-wrapper--open {
    display: block;
  }

  .cs-dropdown__content-wrapper--expand-to-viewport {
    position: fixed;
  }

  .cs-dropdown__content {
    background: ${colorBackgroundContainerContent};
    border: 1px solid ${colorBorderDropdownContainer};
    border-radius: ${borderRadiusDropdown};
    box-shadow: ${shadowContainerActive};
    overflow: auto;
    padding: ${spaceScaledXxs} 0;
  }
`;
