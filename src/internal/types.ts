// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE

/**
 * Marker type for slot content in component interfaces.
 * In Web Components, slot content is projected via <slot> elements —
 * this type exists so the TypeScript type checker can resolve slot
 * members from interface hierarchies.
 */
export type SlotContent = HTMLElement | string;

/**
 * Marker type for event detail in component interfaces.
 * Components fire CustomEvent<T> — this type preserves the detail
 * type information from Cloudscape's CancelableEventHandler<T>.
 */
export type EventDetail<T = void> = CustomEvent<T>;
