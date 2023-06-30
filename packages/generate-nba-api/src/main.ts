import { logError, logInfo } from '@nba-api/stdlib';
import { writeFile } from 'fs';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { EmitHint, NewLineKind, ScriptKind, ScriptTarget, createPrinter, createSourceFile } from 'typescript';
import { generateDataContract } from './generate/data-contract';
import { generateResponseContract } from './generate/response-contract';
import { parseEndpoints } from './parse/parse-endpoints';

const run = async (args: string[]): Promise<void> => {
    const [inputDirectory, outputDirectory] = args;
    const fileNames = await readdir(inputDirectory);
    const files = fileNames.map((fileName) => join(inputDirectory, fileName));

    logInfo('Files to parse:');
    files.forEach((file) => logInfo(file, 1));

    // Parse endpoints from spec directory
    const endpoints = await parseEndpoints(...files);

    // Create data contracts for all endpoints
    const dataContracts = endpoints.flatMap((endpoint) => endpoint.dataSets.map(generateDataContract));

    // Create response contracts for all endpoints
    const responseContracts = endpoints.map(generateResponseContract);

    // Output models
    const printer = createPrinter({ newLine: NewLineKind.LineFeed });
    const file = createSourceFile(`models.ts`, '', ScriptTarget.Latest, false, ScriptKind.TS);
    let content = '';

    [...dataContracts, ...responseContracts].forEach((contract) => {
        if (contract.members.length < 1) {
            logInfo(`Skipping ${contract.name.text} (no members)`, 1);
            return;
        }

        logInfo(`Writing ${contract.name.text}...`, 1);
        content += `${printer.printNode(EmitHint.Unspecified, contract, file)}\n\n`;
    });

    await writeFile(`${outputDirectory}/models.ts`, content, (err) => {
        if (err) {
            logError(err?.message ?? 'Unknown', 0, err);
        }
    });
};

run(process.argv.slice(2));
