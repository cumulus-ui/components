const warned = new Set<string>();

/** Log a console warning once per unique scope+message key. */
export function warnOnce(scope: string, message: string): void {
  const key = `${scope}::${message}`;
  if (warned.has(key)) return;
  warned.add(key);
  console.warn(`[cumulus-ui][${scope}] ${message}`);
}

/** Join non-empty strings with separator. Filters out null/undefined/empty. */
export function joinStrings(
  separator: string,
  ...parts: (string | null | undefined)[]
): string {
  return parts.filter((p): p is string => !!p).join(separator);
}
