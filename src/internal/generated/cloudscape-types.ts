// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE

/**
 * Shared type definitions extracted from @cloudscape-design/components internals.
 * Components that need these types import from here rather than from React-coupled sources.
 */

// ─── From internal/events ─────────────────────────────────────

export interface ClickDetail {
  button: number;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
}

export interface BaseNavigationDetail {
  href: string | undefined;
  external?: boolean;
  target?: string;
}

export interface BaseKeyDetail {
  keyCode: number;
  key: string;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
  isComposing: boolean;
}

// ─── From internal/types ──────────────────────────────────────

export type Optional<T> = T | undefined;

// ─── From internal/components/option/interfaces ───────────────

interface BaseOption {
  value?: string;
  label?: string;
  lang?: string;
  description?: string;
  disabled?: boolean;
  disabledReason?: string;
  labelTag?: string;
  tags?: ReadonlyArray<string>;
  filteringTags?: ReadonlyArray<string>;
  iconAlt?: string;
  iconAriaLabel?: string;
  iconName?: string;
  iconUrl?: string;
}

export interface OptionDefinition extends BaseOption {
  __labelPrefix?: string;
}

export interface OptionGroup extends BaseOption {
  options: ReadonlyArray<OptionDefinition>;
}
