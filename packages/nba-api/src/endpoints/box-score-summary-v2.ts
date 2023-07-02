import { ResponseWithValue, SuccessfulResponseWithValue, isFailedResponse } from '@nba-api/stdlib';
import { createBoxScoreSummaryV2Content } from '../adapters/box-score-summary-v2';
import { getFromNbaApi } from '../clients/nba-api';
import { BoxScoreSummaryV2Content } from '../models/box-score-summary-v2';

export const boxScoreSummaryV2 = async (gameId: string): Promise<ResponseWithValue<BoxScoreSummaryV2Content>> => {
    const apiResponse = await getFromNbaApi(`/stats/boxscoresummaryv2?GameID=${gameId}`);

    if (isFailedResponse(apiResponse)) {
        return apiResponse;
    }

    const { statusCode, value } = apiResponse;
    const content = createBoxScoreSummaryV2Content(value);

    return SuccessfulResponseWithValue(content, statusCode);
};
