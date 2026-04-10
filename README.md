# @cumulus-ui/components

Web Components inspired by [Cloudscape Design System](https://cloudscape.design), built with [Lit 3](https://lit.dev) and TypeScript.

[![npm version](https://img.shields.io/npm/v/@cumulus-ui/components)](https://www.npmjs.com/package/@cumulus-ui/components)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue)](./LICENSE)

## Overview

Cumulus UI is a library of 90+ web components that implement the AWS Cloudscape Design System as native custom elements. Every component uses Shadow DOM for style encapsulation, works with any framework (or none), and ships as standard ES modules.

The project generates its styles and TypeScript interfaces directly from `@cloudscape-design/components`, so visual fidelity stays in sync with the upstream React library. You get the same look and feel without the React dependency.

## Installation

```bash
npm install @cumulus-ui/components
```

For CDN usage (bundles Lit and all dependencies):

```html
<script type="module" src="https://unpkg.com/@cumulus-ui/components/dist/cumulus-ui.cdn.js"></script>
```

## Quick Start

```html
<script type="module">
  import '@cumulus-ui/components';
</script>

<cs-button variant="primary">Save</cs-button>
<cs-input placeholder="Search..."></cs-input>
<cs-checkbox checked>Enable notifications</cs-checkbox>
```

All components self-register their custom element tags on import. Just import the package and start using the `<cs-*>` tags.

## Components

See the full list at [cumulus-ui.github.io/components](https://cumulus-ui.github.io/components).

## Framework Integration

### Vanilla HTML / CDN

```html
<script type="module" src="https://unpkg.com/@cumulus-ui/components/dist/cumulus-ui.cdn.js"></script>

<cs-button variant="primary" onclick="alert('clicked')">Click me</cs-button>
```

### React (via @lit/react)

```tsx
import { createComponent } from '@lit/react';
import { CsButton } from '@cumulus-ui/components';
import React from 'react';

const Button = createComponent({
  tagName: 'cs-button',
  elementClass: CsButton,
  react: React,
  events: {
    onClick: 'click',
  },
});

export default function App() {
  return <Button variant="primary">Save</Button>;
}
```

### Vue

```vue
<template>
  <cs-button variant="primary" @click="handleClick">Save</cs-button>
</template>

<script setup>
import '@cumulus-ui/components';

function handleClick() {
  console.log('clicked');
}
</script>
```

Vue recognizes custom elements natively. Add `cs-` to your `compilerOptions.isCustomElement` config to suppress unknown element warnings:

```js
// vite.config.js
vue({ template: { compilerOptions: { isCustomElement: tag => tag.startsWith('cs-') } } })
```

### Angular

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import '@cumulus-ui/components';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

```html
<!-- component.html -->
<cs-button variant="primary" (click)="handleClick()">Save</cs-button>
```

## Theming

### Dark Mode

```js
document.body.classList.add('awsui-dark-mode');
```

### Compact Density

```js
document.body.classList.add('awsui-compact-mode');
```

Both classes can be combined. They toggle Cloudscape design tokens at the CSS custom property level, so all components respond automatically.

## Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev server | `npm run dev` | Start Vite dev server on port 3000 |
| Build | `npm run build` | Clean + ESM bundle + type declarations |
| Build CDN | `npm run build:cdn` | Self-contained minified ESM bundle |
| Build demo | `npm run build:demo` | Build demo pages for deployment |
| Test | `npm test` | Build CDN bundle, then run Playwright tests |
| Typecheck | `npm run typecheck` | TypeScript type checking (no emit) |
| Generate styles | `npm run generate:styles` | Extract and transform Cloudscape CSS into Lit styles |
| Generate interfaces | `npm run generate:interfaces` | Extract Cloudscape TypeScript interfaces |
| Capture baselines | `npm run capture:baselines` | Capture Cloudscape visual baselines for comparison |

## Architecture

```
src/
  {component}/
    interfaces.ts   # Auto-generated TypeScript interfaces (DO NOT EDIT)
    styles.ts        # Auto-generated Lit CSS from Cloudscape (DO NOT EDIT)
    internal.ts      # Lit element implementation
    index.ts         # Public export + customElements.define()
  internal/
    base-element.ts  # CsBaseElement — shared base class
    mixins/          # FormControlMixin, etc.
    events.ts        # fireNonCancelableEvent helper
    styles/          # Shared and internal component styles
    generated/       # Auto-generated shared types
  index.ts           # Barrel export for all components
```

## Dependencies

| Package | Purpose |
|---------|---------|
| [Lit 3](https://lit.dev) | Reactive web component base |
| [@lit/context](https://lit.dev/docs/data/context/) | Context protocol for FormField |
| [@floating-ui/dom](https://floating-ui.com) | Popover/tooltip positioning |
| [@cumulus-ui/design-tokens](https://github.com/cumulus-ui/design-tokens) | Cloudscape design token values |

## References

- [Cloudscape Design System](https://cloudscape.design) — AWS's open-source design system
- [Cumulus UI Documentation](https://cumulus-ui.github.io)
- [Rainforest](https://github.com/krhoyt/Rainforest) — Kevin Hoyt's Cloudscape-inspired web components

## License

[Apache-2.0](./LICENSE)

This project includes derived works from Cloudscape Design Components (Apache-2.0) and bundles Lit (BSD-3-Clause) and Floating UI (MIT) in CDN builds. See [NOTICE](./NOTICE) for details.
