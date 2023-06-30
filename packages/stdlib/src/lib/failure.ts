import { Union } from './union';

export type FailureCode = 'Unknown';

export const FailureCode: Union<FailureCode> = {
    Unknown: 'Unknown',
};

export interface Failure<TCode extends FailureCode = FailureCode> {
    code: TCode;
    message: string;
}
