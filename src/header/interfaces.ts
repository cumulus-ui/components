// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// @ts-nocheck — references Cloudscape-internal types not yet generated
export interface HeaderProps {
  /** @slot default — The heading text */
  /**
   * Specifies the variant of the header:
   * * `h1` - Use this for page level headers.
   * * `h2` - Use this for container level headers.
   * * `h3` - Use this for section level headers.
   * * `awsui-h1-sticky` - Use this for sticky headers in cards and tables.
   * @visualrefresh `awsui-h1-sticky` variant
   */
  variant?: HeaderProps.Variant;
  /**
   * Overrides the default [HTML heading tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
   * provided by the variant. Using this property does not change the visual appearance of the component.
   */
  headingTagOverride?: HeaderProps.HeadingTag;
  /** @slot description — Supplementary text below the heading */
  /** @slot actions — Actions for the container */
  /** @slot counter — Specifies secondary content that's displayed to the right of the heading title */
  /** @slot info — Area next to the heading to display an Info link */
}
export declare namespace HeaderProps {
  type Variant = 'h1' | 'h2' | 'h3' | 'awsui-h1-sticky';
  type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}
