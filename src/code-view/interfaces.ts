export interface CodeViewProps {
  content: string;
  lineNumbers?: boolean;
  wrapLines?: boolean;
  ariaLabel?: string | null;
  highlight?: (code: string) => string;
}
