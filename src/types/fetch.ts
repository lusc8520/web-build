import { Result } from "./result.ts";

export type FetchResult<T, E> = undefined | "fetching" | Result<T, E>;
