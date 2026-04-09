declare module 'ace-code/src/ext/simple_tokenizer' {
  export function tokenize(code: string, rules: unknown): Array<Array<{ className?: string; value: string }>>;
}

declare module 'ace-code/src/mode/javascript_highlight_rules' { export const JavaScriptHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/typescript_highlight_rules' { export const TypeScriptHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/python_highlight_rules' { export const PythonHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/java_highlight_rules' { export const JavaHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/json_highlight_rules' { export const JsonHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/html_highlight_rules' { export const HtmlHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/css_highlight_rules' { export const CssHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/xml_highlight_rules' { export const XmlHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/yaml_highlight_rules' { export const YamlHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/sh_highlight_rules' { export const ShHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/ruby_highlight_rules' { export const RubyHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/golang_highlight_rules' { export const GolangHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/rust_highlight_rules' { export const RustHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/c_cpp_highlight_rules' { export const c_cppHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/csharp_highlight_rules' { export const CSharpHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/php_highlight_rules' { export const PhpHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/kotlin_highlight_rules' { export const KotlinHighlightRules: new () => unknown; }
declare module 'ace-code/src/mode/markdown_highlight_rules' { export const MarkdownHighlightRules: new () => unknown; }
