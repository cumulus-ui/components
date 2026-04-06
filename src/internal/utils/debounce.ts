export interface DebouncedFunction<Args extends unknown[]> {
  (...args: Args): void;
  cancel(): void;
  flush(): void;
}

/** Debounce: delays invocation until `delayMs` after last call. */
export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delayMs: number
): DebouncedFunction<Args> {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Args | null = null;

  const debounced = ((...args: Args) => {
    lastArgs = args;
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      timerId = null;
      if (lastArgs !== null) {
        fn(...lastArgs);
        lastArgs = null;
      }
    }, delayMs);
  }) as DebouncedFunction<Args>;

  debounced.cancel = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
    lastArgs = null;
  };

  debounced.flush = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
    if (lastArgs !== null) {
      const args = lastArgs;
      lastArgs = null;
      fn(...args);
    }
  };

  return debounced;
}
