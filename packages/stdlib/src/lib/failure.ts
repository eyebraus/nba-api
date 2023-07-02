import { Union } from './union';

/**
 * Types
 */

export type FailureCode = 'Unknown';

export const FailureCode: Union<FailureCode> = {
    Unknown: 'Unknown',
};

export interface Failure {
    code: string;
    message: string;
}

/**
 * Initializers
 */

export const Failure = (code: string, message: string): Failure => ({ code, message });
