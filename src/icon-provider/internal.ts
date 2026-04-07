import { html } from 'lit';
import { CsBaseElement } from '../internal/base-element.js';
import { property } from 'lit/decorators.js';
import { provide, createContext } from '@lit/context';
import type { IconProviderProps } from './interfaces.js';

export type IconResolverFn = (name: string) => unknown | undefined;

export const iconProviderContext = createContext<IconResolverFn | undefined>(
  Symbol('icon-provider-context'),
);

export class CsIconProviderInternal extends CsBaseElement {
  @property({ attribute: false })
  icons: IconProviderProps.Icons | null = null;

  @provide({ context: iconProviderContext })
  _resolver?: IconResolverFn;

  override createRenderRoot(): this {
    return this;
  }

  override willUpdate(): void {
    if (this.icons === null) {
      this._resolver = undefined;
    } else {
      const iconMap = this.icons;
      this._resolver = (name: string): unknown | undefined => {
        if (name in iconMap) {
          return (iconMap as Record<string, unknown>)[name] ?? undefined;
        }
        return undefined;
      };
    }
  }

  override render() {
    return html`<slot></slot>`;
  }
}
