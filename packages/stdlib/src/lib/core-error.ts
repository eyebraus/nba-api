import { Failure, FailureCode } from './failure';
import { Initializer } from './initializer';

export interface CoreErrorOptions {
    code: FailureCode;
    innerError?: Error;
}

export const CoreErrorOptions = Initializer<CoreErrorOptions>({
    code: FailureCode.Unknown,
});

export interface CoreErrorProperties<TCode extends FailureCode = FailureCode> extends Failure<TCode> {
    innerError?: Error;
    name: string;
    stack?: string;
}

export class CoreError<TCode extends FailureCode = FailureCode> extends Error implements CoreErrorProperties<TCode> {
    code: TCode;
    innerError?: Error;

    constructor(message: string, options = CoreErrorOptions()) {
        super(message);

        this.code = options.code as TCode;
        this.innerError = options.innerError;
        this.name = options.code;
    }

    toObject(): CoreErrorProperties<TCode> {
        return {
            code: this.code,
            innerError: this.innerError,
            message: this.message,
            name: this.name,
            stack: this.stack,
        };
    }
}
