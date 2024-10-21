export type Result<E, V> = { ok: true; value: V } | { ok: false; value: E };
