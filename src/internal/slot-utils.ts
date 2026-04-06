/**
 * @module slot-utils
 *
 * Helpers for observing and querying `<slot>` content in Shadow DOM.
 */

export function hasSlottedContent(element: HTMLElement, slotName?: string): boolean {
  const root = element.shadowRoot ?? element.getRootNode() as ShadowRoot;
  if (!root) return false;

  const selector = slotName ? `slot[name="${slotName}"]` : 'slot:not([name])';
  const slot = root.querySelector<HTMLSlotElement>(selector);
  if (!slot) return false;

  const nodes = slot.assignedNodes({ flatten: true });
  return nodes.some(node => {
    if (node.nodeType === Node.ELEMENT_NODE) return true;
    if (node.nodeType === Node.TEXT_NODE) return (node.textContent?.trim().length ?? 0) > 0;
    return false;
  });
}

export type SlotChangeCleanup = () => void;

export function observeSlotChange(
  element: HTMLElement,
  slotName: string | null,
  callback: (assignedNodes: Node[]) => void,
): SlotChangeCleanup {
  const root = element.shadowRoot ?? element.getRootNode() as ShadowRoot;
  const selector = slotName ? `slot[name="${slotName}"]` : 'slot:not([name])';
  const slot = root.querySelector<HTMLSlotElement>(selector);

  if (!slot) return () => {};

  const handler = () => {
    callback(slot.assignedNodes({ flatten: true }));
  };

  slot.addEventListener('slotchange', handler);
  return () => slot.removeEventListener('slotchange', handler);
}

export function getAssignedElements(
  element: HTMLElement,
  slotName?: string,
): Element[] {
  const root = element.shadowRoot ?? element.getRootNode() as ShadowRoot;
  const selector = slotName ? `slot[name="${slotName}"]` : 'slot:not([name])';
  const slot = root.querySelector<HTMLSlotElement>(selector);

  if (!slot) return [];
  return slot.assignedElements({ flatten: true });
}
