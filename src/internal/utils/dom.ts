export function getNodeText(node: Node | null | undefined): string {
  if (!node) return '';
  return (node.textContent ?? '').trim();
}

export function findUpUntil(
  node: HTMLElement,
  predicate: (el: HTMLElement) => boolean
): HTMLElement | null {
  let current: HTMLElement | null = node;
  while (current) {
    if (predicate(current)) return current;
    current = current.parentElement;
  }
  return null;
}

export function isHTMLElement(value: unknown): value is HTMLElement {
  return value instanceof HTMLElement;
}

export function isNode(value: unknown): value is Node {
  return value instanceof Node;
}

/**
 * Descendant check that crosses Shadow DOM boundaries
 * by walking up through ShadowRoot hosts.
 */
export function containsOrShadowContains(
  parent: Node,
  child: Node
): boolean {
  if (parent.contains(child)) return true;

  let current: Node | null = child;
  while (current) {
    if (current === parent) return true;
    const root = current.getRootNode();
    if (root instanceof ShadowRoot) {
      current = root.host;
    } else {
      break;
    }
  }
  return false;
}

export function getScrollableParent(element: HTMLElement): HTMLElement {
  let current: HTMLElement | null = element.parentElement;
  while (current) {
    const { overflow, overflowX, overflowY } = getComputedStyle(current);
    if (
      /(auto|scroll)/.test(overflow) ||
      /(auto|scroll)/.test(overflowX) ||
      /(auto|scroll)/.test(overflowY)
    ) {
      return current;
    }
    current = current.parentElement;
  }
  return document.documentElement;
}

export function getShadowHost(node: Node): HTMLElement | null {
  const root = node.getRootNode();
  if (root instanceof ShadowRoot) {
    return root.host as HTMLElement;
  }
  return null;
}
