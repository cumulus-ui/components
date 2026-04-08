// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const appLayoutResizeStyles = css`
@media (min-width: 689px) {
  .app-layout-resize--with-motion-vertical {
    transition: var(--motion-duration-refresh-only-medium-5rbn3k, 165ms);
    transition-property: border-color, opacity, block-size, inset-block-start, inset-block-end;
  }
}
@media (min-width: 689px) and (prefers-reduced-motion: reduce) {
  .app-layout-resize--with-motion-vertical {
    animation: none;
    transition: none;
  }
}
@media (min-width: 689px) {
  .awsui-motion-disabled .app-layout-resize--with-motion-vertical, .awsui-mode-entering .app-layout-resize--with-motion-vertical {
    animation: none;
    transition: none;
  }
}

@media (min-width: 689px) {
  .app-layout-resize--with-motion-horizontal {
    transition: var(--motion-duration-refresh-only-medium-5rbn3k, 165ms);
    transition-property: border-color, opacity, inline-size, inset-inline-start;
  }
}
@media (min-width: 689px) and (prefers-reduced-motion: reduce) {
  .app-layout-resize--with-motion-horizontal {
    animation: none;
    transition: none;
  }
}
@media (min-width: 689px) {
  .awsui-motion-disabled .app-layout-resize--with-motion-horizontal, .awsui-mode-entering .app-layout-resize--with-motion-horizontal {
    animation: none;
    transition: none;
  }
}

.app-layout-resize--resize-active * {
  -webkit-user-select: none;
          user-select: none;
}
.app-layout-resize--resize-active * .app-layout-resize--with-motion-vertical,
.app-layout-resize--resize-active * .app-layout-resize--with-motion-horizontal {
  transition: none;
  animation: none;
}
.app-layout-resize--resize-active iframe {
  pointer-events: none;
}
.app-layout-resize--resize-side * {
  cursor: ew-resize;
}
.app-layout-resize--resize-bottom * {
  cursor: ns-resize;
}
`;
