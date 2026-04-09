import { c_cppHighlightRules } from 'ace-code/src/mode/c_cpp_highlight_rules';
import { createHighlight } from './index.js';
export default createHighlight(new c_cppHighlightRules());
