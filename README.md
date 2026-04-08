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

56 components are currently exported and ready to use. ~35 more have scaffolding in `src/` and are in progress.

### Input & Controls

| Component | Tag | Description |
|-----------|-----|-------------|
| Button | `<cs-button>` | Primary, normal, link, and icon button variants |
| ButtonDropdown | `<cs-button-dropdown>` | Button with dropdown menu |
| ButtonGroup | `<cs-button-group>` | Grouped action buttons with overflow |
| Checkbox | `<cs-checkbox>` | Checkbox with label, description, indeterminate state |
| Toggle | `<cs-toggle>` | On/off toggle switch |
| ToggleButton | `<cs-toggle-button>` | Pressable toggle button |
| RadioGroup | `<cs-radio-group>` | Radio button group with horizontal/vertical layout |
| Select | `<cs-select>` | Single-select dropdown |
| Multiselect | `<cs-multiselect>` | Multi-select dropdown with tokens |
| Autosuggest | `<cs-autosuggest>` | Input with autocomplete suggestions |
| Slider | `<cs-slider>` | Range slider input |
| SegmentedControl | `<cs-segmented-control>` | Segmented button group |
| PromptInput | `<cs-prompt-input>` | Multi-line prompt input with action area |
| DateInput | `<cs-date-input>` | Date text input |
| DatePicker | `<cs-date-picker>` | Date picker with calendar dropdown |
| DateRangePicker | `<cs-date-range-picker>` | Date range selection |
| Calendar | `<cs-calendar>` | Standalone calendar |
| FileInput | `<cs-file-input>` | File selection button |
| FileUpload | `<cs-file-upload>` | File upload with preview and validation |
| FileDropzone | `<cs-file-dropzone>` | Drag-and-drop file zone |
| PropertyFilter | `<cs-property-filter>` | Token-based property filtering |

### Form & Validation

| Component | Tag | Description |
|-----------|-----|-------------|
| FormField | `<cs-form-field>` | Label, description, error, and constraint text wrapper |
| Form | `<cs-form>` | Form layout with actions and error summary |

### Display & Feedback

| Component | Tag | Description |
|-----------|-----|-------------|
| Badge | `<cs-badge>` | Colored count badge |
| Spinner | `<cs-spinner>` | Loading spinner |
| StatusIndicator | `<cs-status-indicator>` | Status with icon (success, error, warning, etc.) |
| ProgressBar | `<cs-progress-bar>` | Determinate/indeterminate progress bar |
| Alert | `<cs-alert>` | Inline alert (info, success, warning, error) |
| Flashbar | `<cs-flashbar>` | Stacked notification messages |
| Icon | `<cs-icon>` | SVG icon from the Cloudscape icon set |
| IconProvider | `<cs-icon-provider>` | Custom icon set provider |
| LiveRegion | `<cs-live-region>` | ARIA live region for screen readers |
| ErrorBoundary | `<cs-error-boundary>` | Error boundary with fallback UI |
| CopyToClipboard | `<cs-copy-to-clipboard>` | Copy-to-clipboard button |

### Data Display

| Component | Tag | Description |
|-----------|-----|-------------|
| Table | `<cs-table>` | Data table with sorting, selection, pagination |
| Cards | `<cs-cards>` | Card grid layout for items |
| KeyValuePairs | `<cs-key-value-pairs>` | Key-value pair display |
| Token | `<cs-token>` | Dismissible token |
| TokenGroup | `<cs-token-group>` | Group of tokens |
| Steps | `<cs-steps>` | Step indicator |
| CollectionPreferences | `<cs-collection-preferences>` | Table/cards display preferences |
| List | `<cs-list>` | Structured list |
| TreeView | `<cs-tree-view>` | Hierarchical tree |

### Layout

| Component | Tag | Description |
|-----------|-----|-------------|
| Box | `<cs-box>` | Spacing, typography, and color utility wrapper |
| Grid | `<cs-grid>` | Responsive column grid |
| SpaceBetween | `<cs-space-between>` | Vertical/horizontal spacing between children |
| ColumnLayout | `<cs-column-layout>` | Multi-column layout |
| ContentLayout | `<cs-content-layout>` | Page content layout with header |
| TextContent | `<cs-text-content>` | Prose text styling |

### Container & Navigation

| Component | Tag | Description |
|-----------|-----|-------------|
| Container | `<cs-container>` | Bordered content container with header |
| Header | `<cs-header>` | Section header with actions and counter |
| ExpandableSection | `<cs-expandable-section>` | Collapsible content section |
| Tabs | `<cs-tabs>` | Tab navigation |
| Modal | `<cs-modal>` | Dialog modal |
| Tooltip | `<cs-tooltip>` | Hover tooltip |
| Popover | `<cs-popover>` | Click-triggered popover |
| Link | `<cs-link>` | Styled anchor link |
| Pagination | `<cs-pagination>` | Page navigation |
| BreadcrumbGroup | `<cs-breadcrumb-group>` | Breadcrumb navigation |
| TopNavigation | `<cs-top-navigation>` | Application top bar |
| SideNavigation | `<cs-side-navigation>` | Side navigation menu |
| AnchorNavigation | `<cs-anchor-navigation>` | In-page anchor links |
| HelpPanel | `<cs-help-panel>` | Contextual help panel |
| Drawer | `<cs-drawer>` | Slide-out drawer panel |
| SplitPanel | `<cs-split-panel>` | Resizable split panel |

### Editor & Wizard

| Component | Tag | Description |
|-----------|-----|-------------|
| AttributeEditor | `<cs-attribute-editor>` | Dynamic key-value attribute editor |
| TagEditor | `<cs-tag-editor>` | Tag key-value editor |
| CodeEditor | `<cs-code-editor>` | Code editor with syntax highlighting |
| Wizard | `<cs-wizard>` | Multi-step wizard |

### Tutorial

| Component | Tag | Description |
|-----------|-----|-------------|
| AnnotationContext | `<cs-annotation-context>` | Tutorial annotation overlay |
| Tiles | `<cs-tiles>` | Selectable tile grid |

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
    mixins/          # FormAssociatedMixin, etc.
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
| [@cumulus-ui/design-tokens](https://github.com/cumulus-ui) | Cloudscape design token values |
| [@cumulus-ui/styles](https://github.com/cumulus-ui) | Shared global styles |

## References

- [Cloudscape Design System](https://cloudscape.design) — AWS's open-source design system
- [Cumulus UI Documentation](https://cumulus-ui.github.io)
- [Rainforest](https://github.com/krhoyt/Rainforest) — Kevin Hoyt's Cloudscape-inspired web components

## License

[Apache-2.0](./LICENSE)

This project includes derived works from Cloudscape Design Components (Apache-2.0) and bundles Lit (BSD-3-Clause) and Floating UI (MIT) in CDN builds. See [NOTICE](./NOTICE) for details.
