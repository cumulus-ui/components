// AUTO-GENERATED from vendor/cloudscape-source — do not edit manually
// Source: vendor/cloudscape-source/pages/token-group/permutations.page.tsx
// Regenerate: npx tsx scripts/generate-permutations.ts --component token-group
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import { createPermutations } from '../../utils/create-permutations.js';
import { renderPermutations } from '../../utils/permutations-view.js';
import type { TokenGroupProps } from '../../../src/token-group/interfaces.js';
import '../../../src/token-group/index.js';

const permutations = createPermutations<Partial<TokenGroupProps> & Record<string, unknown>>([
  {
    i18nStrings: [undefined /* i18nStrings */],
    limit: [undefined, 3],
    alignment: ['horizontal', 'vertical'],
    items: [[
        {
        label: 'Item 1',
        labelTag: '128Gb',
        iconAlt: 'amazon-logo',
        iconUrl: undefined /* img */,
        description: 'This is item 1',
        tags: ['CPU-v2', '2Gb RAM'],
        disabled: false,
        dismissLabel: 'dismiss',
      },
        {
        label: 'Item 1',
        labelTag: '128Gb',
        description: 'This is item 1',
        tags: [
        'CPU-v2',
        '2Gb RAM',
        'CPU-v2',
        '2Gb RAM',
        'CPU-v2',
        '2Gb RAM',
        'CPU-v2',
        '2Gb RAM',
        'CPU-v2',
        '2Gb RAM',
        'CPU-v2',
        '2Gb RAM',
        'CPU-v2',
        '2Gb RAM',
      ],
        disabled: false,
        dismissLabel: 'dismiss',
      },
        { label: 'Item 1', labelTag: '128Gb', iconName: 'calendar', disabled: true, dismissLabel: 'dismiss' },
        { label: 'Item 1', labelTag: '128Gb', iconName: 'calendar', disabled: false, dismissLabel: 'dismiss' },
        { label: 'Simple and basic', disabled: true, dismissLabel: 'dismiss' },
      ], [
        {
        label: 'AVeryLongWordLabelEnoughToWrapTheTabLabelUtEleifendNisiNonDuiImperdietIaculisVestibulumVolutpatEstMiNecLuctusAugueEleifendVelUtTellusNislUltricesMattisLeoNonFaucibusAliquetEstUtEleifendNisiNonDuiImperdietIaculis',
        labelTag: 'Small label tag',
        dismissLabel: 'dismiss',
      },
        {
        label: 'Small label',
        labelTag: 'AVeryLongWordLabelTagEnoughToWrapTheTabLabelUtEleifendNisiNonDuiImperdietIaculisVestibulumVolutpatEstMiNecLuctusAugueEleifendVelUtTellusNislUltricesMattisLeoNonFaucibusAliquetEstUtEleifendNisiNonDuiImperdietIaculis',
        dismissLabel: 'dismiss',
      },
        {
        label: 'A very long label, long enough to wrap the label. Ut eleifend nisi non dui imperdiet iaculis. Vestibulum volutpat est mi, nec luctus augue eleifend vel. Ut tellus nisl, ultrices mattis leo non, faucibus aliquet est. Ut eleifend nisi non dui imperdiet iaculis.',
        labelTag: 'A very long label tag, long enough to wrap the tag label. Ut eleifend nisi non dui imperdiet iaculis. Vestibulum volutpat est mi, nec luctus augue eleifend vel. Ut tellus nisl, ultrices mattis leo non, faucibus aliquet est. Ut eleifend nisi non dui imperdiet iaculis.',
        dismissLabel: 'dismiss',
      },
        {
        label: 'AVeryLongWordLabelEnoughToWrapTheLabelUtEleifendNisiNonDuiImperdietIaculisVestibulumVolutpatEstMiNecLuctusAugueEleifendVelUtTellusNislUltricesMattisLeoNonFaucibusAliquetEstUtEleifendNisiNonDuiImperdietIaculis',
        labelTag: 'AVeryLongWordLabelTagEnoughToWrapTheTagLabelUtEleifendNisiNonDuiImperdietIaculisVestibulumVolutpatEstMiNecLuctusAugueEleifendVelUtTellusNislUltricesMattisLeoNonFaucibusAliquetEstUtEleifendNisiNonDuiImperdietIaculis',
        dismissLabel: 'dismiss',
      },
      ], [
        {
        label: 'Small label',
        labelTag: 'AVeryLongWordLabelTagEnoughToWrapTheLabelUtEleifendNisiNonDuiImperdietIaculisVestibulumVolutpatEstMiNecLuctusAugueEleifendVelUtTellusNislUltricesMattisLeoNonFaucibusAliquetEstUtEleifendNisiNonDuiImperdietIaculis',
        iconAlt: 'amazon-logo',
        iconUrl: undefined /* img */,
        description: 'This is item 1',
        tags: ['CPU-v2', '2Gb RAM'],
        dismissLabel: 'dismiss',
      },
        {
        label: 'AVeryLongWordLabelEnoughToWrapTheTagLabelUtEleifendNisiNonDuiImperdietIaculisVestibulumVolutpatEstMiNecLuctusAugueEleifendVelUtTellusNislUltricesMattisLeoNonFaucibusAliquetEstUtEleifendNisiNonDuiImperdietIaculis',
        labelTag: 'Small label tag',
        iconAlt: 'amazon-logo',
        iconUrl: undefined /* img */,
        description: 'This is item 1',
        tags: ['CPU-v2', '2Gb RAM'],
        dismissLabel: 'dismiss',
      },
        {
        label: 'A very long label, long enough to wrap the label. Ut eleifend nisi non dui imperdiet iaculis. Vestibulum volutpat est mi, nec luctus augue eleifend vel. Ut tellus nisl, ultrices mattis leo non, faucibus aliquet est. Ut eleifend nisi non dui imperdiet iaculis.',
        labelTag: 'A very long label tag, long enough to wrap the tag label. Ut eleifend nisi non dui imperdiet iaculis. Vestibulum volutpat est mi, nec luctus augue eleifend vel. Ut tellus nisl, ultrices mattis leo non, faucibus aliquet est. Ut eleifend nisi non dui imperdiet iaculis.',
        iconAlt: 'amazon-logo',
        iconUrl: undefined /* img */,
        description: 'This is item 1',
        tags: ['CPU-v2', '2Gb RAM'],
        dismissLabel: 'dismiss',
      },
        {
        label: 'AVeryLongWordLabelEnoughToWrapTheLabelUtEleifendNisiNonDuiImperdietIaculisVestibulumVolutpatEstMiNecLuctusAugueEleifendVelUtTellusNislUltricesMattisLeoNonFaucibusAliquetEstUtEleifendNisiNonDuiImperdietIaculis',
        labelTag: 'AVeryLongWordLabelTagEnoughToWrapTheTabLabelUtEleifendNisiNonDuiImperdietIaculisVestibulumVolutpatEstMiNecLuctusAugueEleifendVelUtTellusNislUltricesMattisLeoNonFaucibusAliquetEstUtEleifendNisiNonDuiImperdietIaculis',
        iconAlt: 'amazon-logo',
        iconUrl: undefined /* img */,
        description: 'This is item 1',
        tags: ['CPU-v2', '2Gb RAM'],
        dismissLabel: 'dismiss',
      },
      ], [
        {
        label: 'Item 1',
        labelTag: '128Gb',
        iconSvg: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false"><g><line x1="5.5" y1="12" x2="5.5" y2="15"> <line x1="0.5" y1="15" x2="10.5" y2="15"> <rect x="1" y="5" width="9" height="7"> <polyline points="5 4 5 1 14 1 14 8 10 8"> </g> </svg>`,
        description: 'This is item 1',
        tags: ['CPU-v2', '2Gb RAM'],
        disabled: false,
        dismissLabel: 'dismiss',
      },
        {
        label: 'Item 1',
        labelTag: '128Gb',
        iconSvg: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false"><circle cx="8" cy="8" r="7"> <circle cx="8" cy="8" r="3"> </svg>`,
        disabled: true,
        dismissLabel: 'dismiss',
      },
      ]],
  },
  {
    i18nStrings: [undefined /* i18nStrings */],
    limit: [undefined],
    readOnly: [true],
    alignment: ['horizontal'],
    items: [[
        {
        label: 'Item 1',
        labelTag: '128Gb',
        iconAlt: 'amazon-logo',
        iconUrl: undefined /* img */,
        description: 'This is item 1',
        tags: ['CPU-v2', '2Gb RAM'],
        disabled: false,
        dismissLabel: 'dismiss',
      },
        {
        label: 'Item 1',
        labelTag: '128Gb',
        description: 'This is item 1',
        tags: [
        'CPU-v2',
        '2Gb RAM',
        'CPU-v2',
        '2Gb RAM',
        'CPU-v2',
        '2Gb RAM',
        'CPU-v2',
        '2Gb RAM',
        'CPU-v2',
        '2Gb RAM',
        'CPU-v2',
        '2Gb RAM',
        'CPU-v2',
        '2Gb RAM',
      ],
        disabled: false,
        dismissLabel: 'dismiss',
      },
        { label: 'Item 1', labelTag: '128Gb', iconName: 'calendar', disabled: true, dismissLabel: 'dismiss' },
        { label: 'Item 1', labelTag: '128Gb', iconName: 'calendar', disabled: false, dismissLabel: 'dismiss' },
        { label: 'Simple and basic', disabled: true, dismissLabel: 'dismiss' },
      ]],
  },
] as any);

@customElement('token-group-permutations-page')
export class TokenGroupPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .permutation-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: flex-start;
    }
  `];

  override render() {
    return html`
      <h2>Token Group — Permutations</h2>

      <section>
        <h3>All permutations</h3>
        <div class="permutation-grid">
          ${renderPermutations(permutations, p => html`<cs-token-group .i18nStrings=${p.i18nStrings} .limit=${p.limit} .alignment=${p.alignment} .items=${p.items} .readOnly=${p.readOnly}></cs-token-group>`)}
        </div>
      </section>
    `;
  }
}

export const tagName = 'token-group-permutations-page';
