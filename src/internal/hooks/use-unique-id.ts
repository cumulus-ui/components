// SPDX-License-Identifier: Apache-2.0

let counter = 0;

export function generateUniqueId(prefix = 'uid'): string {
  return `cs-${prefix}-${++counter}`;
}
