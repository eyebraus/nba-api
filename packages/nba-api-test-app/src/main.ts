import { boxScoreSummaryV2 } from '@nba-api/nba-api';
import { isSuccessfulResponseWithValue } from '@nba-api/stdlib';

const gameId = '0022200653';

const run = async (): Promise<void> => {
    const response = await boxScoreSummaryV2(gameId);

    console.log('NBA API response:');
    console.log(response);

    if (isSuccessfulResponseWithValue(response)) {
        const { value } = response;

        const {
            availableVideo,
            gameInfo,
            gameSummary,
            inactivePlayers,
            lastMeeting,
            lineScore,
            officials,
            otherStats,
            seasonSeries,
        } = value;

        console.log('availableVideo', availableVideo);
        console.log('gameInfo', gameInfo);
        console.log('gameSummary', gameSummary);
        console.log('inactivePlayers', inactivePlayers);
        console.log('lastMeeting', lastMeeting);
        console.log('lineScore', lineScore);
        console.log('officials', officials);
        console.log('otherStats', otherStats);
        console.log('seasonSeries', seasonSeries);
    }
};

run();
