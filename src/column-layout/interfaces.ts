// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
// License: see /NOTICE
import { ColumnLayoutBreakpoint } from './internal.js';
import { SlotContent } from '../internal/generated/cloudscape-types.js';
export interface ColumnLayoutProps {
  /**
   * Specifies the number of columns in each grid row.
   * When `minColumnWidth` is not set, only up to 4 columns are supported.
   */
  columns?: number;
  /**
   * Specifies the content type. This determines the spacing of the grid.
   */
  variant?: ColumnLayoutProps.Variant;
  /**
   * Controls whether dividers are placed between rows and columns.
   *
   * Note: This is not supported when used with `minColumnWidth`.
   */
  borders?: ColumnLayoutProps.Borders;
  /**
   * Determines whether the default gutters between columns are removed.
   */
  disableGutters?: boolean;
  /**
   * Use together with `columns` to specify the desired minimum width for each column in pixels.
   *
   * The number of columns is determined by the value of this property, the available space,
   * and the maximum number of columns as defined by the `columns` property.
   */
  minColumnWidth?: number;
  /**
   * The columns to render.
   */
  children?: SlotContent;
}
export declare namespace ColumnLayoutProps {
  type Variant = 'default' | 'text-grid';
  type Borders = 'none' | 'vertical' | 'horizontal' | 'all';
}
export interface InternalColumnLayoutProps extends ColumnLayoutProps {
  __breakpoint?: ColumnLayoutBreakpoint;
  /**
   * Overrides the default wrapper HTML tag.
   */
  __tagOverride?: 'dl';
}
