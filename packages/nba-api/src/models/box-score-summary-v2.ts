export interface AvailableVideoData {
    gameId: string;
    historicalStatus: number;
    hustleStatus: number;
    ptAvailable: number;
    ptXyzAvailable: number;
    videoAvailableFlag: number;
    whStatus: number;
}

export interface GameInfoData {
    attendance: number;
    gameDate: Date;
    gameTime: string;
}

export interface GameSummaryData {
    gamecode: string;
    gameDateEst: Date;
    gameId: string;
    gameSequence: number;
    gameStatusId: number;
    gameStatusText: string;
    homeTeamId: number;
    livePcTime: string;
    livePeriod: number;
    livePeriodTimeBCast: string;
    natlTvBroadcasterAbbreviation: string;
    season: string;
    visitorTeamId: number;
    whStatus: number;
}

export interface InactivePlayersData {
    firstName: string;
    jerseyNum: string;
    lastName: string;
    playerId: number;
    teamAbbreviation: string;
    teamCity: string;
    teamName: string;
    teamId: number;
}

export interface LastMeetingData {
    gameId: string;
    lastGameDateEst: Date;
    lastGameHomeTeamAbbreviation: string;
    lastGameHomeTeamCity: string;
    lastGameHomeTeamId: number;
    lastGameHomeTeamName: string;
    lastGameHomeTeamPoints: number;
    lastGameId: string;
    lastGameVisitorTeamCity: string;
    lastGameVisitorTeamCity1: string;
    lastGameVisitorTeamId: number;
    lastGameVisitorTeamName: string;
    lastGameVisitorTeamPoints: number;
}

export interface LineScoreData {
    gameDateEst: Date;
    gameId: string;
    gameSequence: number;
    pts: number;
    ptsOt1: number;
    ptsOt10: number;
    ptsOt2: number;
    ptsOt3: number;
    ptsOt4: number;
    ptsOt5: number;
    ptsOt6: number;
    ptsOt7: number;
    ptsOt8: number;
    ptsOt9: number;
    ptsQtr1: number;
    ptsQtr2: number;
    ptsQtr3: number;
    ptsQtr4: number;
    teamAbbreviation: string;
    teamCityName: string;
    teamId: number;
    teamNickname: string;
    teamWinsLosses: string;
}

export interface OfficialsData {
    firstName: string;
    jerseyNum: string;
    lastName: string;
    officialId: number;
}

export interface OtherStatsData {
    largestLead: number;
    leadChanges: number;
    leagueId: string;
    ptsFb: number;
    ptsOffTo: number;
    ptsPaint: number;
    pts2ndChance: number;
    teamAbbreviation: string;
    teamCity: string;
    teamId: number;
    teamRebounds: number;
    teamTurnovers: number;
    timesTied: number;
    totalTurnovers: number;
}

export interface SeasonSeriesData {
    gameDateEst: Date;
    gameId: string;
    homeTeamId: number;
    homeTeamLosses: number;
    homeTeamWins: number;
    seriesLeader: string;
    visitorTeamId: number;
}

export interface BoxScoreSummaryV2Content {
    availableVideo: AvailableVideoData[];
    gameInfo: GameInfoData[];
    gameSummary: GameSummaryData[];
    inactivePlayers: InactivePlayersData[];
    lastMeeting: LastMeetingData[];
    lineScore: LineScoreData[];
    officials: OfficialsData[];
    otherStats: OtherStatsData[];
    seasonSeries: SeasonSeriesData[];
}
