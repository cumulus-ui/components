
## Template Drift Audit Results (2026-04-08)

### Key Finding: SSR is NOT ground truth
- Hand-written templates have better ARIA, correct BEM prefixes, proper composition
- SSR useful as REFERENCE TOOL (catch missing classes, wrong nesting) not as SOURCE OF TRUTH
- The 65 structural class errors were invented by agents, not wrong SSR

### Actionable items from audit:
1. Fix multiselect: add aria-multiselectable="true" on listbox
2. Use SSR to validate CSS class coverage (already doing this via audit)
3. The 10 well-aligned components prove the pattern works
4. Dropdown reimplementations (select/multiselect/autosuggest/property-filter) are intentional

### Generator role going forward:
- Reference tool for new components (check your DOM against SSR output)
- CSS class coverage validation (generate-render.ts --audit)
- NOT a template generator that replaces hand-written code
