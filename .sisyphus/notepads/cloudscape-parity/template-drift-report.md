# Template Drift Report

Generated: 2026-04-08
Components audited: 56 (54 with SSR configs + internal.ts, 2 skipped)
Skipped: `icon-provider` (context provider only), `tooltip` (requires browser APIs)

## Summary

- **MATCH**: 2 components
- **MINOR DRIFT**: 24 components
- **MAJOR DRIFT**: 28 components

## Systemic Patterns

Before the per-component details, these cross-cutting patterns explain the majority of drift:

### 1. Class Naming Convention Split (affects ~20 components)
SSR templates use **short class names** from Cloudscape's React DOM output (`wrapper`, `control`, `label`, `styled-box`). Hand-written templates use **BEM-prefixed names** from imported style modules (`abstract-switch--wrapper`, `checkbox-icon--styled-box`, `radio-button--radio-control`). This is because multiple style modules are imported into a single shadow DOM and must avoid collisions. **This is intentional and correct in the hand-written code.**

### 2. Component Composition vs Inline HTML (affects ~30 components)
Hand-written templates delegate to sub-components (`<cs-icon>`, `<cs-button>`, `<cs-spinner>`, `<cs-input>`, `<cs-container>`, `<cs-status-indicator>`). SSR templates inline the full expanded HTML with raw `<svg>`, `<button>`, `<input>` elements. **This is an architectural choice for Web Components.**

### 3. ARIA Attributes Universally Missing from SSR (affects ~45 components)
SSR templates consistently omit: `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-invalid`, `aria-checked`, `aria-expanded`, `aria-controls`, `role` attributes. The hand-written versions have comprehensive ARIA. **SSR templates cannot be used as ARIA reference.**

### 4. Wrapper Div Artifacts (affects ~15 components)
SSR captures Cloudscape's internal wrapper divs (scroll containers, resize handles, sticky sentinels, animation placeholders) that the hand-written versions intentionally omit.

### 5. `data-analytics-*` and `refresh` Classes (affects ~12 components)
SSR has `data-analytics-funnel-value`, `data-analytics-alert`, `data-testid`, and `refresh` classes from Cloudscape internals. Hand-written versions omit these.

### 6. Slot vs Inline Content (affects all components)
SSR renders children inline (React snapshot). Hand-written uses `<slot>`, `<slot name="header">`, etc. **This is expected and correct.**

---

## Component Details

### MATCH (2)

---

#### content-layout — MATCH
- SSR root: `<div class="layout is-visual-refresh has-header">`
- Hand-written root: `<div class="layout is-visual-refresh has-header">`
- Classes align: `layout`, `is-visual-refresh`, `has-header`, `default-padding`, `is-overlap-disabled`, `background`, `has-default-background`, `header-wrapper`, `with-divider`, `content`
- Hand-written adds optional `header-background` div (conditional)
- No structural differences. Slot-based rendering is the only adaptation.

#### badge — MATCH
- SSR root: `<span class="badge badge-color-grey">`
- Hand-written root: `<span class="badge badge-color-${this.color}">`
- Identical structure (span > slot). Dynamic color class covers all SSR variants.
- No ARIA differences. No nesting differences.

---

### MINOR DRIFT (24)

---

#### box — MINOR DRIFT
- SSR root: `<div class="root box">`, Hand-written root: `<{dynamic-tag} class="root box">`
- SSR always renders `<div>`; hand-written dynamically switches root tag based on `variant` (h1, p, span, strong, code, etc.)
- Class naming convention identical. Hand-written supports additional class families (display, textAlign, float, margin, padding) not exercised by SSR.
- **Fix needed**: SSR should note dynamic tag switching.

#### spinner — MINOR DRIFT
- SSR root: `<span class="root size-normal variant-normal">`
- Hand-written root: `<span class="root size-${this.size} variant-${this.variant}" role="img" aria-label="Loading">`
- DOM structure and CSS classes identical.
- **Missing from SSR**: `role="img"` and `aria-label="Loading"` (accessibility gap).

#### icon — MINOR DRIFT
- SSR root: `<span class="icon size-normal-mapped-height size-normal variant-normal">`
- Hand-written root: `<span class="icon size-${size} size-${size}-mapped-height variant-${variant}">`
- CSS classes identical. Hand-written adds conditional ARIA (`role="img"`, `aria-label`, `aria-hidden`) and supports `url` prop (renders `<img>`) and icon provider system.

#### text-content — MINOR DRIFT
- SSR root: `<div class="text-content">`, Hand-written root: `<div class="text-content">`
- SSR has spurious `<p>` wrapper from React snapshot. Hand-written correctly places `<slot>` directly.
- Root element and class identical.

#### textarea — MINOR DRIFT
- SSR root: `<span class="root">`, Hand-written root: `<div class="root">`
- CSS classes match perfectly: `root`, `textarea`, `textarea-invalid`, `textarea-readonly`, `textarea-warning`.
- **Root tag mismatch**: SSR uses `<span>`, hand-written uses `<div>`.
- Missing from SSR: all ARIA attributes and form-field context.

#### radio-group — MINOR DRIFT
- SSR root: `<div class="radio-group" role="radiogroup">`
- Hand-written root: `<div class="root radio-group" role="radiogroup">`
- Structural nesting matches (5 levels). Class names systematically renamed with `abstract-switch--` and `radio-button--` prefixes for shadow DOM scoping.
- Hand-written adds `root`, `selected`, `horizontal` classes and richer ARIA (`aria-label`, `aria-required`, `aria-labelledby`, `aria-describedby`).

#### tiles — MINOR DRIFT
- SSR root: `<div class="root" role="radiogroup">`, Hand-written root: same
- Grid structure matches. Tile container classes close but hand-written adds `breakpoint-xs`, `has-metadata`.
- Inner radio structure uses same prefix renaming pattern as radio-group.
- ARIA richer in hand-written.

#### checkbox — MINOR DRIFT
- SSR root: `<span class="wrapper root">`, Hand-written root: `<span class="root abstract-switch--wrapper">`
- Structural nesting identical (4 levels, 1:1 element correspondence).
- All class names follow systematic prefix renaming (`control` → `abstract-switch--control`, `styled-box` → `checkbox-icon--styled-box`).
- Hand-written adds description support and comprehensive ARIA on input.
- `checkbox-control` class shared between both.

#### pagination — MINOR DRIFT
- SSR root: `<ul class="root">`, Hand-written root: `<nav><ul class="root">`
- **CSS classes are a perfect match**: `root`, `root-disabled`, `page-item`, `page-number`, `button`, `button-current`, `button-disabled`, `arrow`, `dots`.
- Hand-written wraps `<ul>` in `<nav aria-label="Pagination">` (correct for accessibility).
- ARIA significantly better in hand-written (`aria-current="page"` vs `"true"`, proper arrow labels).
- Arrow icons use `<cs-icon>` instead of inline SVG.

#### segmented-control — MINOR DRIFT
- SSR root: `<div class="root">`, Hand-written root: `<div class="root">`
- Core segment button structure matches well.
- `role="toolbar"` (SSR) vs `role="group"` (hand-written) — toolbar is more semantically correct.
- SSR has `refresh` class and mobile `<select>` fallback absent from hand-written.
- Hand-written adds `disabled`, `with-text`, `with-no-text` classes.

#### slider — MINOR DRIFT
- SSR root: `<div class="root">`, Hand-written root: `<div class="root">`
- Core slider structure matches (track + range + input + labels).
- Hand-written missing tooltip-thumb element and `readonly` state class.
- Hand-written has better ARIA on input (`aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-label`).

#### container — MINOR DRIFT
- SSR root: `<div class="root variant-default refresh">`
- Hand-written root: `<div class="root variant-${variant}">`
- Core structure matches (root > content-wrapper > header + content > content-inner).
- SSR has `refresh` class; hand-written omits it.
- Hand-written adds media/footer slot support not in SSR baseline.

#### column-layout — MINOR DRIFT
- SSR root: `<div class="column-layout">`, Hand-written root: same
- Root structure matches. SSR wraps each child in 3 nested divs; hand-written uses CSS grid with `<slot>`.
- Class names align with dynamic patterns. Hand-written adds `grid-breakpoint-xs`, `grid-no-gutters`.

#### grid — MINOR DRIFT
- SSR root: `<div class="grid">`, Hand-written root: same
- Root-level class logic identical. SSR uses wrapper divs (`grid-column`, `colspan-*`, `restore-pointer-events`); hand-written applies grid styles directly to slotted children via `_applyGridStyles()`.

#### tabs — MINOR DRIFT
- SSR root: `<div class="root tabs">`, Hand-written root: same
- Core structure matches (root > tabs-header > ul[tablist] > li > tab-header-container > tab-link).
- SSR uses `<button>` for tab triggers; hand-written uses `<a>` (supports `href` navigation).
- SSR has `tab-header-scroll-container` wrapper and focus-state classes; hand-written omits these.
- Hand-written adds `fit-height` and `tabs-tab-disabled` support.

#### flashbar — MINOR DRIFT
- SSR root: `<div class="flashbar">`, Hand-written root: same
- Core structure matches (flashbar > flash-list > flash-list-item > flash).
- Icon placement differs (inside vs outside flash-body).
- SSR has animation/replacement classes (`flash-with-motion`, `header-replacement`, `content-replacement`); hand-written omits these.
- Hand-written uses `<cs-icon>` and `<cs-button>` instead of inline HTML.

#### form-field — MINOR DRIFT
- SSR root: `<div class="root">`, Hand-written root: same
- CSS class names very well aligned (~90% match): `root`, `label-wrapper`, `label`, `controls`, `description`, `control`, `hints`, `error`, `error-icon-shake-wrapper`, `error-icon-scale-wrapper`, `error__message`, `warning`, `warning__message`, `constraint`.
- SSR has 3 extra wrapper `<div>`s inside controls.
- SSR missing named slots (info, secondaryControl, description).
- Hand-written has `constraint-has-validation-text` conditional class.

#### header — MINOR DRIFT
- SSR root: `<div class="root root-variant-h2 refresh">`, Hand-written root: `<div class="root root-variant-${variant}">`
- Class vocabulary largely aligned. SSR has `refresh` class throughout.
- SSR wraps slot in `<span class="heading-text">` not in hand-written.
- SSR hardcodes `<h2>`; hand-written dynamically selects h1-h5.
- SSR missing `info` slot and `actions` div.

#### button-group — MINOR DRIFT
- SSR root: `<div class="root" role="toolbar" aria-label="Actions">`
- Hand-written root: same structure
- Root matches. SSR renders native buttons with inline SVG; hand-written delegates to `<cs-button>`.
- SSR has extra wrapper div around each button.
- SSR uses `type="submit"` (incorrect); hand-written delegates to cs-button which uses `type="button"`.

#### collection-preferences — MINOR DRIFT
- SSR root: `<div class="root">`, Hand-written root: same
- SSR only captures closed/trigger state (native button with SVG icon).
- Hand-written uses `<cs-button variant="icon">` for trigger.
- Panel content only rendered when open, so SSR correctly omits it.

#### file-dropzone — MINOR DRIFT
- SSR root: `<div class="root">`, Hand-written root: same
- Structure matches (div.root > div.content > slot).
- **Missing from SSR**: `role="button"`, `tabindex="0"`, `aria-label="Drop files here"` (accessibility gap).
- Hand-written adds `hovered` dynamic state class.

#### key-value-pairs — MINOR DRIFT
- SSR root: `<div class="key-value-pairs">`, Hand-written root: `<div class="key-value-pairs" role="group">`
- Root element and class match. Hand-written adds `role="group"` and `aria-label`.
- SSR puts grid layout on `<dl>`; hand-written wraps in `<div class="grid">`.
- Hand-written has richer structure for groups (group-title, group-list).

#### list — MINOR DRIFT
- SSR root: `<ul class="root" aria-label="Files">`, Hand-written root: `<ul class="root" role="list">`
- Root structure matches (ul > li). Nesting depth identical (5 levels).
- Class naming: SSR uses short names (`main`, `content`); hand-written uses BEM-prefixed (`structured-item--main`, `structured-item--content`).
- Hand-written adds `role="list"` for Safari VoiceOver compatibility.

#### anchor-navigation — MINOR DRIFT
- SSR root: `<nav class="root">`, Hand-written root: `<nav class="root" aria-labelledby="...">`
- Excellent structural alignment. All class names match: `anchor-list`, `anchor-item`, `anchor-item--active`, `anchor-link`, `anchor-link--active`, `anchor-link-text`.
- Nesting depth identical (4 levels).
- `aria-current` value differs (`"true"` vs `"location"`).
- Hand-written adds `role="list"` on `<ol>` and `anchor-link-info` class.

#### tree-view — MINOR DRIFT
- SSR root: `<div class="root">`, Hand-written root: same
- Nesting structure identical (8 levels deep, same element hierarchy).
- All structural elements match 1:1.
- Class naming: SSR uses short names; hand-written uses BEM-prefixed (`tree-view-tree-item--*`, `expand-toggle-button--*`, `structured-item--*`).
- ARIA tree roles match perfectly (`role="tree"`, `role="treeitem"`, `role="group"`).
- Hand-written adds `expandable`/`expanded` state classes and `root--connector-lines`.

---

### MAJOR DRIFT (28)

---

#### alert — MAJOR DRIFT
- SSR root: `<div class="root">` with extra wrapper `<div>` before alert div
- Hand-written root: `<div class="root">` directly containing alert div
- SSR uses `role="group"` instead of `role="alert"` — **critical accessibility regression**
- SSR missing `action` slot wrapper (`alert-actions-wrapper--root`)
- SSR uses inline SVG + `<button>` for dismiss; hand-written uses `<cs-button variant="icon">`
- SSR has `data-analytics-alert` attribute
- Extra nesting: SSR=7, Hand=5

#### button — MAJOR DRIFT
- SSR root: `<button class="button variant-normal" type="submit">`
- Hand-written root: `<button class="button variant-${variant}" type="button">` or `<a>` when `href` set
- SSR uses `type="submit"` (wrong); hand-written uses `type="button"`
- SSR wraps content in `<span class="content">` not in hand-written
- SSR completely missing `<a>` link variant path
- SSR lacks all ARIA: `aria-label`, `aria-expanded`, `aria-controls`, `aria-describedby`, `aria-disabled`
- SSR has loading-specific duplicate slot structure

#### toggle — MAJOR DRIFT
- SSR root: `<span class="wrapper root">`, Hand-written root: `<span class="root abstract-switch--wrapper">`
- **Every class name uses different naming convention**: SSR short names vs hand-written `abstract-switch--*` prefixes
- SSR missing all ARIA on input (`aria-label`, `aria-labelledby`, `aria-describedby`, `aria-checked`)
- SSR lacks description section entirely
- Toggle handle is `<span>` in SSR vs `<div>` in hand-written

#### toggle-button — MAJOR DRIFT
- SSR root: `<button class="variant-normal">`, Hand-written root: `<button class="button variant-${variant}">`
- SSR missing `button` base class entirely
- SSR wraps content in extra `<span>` not in hand-written
- SSR hardcodes `aria-pressed="false"` instead of binding to `this.pressed`
- SSR lacks `disabled`, `disabled-with-reason`, `button-no-text` classes
- SSR doesn't render icon via `<cs-icon>`

#### input — MAJOR DRIFT
- SSR root: `<div class="root input-container">` (merged), Hand-written root: `<div class="root">` > `<div class="input-container">`
- SSR merges `root` and `input-container` into single div (flattened nesting)
- SSR renders TWO input elements for search type; hand-written renders one with dynamic type
- SSR uses inline SVG for search icon; hand-written has no search icon
- SSR missing all ARIA, disabled/readonly attrs, placeholder, form-field context

#### time-input — MAJOR DRIFT
- SSR root: `<div class="root">`, Hand-written root: same with child `<div class="input-container">`
- SSR missing `input-container` wrapper div entirely
- SSR has NO CSS classes on `<input>` element (hand-written has `input`, `input-readonly`, `input-invalid`, `input-warning`)
- SSR missing all ARIA and form-field context
- Input element essentially unstyled in SSR

#### text-filter — MAJOR DRIFT
- SSR root: `<div class="root">`, Hand-written root: same
- Fundamentally different approach: SSR renders raw `<input type="search">` with inline SVG search icon; hand-written delegates to `<cs-input type="search">`
- SSR missing results count span
- SSR has no ARIA label
- DOM trees structurally incompatible

#### status-indicator — MAJOR DRIFT
- SSR root: `<span class="root status-success">`, Hand-written root: `<span class="root status-${this.type}">`
- SSR renders inline SVG icons directly; hand-written delegates to `<cs-icon>` and `<cs-spinner>`
- Container class differs: SSR `display-inline-block` vs hand-written `display-inline`
- Hand-written wraps slot in additional `<span class="display-inline">` with optional `overflow-ellipsis`
- Hand-written supports `colorOverride` class

#### link — MAJOR DRIFT
- SSR root: `<a class="link variant-secondary">`, Hand-written root: `<a>` or `<button>` (when no href)
- SSR always renders `<a>`; hand-written renders `<button>` when no href — fundamentally different element
- SSR renders external icon as inline SVG; hand-written uses `<cs-icon name="external">`
- Slot/icon ordering differs: SSR puts icon before slot, hand-written puts slot before icon
- SSR has `data-analytics-funnel-value` and hidden `<span>` for info variant

#### live-region — MAJOR DRIFT
- SSR root: `<div class="root">`, Hand-written root: `<div class="root" aria-live="polite" aria-atomic="true">`
- **SSR completely omits `aria-live` and `aria-atomic`** — the entire purpose of a live-region component
- Hand-written conditionally switches between `<div>` and `<span>` based on `tagName_` prop
- Hand-written has conditional `root`/`announcer` class based on `hidden` prop
- **SSR template is non-functional as a live region**

#### space-between — MAJOR DRIFT
- SSR root: `<div class="root vertical vertical-s">`, Hand-written root: `<div class="root ${direction} ${direction}-${size}">`
- SSR wraps each child in `<div class="child"><div>...</div></div>` (2-level wrapper per child)
- Hand-written uses bare `<slot>` with `::slotted(*)` CSS for spacing
- Root classes identical in naming convention
- Fundamental architectural difference due to shadow DOM constraints

#### select — MAJOR DRIFT
- SSR root: `<div class="root">`, Hand-written root: same
- Complete reimplementation with floating-ui; different class scheme
- SSR trigger: `<button class="button-trigger has-caret">`; hand-written: `<button class="trigger select-parts--trigger">`
- SSR captures Cloudscape's internal dropdown scaffolding (sentinel divs, CSS custom properties)
- Hand-written implements own dropdown from scratch
- Nesting: SSR=8, Hand=3

#### multiselect — MAJOR DRIFT
- Same pattern as select — completely reimplemented dropdown
- Hand-written **missing `aria-multiselectable="true"`** on listbox (accessibility bug)
- Hand-written adds token rendering for selected items not in SSR snapshot

#### autosuggest — MAJOR DRIFT
- SSR captures Cloudscape's full autosuggest with search icon and nested dropdown
- Hand-written is clean reimplementation with own dropdown using floating-ui
- No search icon in hand-written
- Input has state classes in hand-written that SSR lacks
- Dropdown structure completely different

#### property-filter — MAJOR DRIFT
- SSR captures Cloudscape's full property-filter embedding autosuggest with dropdown
- Hand-written is simplified v1 with plain text input and token list
- No combobox behavior, no dropdown suggestions in hand-written
- `search-field` and `input-wrapper` class names match at top level; everything inside differs
- Nesting: SSR=10, Hand=3

#### expandable-section — MAJOR DRIFT
- SSR template is garbled (HTML conditionals inside SVG `<path>` elements, duplicate content blocks)
- Hand-written has clean structure: root > header-actions-wrapper > wrapper > button + heading > content
- Hand-written uses `<cs-icon>`, configurable heading tags (h1-h5), header actions slot
- SSR generator struggled with variant diffs on this component
- ARIA: hand-written has `role="button"`, `aria-expanded`, `aria-label`; SSR has `aria-controls` with generated ID

#### popover — MAJOR DRIFT
- SSR root: `<span class="root">`, Hand-written root: `<div class="root">`
- SSR only captures trigger element (popover body rendered via portal in React)
- Hand-written includes complete popover structure: arrow, header, dismiss button, content slot
- Hand-written uses `@floating-ui/dom` for positioning
- Root tag differs (`span` vs `div`)

#### table — MAJOR DRIFT
- SSR root: `<div class="root">`, Hand-written root: same
- SSR has 4 wrapper divs between root and table wrapper (scroll containers, resize handles, sticky sentinels)
- Hand-written has header-secondary + wrapper directly
- Hand-written adds sorting, selection (checkbox/radio), tools slots, content density, striped rows
- SSR wraps cell content in `body-cell-content` div; hand-written renders directly in `<td>`
- Many SSR-specific classes absent: `is-visual-refresh`, `body-cell-first-row`, `body-cell-last-row`

#### cards — MAJOR DRIFT
- SSR root: `<div class="root">`, Hand-written root: same
- SSR has 4 empty wrapper divs + 8 deeply nested divs per card (Cloudscape container internals)
- Hand-written delegates card chrome to `<cs-container variant="default">`
- Hand-written adds selection, empty state, loading state, responsive column calculation
- Nesting: SSR=11, Hand=4

#### breadcrumb-group — MAJOR DRIFT
- SSR root: `<nav class="breadcrumb-group" aria-label="Breadcrumbs">`, Hand-written root: same
- Completely different class naming: SSR short names (`breadcrumb`, `anchor`, `text`, `icon`, `last`) vs hand-written BEM (`breadcrumb-group-item--breadcrumb`, `breadcrumb-group-item--anchor`, etc.)
- SSR includes ellipsis overflow dropdown and ghost measurement list entirely absent from hand-written
- SSR uses native `<a>` and `<span>`; hand-written uses `<cs-icon>`

#### button-dropdown — MAJOR DRIFT
- SSR root: `<div class="button-dropdown variant-normal">`, Hand-written root: `<div class="button-dropdown">`
- SSR wraps trigger in 3 extra nested divs (shared dropdown positioning component)
- Hand-written uses flat structure with floating-ui
- SSR renders native `<button>` with inline SVG; hand-written delegates to `<cs-button>`
- Class naming diverges: `trigger-button` vs `trigger-btn`
- Dropdown menu structure fundamentally different

#### copy-to-clipboard — MAJOR DRIFT
- SSR root: `<span class="root">`, Hand-written root: same
- SSR renders deeply nested structure with native `<button>`, inline SVG, variant-specific wrapper spans
- Hand-written is minimal: `<span class="root">` wrapping a single `<cs-button>`
- SSR has `inline-container`, `inline-container-trigger` classes absent from hand-written

#### error-boundary — MAJOR DRIFT
- SSR root: `<div class="error-boundary">`, Hand-written root: `<slot></slot>` (no wrapper)
- **Fundamental structural disagreement**: SSR wraps in div; hand-written renders bare slot with `display: contents`
- The `error-boundary` class wrapper is completely absent from hand-written
- Would cause hydration mismatch if SSR were used

#### file-input — MAJOR DRIFT
- SSR root: `<div class="root">`, Hand-written root: `<span class="root">`
- Root tag mismatch: `<div>` vs `<span>`
- **Accessibility approach inverted**: SSR makes hidden file input the accessible element; hand-written hides input and makes button accessible
- SSR renders native button with SVG; hand-written uses `<cs-button>`

#### progress-bar — MAJOR DRIFT
- SSR root: `<div class="root flash">`, Hand-written root: `<div class="root variant-${variant}">`
- Different variant class naming: SSR `flash` vs hand-written `variant-flash`
- SSR has 2 extra anonymous wrapper divs
- SSR embeds status result markup inside `<progress>` element (invalid HTML)
- Hand-written uses conditional branch with `<cs-status-indicator>`
- ARIA strategy differs: SSR id-based labelledby vs hand-written direct aria-label

#### prompt-input — MAJOR DRIFT
- SSR root: `<div class="root" role="region">`, Hand-written root: `<div class="root">`
- SSR uses native `<button type="submit">` with inline SVG; hand-written uses `<cs-button variant="icon">`
- SSR has `role="region"` on root absent from hand-written
- SSR has `invalid` and `warning` state classes that hand-written doesn't implement
- Primary action wrapper: `<div>` in SSR vs `<span>` in hand-written

#### steps — MAJOR DRIFT
- SSR root: `<div class="root horizontal">`, Hand-written root: same
- Icon rendering completely different: SSR has 4 levels of anonymous `<span>` wrapping inline SVGs; hand-written uses `<cs-icon>`/`<cs-spinner>` with `<span class="icon" role="img">`
- SSR `<hr>` connector incorrectly wraps content as children (invalid HTML)
- SSR missing critical ARIA: no `role="list"`, no `aria-label` on `<ol>`, no `role="listitem"`, no `role="img"` on icons

#### token — MAJOR DRIFT
- SSR root: `<div class="root token-normal token-inline" role="group">`, Hand-written root: `<div class="root">`
- Structural hierarchy inverted: SSR puts `token-normal`/`token-inline` and `role="group"` on root; hand-written puts them on inner elements
- SSR has 4 extra levels of anonymous `<span>` nesting for label text
- SSR missing dismiss button, icon slot, label-tag, description elements

#### token-group — MAJOR DRIFT
- SSR root: `<div class="root has-items">`, Hand-written root: `<div class="root has-items no-padding">`
- SSR has double-root structure (`root has-items` > `root vertical`) not in hand-written
- Class naming diverges: `list-item` vs `token`, `vertical` vs `list-vertical`
- SSR has useful `aria-setsize`/`aria-posinset` that hand-written lacks
- SSR missing `toggle` button for show more/fewer
- Deeply nested anonymous `<span>` wrapping (5 levels) vs hand-written flat structure

---

## N/A Components (2)

| Component | Reason |
|-----------|--------|
| icon-provider | Context provider only, no visual output, no styles.css.js |
| tooltip | Requires `getTrack()` returning HTMLElement, cannot SSR render |

---

## Priority Fixes

### Critical (Accessibility Blockers)
1. **live-region**: SSR omits `aria-live`/`aria-atomic` — component non-functional without them
2. **alert**: SSR uses `role="group"` instead of `role="alert"`
3. **multiselect**: Hand-written missing `aria-multiselectable="true"` on listbox
4. **button**: SSR uses `type="submit"` instead of `type="button"`

### High (Structural Mismatches)
5. **error-boundary**: SSR wraps in `<div>`; hand-written renders bare `<slot>` — hydration mismatch
6. **file-input**: Root tag mismatch (`<div>` vs `<span>`) and inverted accessibility strategy
7. **checkbox/toggle/radio-group**: Class namespace completely different (short vs BEM-prefixed)
8. **select/multiselect/autosuggest/property-filter**: Complete reimplementations with floating-ui

### Medium (Missing Features in SSR)
9. **expandable-section**: SSR template garbled from variant diffing
10. **steps**: Invalid HTML (`<hr>` wrapping content)
11. **progress-bar**: Invalid HTML (status markup inside `<progress>`)
12. **token/token-group**: Inverted class/ARIA hierarchy

### Low (Cosmetic / Expected Differences)
13. **`refresh` class**: Present in SSR, absent from hand-written (~12 components)
14. **`data-analytics-*` attributes**: Present in SSR, absent from hand-written
15. **Component composition**: `<cs-icon>`/`<cs-button>` vs inline HTML (architectural, expected)

---

## Recommendations

1. **Do NOT use SSR templates as ground truth for ARIA** — hand-written versions are consistently more accessible.
2. **Class naming alignment**: The BEM-prefixed names in hand-written code are correct (they match the imported style modules). SSR templates would need updating to use prefixed names, not the other way around.
3. **Dropdown components** (select, multiselect, autosuggest, property-filter) are intentional reimplementations. SSR templates for these are not useful for comparison.
4. **Layout components** (grid, column-layout, space-between) use `<slot>` + `::slotted()` CSS instead of wrapper divs. This is a valid Web Component adaptation.
5. **Best SSR-to-hand-written alignment**: pagination, anchor-navigation, badge, content-layout, form-field, container, tree-view, checkbox, radio-group, tiles — these should be the reference for how to port remaining components.
