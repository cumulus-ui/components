/**
 * @module tokens
 *
 * Pre-wrapped Cloudscape design tokens as Lit `CSSResult` objects.
 *
 * Each export is a `CSSResult` ready for use in `static styles = css\`…\``.
 * Only a representative subset is exported here — add more as components need them.
 *
 * To add a new token:
 * ```ts
 * import * as awsui from '@cloudscape-design/design-tokens';
 * import { token } from './token-utils.js';
 *
 * export const myNewToken = token(awsui.myNewToken);
 * ```
 *
 * @example
 * ```ts
 * import { css } from 'lit';
 * import { colorBackgroundLayoutMain, spaceScaledM, fontSizeBodyM } from '../internal/tokens.js';
 *
 * static styles = css`
 *   :host {
 *     background: ${colorBackgroundLayoutMain};
 *     padding: ${spaceScaledM};
 *     font-size: ${fontSizeBodyM};
 *   }
 * `;
 * ```
 */

import * as awsui from '@cloudscape-design/design-tokens';
import { token } from './token-utils.js';

// ── Colors: Background ──────────────────────────────────────────────────────
export const colorBackgroundLayoutMain = token(awsui.colorBackgroundLayoutMain);
export const colorBackgroundContainerContent = token(awsui.colorBackgroundContainerContent);
export const colorBackgroundContainerHeader = token(awsui.colorBackgroundContainerHeader);
export const colorBackgroundInputDefault = token(awsui.colorBackgroundInputDefault);
export const colorBackgroundInputDisabled = token(awsui.colorBackgroundInputDisabled);
export const colorBackgroundButtonNormalDefault = token(awsui.colorBackgroundButtonNormalDefault);
export const colorBackgroundButtonNormalHover = token(awsui.colorBackgroundButtonNormalHover);
export const colorBackgroundButtonNormalActive = token(awsui.colorBackgroundButtonNormalActive);
export const colorBackgroundButtonPrimaryDefault = token(awsui.colorBackgroundButtonPrimaryDefault);
export const colorBackgroundButtonPrimaryHover = token(awsui.colorBackgroundButtonPrimaryHover);
export const colorBackgroundButtonPrimaryActive = token(awsui.colorBackgroundButtonPrimaryActive);
export const colorBackgroundButtonPrimaryDisabled = token(awsui.colorBackgroundButtonPrimaryDisabled);
export const colorBackgroundControlChecked = token(awsui.colorBackgroundControlChecked);
export const colorBackgroundControlDefault = token(awsui.colorBackgroundControlDefault);
export const colorBackgroundControlDisabled = token(awsui.colorBackgroundControlDisabled);
export const colorBackgroundItemSelected = token(awsui.colorBackgroundItemSelected);
export const colorBackgroundStatusError = token(awsui.colorBackgroundStatusError);
export const colorBackgroundStatusInfo = token(awsui.colorBackgroundStatusInfo);
export const colorBackgroundStatusSuccess = token(awsui.colorBackgroundStatusSuccess);
export const colorBackgroundStatusWarning = token(awsui.colorBackgroundStatusWarning);

// ── Colors: Text ────────────────────────────────────────────────────────────
export const colorTextAccent = token(awsui.colorTextAccent);
export const colorTextBodyDefault = token(awsui.colorTextBodyDefault);
export const colorTextBodySecondary = token(awsui.colorTextBodySecondary);
export const colorTextHeadingDefault = token(awsui.colorTextHeadingDefault);
export const colorTextHeadingSecondary = token(awsui.colorTextHeadingSecondary);
export const colorTextFormDefault = token(awsui.colorTextFormDefault);
export const colorTextFormSecondary = token(awsui.colorTextFormSecondary);
export const colorTextInputPlaceholder = token(awsui.colorTextInputPlaceholder);
export const colorTextInteractiveDefault = token(awsui.colorTextInteractiveDefault);
export const colorTextInteractiveHover = token(awsui.colorTextInteractiveHover);
export const colorTextInteractiveActive = token(awsui.colorTextInteractiveActive);
export const colorTextInteractiveDisabled = token(awsui.colorTextInteractiveDisabled);
export const colorTextLabel = token(awsui.colorTextLabel);
export const colorTextLinkDefault = token(awsui.colorTextLinkDefault);
export const colorTextLinkHover = token(awsui.colorTextLinkHover);
export const colorTextStatusError = token(awsui.colorTextStatusError);
export const colorTextStatusInfo = token(awsui.colorTextStatusInfo);
export const colorTextStatusSuccess = token(awsui.colorTextStatusSuccess);
export const colorTextStatusWarning = token(awsui.colorTextStatusWarning);
export const colorTextButtonNormalDefault = token(awsui.colorTextButtonNormalDefault);
export const colorTextButtonPrimaryDefault = token(awsui.colorTextButtonPrimaryDefault);

// ── Colors: Border ──────────────────────────────────────────────────────────
export const colorBorderButtonNormalDefault = token(awsui.colorBorderButtonNormalDefault);
export const colorBorderButtonNormalDisabled = token(awsui.colorBorderButtonNormalDisabled);
export const colorBorderControlDefault = token(awsui.colorBorderControlDefault);
export const colorBorderDividerDefault = token(awsui.colorBorderDividerDefault);
export const colorBorderInputDefault = token(awsui.colorBorderInputDefault);
export const colorBorderInputFocused = token(awsui.colorBorderInputFocused);
export const colorBorderItemFocused = token(awsui.colorBorderItemFocused);
export const colorBorderItemSelected = token(awsui.colorBorderItemSelected);
export const colorBorderStatusError = token(awsui.colorBorderStatusError);
export const colorBorderStatusInfo = token(awsui.colorBorderStatusInfo);
export const colorBorderStatusSuccess = token(awsui.colorBorderStatusSuccess);
export const colorBorderStatusWarning = token(awsui.colorBorderStatusWarning);

// ── Typography ──────────────────────────────────────────────────────────────
export const fontFamilyBase = token(awsui.fontFamilyBase);
export const fontFamilyMonospace = token(awsui.fontFamilyMonospace);
export const fontSizeBodyM = token(awsui.fontSizeBodyM);
export const fontSizeBodyS = token(awsui.fontSizeBodyS);
export const fontSizeHeadingXl = token(awsui.fontSizeHeadingXl);
export const fontSizeHeadingL = token(awsui.fontSizeHeadingL);
export const fontSizeHeadingM = token(awsui.fontSizeHeadingM);
export const fontSizeHeadingS = token(awsui.fontSizeHeadingS);
export const fontSizeHeadingXs = token(awsui.fontSizeHeadingXs);

// ── Spacing ─────────────────────────────────────────────────────────────────
export const spaceScaledXxxs = token(awsui.spaceScaledXxxs);
export const spaceScaledXxs = token(awsui.spaceScaledXxs);
export const spaceScaledXs = token(awsui.spaceScaledXs);
export const spaceScaledS = token(awsui.spaceScaledS);
export const spaceScaledM = token(awsui.spaceScaledM);
export const spaceScaledL = token(awsui.spaceScaledL);
export const spaceScaledXl = token(awsui.spaceScaledXl);
export const spaceScaledXxl = token(awsui.spaceScaledXxl);
export const spaceScaledXxxl = token(awsui.spaceScaledXxxl);

// ── Motion ──────────────────────────────────────────────────────────────────
export const motionDurationComplex = token(awsui.motionDurationComplex);

// ── Badge / Notification Colors ─────────────────────────────────────────────
export const colorBackgroundNotificationBlue = token(awsui.colorBackgroundNotificationBlue);
export const colorBackgroundNotificationGrey = token(awsui.colorBackgroundNotificationGrey);
export const colorBackgroundNotificationGreen = token(awsui.colorBackgroundNotificationGreen);
export const colorBackgroundNotificationRed = token(awsui.colorBackgroundNotificationRed);
export const borderRadiusBadge = token(awsui.borderRadiusBadge);

// ── Shadows ─────────────────────────────────────────────────────────────────
export const shadowContainerActive = token(awsui.shadowContainerActive);

// ── Dropdown-specific ───────────────────────────────────────────────────────
export const colorBackgroundDropdownItemDefault = token(awsui.colorBackgroundDropdownItemDefault);
export const colorBackgroundDropdownItemHover = token(awsui.colorBackgroundDropdownItemHover);
export const colorBorderDropdownContainer = token(awsui.colorBorderDropdownContainer);
export const colorTextDropdownItemDefault = token(awsui.colorTextDropdownItemDefault);

// ── Border Radius ───────────────────────────────────────────────────────────
export const borderRadiusButton = token(awsui.borderRadiusButton);
export const borderRadiusInput = token(awsui.borderRadiusInput);
export const borderRadiusContainer = token(awsui.borderRadiusContainer);
export const borderRadiusDropdown = token(awsui.borderRadiusDropdown);
export const borderRadiusItem = token(awsui.borderRadiusItem);
export const borderRadiusAlert = token(awsui.borderRadiusAlert);
