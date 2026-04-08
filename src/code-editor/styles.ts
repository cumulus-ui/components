// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.code-editor-refresh .ace_editor .ace_gutter {
  border-start-start-radius: calc(var(--border-radius-code-editor, 8px) - var(--border-item-width, 2px));
}
.code-editor-refresh .ace_editor .ace_scroller {
  border-start-end-radius: calc(var(--border-radius-code-editor, 8px) - var(--border-item-width, 2px));
}

.code-editor .ace_editor {
  font-family: Monaco, Menlo, Consolas, "Courier Prime", Courier, "Courier New", monospace;
  font-size: 14px;
  line-height: 20px;
}
.code-editor .ace_editor .ace_gutter-cell.ace_error,
.code-editor .ace_editor .ace_gutter-cell.ace_warning {
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: 4px 2px;
}
.code-editor .ace_editor .ace_gutter-cell.ace_info {
  background-image: none;
}
.code-editor .ace_editor .ace_gutter-cell.ace_error {
  color: var(--color-text-status-error, #db0000);
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_gutter-cell.ace_error {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23db0000' fill-opacity='0' stroke-width='2' stroke-linejoin='round'%3E %3Ccircle cx='8' cy='8' r='7'/%3E %3Cpath d='M10.828 5.172l-5.656 5.656M10.828 10.828L5.172 5.172'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-cell.ace_error, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-cell.ace_error {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23ff7a7a' fill-opacity='0' stroke-width='2' stroke-linejoin='round'%3E %3Ccircle cx='8' cy='8' r='7'/%3E %3Cpath d='M10.828 5.172l-5.656 5.656M10.828 10.828L5.172 5.172'/%3E %3C/svg%3E");
    }
  }
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_gutter-cell.ace_warning {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23855900' fill-opacity='0' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M8 1l7 14H1L8 1z'/%3E %3Cpath d='M7.99 12H8v.01h-.01zM8 6v4'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-cell.ace_warning, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-cell.ace_warning {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23fbd332' fill-opacity='0' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M8 1l7 14H1L8 1z'/%3E %3Cpath d='M7.99 12H8v.01h-.01zM8 6v4'/%3E %3C/svg%3E");
    }
  }
}
.code-editor .ace_editor .ace_gutter-cell {
  padding-inline: 24px 16px;
}
.code-editor .ace_editor .ace_fold-widget {
  /* A good test case for disabled folds
     <<html<<<<
     </html>
  */
  inline-size: 14px;
  margin-inline-end: -15px;
  background-color: transparent;
  border-block: none;
  border-inline: none;
}
.code-editor .ace_editor .ace_gutter_annotation {
  margin-inline-start: -21px;
}
.code-editor .ace_editor .ace_fold-widget,
.code-editor .ace_editor .ace_gutter_annotation {
  box-shadow: none;
}
:host-context([data-awsui-focus-visible=true]) .code-editor .ace_editor .ace_fold-widget:focus,
:host-context([data-awsui-focus-visible=true]) .code-editor .ace_editor .ace_gutter_annotation:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .code-editor .ace_editor .ace_fold-widget:focus,
:host-context([data-awsui-focus-visible=true]) .code-editor .ace_editor .ace_gutter_annotation:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(-1px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .code-editor .ace_editor .ace_fold-widget:focus::before,
:host-context([data-awsui-focus-visible=true]) .code-editor .ace_editor .ace_gutter_annotation:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * -1px);
  inset-block-start: calc(-1 * -1px);
  inline-size: calc(100% + -1px + -1px);
  block-size: calc(100% + -1px + -1px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
.code-editor .ace_editor .ace_marker-layer > .ace_active-line {
  background: transparent;
  box-sizing: border-box;
  border-block-start: 1px solid var(--color-border-code-editor-ace-active-line-light-theme, #dedee3);
  border-block-end: 1px solid var(--color-border-code-editor-ace-active-line-light-theme, #dedee3);
}
.code-editor .ace_editor.ace_dark .ace_marker-layer > .ace_active-line {
  border-block-start: 1px solid var(--color-border-code-editor-ace-active-line-dark-theme, #656871);
  border-block-end: 1px solid var(--color-border-code-editor-ace-active-line-dark-theme, #656871);
}
.code-editor .ace_editor .ace_gutter {
  background-color: var(--color-background-code-editor-gutter-default, #f3f3f7);
  color: var(--color-text-code-editor-gutter-default, #0f141a);
}
.code-editor .ace_editor .ace_gutter:focus,
.code-editor .ace_editor .ace_scroller:focus {
  box-shadow: inset 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_fold-widget.ace_open {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23424650' fill='%23424650' stroke-width='2'%3E %3Cpath d='M4 5h8l-4 6-4-6z' stroke-linejoin='round'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_fold-widget.ace_open, body.awsui-dark-mode .code-editor .ace_editor .ace_fold-widget.ace_open {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23dedee3' fill='%23dedee3' stroke-width='2'%3E %3Cpath d='M4 5h8l-4 6-4-6z' stroke-linejoin='round'/%3E %3C/svg%3E");
    }
  }
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_fold-widget.ace_open:hover {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%230f141a' fill='%230f141a' stroke-width='2'%3E %3Cpath d='M4 5h8l-4 6-4-6z' stroke-linejoin='round'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_fold-widget.ace_open:hover, body.awsui-dark-mode .code-editor .ace_editor .ace_fold-widget.ace_open:hover {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23f9f9fa' fill='%23f9f9fa' stroke-width='2'%3E %3Cpath d='M4 5h8l-4 6-4-6z' stroke-linejoin='round'/%3E %3C/svg%3E");
    }
  }
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_fold-widget.ace_closed {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23424650' fill='%23424650' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M5 4v8l6-4-6-4z'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_fold-widget.ace_closed, body.awsui-dark-mode .code-editor .ace_editor .ace_fold-widget.ace_closed {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23dedee3' fill='%23dedee3' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M5 4v8l6-4-6-4z'/%3E %3C/svg%3E");
    }
  }
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_fold-widget.ace_closed:hover {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%230f141a' fill='%230f141a' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M5 4v8l6-4-6-4z'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_fold-widget.ace_closed:hover, body.awsui-dark-mode .code-editor .ace_editor .ace_fold-widget.ace_closed:hover {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23f9f9fa' fill='%23f9f9fa' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M5 4v8l6-4-6-4z'/%3E %3C/svg%3E");
    }
  }
}
.code-editor .ace_editor .ace_gutter-active-line {
  background-color: var(--color-background-code-editor-gutter-active-line-default, #656871);
  color: var(--color-text-code-editor-gutter-active-line, #ffffff);
}
:host-context([data-awsui-focus-visible=true]) .code-editor .ace_editor .ace_gutter-active-line .ace_fold-widget:focus,
:host-context([data-awsui-focus-visible=true]) .code-editor .ace_editor .ace_gutter-active-line .ace_gutter_annotation:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .code-editor .ace_editor .ace_gutter-active-line .ace_fold-widget:focus,
:host-context([data-awsui-focus-visible=true]) .code-editor .ace_editor .ace_gutter-active-line .ace_gutter_annotation:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(-2px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .code-editor .ace_editor .ace_gutter-active-line .ace_fold-widget:focus::before,
:host-context([data-awsui-focus-visible=true]) .code-editor .ace_editor .ace_gutter-active-line .ace_gutter_annotation:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * -2px);
  inset-block-start: calc(-1 * -2px);
  inline-size: calc(100% + -2px + -2px);
  block-size: calc(100% + -2px + -2px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-text-code-editor-gutter-active-line, #ffffff);
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_gutter-active-line > .ace_fold-widget.ace_open {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23dedee3' fill='%23dedee3' stroke-width='2'%3E %3Cpath d='M4 5h8l-4 6-4-6z' stroke-linejoin='round'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line > .ace_fold-widget.ace_open, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line > .ace_fold-widget.ace_open {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%231b232d' fill='%231b232d' stroke-width='2'%3E %3Cpath d='M4 5h8l-4 6-4-6z' stroke-linejoin='round'/%3E %3C/svg%3E");
    }
  }
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_gutter-active-line > .ace_fold-widget.ace_open:hover {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23f9f9fa' fill='%23f9f9fa' stroke-width='2'%3E %3Cpath d='M4 5h8l-4 6-4-6z' stroke-linejoin='round'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line > .ace_fold-widget.ace_open:hover, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line > .ace_fold-widget.ace_open:hover {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%230f141a' fill='%230f141a' stroke-width='2'%3E %3Cpath d='M4 5h8l-4 6-4-6z' stroke-linejoin='round'/%3E %3C/svg%3E");
    }
  }
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_gutter-active-line > .ace_fold-widget.ace_closed {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23dedee3' fill='%23dedee3' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M5 4v8l6-4-6-4z'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line > .ace_fold-widget.ace_closed, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line > .ace_fold-widget.ace_closed {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%231b232d' fill='%231b232d' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M5 4v8l6-4-6-4z'/%3E %3C/svg%3E");
    }
  }
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_gutter-active-line > .ace_fold-widget.ace_closed:hover {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23f9f9fa' fill='%23f9f9fa' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M5 4v8l6-4-6-4z'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line > .ace_fold-widget.ace_closed:hover, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line > .ace_fold-widget.ace_closed:hover {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%230f141a' fill='%230f141a' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M5 4v8l6-4-6-4z'/%3E %3C/svg%3E");
    }
  }
}
.code-editor .ace_editor .ace_gutter-active-line.ace_error {
  color: var(--color-text-code-editor-gutter-active-line, #ffffff);
  background-color: var(--color-background-code-editor-gutter-active-line-error, #db0000);
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_gutter-active-line.ace_error {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23ffffff' fill-opacity='0' stroke-width='2' stroke-linejoin='round'%3E %3Ccircle cx='8' cy='8' r='7'/%3E %3Cpath d='M10.828 5.172l-5.656 5.656M10.828 10.828L5.172 5.172'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_error, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_error {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%230f141a' fill-opacity='0' stroke-width='2' stroke-linejoin='round'%3E %3Ccircle cx='8' cy='8' r='7'/%3E %3Cpath d='M10.828 5.172l-5.656 5.656M10.828 10.828L5.172 5.172'/%3E %3C/svg%3E");
    }
  }
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_gutter-active-line.ace_warning {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23ffffff' fill-opacity='0' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M8 1l7 14H1L8 1z'/%3E %3Cpath d='M7.99 12H8v.01h-.01zM8 6v4'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_warning, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_warning {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%230f141a' fill-opacity='0' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M8 1l7 14H1L8 1z'/%3E %3Cpath d='M7.99 12H8v.01h-.01zM8 6v4'/%3E %3C/svg%3E");
    }
  }
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_gutter-active-line.ace_error > .ace_fold-widget.ace_open, body .code-editor .ace_editor .ace_gutter-active-line.ace_warning > .ace_fold-widget.ace_open {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23dedee3' fill='%23dedee3' stroke-width='2'%3E %3Cpath d='M4 5h8l-4 6-4-6z' stroke-linejoin='round'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_error > .ace_fold-widget.ace_open, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_error > .ace_fold-widget.ace_open, body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_warning > .ace_fold-widget.ace_open, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_warning > .ace_fold-widget.ace_open {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%231b232d' fill='%231b232d' stroke-width='2'%3E %3Cpath d='M4 5h8l-4 6-4-6z' stroke-linejoin='round'/%3E %3C/svg%3E");
    }
  }
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_gutter-active-line.ace_error > .ace_fold-widget.ace_open:hover, body .code-editor .ace_editor .ace_gutter-active-line.ace_warning > .ace_fold-widget.ace_open:hover {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23f9f9fa' fill='%23f9f9fa' stroke-width='2'%3E %3Cpath d='M4 5h8l-4 6-4-6z' stroke-linejoin='round'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_error > .ace_fold-widget.ace_open:hover, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_error > .ace_fold-widget.ace_open:hover, body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_warning > .ace_fold-widget.ace_open:hover, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_warning > .ace_fold-widget.ace_open:hover {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%230f141a' fill='%230f141a' stroke-width='2'%3E %3Cpath d='M4 5h8l-4 6-4-6z' stroke-linejoin='round'/%3E %3C/svg%3E");
    }
  }
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_gutter-active-line.ace_error > .ace_fold-widget.ace_closed, body .code-editor .ace_editor .ace_gutter-active-line.ace_warning > .ace_fold-widget.ace_closed {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23dedee3' fill='%23dedee3' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M5 4v8l6-4-6-4z'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_error > .ace_fold-widget.ace_closed, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_error > .ace_fold-widget.ace_closed, body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_warning > .ace_fold-widget.ace_closed, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_warning > .ace_fold-widget.ace_closed {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%231b232d' fill='%231b232d' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M5 4v8l6-4-6-4z'/%3E %3C/svg%3E");
    }
  }
}
@supports (--css-variable-support-check: #000) {
  body .code-editor .ace_editor .ace_gutter-active-line.ace_error > .ace_fold-widget.ace_closed:hover, body .code-editor .ace_editor .ace_gutter-active-line.ace_warning > .ace_fold-widget.ace_closed:hover {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%23f9f9fa' fill='%23f9f9fa' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M5 4v8l6-4-6-4z'/%3E %3C/svg%3E");
  }
  @media not print {
    body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_error > .ace_fold-widget.ace_closed:hover, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_error > .ace_fold-widget.ace_closed:hover, body.awsui-polaris-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_warning > .ace_fold-widget.ace_closed:hover, body.awsui-dark-mode .code-editor .ace_editor .ace_gutter-active-line.ace_warning > .ace_fold-widget.ace_closed:hover {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' stroke='%230f141a' fill='%230f141a' stroke-width='2' stroke-linejoin='round'%3E %3Cpath d='M5 4v8l6-4-6-4z'/%3E %3C/svg%3E");
    }
  }
}

.pane {
  display: flex;
  position: relative;
  flex-direction: row;
  flex: 1;
  border-block-start: var(--border-item-width, 2px) solid var(--color-border-code-editor-default, #dedee3);
  border-end-start-radius: var(--border-radius-code-editor, 8px);
  border-end-end-radius: var(--border-radius-code-editor, 8px);
  background: var(--color-background-code-editor-status-bar, #f3f3f7);
  color: var(--color-text-body-default, #0f141a);
}
.pane__close-container {
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: calc(var(--space-s, 12px) / 2);
}
.pane__list {
  flex: 1;
  overflow: auto;
  max-block-size: 100%;
  box-sizing: border-box;
  margin-inline-end: calc(var(--line-height-body-m, 20px) + 2 * var(--space-xs, 8px));
}
.pane__table {
  inline-size: 100%;
  border-spacing: 0;
  margin-block: var(--space-s, 12px);
  margin-inline: 0;
}
.pane__item > .pane__cell {
  border-block-start: var(--border-item-width, 2px) solid var(--color-transparent, transparent);
  border-block-end: var(--border-item-width, 2px) solid var(--color-transparent, transparent);
}
.pane__item > .pane__cell:first-child {
  border-inline-start: var(--border-item-width, 2px) solid var(--color-transparent, transparent);
  border-start-start-radius: var(--border-radius-item, 8px);
  border-end-start-radius: var(--border-radius-item, 8px);
}
.pane__item > .pane__cell:last-child {
  border-inline-end: var(--border-item-width, 2px) solid var(--color-transparent, transparent);
  border-start-end-radius: var(--border-radius-item, 8px);
  border-end-end-radius: var(--border-radius-item, 8px);
}
.pane__item--highlighted, .pane__item:hover, .pane__item:focus {
  cursor: pointer;
  outline: none;
}
.pane__item--highlighted > .pane__cell, .pane__item:hover > .pane__cell, .pane__item:focus > .pane__cell {
  background-color: var(--color-background-code-editor-pane-item-hover, #ebebf0);
}
.pane__item--highlighted > .pane__cell, .pane__item:hover > .pane__cell, .pane__item:focus > .pane__cell {
  border-block-start: var(--border-item-width, 2px) solid var(--color-border-code-editor-pane-item-hover, #8c8c94);
  border-block-end: var(--border-item-width, 2px) solid var(--color-border-code-editor-pane-item-hover, #8c8c94);
}
.pane__item--highlighted > .pane__cell:first-child, .pane__item:hover > .pane__cell:first-child, .pane__item:focus > .pane__cell:first-child {
  border-inline-start: var(--border-item-width, 2px) solid var(--color-border-code-editor-pane-item-hover, #8c8c94);
  border-start-start-radius: var(--border-radius-item, 8px);
  border-end-start-radius: var(--border-radius-item, 8px);
}
.pane__item--highlighted > .pane__cell:last-child, .pane__item:hover > .pane__cell:last-child, .pane__item:focus > .pane__cell:last-child {
  border-inline-end: var(--border-item-width, 2px) solid var(--color-border-code-editor-pane-item-hover, #8c8c94);
  border-start-end-radius: var(--border-radius-item, 8px);
  border-end-end-radius: var(--border-radius-item, 8px);
}
.pane__location, .pane__description {
  padding-block: var(--space-xxs, 4px);
  padding-inline: var(--space-s, 12px);
}
.pane__location {
  vertical-align: baseline;
  white-space: nowrap;
  padding-inline-start: calc(var(--space-l, 20px) + var(--space-s, 12px));
}
.pane__description {
  padding-inline-end: 0;
  min-inline-size: 0;
  word-break: break-word;
}

.focus-lock {
  block-size: 100%;
}

.code-editor {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: block;
  border-block: var(--border-width-field, 1px) solid var(--color-border-code-editor-default, #dedee3);
  border-inline: var(--border-width-field, 1px) solid var(--color-border-code-editor-default, #dedee3);
  border-start-start-radius: var(--border-radius-code-editor, 8px);
  border-start-end-radius: var(--border-radius-code-editor, 8px);
  border-end-start-radius: var(--border-radius-code-editor, 8px);
  border-end-end-radius: var(--border-radius-code-editor, 8px);
  inline-size: 100%;
}

.editor {
  position: absolute;
  inset: 0;
}
.editor:focus {
  position: relative;
}
.editor:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(3px - 1px);
}
.editor:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 3px);
  inset-block-start: calc(-1 * 3px);
  inline-size: calc(100% + 3px + 3px);
  block-size: calc(100% + 3px + 3px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
.editor:focus {
  position: absolute;
  overflow: visible;
}

.editor-refresh {
  border-start-start-radius: calc(var(--border-radius-code-editor, 8px) - var(--border-item-width, 2px));
  border-start-end-radius: calc(var(--border-radius-code-editor, 8px) - var(--border-item-width, 2px));
}

.status-bar {
  container-type: inline-size;
  display: flex;
  vertical-align: middle;
  border-block-start: var(--border-width-field, 1px) solid var(--color-border-code-editor-default, #dedee3);
  background-color: var(--color-background-code-editor-status-bar, #f3f3f7);
  min-inline-size: 0;
  word-break: break-word;
}
.status-bar-with-hidden-pane {
  border-end-start-radius: var(--border-radius-code-editor, 8px);
  border-end-end-radius: var(--border-radius-code-editor, 8px);
}
.status-bar__left {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding-inline-start: var(--space-l, 20px);
  border-inline-end: var(--border-width-field, 1px) solid var(--color-border-code-editor-default, #dedee3);
}
.status-bar__right {
  display: flex;
  align-items: center;
}
.status-bar__language-mode, .status-bar__cursor-position {
  display: inline-block;
  color: var(--color-text-body-default, #0f141a);
  padding-block: var(--space-scaled-xs, 8px);
  padding-inline: var(--space-s, 12px);
}
.status-bar__cog-button {
  padding-block: calc(var(--space-scaled-xxs, 4px) - 1px);
  padding-inline: calc(var(--space-xs, 8px) - 2px);
}

.tab-list {
  align-items: center;
  display: inline-flex;
}

.tab-button {
  position: relative;
  display: inline-flex;
  gap: var(--space-xxs, 4px);
  padding-block: var(--space-scaled-xs, 8px);
  padding-inline: var(--space-s, 12px);
  line-height: inherit;
  color: var(--color-text-status-error, #db0000);
  background: none;
  border-block: none;
  border-inline: none;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  z-index: 1;
}
.tab-button:hover {
  color: var(--color-text-code-editor-tab-button-error, #ffffff);
  background: var(--color-text-status-error, #db0000);
}
.tab-button::after {
  content: "";
  position: absolute;
  inset-inline: 0;
  inset-block-end: 0;
  block-size: var(--border-active-width, 4px);
  border-start-start-radius: var(--border-radius-tabs-focus-ring, 20px);
  border-start-end-radius: var(--border-radius-tabs-focus-ring, 20px);
  border-end-start-radius: var(--border-radius-tabs-focus-ring, 20px);
  border-end-end-radius: var(--border-radius-tabs-focus-ring, 20px);
  background: var(--color-text-status-error, #db0000);
  opacity: 0;
}
.tab-button--refresh {
  padding-block-end: calc(var(--space-scaled-xs, 8px) + var(--border-active-width, 4px) - 2px);
}
.tab-button--warnings {
  color: var(--color-text-status-warning, #855900);
}
.tab-button--warnings:hover {
  background: var(--color-text-status-warning, #855900);
}
.tab-button--warnings::after {
  background: var(--color-text-status-warning, #855900);
}
.tab-button--active::after {
  opacity: 1;
}
.tab-button--refresh::after {
  transition: opacity var(--motion-duration-refresh-only-medium, 165ms) var(--motion-easing-refresh-only-c, cubic-bezier(0.84, 0, 0.16, 1));
}
@media (prefers-reduced-motion: reduce) {
  .tab-button--refresh::after {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .tab-button--refresh::after, .awsui-mode-entering .tab-button--refresh::after {
  animation: none;
  transition: none;
}
.tab-button--disabled {
  font-weight: normal;
  color: var(--color-text-code-editor-status-bar-disabled, #8c8c94);
  cursor: default;
}
.tab-button--disabled:hover {
  color: var(--color-text-code-editor-status-bar-disabled, #8c8c94);
  background: transparent;
}
.tab-button--disabled::after {
  display: none;
}
:host-context([data-awsui-focus-visible=true]) .tab-button:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .tab-button:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-code-editor-status-focus-outline-gutter, -7px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .tab-button:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-code-editor-status-focus-outline-gutter, -7px));
  inset-block-start: calc(-1 * var(--space-code-editor-status-focus-outline-gutter, -7px));
  inline-size: calc(100% + var(--space-code-editor-status-focus-outline-gutter, -7px) + var(--space-code-editor-status-focus-outline-gutter, -7px));
  block-size: calc(100% + var(--space-code-editor-status-focus-outline-gutter, -7px) + var(--space-code-editor-status-focus-outline-gutter, -7px));
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
.tab-button--divider {
  display: inline-block;
  block-size: var(--line-height-body-m, 20px);
  inline-size: var(--border-code-editor-status-divider-width, 1px);
  background: var(--color-border-tabs-divider, #c6c6cd);
  vertical-align: middle;
}
@supports (contain: inline-size) {
  @container not (max-width: 500px) {
    .tab-button > .count {
      display: none;
    }
    .tab-button > .text {
      display: inline;
    }
  }
  @container (max-width: 500px) {
    .tab-button > .count {
      display: inline;
    }
    .tab-button > .text {
      display: none;
    }
  }
}
@supports not (contain: inline-size) {
  .tab-button > .count {
    display: none;
  }
  .tab-button > .text {
    display: inline;
  }
}

.loading-screen,
.error-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  block-size: 480px;
  color: var(--color-text-body-secondary, #424650);
  background: var(--color-background-code-editor-loading, #f9f9fa);
  border-start-start-radius: var(--border-radius-code-editor, 8px);
  border-start-end-radius: var(--border-radius-code-editor, 8px);
  border-end-start-radius: var(--border-radius-code-editor, 8px);
  border-end-end-radius: var(--border-radius-code-editor, 8px);
}

.error-screen {
  color: var(--color-text-status-error, #db0000);
}
`;

export { componentStyles as codeEditorStyles };
export { sharedStyles };
