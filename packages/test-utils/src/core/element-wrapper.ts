export class ElementWrapper {
  private readonly element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  getElement(): HTMLElement {
    return this.element;
  }

  /** Searches shadowRoot first (if open), then light DOM. */
  find(selector: string): ElementWrapper | null {
    const found = this.queryInside(selector);
    return found ? new ElementWrapper(found as HTMLElement) : null;
  }

  /** Searches shadowRoot first, then light DOM. Returns all matches. */
  findAll(selector: string): ElementWrapper[] {
    return this.queryAllInside(selector).map((el) => new ElementWrapper(el as HTMLElement));
  }

  private queryInside(selector: string): Element | null {
    const shadow = this.element.shadowRoot;
    if (shadow) {
      const found = shadow.querySelector(selector);
      if (found) return found;
    }
    return this.element.querySelector(selector);
  }

  private queryAllInside(selector: string): Element[] {
    const results: Element[] = [];
    const shadow = this.element.shadowRoot;
    if (shadow) {
      results.push(...Array.from(shadow.querySelectorAll(selector)));
    }
    results.push(...Array.from(this.element.querySelectorAll(selector)));
    return results;
  }
}
