import { Failure } from './failure';
import { Union } from './union';

/**
 * Types
 */

export type AsyncOutcome = 'Canceled' | 'Error' | 'Failed' | 'PartiallySucceeded' | 'Succeeded';

export const AsyncOutcome: Union<AsyncOutcome> = {
    Canceled: 'Canceled',
    Error: 'Error',
    Failed: 'Failed',
    PartiallySucceeded: 'PartiallySucceeded',
    Succeeded: 'Succeeded',
};

export type AsyncState = AsyncOutcome | 'InProgress' | 'Queued';

export const AsyncState: Union<AsyncState> = {
    ...AsyncOutcome,
    InProgress: 'InProgress',
    Queued: 'Queued',
};

export interface FailedResult {
    failure: Failure;
    outcome: 'Failed';
}

export interface SuccessfulResult {
    outcome: 'Succeeded';
}

export interface SuccessfulResultWithValue<TValue> extends SuccessfulResult {
    value: TValue;
}

export type Result = FailedResult | SuccessfulResult;
export type ResultWithValue<TValue> = FailedResult | SuccessfulResultWithValue<TValue>;

interface CoreResponse {
    statusCode: number;
}

export type FailedResponse = CoreResponse & FailedResult;
export type SuccessfulResponse = CoreResponse & SuccessfulResult;
export type SuccessfulResponseWithValue<TValue> = CoreResponse & SuccessfulResultWithValue<TValue>;
export type Response = FailedResponse | SuccessfulResponse;
export type ResponseWithValue<TValue> = FailedResponse | SuccessfulResponseWithValue<TValue>;

/**
 * Initializers
 */

export const FailedResponse = (failure: Failure, statusCode: number): FailedResponse => ({
    failure,
    outcome: 'Failed',
    statusCode,
});

export const FailedResult = (failure: Failure): FailedResult => ({
    failure,
    outcome: 'Failed',
});

export const SuccessfulResponse = (statusCode: number): SuccessfulResponse => ({
    outcome: 'Succeeded',
    statusCode,
});

export const SuccessfulResponseWithValue = <TValue>(
    value: TValue,
    statusCode: number,
): SuccessfulResponseWithValue<TValue> => ({
    outcome: 'Succeeded',
    statusCode,
    value,
});

export const SuccessfulResult = (): SuccessfulResult => ({
    outcome: 'Succeeded',
});

export const SuccessfulResultWithValue = <TValue>(value: TValue): SuccessfulResultWithValue<TValue> => ({
    outcome: 'Succeeded',
    value,
});

/**
 * Type guards
 */

export const isAsyncOutcome = (value: unknown): value is AsyncOutcome =>
    value === AsyncOutcome.Canceled ||
    value === AsyncOutcome.Error ||
    value === AsyncOutcome.Failed ||
    value === AsyncOutcome.PartiallySucceeded ||
    value === AsyncOutcome.Succeeded;

export const isAsyncState = (value: unknown): value is AsyncState =>
    isAsyncOutcome(value) || value === AsyncState.InProgress || value === AsyncState.Queued;

export const isFailedResponse = (value: Response): value is FailedResponse => value.outcome === 'Failed';

export const isFailedResult = (value: Result): value is FailedResult => value.outcome === 'Failed';

export const isSuccessfulResponse = (value: Response): value is SuccessfulResponse => value.outcome === 'Succeeded';

export const isSuccessfulResponseWithValue = <TValue>(
    value: ResponseWithValue<TValue>,
): value is SuccessfulResponseWithValue<TValue> => value.outcome === 'Succeeded';

export const isSuccessfulResult = (value: Result): value is SuccessfulResponse => value.outcome === 'Succeeded';

export const isSuccessfulResultWithValue = <TValue>(
    value: ResultWithValue<TValue>,
): value is SuccessfulResultWithValue<TValue> => value.outcome === 'Succeeded';
