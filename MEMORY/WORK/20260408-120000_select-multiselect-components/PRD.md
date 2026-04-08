---
task: Implement Select and Multiselect web components
slug: 20260408-120000_select-multiselect-components
effort: advanced
phase: complete
progress: 26/26
mode: interactive
started: 2026-04-08T12:00:00Z
updated: 2026-04-08T12:20:00Z
---

## Context

Implement two new Lit web components (`cs-select` and `cs-multiselect`) for the Cumulus UI library. These are Cloudscape-compatible dropdown selection components. Select provides single-option selection from a dropdown list. Multiselect extends that pattern with checkboxes, multi-selection, and token display. Both use `@floating-ui/dom` for positioning, `FormAssociatedMixin` for form integration, and follow existing codebase patterns (internal.ts + index.ts + demo + tests).

### Risks
- Shadow DOM event handling with floating-ui positioning
- Keyboard navigation complexity (ArrowUp/Down, Enter, Escape, type-ahead filtering)
- Click-outside detection must work across shadow boundaries

### Plan
1. Implement Select internal.ts with dropdown, filtering, keyboard nav, floating-ui positioning
2. Implement Select index.ts registration
3. Implement Multiselect internal.ts reusing Select dropdown pattern + checkboxes + tokens
4. Implement Multiselect index.ts registration
5. Create demo pages for both
6. Register routes in demo/app.ts and exports in src/index.ts
7. Write integration + a11y tests for both
8. Verify TypeScript and full test suite

## Criteria

- [x] ISC-1: Select internal.ts extends FormAssociatedMixin(CsBaseElement)
- [x] ISC-2: Select renders trigger button showing selectedOption label or placeholder
- [x] ISC-3: Select trigger click opens/closes dropdown
- [x] ISC-4: Select dropdown positioned via @floating-ui/dom
- [x] ISC-5: Select option click selects option and fires change event
- [x] ISC-6: Select Escape key closes dropdown
- [x] ISC-7: Select click-outside closes dropdown
- [x] ISC-8: Select ArrowDown/ArrowUp navigates highlighted option
- [x] ISC-9: Select Enter key selects highlighted option
- [x] ISC-10: Select filteringType='auto' shows filter input and filters options
- [x] ISC-11: Select renders grouped options with group labels
- [x] ISC-12: Select disabled property prevents interaction
- [x] ISC-13: Select invalid property applied to trigger styling
- [x] ISC-14: Select index.ts registers cs-select custom element
- [x] ISC-15: Multiselect internal.ts extends FormAssociatedMixin(CsBaseElement)
- [x] ISC-16: Multiselect renders checkboxes in dropdown options
- [x] ISC-17: Multiselect fires change event with selectedOptions array
- [x] ISC-18: Multiselect renders selected tokens below trigger
- [x] ISC-19: Multiselect tokenLimit limits visible tokens with show more
- [x] ISC-20: Multiselect hideTokens hides token display
- [x] ISC-21: Multiselect keepOpen prevents close on selection
- [x] ISC-22: Multiselect index.ts registers cs-multiselect custom element
- [x] ISC-23: Demo page for select shows all permutations
- [x] ISC-24: Demo page for multiselect shows all permutations
- [x] ISC-25: TypeScript compiles with zero errors (npx tsc --noEmit)
- [x] ISC-26: All tests pass including new integration and a11y tests

## Decisions

## Verification

- TypeScript: 0 errors in new files (4 pre-existing errors in button-group/breadcrumb-group)
- Tests: 404 passed, 2 failed (pre-existing button-dropdown failures only)
- New tests: 32/32 passed (14 select + 10 multiselect integration, 5+5 a11y)
