# COMPONENT_SKIP Audit

Generated: 2026-04-08
Source: `scripts/generate-render.ts` lines 773–858

## Summary

| Category | Count | Description |
|----------|-------|-------------|
| **REAL GAP** | 30 | Cloudscape CSS has it (own/sub/dep), our styles.ts doesn't → regeneration needed |
| **TEST-CLASS ONLY** | 3 | Only in Cloudscape test-classes CSS, not production → no action needed |
| **MAYBE GAP** | 18 | Class exists in unrelated internal component CSS → likely coincidental name match |
| **INVENTED** | 124 | Not in any Cloudscape CSS → agent-invented structural classes |
| **ALREADY PRESENT** | 7 | In both Cloudscape CSS and our styles.ts → shouldn't be in SKIP |
| **STYLES ONLY** | 3 | In our styles.ts but not Cloudscape CSS → our addition |
| **MAYBE PRESENT** | 1 | In unrelated Cloudscape CSS and our styles.ts |
| **Total** | **186** | |

### Methodology

For each class in COMPONENT_SKIP:
1. **SELF**: checked `{component}/styles.css.js`
2. **SUB**: checked `{component}/*/styles.css.js` (sub-component dirs)
3. **DEP**: checked actual internal component deps (parsed from `{component}/internal.js` imports)
4. **UNRELATED**: found in some other internal component's CSS (not imported by this component)
5. Checked `src/{component}/styles.ts` for the class selector

## REAL GAPS — Need Regeneration

These classes exist in the component's own Cloudscape CSS (or its direct dependencies) but are missing from our `styles.ts`.

### alert
| Class | Source | Verdict |
|-------|--------|---------|
| content | SELF: alert/styles.css.js | **REAL GAP** |

### button
| Class | Source | Verdict |
|-------|--------|---------|
| content | SELF: button/styles.css.js | **REAL GAP** |

### button-dropdown
| Class | Source | Verdict |
|-------|--------|---------|
| icon | SUB: button-dropdown/item-element/styles.css.js | **REAL GAP** |

### cards
| Class | Source | Verdict |
|-------|--------|---------|
| section-content | SELF: cards/styles.css.js | **REAL GAP** |

### collection-preferences
| Class | Source | Verdict |
|-------|--------|---------|
| root | SELF: collection-preferences/styles.css.js | **REAL GAP** |
| visible-content-group-label | SELF: collection-preferences/styles.css.js | **REAL GAP** |
| visible-content-option | SELF: collection-preferences/styles.css.js | **REAL GAP** |

### date-input
| Class | Source | Verdict |
|-------|--------|---------|
| root | SELF: date-input/styles.css.js | **REAL GAP** |

### error-boundary
| Class | Source | Verdict |
|-------|--------|---------|
| error-boundary | SELF: error-boundary/styles.css.js | **REAL GAP** |

### expandable-section
| Class | Source | Verdict |
|-------|--------|---------|
| header-text | SELF: expandable-section/styles.css.js | **REAL GAP** |

### form
| Class | Source | Verdict |
|-------|--------|---------|
| content | SELF: form/styles.css.js | **REAL GAP** |

### item-card
| Class | Source | Verdict |
|-------|--------|---------|
| actions | DEP: internal/components/structured-item/styles.css.js | **REAL GAP** |

### popover
| Class | Source | Verdict |
|-------|--------|---------|
| content | SELF: popover/styles.css.js | **REAL GAP** |
| header | SELF: popover/styles.css.js | **REAL GAP** |
| header-row | SELF: popover/styles.css.js | **REAL GAP** |

### progress-bar
| Class | Source | Verdict |
|-------|--------|---------|
| additional-info | SELF: progress-bar/styles.css.js | **REAL GAP** |
| result-container-error | SELF: progress-bar/styles.css.js | **REAL GAP** |
| result-container-success | SELF: progress-bar/styles.css.js | **REAL GAP** |

### property-filter
| Class | Source | Verdict |
|-------|--------|---------|
| dismiss-button | SUB: property-filter/filtering-token/styles.css.js | **REAL GAP** |

### select
| Class | Source | Verdict |
|-------|--------|---------|
| label-tag | DEP: internal/components/option/styles.css.js | **REAL GAP** |
| selected-icon | SUB: select/parts/styles.css.js | **REAL GAP** |

### table
| Class | Source | Verdict |
|-------|--------|---------|
| body-cell | SUB: table/body-cell/styles.css.js | **REAL GAP** |
| body-cell-content | SUB: table/body-cell/styles.css.js | **REAL GAP** |
| header-cell | SUB: table/header-cell/styles.css.js | **REAL GAP** |
| header-cell-text | SUB: table/analytics-metadata/styles.css.js | **REAL GAP** |

### token
| Class | Source | Verdict |
|-------|--------|---------|
| description | DEP: internal/components/option/styles.css.js | **REAL GAP** |
| label-tag | DEP: internal/components/option/styles.css.js | **REAL GAP** |

### token-group
| Class | Source | Verdict |
|-------|--------|---------|
| description | DEP: internal/components/token-list/styles.css.js | **REAL GAP** |
| dismiss-button | SELF: token-group/styles.css.js | **REAL GAP** |
| token | SELF: token-group/styles.css.js | **REAL GAP** |

## TEST-CLASS ONLY — No Action Needed

Found only in `test-classes/styles.css.js`. These are Cloudscape testing selectors, not production CSS.

| Component | Class | Source |
|-----------|-------|--------|
| date-range-picker | calendar-week | SUB: date-range-picker/test-classes/styles.css.js |
| date-range-picker | mode-switch | SUB: date-range-picker/test-classes/styles.css.js |
| tree-view | expanded | SUB: tree-view/test-classes/styles.css.js |

## MAYBE GAPS — Coincidental Name Match in Unrelated CSS

The class name exists in an internal component's CSS, but that internal component is NOT imported by the component being audited. Likely a name collision (e.g., many components have "icon", "dropdown", "label").

| Component | Class | Found In (unrelated) |
|-----------|-------|---------------------|
| autosuggest | dropdown | internal/components/dropdown/styles.css.js |
| date-picker | dropdown | internal/components/dropdown/styles.css.js |
| file-upload | label | internal/components/abstract-switch/styles.css.js |
| key-value-pairs | grid | internal/components/cartesian-chart/styles.css.js |
| multiselect | dropdown | internal/components/dropdown/styles.css.js |
| multiselect | filter-container | internal/components/chart-wrapper/styles.css.js |
| multiselect | label-tag | internal/components/option/styles.css.js |
| multiselect | option-content | internal/components/selectable-item/styles.css.js |
| progress-bar | description | internal/components/abstract-switch/styles.css.js |
| progress-bar | label | internal/components/abstract-switch/styles.css.js |
| select | dropdown | internal/components/dropdown/styles.css.js |
| select | filter-container | internal/components/chart-wrapper/styles.css.js |
| select | option-content | internal/components/selectable-item/styles.css.js |
| side-navigation | icon | internal/components/menu-dropdown/styles.css.js |
| steps | icon | internal/components/menu-dropdown/styles.css.js |
| steps | title | internal/components/chart-legend/styles.css.js |
| toggle-button | icon | internal/components/menu-dropdown/styles.css.js |
| token-group | icon | internal/components/menu-dropdown/styles.css.js |
| token-group | label-tag | internal/components/option/styles.css.js |

**Note on dropdown**: autosuggest, date-picker, multiselect, and select all USE dropdowns in practice but import them indirectly (via autosuggest-input, etc.). These may be real gaps if the component renders the dropdown itself rather than delegating to a child component. Needs per-component review.

**Note on select/multiselect option-related classes**: These components compose option rendering via child components. If using internal option/selectable-item components, the CSS is handled there.

## ALREADY PRESENT — Remove from SKIP

These classes exist in both Cloudscape CSS and our styles.ts. They shouldn't be in COMPONENT_SKIP because the audit would incorrectly silence a real check.

| Component | Class | Source |
|-----------|-------|--------|
| button-dropdown | dropdown | SUB: button-dropdown/mobile-expandable-group/styles.css.js |
| calendar | calendar-grid | SELF: calendar/styles.css.js |
| input | input-container | SELF: input/styles.css.js |
| split-panel | header-text | SELF: split-panel/styles.css.js |
| steps | header | SELF: steps/styles.css.js |
| top-navigation | overflow-menu-control | SELF: top-navigation/styles.css.js |
| wizard | navigation-link | SELF: wizard/styles.css.js |

## STYLES ONLY — Our Addition (Not in Cloudscape CSS)

Classes that appear in our styles.ts but not in Cloudscape CSS.

| Component | Class |
|-----------|-------|
| cards | header |
| file-token-group | file-name |
| key-value-pairs | group |

## INVENTED — Agent-Created Structural Classes (124 total)

These classes do NOT exist in any Cloudscape CSS file. They were invented by agents for structural purposes and need inline CSS or removal.

### Per-Component Breakdown

| Component | Invented Classes |
|-----------|-----------------|
| autosuggest | filter-input |
| code-editor | editor-textarea, editor-wrapper, line-number, line-numbers |
| collection-preferences | group-label, page-size-option, page-size-options, panel, panel-footer, panel-section, panel-section-title, panel-title |
| date-input | input-container |
| date-range-picker | absolute-mode, calendar-day, calendar-day-empty, calendar-day-header, calendar-day-number, calendar-grid, calendar-grid-header, calendar-grid-wrapper, calendar-grids, dropdown-body, error-message, mode-tab, mode-tab-active, option-label, relative-heading, relative-mode, relative-option, relative-option-label, relative-option-selected, relative-options, relative-radio |
| expandable-section | header-counter, header-description |
| file-token-group | error-text, file-error, file-error-text, file-thumbnail, file-warning-text |
| file-upload | constraint-text, dismiss-button, error-text, file-error, file-info, file-metadata, file-name, file-thumbnail, file-upload-root |
| hotspot | annotation-actions, annotation-content, annotation-header, annotation-popover, annotation-step-counter |
| key-value-pairs | pair |
| multiselect | filter-input, group-label, no-matches, option-description, option-label, option-label-tag, option-list, trigger-arrow, trigger-label |
| panel-layout | handle-bar, handle-wrapper |
| progress-bar | error, key-value, result-button-trigger, success |
| property-filter | filter-input, operation-label, token-item, token-list |
| select | filter-input, group-label, no-matches, option-description, option-label, option-label-tag, option-tags, option-list, trigger-arrow, trigger-label |
| side-navigation | icon-open, overflow-menu-control, overflow-menu-control-expandable-menu-trigger, overflow-menu-list-item-text |
| table | screenreader-only, selection-cell, table-empty, table-loading |
| tag-editor | action-cell, add-section, tag-list |
| time-input | input-container |
| tooltip | tooltip-body, tooltip-trigger |
| tutorial-panel | completed-actions, completed-screen, detail-actions, detail-header, detail-title, download-link, loading-state, prerequisites-alert, step-item, step-list, task-item, task-list, task-title, tutorial-completed, tutorial-description, tutorial-item, tutorial-list, tutorial-list-description, tutorial-list-title, tutorial-meta, tutorial-title |
| wizard | action-buttons-left, action-buttons-right, step-content |

## Full Per-Component Detail

### alert
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| content | YES (SELF) | NO | **REAL GAP** |

### autosuggest
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| dropdown | MAYBE (unrelated) | NO | MAYBE GAP |
| filter-input | NO | NO | INVENTED |

### button
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| content | YES (SELF) | NO | **REAL GAP** |

### button-dropdown
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| dropdown | YES (SUB) | YES | ALREADY PRESENT |
| icon | YES (SUB) | NO | **REAL GAP** |

### calendar
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| calendar-grid | YES (SELF) | YES | ALREADY PRESENT |

### cards
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| header | NO | YES | STYLES ONLY |
| section-content | YES (SELF) | NO | **REAL GAP** |

### code-editor
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| editor-textarea | NO | NO | INVENTED |
| editor-wrapper | NO | NO | INVENTED |
| line-number | NO | NO | INVENTED |
| line-numbers | NO | NO | INVENTED |

### collection-preferences
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| group-label | NO | NO | INVENTED |
| page-size-option | NO | NO | INVENTED |
| page-size-options | NO | NO | INVENTED |
| panel | NO | NO | INVENTED |
| panel-footer | NO | NO | INVENTED |
| panel-section | NO | NO | INVENTED |
| panel-section-title | NO | NO | INVENTED |
| panel-title | NO | NO | INVENTED |
| root | YES (SELF) | NO | **REAL GAP** |
| visible-content-group-label | YES (SELF) | NO | **REAL GAP** |
| visible-content-option | YES (SELF) | NO | **REAL GAP** |

### date-input
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| input-container | NO | NO | INVENTED |
| root | YES (SELF) | NO | **REAL GAP** |

### date-picker
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| dropdown | MAYBE (unrelated) | NO | MAYBE GAP |

### date-range-picker
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| absolute-mode | NO | NO | INVENTED |
| calendar-day | NO | NO | INVENTED |
| calendar-day-empty | NO | NO | INVENTED |
| calendar-day-header | NO | NO | INVENTED |
| calendar-day-number | NO | NO | INVENTED |
| calendar-grid | NO | NO | INVENTED |
| calendar-grid-header | NO | NO | INVENTED |
| calendar-grid-wrapper | NO | NO | INVENTED |
| calendar-grids | NO | NO | INVENTED |
| calendar-week | YES (test-classes) | NO | TEST-CLASS ONLY |
| dropdown-body | NO | NO | INVENTED |
| error-message | NO | NO | INVENTED |
| mode-switch | YES (test-classes) | NO | TEST-CLASS ONLY |
| mode-tab | NO | NO | INVENTED |
| mode-tab-active | NO | NO | INVENTED |
| option-label | NO | NO | INVENTED |
| relative-heading | NO | NO | INVENTED |
| relative-mode | NO | NO | INVENTED |
| relative-option | NO | NO | INVENTED |
| relative-option-label | NO | NO | INVENTED |
| relative-option-selected | NO | NO | INVENTED |
| relative-options | NO | NO | INVENTED |
| relative-radio | NO | NO | INVENTED |

### error-boundary
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| error-boundary | YES (SELF) | NO | **REAL GAP** |

### expandable-section
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| header-counter | NO | NO | INVENTED |
| header-description | NO | NO | INVENTED |
| header-text | YES (SELF) | NO | **REAL GAP** |

### file-token-group
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| error-text | NO | NO | INVENTED |
| file-error | NO | NO | INVENTED |
| file-error-text | NO | NO | INVENTED |
| file-name | NO | YES | STYLES ONLY |
| file-thumbnail | NO | NO | INVENTED |
| file-warning-text | NO | NO | INVENTED |

### file-upload
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| constraint-text | NO | NO | INVENTED |
| dismiss-button | NO | NO | INVENTED |
| error-text | NO | NO | INVENTED |
| file-error | NO | NO | INVENTED |
| file-info | NO | NO | INVENTED |
| file-metadata | NO | NO | INVENTED |
| file-name | NO | NO | INVENTED |
| file-thumbnail | NO | NO | INVENTED |
| file-upload-root | NO | NO | INVENTED |
| label | MAYBE (unrelated) | NO | MAYBE GAP |

### form
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| content | YES (SELF) | NO | **REAL GAP** |

### hotspot
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| annotation-actions | NO | NO | INVENTED |
| annotation-content | NO | NO | INVENTED |
| annotation-header | NO | NO | INVENTED |
| annotation-popover | NO | NO | INVENTED |
| annotation-step-counter | NO | NO | INVENTED |

### input
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| input-container | YES (SELF) | YES | ALREADY PRESENT |

### item-card
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| actions | YES (DEP: structured-item) | NO | **REAL GAP** |

### key-value-pairs
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| grid | MAYBE (unrelated) | NO | MAYBE GAP |
| group | NO | YES | STYLES ONLY |
| pair | NO | NO | INVENTED |

### multiselect
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| dropdown | MAYBE (unrelated) | NO | MAYBE GAP |
| filter-container | MAYBE (unrelated) | NO | MAYBE GAP |
| filter-input | NO | NO | INVENTED |
| group-label | NO | NO | INVENTED |
| label-tag | MAYBE (unrelated) | NO | MAYBE GAP |
| no-matches | NO | NO | INVENTED |
| option-content | MAYBE (unrelated) | NO | MAYBE GAP |
| option-description | NO | NO | INVENTED |
| option-label | NO | NO | INVENTED |
| option-label-tag | NO | NO | INVENTED |
| option-list | NO | NO | INVENTED |
| trigger-arrow | NO | NO | INVENTED |
| trigger-label | NO | NO | INVENTED |

### panel-layout
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| handle-bar | NO | NO | INVENTED |
| handle-wrapper | NO | NO | INVENTED |

### popover
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| content | YES (SELF) | NO | **REAL GAP** |
| header | YES (SELF) | NO | **REAL GAP** |
| header-row | YES (SELF) | NO | **REAL GAP** |

### progress-bar
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| additional-info | YES (SELF) | NO | **REAL GAP** |
| description | MAYBE (unrelated) | NO | MAYBE GAP |
| error | NO | NO | INVENTED |
| key-value | NO | NO | INVENTED |
| label | MAYBE (unrelated) | YES | MAYBE PRESENT |
| result-button-trigger | NO | NO | INVENTED |
| result-container-error | YES (SELF) | NO | **REAL GAP** |
| result-container-success | YES (SELF) | NO | **REAL GAP** |
| success | NO | NO | INVENTED |

### property-filter
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| dismiss-button | YES (SUB: filtering-token) | NO | **REAL GAP** |
| filter-input | NO | NO | INVENTED |
| operation-label | NO | NO | INVENTED |
| token-item | NO | NO | INVENTED |
| token-list | NO | NO | INVENTED |

### select
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| dropdown | MAYBE (unrelated) | NO | MAYBE GAP |
| filter-container | MAYBE (unrelated) | NO | MAYBE GAP |
| filter-input | NO | NO | INVENTED |
| group-label | NO | NO | INVENTED |
| label-tag | YES (DEP: option) | NO | **REAL GAP** |
| no-matches | NO | NO | INVENTED |
| option-content | MAYBE (unrelated) | NO | MAYBE GAP |
| option-description | NO | NO | INVENTED |
| option-label | NO | NO | INVENTED |
| option-label-tag | NO | NO | INVENTED |
| option-tags | NO | NO | INVENTED |
| option-list | NO | NO | INVENTED |
| selected-icon | YES (SUB: parts) | NO | **REAL GAP** |
| trigger-arrow | NO | NO | INVENTED |
| trigger-label | NO | NO | INVENTED |

### side-navigation
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| icon | MAYBE (unrelated) | NO | MAYBE GAP |
| icon-open | NO | NO | INVENTED |
| overflow-menu-control | NO | NO | INVENTED |
| overflow-menu-control-expandable-menu-trigger | NO | NO | INVENTED |
| overflow-menu-list-item-text | NO | NO | INVENTED |

### split-panel
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| header-text | YES (SELF) | YES | ALREADY PRESENT |

### steps
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| header | YES (SELF) | YES | ALREADY PRESENT |
| icon | MAYBE (unrelated) | NO | MAYBE GAP |
| title | MAYBE (unrelated) | NO | MAYBE GAP |

### table
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| body-cell | YES (SUB: body-cell) | NO | **REAL GAP** |
| body-cell-content | YES (SUB: body-cell) | NO | **REAL GAP** |
| header-cell | YES (SUB: header-cell) | NO | **REAL GAP** |
| header-cell-text | YES (SUB: analytics-metadata) | NO | **REAL GAP** |
| screenreader-only | NO | NO | INVENTED |
| selection-cell | NO | NO | INVENTED |
| table-empty | NO | NO | INVENTED |
| table-loading | NO | NO | INVENTED |

### tag-editor
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| action-cell | NO | NO | INVENTED |
| add-section | NO | NO | INVENTED |
| tag-list | NO | NO | INVENTED |

### time-input
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| input-container | NO | NO | INVENTED |

### toggle-button
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| icon | MAYBE (unrelated) | NO | MAYBE GAP |

### token
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| description | YES (DEP: option) | NO | **REAL GAP** |
| label-tag | YES (DEP: option) | NO | **REAL GAP** |

### token-group
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| description | YES (DEP: token-list) | NO | **REAL GAP** |
| dismiss-button | YES (SELF) | NO | **REAL GAP** |
| icon | MAYBE (unrelated) | NO | MAYBE GAP |
| label-tag | MAYBE (unrelated) | NO | MAYBE GAP |
| token | YES (SELF) | NO | **REAL GAP** |

### tooltip
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| tooltip-body | NO | NO | INVENTED |
| tooltip-trigger | NO | NO | INVENTED |

### top-navigation
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| overflow-menu-control | YES (SELF) | YES | ALREADY PRESENT |

### tree-view
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| expanded | YES (test-classes) | NO | TEST-CLASS ONLY |

### tutorial-panel
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| completed-actions | NO | NO | INVENTED |
| completed-screen | NO | NO | INVENTED |
| detail-actions | NO | NO | INVENTED |
| detail-header | NO | NO | INVENTED |
| detail-title | NO | NO | INVENTED |
| download-link | NO | NO | INVENTED |
| loading-state | NO | NO | INVENTED |
| prerequisites-alert | NO | NO | INVENTED |
| step-item | NO | NO | INVENTED |
| step-list | NO | NO | INVENTED |
| task-item | NO | NO | INVENTED |
| task-list | NO | NO | INVENTED |
| task-title | NO | NO | INVENTED |
| tutorial-completed | NO | NO | INVENTED |
| tutorial-description | NO | NO | INVENTED |
| tutorial-item | NO | NO | INVENTED |
| tutorial-list | NO | NO | INVENTED |
| tutorial-list-description | NO | NO | INVENTED |
| tutorial-list-title | NO | NO | INVENTED |
| tutorial-meta | NO | NO | INVENTED |
| tutorial-title | NO | NO | INVENTED |

### wizard
| Class | In Cloudscape CSS? | In our styles.ts? | Verdict |
|-------|-------------------|-------------------|---------|
| action-buttons-left | NO | NO | INVENTED |
| action-buttons-right | NO | NO | INVENTED |
| navigation-link | YES (SELF) | YES | ALREADY PRESENT |
| step-content | NO | NO | INVENTED |
