import { Union } from './union';

export type LogLevel = 'Error' | 'Info' | 'Warn';

export const LogLevel: Union<LogLevel> = {
    Error: 'Error',
    Info: 'Info',
    Warn: 'Warn',
};

const getConfiguredLogLevel = () => {
    switch (process.env.NBA_API_LOG_LEVEL) {
        case LogLevel.Error:
            return LogLevel.Error;
        case LogLevel.Info:
            return LogLevel.Info;
        case LogLevel.Warn:
            return LogLevel.Warn;
        default:
            return LogLevel.Error;
    }
};

const getTabsForDepth = (depth: number) => '    '.repeat(depth);

const shouldLog = (messageLogLevel: LogLevel) => {
    const configuredLogLevel = getConfiguredLogLevel();

    if (configuredLogLevel === LogLevel.Error) {
        return messageLogLevel === LogLevel.Error;
    }

    if (configuredLogLevel === LogLevel.Warn) {
        return [LogLevel.Error, LogLevel.Warn].includes(messageLogLevel);
    }

    return true;
};

export const logError = (message: string, depth = 0, ...args: unknown[]): void => {
    if (shouldLog(LogLevel.Error)) {
        console.error(`${getTabsForDepth(depth)}${message}`, ...args);
    }
};

export const logInfo = (message: string, depth = 0, ...args: unknown[]): void => {
    if (shouldLog(LogLevel.Info)) {
        console.info(`${getTabsForDepth(depth)}${message}`, ...args);
    }
};

export const logWarn = (message: string, depth = 0, ...args: unknown[]): void => {
    if (shouldLog(LogLevel.Warn)) {
        console.warn(`${getTabsForDepth(depth)}${message}`, ...args);
    }
};
