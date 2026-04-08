# P3 — Invented Classes CSS Backing Verification

**Date**: 2026-04-08
**Scope**: Classes used in component templates that do NOT exist in Cloudscape CSS (`node_modules/@cloudscape-design/components/{name}/styles.css.js`). These are "invented" classes — added by our implementation for structural/semantic purposes.

## Results Summary

- **11 of 28** invented classes have CSS backing (OK)
- **17 of 28** invented classes have NO CSS backing (need fixing)

## Detailed Results

| # | Component | Class | Has CSS? | Location |
|---|-----------|-------|----------|----------|
| 1 | collection-preferences | `panel` | ✅ YES | `internal.ts` inline `panelStyles` |
| 2 | collection-preferences | `panel-title` | ✅ YES | `internal.ts` inline `panelStyles` |
| 3 | collection-preferences | `panel-section` | ✅ YES | `internal.ts` inline `panelStyles` |
| 4 | collection-preferences | `panel-section-title` | ✅ YES | `internal.ts` inline `panelStyles` |
| 5 | collection-preferences | `panel-footer` | ✅ YES | `internal.ts` inline `panelStyles` |
| 6 | collection-preferences | `page-size-options` | ✅ YES | `internal.ts` inline `panelStyles` |
| 7 | collection-preferences | `page-size-option` | ✅ YES | `internal.ts` inline `panelStyles` |
| 8 | key-value-pairs | `pair` | ❌ NO | Used in template but no `.pair` CSS rule |
| 9 | key-value-pairs | `grid` | ✅ YES | `internal.ts` inline `layoutStyles` |
| 10 | progress-bar | `label` | ❌ NO | Only `.label-flash` and `.label-key-value` exist; no bare `.label` |
| 11 | progress-bar | `description` | ❌ NO | No `.description` CSS rule |
| 12 | progress-bar | `result-button-trigger` | ❌ NO | No `.result-button-trigger` CSS rule |
| 13 | property-filter | `token-item` | ✅ YES | `internal.ts` inline `filterInputStyles` |
| 14 | property-filter | `token-box` | ✅ YES | Via imported `tokenStyles` from `../token/styles.ts` |
| 15 | property-filter | `filter-input` | ✅ YES | `internal.ts` inline `filterInputStyles` |
| 16 | property-filter | `operation-label` | ✅ YES | `internal.ts` inline `filterInputStyles` |
| 17 | property-filter | `token-list` | ✅ YES | `internal.ts` inline `filterInputStyles` |
| 18 | steps | `title` | ❌ NO | No `.title` CSS rule in `internal.ts` or `styles.ts` |
| 19 | tree-view | `expandable` | ❌ NO | No `.expandable` CSS rule in any included stylesheet |
| 20 | tree-view | `expanded` | ❌ NO | No `.expanded` CSS rule in any included stylesheet |
| 21 | tree-view | `structured-item--icon` | ❌ NO | No `.structured-item--icon` CSS rule |
| 22 | list | `structured-item--icon` | ❌ NO | No `.structured-item--icon` CSS rule |
| 23 | list | `structured-item--secondary` | ❌ NO | No `.structured-item--secondary` CSS rule |
| 24 | token | `label-tag` | ❌ NO | No `.label-tag` CSS rule |
| 25 | token | `description` | ❌ NO | No `.description` CSS rule |
| 26 | token-group | `token-normal` | ✅ YES | Via imported `tokenStyles` from `../token/styles.ts` |
| 27 | token-group | `label-tag` | ❌ NO | No `.label-tag` CSS rule |
| 28 | token-group | `tags` | ❌ NO | No `.tags` CSS rule |

## Classes Needing CSS Rules (17)

### High Priority (structural/visual impact)
- **tree-view**: `expandable`, `expanded`, `structured-item--icon` — likely need expand/collapse and icon layout styles
- **list**: `structured-item--icon`, `structured-item--secondary` — need icon and secondary text layout styles
- **token**: `label-tag`, `description` — need label tag badge and description text styles
- **token-group**: `label-tag`, `tags` — same as token, inherited pattern

### Medium Priority (layout/spacing)
- **key-value-pairs**: `pair` — may need pair-level spacing/layout
- **progress-bar**: `label`, `description`, `result-button-trigger` — need label/description typography and button styling
- **steps**: `title` — needs title typography styling

## Recommendation

Add inline CSS rules in each component's `internal.ts` (inside `css\`...\`` blocks) for the 17 missing classes. These are "invented" classes not in Cloudscape CSS, so they need our own styling. Priority should be tree-view/list (structural) > token/token-group (visual) > progress-bar/steps/key-value-pairs (typography).
