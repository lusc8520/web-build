export type Maybe<T> = NonNullable<T> | undefined;

export const Maybe = {
  withDefault: function <T>(defaultValue: T, maybe: Maybe<T>): T {
    return maybe ?? defaultValue;
  },
  map: function <T, S>(func: (v: T) => S, value: T): S {
    return func(value);
  },
};
