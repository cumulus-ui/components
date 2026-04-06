
## Monorepo Scaffold (Task 1) — 2026-04-06

- npm workspaces with `"workspaces": ["packages/*"]` in root package.json works cleanly
- Root tsconfig.json uses `"files": []` + `"references"` for project references (no compilation at root)
- packages/components preserves original esbuild build pipeline: `build:esm` (esbuild) + `build:types` (tsc --emitDeclarationOnly)
- packages/test-utils uses `tsc --build` for compilation (simpler, no esbuild needed)
- `composite: true` required in both package tsconfigs for project references to work
- `@cloudscape-design/components` pinned as devDependency at root level (reference only)
- Empty barrel exports (`export {};`) are valid TypeScript and compile cleanly
- .gitkeep files needed in empty dirs: internal/hooks, internal/utils, internal/components, internal/context, internal/mixins, internal/styles, internal/generated, test-utils/src/core
- Existing repo had: Lit 3.2, esbuild 0.28, TypeScript ~5.7, Playwright 1.59, experimentalDecorators + useDefineForClassFields:false
- test-utils subpath exports: `"./dom"` and `"./selectors"` map to dist/dom/index.js and dist/selectors/index.js

## Design Tokens Integration (Task 2) — 2026-04-06

- `@cloudscape-design/design-tokens` exports ~437 named string constants, each shaped `var(--token-name-hash, #fallback)`
- Token values are CSS custom property references with hardcoded fallbacks — perfect for Shadow DOM (custom props pierce shadow boundary)
- Lit's `css` tagged template rejects raw strings for security; `unsafeCSS()` wraps trusted strings as `CSSResult`
- Pattern: `import * as awsui from '@cloudscape-design/design-tokens'` → `token(awsui.tokenName)` → `CSSResult`
- The `token()` helper is intentionally thin (just `unsafeCSS()`) but provides a single import site and self-documenting name
- Token categories: colors (background/text/border), typography (fontFamily/fontSize), spacing (spaceScaled*), border radius
- Only ~80 representative tokens exported initially — add more as components need them (don't export all 437)
- npm workspaces hoists `@cloudscape-design/design-tokens` to root `node_modules/` — works fine with bundler moduleResolution
- Pre-existing typecheck error in `global.ts` (`?raw` import needs bundler type declaration) — not related to token work

## CI Pipeline Update (Task 3) — 2026-04-06

- `actions/cache@v4` for node_modules keyed on `package-lock.json` hash; skip `npm ci` on cache hit
- Playwright browser cache keyed on exact `@playwright/test` version from package-lock.json (extracted via node -e)
- On Playwright cache hit, still need `npx playwright install-deps chromium` for system-level deps (shared libs not cached)
- On cache miss, `npx playwright install --with-deps chromium` installs both browser binaries and system deps
- Playwright browsers cached at `~/.cache/ms-playwright` on Linux runners
- `npm test` delegates to workspace scripts via `npm run test --workspaces` — each workspace runs its own test command
- Artifact upload with `if: failure()` captures test-results/ and playwright-report/ from all packages on test failure
- Removed old demo upload artifact step (no longer relevant in monorepo structure)
- YAML lint via `npx yaml-lint` validates CI config locally before commit

## Global Styles & Theming Runtime (Task 4) — 2026-04-06

- `@cloudscape-design/global-styles` v1.0.56 exports: `Mode` enum (Light/Dark), `Density` enum (Comfortable/Compact), `applyMode()`, `applyDensity()`, `disableMotion()` — all toggle CSS classes on document.body
- `applyMode(Mode.Dark)` adds `awsui-dark-mode` class, `applyDensity(Density.Compact)` adds `awsui-compact-mode`, `disableMotion(true)` adds `awsui-motion-disabled`
- `index.css` contains normalize.css + Open Sans font-face declarations (base64-embedded woff2) + dark-mode color-scheme rule
- `dark-mode-utils.css` provides `.awsui-util-show-in-dark-mode` / `.awsui-util-hide-in-dark-mode` utility classes
- `@cloudscape-design/theming-runtime` v1.0.106 main entry is `./browser/index.js` (not root index.js)
- `applyTheme({ override, preset })` injects a `<style>` element with CSS custom property overrides, returns `{ reset: () => void }`
- `generateThemeStylesheet()` produces the CSS string without DOM injection — useful for SSR or adoptedStyleSheets
- theming-runtime depends on `@material/material-color-utilities` for color palette generation
- theming-runtime has no `"type": "module"` in package.json but works fine with `moduleResolution: "bundler"`
- Both packages hoisted to root `node_modules/` by npm workspaces — resolved correctly from packages/components/
- Shadow DOM strategy: global CSS (normalize/fonts) stays in light DOM; components get shared base styles (box-sizing, font inheritance) via Lit `css` tagged template
- CSS custom properties from design tokens penetrate shadow boundary naturally — no special handling needed
- Pre-existing unused parameter `root` in `use-focus-tracker.ts` caused `tsc --emitDeclarationOnly` to fail (noUnusedParameters: true) — fixed with underscore prefix

## Test Infrastructure (Task 5) — 2026-04-06

- ElementWrapper: shadow-piercing queries via `element.shadowRoot?.querySelector()` fallback to light DOM
- ComponentWrapper extends ElementWrapper with `findByClass()`, `findByTag()`, static `rootSelector` for subclass override
- DOM `createWrapper(container)` returns ComponentWrapper — queries automatically pierce open shadow roots
- Selector `createWrapper(rootSelector)` returns builder producing CSS selector strings for `page.locator()`
- Playwright config uses named projects: unit, integration, visual, a11y, smoke — matched by file suffix convention (`.unit.test.ts`, `.integ.test.ts`, etc.)
- `toHaveScreenshot` built-in with `maxDiffPixels: 1` for visual regression; custom `compareScreenshot()` uses pixelmatch for finer control
- `@axe-core/playwright` AxeBuilder requires `{ page }` object, not raw page — `new AxeBuilder({ page })`
- `renderComponent()` helper works with Playwright's `page.evaluate()` — creates element, sets attributes, appends to body, awaits `updateComplete`
- pixelmatch returns diff pixel count; threshold 0.1 is a good default for anti-aliased rendering differences
- pngjs `PNG.sync.read()` / `PNG.sync.write()` for synchronous buffer↔PNG conversion
- dist/ is gitignored in test-utils; `tsc --build` regenerates on demand

## Demo Page System (Task 9) — 2026-04-06

- esbuild template-literal dynamic imports (`import(\`./pages/${x}/${y}.js\`)`) fail: esbuild creates `__glob({})` with empty map because it looks for .js files but source is .ts
- Solution: explicit route registry map with static import paths — esbuild can statically analyze and code-split `() => import('./pages/_test/permutations.js')`
- esbuild `splitting: true` + `outbase: 'demo'` preserves directory structure: demo/pages/_test/permutations.ts → demo/dist/pages/_test/permutations.js
- Shared Lit code extracted into chunk-*.js automatically by esbuild splitting
- Lit app shell uses `createRenderRoot() { return this; }` (light DOM) — critical for Playwright queryability
- Dynamic page elements managed imperatively in `updated()` lifecycle since Lit can't render dynamic tag names declaratively without `unsafeStatic`
- Demo HTML served at `/` but script src must be absolute (`/demo/dist/app.js`) since URL base is root, not `/demo/`
- tsconfig.demo.json needed separately from main tsconfig (rootDir conflict: src vs demo)
- `typecheck` script chains both: `tsc --noEmit && tsc --noEmit -p tsconfig.demo.json`
- Hash router regex: `/^#\/(light|dark)\/([^/]+)\/([^/]+)$/` — simple, strict, no trailing slash ambiguity
- `awsui-dark-mode` class on document.body toggles Cloudscape dark theme tokens
- build-demo.mjs auto-discovers page .ts files in demo/pages/ for entry points, but app.ts pageLoaders map must be manually updated (esbuild constraint)

## Data Display Components (List, TreeView, NavigableGroup)

### Pattern: ariaLabel conflicts with LitElement base type
- `HTMLElement.ariaLabel` is `string | null`, not `string | undefined`
- Can't use `override ariaLabel?: string` — TS rejects `string | undefined` vs `string | null`
- Solution: Use non-conflicting property names (`listLabel`, `treeLabel`) mapped from custom HTML attributes (`label`, `labelledby`, `describedby`)
- Initialize to `''` (empty string) — compatible with `string` type

### Pattern: Demo build is separate from CDN build
- Tests use pre-built demo from `demo/dist/` served by `scripts/serve.mjs`
- Must run `npm run build:demo` before tests if demo pages changed
- CDN build (`build:cdn`) only bundles `src/index.ts`
- The test command only runs `build:cdn`, not `build:demo`

### Pattern: Cloudscape design tokens for tree-view
- `colorTreeViewConnectorLine` and `spaceTreeViewIndentation` are available in `@cloudscape-design/design-tokens`
- Must import via `token()` wrapper from `token-utils.js`

### Pattern: Test event race conditions
- Playwright `element.evaluate()` blocks until promise resolves
- Register listeners with `evaluate()` BEFORE clicking (don't `await` evaluate)
- Use `const promise = el.evaluate(...)` then `await click` then `await promise`

### Smoke test pre-existing failure
- `test/smoke.test.ts` looks for `#status` element — not present in demo index.html
- This fails even without our changes — pre-existing issue

