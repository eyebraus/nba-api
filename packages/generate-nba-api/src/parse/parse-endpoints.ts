import { convertNamingFormats, CoreError, logInfo, NamingFormat } from '@nba-api/stdlib';
import { readFile } from 'node:fs/promises';
import { DataSet, Endpoint, Field, Parameter } from '../models';

const dataSetSectionPattern = /^#### (\w+) `\w+`\n```text\n(\[[\w', ]+\])\n```$/gm;
const originalNameLinePattern = /^# (\w+)$/gm;
const parameterLinePattern = /^\[_\*\*(\w+)\*\*_\]\(.+\) \| \w+ \| .* \| (`Y`)? \| (`Y`)? \| $/gm;
const pathLinePattern = /^>\[https:\/\/stats\.nba\.com(\/stats\/\w+)\]\(https:\/\/stats.nba.com\/stats\/\w+\)$/gm;

const constructField = (originalName: string): Field => ({
    name: convertNamingFormats(originalName, NamingFormat.UppercaseUnderscoreCase, NamingFormat.CamelCase),
    originalName,
});

const parseDataSets = (content: string) => {
    logInfo('parseDataSets:', 2);

    return [...content.matchAll(dataSetSectionPattern)].map<DataSet>((match, index) => {
        logInfo(`${index}:`, 3);

        const [, originalName, rawFields] = match;
        const name = convertNamingFormats(originalName, NamingFormat.PascalCase, NamingFormat.CamelCase);

        logInfo(`name: ${name}`, 4);
        logInfo(`originalName: ${originalName}`, 4);
        logInfo(`rawFields: ${rawFields}`, 4);

        const parsedFields = JSON.parse(rawFields.replace(/'/g, '"')) as string[];
        const fields = parsedFields.map(constructField);

        return { fields, name, originalName };
    });
};

const parseOriginalName = (content: string) => {
    logInfo('parseOriginalName:', 2);

    const nameMatch = [...content.matchAll(originalNameLinePattern)];

    if (!nameMatch || nameMatch.length < 1) {
        throw new CoreError('Could not find endpoint name in file content');
    }

    logInfo(`RETURN: ${nameMatch[0][1]}`, 3);

    return nameMatch[0][1];
};

const parseParameters = (content: string) => {
    logInfo('parseParameters:', 2);

    return [...content.matchAll(parameterLinePattern)].map<Parameter>((match, index) => {
        logInfo(`${index}:`, 3);

        const [, originalName, rawRequired, rawNullable] = match;
        const name = convertNamingFormats(originalName, NamingFormat.PascalCase, NamingFormat.CamelCase);
        const nullable = rawNullable === '`Y`';
        const required = rawRequired === '`Y`';

        logInfo(`name: ${name}`, 4);
        logInfo(`nullable: ${nullable}`, 4);
        logInfo(`originalName: ${originalName}`, 4);
        logInfo(`rawNullable: ${rawNullable}`, 4);
        logInfo(`rawRequired: ${rawRequired}`, 4);
        logInfo(`required: ${required}`, 4);

        return { name, nullable, originalName, required };
    });
};

const parsePath = (content: string) => {
    logInfo('parsePath:', 2);

    const pathMatch = [...content.matchAll(pathLinePattern)];

    if (!pathMatch || pathMatch.length < 1) {
        throw new CoreError('Could not find endpoint path in file content');
    }

    logInfo(`RETURN: ${pathMatch[0][1]}`, 3);

    return pathMatch[0][1];
};

export const parseEndpoints = async (...filePaths: string[]): Promise<Endpoint[]> => {
    // Return empty array immediately if no paths were given
    if (filePaths.length < 1) {
        return [];
    }

    // Return promise for all endpoints when given multiple paths
    if (filePaths.length > 1) {
        const results = await Promise.all(filePaths.map((path) => parseEndpoints(path)));
        return results.flat();
    }

    logInfo('parseEndpoints:');

    const [filePath] = filePaths;
    const content = await readFile(filePath, { encoding: 'utf-8' });

    logInfo(filePath, 1);

    const dataSets = parseDataSets(content);
    const originalName = parseOriginalName(content);
    const parameters = parseParameters(content);
    const path = parsePath(content);
    const name = convertNamingFormats(originalName, NamingFormat.PascalCase, NamingFormat.CamelCase);
    const moduleName = convertNamingFormats(originalName, NamingFormat.PascalCase, NamingFormat.KebabCase);

    return [
        {
            dataSets,
            moduleName,
            name,
            originalName,
            parameters,
            path,
        },
    ];
};
