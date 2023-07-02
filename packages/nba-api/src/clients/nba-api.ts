import {
    FailedResponse,
    Failure,
    FailureCode,
    ResponseWithValue,
    SuccessfulResponseWithValue,
    Union,
} from '@nba-api/stdlib';
import { ApiHostname, DefaultHeaders } from '../constants/nba';
import { NbaApiBody } from '../models/nba-api';
import { getAsync } from './http-promise';

export type NbaApiFailureCode = FailureCode | 'NbaApiRequestFailed';

export const NbaApiFailureCode: Union<NbaApiFailureCode> = {
    ...FailureCode,
    NbaApiRequestFailed: 'NbaApiRequestFailed',
};

const getUrl = (path: string) => `https://${ApiHostname}${path}`;

const RequestFailure = (message: string) => Failure(NbaApiFailureCode.NbaApiRequestFailed, message);

export const getFromNbaApi = async (path: string): Promise<ResponseWithValue<NbaApiBody>> => {
    const url = getUrl(path);
    const { body: bodyAsString, statusCode } = await getAsync(url, { headers: DefaultHeaders });

    if (statusCode !== 200) {
        const failure = RequestFailure('Received unsuccessful status code');
        return FailedResponse(failure, statusCode);
    }

    const body = JSON.parse(bodyAsString) as NbaApiBody;
    return SuccessfulResponseWithValue(body, statusCode);
};
