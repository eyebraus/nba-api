import { CoreError } from './core-error';
import { Union } from './union';

export type NamingFormat =
    | 'CamelCase'
    | 'KebabCase'
    | 'PascalCase'
    | 'UnderscoreCase'
    | 'UppercaseKebabCase'
    | 'UppercaseUnderscoreCase';

export const NamingFormat: Union<NamingFormat> = {
    CamelCase: 'CamelCase',
    KebabCase: 'KebabCase',
    PascalCase: 'PascalCase',
    UnderscoreCase: 'UnderscoreCase',
    UppercaseKebabCase: 'UppercaseKebabCase',
    UppercaseUnderscoreCase: 'UppercaseUnderscoreCase',
};

const tokenizeCamelOrPascalCase = (value: string) => {
    const lowercaseValue = value.toLowerCase();
    const tokens: string[] = [];
    const uppercaseIndices: number[] = [];

    for (let i = 1; i < value.length; i++) {
        const charCode = value.charCodeAt(i);

        // 65-90 represents UTF-16 codes for uppercase Roman alphabet characters
        if (charCode >= 65 && charCode < 91) {
            uppercaseIndices.push(i);
        }
    }

    if (uppercaseIndices.length < 1) {
        return [lowercaseValue];
    }

    tokens.push(lowercaseValue.substring(0, uppercaseIndices[0]));

    uppercaseIndices.forEach((startIndex, i) => {
        tokens.push(
            i >= uppercaseIndices.length - 1
                ? lowercaseValue.substring(startIndex)
                : lowercaseValue.substring(startIndex, uppercaseIndices[i + 1]),
        );
    });

    return tokens;
};

export const applyNamingFormatToTokens = (namingFormat: NamingFormat, ...tokens: string[]): string => {
    switch (namingFormat) {
        case NamingFormat.CamelCase:
            return tokens
                .map((token, i) => {
                    const normalizedToken = token.toLowerCase();
                    return i === 0 ? normalizedToken : capitalize(normalizedToken);
                })
                .join('');

        case NamingFormat.KebabCase:
            return tokens.map((token) => token.toLowerCase()).join('-');

        case NamingFormat.PascalCase:
            return tokens.map((token) => capitalize(token.toLowerCase())).join('');

        case NamingFormat.UnderscoreCase:
            return tokens.map((token) => token.toLowerCase()).join('_');

        case NamingFormat.UppercaseKebabCase:
            return tokens.map((token) => token.toUpperCase()).join('-');

        case NamingFormat.UppercaseUnderscoreCase:
            return tokens.map((token) => token.toUpperCase()).join('_');

        default:
            throw new CoreError('Unrecognized naming format provided.');
    }
};

export const capitalize = (value: string): string => `${value.substring(0, 1).toUpperCase()}${value.substring(1)}`;

export const convertNamingFormats = (value: string, format: NamingFormat, nextFormat: NamingFormat): string =>
    applyNamingFormatToTokens(nextFormat, ...tokenizeUsingNamingFormat(value, format));

export const isNotUndefinedOrEmpty = (value: string | undefined): value is string => !isUndefinedOrEmpty(value);

export const isNotUndefinedOrWhiteSpace = (value: string | undefined): value is string =>
    !isUndefinedOrWhiteSpace(value);

export const isString = (value: unknown): value is string => typeof value === 'string';

export const isUndefinedOrEmpty = (value: string | undefined): value is undefined | '' =>
    value === undefined || value === '';

export const isUndefinedOrWhiteSpace = (value: string | undefined): value is undefined | '' =>
    value === undefined || value.trim() === '';

export const tokenizeUsingNamingFormat = (value: string, namingFormat: NamingFormat): string[] => {
    switch (namingFormat) {
        case NamingFormat.CamelCase:
        case NamingFormat.PascalCase:
            return tokenizeCamelOrPascalCase(value);

        case NamingFormat.KebabCase:
        case NamingFormat.UppercaseUnderscoreCase:
            return value.split('-').map((token) => token.toLowerCase());

        case NamingFormat.UnderscoreCase:
        case NamingFormat.UppercaseUnderscoreCase:
            return value.split('_').map((token) => token.toLowerCase());

        default:
            throw new CoreError('Unrecognized naming format provided.');
    }
};

export const uncapitalize = (value: string): string => `${value.substring(0, 1).toLowerCase()}${value.substring(1)}`;
