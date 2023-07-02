import { Failure, FailureCode } from './failure';
import { OptionsInitializer } from './options-initializer';

export interface CoreErrorOptions {
    code: string;
    innerError?: Error;
}

export const CoreErrorOptions = OptionsInitializer<CoreErrorOptions>({
    code: FailureCode.Unknown,
});

export interface CoreErrorProperties extends Failure {
    innerError?: Error;
    name: string;
    stack?: string;
}

export class CoreError extends Error implements CoreErrorProperties {
    code: string;
    innerError?: Error;

    constructor(message: string, options = CoreErrorOptions()) {
        super(message);

        this.code = options.code;
        this.innerError = options.innerError;
        this.name = options.code;
    }

    toObject(): CoreErrorProperties {
        return {
            code: this.code,
            innerError: this.innerError,
            message: this.message,
            name: this.name,
            stack: this.stack,
        };
    }
}
