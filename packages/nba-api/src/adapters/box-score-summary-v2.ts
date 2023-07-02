import { CoreError, CoreErrorOptions, FailureCode, Union, logWarn } from '@nba-api/stdlib';
import {
    AvailableVideoData,
    BoxScoreSummaryV2Content,
    GameInfoData,
    GameSummaryData,
    InactivePlayersData,
    LastMeetingData,
    LineScoreData,
    OfficialsData,
    OtherStatsData,
    SeasonSeriesData,
} from '../models/box-score-summary-v2';
import { NbaApiBody, NbaApiResultSet } from '../models/nba-api';

type BoxScoreSummaryV2FailureCode = FailureCode | 'ResultSetNotFound';

const BoxScoreSummaryV2FailureCode: Union<BoxScoreSummaryV2FailureCode> = {
    ...FailureCode,
    ResultSetNotFound: 'ResultSetNotFound',
};

const resourceName = 'boxscoresummary';

type ResultSetName = Capitalize<keyof BoxScoreSummaryV2Content>;

const ResultSetName: Union<ResultSetName> = {
    AvailableVideo: 'AvailableVideo',
    GameInfo: 'GameInfo',
    GameSummary: 'GameSummary',
    InactivePlayers: 'InactivePlayers',
    LastMeeting: 'LastMeeting',
    LineScore: 'LineScore',
    Officials: 'Officials',
    OtherStats: 'OtherStats',
    SeasonSeries: 'SeasonSeries',
};

const isBoxScoreSummaryV2ResultSetName = (value: unknown): value is ResultSetName => {
    switch (value) {
        case ResultSetName.AvailableVideo:
        case ResultSetName.GameInfo:
        case ResultSetName.GameSummary:
        case ResultSetName.InactivePlayers:
        case ResultSetName.LastMeeting:
        case ResultSetName.LineScore:
        case ResultSetName.Officials:
        case ResultSetName.OtherStats:
        case ResultSetName.SeasonSeries:
            return true;

        default:
            return false;
    }
};

// TODO: put in internals folder
const findResultSet = (resultSetName: ResultSetName, resultSets: NbaApiResultSet[]) => {
    const resultSet = resultSets.find((value) => value.name === resultSetName);

    if (resultSet === undefined) {
        throw new CoreError(
            `Could not find result set "${resultSetName}"`,
            CoreErrorOptions({ code: BoxScoreSummaryV2FailureCode.ResultSetNotFound }),
        );
    }

    return resultSet;
};

const processAvailableVideoResultSet = (resultSet: NbaApiResultSet) =>
    resultSet.rowSet.map<AvailableVideoData>((row) => ({
        gameId: row[0] as string,
        historicalStatus: row[7] as number,
        hustleStatus: row[6] as number,
        ptAvailable: row[2] as number,
        ptXyzAvailable: row[3] as number,
        videoAvailableFlag: row[1] as number,
        whStatus: row[4] as number,
    }));

const processGameInfoResultSet = (resultSet: NbaApiResultSet) =>
    resultSet.rowSet.map<GameInfoData>((row) => ({
        attendance: row[1] as number,
        gameDate: new Date(row[0] as string),
        gameTime: row[2] as string,
    }));

const processGameSummaryResultSet = (resultSet: NbaApiResultSet) =>
    resultSet.rowSet.map<GameSummaryData>((row) => ({
        gamecode: row[5] as string,
        gameDateEst: new Date(row[0] as string),
        gameId: row[2] as string,
        gameSequence: row[1] as number,
        gameStatusId: row[3] as number,
        gameStatusText: row[4] as string,
        homeTeamId: row[6] as number,
        livePcTime: row[10] as string,
        livePeriod: row[9] as number,
        livePeriodTimeBCast: row[12] as string,
        natlTvBroadcasterAbbreviation: row[11] as string,
        season: row[8] as string,
        visitorTeamId: row[7] as number,
        whStatus: row[13] as number,
    }));

const processInactivePlayersResultSet = (resultSet: NbaApiResultSet) =>
    resultSet.rowSet.map<InactivePlayersData>((row) => ({
        firstName: row[1] as string,
        jerseyNum: row[3] as string,
        lastName: row[2] as string,
        playerId: row[0] as number,
        teamAbbreviation: row[7] as string,
        teamCity: row[5] as string,
        teamId: row[4] as number,
        teamName: row[6] as string,
    }));

const processLastMeetingResultSet = (resultSet: NbaApiResultSet) =>
    resultSet.rowSet.map<LastMeetingData>((row) => ({
        gameId: row[0] as string,
        lastGameDateEst: new Date(row[2] as string),
        lastGameHomeTeamAbbreviation: row[6] as string,
        lastGameHomeTeamCity: row[4] as string,
        lastGameHomeTeamId: row[3] as number,
        lastGameHomeTeamName: row[5] as string,
        lastGameHomeTeamPoints: row[7] as number,
        lastGameId: row[1] as string,
        lastGameVisitorTeamCity: row[9] as string,
        lastGameVisitorTeamCity1: row[11] as string,
        lastGameVisitorTeamId: row[8] as number,
        lastGameVisitorTeamName: row[10] as string,
        lastGameVisitorTeamPoints: row[12] as number,
    }));

const processLineScoreResultSet = (resultSet: NbaApiResultSet) =>
    resultSet.rowSet.map<LineScoreData>((row) => ({
        gameDateEst: new Date(row[0] as string),
        gameId: row[2] as string,
        gameSequence: row[1] as number,
        pts: row[22] as number,
        ptsOt1: row[12] as number,
        ptsOt10: row[21] as number,
        ptsOt2: row[13] as number,
        ptsOt3: row[14] as number,
        ptsOt4: row[15] as number,
        ptsOt5: row[16] as number,
        ptsOt6: row[17] as number,
        ptsOt7: row[18] as number,
        ptsOt8: row[19] as number,
        ptsOt9: row[20] as number,
        ptsQtr1: row[8] as number,
        ptsQtr2: row[9] as number,
        ptsQtr3: row[10] as number,
        ptsQtr4: row[11] as number,
        teamAbbreviation: row[4] as string,
        teamCityName: row[5] as string,
        teamId: row[3] as number,
        teamNickname: row[5] as string,
        teamWinsLosses: row[6] as string,
    }));

const processOfficialsResultSet = (resultSet: NbaApiResultSet) =>
    resultSet.rowSet.map<OfficialsData>((row) => ({
        firstName: row[1] as string,
        jerseyNum: row[3] as string,
        lastName: row[2] as string,
        officialId: row[0] as number,
    }));

const processOtherStatsResultSet = (resultSet: NbaApiResultSet) =>
    resultSet.rowSet.map<OtherStatsData>((row) => ({
        largestLead: row[7] as number,
        leadChanges: row[8] as number,
        leagueId: row[0] as string,
        pts2ndChance: row[5] as number,
        ptsFb: row[6] as number,
        ptsOffTo: row[13] as number,
        ptsPaint: row[4] as number,
        teamAbbreviation: row[2] as string,
        teamCity: row[3] as string,
        teamId: row[1] as number,
        teamRebounds: row[12] as number,
        teamTurnovers: row[10] as number,
        timesTied: row[9] as number,
        totalTurnovers: row[11] as number,
    }));

const processSeasonSeriesResultSet = (resultSet: NbaApiResultSet) =>
    resultSet.rowSet.map<SeasonSeriesData>((row) => ({
        gameDateEst: new Date(row[3] as string),
        gameId: row[0] as string,
        homeTeamId: row[1] as number,
        homeTeamLosses: row[5] as number,
        homeTeamWins: row[4] as number,
        seriesLeader: row[6] as string,
        visitorTeamId: row[2] as number,
    }));

export const createBoxScoreSummaryV2Content = (body: NbaApiBody): BoxScoreSummaryV2Content => {
    const { resource, resultSets } = body;

    if (resource !== resourceName) {
        logWarn(`Unexpected resource value "${resource}"; may indicate unexpected body content.`);
    }

    // Locate all result sets in collection
    const availableVideoResultSet = findResultSet(ResultSetName.AvailableVideo, resultSets);
    const gameInfoResultSet = findResultSet(ResultSetName.GameInfo, resultSets);
    const gameSummaryResultSet = findResultSet(ResultSetName.GameSummary, resultSets);
    const inactivePlayersResultSet = findResultSet(ResultSetName.InactivePlayers, resultSets);
    const lastMeetingResultSet = findResultSet(ResultSetName.LastMeeting, resultSets);
    const lineScoreResultSet = findResultSet(ResultSetName.LineScore, resultSets);
    const officialsResultSet = findResultSet(ResultSetName.Officials, resultSets);
    const otherStatsResultSet = findResultSet(ResultSetName.OtherStats, resultSets);
    const seasonSeriesResultSet = findResultSet(ResultSetName.SeasonSeries, resultSets);

    if (resultSets.some((value) => !isBoxScoreSummaryV2ResultSetName(value))) {
        logWarn('Body included one or more unrecognized result sets; may indicate unexpected body content.');
    }

    // Process all result sets into package's format
    const content: BoxScoreSummaryV2Content = {
        availableVideo: processAvailableVideoResultSet(availableVideoResultSet),
        gameInfo: processGameInfoResultSet(gameInfoResultSet),
        gameSummary: processGameSummaryResultSet(gameSummaryResultSet),
        inactivePlayers: processInactivePlayersResultSet(inactivePlayersResultSet),
        lastMeeting: processLastMeetingResultSet(lastMeetingResultSet),
        lineScore: processLineScoreResultSet(lineScoreResultSet),
        officials: processOfficialsResultSet(officialsResultSet),
        otherStats: processOtherStatsResultSet(otherStatsResultSet),
        seasonSeries: processSeasonSeriesResultSet(seasonSeriesResultSet),
    };

    return content;
};
