export type PermutationSet<T> = {
  [K in keyof T]?: ReadonlyArray<T[K]>;
};

export function createPermutations<T>(sets: PermutationSet<T>[]): T[] {
  return sets.flatMap(set => {
    const keys = Object.keys(set) as (keyof T)[];
    const result: T[] = [];

    function recurse(index: number, current: Partial<T>): void {
      if (index === keys.length) {
        result.push({ ...current } as T);
        return;
      }
      const key = keys[index];
      for (const value of set[key]!) {
        current[key] = value;
        recurse(index + 1, current);
      }
    }

    recurse(0, {});
    return result;
  });
}
