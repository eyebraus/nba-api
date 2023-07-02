export type OptionsInitializer<T> = (overrides?: Partial<T>) => T;

export const OptionsInitializer =
    <T>(defaults: T): OptionsInitializer<T> =>
    (overrides?: Partial<T>) => ({
        ...defaults,
        ...(overrides ?? {}),
    });
