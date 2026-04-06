export {
  Mode,
  Density,
  applyMode,
  applyDensity,
  disableMotion,
} from '@cloudscape-design/global-styles';

// Path to the global CSS for bundler/loader consumption.
// The CSS (normalize + Open Sans fonts + dark-mode color-scheme) targets the
// light DOM. Import it in your document entry point or use adoptedStyleSheets
// on the document after reading it as a string via your bundler.
export const GLOBAL_CSS_PATH = '@cloudscape-design/global-styles/index.css';
