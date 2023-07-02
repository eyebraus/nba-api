export interface NbaApiBody {
    parameters?: { [key: string]: string };
    resource: string;
    resultSets: NbaApiResultSet[];
}

export interface NbaApiResultSet {
    headers: string[];
    name: string;
    rowSet: unknown[][];
}
