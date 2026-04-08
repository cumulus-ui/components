# CSS Class Cross-Check Report

> Generated: 2026-04-08
> Method: Compared SSR-generated templates (`scripts/output/*.template.ts`) against hand-written `src/{name}/internal.ts`, cross-referenced with `node_modules/@cloudscape-design/components/{name}/styles.css.js`.

## Conventions

- **INVENTED (no CSS)** — class in our code that does NOT exist in any Cloudscape `styles.css.js`. It has no CSS rules backing it and will be unstyled.
- **INVENTED (with CSS)** — class in our code not in SSR baseline but EXISTS in Cloudscape CSS. Valid — just not exercised by the baseline SSR props.
- **MISSING** — class in SSR template that our internal.ts does NOT apply. May cause missing styles.
- **PREFIXED (OK)** — our code uses BEM prefix (e.g. `abstract-switch--wrapper`), SSR uses short name (`wrapper`). Intentional for shadow DOM scoping.
- **OK** — class matches between SSR and our code.
- **N/A (SVG/child)** — SVG stroke classes (`stroke-linejoin-round`, `filled`, `no-stroke`) rendered inside `<cs-icon>` child component, not our template's responsibility.
- **N/A (SSR-only)** — SSR animation/replacement divs (`header-replacement`, `content-replacement`) not needed in Lit.

---

## Summary

| Status | Count |
|--------|-------|
| Fully aligned (no issues) | **10** |
| Minor issues (1-2 missing/invented) | **12** |
| Significant issues (3+ missing classes) | **16** |
| Custom dropdown impl (select/multiselect) | **2** |
| Minimal SSR template (no useful comparison) | **13** |

### Components with NO issues
`text-content`, `badge`, `box`, `icon`, `spinner`, `grid`, `live-region`, `form-field`, `file-dropzone`, `file-input`

### Components with the most missing Cloudscape classes
`button` (1 missing), `container` (1 structural), `header` (1 structural), `expandable-section` (many wrapper variants missing), `table` (many structural classes missing), `tabs` (several layout classes missing), `status-indicator` (container/display classes missing)

---

## Per-Component Details

### alert — 1 issue
**Template literal classes:** `` `type-${this.type}` `` → type-info, type-error, type-warning, type-success ✅
**OK:** root, hidden, alert, type-info/error/warning/success, icon-size-normal, alert-wrapper, alert-focus-wrapper, text, icon, message, content, dismiss, header
**PREFIXED (OK):** `alert-actions-wrapper--root` → root
**INVENTED (with CSS):** `action` (in CSS, for action button wrapper)
**N/A (SSR-only):** `header-replacement`, `content-replacement` (animation placeholders)
**N/A (SVG/child):** `stroke-linejoin-round`

### autosuggest — custom implementation
Our autosuggest uses a fully custom dropdown with inline styles in `static styles`. SSR template is minimal (just `root`). The implementations diverge significantly.
**INVENTED (with CSS):** `layout-strut`
**INVENTED (no CSS):** `dropdown` (has inline CSS in `static styles`)

### badge — aligned ✅
**Template literal classes:** `` `badge-color-${this.color}` `` → badge-color-grey, badge-color-blue, etc. ✅
**OK:** badge, badge-color-grey/blue/red/green (all via dynamic class)
No issues.

### box — aligned ✅
**Template literal classes:** `` `${variant}-variant` ``, `` `font-size-${fontSize}` ``, `` `font-weight-${fontWeight}` ``, `` `color-${color}` ``, spacing classes ✅
**OK:** root, box, all variant classes, all sizing/color/spacing classes generated dynamically
No issues.

### breadcrumb-group — 2 issues
**OK:** item, breadcrumb-group, breadcrumb-group-list
**PREFIXED (OK):** `breadcrumb-group-item--text` → text, `breadcrumb-group-item--icon` → icon
**MISSING:**
- `breadcrumb` (SSR puts class on `<li>` breadcrumb items, we use `breadcrumb-group-item--breadcrumb`)
- `anchor` (SSR puts class on `<a>` links, we use `breadcrumb-group-item--anchor`)
- `last` (SSR marks last breadcrumb with `last` class)
- `ghost` / `ghost-item` / `ghost-breadcrumb` (SSR renders ghost duplicates for measuring truncation — may not be needed in shadow DOM)
- `ellipsis` (SSR has ellipsis button for overflow)

**Fix:** Check if our BEM-prefixed `breadcrumb-group-item--breadcrumb`, `breadcrumb-group-item--anchor`, `breadcrumb-group-item--last` map correctly. If they do, these are PREFIXED (OK). The `ghost*` and `ellipsis` classes are for truncation behavior.

### button — 1 issue
**Template literal classes:** `` `variant-${this.variant}` `` → variant-normal, variant-primary, etc. ✅
**OK:** button, variant-normal/primary/link/icon/inline-link (via dynamic), disabled, button-no-text, full-width, link, icon, icon-left, icon-right
**INVENTED (with CSS):** `disabled-with-reason` (in CSS), `button-no-wrap` (in CSS)
**MISSING:**
- `content` → SSR wraps button text in `<span class="content">`. Our code uses `<slot>` directly without a content wrapper. **Fix: wrap `<slot>` in `<span class="content">`**.

### button-dropdown — 3 issues
**OK:** button-dropdown, dropdown-trigger
**PREFIXED (OK):** `button-dropdown-item-element--icon` → icon
**INVENTED (with CSS):** `items-list-container`
**INVENTED (no CSS):** `icon-left` (uses button's icon-left class but it's in button's CSS, not button-dropdown's), `dropdown` (has inline CSS)
**MISSING:**
- `variant-normal` → SSR applies variant class to trigger button
- `rotate` / `rotate-open` → SSR rotates caret icon
- `trigger-button` → SSR class for trigger

**Fix:** Add `variant-normal` to trigger button classMap, use `rotate`/`rotate-open` classes from Cloudscape CSS on caret.

### button-group — aligned ✅ (mostly)
**OK:** root, item-wrapper
**INVENTED (with CSS):** `divider`
**N/A (SVG/child):** `stroke-linejoin-round`

### cards — 3 issues
**OK:** root, section, section-header, section-content
**INVENTED (with CSS):** `selection-control`, `empty`
**INVENTED (no CSS):** `header` (cards uses `header` as slot wrapper, but this is a generic name that IS in CSS as `header-refresh`)
**MISSING:**
- `list` / `list-grid-${n}` → SSR applies grid layout via these classes. Our code uses `list` ✅ and `list-grid-${this._columns}` ✅ (these ARE in our code via template literals)
- `card` / `card-header` / `card-header-inner` → SSR wraps each card. Our code uses `card` ✅ and `card-header` ✅
- `refresh` → SSR adds refresh visual marker class

**Fix:** Add `refresh` class to cards for visual refresh mode support. Verify `card-header-inner` is used (SSR wraps header content in it).

### checkbox — aligned ✅
**OK:** root, checkbox-control, outline
**PREFIXED (OK):** All 12 BEM-prefixed classes correctly map to SSR short names:
- `abstract-switch--wrapper` → wrapper
- `abstract-switch--label-wrapper` → label-wrapper
- `abstract-switch--control` → control
- `checkbox-icon--root` → root (on SVG)
- `checkbox-icon--styled-box*` → styled-box*
- `checkbox-icon--styled-line*` → styled-line*
- `abstract-switch--native-input` → native-input
- `abstract-switch--outline` → outline
- `abstract-switch--content` → content
- `abstract-switch--label*` → label*
- `abstract-switch--description*` → description*

No issues. Exemplary BEM-prefix mapping.

### collection-preferences — 7 invented classes
**OK:** root
**INVENTED (with CSS):** `content-display-description`, `visible-content-group`, `visible-content-group-label`, `visible-content-option` (all exist in CSS, used for preferences panel)
**INVENTED (no CSS):**
- `panel-section` → custom class, no Cloudscape CSS
- `panel-section-title` → custom class
- `page-size-options` → custom class
- `page-size-option` → custom class
- `panel` → custom class
- `panel-title` → custom class
- `panel-footer` → custom class

**Fix:** These invented classes likely have inline CSS in `static styles`. If so, they're valid. If not, replace with Cloudscape equivalents from `collection-preferences/styles.css.js`.

### column-layout — mostly aligned
**Template literal classes:** `` `grid-columns-${columns}` ``, `` `grid-variant-${variant}` ``, `` `grid-${borders}-borders` `` → generates all SSR classes ✅
**OK:** column-layout, grid, grid-columns-2/3/4, grid-variant-text-grid, grid-horizontal-borders, grid-vertical-borders
**INVENTED (with CSS):** `grid-breakpoint-xs` (in CSS, for responsive breakpoints)
**MISSING:** `grid-no-gutters` (SSR adds when `disableGutters=true`)

**Fix:** Add `grid-no-gutters` class when `disableGutters` is true.

### container — 1 structural issue
**Template literal classes:** `` `variant-${this.variant}` `` → variant-default, variant-stacked ✅
**OK:** root, variant-default, variant-stacked, fit-height, content-wrapper, content-wrapper-fit-height, content, content-fit-height, content-inner, with-paddings, with-header, header, footer, with-divider, with-side-media, with-top-media, header-with-media, media, media-top
**INVENTED (with CSS):** `media`, `media-top` (exist in CSS for media layout)
**MISSING:**
- `refresh` → SSR adds for visual refresh mode

**Fix:** Add `refresh: true` to root classMap.

### content-layout — mostly aligned
**OK:** layout, content, is-visual-refresh, has-header, default-padding, is-overlap-disabled, header-wrapper, with-divider, background, has-default-background
**INVENTED (with CSS):** `header-background`
**MISSING:**
- `divider` → SSR uses as standalone class (our code uses `with-divider` instead)

**Fix:** Verify if `with-divider` and `divider` are different classes. SSR applies both `with-divider` AND `divider` — we may need the `divider` class on the divider element itself.

### copy-to-clipboard — 1 issue
**OK:** root
**MISSING:**
- `inline-container` / `inline-container-trigger` → SSR uses for inline variant layout

**Fix:** Add `inline-container` and `inline-container-trigger` classes when variant is `inline`.

### error-boundary — 1 issue
**MISSING:**
- `error-boundary` → SSR wraps content in div with this class

**Fix:** Add `error-boundary` class to root element.

### expandable-section — many missing wrapper variants
**Template literal classes:** `` `wrapper-${variant}` ``, `` `content-${variant}` `` ✅
**OK:** root, wrapper, wrapper-expanded, click-target, icon, expanded, icon-container, icon-container-container, expand-button, header-wrapper, header-text, header-container, header-container-button, header-button, header-actions-wrapper, content, content-expanded
**INVENTED (no CSS):**
- `header-counter` → custom class for counter display
- `header-description` → custom class for description text

**MISSING:**
- `wrapper-default` / `wrapper-navigation` / `wrapper-footer` / `wrapper-compact` / `wrapper-container` → SSR uses variant-specific wrapper classes (our template literal `` `wrapper-${variant}` `` should generate these)
- `content-default` / `content-footer` / `content-compact` → SSR uses variant-specific content classes (our template literal should generate these)
- `wrapper-not-expanded-without-actions` → SSR class for non-expanded state without actions
- `filled` → icon SVG fill class (N/A, handled by cs-icon)
- `focusable` → SSR adds to expand button

**Fix:** Verify `` `wrapper-${variant}` `` and `` `content-${variant}` `` generate correct classes. Add `wrapper-not-expanded-without-actions` condition. `header-counter` and `header-description` need inline CSS or Cloudscape equivalents.

### file-dropzone — aligned ✅
**OK:** root (from hovered class in internal.ts), content
No issues.

### file-input — aligned ✅
**OK:** root, file-input, file-input-button
**N/A (SVG/child):** `stroke-linejoin-round`

### flashbar — 2 structural issues
**Template literal classes:** `` `flash-type-${type}` `` → flash-type-success, flash-type-error, etc. ✅
**OK:** flashbar, flash-list, flash-list-item, flash, flash-type-success/error/warning/info/in-progress, flash-icon, flash-body, flash-focus-container, flash-message, flash-header, flash-content
**INVENTED (with CSS):** `action-button-wrapper`, `dismiss-button-wrapper`, `dismiss-button`
**MISSING:**
- `flash-with-motion` → SSR adds for animation support
- `flash-text` → SSR wraps text content

**Fix:** Consider adding `flash-with-motion` class. The `flash-text` class wraps the message text for styling.

### form-field — aligned ✅
**OK:** root, label-wrapper, label, description, controls, control, hints, constraint, constraint-has-validation-text, error-icon-shake-wrapper, error-icon-scale-wrapper, error__message, warning-icon-shake-wrapper, warning-icon-scale-wrapper, warning__message
**N/A (SVG/child):** `stroke-linejoin-round`
No issues.

### grid — aligned ✅
**Template literal classes:** `` `colspan-${colspan}` `` → generates all grid column classes ✅
**OK:** grid, no-gutters, grid-column, restore-pointer-events
No issues.

### header — 1 structural issue
**Template literal classes:** `` `root-variant-${variant}` ``, `` `title-variant-${variant}` ``, `` `main-variant-${variant}` ``, `` `heading-variant-${variant}` ``, `` `heading-text-variant-${variant}` ``, `` `actions-variant-${variant}` ``, `` `description-variant-${variant}` `` ✅
**OK:** root, root-variant-h1/h2/h3, root-no-actions, root-has-description, main, main-variant-h1, title, title-variant-h1/h2/h3, heading, heading-variant-h1/h2/h3, heading-text-variant-h1/h2/h3, counter, actions, description, info
**MISSING:**
- `refresh` → SSR adds for visual refresh mode
- `heading-text` → SSR uses this as a static class alongside variant-specific `heading-text-variant-*`

**Fix:** Add `refresh: true` to root classMap. Add `heading-text: true` as a static class alongside the variant-specific class.

### icon — aligned ✅
**Template literal classes:** `` `size-${this.size}` ``, `` `size-${this.size}-mapped-height` ``, `` `variant-${this.variant}` `` ✅
**OK:** icon, size-normal, size-normal-mapped-height, size-small/medium/big/large and mapped-height variants, variant-normal/disabled/error/success/warning/link
No issues.

### input — 2 issues
**OK:** root, input-container, input
**INVENTED (with CSS):** `input-icon-right` (in CSS for right-side icons)
**MISSING:**
- `input-invalid` / `input-warning` / `input-readonly` → SSR applies these state classes to the input wrapper
- `input-icon-left` / `input-has-icon-left` → SSR adds for search icon positioning
- `input-type-search` → SSR adds for search variant

**Fix:** Add conditional classes: `input-invalid` when invalid, `input-warning` when warning, `input-readonly` when readOnly, `input-type-search` when type is search.

### key-value-pairs — 2 invented
**OK:** key-value-pairs, term, key-label, detail
**INVENTED (with CSS):** `group-title`, `group-list`
**INVENTED (no CSS):**
- `pair` → custom class wrapping each key-value pair
- `grid` → custom class for grid layout

**Fix:** `pair` and `grid` need inline CSS or replacement with Cloudscape equivalents.

### link — mostly aligned
**Template literal classes:** `` `variant-${this.variant}` ``, `` `font-size-${this.fontSize}` `` ✅
**OK:** link, variant-secondary/primary/info/value-large, font-size-body-m/body-s/heading-m, color-inverted, button, icon-wrapper, icon
No issues.

### list — 2 invented
**OK:** (via template literal and BEM-prefixed classes)
**PREFIXED (OK):** `structured-item--main/content-wrap/wrap-actions/content/actions` → main/content-wrap/wrap-actions/content/actions
**INVENTED (no CSS):**
- `structured-item--icon` → custom class for item icon, no Cloudscape CSS
- `structured-item--secondary` → custom class for secondary content, no Cloudscape CSS

**MISSING:**
- `item` / `root` / `disable-paddings` / `disable-item-paddings` → SSR applies these to list root and items

**Fix:** Add `item` class to list items, `root` to root, and `disable-paddings`/`disable-item-paddings` conditional classes. `structured-item--icon` and `structured-item--secondary` need inline CSS.

### live-region — aligned ✅
**OK:** root, announcer
No issues (minimal component).

### multiselect — custom dropdown implementation
Uses fully custom dropdown with extensive inline CSS in `static styles`. SSR template shows Cloudscape's native button-trigger pattern which is fundamentally different.
**OK:** root
**INVENTED (with CSS):** `tokens`
**INVENTED (no CSS — but has inline CSS):** trigger, trigger-disabled, trigger-invalid, trigger-label, trigger-arrow, trigger-arrow-open, dropdown, filter-container, filter-input, option-list, option, option-highlighted, option-selected, option-disabled, option-checkbox, option-checkbox-checked, option-content, option-label, option-label-tag, option-description, group-label, no-matches, select-parts--trigger, select-parts--placeholder, select-parts--filter

**Note:** All invented classes have CSS rules in the component's `static styles` block. This is an intentional divergence from Cloudscape's Cloudscape dropdown pattern (which uses separate dropdown/button-trigger sub-components). The inline CSS replicates the visual appearance.

### pagination — aligned ✅
**OK:** root, root-disabled, page-number, page-item, button-current, button-disabled, arrow, dots
**N/A (SVG/child):** `stroke-linejoin-round`

### popover — complex component
**OK:** root
**INVENTED (with CSS):** `container-arrow`, `arrow`, `arrow-outer`, `arrow-inner`, `header-row`, `header`, `dismiss-control`, `content` (all exist in Cloudscape CSS)
**MISSING:**
- `trigger` / `trigger-type-text` → SSR wraps trigger element with these classes

**Fix:** Add `trigger` and `trigger-type-text` classes to trigger wrapper.

### progress-bar — 3 invented
**Template literal classes:** `` `variant-${this.variant}` `` ✅
**OK:** progress-container, percentage-container, word-wrap, progress, complete
**INVENTED (with CSS):** `result-state`, `result-button`, `additional-info`
**INVENTED (no CSS):**
- `label` → custom class for label slot wrapper
- `description` → custom class for description slot wrapper
- `result-button-trigger` → custom class for result action button

**MISSING:**
- `root` → SSR has root class on outermost div
- `flash` / `label-flash` / `label-key-value` / `key-value` → variant-specific label classes
- `result-container-error` / `result-container-success` → SSR result container classes
- `result-text` → SSR result text wrapper
- `percentage` → SSR percentage display class

**Fix:** Add `root` to outermost div. Add variant-specific label classes (`label-flash` when variant=flash, `label-key-value` when variant=key-value). Add `result-container-${status}` classes. `label`, `description`, `result-button-trigger` need inline CSS.

### prompt-input — 2 issues
**OK:** textarea-wrapper, primary-action, action-button
**MISSING:**
- `root` → SSR has root class
- `textarea` / `textarea-invalid` / `textarea-readonly` / `textarea-warning` → state classes on textarea element
- `disabled` / `invalid` → top-level state classes

**Fix:** Add `root` class. Add textarea state classes conditionally.

### property-filter — 6 invented
**OK:** root, search-field, input-wrapper
**INVENTED (with CSS):** `token-trigger`, `dismiss-button`, `tokens`, `results`
**INVENTED (no CSS):**
- `token-item` → custom class for token list items
- `token-box` / `token-normal` → custom token styling classes
- `filter-input` → custom filter input class
- `token-list` → custom token list wrapper
- `operation-label` → custom AND/OR label class

**Fix:** These likely have inline CSS. If not, replace with Cloudscape equivalents from property-filter/filtering-token/styles.css.js.

### radio-group — 2 structural issues
**Template literal classes:** via BEM-prefixed classes ✅
**PREFIXED (OK):** All radio-button-- and abstract-switch-- prefixed classes correctly map:
- `radio-button--styled-circle-*` → styled-circle-*
- `abstract-switch--label*` → label*
- `abstract-switch--description*` → description*
- `abstract-switch--wrapper` → wrapper
- `abstract-switch--control` → control
- etc.
**MISSING:**
- `radio-group` → SSR has this on root element
- `radio-control` → SSR has this on radio control span (our `radio-button--radio-control` maps to it, but verify)

**Fix:** Add `radio-group` class to root element. Verify `radio-button--radio-control` BEM prefix maps correctly.

### segmented-control — 3 missing
**OK:** segment-part, root
**MISSING:**
- `segment` → SSR has this on each segment element
- `selected` → SSR marks active segment
- `refresh` → SSR adds for visual refresh
- `segment-count-${n}` → SSR adds segment count class for sizing

**Fix:** Add `segment` static class, `selected` conditional class, `refresh` class, and `` `segment-count-${count}` `` class.

### select — custom dropdown implementation
Same pattern as multiselect. Uses fully custom dropdown with extensive inline CSS.
**OK:** root
**INVENTED (with CSS):** `selected-icon`
**INVENTED (no CSS — but has inline CSS):** trigger, trigger-disabled, trigger-invalid, trigger-label, trigger-arrow, trigger-arrow-open, dropdown, filter-container, filter-input, option-list, option, option-highlighted, option-selected, option-disabled, option-content, option-label, option-label-tag, option-description, option-tags, group-label, no-matches, select-parts--trigger, select-parts--placeholder, select-parts--filter

**Note:** Same as multiselect — intentional divergence with inline CSS covering all custom classes.

### slider — aligned ✅ (mostly)
**OK:** root, slider, slider-track, slider-range, thumb, disabled, labels, labels-noref, labels-min, labels-max
**MISSING:**
- `tooltip-thumb` → SSR has tooltip on thumb element
- `readonly` → SSR applies readonly class

**Fix:** Add `tooltip-thumb` class to thumb when tooltip is shown. Add `readonly` conditional class.

### space-between — aligned ✅
**Template literal classes:** `` `${this.direction}` ``, `` `${this.direction}-${this.size}` `` → vertical, vertical-s, horizontal, horizontal-s, etc. ✅
**OK:** root, vertical, vertical-s/l, horizontal, horizontal-s, align-center/start/end, child (via ::slotted)
No issues.

### spinner — aligned ✅
**Template literal classes:** `` `size-${this.size}` ``, `` `variant-${this.variant}` `` ✅
**OK:** root, size-normal/big/large, variant-normal/disabled/inverted, circle, circle-left, circle-right
No issues.

### status-indicator — 2 structural issues
**Template literal classes:** `` `status-${this.type}` `` → status-success, status-error, etc. ✅
**OK:** root, status-success/error/warning/info/stopped/pending/in-progress/loading, icon, container
**INVENTED (with CSS):** `display-inline`, `overflow-ellipsis`
**MISSING:**
- `display-inline-block` → SSR uses this on certain wrapper elements (our code uses `display-inline`)

**Fix:** Verify if `display-inline` vs `display-inline-block` causes visual differences. May need to swap.

### steps — 1 invented
**Template literal classes:** used for status-type mapping ✅
**OK:** header, connector, horizontal-header, list, root, horizontal
**INVENTED (with CSS):** `details`
**INVENTED (no CSS):**
- `title` → custom class for step title text

**Fix:** `title` needs inline CSS or replacement.

### table — 4 invented, several missing
**Template literal classes:** `` `variant-${this.variant}` ``, `` `content-density-${density}` `` ✅
**OK:** table, header-cell, header-cell-text, header-cell-sortable, header-cell-sorted, sorting-icon, sorting-icon-ascending, body-cell, body-cell-wrap, row, row-selected, row-striped, wrapper, root
**INVENTED (with CSS):** `tools`, `tools-filtering`, `tools-align-right`, `tools-pagination`, `empty`
**INVENTED (no CSS — but has inline CSS):**
- `table-loading` → custom loading state (has inline CSS)
- `table-empty` → custom empty state (has inline CSS)
- `selection-cell` → custom selection column (has inline CSS)
- `screenreader-only` → custom a11y class (has inline CSS)
- `content-density-compact` → custom density class (has inline CSS)

**MISSING:**
- `variant-container` / `variant-stacked` / `variant-embedded` / `variant-borderless` → SSR variant classes (our `` `variant-${variant}` `` should generate these ✅)
- `is-visual-refresh` → SSR adds for visual refresh mode
- `header-cell-variant-embedded` / `header-cell-variant-borderless` → SSR variant-specific header cell classes
- `body-cell-first-row` / `body-cell-last-row` → SSR marks first/last row cells
- `body-cell-content` → SSR wraps cell content
- `cell-merged` / `cell-merged-content` → SSR for merged cells
- `wrapper-content-measure` → SSR measurement wrapper
- `thead-active` → SSR marks active thead
- `resize-divider` → SSR column resize divider

**Fix:** Add `is-visual-refresh` class. Add `body-cell-first-row` and `body-cell-last-row` classes based on row index. Add `body-cell-content` wrapper span inside body cells. Other missing classes are for advanced features (column resizing, merged cells) that may not be implemented yet.

### tabs — several missing
**OK:** root, tabs, tabs-header, tabs-header-with-divider, tabs-header-list, tabs-tab, tabs-tab-header-container, tabs-tab-link, tabs-tab-active, tabs-tab-disabled, tabs-tab-label, tabs-content, tabs-content-active, tabs-content-wrapper, tabs-container-content-wrapper, with-paddings, refresh, fit-height
**MISSING:**
- `tab-header-scroll-container` → SSR has scroll container for tab header overflow
- `tabs-tab-focusable` / `tabs-tab-focused` → SSR marks focusable/focused tabs

**Fix:** Consider adding scroll container wrapper with `tab-header-scroll-container` class. Add `tabs-tab-focusable` and `tabs-tab-focused` classes.

### text-content — aligned ✅
**OK:** text-content
No issues.

### text-filter — aligned ✅
**OK:** root
**INVENTED (with CSS):** `results`
No issues.

### textarea — 4 missing state classes
**OK:** root
**MISSING:**
- `textarea` → SSR has this on the textarea element
- `textarea-invalid` / `textarea-readonly` / `textarea-warning` → state classes

**Fix:** Add `textarea` static class to textarea element. Add conditional state classes.

### tiles — mostly aligned via BEM prefix
**Template literal classes:** `` `column-${n}` `` ✅
**OK:** root, selected, disabled
**PREFIXED (OK):** All abstract-switch-- and radio-button-- prefixed classes correctly map (17 BEM-prefixed classes)
**INVENTED (with CSS):** `image`
**MISSING:**
- `columns` / `column-2` / `column-3` → SSR column layout classes
- `tile-container` → SSR tile container class
- `no-image` → SSR no-image variant
- `readonly` → SSR readonly state
- `refresh` → SSR visual refresh

**Fix:** Add `columns`, `` `column-${n}` ``, `tile-container`, `no-image`, `readonly`, `refresh` classes.

### time-input — 1 invented
**OK:** root
**INVENTED (no CSS):**
- `input-container` → custom wrapper class

**Fix:** `input-container` likely has inline CSS from input component. Verify it exists in input/styles.css.js (it does: `input-container` is in input CSS). Mark as valid.

### toggle — 8 missing (false positive)
**OK:** root, outline, toggle-control, toggle-control-checked/disabled/readonly, toggle-handle, toggle-handle-checked/disabled/readonly
**PREFIXED (OK):** All 11 abstract-switch-- prefixed classes correctly map

**Analysis:** Initially reported 8 missing toggle-control/handle classes, but these ARE in our code via classMap. The script incorrectly categorized them because they appeared in both SSR and internal.ts. **Actually aligned ✅**.

### toggle-button — 3 missing
**OK:** (none directly matching)
**MISSING:**
- `variant-normal` → SSR default variant class
- `pressed` → SSR pressed state class
- `variant-icon` → SSR icon variant class

**Fix:** Add `variant-normal`/`variant-icon` and `pressed` classes to toggle-button.

### token — 2 invented
**OK:** token-option-inline
**INVENTED (with CSS):** `dismiss-button`, `dismiss-button-inline`
**INVENTED (no CSS):**
- `label-tag` → custom class for label tag
- `description` → custom class for description

**MISSING:**
- `root` / `token-normal` / `token-inline` → SSR root and variant classes
- `token-box` / `token-box-without-dismiss` / `token-box-disabled` / `token-box-readonly` / `token-box-inline` → SSR token box classes

**Fix:** Add `root`, `token-normal`/`token-inline` variant classes, and `token-box*` state classes. `label-tag` and `description` need inline CSS.

### token-group — 3 invented
**OK:** token, dismiss-button
**INVENTED (with CSS):** `description`, `toggle`
**INVENTED (no CSS):**
- `token-normal` → custom token variant class
- `label-tag` → custom tag label class
- `tags` → custom tag wrapper class

**MISSING:**
- `root` / `has-items` → SSR root classes
- `list` / `list-item` → SSR list structure classes
- `horizontal` / `vertical` → SSR alignment classes

**Fix:** Add `root`, `has-items`, `list`, `list-item`, `horizontal`/`vertical` classes. `token-normal`, `label-tag`, `tags` need inline CSS.

### tree-view — 3 invented
**OK:** tree, filled, stroke-linejoin-round (SVG classes inherited from icon)
**PREFIXED (OK):** All 18 BEM-prefixed classes correctly map:
- `expand-toggle-button--expand-toggle-icon*` → expand-toggle-icon*
- `tree-view-tree-item--treeitem*` → treeitem*
- `tree-view-tree-item--offset` → offset
- `structured-item--root/main/content-wrap/content/actions` → root/main/content-wrap/content/actions
- etc.
**INVENTED (no CSS):**
- `expandable` → custom class marking expandable items
- `expanded` → custom class marking expanded items
- `structured-item--icon` → custom class for item icons

**Fix:** `expandable` and `expanded` need inline CSS or Cloudscape equivalents. `structured-item--icon` needs inline CSS.

---

## Concrete Fix Priority List

### P0 — Missing classes causing visual breakage
| Component | Fix | Impact |
|-----------|-----|--------|
| button | Wrap `<slot>` in `<span class="content">` | Button text layout |
| textarea | Add `textarea`, `textarea-invalid/readonly/warning` classes | All textarea styling |
| toggle-button | Add `variant-normal`, `pressed`, `variant-icon` classes | All toggle-button styling |
| input | Add `input-invalid/warning/readonly`, `input-type-search` classes | State styling |
| prompt-input | Add `root`, `textarea/textarea-*` state classes | All state styling |

### P1 — Missing classes causing partial visual issues
| Component | Fix | Impact |
|-----------|-----|--------|
| container | Add `refresh` to root classMap | Visual refresh mode |
| header | Add `refresh`, `heading-text` static class | Visual refresh mode, heading styling |
| expandable-section | Add `wrapper-not-expanded-without-actions` | Layout edge case |
| segmented-control | Add `segment`, `selected`, `refresh`, `segment-count-*` | All segment styling |
| slider | Add `readonly` class, `tooltip-thumb` | Readonly state |
| tabs | Add `tab-header-scroll-container`, `tabs-tab-focusable/focused` | Scroll overflow, focus |
| tiles | Add `columns`, `column-*`, `tile-container`, `readonly`, `refresh` | Grid layout, states |
| error-boundary | Add `error-boundary` class | Root styling |

### P2 — Missing classes for advanced features
| Component | Fix | Impact |
|-----------|-----|--------|
| table | Add `is-visual-refresh`, `body-cell-first-row/last-row`, `body-cell-content` | Visual polish |
| token/token-group | Add `root`, `token-box*`, `has-items`, `list`, `horizontal/vertical` | Token structure |
| radio-group | Add `radio-group` class to root | Root styling |
| copy-to-clipboard | Add `inline-container`, `inline-container-trigger` | Inline variant |
| progress-bar | Add `root`, variant-specific label classes, `result-container-*` | Layout structure |
| flashbar | Add `flash-with-motion`, `flash-text` | Animation, text wrapping |
| breadcrumb-group | Add `last`, `ellipsis` classes | Overflow handling |
| popover | Add `trigger`, `trigger-type-text` | Trigger styling |

### P3 — Invented classes needing CSS review
These classes exist in our code but NOT in Cloudscape CSS. Verify they have inline CSS in `static styles`:
| Component | Class | Action |
|-----------|-------|--------|
| collection-preferences | `panel-section`, `panel-title`, `panel-footer`, etc. | Check `static styles` |
| key-value-pairs | `pair`, `grid` | Check `static styles` |
| progress-bar | `label`, `description`, `result-button-trigger` | Check `static styles` |
| property-filter | `token-item`, `token-box`, `filter-input`, `operation-label` | Check `static styles` |
| steps | `title` | Check `static styles` |
| tree-view | `expandable`, `expanded`, `structured-item--icon` | Check `static styles` |
| list | `structured-item--icon`, `structured-item--secondary` | Check `static styles` |
| token/token-group | `label-tag`, `description`, `tags`, `token-normal` | Check `static styles` |

### Intentional Divergences (no action needed)
- **select/multiselect**: Custom dropdown implementation with inline CSS. These components intentionally diverge from Cloudscape's button-trigger/dropdown sub-component pattern.
- **autosuggest**: Custom dropdown implementation.
- **All BEM-prefixed classes**: Intentional for shadow DOM scoping. ~70+ classes across checkbox, radio-group, tiles, toggle, tree-view, list.
- **SVG classes** (`stroke-linejoin-round`, `filled`, `no-stroke`): Handled by `<cs-icon>` child component.
- **SSR animation classes** (`header-replacement`, `content-replacement`): Cloudscape SSR animation system, not needed in Lit.
