import { NamingFormat, convertNamingFormats } from '@nba-api/stdlib';
import { Identifier, InterfaceDeclaration, SyntaxKind, factory } from 'typescript';
import { Endpoint } from '../models';
import { getDataContractIdentifier } from './data-contract';

export const generateResponseContract = (endpoint: Endpoint): InterfaceDeclaration => {
    const { dataSets } = endpoint;

    // Create contract interface members
    const members = dataSets.map((dataSet) => {
        const { name } = dataSet;
        const dataContractIdentifier = getDataContractIdentifier(dataSet);
        const elementTypeReference = factory.createTypeReferenceNode(dataContractIdentifier.text);
        const typeReference = factory.createArrayTypeNode(elementTypeReference);
        return factory.createPropertySignature(undefined, name, undefined, typeReference);
    });

    // Create contract interface
    const responseContractIdentifier = getResponseContractIdentifier(endpoint);

    return factory.createInterfaceDeclaration(
        [factory.createModifier(SyntaxKind.ExportKeyword)],
        responseContractIdentifier,
        undefined,
        undefined,
        members,
    );
};

export const getResponseContractIdentifier = (endpoint: Endpoint): Identifier => {
    const { name } = endpoint;
    const responseContractName = convertNamingFormats(name, NamingFormat.CamelCase, NamingFormat.PascalCase);
    return factory.createIdentifier(`${responseContractName}Response`);
};
