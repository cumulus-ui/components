# Plan: ControllableController — Standardize Controlled/Uncontrolled State

**Issue:** #3
**Goal:** One pattern, all components. Match Cloudscape's `useControllable` mental model, implemented as a Lit ReactiveController.

## Design

### API

```typescript
// src/internal/controllers/controllable.ts
interface ControllableOptions<T> {
  defaultValue: T;
}

class ControllableController<T> implements ReactiveController {
  constructor(host: ReactiveControllerHost, options: ControllableOptions<T>);
  get value(): T;         // resolved: controlled ?? internal
  set(value: T): void;    // update internal state, trigger re-render
  hostConnected(): void;  // seed from defaultValue
}
```

### Resolution Logic

The controller holds internal state. The component has a public `@property()`.

```
controller.value = (externalProp !== undefined) ? externalProp : internalState
```

Detection uses `!== undefined` for all types:
- `expanded?: boolean` — `undefined` = uncontrolled, `false` = controlled
- `activeTabId?: string` — `undefined` = uncontrolled, `''` = controlled

### Naming Conventions

Controller instance vars: underscore + what it controls.
```typescript
private _activeTabId = new ControllableController(this, { defaultValue: '' });
private _expanded = new ControllableController(this, { defaultValue: false });
private _value = new ControllableController(this, { defaultValue: '' });
private _checked = new ControllableController(this, { defaultValue: false });
private _selectedItems = new ControllableController(this, { defaultValue: [] });
```

Access pattern:
```typescript
this._activeTabId.value     // resolved value
this._activeTabId.set(id)   // update internal state
```

Resolution in render:
```typescript
const tabId = this.activeTabId ?? this._activeTabId.value;
```

### What the controller does NOT do
- Fire events (component-specific detail shape)
- Know the property name
- Touch the DOM or template
- Handle form participation (that's FormControlMixin)

## Phases

### Phase 0: Rename FormAssociatedMixin → FormControlMixin

Align with Shoelace's `FormControl` terminology across the Lit ecosystem.

**Files:**
- [ ] Rename export in `src/internal/mixins/form-associated.ts`
- [ ] Update all 14 consumer imports:
  - button, checkbox, toggle, input, textarea, radio-group
  - select, multiselect, autosuggest
  - date-input, date-picker, date-range-picker, time-input, tiles
- [ ] Update CONTRIBUTING.md references

**Verification:** Build clean, tests pass, no functional change.

### Phase 1: Create controller + migrate existing hybrid components

**Files:**
- [ ] Create `src/internal/controllers/controllable.ts`
- [ ] Migrate `src/tabs/internal.ts`
- [ ] Migrate `src/expandable-section/internal.ts`

**Tabs changes:**
- Remove: `@state() private _internalActiveTabId`
- Remove: `private get _resolvedActiveTabId()` getter
- Add: `private _activeTabId = new ControllableController(this, { defaultValue: '' })`
- Change: `activeTabId` type from `string` default `''` to `string | undefined` default `undefined`
- Change: `_selectTab` → `this._activeTabId.set(tab.id)` + fire event
- Change: render uses `this.activeTabId ?? this._activeTabId.value`

**ExpandableSection changes:**
- Remove: `@state() private _internalExpanded`
- Remove: `private _initialized` guard
- Remove: `connectedCallback` seeding logic
- Remove: `private get _isExpanded()` getter
- Keep: `@property() defaultExpanded` — feeds into controller's defaultValue
- Add: `private _expanded = new ControllableController(this, { defaultValue: this.defaultExpanded })`
- Change: `_toggle` → `this._expanded.set(!resolvedValue)` + fire event
- Change: render uses `this.expanded ?? this._expanded.value`

**Verification:**
- Existing tests pass
- Build clean
- Tabs works controlled (`active-tab-id="foo"`) and uncontrolled (no attribute)
- ExpandableSection works both ways

### Phase 2: Migrate uncontrolled components (self-mutate → hybrid)

These currently self-mutate their property then fire an event. After migration, they update internal state via the controller. The property becomes the controlled input.

**Components (7):**
- [ ] `src/input/internal.ts` — `_value` (value via FormControlMixin)
- [ ] `src/checkbox/internal.ts` — `_checked`
- [ ] `src/toggle/internal.ts` — `_checked` (same pattern as checkbox)
- [ ] `src/radio-group/internal.ts` — `_value` (value via FormControlMixin)
- [ ] `src/select/internal.ts` — `_selectedOption`
- [ ] `src/multiselect/internal.ts` — `_selectedOptions`
- [ ] `src/autosuggest/internal.ts` — `_value`

**Pattern for each:**
```
Before:  this.value = newValue; fireEvent(...)
After:   this._value.set(newValue); fireEvent(...)
         render uses: this.value ?? this._value.value
```

**FormControlMixin interaction:**
- `value` property stays on the mixin (form submission needs it)
- `willUpdate` syncs resolved value → `setFormValue()`:
  `this._internals.setFormValue(this.value ?? this._value.value)`
- Controlled mode: consumer sets `value` property, mixin picks it up as before

**Verification per component:**
- Works uncontrolled (user interacts, no property binding)
- Works controlled (consumer sets property, component reflects it)
- Form submission still works (correct value in FormData)
- Existing tests pass

### Phase 3: Migrate controlled-only components (fire-only → hybrid)

These currently only fire events. After migration, they ALSO update internal state, so they work without a consumer wiring up state.

**Components (2):**
- [ ] `src/table/internal.ts`
  - `_sortingColumn = new ControllableController(this, { defaultValue: undefined })`
  - `_sortingDescending = new ControllableController(this, { defaultValue: false })`
  - `_selectedItems = new ControllableController(this, { defaultValue: [] })`
- [ ] `src/wizard/internal.ts`
  - `_activeStepIndex = new ControllableController(this, { defaultValue: 0 })`

**Table changes:**
- Change: `_onSort` → update controllers + fire event
- Change: render uses `this.sortingColumn ?? this._sortingColumn.value` etc.
- **Additive behavior change**: Table now self-manages sorting/selection when props aren't set

**Wizard changes:**
- Change: navigation handler → update controller + fire event
- Change: render uses `this.activeStepIndex ?? this._activeStepIndex.value`

**Verification:**
- Table works uncontrolled (click header → sorts, click row → selects)
- Table works controlled (consumer sets sortingColumn/selectedItems)
- Wizard works uncontrolled (click step → navigates)
- Wizard works controlled (consumer sets activeStepIndex)
- Existing tests pass

### Phase 4: Documentation + cleanup

- [ ] Update CONTRIBUTING.md — document ControllableController pattern + FormControlMixin rename
- [ ] Add "Adding a controllable property" guide for new component authors
- [ ] Close issue #3

## Risk Assessment

**Medium risk: FormControlMixin interaction (Phase 2)**
The mixin provides `value` and syncs it to `ElementInternals`. The controller adds a second source of truth. `willUpdate` must sync the resolved value. Verify `setFormValue()` gets the right value in both modes.

**Low risk: Table behavior change (Phase 3)**
Adding uncontrolled mode is additive. Controlled consumers won't notice. Document in release notes.

**Low risk: activeTabId type change (Phase 1)**
`string` → `string | undefined`. Consumers checking `tabs.activeTabId` without null guard may need updating. Note in release notes.

**Low risk: Mixin rename (Phase 0)**
Straight rename, no re-export. Pre-1.0 — no backward compat needed.

## Out of Scope

- `defaultValue` / form reset pattern (Shoelace-style) — can layer on later
- Dev-mode warnings (Cloudscape's `checkControlled`) — nice to have, not blocking
- `live()` directive adoption — separate performance concern
- Converting FormControlMixin to a controller — separate project
