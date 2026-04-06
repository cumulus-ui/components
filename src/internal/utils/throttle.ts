export interface ThrottledFunction<Args extends unknown[]> {
  (...args: Args): void;
  cancel(): void;
}

/** Throttle: leading call fires immediately, trailing deferred to cooldown expiry. */
export function throttle<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delayMs: number
): ThrottledFunction<Args> {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Args | null = null;
  let lastCallTime = 0;

  function invoke(args: Args): void {
    lastCallTime = Date.now();
    fn(...args);
  }

  const throttled = ((...args: Args) => {
    const now = Date.now();
    const elapsed = now - lastCallTime;

    if (elapsed >= delayMs) {
      if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
      }
      invoke(args);
    } else {
      lastArgs = args;
      if (timerId === null) {
        timerId = setTimeout(() => {
          timerId = null;
          if (lastArgs !== null) {
            invoke(lastArgs);
            lastArgs = null;
          }
        }, delayMs - elapsed);
      }
    }
  }) as ThrottledFunction<Args>;

  throttled.cancel = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
    lastArgs = null;
  };

  return throttled;
}
