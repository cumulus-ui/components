// SPDX-License-Identifier: Apache-2.0
import { createContext } from '@lit/context';

export interface ContainerContext {
  variant: 'default' | 'stacked';
}

export const containerContext = createContext<ContainerContext>(
  Symbol('container-context'),
);

export const defaultContainerContext: ContainerContext = {
  variant: 'default',
};
