export interface DataSet {
    fields: Field[];
    name: string;
    originalName: string;
}

export interface Endpoint {
    dataSets: DataSet[];
    moduleName: string;
    name: string;
    originalName: string;
    parameters: Parameter[];
    path: string;
}

export interface Field {
    name: string;
    originalName: string;
    // TODO: add type
}

export interface Parameter {
    name: string;
    nullable: boolean;
    originalName: string;
    required: boolean;
}
