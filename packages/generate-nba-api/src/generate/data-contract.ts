import { NamingFormat, convertNamingFormats } from '@nba-api/stdlib';
import { Identifier, InterfaceDeclaration, SyntaxKind, factory } from 'typescript';
import { DataSet } from '../models';

export const generateDataContract = (dataSet: DataSet): InterfaceDeclaration => {
    const { fields } = dataSet;

    // Create contract interface members
    const members = fields.map((field) => {
        const { name } = field;

        // TODO: get more precise about types
        const typeReference = factory.createTypeReferenceNode('string');
        return factory.createPropertySignature(undefined, name, undefined, typeReference);
    });

    // Create contract interface
    const dataContractIdentifier = getDataContractIdentifier(dataSet);

    return factory.createInterfaceDeclaration(
        [factory.createModifier(SyntaxKind.ExportKeyword)],
        dataContractIdentifier,
        undefined,
        undefined,
        members,
    );
};

export const getDataContractIdentifier = (dataSet: DataSet): Identifier => {
    const { name } = dataSet;
    const dataSetName = convertNamingFormats(name, NamingFormat.CamelCase, NamingFormat.PascalCase);
    return factory.createIdentifier(`${dataSetName}Data`);
};
