#!/usr/bin/env tsx
/**
 * generate-template.ts
 *
 * Generates a Lit render() method from Cloudscape's SSR output.
 * Renders the component with multiple prop combinations, diffs the outputs,
 * and produces a template with correct class names, structure, and bindings.
 *
 * Usage (from scripts/cloudscape-baselines/):
 *   npx tsx generate-template.ts --component checkbox
 */

import Module from 'node:module';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { createRequire } from 'node:module';
import { JSDOM } from 'jsdom';

(Module as any)._extensions['.css'] = function () {};
const require = createRequire(import.meta.url);

const OUTPUT_DIR = path.resolve(import.meta.dirname, '..', 'output');

// ─── Component Registry ──────────────────────────────────────

interface PropVariant {
  name: string;
  value: any;
}

interface ComponentConfig {
  importPath: string;
  stylesPaths: string[];
  baselineProps: Record<string, any>;
  variants: PropVariant[];
  slotContent: string;
}

const COMPONENTS: Record<string, ComponentConfig> = {
  box: {
    importPath: '@cloudscape-design/components/box',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/box/styles.css.js',
    ],
    baselineProps: { variant: 'div', children: 'SLOT_DEFAULT' },
    variants: [
      { name: 'variant', value: 'h1' },
      { name: 'variant', value: 'p' },
      { name: 'variant', value: 'strong' },
      { name: 'variant', value: 'code' },
      { name: 'color', value: 'text-status-error' },
      { name: 'fontSize', value: 'heading-xl' },
      { name: 'fontWeight', value: 'bold' },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  checkbox: {
    importPath: '@cloudscape-design/components/checkbox',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/checkbox/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/abstract-switch/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/checkbox-icon/styles.css.js',
    ],
    baselineProps: { children: 'SLOT_DEFAULT' },
    variants: [
      { name: 'checked', value: true },
      { name: 'disabled', value: true },
      { name: 'readOnly', value: true },
      { name: 'indeterminate', value: true },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  badge: {
    importPath: '@cloudscape-design/components/badge',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/badge/styles.css.js',
    ],
    baselineProps: { children: 'SLOT_DEFAULT', color: 'grey' },
    variants: [
      { name: 'color', value: 'blue' },
      { name: 'color', value: 'red' },
      { name: 'color', value: 'green' },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  'file-dropzone': {
    importPath: '@cloudscape-design/components/file-dropzone',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/file-dropzone/styles.css.js',
    ],
    baselineProps: { children: 'SLOT_DEFAULT' },
    variants: [],
    slotContent: 'SLOT_DEFAULT',
  },
  grid: {
    importPath: '@cloudscape-design/components/grid',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/grid/styles.css.js',
    ],
    baselineProps: {
      gridDefinition: [{ colspan: 6 }, { colspan: 6 }],
      children: ['COL_1', 'COL_2'].map(t =>
        require('react').createElement('div', null, t)
      ),
    },
    variants: [
      { name: 'disableGutters', value: true },
    ],
    slotContent: '',
  },
  'live-region': {
    importPath: '@cloudscape-design/components/live-region',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/live-region/styles.css.js',
    ],
    baselineProps: { children: 'SLOT_DEFAULT' },
    variants: [
      { name: 'assertive', value: true },
      { name: 'tagName', value: 'span' },
      { name: 'hidden', value: true },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  'radio-group': {
    importPath: '@cloudscape-design/components/radio-group',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/radio-group/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/abstract-switch/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/radio-button/styles.css.js',
    ],
    baselineProps: {
      value: 'opt1',
      items: [
        { value: 'opt1', label: 'Option 1' },
        { value: 'opt2', label: 'Option 2' },
        { value: 'opt3', label: 'Option 3' },
      ],
    },
    variants: [
      { name: 'value', value: 'opt2' },
      { name: 'readOnly', value: true },
      { name: 'items', value: [
        { value: 'opt1', label: 'Option 1' },
        { value: 'opt2', label: 'Option 2', disabled: true },
        { value: 'opt3', label: 'Option 3' },
      ]},
    ],
    slotContent: '',
  },
  'space-between': {
    importPath: '@cloudscape-design/components/space-between',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/space-between/styles.css.js',
    ],
    baselineProps: {
      size: 's',
      children: ['CHILD_1', 'CHILD_2', 'CHILD_3'].map(t =>
        require('react').createElement('div', null, t)
      ),
    },
    variants: [
      { name: 'direction', value: 'horizontal' },
      { name: 'size', value: 'l' },
      { name: 'alignItems', value: 'center' },
    ],
    slotContent: '',
  },
  list: {
    importPath: '@cloudscape-design/components/list',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/list/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/structured-item/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/drag-handle/styles.css.js',
    ],
    baselineProps: {
      items: ['Item 1', 'Item 2', 'Item 3'],
      renderItem: (item: string) => ({ id: item, content: item }),
      ariaLabel: 'Files',
    },
    variants: [
      { name: 'variant', value: 'compact' },
      { name: 'disablePaddings', value: true },
      { name: 'disableItemPaddings', value: true },
      { name: 'renderItem', value: (item: string) => ({ id: item, content: item, secondaryContent: 'sec' }) },
    ],
    slotContent: '',
  },
  'anchor-navigation': {
    importPath: '@cloudscape-design/components/anchor-navigation',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/anchor-navigation/styles.css.js',
    ],
    baselineProps: {
      anchors: [
        { text: 'Overview', href: '#overview', level: 1 },
        { text: 'Getting Started', href: '#getting-started', level: 1 },
        { text: 'Installation', href: '#installation', level: 2 },
        { text: 'Configuration', href: '#configuration', level: 2 },
        { text: 'Advanced Usage', href: '#advanced-usage', level: 1 },
      ],
      activeHref: '#getting-started',
      ariaLabel: 'Page navigation',
    },
    variants: [
      { name: 'activeHref', value: '#configuration' },
    ],
    slotContent: '',
  },
  'tree-view': {
    importPath: '@cloudscape-design/components/tree-view',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/tree-view/styles.css.js',
      'node_modules/@cloudscape-design/components/tree-view/tree-item/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/expand-toggle-button/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/structured-item/styles.css.js',
      'node_modules/@cloudscape-design/components/tree-view/vertical-connector/styles.css.js',
    ],
    baselineProps: {
      items: [
        { id: 'src', label: 'src', children: [
          { id: 'index', label: 'index.ts' },
        ]},
        { id: 'readme', label: 'README.md' },
      ],
      renderItem: (item: any) => ({ content: item.label }),
      getItemId: (item: any) => item.id,
      getItemChildren: (item: any) => item.children,
      expandedItems: ['src'],
      ariaLabel: 'File tree',
    },
    variants: [
      { name: 'expandedItems', value: [] },
    ],
    slotContent: '',
  },
  'text-content': {
    importPath: '@cloudscape-design/components/text-content',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/text-content/styles.css.js',
    ],
    baselineProps: {
      children: require('react').createElement('p', null, 'SLOT_DEFAULT'),
    },
    variants: [],
    slotContent: 'SLOT_DEFAULT',
  },
  tiles: {
    importPath: '@cloudscape-design/components/tiles',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/tiles/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/abstract-switch/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/radio-button/styles.css.js',
    ],
    baselineProps: {
      value: 't1',
      items: [
        { value: 't1', label: 'Tile 1' },
        { value: 't2', label: 'Tile 2' },
        { value: 't3', label: 'Tile 3' },
      ],
    },
    variants: [
      { name: 'value', value: 't2' },
      { name: 'readOnly', value: true },
      { name: 'columns', value: 2 },
      { name: 'items', value: [
        { value: 't1', label: 'Tile 1' },
        { value: 't2', label: 'Tile 2', disabled: true },
        { value: 't3', label: 'Tile 3' },
      ]},
    ],
    slotContent: '',
  },

  // ─── Auto-generated configs for remaining components ────────

  alert: {
    importPath: '@cloudscape-design/components/alert',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/alert/styles.css.js',
      'node_modules/@cloudscape-design/components/alert/actions-wrapper/styles.css.js',
    ],
    baselineProps: { type: 'info', children: 'SLOT_DEFAULT' },
    variants: [
      { name: 'type', value: 'error' },
      { name: 'type', value: 'warning' },
      { name: 'type', value: 'success' },
      { name: 'dismissible', value: true },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  autosuggest: {
    importPath: '@cloudscape-design/components/autosuggest',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/autosuggest/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/autosuggest-input/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/button-trigger/styles.css.js',
    ],
    baselineProps: {
      value: '',
      options: [
        { value: 'Option 1' },
        { value: 'Option 2' },
      ],
    },
    variants: [
      { name: 'disabled', value: true },
      { name: 'invalid', value: true },
      { name: 'readOnly', value: true },
    ],
    slotContent: '',
  },
  'breadcrumb-group': {
    importPath: '@cloudscape-design/components/breadcrumb-group',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/breadcrumb-group/styles.css.js',
      'node_modules/@cloudscape-design/components/breadcrumb-group/item/styles.css.js',
    ],
    baselineProps: {
      items: [
        { text: 'Home', href: '#' },
        { text: 'Service', href: '#' },
        { text: 'Resource', href: '#' },
      ],
      ariaLabel: 'Breadcrumbs',
    },
    variants: [],
    slotContent: '',
  },
  button: {
    importPath: '@cloudscape-design/components/button',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/button/styles.css.js',
    ],
    baselineProps: { children: 'SLOT_DEFAULT' },
    variants: [
      { name: 'variant', value: 'primary' },
      { name: 'variant', value: 'link' },
      { name: 'variant', value: 'icon' },
      { name: 'variant', value: 'inline-link' },
      { name: 'disabled', value: true },
      { name: 'loading', value: true },
      { name: 'fullWidth', value: true },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  'button-dropdown': {
    importPath: '@cloudscape-design/components/button-dropdown',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/button-dropdown/styles.css.js',
      'node_modules/@cloudscape-design/components/button-dropdown/category-elements/styles.css.js',
      'node_modules/@cloudscape-design/components/button-dropdown/item-element/styles.css.js',
    ],
    baselineProps: {
      items: [
        { id: '1', text: 'Action 1' },
        { id: '2', text: 'Action 2' },
      ],
      children: 'SLOT_DEFAULT',
    },
    variants: [
      { name: 'variant', value: 'primary' },
      { name: 'disabled', value: true },
      { name: 'loading', value: true },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  'button-group': {
    importPath: '@cloudscape-design/components/button-group',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/button-group/styles.css.js',
    ],
    baselineProps: {
      variant: 'icon',
      items: [
        { type: 'icon-button', id: 'copy', iconName: 'copy', text: 'Copy' },
        { type: 'icon-button', id: 'edit', iconName: 'edit', text: 'Edit' },
      ],
      ariaLabel: 'Actions',
    },
    variants: [],
    slotContent: '',
  },
  cards: {
    importPath: '@cloudscape-design/components/cards',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/cards/styles.css.js',
    ],
    baselineProps: {
      items: [
        { name: 'Item 1', description: 'Desc 1' },
        { name: 'Item 2', description: 'Desc 2' },
      ],
      cardDefinition: {
        header: (item: any) => item.name,
        sections: [
          { id: 'desc', header: 'Description', content: (item: any) => item.description },
        ],
      },
    },
    variants: [
      { name: 'loading', value: true },
    ],
    slotContent: '',
  },
  'collection-preferences': {
    importPath: '@cloudscape-design/components/collection-preferences',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/collection-preferences/styles.css.js',
    ],
    baselineProps: {
      title: 'Preferences',
      confirmLabel: 'Confirm',
      cancelLabel: 'Cancel',
    },
    variants: [],
    slotContent: '',
  },
  'column-layout': {
    importPath: '@cloudscape-design/components/column-layout',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/column-layout/styles.css.js',
      'node_modules/@cloudscape-design/components/column-layout/flexible-column-layout/styles.css.js',
    ],
    baselineProps: {
      columns: 2,
      children: ['Col 1', 'Col 2'].map(t =>
        require('react').createElement('div', null, t)
      ),
    },
    variants: [
      { name: 'columns', value: 3 },
      { name: 'columns', value: 4 },
      { name: 'variant', value: 'text-grid' },
      { name: 'borders', value: 'vertical' },
      { name: 'borders', value: 'horizontal' },
    ],
    slotContent: '',
  },
  container: {
    importPath: '@cloudscape-design/components/container',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/container/styles.css.js',
    ],
    baselineProps: {
      header: require('react').createElement('span', null, 'Header'),
      children: 'SLOT_DEFAULT',
    },
    variants: [
      { name: 'variant', value: 'stacked' },
      { name: 'fitHeight', value: true },
      { name: 'disableContentPaddings', value: true },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  'content-layout': {
    importPath: '@cloudscape-design/components/content-layout',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/content-layout/styles.css.js',
    ],
    baselineProps: {
      header: require('react').createElement('span', null, 'Header'),
      children: 'SLOT_DEFAULT',
    },
    variants: [
      { name: 'defaultPadding', value: true },
      { name: 'disableOverlap', value: true },
      { name: 'headerVariant', value: 'divider' },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  'copy-to-clipboard': {
    importPath: '@cloudscape-design/components/copy-to-clipboard',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/copy-to-clipboard/styles.css.js',
    ],
    baselineProps: {
      copyButtonText: 'Copy',
      copySuccessText: 'Copied',
      copyErrorText: 'Failed to copy',
      textToCopy: 'Hello',
      variant: 'button',
    },
    variants: [
      { name: 'variant', value: 'inline' },
    ],
    slotContent: '',
  },
  'error-boundary': {
    importPath: '@cloudscape-design/components/error-boundary',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/error-boundary/styles.css.js',
    ],
    baselineProps: {
      onError: () => {},
      children: 'SLOT_DEFAULT',
    },
    variants: [],
    slotContent: 'SLOT_DEFAULT',
  },
  'expandable-section': {
    importPath: '@cloudscape-design/components/expandable-section',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/expandable-section/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/expand-toggle-button/styles.css.js',
    ],
    baselineProps: {
      headerText: 'Section Header',
      children: 'SLOT_DEFAULT',
    },
    variants: [
      { name: 'expanded', value: true },
      { name: 'variant', value: 'container' },
      { name: 'variant', value: 'navigation' },
      { name: 'variant', value: 'footer' },
      { name: 'variant', value: 'compact' },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  'file-input': {
    importPath: '@cloudscape-design/components/file-input',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/file-input/styles.css.js',
    ],
    baselineProps: {
      value: [],
      onChange: () => {},
      ariaLabel: 'Choose file',
    },
    variants: [],
    slotContent: '',
  },
  flashbar: {
    importPath: '@cloudscape-design/components/flashbar',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/flashbar/styles.css.js',
    ],
    baselineProps: {
      items: [
        { type: 'success', content: 'Success message' },
      ],
    },
    variants: [
      { name: 'items', value: [{ type: 'error', content: 'Error message' }] },
      { name: 'items', value: [{ type: 'warning', content: 'Warning message' }] },
      { name: 'items', value: [{ type: 'info', content: 'Info message' }] },
      { name: 'items', value: [{ type: 'in-progress', content: 'Loading message' }] },
    ],
    slotContent: '',
  },
  'form-field': {
    importPath: '@cloudscape-design/components/form-field',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/form-field/styles.css.js',
    ],
    baselineProps: {
      label: 'Label',
      children: 'SLOT_DEFAULT',
    },
    variants: [
      { name: 'errorText', value: 'Error message' },
      { name: 'warningText', value: 'Warning message' },
      { name: 'description', value: 'Description text' },
      { name: 'constraintText', value: 'Constraint text' },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  header: {
    importPath: '@cloudscape-design/components/header',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/header/styles.css.js',
    ],
    baselineProps: { children: 'SLOT_DEFAULT' },
    variants: [
      { name: 'variant', value: 'h1' },
      { name: 'variant', value: 'h3' },
      { name: 'counter', value: '(10)' },
      { name: 'description', value: 'Description text' },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  icon: {
    importPath: '@cloudscape-design/components/icon',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/icon/styles.css.js',
    ],
    baselineProps: { name: 'settings' },
    variants: [
      { name: 'size', value: 'small' },
      { name: 'size', value: 'medium' },
      { name: 'size', value: 'big' },
      { name: 'size', value: 'large' },
      { name: 'variant', value: 'disabled' },
      { name: 'variant', value: 'error' },
      { name: 'variant', value: 'success' },
      { name: 'variant', value: 'warning' },
      { name: 'variant', value: 'link' },
    ],
    slotContent: '',
  },
  // icon-provider: Skipped — context provider only, no styles.css.js
  input: {
    importPath: '@cloudscape-design/components/input',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/input/styles.css.js',
    ],
    baselineProps: { value: '' },
    variants: [
      { name: 'disabled', value: true },
      { name: 'invalid', value: true },
      { name: 'warning', value: true },
      { name: 'readOnly', value: true },
      { name: 'type', value: 'search' },
    ],
    slotContent: '',
  },
  'key-value-pairs': {
    importPath: '@cloudscape-design/components/key-value-pairs',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/key-value-pairs/styles.css.js',
    ],
    baselineProps: {
      items: [
        { label: 'Key 1', value: 'Value 1' },
        { label: 'Key 2', value: 'Value 2' },
      ],
    },
    variants: [
      { name: 'columns', value: 3 },
    ],
    slotContent: '',
  },
  link: {
    importPath: '@cloudscape-design/components/link',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/link/styles.css.js',
    ],
    baselineProps: { href: '#', children: 'SLOT_DEFAULT' },
    variants: [
      { name: 'variant', value: 'primary' },
      { name: 'variant', value: 'info' },
      { name: 'variant', value: 'value-large' },
      { name: 'external', value: true },
      { name: 'fontSize', value: 'body-s' },
      { name: 'fontSize', value: 'heading-m' },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  multiselect: {
    importPath: '@cloudscape-design/components/multiselect',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/multiselect/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/button-trigger/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/token-list/styles.css.js',
    ],
    baselineProps: {
      selectedOptions: [],
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ],
      placeholder: 'Choose options',
    },
    variants: [
      { name: 'disabled', value: true },
      { name: 'invalid', value: true },
    ],
    slotContent: '',
  },
  pagination: {
    importPath: '@cloudscape-design/components/pagination',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/pagination/styles.css.js',
    ],
    baselineProps: {
      currentPageIndex: 1,
      pagesCount: 10,
    },
    variants: [
      { name: 'currentPageIndex', value: 5 },
      { name: 'disabled', value: true },
    ],
    slotContent: '',
  },
  popover: {
    importPath: '@cloudscape-design/components/popover',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/popover/styles.css.js',
    ],
    baselineProps: {
      triggerType: 'text',
      content: 'Popover content',
      children: 'SLOT_DEFAULT',
    },
    variants: [
      { name: 'size', value: 'small' },
      { name: 'size', value: 'large' },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  'progress-bar': {
    importPath: '@cloudscape-design/components/progress-bar',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/progress-bar/styles.css.js',
    ],
    baselineProps: { value: 50 },
    variants: [
      { name: 'status', value: 'error' },
      { name: 'status', value: 'success' },
      { name: 'variant', value: 'flash' },
      { name: 'variant', value: 'key-value' },
    ],
    slotContent: '',
  },
  'prompt-input': {
    importPath: '@cloudscape-design/components/prompt-input',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/prompt-input/styles.css.js',
    ],
    baselineProps: {
      value: '',
      actionButtonIconName: 'send',
    },
    variants: [
      { name: 'disabled', value: true },
      { name: 'invalid', value: true },
      { name: 'readOnly', value: true },
      { name: 'warning', value: true },
    ],
    slotContent: '',
  },
  'property-filter': {
    importPath: '@cloudscape-design/components/property-filter',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/property-filter/styles.css.js',
      'node_modules/@cloudscape-design/components/property-filter/filtering-token/styles.css.js',
    ],
    baselineProps: {
      query: { tokens: [], operation: 'and' },
      onChange: () => {},
      filteringProperties: [
        {
          key: 'name',
          operators: ['=', '!=', ':', '!:'],
          propertyLabel: 'Name',
          groupValuesLabel: 'Name values',
        },
      ],
    },
    variants: [],
    slotContent: '',
  },
  'segmented-control': {
    importPath: '@cloudscape-design/components/segmented-control',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/segmented-control/styles.css.js',
    ],
    baselineProps: {
      selectedId: 'seg1',
      options: [
        { id: 'seg1', text: 'Segment 1' },
        { id: 'seg2', text: 'Segment 2' },
        { id: 'seg3', text: 'Segment 3' },
      ],
    },
    variants: [
      { name: 'selectedId', value: 'seg2' },
      { name: 'disabled', value: true },
    ],
    slotContent: '',
  },
  select: {
    importPath: '@cloudscape-design/components/select',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/select/styles.css.js',
      'node_modules/@cloudscape-design/components/select/parts/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/button-trigger/styles.css.js',
    ],
    baselineProps: {
      selectedOption: { label: 'Option 1', value: '1' },
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ],
    },
    variants: [
      { name: 'disabled', value: true },
      { name: 'invalid', value: true },
    ],
    slotContent: '',
  },
  slider: {
    importPath: '@cloudscape-design/components/slider',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/slider/styles.css.js',
    ],
    baselineProps: { value: 50, min: 0, max: 100 },
    variants: [
      { name: 'disabled', value: true },
      { name: 'readOnly', value: true },
    ],
    slotContent: '',
  },
  spinner: {
    importPath: '@cloudscape-design/components/spinner',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/spinner/styles.css.js',
    ],
    baselineProps: {},
    variants: [
      { name: 'size', value: 'big' },
      { name: 'size', value: 'large' },
      { name: 'variant', value: 'disabled' },
      { name: 'variant', value: 'inverted' },
    ],
    slotContent: '',
  },
  'status-indicator': {
    importPath: '@cloudscape-design/components/status-indicator',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/status-indicator/styles.css.js',
    ],
    baselineProps: { type: 'success', children: 'SLOT_DEFAULT' },
    variants: [
      { name: 'type', value: 'error' },
      { name: 'type', value: 'warning' },
      { name: 'type', value: 'info' },
      { name: 'type', value: 'stopped' },
      { name: 'type', value: 'pending' },
      { name: 'type', value: 'in-progress' },
      { name: 'type', value: 'loading' },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  steps: {
    importPath: '@cloudscape-design/components/steps',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/steps/styles.css.js',
    ],
    baselineProps: {
      steps: [
        { header: 'Step 1', status: 'success' },
        { header: 'Step 2', status: 'info' },
        { header: 'Step 3', status: 'pending' },
      ],
    },
    variants: [
      { name: 'orientation', value: 'horizontal' },
    ],
    slotContent: '',
  },
  table: {
    importPath: '@cloudscape-design/components/table',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/table/styles.css.js',
      'node_modules/@cloudscape-design/components/table/header-cell/styles.css.js',
      'node_modules/@cloudscape-design/components/table/body-cell/styles.css.js',
      'node_modules/@cloudscape-design/components/table/selection/styles.css.js',
    ],
    baselineProps: {
      items: [
        { name: 'Item 1', value: '100' },
        { name: 'Item 2', value: '200' },
      ],
      columnDefinitions: [
        { id: 'name', header: 'Name', cell: (item: any) => item.name },
        { id: 'value', header: 'Value', cell: (item: any) => item.value },
      ],
    },
    variants: [
      { name: 'loading', value: true },
      { name: 'variant', value: 'stacked' },
      { name: 'variant', value: 'embedded' },
      { name: 'variant', value: 'borderless' },
    ],
    slotContent: '',
  },
  tabs: {
    importPath: '@cloudscape-design/components/tabs',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/tabs/styles.css.js',
    ],
    baselineProps: {
      tabs: [
        { id: 'tab1', label: 'Tab 1', content: 'Tab 1 content' },
        { id: 'tab2', label: 'Tab 2', content: 'Tab 2 content' },
      ],
      activeTabId: 'tab1',
    },
    variants: [
      { name: 'activeTabId', value: 'tab2' },
      { name: 'variant', value: 'container' },
    ],
    slotContent: '',
  },
  'text-filter': {
    importPath: '@cloudscape-design/components/text-filter',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/text-filter/styles.css.js',
    ],
    baselineProps: {
      filteringText: '',
      filteringPlaceholder: 'Find items',
    },
    variants: [
      { name: 'disabled', value: true },
    ],
    slotContent: '',
  },
  textarea: {
    importPath: '@cloudscape-design/components/textarea',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/textarea/styles.css.js',
    ],
    baselineProps: { value: '' },
    variants: [
      { name: 'disabled', value: true },
      { name: 'invalid', value: true },
      { name: 'readOnly', value: true },
      { name: 'warning', value: true },
    ],
    slotContent: '',
  },
  'time-input': {
    importPath: '@cloudscape-design/components/time-input',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/time-input/styles.css.js',
    ],
    baselineProps: { value: '12:00', format: 'hh:mm' },
    variants: [
      { name: 'disabled', value: true },
      { name: 'invalid', value: true },
      { name: 'readOnly', value: true },
    ],
    slotContent: '',
  },
  toggle: {
    importPath: '@cloudscape-design/components/toggle',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/toggle/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/abstract-switch/styles.css.js',
    ],
    baselineProps: { checked: false, children: 'SLOT_DEFAULT' },
    variants: [
      { name: 'checked', value: true },
      { name: 'disabled', value: true },
      { name: 'readOnly', value: true },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  'toggle-button': {
    importPath: '@cloudscape-design/components/toggle-button',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/toggle-button/styles.css.js',
    ],
    baselineProps: { pressed: false, children: 'SLOT_DEFAULT' },
    variants: [
      { name: 'pressed', value: true },
      { name: 'variant', value: 'icon' },
      { name: 'disabled', value: true },
    ],
    slotContent: 'SLOT_DEFAULT',
  },
  token: {
    importPath: '@cloudscape-design/components/token',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/token/styles.css.js',
    ],
    baselineProps: { label: 'Token label' },
    variants: [
      { name: 'disabled', value: true },
      { name: 'readOnly', value: true },
      { name: 'dismissLabel', value: 'Remove' },
      { name: 'variant', value: 'inline' },
    ],
    slotContent: '',
  },
  'token-group': {
    importPath: '@cloudscape-design/components/token-group',
    stylesPaths: [
      'node_modules/@cloudscape-design/components/token-group/styles.css.js',
      'node_modules/@cloudscape-design/components/internal/components/token-list/styles.css.js',
    ],
    baselineProps: {
      items: [
        { label: 'Token 1', dismissLabel: 'Remove Token 1' },
        { label: 'Token 2', dismissLabel: 'Remove Token 2' },
      ],
    },
    variants: [
      { name: 'readOnly', value: true },
      { name: 'alignment', value: 'vertical' },
    ],
    slotContent: '',
  },
  // tooltip: Skipped — requires getTrack() returning HTMLElement, cannot SSR render
};

// ─── DOM Parsing ──────────────────────────────────────────────

interface DOMNode {
  tag: string;
  classes: string[];
  attrs: Record<string, string>;
  children: DOMNode[];
  text?: string;
}

function parseHTML(html: string): DOMNode {
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  function walk(el: any): DOMNode {
    const children: DOMNode[] = [];
    let text: string | undefined;

    for (const child of el.childNodes) {
      if (child.nodeType === 1) children.push(walk(child));
      if (child.nodeType === 3 && child.textContent.trim()) text = child.textContent.trim();
    }

    const attrs: Record<string, string> = {};
    for (const attr of el.attributes || []) {
      if (attr.name !== 'class') attrs[attr.name] = attr.value;
    }

    return {
      tag: el.tagName?.toLowerCase() || '',
      classes: [...(el.classList || [])],
      attrs,
      children,
      text,
    };
  }

  return walk(doc.body.firstChild);
}

// ─── Class Name Resolution ────────────────────────────────────

function buildReverseMap(stylesPaths: string[]): Record<string, string> {
  const reverseMap: Record<string, string> = {};
  for (const sp of stylesPaths) {
    const resolved = path.resolve(sp);
    if (!fs.existsSync(resolved)) continue;
    // Sync require since we need it before async imports
    const mod = require(resolved);
    const map = mod.default || mod;
    for (const [semantic, hashed] of Object.entries(map)) {
      reverseMap[hashed as string] = semantic;
    }
  }
  return reverseMap;
}

function cleanClasses(classes: string[], reverseMap: Record<string, string>): string[] {
  return classes
    .map(c => reverseMap[c] || c)
    .filter(c => !c.startsWith('awsui-') && !c.startsWith('awsui_'));
}

// ─── Prop Diffing ─────────────────────────────────────────────

interface ClassBinding {
  path: number[];
  prop: string;
  propValue: any;
  added: string[];
  removed: string[];
}

interface ElementBinding {
  path: number[];
  prop: string;
  propValue: any;
  element: DOMNode;
}

function diffNodes(
  baseline: DOMNode,
  variant: DOMNode,
  prop: string,
  propValue: any,
  currentPath: number[],
  classBindings: ClassBinding[],
  elementBindings: ElementBinding[],
): void {
  const baseSet = new Set(baseline.classes);
  const varSet = new Set(variant.classes);
  const added = variant.classes.filter(c => !baseSet.has(c));
  const removed = baseline.classes.filter(c => !varSet.has(c));

  if (added.length > 0 || removed.length > 0) {
    classBindings.push({ path: [...currentPath], prop, propValue, added, removed });
  }

  const minChildren = Math.min(baseline.children.length, variant.children.length);
  for (let i = 0; i < minChildren; i++) {
    diffNodes(baseline.children[i], variant.children[i], prop, propValue, [...currentPath, i], classBindings, elementBindings);
  }

  for (let i = baseline.children.length; i < variant.children.length; i++) {
    elementBindings.push({ path: [...currentPath, i], prop, propValue, element: variant.children[i] });
  }
}

// ─── Lit Template Generation ──────────────────────────────────

function getNodeAtPath(root: DOMNode, nodePath: number[]): DOMNode {
  let node = root;
  for (const idx of nodePath) {
    node = node.children[idx];
  }
  return node;
}

function pathKey(p: number[]): string {
  return p.join('.');
}

function generateTemplate(
  baseline: DOMNode,
  classBindings: ClassBinding[],
  elementBindings: ElementBinding[],
  slotContent: string,
  indent: number = 4,
): string {
  const classBindingsByPath = new Map<string, ClassBinding[]>();
  for (const cb of classBindings) {
    const key = pathKey(cb.path);
    if (!classBindingsByPath.has(key)) classBindingsByPath.set(key, []);
    classBindingsByPath.get(key)!.push(cb);
  }

  const elementBindingsByPath = new Map<string, ElementBinding[]>();
  for (const eb of elementBindings) {
    const parentKey = pathKey(eb.path.slice(0, -1));
    if (!elementBindingsByPath.has(parentKey)) elementBindingsByPath.set(parentKey, []);
    elementBindingsByPath.get(parentKey)!.push(eb);
  }

  function renderNode(node: DOMNode, currentPath: number[], depth: number): string {
    const pad = ' '.repeat(indent + depth * 2);
    const key = pathKey(currentPath);
    const tag = node.tag;
    const isSvgChild = tag === 'rect' || tag === 'polyline' || tag === 'circle' || tag === 'path' || tag === 'line';
    const isSvg = tag === 'svg';

    const bindings = classBindingsByPath.get(key) || [];

    let classAttr = '';
    if (node.classes.length > 0 || bindings.length > 0) {
      if (bindings.length > 0) {
        const staticClasses: Record<string, string> = {};
        for (const c of node.classes) staticClasses[c] = 'true';

        const dynamicClasses: Record<string, string> = {};
        for (const b of bindings) {
          for (const c of b.added) {
            if (typeof b.propValue === 'boolean') {
              dynamicClasses[c] = `this.${b.prop}`;
            } else {
              dynamicClasses[c] = `this.${b.prop} === '${b.propValue}'`;
            }
          }
        }

        const entries = [
          ...Object.entries(staticClasses).map(([c]) => `'${c}': true`),
          ...Object.entries(dynamicClasses).map(([c, expr]) => `'${c}': ${expr}`),
        ];

        classAttr = ` class=\${classMap({ ${entries.join(', ')} })}`;
      } else {
        classAttr = ` class="${node.classes.join(' ')}"`;
      }
    }

    const attrParts: string[] = [];
    for (const [name, value] of Object.entries(node.attrs)) {
      // Skip React-generated IDs and aria-labelledby refs
      if (name === 'id' || (name === 'aria-labelledby' && value.startsWith(':'))) continue;
      if (name === 'focusable') { attrParts.push(`focusable="${value}"`); continue; }
      attrParts.push(`${name}="${value}"`);
    }
    const attrsStr = attrParts.length > 0 ? ' ' + attrParts.join(' ') : '';

    const childLines: string[] = [];
    for (let i = 0; i < node.children.length; i++) {
      childLines.push(renderNode(node.children[i], [...currentPath, i], depth + 1));
    }

    const elBindings = elementBindingsByPath.get(key) || [];
    for (const eb of elBindings) {
      const condExpr = typeof eb.propValue === 'boolean'
        ? `this.${eb.prop}`
        : `this.${eb.prop} === '${eb.propValue}'`;
      const elHtml = renderNode(eb.element, eb.path, depth + 1);
      const templateTag = isSvg ? 'svg' : 'html';
      childLines.push(`${pad}  \${${condExpr} ? ${templateTag}\`${elHtml.trim()}\` : nothing}`);
    }

    if (node.text === slotContent) {
      childLines.push(`${pad}  <slot></slot>`);
    } else if (node.text) {
      childLines.push(`${pad}  ${node.text}`);
    }

    if (childLines.length === 0) {
      return `${pad}<${tag}${classAttr}${attrsStr}></${tag}>`;
    }

    return `${pad}<${tag}${classAttr}${attrsStr}>\n${childLines.join('\n')}\n${pad}</${tag}>`;
  }

  return renderNode(baseline, [], 0);
}

// ─── Main ─────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const compArg = args.find((_: string, i: number) => args[i - 1] === '--component');

  if (!compArg || !COMPONENTS[compArg]) {
    console.error(`Usage: npx tsx generate-template.ts --component <name>`);
    console.error(`Available: ${Object.keys(COMPONENTS).join(', ')}`);
    process.exit(1);
  }

  const config = COMPONENTS[compArg];
  const reverseMap = buildReverseMap(config.stylesPaths);

  const { renderToStaticMarkup } = await import('react-dom/server');
  const { createElement } = await import('react');
  const Component = (await import(config.importPath)).default;

  function render(props: Record<string, any>): DOMNode {
    const raw = renderToStaticMarkup(createElement(Component, props));
    const node = parseHTML(raw);

    function cleanNode(n: DOMNode): DOMNode {
      return {
        ...n,
        classes: cleanClasses(n.classes, reverseMap),
        children: n.children.map(cleanNode),
      };
    }

    return cleanNode(node);
  }

  console.log(`═══ generate-template: ${compArg} ═══\n`);

  const baseline = render(config.baselineProps);
  console.log(`Baseline rendered (${baseline.tag}.${baseline.classes.join('.')})`);

  const classBindings: ClassBinding[] = [];
  const elementBindings: ElementBinding[] = [];

  for (const variant of config.variants) {
    const props = { ...config.baselineProps, [variant.name]: variant.value };
    const variantDOM = render(props);
    diffNodes(baseline, variantDOM, variant.name, variant.value, [], classBindings, elementBindings);
    console.log(`  ${variant.name}=${JSON.stringify(variant.value)}: ${classBindings.length} class bindings, ${elementBindings.length} element bindings`);
  }

  const template = generateTemplate(baseline, classBindings, elementBindings, config.slotContent);

  const output = [
    `// Generated Lit render() for ${compArg}`,
    `// Baseline props: ${JSON.stringify(config.baselineProps)}`,
    `// Variants tested: ${config.variants.map(v => `${v.name}=${JSON.stringify(v.value)}`).join(', ')}`,
    '',
    `import { html, svg, nothing } from 'lit';`,
    `import { classMap } from 'lit/directives/class-map.js';`,
    `import { ifDefined } from 'lit/directives/if-defined.js';`,
    '',
    'override render() {',
    '  return html`',
    template,
    '  `;',
    '}',
    '',
  ].join('\n');

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const outPath = path.join(OUTPUT_DIR, `${compArg}.template.ts`);
  fs.writeFileSync(outPath, output);
  console.log(`\n✓ Written to ${path.relative(process.cwd(), outPath)}`);
  console.log('\n── Generated template ──\n');
  console.log(output);
}

main().catch(err => { console.error(err); process.exit(1); });
