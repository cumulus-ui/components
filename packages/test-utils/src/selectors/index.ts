export interface SelectorWrapper {
  toSelector(): string;
  find(selector: string): SelectorWrapper;
  findByClass(className: string): SelectorWrapper;
  findByTag(tagName: string): SelectorWrapper;
}

function buildWrapper(base: string): SelectorWrapper {
  return {
    toSelector: () => base,
    find: (selector: string) => buildWrapper(`${base} ${selector}`),
    findByClass: (className: string) => buildWrapper(`${base} .${className}`),
    findByTag: (tagName: string) => buildWrapper(`${base} ${tagName}`),
  };
}

export function createWrapper(rootSelector: string): SelectorWrapper {
  return buildWrapper(rootSelector);
}
