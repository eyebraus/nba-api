export interface ASTLeadersData {
    playerId: string;
    playerName: string;
    ast: string;
    astRank: string;
}

export interface BLKLeadersData {
    playerId: string;
    playerName: string;
    blk: string;
    blkRank: string;
}

export interface DREBLeadersData {
    playerId: string;
    playerName: string;
    dreb: string;
    drebRank: string;
}

export interface FG3ALeadersData {
    playerId: string;
    playerName: string;
    fg3a: string;
    fg3aRank: string;
}

export interface FG3MLeadersData {
    playerId: string;
    playerName: string;
    fg3m: string;
    fg3mRank: string;
}

export interface FG3_PCTLeadersData {
    playerId: string;
    playerName: string;
    fg3Pct: string;
    fg3PctRank: string;
}

export interface FGALeadersData {
    playerId: string;
    playerName: string;
    fga: string;
    fgaRank: string;
}

export interface FGMLeadersData {
    playerId: string;
    playerName: string;
    fgm: string;
    fgmRank: string;
}

export interface FG_PCTLeadersData {
    playerId: string;
    playerName: string;
    fgPct: string;
    fgPctRank: string;
}

export interface FTALeadersData {
    playerId: string;
    playerName: string;
    fta: string;
    ftaRank: string;
}

export interface FTMLeadersData {
    playerId: string;
    playerName: string;
    ftm: string;
    ftmRank: string;
}

export interface FT_PCTLeadersData {
    playerId: string;
    playerName: string;
    ftPct: string;
    ftPctRank: string;
}

export interface GPLeadersData {
    playerId: string;
    playerName: string;
    gp: string;
    gpRank: string;
}

export interface OREBLeadersData {
    playerId: string;
    playerName: string;
    oreb: string;
    orebRank: string;
}

export interface PFLeadersData {
    playerId: string;
    playerName: string;
    pf: string;
    pfRank: string;
}

export interface PTSLeadersData {
    playerId: string;
    playerName: string;
    pts: string;
    ptsRank: string;
}

export interface REBLeadersData {
    playerId: string;
    playerName: string;
    reb: string;
    rebRank: string;
}

export interface STLLeadersData {
    playerId: string;
    playerName: string;
    stl: string;
    stlRank: string;
}

export interface TOVLeadersData {
    playerId: string;
    playerName: string;
    tov: string;
    tovRank: string;
}

export interface AssistLeadersData {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    ast: string;
}

export interface AssistTrackerData {
    assists: string;
}

export interface PlayerStatsData {
    gameId: string;
    teamId: string;
    teamAbbreviation: string;
    teamCity: string;
    playerId: string;
    playerName: string;
    startPosition: string;
    comment: string;
    min: string;
    eOffRating: string;
    offRating: string;
    eDefRating: string;
    defRating: string;
    eNetRating: string;
    netRating: string;
    astPct: string;
    astTov: string;
    astRatio: string;
    orebPct: string;
    drebPct: string;
    rebPct: string;
    tmTovPct: string;
    efgPct: string;
    tsPct: string;
    usgPct: string;
    eUsgPct: string;
    ePace: string;
    pace: string;
    pacePer40: string;
    poss: string;
    pie: string;
}

export interface TeamStatsData {
    gameId: string;
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    teamCity: string;
    min: string;
    eOffRating: string;
    offRating: string;
    eDefRating: string;
    defRating: string;
    eNetRating: string;
    netRating: string;
    astPct: string;
    astTov: string;
    astRatio: string;
    orebPct: string;
    drebPct: string;
    rebPct: string;
    eTmTovPct: string;
    tmTovPct: string;
    efgPct: string;
    tsPct: string;
    usgPct: string;
    eUsgPct: string;
    ePace: string;
    pace: string;
    pacePer40: string;
    poss: string;
    pie: string;
}

export interface PlayerDefensiveStatsData {
    gameId: string;
    teamId: string;
    teamAbbreviation: string;
    teamCity: string;
    teamNickname: string;
    playerId: string;
    playerName: string;
    startPosition: string;
    comment: string;
    matchupMin: string;
    partialPoss: string;
    switchesOn: string;
    playerPts: string;
    dreb: string;
    matchupAst: string;
    matchupTov: string;
    stl: string;
    blk: string;
    matchupFgm: string;
    matchupFga: string;
    matchupFgPct: string;
    matchupFg3m: string;
    matchupFg3a: string;
    matchupFg3Pct: string;
}

export interface SqlPlayersFourFactorsData {
    gameId: string;
    teamId: string;
    teamAbbreviation: string;
    teamCity: string;
    playerId: string;
    playerName: string;
    startPosition: string;
    comment: string;
    min: string;
    efgPct: string;
    ftaRate: string;
    tmTovPct: string;
    orebPct: string;
    oppEfgPct: string;
    oppFtaRate: string;
    oppTovPct: string;
    oppOrebPct: string;
}

export interface SqlTeamsFourFactorsData {
    gameId: string;
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    teamCity: string;
    min: string;
    efgPct: string;
    ftaRate: string;
    tmTovPct: string;
    orebPct: string;
    oppEfgPct: string;
    oppFtaRate: string;
    oppTovPct: string;
    oppOrebPct: string;
}

export interface PlayerMatchupsStatsData {
    gameId: string;
    offTeamId: string;
    offTeamAbbreviation: string;
    offTeamCity: string;
    offTeamNickname: string;
    offPlayerId: string;
    offPlayerName: string;
    defTeamId: string;
    defTeamAbbreviation: string;
    defTeamCity: string;
    defTeamNickname: string;
    defPlayerId: string;
    defPlayerName: string;
    matchupMin: string;
    partialPoss: string;
    pctDefenderTotalTime: string;
    pctOffTotalTime: string;
    pctTotalTimeBothOn: string;
    switchesOn: string;
    playerPts: string;
    teamPts: string;
    matchupAst: string;
    matchupPotentialAst: string;
    matchupTov: string;
    matchupBlk: string;
    matchupFgm: string;
    matchupFga: string;
    matchupFgPct: string;
    matchupFg3m: string;
    matchupFg3a: string;
    matchupFg3Pct: string;
    helpBlk: string;
    helpFgm: string;
    helpFga: string;
    helpFgPerc: string;
    matchupFtm: string;
    matchupFta: string;
    sfl: string;
}

export interface SqlPlayersMiscData {
    gameId: string;
    teamId: string;
    teamAbbreviation: string;
    teamCity: string;
    playerId: string;
    playerName: string;
    startPosition: string;
    comment: string;
    min: string;
    ptsOffTov: string;
    pts2ndChance: string;
    ptsFb: string;
    ptsPaint: string;
    oppPtsOffTov: string;
    oppPts2ndChance: string;
    oppPtsFb: string;
    oppPtsPaint: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
}

export interface SqlTeamsMiscData {
    gameId: string;
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    teamCity: string;
    min: string;
    ptsOffTov: string;
    pts2ndChance: string;
    ptsFb: string;
    ptsPaint: string;
    oppPtsOffTov: string;
    oppPts2ndChance: string;
    oppPtsFb: string;
    oppPtsPaint: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
}

export interface PlayerStatsData {
    gameId: string;
    teamId: string;
    teamAbbreviation: string;
    teamCity: string;
    playerId: string;
    playerName: string;
    startPosition: string;
    comment: string;
    min: string;
    spd: string;
    dist: string;
    orbc: string;
    drbc: string;
    rbc: string;
    tchs: string;
    sast: string;
    ftast: string;
    pass: string;
    ast: string;
    cfgm: string;
    cfga: string;
    cfgPct: string;
    ufgm: string;
    ufga: string;
    ufgPct: string;
    fgPct: string;
    dfgm: string;
    dfga: string;
    dfgPct: string;
}

export interface TeamStatsData {
    gameId: string;
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    teamCity: string;
    min: string;
    dist: string;
    orbc: string;
    drbc: string;
    rbc: string;
    tchs: string;
    sast: string;
    ftast: string;
    pass: string;
    ast: string;
    cfgm: string;
    cfga: string;
    cfgPct: string;
    ufgm: string;
    ufga: string;
    ufgPct: string;
    fgPct: string;
    dfgm: string;
    dfga: string;
    dfgPct: string;
}

export interface SqlPlayersScoringData {
    gameId: string;
    teamId: string;
    teamAbbreviation: string;
    teamCity: string;
    playerId: string;
    playerName: string;
    startPosition: string;
    comment: string;
    min: string;
    pctFga2pt: string;
    pctFga3pt: string;
    pctPts2pt: string;
    pctPts2ptMr: string;
    pctPts3pt: string;
    pctPtsFb: string;
    pctPtsFt: string;
    pctPtsOffTov: string;
    pctPtsPaint: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
}

export interface SqlTeamsScoringData {
    gameId: string;
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    teamCity: string;
    min: string;
    pctFga2pt: string;
    pctFga3pt: string;
    pctPts2pt: string;
    pctPts2ptMr: string;
    pctPts3pt: string;
    pctPtsFb: string;
    pctPtsFt: string;
    pctPtsOffTov: string;
    pctPtsPaint: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
}

export interface BoxScoreSimilarityScoresData {
    person2Id: string;
    person2: string;
    person2TeamId: string;
    similarityScore: string;
}

export interface AvailableVideoData {
    gameId: string;
    videoAvailableFlag: string;
    ptAvailable: string;
    ptXyzAvailable: string;
    whStatus: string;
    hustleStatus: string;
    historicalStatus: string;
}

export interface GameInfoData {
    gameDate: string;
    attendance: string;
    gameTime: string;
}

export interface GameSummaryData {
    gameDateEst: string;
    gameSequence: string;
    gameId: string;
    gameStatusId: string;
    gameStatusText: string;
    gamecode: string;
    homeTeamId: string;
    visitorTeamId: string;
    season: string;
    livePeriod: string;
    livePcTime: string;
    natlTvBroadcasterAbbreviation: string;
    livePeriodTimeBcast: string;
    whStatus: string;
}

export interface InactivePlayersData {
    playerId: string;
    firstName: string;
    lastName: string;
    jerseyNum: string;
    teamId: string;
    teamCity: string;
    teamName: string;
    teamAbbreviation: string;
}

export interface LastMeetingData {
    gameId: string;
    lastGameId: string;
    lastGameDateEst: string;
    lastGameHomeTeamId: string;
    lastGameHomeTeamCity: string;
    lastGameHomeTeamName: string;
    lastGameHomeTeamAbbreviation: string;
    lastGameHomeTeamPoints: string;
    lastGameVisitorTeamId: string;
    lastGameVisitorTeamCity: string;
    lastGameVisitorTeamName: string;
    lastGameVisitorTeamCity1: string;
    lastGameVisitorTeamPoints: string;
}

export interface LineScoreData {
    gameDateEst: string;
    gameSequence: string;
    gameId: string;
    teamId: string;
    teamAbbreviation: string;
    teamCityName: string;
    teamNickname: string;
    teamWinsLosses: string;
    ptsQtr1: string;
    ptsQtr2: string;
    ptsQtr3: string;
    ptsQtr4: string;
    ptsOt1: string;
    ptsOt2: string;
    ptsOt3: string;
    ptsOt4: string;
    ptsOt5: string;
    ptsOt6: string;
    ptsOt7: string;
    ptsOt8: string;
    ptsOt9: string;
    ptsOt10: string;
    pts: string;
}

export interface OfficialsData {
    officialId: string;
    firstName: string;
    lastName: string;
    jerseyNum: string;
}

export interface OtherStatsData {
    leagueId: string;
    teamId: string;
    teamAbbreviation: string;
    teamCity: string;
    ptsPaint: string;
    pts2ndChance: string;
    ptsFb: string;
    largestLead: string;
    leadChanges: string;
    timesTied: string;
    teamTurnovers: string;
    totalTurnovers: string;
    teamRebounds: string;
    ptsOffTo: string;
}

export interface SeasonSeriesData {
    gameId: string;
    homeTeamId: string;
    visitorTeamId: string;
    gameDateEst: string;
    homeTeamWins: string;
    homeTeamLosses: string;
    seriesLeader: string;
}

export interface PlayerStatsData {
    gameId: string;
    teamId: string;
    teamAbbreviation: string;
    teamCity: string;
    playerId: string;
    playerName: string;
    startPosition: string;
    comment: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    to: string;
    pf: string;
    pts: string;
    plusMinus: string;
}

export interface TeamStarterBenchStatsData {
    gameId: string;
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    teamCity: string;
    startersBench: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    to: string;
    pf: string;
    pts: string;
}

export interface TeamStatsData {
    gameId: string;
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    teamCity: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    to: string;
    pf: string;
    pts: string;
    plusMinus: string;
}

export interface SqlPlayersUsageData {
    gameId: string;
    teamId: string;
    teamAbbreviation: string;
    teamCity: string;
    playerId: string;
    playerName: string;
    startPosition: string;
    comment: string;
    min: string;
    usgPct: string;
    pctFgm: string;
    pctFga: string;
    pctFg3m: string;
    pctFg3a: string;
    pctFtm: string;
    pctFta: string;
    pctOreb: string;
    pctDreb: string;
    pctReb: string;
    pctAst: string;
    pctTov: string;
    pctStl: string;
    pctBlk: string;
    pctBlka: string;
    pctPf: string;
    pctPfd: string;
    pctPts: string;
}

export interface SqlTeamsUsageData {
    gameId: string;
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    teamCity: string;
    min: string;
    usgPct: string;
    pctFgm: string;
    pctFga: string;
    pctFg3m: string;
    pctFg3a: string;
    pctFtm: string;
    pctFta: string;
    pctOreb: string;
    pctDreb: string;
    pctReb: string;
    pctAst: string;
    pctTov: string;
    pctStl: string;
    pctBlk: string;
    pctBlka: string;
    pctPf: string;
    pctPfd: string;
    pctPts: string;
}

export interface CommonAllPlayersData {
    personId: string;
    displayLastCommaFirst: string;
    displayFirstLast: string;
    rosterstatus: string;
    fromYear: string;
    toYear: string;
    playercode: string;
    teamId: string;
    teamCity: string;
    teamName: string;
    teamAbbreviation: string;
    teamCode: string;
    gamesPlayedFlag: string;
    otherleagueExperienceCh: string;
}

export interface AvailableSeasonsData {
    seasonId: string;
}

export interface CommonPlayerInfoData {
    personId: string;
    firstName: string;
    lastName: string;
    displayFirstLast: string;
    displayLastCommaFirst: string;
    displayFiLast: string;
    playerSlug: string;
    birthdate: string;
    school: string;
    country: string;
    lastAffiliation: string;
    height: string;
    weight: string;
    seasonExp: string;
    jersey: string;
    position: string;
    rosterstatus: string;
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    teamCode: string;
    teamCity: string;
    playercode: string;
    fromYear: string;
    toYear: string;
    dleagueFlag: string;
    nbaFlag: string;
    gamesPlayedFlag: string;
    draftYear: string;
    draftRound: string;
    draftNumber: string;
}

export interface PlayerHeadlineStatsData {
    playerId: string;
    playerName: string;
    timeframe: string;
    pts: string;
    ast: string;
    reb: string;
    pie: string;
}

export interface PlayoffSeriesData {
    gameId: string;
    homeTeamId: string;
    visitorTeamId: string;
    seriesId: string;
    gameNum: string;
}

export interface CoachesData {
    teamId: string;
    season: string;
    coachId: string;
    firstName: string;
    lastName: string;
    coachName: string;
    isAssistant: string;
    coachType: string;
    sortSequence: string;
}

export interface CommonTeamRosterData {
    teamid: string;
    season: string;
    leagueid: string;
    player: string;
    playerSlug: string;
    num: string;
    position: string;
    height: string;
    weight: string;
    birthDate: string;
    age: string;
    exp: string;
    school: string;
    playerId: string;
}

export interface TeamYearsData {
    leagueId: string;
    teamId: string;
    minYear: string;
    maxYear: string;
    abbreviation: string;
}

export interface GameByGameStatsData {
    dateEst: string;
    visitorTeam: string;
    homeTeam: string;
    gp: string;
    gs: string;
    actualMinutes: string;
    actualSeconds: string;
    fg: string;
    fga: string;
    fgPct: string;
    fg3: string;
    fg3a: string;
    fg3Pct: string;
    ft: string;
    fta: string;
    ftPct: string;
    offReb: string;
    defReb: string;
    totReb: string;
    avgTotReb: string;
    ast: string;
    pf: string;
    dq: string;
    stl: string;
    turnovers: string;
    blk: string;
    pts: string;
    avgPts: string;
}

export interface TotalPlayerStatsData {
    displayFiLast: string;
    personId: string;
    jerseyNum: string;
    gp: string;
    gs: string;
    actualMinutes: string;
    actualSeconds: string;
    fg: string;
    fga: string;
    fgPct: string;
    fg3: string;
    fg3a: string;
    fg3Pct: string;
    ft: string;
    fta: string;
    ftPct: string;
    offReb: string;
    defReb: string;
    totReb: string;
    ast: string;
    pf: string;
    dq: string;
    stl: string;
    turnovers: string;
    blk: string;
    pts: string;
    maxActualMinutes: string;
    maxActualSeconds: string;
    maxReb: string;
    maxAst: string;
    maxStl: string;
    maxTurnovers: string;
    maxBlk: string;
    maxPts: string;
    avgActualMinutes: string;
    avgActualSeconds: string;
    avgTotReb: string;
    avgAst: string;
    avgStl: string;
    avgTurnovers: string;
    avgBlk: string;
    avgPts: string;
    perMinTotReb: string;
    perMinAst: string;
    perMinStl: string;
    perMinTurnovers: string;
    perMinBlk: string;
    perMinPts: string;
}

export interface CumeStatsPlayerGamesData {
    matchup: string;
    gameId: string;
}

export interface GameByGameStatsData {
    jerseyNum: string;
    player: string;
    personId: string;
    teamId: string;
    gp: string;
    gs: string;
    actualMinutes: string;
    actualSeconds: string;
    fg: string;
    fga: string;
    fgPct: string;
    fg3: string;
    fg3a: string;
    fg3Pct: string;
    ft: string;
    fta: string;
    ftPct: string;
    offReb: string;
    defReb: string;
    totReb: string;
    ast: string;
    pf: string;
    dq: string;
    stl: string;
    turnovers: string;
    blk: string;
    pts: string;
    maxActualMinutes: string;
    maxActualSeconds: string;
    maxReb: string;
    maxAst: string;
    maxStl: string;
    maxTurnovers: string;
    maxBlkp: string;
    maxPts: string;
    avgActualMinutes: string;
    avgActualSeconds: string;
    avgReb: string;
    avgAst: string;
    avgStl: string;
    avgTurnovers: string;
    avgBlkp: string;
    avgPts: string;
    perMinReb: string;
    perMinAst: string;
    perMinStl: string;
    perMinTurnovers: string;
    perMinBlk: string;
    perMinPts: string;
}

export interface TotalTeamStatsData {
    city: string;
    nickname: string;
    teamId: string;
    w: string;
    l: string;
    wHome: string;
    lHome: string;
    wRoad: string;
    lRoad: string;
    teamTurnovers: string;
    teamRebounds: string;
    gp: string;
    gs: string;
    actualMinutes: string;
    actualSeconds: string;
    fg: string;
    fga: string;
    fgPct: string;
    fg3: string;
    fg3a: string;
    fg3Pct: string;
    ft: string;
    fta: string;
    ftPct: string;
    offReb: string;
    defReb: string;
    totReb: string;
    ast: string;
    pf: string;
    stl: string;
    totalTurnovers: string;
    blk: string;
    pts: string;
    avgReb: string;
    avgPts: string;
    dq: string;
}

export interface CumeStatsTeamGamesData {
    matchup: string;
    gameId: string;
}

export interface DefenseHubStat1Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    dreb: string;
}

export interface DefenseHubStat2Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    stl: string;
}

export interface DefenseHubStat3Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    blk: string;
}

export interface DefenseHubStat4Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    tmDefRating: string;
}

export interface DefenseHubStat5Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    overallPm: string;
}

export interface DefenseHubStat6Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    threepDfgpct: string;
}

export interface DefenseHubStat7Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    twopDfgpct: string;
}

export interface DefenseHubStat8Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    fifeteenfDfgpct: string;
}

export interface DefenseHubStat9Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    defRimPct: string;
}

export interface DraftBoardData {
    personId: string;
    playerName: string;
    season: string;
    roundNumber: string;
    roundPick: string;
    overallPick: string;
    teamId: string;
    teamCity: string;
    teamName: string;
    teamAbbreviation: string;
    organization: string;
    organizationType: string;
    height: string;
    weight: string;
    position: string;
    jerseyNumber: string;
    birthdate: string;
    age: string;
}

export interface ResultsData {
    tempPlayerId: string;
    playerId: string;
    firstName: string;
    lastName: string;
    playerName: string;
    position: string;
    standingVerticalLeap: string;
    maxVerticalLeap: string;
    laneAgilityTime: string;
    modifiedLaneAgilityTime: string;
    threeQuarterSprint: string;
    benchPress: string;
}

export interface ResultsData {
    tempPlayerId: string;
    playerId: string;
    firstName: string;
    lastName: string;
    playerName: string;
    position: string;
    offDribFifteenBreakLeftMade: string;
    offDribFifteenBreakLeftAttempt: string;
    offDribFifteenBreakLeftPct: string;
    offDribFifteenTopKeyMade: string;
    offDribFifteenTopKeyAttempt: string;
    offDribFifteenTopKeyPct: string;
    offDribFifteenBreakRightMade: string;
    offDribFifteenBreakRightAttempt: string;
    offDribFifteenBreakRightPct: string;
    offDribCollegeBreakLeftMade: string;
    offDribCollegeBreakLeftAttempt: string;
    offDribCollegeBreakLeftPct: string;
    offDribCollegeTopKeyMade: string;
    offDribCollegeTopKeyAttempt: string;
    offDribCollegeTopKeyPct: string;
    offDribCollegeBreakRightMade: string;
    offDribCollegeBreakRightAttempt: string;
    offDribCollegeBreakRightPct: string;
    onMoveFifteenMade: string;
    onMoveFifteenAttempt: string;
    onMoveFifteenPct: string;
    onMoveCollegeMade: string;
    onMoveCollegeAttempt: string;
    onMoveCollegePct: string;
}

export interface ResultsData {
    tempPlayerId: string;
    playerId: string;
    firstName: string;
    lastName: string;
    playerName: string;
    position: string;
    heightWoShoes: string;
    heightWoShoesFtIn: string;
    heightWShoes: string;
    heightWShoesFtIn: string;
    weight: string;
    wingspan: string;
    wingspanFtIn: string;
    standingReach: string;
    standingReachFtIn: string;
    bodyFatPct: string;
    handLength: string;
    handWidth: string;
}

export interface ResultsData {
    tempPlayerId: string;
    playerId: string;
    firstName: string;
    lastName: string;
    playerName: string;
    position: string;
    fifteenCornerLeftMade: string;
    fifteenCornerLeftAttempt: string;
    fifteenCornerLeftPct: string;
    fifteenBreakLeftMade: string;
    fifteenBreakLeftAttempt: string;
    fifteenBreakLeftPct: string;
    fifteenTopKeyMade: string;
    fifteenTopKeyAttempt: string;
    fifteenTopKeyPct: string;
    fifteenBreakRightMade: string;
    fifteenBreakRightAttempt: string;
    fifteenBreakRightPct: string;
    fifteenCornerRightMade: string;
    fifteenCornerRightAttempt: string;
    fifteenCornerRightPct: string;
    collegeCornerLeftMade: string;
    collegeCornerLeftAttempt: string;
    collegeCornerLeftPct: string;
    collegeBreakLeftMade: string;
    collegeBreakLeftAttempt: string;
    collegeBreakLeftPct: string;
    collegeTopKeyMade: string;
    collegeTopKeyAttempt: string;
    collegeTopKeyPct: string;
    collegeBreakRightMade: string;
    collegeBreakRightAttempt: string;
    collegeBreakRightPct: string;
    collegeCornerRightMade: string;
    collegeCornerRightAttempt: string;
    collegeCornerRightPct: string;
    nbaCornerLeftMade: string;
    nbaCornerLeftAttempt: string;
    nbaCornerLeftPct: string;
    nbaBreakLeftMade: string;
    nbaBreakLeftAttempt: string;
    nbaBreakLeftPct: string;
    nbaTopKeyMade: string;
    nbaTopKeyAttempt: string;
    nbaTopKeyPct: string;
    nbaBreakRightMade: string;
    nbaBreakRightAttempt: string;
    nbaBreakRightPct: string;
    nbaCornerRightMade: string;
    nbaCornerRightAttempt: string;
    nbaCornerRightPct: string;
}

export interface DraftCombineStatsData {
    season: string;
    playerId: string;
    firstName: string;
    lastName: string;
    playerName: string;
    position: string;
    heightWoShoes: string;
    heightWoShoesFtIn: string;
    heightWShoes: string;
    heightWShoesFtIn: string;
    weight: string;
    wingspan: string;
    wingspanFtIn: string;
    standingReach: string;
    standingReachFtIn: string;
    bodyFatPct: string;
    handLength: string;
    handWidth: string;
    standingVerticalLeap: string;
    maxVerticalLeap: string;
    laneAgilityTime: string;
    modifiedLaneAgilityTime: string;
    threeQuarterSprint: string;
    benchPress: string;
    spotFifteenCornerLeft: string;
    spotFifteenBreakLeft: string;
    spotFifteenTopKey: string;
    spotFifteenBreakRight: string;
    spotFifteenCornerRight: string;
    spotCollegeCornerLeft: string;
    spotCollegeBreakLeft: string;
    spotCollegeTopKey: string;
    spotCollegeBreakRight: string;
    spotCollegeCornerRight: string;
    spotNbaCornerLeft: string;
    spotNbaBreakLeft: string;
    spotNbaTopKey: string;
    spotNbaBreakRight: string;
    spotNbaCornerRight: string;
    offDribFifteenBreakLeft: string;
    offDribFifteenTopKey: string;
    offDribFifteenBreakRight: string;
    offDribCollegeBreakLeft: string;
    offDribCollegeTopKey: string;
    offDribCollegeBreakRight: string;
    onMoveFifteen: string;
    onMoveCollege: string;
}

export interface DraftHistoryData {
    personId: string;
    playerName: string;
    season: string;
    roundNumber: string;
    roundPick: string;
    overallPick: string;
    draftType: string;
    teamId: string;
    teamCity: string;
    teamName: string;
    teamAbbreviation: string;
    organization: string;
    organizationType: string;
}

export interface FantasyWidgetResultData {
    playerId: string;
    playerName: string;
    playerPosition: string;
    teamId: string;
    teamAbbreviation: string;
    gp: string;
    min: string;
    fanDuelPts: string;
    nbaFantasyPts: string;
    pts: string;
    reb: string;
    ast: string;
    blk: string;
    stl: string;
    tov: string;
    fg3m: string;
    fga: string;
    fgPct: string;
    fta: string;
    ftPct: string;
}

export interface DefunctTeamsData {
    leagueId: string;
    teamId: string;
    teamCity: string;
    teamName: string;
    startYear: string;
    endYear: string;
    years: string;
    games: string;
    wins: string;
    losses: string;
    winPct: string;
    poAppearances: string;
    divTitles: string;
    confTitles: string;
    leagueTitles: string;
}

export interface FranchiseHistoryData {
    leagueId: string;
    teamId: string;
    teamCity: string;
    teamName: string;
    startYear: string;
    endYear: string;
    years: string;
    games: string;
    wins: string;
    losses: string;
    winPct: string;
    poAppearances: string;
    divTitles: string;
    confTitles: string;
    leagueTitles: string;
}

export interface FranchiseLeadersData {
    teamId: string;
    pts: string;
    ptsPersonId: string;
    ptsPlayer: string;
    ast: string;
    astPersonId: string;
    astPlayer: string;
    reb: string;
    rebPersonId: string;
    rebPlayer: string;
    blk: string;
    blkPersonId: string;
    blkPlayer: string;
    stl: string;
    stlPersonId: string;
    stlPlayer: string;
}

export interface FranchisePlayersData {
    leagueId: string;
    teamId: string;
    team: string;
    personId: string;
    player: string;
    seasonType: string;
    activeWithTeam: string;
    gp: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    pf: string;
    stl: string;
    tov: string;
    blk: string;
    pts: string;
}

export interface AwayTeamData {
    gameId: string;
    teamId: string;
    teamCity: string;
    teamName: string;
    personId: string;
    playerFirst: string;
    playerLast: string;
    inTimeReal: string;
    outTimeReal: string;
    playerPts: string;
    ptDiff: string;
    usgPct: string;
}

export interface HomeTeamData {
    gameId: string;
    teamId: string;
    teamCity: string;
    teamName: string;
    personId: string;
    playerFirst: string;
    playerLast: string;
    inTimeReal: string;
    outTimeReal: string;
    playerPts: string;
    ptDiff: string;
    usgPct: string;
}

export interface GLeagueAlumBoxScoreSimilarityScoresData {
    person2Id: string;
    person2: string;
    teamId: string;
    similarityScore: string;
}

export interface HomePageLeadersData {
    rank: string;
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    pts: string;
    fgPct: string;
    fg3Pct: string;
    ftPct: string;
    efgPct: string;
    tsPct: string;
    ptsPer48: string;
}

export interface LeagueAverageData {
    pts: string;
    fgPct: string;
    fg3Pct: string;
    ftPct: string;
    efgPct: string;
    tsPct: string;
    ptsPer48: string;
}

export interface LeagueMaxData {
    pts: string;
    fgPct: string;
    fg3Pct: string;
    ftPct: string;
    efgPct: string;
    tsPct: string;
    ptsPer48: string;
}

export interface HomePageStat1Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    pts: string;
}

export interface HomePageStat2Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    reb: string;
}

export interface HomePageStat3Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    ast: string;
}

export interface HomePageStat4Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    stl: string;
}

export interface HomePageStat5Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    fgPct: string;
}

export interface HomePageStat6Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    ftPct: string;
}

export interface HomePageStat7Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    fg3Pct: string;
}

export interface HomePageStat8Data {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    blk: string;
}

export interface HustleStatsAvailableData {
    gameId: string;
    hustleStatus: string;
}

export interface PlayerStatsData {
    gameId: string;
    teamId: string;
    teamAbbreviation: string;
    teamCity: string;
    playerId: string;
    playerName: string;
    startPosition: string;
    comment: string;
    minutes: string;
    pts: string;
    contestedShots: string;
    contestedShots2pt: string;
    contestedShots3pt: string;
    deflections: string;
    chargesDrawn: string;
    screenAssists: string;
    screenAstPts: string;
    offLooseBallsRecovered: string;
    defLooseBallsRecovered: string;
    looseBallsRecovered: string;
    offBoxouts: string;
    defBoxouts: string;
    boxOutPlayerTeamRebs: string;
    boxOutPlayerRebs: string;
    boxOuts: string;
}

export interface TeamStatsData {
    gameId: string;
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    teamCity: string;
    minutes: string;
    pts: string;
    contestedShots: string;
    contestedShots2pt: string;
    contestedShots3pt: string;
    deflections: string;
    chargesDrawn: string;
    screenAssists: string;
    screenAstPts: string;
    offLooseBallsRecovered: string;
    defLooseBallsRecovered: string;
    looseBallsRecovered: string;
    offBoxouts: string;
    defBoxouts: string;
    boxOutPlayerTeamRebs: string;
    boxOutPlayerRebs: string;
    boxOuts: string;
}

export interface FanDuelPlayerData {
    playerId: string;
    playerName: string;
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    jerseyNum: string;
    playerPosition: string;
    location: string;
    fanDuelPts: string;
    nbaFantasyPts: string;
    usgPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
}

export interface AllTimeSeasonHighData {
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    seasonYear: string;
    pts: string;
}

export interface LastSeasonHighData {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    pts: string;
}

export interface LeadersTilesData {
    rank: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    pts: string;
}

export interface LowSeasonHighData {
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    seasonYear: string;
    pts: string;
}

export interface LineupsData {
    groupSet: string;
    groupId: string;
    groupName: string;
    teamId: string;
    teamAbbreviation: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
}

export interface LeagueDashPTShotsData {
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    gp: string;
    g: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface LeagueDashPlayerBioStatsData {
    playerId: string;
    playerName: string;
    teamId: string;
    teamAbbreviation: string;
    age: string;
    playerHeight: string;
    playerHeightInches: string;
    playerWeight: string;
    college: string;
    country: string;
    draftYear: string;
    draftRound: string;
    draftNumber: string;
    gp: string;
    pts: string;
    reb: string;
    ast: string;
    netRating: string;
    orebPct: string;
    drebPct: string;
    usgPct: string;
    tsPct: string;
    astPct: string;
}

export interface LeagueDashPlayerClutchData {
    groupSet: string;
    playerId: string;
    playerName: string;
    teamId: string;
    teamAbbreviation: string;
    age: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface LeagueDashPTShotsData {
    playerId: string;
    playerName: string;
    playerLastTeamId: string;
    playerLastTeamAbbreviation: string;
    age: string;
    gp: string;
    g: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface LeagueDashPlayerStatsData {
    playerId: string;
    playerName: string;
    teamId: string;
    teamAbbreviation: string;
    age: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface LeagueDashPTDefendData {
    closeDefPersonId: string;
    playerName: string;
    playerLastTeamId: string;
    playerLastTeamAbbreviation: string;
    playerPosition: string;
    age: string;
    gp: string;
    g: string;
    freq: string;
    dFgm: string;
    dFga: string;
    dFgPct: string;
    normalFgPct: string;
    pctPlusminus: string;
}

export interface LeagueDashPtStatsData {
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    gp: string;
    w: string;
    l: string;
    min: string;
    distFeet: string;
    distMiles: string;
    distMilesOff: string;
    distMilesDef: string;
    avgSpeed: string;
    avgSpeedOff: string;
    avgSpeedDef: string;
}

export interface LeagueDashPtTeamDefendData {
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    gp: string;
    g: string;
    freq: string;
    dFgm: string;
    dFga: string;
    dFgPct: string;
    normalFgPct: string;
    pctPlusminus: string;
}

export interface LeagueDashTeamClutchData {
    teamId: string;
    teamName: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface LeagueDashPTShotsData {
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    gp: string;
    g: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface LeagueDashTeamStatsData {
    teamId: string;
    teamName: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface LeagueGameFinderResultsData {
    seasonId: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    gameId: string;
    gameDate: string;
    matchup: string;
    wl: string;
    min: string;
    pts: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    plusMinus: string;
}

export interface LeagueGameLogData {
    seasonId: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    gameId: string;
    gameDate: string;
    matchup: string;
    wl: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
    plusMinus: string;
    videoAvailable: string;
}

export interface HustleStatsPlayerData {
    playerId: string;
    playerName: string;
    teamId: string;
    teamAbbreviation: string;
    age: string;
    g: string;
    min: string;
    contestedShots: string;
    contestedShots2pt: string;
    contestedShots3pt: string;
    deflections: string;
    chargesDrawn: string;
    screenAssists: string;
    screenAstPts: string;
    offLooseBallsRecovered: string;
    defLooseBallsRecovered: string;
    looseBallsRecovered: string;
    pctLooseBallsRecoveredOff: string;
    pctLooseBallsRecoveredDef: string;
    offBoxouts: string;
    defBoxouts: string;
    boxOutPlayerTeamRebs: string;
    boxOutPlayerRebs: string;
    boxOuts: string;
    pctBoxOutsOff: string;
    pctBoxOutsDef: string;
    pctBoxOutsTeamReb: string;
    pctBoxOutsReb: string;
}

export interface PlayerChargesDrawnLeadersData {
    playerId: string;
    playerName: string;
    teamId: string;
    teamAbbreviation: string;
    age: string;
    rank: string;
    chargesDrawn: string;
}

export interface PlayerContestedShotsLeadersData {
    playerId: string;
    playerName: string;
    teamId: string;
    teamAbbreviation: string;
    age: string;
    rank: string;
    contestedShots: string;
}

export interface PlayerDeflectionsLeadersData {
    playerId: string;
    playerName: string;
    teamId: string;
    teamAbbreviation: string;
    age: string;
    rank: string;
    deflections: string;
}

export interface PlayerLooseBallLeadersData {
    playerId: string;
    playerName: string;
    teamId: string;
    teamAbbreviation: string;
    age: string;
    rank: string;
    looseBallsRecovered: string;
}

export interface PlayerScreenAssistLeadersData {
    playerId: string;
    playerName: string;
    teamId: string;
    teamAbbreviation: string;
    age: string;
    rank: string;
    screenAssists: string;
}

export interface Table5Data {
    playerId: string;
    playerName: string;
    teamId: string;
    teamAbbreviation: string;
    age: string;
    rank: string;
    boxOuts: string;
}

export interface HustleStatsTeamData {
    teamId: string;
    teamName: string;
    min: string;
    contestedShots: string;
    contestedShots2pt: string;
    contestedShots3pt: string;
    deflections: string;
    chargesDrawn: string;
    screenAssists: string;
    screenAstPts: string;
    offLooseBallsRecovered: string;
    defLooseBallsRecovered: string;
    looseBallsRecovered: string;
    pctLooseBallsRecoveredOff: string;
    pctLooseBallsRecoveredDef: string;
    offBoxouts: string;
    defBoxouts: string;
    boxOuts: string;
    pctBoxOutsOff: string;
    pctBoxOutsDef: string;
}

export interface Table5Data {
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    rank: string;
    boxOuts: string;
}

export interface Table6Data {
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    rank: string;
    boxOuts: string;
}

export interface TeamChargesDrawnLeadersData {
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    rank: string;
    chargesDrawn: string;
}

export interface TeamContestedShotsLeadersData {
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    rank: string;
    contestedShots: string;
}

export interface TeamDeflectionsLeadersData {
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    rank: string;
    deflections: string;
}

export interface TeamLooseBallLeadersData {
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    rank: string;
    looseBallsRecovered: string;
}

export interface TeamScreenAssistLeadersData {
    teamId: string;
    teamName: string;
    teamAbbreviation: string;
    rank: string;
    screenAssists: string;
}

export interface LeagueLeadersData {
    playerId: string;
    rank: string;
    player: string;
    team: string;
    gp: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
    eff: string;
    astTov: string;
    stlTov: string;
}

export interface LeagueLineupVizData {
    groupId: string;
    groupName: string;
    teamId: string;
    teamAbbreviation: string;
    min: string;
    offRating: string;
    defRating: string;
    netRating: string;
    pace: string;
    tsPct: string;
    ftaRate: string;
    tmAstPct: string;
    pctFga2pt: string;
    pctFga3pt: string;
    pctPts2ptMr: string;
    pctPtsFb: string;
    pctPtsFt: string;
    pctPtsPaint: string;
    pctAstFgm: string;
    pctUastFgm: string;
    oppFg3Pct: string;
    oppEfgPct: string;
    oppFtaRate: string;
    oppTovPct: string;
}

export interface PlayersOnCourtLeaguePlayerDetailsData {
    groupSet: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
}

export interface SeasonMatchupsData {
    seasonId: string;
    offPlayerId: string;
    offPlayerName: string;
    defPlayerId: string;
    defPlayerName: string;
    gp: string;
    matchupMin: string;
    partialPoss: string;
    playerPts: string;
    teamPts: string;
    matchupAst: string;
    matchupTov: string;
    matchupBlk: string;
    matchupFgm: string;
    matchupFga: string;
    matchupFgPct: string;
    matchupFg3m: string;
    matchupFg3a: string;
    matchupFg3Pct: string;
    helpBlk: string;
    helpFgm: string;
    helpFga: string;
    helpFgPerc: string;
    matchupFtm: string;
    matchupFta: string;
    sfl: string;
}

export interface StandingsData {
    leagueid: string;
    seasonid: string;
    teamid: string;
    teamcity: string;
    teamname: string;
    conference: string;
    conferencerecord: string;
    playoffrank: string;
    clinchindicator: string;
    division: string;
    divisionrecord: string;
    divisionrank: string;
    wins: string;
    losses: string;
    winpct: string;
    leaguerank: string;
    record: string;
    home: string;
    road: string;
    l10: string;
    last10home: string;
    last10road: string;
    ot: string;
    threeptsorless: string;
    tenptsormore: string;
    longhomestreak: string;
    strlonghomestreak: string;
    longroadstreak: string;
    strlongroadstreak: string;
    longwinstreak: string;
    longlossstreak: string;
    currenthomestreak: string;
    strcurrenthomestreak: string;
    currentroadstreak: string;
    strcurrentroadstreak: string;
    currentstreak: string;
    strcurrentstreak: string;
    conferencegamesback: string;
    divisiongamesback: string;
    clinchedconferencetitle: string;
    clincheddivisiontitle: string;
    clinchedplayoffbirth: string;
    eliminatedconference: string;
    eliminateddivision: string;
    aheadathalf: string;
    behindathalf: string;
    tiedathalf: string;
    aheadatthird: string;
    behindatthird: string;
    tiedatthird: string;
    score100pts: string;
    oppscore100pts: string;
    oppover500: string;
    leadinfgpct: string;
    leadinreb: string;
    fewerturnovers: string;
    pointspg: string;
    opppointspg: string;
    diffpointspg: string;
    vseast: string;
    vsatlantic: string;
    vscentral: string;
    vssoutheast: string;
    vswest: string;
    vsnorthwest: string;
    vspacific: string;
    vssouthwest: string;
    jan: string;
    feb: string;
    mar: string;
    apr: string;
    may: string;
    jun: string;
    jul: string;
    aug: string;
    sep: string;
    oct: string;
    nov: string;
    dec: string;
    preas: string;
    postas: string;
}

export interface StandingsData {
    leagueid: string;
    seasonid: string;
    teamid: string;
    teamcity: string;
    teamname: string;
    teamslug: string;
    conference: string;
    conferencerecord: string;
    playoffrank: string;
    clinchindicator: string;
    division: string;
    divisionrecord: string;
    divisionrank: string;
    wins: string;
    losses: string;
    winpct: string;
    leaguerank: string;
    record: string;
    home: string;
    road: string;
    l10: string;
    last10home: string;
    last10road: string;
    ot: string;
    threeptsorless: string;
    tenptsormore: string;
    longhomestreak: string;
    strlonghomestreak: string;
    longroadstreak: string;
    strlongroadstreak: string;
    longwinstreak: string;
    longlossstreak: string;
    currenthomestreak: string;
    strcurrenthomestreak: string;
    currentroadstreak: string;
    strcurrentroadstreak: string;
    currentstreak: string;
    strcurrentstreak: string;
    conferencegamesback: string;
    divisiongamesback: string;
    clinchedconferencetitle: string;
    clincheddivisiontitle: string;
    clinchedplayoffbirth: string;
    eliminatedconference: string;
    eliminateddivision: string;
    aheadathalf: string;
    behindathalf: string;
    tiedathalf: string;
    aheadatthird: string;
    behindatthird: string;
    tiedatthird: string;
    score100pts: string;
    oppscore100pts: string;
    oppover500: string;
    leadinfgpct: string;
    leadinreb: string;
    fewerturnovers: string;
    pointspg: string;
    opppointspg: string;
    diffpointspg: string;
    vseast: string;
    vsatlantic: string;
    vscentral: string;
    vssoutheast: string;
    vswest: string;
    vsnorthwest: string;
    vspacific: string;
    vssouthwest: string;
    jan: string;
    feb: string;
    mar: string;
    apr: string;
    may: string;
    jun: string;
    jul: string;
    aug: string;
    sep: string;
    oct: string;
    nov: string;
    dec: string;
    returntoplayEastPiFlag: string;
    returntoplayWestPiFlag: string;
    returntoplayAlreadyEliminated: string;
    seedingGame1Outcome: string;
    seedingGame2Outcome: string;
    seedingGame3Outcome: string;
    seedingGame4Outcome: string;
    seedingGame5Outcome: string;
    seedingGame6Outcome: string;
    seedingGame7Outcome: string;
    seedingGame8Outcome: string;
    seedingGame1Id: string;
    seedingGame2Id: string;
    seedingGame3Id: string;
    seedingGame4Id: string;
    seedingGame5Id: string;
    seedingGame6Id: string;
    seedingGame7Id: string;
    seedingGame8Id: string;
    seedingGame1Opponent: string;
    seedingGame2Opponent: string;
    seedingGame3Opponent: string;
    seedingGame4Opponent: string;
    seedingGame5Opponent: string;
    seedingGame6Opponent: string;
    seedingGame7Opponent: string;
    seedingGame8Opponent: string;
    seedingGame1Label: string;
    seedingGame2Label: string;
    seedingGame3Label: string;
    seedingGame4Label: string;
    seedingGame5Label: string;
    seedingGame6Label: string;
    seedingGame7Label: string;
    seedingGame8Label: string;
}

export interface MatchupsRollupData {
    seasonId: string;
    position: string;
    percentOfTime: string;
    defPlayerId: string;
    defPlayerName: string;
    gp: string;
    matchupMin: string;
    partialPoss: string;
    playerPts: string;
    teamPts: string;
    matchupAst: string;
    matchupTov: string;
    matchupBlk: string;
    matchupFgm: string;
    matchupFga: string;
    matchupFgPct: string;
    matchupFg3m: string;
    matchupFg3a: string;
    matchupFg3Pct: string;
    matchupFtm: string;
    matchupFta: string;
    sfl: string;
}

export interface AvailableVideoData {
    videoAvailableFlag: string;
}

export interface PlayByPlayData {
    gameId: string;
    eventnum: string;
    eventmsgtype: string;
    eventmsgactiontype: string;
    period: string;
    wctimestring: string;
    pctimestring: string;
    homedescription: string;
    neutraldescription: string;
    visitordescription: string;
    score: string;
    scoremargin: string;
}

export interface AvailableVideoData {
    videoAvailableFlag: string;
}

export interface PlayByPlayData {
    gameId: string;
    eventnum: string;
    eventmsgtype: string;
    eventmsgactiontype: string;
    period: string;
    wctimestring: string;
    pctimestring: string;
    homedescription: string;
    neutraldescription: string;
    visitordescription: string;
    score: string;
    scoremargin: string;
    person1type: string;
    player1Id: string;
    player1Name: string;
    player1TeamId: string;
    player1TeamCity: string;
    player1TeamNickname: string;
    player1TeamAbbreviation: string;
    person2type: string;
    player2Id: string;
    player2Name: string;
    player2TeamId: string;
    player2TeamCity: string;
    player2TeamNickname: string;
    player2TeamAbbreviation: string;
    person3type: string;
    player3Id: string;
    player3Name: string;
    player3TeamId: string;
    player3TeamCity: string;
    player3TeamNickname: string;
    player3TeamAbbreviation: string;
    videoAvailableFlag: string;
}

export interface PlayerAwardsData {
    personId: string;
    firstName: string;
    lastName: string;
    team: string;
    description: string;
    allNbaTeamNumber: string;
    season: string;
    month: string;
    week: string;
    conference: string;
    type: string;
    subtype1: string;
    subtype2: string;
    subtype3: string;
}

export interface PlayerCareerByCollegeData {
    playerId: string;
    playerName: string;
    college: string;
    gp: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface EastData {
    region: string;
    seed: string;
    college: string;
    players: string;
    gp: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface MidwestData {
    region: string;
    seed: string;
    college: string;
    players: string;
    gp: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface SouthData {
    region: string;
    seed: string;
    college: string;
    players: string;
    gp: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface WestData {
    region: string;
    seed: string;
    college: string;
    players: string;
    gp: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface CareerTotalsAllStarSeasonData {
    playerId: string;
    leagueId: string;
    teamId: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface CareerTotalsCollegeSeasonData {
    playerId: string;
    leagueId: string;
    organizationId: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface CareerTotalsPostSeasonData {
    playerId: string;
    leagueId: string;
    teamId: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface CareerTotalsRegularSeasonData {
    playerId: string;
    leagueId: string;
    teamId: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface SeasonRankingsPostSeasonData {
    playerId: string;
    seasonId: string;
    leagueId: string;
    teamId: string;
    teamAbbreviation: string;
    playerAge: string;
    gp: string;
    gs: string;
    rankMin: string;
    rankFgm: string;
    rankFga: string;
    rankFgPct: string;
    rankFg3m: string;
    rankFg3a: string;
    rankFg3Pct: string;
    rankFtm: string;
    rankFta: string;
    rankFtPct: string;
    rankOreb: string;
    rankDreb: string;
    rankReb: string;
    rankAst: string;
    rankStl: string;
    rankBlk: string;
    rankTov: string;
    rankPts: string;
    rankEff: string;
}

export interface SeasonRankingsRegularSeasonData {
    playerId: string;
    seasonId: string;
    leagueId: string;
    teamId: string;
    teamAbbreviation: string;
    playerAge: string;
    gp: string;
    gs: string;
    rankMin: string;
    rankFgm: string;
    rankFga: string;
    rankFgPct: string;
    rankFg3m: string;
    rankFg3a: string;
    rankFg3Pct: string;
    rankFtm: string;
    rankFta: string;
    rankFtPct: string;
    rankOreb: string;
    rankDreb: string;
    rankReb: string;
    rankAst: string;
    rankStl: string;
    rankBlk: string;
    rankTov: string;
    rankPts: string;
    rankEff: string;
}

export interface SeasonTotalsAllStarSeasonData {
    playerId: string;
    seasonId: string;
    leagueId: string;
    teamId: string;
    teamAbbreviation: string;
    playerAge: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface SeasonTotalsCollegeSeasonData {
    playerId: string;
    seasonId: string;
    leagueId: string;
    organizationId: string;
    schoolName: string;
    playerAge: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface SeasonTotalsPostSeasonData {
    playerId: string;
    seasonId: string;
    leagueId: string;
    teamId: string;
    teamAbbreviation: string;
    playerAge: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface SeasonTotalsRegularSeasonData {
    playerId: string;
    seasonId: string;
    leagueId: string;
    teamId: string;
    teamAbbreviation: string;
    playerAge: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface IndividualData {
    groupSet: string;
    description: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
}

export interface OverallCompareData {
    groupSet: string;
    description: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
}

export interface Last10Sec3Point2PlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface Last10Sec3PointPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface Last1Min5PointPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface Last1MinPlusMinus5PointPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface Last30Sec3Point2PlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface Last30Sec3PointPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface Last3Min5PointPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface Last3MinPlusMinus5PointPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface Last5Min5PointPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface Last5MinPlusMinus5PointPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface ByActualMarginPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface ByHalfPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface ByPeriodPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface ByScoreMarginPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface DaysRestPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface LocationPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface MonthPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface PrePostAllStarPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface StartingPositionData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface WinsLossesPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface GameNumberPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface Last10PlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface Last15PlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface Last20PlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface Last5PlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface ConferencePlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface DivisionPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface OpponentPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface AssistedByData {
    groupSet: string;
    playerId: string;
    playerName: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface AssitedShotPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface Shot5FTPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface Shot8FTPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface ShotAreaPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface ShotTypePlayerDashboardData {
    groupSet: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface ShotTypeSummaryPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    cfid: string;
    cfparams: string;
}

export interface OverallPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface PointsScoredPlayerDashboardData {
    groupSet: string;
    groupValueOrder: string;
    groupValue: string;
    groupValue2: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface PontsAgainstPlayerDashboardData {
    groupSet: string;
    groupValueOrder: string;
    groupValue: string;
    groupValue2: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface ScoreDifferentialPlayerDashboardData {
    groupSet: string;
    groupValueOrder: string;
    groupValue: string;
    groupValue2: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface ByYearPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    teamId: string;
    teamAbbreviation: string;
    maxGameDate: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallPlayerDashboardData {
    groupSet: string;
    groupValue: string;
    teamId: string;
    teamAbbreviation: string;
    maxGameDate: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface PassesMadeData {
    playerId: string;
    playerNameLastFirst: string;
    teamName: string;
    teamId: string;
    teamAbbreviation: string;
    passType: string;
    g: string;
    passTo: string;
    passTeammatePlayerId: string;
    frequency: string;
    pass: string;
    ast: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface PassesReceivedData {
    playerId: string;
    playerNameLastFirst: string;
    teamName: string;
    teamId: string;
    teamAbbreviation: string;
    passType: string;
    g: string;
    passFrom: string;
    passTeammatePlayerId: string;
    frequency: string;
    pass: string;
    ast: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface NumContestedReboundingData {
    playerId: string;
    playerNameLastFirst: string;
    sortOrder: string;
    g: string;
    rebNumContestingRange: string;
    rebFrequency: string;
    oreb: string;
    dreb: string;
    reb: string;
    cOreb: string;
    cDreb: string;
    cReb: string;
    cRebPct: string;
    ucOreb: string;
    ucDreb: string;
    ucReb: string;
    ucRebPct: string;
}

export interface OverallReboundingData {
    playerId: string;
    playerNameLastFirst: string;
    g: string;
    overall: string;
    rebFrequency: string;
    oreb: string;
    dreb: string;
    reb: string;
    cOreb: string;
    cDreb: string;
    cReb: string;
    cRebPct: string;
    ucOreb: string;
    ucDreb: string;
    ucReb: string;
    ucRebPct: string;
}

export interface RebDistanceReboundingData {
    playerId: string;
    playerNameLastFirst: string;
    sortOrder: string;
    g: string;
    rebDistRange: string;
    rebFrequency: string;
    oreb: string;
    dreb: string;
    reb: string;
    cOreb: string;
    cDreb: string;
    cReb: string;
    cRebPct: string;
    ucOreb: string;
    ucDreb: string;
    ucReb: string;
    ucRebPct: string;
}

export interface ShotDistanceReboundingData {
    playerId: string;
    playerNameLastFirst: string;
    sortOrder: string;
    g: string;
    shotDistRange: string;
    rebFrequency: string;
    oreb: string;
    dreb: string;
    reb: string;
    cOreb: string;
    cDreb: string;
    cReb: string;
    cRebPct: string;
    ucOreb: string;
    ucDreb: string;
    ucReb: string;
    ucRebPct: string;
}

export interface ShotTypeReboundingData {
    playerId: string;
    playerNameLastFirst: string;
    sortOrder: string;
    g: string;
    shotTypeRange: string;
    rebFrequency: string;
    oreb: string;
    dreb: string;
    reb: string;
    cOreb: string;
    cDreb: string;
    cReb: string;
    cRebPct: string;
    ucOreb: string;
    ucDreb: string;
    ucReb: string;
    ucRebPct: string;
}

export interface DefendingShotsData {
    closeDefPersonId: string;
    gp: string;
    g: string;
    defenseCategory: string;
    freq: string;
    dFgm: string;
    dFga: string;
    dFgPct: string;
    normalFgPct: string;
    pctPlusminus: string;
}

export interface ClosestDefender10ftPlusShootingData {
    playerId: string;
    playerNameLastFirst: string;
    sortOrder: string;
    gp: string;
    g: string;
    closeDefDistRange: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface ClosestDefenderShootingData {
    playerId: string;
    playerNameLastFirst: string;
    sortOrder: string;
    gp: string;
    g: string;
    closeDefDistRange: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface DribbleShootingData {
    playerId: string;
    playerNameLastFirst: string;
    sortOrder: string;
    gp: string;
    g: string;
    dribbleRange: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface GeneralShootingData {
    playerId: string;
    playerNameLastFirst: string;
    sortOrder: string;
    gp: string;
    g: string;
    shotType: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface OverallData {
    playerId: string;
    playerNameLastFirst: string;
    sortOrder: string;
    gp: string;
    g: string;
    shotType: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface ShotClockShootingData {
    playerId: string;
    playerNameLastFirst: string;
    sortOrder: string;
    gp: string;
    g: string;
    shotClockRange: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface TouchTimeShootingData {
    playerId: string;
    playerNameLastFirst: string;
    sortOrder: string;
    gp: string;
    g: string;
    touchTimeRange: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface PlayerEstimatedMetricsData {
    playerId: string;
    playerName: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    eOffRating: string;
    eDefRating: string;
    eNetRating: string;
    eAstRatio: string;
    eOrebPct: string;
    eDrebPct: string;
    eRebPct: string;
    eTovPct: string;
    eUsgPct: string;
    ePace: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    eOffRatingRank: string;
    eDefRatingRank: string;
    eNetRatingRank: string;
    eAstRatioRank: string;
    eOrebPctRank: string;
    eDrebPctRank: string;
    eRebPctRank: string;
    eTovPctRank: string;
    eUsgPctRank: string;
    ePaceRank: string;
}

export interface DaysRestModifiedData {
    groupSet: string;
    groupValue: string;
    seasonYear: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    dd2: string;
    td3: string;
    fanDuelPts: string;
    nbaFantasyPts: string;
}

export interface LastNGamesData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    dd2: string;
    td3: string;
    fanDuelPts: string;
    nbaFantasyPts: string;
}

export interface LocationData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    dd2: string;
    td3: string;
    fanDuelPts: string;
    nbaFantasyPts: string;
}

export interface OpponentData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    dd2: string;
    td3: string;
    fanDuelPts: string;
    nbaFantasyPts: string;
}

export interface OverallData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    dd2: string;
    td3: string;
    fanDuelPts: string;
    nbaFantasyPts: string;
}

export interface LastFiveGamesAvgData {
    playerId: string;
    playerName: string;
    teamId: string;
    teamAbbreviation: string;
    fanDuelPts: string;
    nbaFantasyPts: string;
    pts: string;
    reb: string;
    ast: string;
    fg3m: string;
    ftPct: string;
    stl: string;
    blk: string;
    tov: string;
    fgPct: string;
}

export interface SeasonAvgData {
    playerId: string;
    playerName: string;
    teamId: string;
    teamAbbreviation: string;
    fanDuelPts: string;
    nbaFantasyPts: string;
    pts: string;
    reb: string;
    ast: string;
    fg3m: string;
    ftPct: string;
    stl: string;
    blk: string;
    tov: string;
    fgPct: string;
}

export interface PlayerGameLogData {
    seasonId: string;
    playerId: string;
    gameId: string;
    gameDate: string;
    matchup: string;
    wl: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
    plusMinus: string;
    videoAvailable: string;
}

export interface PlayerGameLogsData {
    seasonYear: string;
    playerId: string;
    playerName: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    gameId: string;
    gameDate: string;
    matchup: string;
    wl: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
}

export interface PlayerGameStreakFinderResultsData {
    playerNameLastFirst: string;
    playerId: string;
    gamestreak: string;
    startdate: string;
    enddate: string;
    activestreak: string;
    numseasons: string;
    lastseason: string;
    firstseason: string;
}

export interface NextNGamesData {
    gameId: string;
    gameDate: string;
    homeTeamId: string;
    visitorTeamId: string;
    homeTeamName: string;
    visitorTeamName: string;
    homeTeamAbbreviation: string;
    visitorTeamAbbreviation: string;
    homeTeamNickname: string;
    visitorTeamNickname: string;
    gameTime: string;
    homeWl: string;
    visitorWl: string;
}

export interface CareerHighsData {
    playerId: string;
    gameDate: string;
    vsTeamId: string;
    vsTeamCity: string;
    vsTeamName: string;
    vsTeamAbbreviation: string;
    stat: string;
    statsValue: string;
    statOrder: string;
    dateEst: string;
}

export interface CareerTotalsAllStarSeasonData {
    playerId: string;
    leagueId: string;
    teamId: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface CareerTotalsCollegeSeasonData {
    playerId: string;
    leagueId: string;
    organizationId: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface CareerTotalsPostSeasonData {
    playerId: string;
    leagueId: string;
    teamId: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface CareerTotalsPreseasonData {
    playerId: string;
    leagueId: string;
    teamId: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface CareerTotalsRegularSeasonData {
    playerId: string;
    leagueId: string;
    teamId: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface NextGameData {
    gameId: string;
    gameDate: string;
    gameTime: string;
    location: string;
    playerTeamId: string;
    playerTeamCity: string;
    playerTeamNickname: string;
    playerTeamAbbreviation: string;
    vsTeamId: string;
    vsTeamCity: string;
    vsTeamNickname: string;
    vsTeamAbbreviation: string;
}

export interface SeasonHighsData {
    playerId: string;
    gameDate: string;
    vsTeamId: string;
    vsTeamCity: string;
    vsTeamName: string;
    vsTeamAbbreviation: string;
    stat: string;
    statsValue: string;
    statOrder: string;
    dateEst: string;
}

export interface SeasonRankingsPostSeasonData {
    playerId: string;
    seasonId: string;
    leagueId: string;
    teamId: string;
    teamAbbreviation: string;
    playerAge: string;
    gp: string;
    gs: string;
    rankMin: string;
    rankFgm: string;
    rankFga: string;
    rankFgPct: string;
    rankFg3m: string;
    rankFg3a: string;
    rankFg3Pct: string;
    rankFtm: string;
    rankFta: string;
    rankFtPct: string;
    rankOreb: string;
    rankDreb: string;
    rankReb: string;
    rankAst: string;
    rankStl: string;
    rankBlk: string;
    rankTov: string;
    rankPts: string;
    rankEff: string;
}

export interface SeasonRankingsRegularSeasonData {
    playerId: string;
    seasonId: string;
    leagueId: string;
    teamId: string;
    teamAbbreviation: string;
    playerAge: string;
    gp: string;
    gs: string;
    rankMin: string;
    rankFgm: string;
    rankFga: string;
    rankFgPct: string;
    rankFg3m: string;
    rankFg3a: string;
    rankFg3Pct: string;
    rankFtm: string;
    rankFta: string;
    rankFtPct: string;
    rankOreb: string;
    rankDreb: string;
    rankReb: string;
    rankAst: string;
    rankStl: string;
    rankBlk: string;
    rankTov: string;
    rankPts: string;
    rankEff: string;
}

export interface SeasonTotalsAllStarSeasonData {
    playerId: string;
    seasonId: string;
    leagueId: string;
    teamId: string;
    teamAbbreviation: string;
    playerAge: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface SeasonTotalsCollegeSeasonData {
    playerId: string;
    seasonId: string;
    leagueId: string;
    organizationId: string;
    schoolName: string;
    playerAge: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface SeasonTotalsPostSeasonData {
    playerId: string;
    seasonId: string;
    leagueId: string;
    teamId: string;
    teamAbbreviation: string;
    playerAge: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface SeasonTotalsPreseasonData {
    playerId: string;
    seasonId: string;
    leagueId: string;
    teamId: string;
    teamAbbreviation: string;
    playerAge: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface SeasonTotalsRegularSeasonData {
    playerId: string;
    seasonId: string;
    leagueId: string;
    teamId: string;
    teamAbbreviation: string;
    playerAge: string;
    gp: string;
    gs: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface OnOffCourtData {
    groupSet: string;
    playerId: string;
    playerName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    cfid: string;
    cfparams: string;
}

export interface OverallData {
    groupSet: string;
    groupValue: string;
    playerId: string;
    playerName: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    cfid: string;
    cfparams: string;
}

export interface PlayerInfoData {
    personId: string;
    firstName: string;
    lastName: string;
    displayFirstLast: string;
    displayLastCommaFirst: string;
    displayFiLast: string;
    birthdate: string;
    school: string;
    country: string;
    lastAffiliation: string;
}

export interface ShotAreaOffCourtData {
    groupSet: string;
    playerId: string;
    playerName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    cfid: string;
    cfparams: string;
}

export interface ShotAreaOnCourtData {
    groupSet: string;
    playerId: string;
    playerName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    cfid: string;
    cfparams: string;
}

export interface ShotAreaOverallData {
    groupSet: string;
    groupValue: string;
    playerId: string;
    playerName: string;
    fgm: string;
    fga: string;
    fgPct: string;
    cfid: string;
    cfparams: string;
}

export interface ShotDistanceOffCourtData {
    groupSet: string;
    playerId: string;
    playerName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    cfid: string;
    cfparams: string;
}

export interface ShotDistanceOnCourtData {
    groupSet: string;
    playerId: string;
    playerName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    cfid: string;
    cfparams: string;
}

export interface ShotDistanceOverallData {
    groupSet: string;
    groupValue: string;
    playerId: string;
    playerName: string;
    fgm: string;
    fga: string;
    fgPct: string;
    cfid: string;
    cfparams: string;
}

export interface VsPlayerInfoData {
    personId: string;
    firstName: string;
    lastName: string;
    displayFirstLast: string;
    displayLastCommaFirst: string;
    displayFiLast: string;
    birthdate: string;
    school: string;
    country: string;
    lastAffiliation: string;
}

export interface EastConfPlayoffPictureData {
    conference: string;
    highSeedRank: string;
    highSeedTeam: string;
    highSeedTeamId: string;
    lowSeedRank: string;
    lowSeedTeam: string;
    lowSeedTeamId: string;
    highSeedSeriesW: string;
    highSeedSeriesL: string;
    highSeedSeriesRemainingG: string;
    highSeedSeriesRemainingHomeG: string;
    highSeedSeriesRemainingAwayG: string;
}

export interface EastConfRemainingGamesData {
    team: string;
    teamId: string;
    remainingG: string;
    remainingHomeG: string;
    remainingAwayG: string;
}

export interface EastConfStandingsData {
    conference: string;
    rank: string;
    team: string;
    teamSlug: string;
    teamId: string;
    wins: string;
    losses: string;
    pct: string;
    div: string;
    conf: string;
    home: string;
    away: string;
    gb: string;
    grOver500: string;
    grOver500Home: string;
    grOver500Away: string;
    grUnder500: string;
    grUnder500Home: string;
    grUnder500Away: string;
    rankingCriteria: string;
    clinchedPlayoffs: string;
    clinchedConference: string;
    clinchedDivision: string;
    clinchedPlayIn: string;
    eliminatedPlayoffs: string;
    sosaRemaining: string;
    returntoplayEastPiFlag: string;
    returntoplayAlreadyEliminated: string;
    seedingGame1Outcome: string;
    seedingGame2Outcome: string;
    seedingGame3Outcome: string;
    seedingGame4Outcome: string;
    seedingGame5Outcome: string;
    seedingGame6Outcome: string;
    seedingGame7Outcome: string;
    seedingGame8Outcome: string;
    seedingGame1Id: string;
    seedingGame2Id: string;
    seedingGame3Id: string;
    seedingGame4Id: string;
    seedingGame5Id: string;
    seedingGame6Id: string;
    seedingGame7Id: string;
    seedingGame8Id: string;
    seedingGame1Opponent: string;
    seedingGame2Opponent: string;
    seedingGame3Opponent: string;
    seedingGame4Opponent: string;
    seedingGame5Opponent: string;
    seedingGame6Opponent: string;
    seedingGame7Opponent: string;
    seedingGame8Opponent: string;
    seedingGame1Label: string;
    seedingGame2Label: string;
    seedingGame3Label: string;
    seedingGame4Label: string;
    seedingGame5Label: string;
    seedingGame6Label: string;
    seedingGame7Label: string;
    seedingGame8Label: string;
}

export interface WestConfPlayoffPictureData {
    conference: string;
    highSeedRank: string;
    highSeedTeam: string;
    highSeedTeamId: string;
    lowSeedRank: string;
    lowSeedTeam: string;
    lowSeedTeamId: string;
    highSeedSeriesW: string;
    highSeedSeriesL: string;
    highSeedSeriesRemainingG: string;
    highSeedSeriesRemainingHomeG: string;
    highSeedSeriesRemainingAwayG: string;
}

export interface WestConfRemainingGamesData {
    team: string;
    teamId: string;
    remainingG: string;
    remainingHomeG: string;
    remainingAwayG: string;
}

export interface WestConfStandingsData {
    conference: string;
    rank: string;
    team: string;
    teamSlug: string;
    teamId: string;
    wins: string;
    losses: string;
    pct: string;
    div: string;
    conf: string;
    home: string;
    away: string;
    gb: string;
    grOver500: string;
    grOver500Home: string;
    grOver500Away: string;
    grUnder500: string;
    grUnder500Home: string;
    grUnder500Away: string;
    rankingCriteria: string;
    clinchedPlayoffs: string;
    clinchedConference: string;
    clinchedDivision: string;
    clinchedPlayIn: string;
    eliminatedPlayoffs: string;
    sosaRemaining: string;
    returntoplayWestPiFlag: string;
    returntoplayAlreadyEliminated: string;
    seedingGame1Outcome: string;
    seedingGame2Outcome: string;
    seedingGame3Outcome: string;
    seedingGame4Outcome: string;
    seedingGame5Outcome: string;
    seedingGame6Outcome: string;
    seedingGame7Outcome: string;
    seedingGame8Outcome: string;
    seedingGame1Id: string;
    seedingGame2Id: string;
    seedingGame3Id: string;
    seedingGame4Id: string;
    seedingGame5Id: string;
    seedingGame6Id: string;
    seedingGame7Id: string;
    seedingGame8Id: string;
    seedingGame1Opponent: string;
    seedingGame2Opponent: string;
    seedingGame3Opponent: string;
    seedingGame4Opponent: string;
    seedingGame5Opponent: string;
    seedingGame6Opponent: string;
    seedingGame7Opponent: string;
    seedingGame8Opponent: string;
    seedingGame1Label: string;
    seedingGame2Label: string;
    seedingGame3Label: string;
    seedingGame4Label: string;
    seedingGame5Label: string;
    seedingGame6Label: string;
    seedingGame7Label: string;
    seedingGame8Label: string;
}

export interface AvailableData {
    gameId: string;
    ptAvailable: string;
}

export interface EastConfStandingsByDayData {
    teamId: string;
    leagueId: string;
    seasonId: string;
    standingsdate: string;
    conference: string;
    team: string;
    g: string;
    w: string;
    l: string;
    wPct: string;
    homeRecord: string;
    roadRecord: string;
    returntoplay: string;
}

export interface GameHeaderData {
    gameDateEst: string;
    gameSequence: string;
    gameId: string;
    gameStatusId: string;
    gameStatusText: string;
    gamecode: string;
    homeTeamId: string;
    visitorTeamId: string;
    season: string;
    livePeriod: string;
    livePcTime: string;
    natlTvBroadcasterAbbreviation: string;
    livePeriodTimeBcast: string;
    whStatus: string;
}

export interface LastMeetingData {
    gameId: string;
    lastGameId: string;
    lastGameDateEst: string;
    lastGameHomeTeamId: string;
    lastGameHomeTeamCity: string;
    lastGameHomeTeamName: string;
    lastGameHomeTeamAbbreviation: string;
    lastGameHomeTeamPoints: string;
    lastGameVisitorTeamId: string;
    lastGameVisitorTeamCity: string;
    lastGameVisitorTeamName: string;
    lastGameVisitorTeamCity1: string;
    lastGameVisitorTeamPoints: string;
}

export interface LineScoreData {
    gameDateEst: string;
    gameSequence: string;
    gameId: string;
    teamId: string;
    teamAbbreviation: string;
    teamCityName: string;
    teamWinsLosses: string;
    ptsQtr1: string;
    ptsQtr2: string;
    ptsQtr3: string;
    ptsQtr4: string;
    ptsOt1: string;
    ptsOt2: string;
    ptsOt3: string;
    ptsOt4: string;
    ptsOt5: string;
    ptsOt6: string;
    ptsOt7: string;
    ptsOt8: string;
    ptsOt9: string;
    ptsOt10: string;
    pts: string;
    fgPct: string;
    ftPct: string;
    fg3Pct: string;
    ast: string;
    reb: string;
    tov: string;
}

export interface SeriesStandingsData {
    gameId: string;
    homeTeamId: string;
    visitorTeamId: string;
    gameDateEst: string;
    homeTeamWins: string;
    homeTeamLosses: string;
    seriesLeader: string;
}

export interface WestConfStandingsByDayData {
    teamId: string;
    leagueId: string;
    seasonId: string;
    standingsdate: string;
    conference: string;
    team: string;
    g: string;
    w: string;
    l: string;
    wPct: string;
    homeRecord: string;
    roadRecord: string;
}

export interface AvailableData {
    gameId: string;
    ptAvailable: string;
}

export interface EastConfStandingsByDayData {
    teamId: string;
    leagueId: string;
    seasonId: string;
    standingsdate: string;
    conference: string;
    team: string;
    g: string;
    w: string;
    l: string;
    wPct: string;
    homeRecord: string;
    roadRecord: string;
    returntoplay: string;
}

export interface GameHeaderData {
    gameDateEst: string;
    gameSequence: string;
    gameId: string;
    gameStatusId: string;
    gameStatusText: string;
    gamecode: string;
    homeTeamId: string;
    visitorTeamId: string;
    season: string;
    livePeriod: string;
    livePcTime: string;
    natlTvBroadcasterAbbreviation: string;
    homeTvBroadcasterAbbreviation: string;
    awayTvBroadcasterAbbreviation: string;
    livePeriodTimeBcast: string;
    arenaName: string;
    whStatus: string;
}

export interface LastMeetingData {
    gameId: string;
    lastGameId: string;
    lastGameDateEst: string;
    lastGameHomeTeamId: string;
    lastGameHomeTeamCity: string;
    lastGameHomeTeamName: string;
    lastGameHomeTeamAbbreviation: string;
    lastGameHomeTeamPoints: string;
    lastGameVisitorTeamId: string;
    lastGameVisitorTeamCity: string;
    lastGameVisitorTeamName: string;
    lastGameVisitorTeamCity1: string;
    lastGameVisitorTeamPoints: string;
}

export interface LineScoreData {
    gameDateEst: string;
    gameSequence: string;
    gameId: string;
    teamId: string;
    teamAbbreviation: string;
    teamCityName: string;
    teamName: string;
    teamWinsLosses: string;
    ptsQtr1: string;
    ptsQtr2: string;
    ptsQtr3: string;
    ptsQtr4: string;
    ptsOt1: string;
    ptsOt2: string;
    ptsOt3: string;
    ptsOt4: string;
    ptsOt5: string;
    ptsOt6: string;
    ptsOt7: string;
    ptsOt8: string;
    ptsOt9: string;
    ptsOt10: string;
    pts: string;
    fgPct: string;
    ftPct: string;
    fg3Pct: string;
    ast: string;
    reb: string;
    tov: string;
}

export interface SeriesStandingsData {
    gameId: string;
    homeTeamId: string;
    visitorTeamId: string;
    gameDateEst: string;
    homeTeamWins: string;
    homeTeamLosses: string;
    seriesLeader: string;
}

export interface TeamLeadersData {
    gameId: string;
    teamId: string;
    teamCity: string;
    teamNickname: string;
    teamAbbreviation: string;
    ptsPlayerId: string;
    ptsPlayerName: string;
    pts: string;
    rebPlayerId: string;
    rebPlayerName: string;
    reb: string;
    astPlayerId: string;
    astPlayerName: string;
    ast: string;
}

export interface TicketLinksData {
    gameId: string;
    leagTix: string;
}

export interface WestConfStandingsByDayData {
    teamId: string;
    leagueId: string;
    seasonId: string;
    standingsdate: string;
    conference: string;
    team: string;
    g: string;
    w: string;
    l: string;
    wPct: string;
    homeRecord: string;
    roadRecord: string;
}

export interface LeagueAveragesData {
    gridType: string;
    shotZoneBasic: string;
    shotZoneArea: string;
    shotZoneRange: string;
    fga: string;
    fgm: string;
    fgPct: string;
}

export interface Shot_Chart_DetailData {
    gridType: string;
    gameId: string;
    gameEventId: string;
    playerId: string;
    playerName: string;
    teamId: string;
    teamName: string;
    period: string;
    minutesRemaining: string;
    secondsRemaining: string;
    eventType: string;
    actionType: string;
    shotType: string;
    shotZoneBasic: string;
    shotZoneArea: string;
    shotZoneRange: string;
    shotDistance: string;
    locX: string;
    locY: string;
    shotAttemptedFlag: string;
    shotMadeFlag: string;
    gameDate: string;
    htm: string;
    vtm: string;
}

export interface League_WideData {
    gridType: string;
    shotZoneBasic: string;
    shotZoneArea: string;
    shotZoneRange: string;
    fga: string;
    fgm: string;
    fgPct: string;
}

export interface ShotChartLineupDetailData {
    gridType: string;
    gameId: string;
    gameEventId: string;
    groupId: string;
    groupName: string;
    playerId: string;
    playerName: string;
    teamId: string;
    teamName: string;
    period: string;
    minutesRemaining: string;
    secondsRemaining: string;
    eventType: string;
    actionType: string;
    shotType: string;
    shotZoneBasic: string;
    shotZoneArea: string;
    shotZoneRange: string;
    shotDistance: string;
    locX: string;
    locY: string;
    shotAttemptedFlag: string;
    shotMadeFlag: string;
    gameDate: string;
    htm: string;
    vtm: string;
}

export interface ShotChartLineupLeagueAverageData {
    gridType: string;
    shotZoneBasic: string;
    shotZoneArea: string;
    shotZoneRange: string;
    fga: string;
    fgm: string;
    fgPct: string;
}

export interface SynergyPlayTypeData {
    seasonId: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    playType: string;
    typeGrouping: string;
    percentile: string;
    gp: string;
    possPct: string;
    ppp: string;
    fgPct: string;
    ftPossPct: string;
    tovPossPct: string;
    sfPossPct: string;
    plusonePossPct: string;
    scorePossPct: string;
    efgPct: string;
    poss: string;
    pts: string;
    fgm: string;
    fga: string;
    fgmx: string;
}

export interface PlayersVsPlayersData {
    groupSet: string;
    titleDescription: string;
    description: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
}

export interface TeamPlayersVsPlayersOffData {
    groupSet: string;
    titleDescription: string;
    playerId: string;
    playerName: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
}

export interface TeamPlayersVsPlayersOnData {
    groupSet: string;
    titleDescription: string;
    playerId: string;
    playerName: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
}

export interface TeamVsPlayersData {
    groupSet: string;
    titleDescription: string;
    description: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
}

export interface TeamVsPlayersOffData {
    groupSet: string;
    titleDescription: string;
    description: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
}

export interface Last10Sec3Point2TeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface Last10Sec3PointTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface Last1Min5PointTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface Last1MinPlusMinus5PointTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface Last30Sec3Point2TeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface Last30Sec3PointTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface Last3Min5PointTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface Last3MinPlusMinus5PointTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface Last5Min5PointTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface Last5MinPlusMinus5PointTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface ByActualMarginTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface ByHalfTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface ByPeriodTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface ByScoreMarginTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface DaysRestTeamDashboardData {
    groupSet: string;
    groupValue: string;
    teamDaysRestRange: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface LocationTeamDashboardData {
    groupSet: string;
    groupValue: string;
    teamGameLocation: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface MonthTeamDashboardData {
    groupSet: string;
    groupValue: string;
    seasonMonthName: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallTeamDashboardData {
    groupSet: string;
    groupValue: string;
    seasonYear: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface PrePostAllStarTeamDashboardData {
    groupSet: string;
    groupValue: string;
    seasonSegment: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface WinsLossesTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gameResult: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface GameNumberTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface Last10TeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface Last15TeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface Last20TeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface Last5TeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface ConferenceTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface DivisionTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface OpponentTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface AssistedByData {
    groupSet: string;
    playerId: string;
    playerName: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface AssitedShotTeamDashboardData {
    groupSet: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallTeamDashboardData {
    groupSet: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface Shot5FTTeamDashboardData {
    groupSet: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface Shot8FTTeamDashboardData {
    groupSet: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface ShotAreaTeamDashboardData {
    groupSet: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface ShotTypeTeamDashboardData {
    groupSet: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    efgPct: string;
    blka: string;
    pctAst2pm: string;
    pctUast2pm: string;
    pctAst3pm: string;
    pctUast3pm: string;
    pctAstFgm: string;
    pctUastFgm: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    efgPctRank: string;
    blkaRank: string;
    pctAst2pmRank: string;
    pctUast2pmRank: string;
    pctAst3pmRank: string;
    pctUast3pmRank: string;
    pctAstFgmRank: string;
    pctUastFgmRank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface PointsScoredTeamDashboardData {
    groupSet: string;
    groupValueOrder: string;
    groupValue: string;
    groupValue2: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface PontsAgainstTeamDashboardData {
    groupSet: string;
    groupValueOrder: string;
    groupValue: string;
    groupValue2: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface ScoreDifferentialTeamDashboardData {
    groupSet: string;
    groupValueOrder: string;
    groupValue: string;
    groupValue2: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface ByYearTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallTeamDashboardData {
    groupSet: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface LineupsData {
    groupSet: string;
    groupId: string;
    groupName: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
}

export interface OverallData {
    groupSet: string;
    groupValue: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
}

export interface PassesMadeData {
    teamId: string;
    teamName: string;
    passType: string;
    g: string;
    passFrom: string;
    passTeammatePlayerId: string;
    frequency: string;
    pass: string;
    ast: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface PassesReceivedData {
    teamId: string;
    teamName: string;
    passType: string;
    g: string;
    passTo: string;
    passTeammatePlayerId: string;
    frequency: string;
    pass: string;
    ast: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface NumContestedReboundingData {
    teamId: string;
    teamName: string;
    sortOrder: string;
    g: string;
    rebNumContestingRange: string;
    rebFrequency: string;
    oreb: string;
    dreb: string;
    reb: string;
    cOreb: string;
    cDreb: string;
    cReb: string;
    cRebPct: string;
    ucOreb: string;
    ucDreb: string;
    ucReb: string;
    ucRebPct: string;
}

export interface OverallReboundingData {
    teamId: string;
    teamName: string;
    g: string;
    overall: string;
    rebFrequency: string;
    oreb: string;
    dreb: string;
    reb: string;
    cOreb: string;
    cDreb: string;
    cReb: string;
    cRebPct: string;
    ucOreb: string;
    ucDreb: string;
    ucReb: string;
    ucRebPct: string;
}

export interface RebDistanceReboundingData {
    teamId: string;
    teamName: string;
    sortOrder: string;
    g: string;
    rebDistRange: string;
    rebFrequency: string;
    oreb: string;
    dreb: string;
    reb: string;
    cOreb: string;
    cDreb: string;
    cReb: string;
    cRebPct: string;
    ucOreb: string;
    ucDreb: string;
    ucReb: string;
    ucRebPct: string;
}

export interface ShotDistanceReboundingData {
    teamId: string;
    teamName: string;
    sortOrder: string;
    g: string;
    shotDistRange: string;
    rebFrequency: string;
    oreb: string;
    dreb: string;
    reb: string;
    cOreb: string;
    cDreb: string;
    cReb: string;
    cRebPct: string;
    ucOreb: string;
    ucDreb: string;
    ucReb: string;
    ucRebPct: string;
}

export interface ShotTypeReboundingData {
    teamId: string;
    teamName: string;
    sortOrder: string;
    g: string;
    shotTypeRange: string;
    rebFrequency: string;
    oreb: string;
    dreb: string;
    reb: string;
    cOreb: string;
    cDreb: string;
    cReb: string;
    cRebPct: string;
    ucOreb: string;
    ucDreb: string;
    ucReb: string;
    ucRebPct: string;
}

export interface ClosestDefender10ftPlusShootingData {
    teamId: string;
    teamName: string;
    sortOrder: string;
    g: string;
    closeDefDistRange: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface ClosestDefenderShootingData {
    teamId: string;
    teamName: string;
    sortOrder: string;
    g: string;
    closeDefDistRange: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface DribbleShootingData {
    teamId: string;
    teamName: string;
    sortOrder: string;
    g: string;
    dribbleRange: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface GeneralShootingData {
    teamId: string;
    teamName: string;
    sortOrder: string;
    g: string;
    shotType: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface ShotClockShootingData {
    teamId: string;
    teamName: string;
    sortOrder: string;
    g: string;
    shotClockRange: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface TouchTimeShootingData {
    teamId: string;
    teamName: string;
    sortOrder: string;
    g: string;
    touchTimeRange: string;
    fgaFrequency: string;
    fgm: string;
    fga: string;
    fgPct: string;
    efgPct: string;
    fg2aFrequency: string;
    fg2m: string;
    fg2a: string;
    fg2Pct: string;
    fg3aFrequency: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
}

export interface TeamAwardsChampionshipsData {
    yearawarded: string;
    oppositeteam: string;
}

export interface TeamAwardsConfData {
    yearawarded: string;
    oppositeteam: string;
}

export interface TeamAwardsDivData {
    yearawarded: string;
    oppositeteam: string;
}

export interface TeamBackgroundData {
    teamId: string;
    abbreviation: string;
    nickname: string;
    yearfounded: string;
    city: string;
    arena: string;
    arenacapacity: string;
    owner: string;
    generalmanager: string;
    headcoach: string;
    dleagueaffiliation: string;
}

export interface TeamHistoryData {
    teamId: string;
    city: string;
    nickname: string;
    yearfounded: string;
    yearactivetill: string;
}

export interface TeamHofData {
    playerid: string;
    player: string;
    position: string;
    jersey: string;
    seasonswithteam: string;
    year: string;
}

export interface TeamRetiredData {
    playerid: string;
    player: string;
    position: string;
    jersey: string;
    seasonswithteam: string;
    year: string;
}

export interface TeamSocialSitesData {
    accounttype: string;
    websiteLink: string;
}

export interface TeamEstimatedMetricsData {
    teamName: string;
    teamId: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    eOffRating: string;
    eDefRating: string;
    eNetRating: string;
    ePace: string;
    eAstRatio: string;
    eOrebPct: string;
    eDrebPct: string;
    eRebPct: string;
    eTmTovPct: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    eOffRatingRank: string;
    eDefRatingRank: string;
    eNetRatingRank: string;
    eAstRatioRank: string;
    eOrebPctRank: string;
    eDrebPctRank: string;
    eRebPctRank: string;
    eTmTovPctRank: string;
    ePaceRank: string;
}

export interface TeamGameLogData {
    teamId: string;
    gameId: string;
    gameDate: string;
    matchup: string;
    wl: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    tov: string;
    pf: string;
    pts: string;
}

export interface TeamGameLogsData {
    seasonYear: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    gameId: string;
    gameDate: string;
    matchup: string;
    wl: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
}

export interface TeamGameStreakFinderParametersResultsData {
    teamName: string;
    teamId: string;
    gamestreak: string;
    startdate: string;
    enddate: string;
    activestreak: string;
    numseasons: string;
    lastseason: string;
    firstseason: string;
    abbreviation: string;
}

export interface CareerLeadersByTeamData {
    teamId: string;
    pts: string;
    ptsPersonId: string;
    ptsPlayer: string;
    ast: string;
    astPersonId: string;
    astPlayer: string;
    reb: string;
    rebPersonId: string;
    rebPlayer: string;
    blk: string;
    blkPersonId: string;
    blkPlayer: string;
    stl: string;
    stlPersonId: string;
    stlPlayer: string;
    seasonYear: string;
}

export interface AvailableSeasonsData {
    seasonId: string;
}

export interface TeamInfoCommonData {
    teamId: string;
    seasonYear: string;
    teamCity: string;
    teamName: string;
    teamAbbreviation: string;
    teamConference: string;
    teamDivision: string;
    teamCode: string;
    w: string;
    l: string;
    pct: string;
    confRank: string;
    divRank: string;
    minYear: string;
    maxYear: string;
}

export interface TeamSeasonRanksData {
    leagueId: string;
    seasonId: string;
    teamId: string;
    ptsRank: string;
    ptsPg: string;
    rebRank: string;
    rebPg: string;
    astRank: string;
    astPg: string;
    oppPtsRank: string;
    oppPtsPg: string;
}

export interface PlayersSeasonTotalsData {
    groupSet: string;
    playerId: string;
    playerName: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
}

export interface TeamOverallData {
    groupSet: string;
    teamId: string;
    teamName: string;
    groupValue: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
}

export interface OverallTeamPlayerOnOffDetailsData {
    groupSet: string;
    groupValue: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
}

export interface PlayersOffCourtTeamPlayerOnOffDetailsData {
    groupSet: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
}

export interface PlayersOnCourtTeamPlayerOnOffDetailsData {
    groupSet: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
}

export interface OverallTeamPlayerOnOffSummaryData {
    groupSet: string;
    groupValue: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
}

export interface PlayersOffCourtTeamPlayerOnOffSummaryData {
    groupSet: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    gp: string;
    min: string;
    plusMinus: string;
    offRating: string;
    defRating: string;
    netRating: string;
}

export interface PlayersOnCourtTeamPlayerOnOffSummaryData {
    groupSet: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    gp: string;
    min: string;
    plusMinus: string;
    offRating: string;
    defRating: string;
    netRating: string;
}

export interface OnOffCourtData {
    groupSet: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface OverallData {
    groupSet: string;
    groupValue: string;
    teamId: string;
    teamAbbreviation: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    cfid: string;
    cfparams: string;
}

export interface ShotAreaOffCourtData {
    groupSet: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    cfid: string;
    cfparams: string;
}

export interface ShotAreaOnCourtData {
    groupSet: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    cfid: string;
    cfparams: string;
}

export interface ShotAreaOverallData {
    groupSet: string;
    groupValue: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    fgm: string;
    fga: string;
    fgPct: string;
    cfid: string;
    cfparams: string;
}

export interface ShotDistanceOffCourtData {
    groupSet: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    cfid: string;
    cfparams: string;
}

export interface ShotDistanceOnCourtData {
    groupSet: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    vsPlayerId: string;
    vsPlayerName: string;
    courtStatus: string;
    groupValue: string;
    fgm: string;
    fga: string;
    fgPct: string;
    cfid: string;
    cfparams: string;
}

export interface ShotDistanceOverallData {
    groupSet: string;
    groupValue: string;
    teamId: string;
    teamAbbreviation: string;
    teamName: string;
    fgm: string;
    fga: string;
    fgPct: string;
    cfid: string;
    cfparams: string;
}

export interface VsPlayerOverallData {
    groupSet: string;
    groupValue: string;
    playerId: string;
    gp: string;
    w: string;
    l: string;
    wPct: string;
    min: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    tov: string;
    stl: string;
    blk: string;
    blka: string;
    pf: string;
    pfd: string;
    pts: string;
    plusMinus: string;
    nbaFantasyPts: string;
    dd2: string;
    td3: string;
    gpRank: string;
    wRank: string;
    lRank: string;
    wPctRank: string;
    minRank: string;
    fgmRank: string;
    fgaRank: string;
    fgPctRank: string;
    fg3mRank: string;
    fg3aRank: string;
    fg3PctRank: string;
    ftmRank: string;
    ftaRank: string;
    ftPctRank: string;
    orebRank: string;
    drebRank: string;
    rebRank: string;
    astRank: string;
    tovRank: string;
    stlRank: string;
    blkRank: string;
    blkaRank: string;
    pfRank: string;
    pfdRank: string;
    ptsRank: string;
    plusMinusRank: string;
    nbaFantasyPtsRank: string;
    dd2Rank: string;
    td3Rank: string;
    cfid: string;
    cfparams: string;
}

export interface TeamStatsData {
    teamId: string;
    teamCity: string;
    teamName: string;
    year: string;
    gp: string;
    wins: string;
    losses: string;
    winPct: string;
    confRank: string;
    divRank: string;
    poWins: string;
    poLosses: string;
    confCount: string;
    divCount: string;
    nbaFinalsAppearance: string;
    fgm: string;
    fga: string;
    fgPct: string;
    fg3m: string;
    fg3a: string;
    fg3Pct: string;
    ftm: string;
    fta: string;
    ftPct: string;
    oreb: string;
    dreb: string;
    reb: string;
    ast: string;
    pf: string;
    stl: string;
    tov: string;
    blk: string;
    pts: string;
    ptsRank: string;
}

export interface VideoStatusData {
    gameId: string;
    gameDate: string;
    visitorTeamId: string;
    visitorTeamCity: string;
    visitorTeamName: string;
    visitorTeamAbbreviation: string;
    homeTeamId: string;
    homeTeamCity: string;
    homeTeamName: string;
    homeTeamAbbreviation: string;
    gameStatus: string;
    gameStatusText: string;
    isAvailable: string;
    ptXyzAvailable: string;
}

export interface GameInfoData {
    gameId: string;
    gameDate: string;
    homeTeamId: string;
    homeTeamAbr: string;
    homeTeamPts: string;
    visitorTeamId: string;
    visitorTeamAbr: string;
    visitorTeamPts: string;
}

export interface WinProbPBPData {
    gameId: string;
    eventNum: string;
    homePct: string;
    visitorPct: string;
    homePts: string;
    visitorPts: string;
    homeScoreMargin: string;
    period: string;
    secondsRemaining: string;
    homePossInd: string;
    homeG: string;
    description: string;
    location: string;
    pctimestring: string;
    isvisible: string;
}

export interface AllTimeLeadersGridsResponse {
    aSTLeaders: ASTLeadersData[];
    bLKLeaders: BLKLeadersData[];
    dREBLeaders: DREBLeadersData[];
    fG3ALeaders: FG3ALeadersData[];
    fG3MLeaders: FG3MLeadersData[];
    fG3_PCTLeaders: FG3_PCTLeadersData[];
    fGALeaders: FGALeadersData[];
    fGMLeaders: FGMLeadersData[];
    fG_PCTLeaders: FG_PCTLeadersData[];
    fTALeaders: FTALeadersData[];
    fTMLeaders: FTMLeadersData[];
    fT_PCTLeaders: FT_PCTLeadersData[];
    gPLeaders: GPLeadersData[];
    oREBLeaders: OREBLeadersData[];
    pFLeaders: PFLeadersData[];
    pTSLeaders: PTSLeadersData[];
    rEBLeaders: REBLeadersData[];
    sTLLeaders: STLLeadersData[];
    tOVLeaders: TOVLeadersData[];
}

export interface AssistLeadersResponse {
    assistLeaders: AssistLeadersData[];
}

export interface AssistTrackerResponse {
    assistTracker: AssistTrackerData[];
}

export interface BoxScoreAdvancedV2Response {
    playerStats: PlayerStatsData[];
    teamStats: TeamStatsData[];
}

export interface BoxScoreDefensiveResponse {
    playerDefensiveStats: PlayerDefensiveStatsData[];
}

export interface BoxScoreFourFactorsV2Response {
    sqlPlayersFourFactors: SqlPlayersFourFactorsData[];
    sqlTeamsFourFactors: SqlTeamsFourFactorsData[];
}

export interface BoxScoreMatchupsResponse {
    playerMatchupsStats: PlayerMatchupsStatsData[];
}

export interface BoxScoreMiscV2Response {
    sqlPlayersMisc: SqlPlayersMiscData[];
    sqlTeamsMisc: SqlTeamsMiscData[];
}

export interface BoxScorePlayerTrackV2Response {
    playerStats: PlayerStatsData[];
    teamStats: TeamStatsData[];
}

export interface BoxScoreScoringV2Response {
    sqlPlayersScoring: SqlPlayersScoringData[];
    sqlTeamsScoring: SqlTeamsScoringData[];
}

export interface BoxScoreSimilarityScoreResponse {
    boxScoreSimilarityScores: BoxScoreSimilarityScoresData[];
}

export interface BoxScoreSummaryV2Response {
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

export interface BoxScoreTraditionalV2Response {
    playerStats: PlayerStatsData[];
    teamStarterBenchStats: TeamStarterBenchStatsData[];
    teamStats: TeamStatsData[];
}

export interface BoxScoreUsageV2Response {
    sqlPlayersUsage: SqlPlayersUsageData[];
    sqlTeamsUsage: SqlTeamsUsageData[];
}

export interface CommonAllPlayersResponse {
    commonAllPlayers: CommonAllPlayersData[];
}

export interface CommonPlayerInfoResponse {
    availableSeasons: AvailableSeasonsData[];
    commonPlayerInfo: CommonPlayerInfoData[];
    playerHeadlineStats: PlayerHeadlineStatsData[];
}

export interface CommonPlayoffSeriesResponse {
    playoffSeries: PlayoffSeriesData[];
}

export interface CommonTeamRosterResponse {
    coaches: CoachesData[];
    commonTeamRoster: CommonTeamRosterData[];
}

export interface CommonTeamYearsResponse {
    teamYears: TeamYearsData[];
}

export interface CumeStatsPlayerResponse {
    gameByGameStats: GameByGameStatsData[];
    totalPlayerStats: TotalPlayerStatsData[];
}

export interface CumeStatsPlayerGamesResponse {
    cumeStatsPlayerGames: CumeStatsPlayerGamesData[];
}

export interface CumeStatsTeamResponse {
    gameByGameStats: GameByGameStatsData[];
    totalTeamStats: TotalTeamStatsData[];
}

export interface CumeStatsTeamGamesResponse {
    cumeStatsTeamGames: CumeStatsTeamGamesData[];
}

export interface DefenseHubResponse {
    defenseHubStat1: DefenseHubStat1Data[];
    defenseHubStat2: DefenseHubStat2Data[];
    defenseHubStat3: DefenseHubStat3Data[];
    defenseHubStat4: DefenseHubStat4Data[];
    defenseHubStat5: DefenseHubStat5Data[];
    defenseHubStat6: DefenseHubStat6Data[];
    defenseHubStat7: DefenseHubStat7Data[];
    defenseHubStat8: DefenseHubStat8Data[];
    defenseHubStat9: DefenseHubStat9Data[];
}

export interface DraftBoardResponse {
    draftBoard: DraftBoardData[];
}

export interface DraftCombineDrillResultsResponse {
    results: ResultsData[];
}

export interface DraftCombineNonStationaryShootingResponse {
    results: ResultsData[];
}

export interface DraftCombinePlayerAnthroResponse {
    results: ResultsData[];
}

export interface DraftCombineSpotShootingResponse {
    results: ResultsData[];
}

export interface DraftCombineStatsResponse {
    draftCombineStats: DraftCombineStatsData[];
}

export interface DraftHistoryResponse {
    draftHistory: DraftHistoryData[];
}

export interface FantasyWidgetResponse {
    fantasyWidgetResult: FantasyWidgetResultData[];
}

export interface FranchiseHistoryResponse {
    defunctTeams: DefunctTeamsData[];
    franchiseHistory: FranchiseHistoryData[];
}

export interface FranchiseLeadersResponse {
    franchiseLeaders: FranchiseLeadersData[];
}

export interface FranchisePlayersResponse {
    franchisePlayers: FranchisePlayersData[];
}

export interface GameRotationResponse {
    awayTeam: AwayTeamData[];
    homeTeam: HomeTeamData[];
}

export interface GLAlumBoxScoreSimilarityScoreResponse {
    gLeagueAlumBoxScoreSimilarityScores: GLeagueAlumBoxScoreSimilarityScoresData[];
}

export interface HomePageLeadersResponse {
    homePageLeaders: HomePageLeadersData[];
    leagueAverage: LeagueAverageData[];
    leagueMax: LeagueMaxData[];
}

export interface HomePageV2Response {
    homePageStat1: HomePageStat1Data[];
    homePageStat2: HomePageStat2Data[];
    homePageStat3: HomePageStat3Data[];
    homePageStat4: HomePageStat4Data[];
    homePageStat5: HomePageStat5Data[];
    homePageStat6: HomePageStat6Data[];
    homePageStat7: HomePageStat7Data[];
    homePageStat8: HomePageStat8Data[];
}

export interface HustleStatsBoxScoreResponse {
    hustleStatsAvailable: HustleStatsAvailableData[];
    playerStats: PlayerStatsData[];
    teamStats: TeamStatsData[];
}

export interface InfographicFanDuelPlayerResponse {
    fanDuelPlayer: FanDuelPlayerData[];
}

export interface LeadersTilesResponse {
    allTimeSeasonHigh: AllTimeSeasonHighData[];
    lastSeasonHigh: LastSeasonHighData[];
    leadersTiles: LeadersTilesData[];
    lowSeasonHigh: LowSeasonHighData[];
}

export interface LeagueDashLineupsResponse {
    lineups: LineupsData[];
}

export interface LeagueDashOppPtShotResponse {
    leagueDashPTShots: LeagueDashPTShotsData[];
}

export interface LeagueDashPlayerBioStatsResponse {
    leagueDashPlayerBioStats: LeagueDashPlayerBioStatsData[];
}

export interface LeagueDashPlayerClutchResponse {
    leagueDashPlayerClutch: LeagueDashPlayerClutchData[];
}

export interface LeagueDashPlayerPtShotResponse {
    leagueDashPTShots: LeagueDashPTShotsData[];
}

export interface LeagueDashPlayerStatsResponse {
    leagueDashPlayerStats: LeagueDashPlayerStatsData[];
}

export interface LeagueDashPtDefendResponse {
    leagueDashPTDefend: LeagueDashPTDefendData[];
}

export interface LeagueDashPtStatsResponse {
    leagueDashPtStats: LeagueDashPtStatsData[];
}

export interface LeagueDashPtTeamDefendResponse {
    leagueDashPtTeamDefend: LeagueDashPtTeamDefendData[];
}

export interface LeagueDashTeamClutchResponse {
    leagueDashTeamClutch: LeagueDashTeamClutchData[];
}

export interface LeagueDashTeamPtShotResponse {
    leagueDashPTShots: LeagueDashPTShotsData[];
}

export interface LeagueDashTeamStatsResponse {
    leagueDashTeamStats: LeagueDashTeamStatsData[];
}

export interface LeagueGameFinderResponse {
    leagueGameFinderResults: LeagueGameFinderResultsData[];
}

export interface LeagueGameLogResponse {
    leagueGameLog: LeagueGameLogData[];
}

export interface LeagueHustleStatsPlayerResponse {
    hustleStatsPlayer: HustleStatsPlayerData[];
}

export interface LeagueHustleStatsPlayerLeadersResponse {
    playerChargesDrawnLeaders: PlayerChargesDrawnLeadersData[];
    playerContestedShotsLeaders: PlayerContestedShotsLeadersData[];
    playerDeflectionsLeaders: PlayerDeflectionsLeadersData[];
    playerLooseBallLeaders: PlayerLooseBallLeadersData[];
    playerScreenAssistLeaders: PlayerScreenAssistLeadersData[];
    table5: Table5Data[];
}

export interface LeagueHustleStatsTeamResponse {
    hustleStatsTeam: HustleStatsTeamData[];
}

export interface LeagueHustleStatsTeamLeadersResponse {
    table5: Table5Data[];
    table6: Table6Data[];
    teamChargesDrawnLeaders: TeamChargesDrawnLeadersData[];
    teamContestedShotsLeaders: TeamContestedShotsLeadersData[];
    teamDeflectionsLeaders: TeamDeflectionsLeadersData[];
    teamLooseBallLeaders: TeamLooseBallLeadersData[];
    teamScreenAssistLeaders: TeamScreenAssistLeadersData[];
}

export interface LeagueLeadersResponse {
    leagueLeaders: LeagueLeadersData[];
}

export interface LeagueLineupVizResponse {
    leagueLineupViz: LeagueLineupVizData[];
}

export interface LeaguePlayerOnDetailsResponse {
    playersOnCourtLeaguePlayerDetails: PlayersOnCourtLeaguePlayerDetailsData[];
}

export interface LeagueSeasonMatchupsResponse {
    seasonMatchups: SeasonMatchupsData[];
}

export interface LeagueStandingsResponse {
    standings: StandingsData[];
}

export interface LeagueStandingsV3Response {
    standings: StandingsData[];
}

export interface MatchupsRollupResponse {
    matchupsRollup: MatchupsRollupData[];
}

export interface PlayByPlayResponse {
    availableVideo: AvailableVideoData[];
    playByPlay: PlayByPlayData[];
}

export interface PlayByPlayV2Response {
    availableVideo: AvailableVideoData[];
    playByPlay: PlayByPlayData[];
}

export interface PlayerAwardsResponse {
    playerAwards: PlayerAwardsData[];
}

export interface PlayerCareerByCollegeResponse {
    playerCareerByCollege: PlayerCareerByCollegeData[];
}

export interface PlayerCareerByCollegeRollupResponse {
    east: EastData[];
    midwest: MidwestData[];
    south: SouthData[];
    west: WestData[];
}

export interface PlayerCareerStatsResponse {
    careerTotalsAllStarSeason: CareerTotalsAllStarSeasonData[];
    careerTotalsCollegeSeason: CareerTotalsCollegeSeasonData[];
    careerTotalsPostSeason: CareerTotalsPostSeasonData[];
    careerTotalsRegularSeason: CareerTotalsRegularSeasonData[];
    seasonRankingsPostSeason: SeasonRankingsPostSeasonData[];
    seasonRankingsRegularSeason: SeasonRankingsRegularSeasonData[];
    seasonTotalsAllStarSeason: SeasonTotalsAllStarSeasonData[];
    seasonTotalsCollegeSeason: SeasonTotalsCollegeSeasonData[];
    seasonTotalsPostSeason: SeasonTotalsPostSeasonData[];
    seasonTotalsRegularSeason: SeasonTotalsRegularSeasonData[];
}

export interface PlayerCompareResponse {
    individual: IndividualData[];
    overallCompare: OverallCompareData[];
}

export interface PlayerDashboardByClutchResponse {
    last10Sec3Point2PlayerDashboard: Last10Sec3Point2PlayerDashboardData[];
    last10Sec3PointPlayerDashboard: Last10Sec3PointPlayerDashboardData[];
    last1Min5PointPlayerDashboard: Last1Min5PointPlayerDashboardData[];
    last1MinPlusMinus5PointPlayerDashboard: Last1MinPlusMinus5PointPlayerDashboardData[];
    last30Sec3Point2PlayerDashboard: Last30Sec3Point2PlayerDashboardData[];
    last30Sec3PointPlayerDashboard: Last30Sec3PointPlayerDashboardData[];
    last3Min5PointPlayerDashboard: Last3Min5PointPlayerDashboardData[];
    last3MinPlusMinus5PointPlayerDashboard: Last3MinPlusMinus5PointPlayerDashboardData[];
    last5Min5PointPlayerDashboard: Last5Min5PointPlayerDashboardData[];
    last5MinPlusMinus5PointPlayerDashboard: Last5MinPlusMinus5PointPlayerDashboardData[];
    overallPlayerDashboard: OverallPlayerDashboardData[];
}

export interface PlayerDashboardByGameSplitsResponse {
    byActualMarginPlayerDashboard: ByActualMarginPlayerDashboardData[];
    byHalfPlayerDashboard: ByHalfPlayerDashboardData[];
    byPeriodPlayerDashboard: ByPeriodPlayerDashboardData[];
    byScoreMarginPlayerDashboard: ByScoreMarginPlayerDashboardData[];
    overallPlayerDashboard: OverallPlayerDashboardData[];
}

export interface PlayerDashboardByGeneralSplitsResponse {
    daysRestPlayerDashboard: DaysRestPlayerDashboardData[];
    locationPlayerDashboard: LocationPlayerDashboardData[];
    monthPlayerDashboard: MonthPlayerDashboardData[];
    overallPlayerDashboard: OverallPlayerDashboardData[];
    prePostAllStarPlayerDashboard: PrePostAllStarPlayerDashboardData[];
    startingPosition: StartingPositionData[];
    winsLossesPlayerDashboard: WinsLossesPlayerDashboardData[];
}

export interface PlayerDashboardByLastNGamesResponse {
    gameNumberPlayerDashboard: GameNumberPlayerDashboardData[];
    last10PlayerDashboard: Last10PlayerDashboardData[];
    last15PlayerDashboard: Last15PlayerDashboardData[];
    last20PlayerDashboard: Last20PlayerDashboardData[];
    last5PlayerDashboard: Last5PlayerDashboardData[];
    overallPlayerDashboard: OverallPlayerDashboardData[];
}

export interface PlayerDashboardByOpponentResponse {
    conferencePlayerDashboard: ConferencePlayerDashboardData[];
    divisionPlayerDashboard: DivisionPlayerDashboardData[];
    opponentPlayerDashboard: OpponentPlayerDashboardData[];
    overallPlayerDashboard: OverallPlayerDashboardData[];
}

export interface PlayerDashboardByShootingSplitsResponse {
    assistedBy: AssistedByData[];
    assitedShotPlayerDashboard: AssitedShotPlayerDashboardData[];
    overallPlayerDashboard: OverallPlayerDashboardData[];
    shot5FTPlayerDashboard: Shot5FTPlayerDashboardData[];
    shot8FTPlayerDashboard: Shot8FTPlayerDashboardData[];
    shotAreaPlayerDashboard: ShotAreaPlayerDashboardData[];
    shotTypePlayerDashboard: ShotTypePlayerDashboardData[];
    shotTypeSummaryPlayerDashboard: ShotTypeSummaryPlayerDashboardData[];
}

export interface PlayerDashboardByTeamPerformanceResponse {
    overallPlayerDashboard: OverallPlayerDashboardData[];
    pointsScoredPlayerDashboard: PointsScoredPlayerDashboardData[];
    pontsAgainstPlayerDashboard: PontsAgainstPlayerDashboardData[];
    scoreDifferentialPlayerDashboard: ScoreDifferentialPlayerDashboardData[];
}

export interface PlayerDashboardByYearOverYearResponse {
    byYearPlayerDashboard: ByYearPlayerDashboardData[];
    overallPlayerDashboard: OverallPlayerDashboardData[];
}

export interface PlayerDashPtPassResponse {
    passesMade: PassesMadeData[];
    passesReceived: PassesReceivedData[];
}

export interface PlayerDashPtRebResponse {
    numContestedRebounding: NumContestedReboundingData[];
    overallRebounding: OverallReboundingData[];
    rebDistanceRebounding: RebDistanceReboundingData[];
    shotDistanceRebounding: ShotDistanceReboundingData[];
    shotTypeRebounding: ShotTypeReboundingData[];
}

export interface PlayerDashPtShotDefendResponse {
    defendingShots: DefendingShotsData[];
}

export interface PlayerDashPtShotsResponse {
    closestDefender10ftPlusShooting: ClosestDefender10ftPlusShootingData[];
    closestDefenderShooting: ClosestDefenderShootingData[];
    dribbleShooting: DribbleShootingData[];
    generalShooting: GeneralShootingData[];
    overall: OverallData[];
    shotClockShooting: ShotClockShootingData[];
    touchTimeShooting: TouchTimeShootingData[];
}

export interface PlayerEstimatedMetricsResponse {
    playerEstimatedMetrics: PlayerEstimatedMetricsData[];
}

export interface PlayerFantasyProfileResponse {
    daysRestModified: DaysRestModifiedData[];
    lastNGames: LastNGamesData[];
    location: LocationData[];
    opponent: OpponentData[];
    overall: OverallData[];
}

export interface PlayerFantasyProfileBarGraphResponse {
    lastFiveGamesAvg: LastFiveGamesAvgData[];
    seasonAvg: SeasonAvgData[];
}

export interface PlayerGameLogResponse {
    playerGameLog: PlayerGameLogData[];
}

export interface PlayerGameLogsResponse {
    playerGameLogs: PlayerGameLogsData[];
}

export interface PlayerGameStreakFinderResponse {
    playerGameStreakFinderResults: PlayerGameStreakFinderResultsData[];
}

export interface PlayerNextNGamesResponse {
    nextNGames: NextNGamesData[];
}

export interface PlayerProfileV2Response {
    careerHighs: CareerHighsData[];
    careerTotalsAllStarSeason: CareerTotalsAllStarSeasonData[];
    careerTotalsCollegeSeason: CareerTotalsCollegeSeasonData[];
    careerTotalsPostSeason: CareerTotalsPostSeasonData[];
    careerTotalsPreseason: CareerTotalsPreseasonData[];
    careerTotalsRegularSeason: CareerTotalsRegularSeasonData[];
    nextGame: NextGameData[];
    seasonHighs: SeasonHighsData[];
    seasonRankingsPostSeason: SeasonRankingsPostSeasonData[];
    seasonRankingsRegularSeason: SeasonRankingsRegularSeasonData[];
    seasonTotalsAllStarSeason: SeasonTotalsAllStarSeasonData[];
    seasonTotalsCollegeSeason: SeasonTotalsCollegeSeasonData[];
    seasonTotalsPostSeason: SeasonTotalsPostSeasonData[];
    seasonTotalsPreseason: SeasonTotalsPreseasonData[];
    seasonTotalsRegularSeason: SeasonTotalsRegularSeasonData[];
}

export interface PlayerVsPlayerResponse {
    onOffCourt: OnOffCourtData[];
    overall: OverallData[];
    playerInfo: PlayerInfoData[];
    shotAreaOffCourt: ShotAreaOffCourtData[];
    shotAreaOnCourt: ShotAreaOnCourtData[];
    shotAreaOverall: ShotAreaOverallData[];
    shotDistanceOffCourt: ShotDistanceOffCourtData[];
    shotDistanceOnCourt: ShotDistanceOnCourtData[];
    shotDistanceOverall: ShotDistanceOverallData[];
    vsPlayerInfo: VsPlayerInfoData[];
}

export interface PlayoffPictureResponse {
    eastConfPlayoffPicture: EastConfPlayoffPictureData[];
    eastConfRemainingGames: EastConfRemainingGamesData[];
    eastConfStandings: EastConfStandingsData[];
    westConfPlayoffPicture: WestConfPlayoffPictureData[];
    westConfRemainingGames: WestConfRemainingGamesData[];
    westConfStandings: WestConfStandingsData[];
}

export interface ScoreboardResponse {
    available: AvailableData[];
    eastConfStandingsByDay: EastConfStandingsByDayData[];
    gameHeader: GameHeaderData[];
    lastMeeting: LastMeetingData[];
    lineScore: LineScoreData[];
    seriesStandings: SeriesStandingsData[];
    westConfStandingsByDay: WestConfStandingsByDayData[];
}

export interface ScoreboardV2Response {
    available: AvailableData[];
    eastConfStandingsByDay: EastConfStandingsByDayData[];
    gameHeader: GameHeaderData[];
    lastMeeting: LastMeetingData[];
    lineScore: LineScoreData[];
    seriesStandings: SeriesStandingsData[];
    teamLeaders: TeamLeadersData[];
    ticketLinks: TicketLinksData[];
    westConfStandingsByDay: WestConfStandingsByDayData[];
}

export interface ShotChartDetailResponse {
    leagueAverages: LeagueAveragesData[];
    shot_Chart_Detail: Shot_Chart_DetailData[];
}

export interface ShotChartLeagueWideResponse {
    league_Wide: League_WideData[];
}

export interface ShotChartLineupDetailResponse {
    shotChartLineupDetail: ShotChartLineupDetailData[];
    shotChartLineupLeagueAverage: ShotChartLineupLeagueAverageData[];
}

export interface SynergyPlayTypesResponse {
    synergyPlayType: SynergyPlayTypeData[];
}

export interface TeamAndPlayersVsPlayersResponse {
    playersVsPlayers: PlayersVsPlayersData[];
    teamPlayersVsPlayersOff: TeamPlayersVsPlayersOffData[];
    teamPlayersVsPlayersOn: TeamPlayersVsPlayersOnData[];
    teamVsPlayers: TeamVsPlayersData[];
    teamVsPlayersOff: TeamVsPlayersOffData[];
}

export interface TeamDashboardByClutchResponse {
    last10Sec3Point2TeamDashboard: Last10Sec3Point2TeamDashboardData[];
    last10Sec3PointTeamDashboard: Last10Sec3PointTeamDashboardData[];
    last1Min5PointTeamDashboard: Last1Min5PointTeamDashboardData[];
    last1MinPlusMinus5PointTeamDashboard: Last1MinPlusMinus5PointTeamDashboardData[];
    last30Sec3Point2TeamDashboard: Last30Sec3Point2TeamDashboardData[];
    last30Sec3PointTeamDashboard: Last30Sec3PointTeamDashboardData[];
    last3Min5PointTeamDashboard: Last3Min5PointTeamDashboardData[];
    last3MinPlusMinus5PointTeamDashboard: Last3MinPlusMinus5PointTeamDashboardData[];
    last5Min5PointTeamDashboard: Last5Min5PointTeamDashboardData[];
    last5MinPlusMinus5PointTeamDashboard: Last5MinPlusMinus5PointTeamDashboardData[];
    overallTeamDashboard: OverallTeamDashboardData[];
}

export interface TeamDashboardByGameSplitsResponse {
    byActualMarginTeamDashboard: ByActualMarginTeamDashboardData[];
    byHalfTeamDashboard: ByHalfTeamDashboardData[];
    byPeriodTeamDashboard: ByPeriodTeamDashboardData[];
    byScoreMarginTeamDashboard: ByScoreMarginTeamDashboardData[];
    overallTeamDashboard: OverallTeamDashboardData[];
}

export interface TeamDashboardByGeneralSplitsResponse {
    daysRestTeamDashboard: DaysRestTeamDashboardData[];
    locationTeamDashboard: LocationTeamDashboardData[];
    monthTeamDashboard: MonthTeamDashboardData[];
    overallTeamDashboard: OverallTeamDashboardData[];
    prePostAllStarTeamDashboard: PrePostAllStarTeamDashboardData[];
    winsLossesTeamDashboard: WinsLossesTeamDashboardData[];
}

export interface TeamDashboardByLastNGamesResponse {
    gameNumberTeamDashboard: GameNumberTeamDashboardData[];
    last10TeamDashboard: Last10TeamDashboardData[];
    last15TeamDashboard: Last15TeamDashboardData[];
    last20TeamDashboard: Last20TeamDashboardData[];
    last5TeamDashboard: Last5TeamDashboardData[];
    overallTeamDashboard: OverallTeamDashboardData[];
}

export interface TeamDashboardByOpponentResponse {
    conferenceTeamDashboard: ConferenceTeamDashboardData[];
    divisionTeamDashboard: DivisionTeamDashboardData[];
    opponentTeamDashboard: OpponentTeamDashboardData[];
    overallTeamDashboard: OverallTeamDashboardData[];
}

export interface TeamDashboardByShootingSplitsResponse {
    assistedBy: AssistedByData[];
    assitedShotTeamDashboard: AssitedShotTeamDashboardData[];
    overallTeamDashboard: OverallTeamDashboardData[];
    shot5FTTeamDashboard: Shot5FTTeamDashboardData[];
    shot8FTTeamDashboard: Shot8FTTeamDashboardData[];
    shotAreaTeamDashboard: ShotAreaTeamDashboardData[];
    shotTypeTeamDashboard: ShotTypeTeamDashboardData[];
}

export interface TeamDashboardByTeamPerformanceResponse {
    overallTeamDashboard: OverallTeamDashboardData[];
    pointsScoredTeamDashboard: PointsScoredTeamDashboardData[];
    pontsAgainstTeamDashboard: PontsAgainstTeamDashboardData[];
    scoreDifferentialTeamDashboard: ScoreDifferentialTeamDashboardData[];
}

export interface TeamDashboardByYearOverYearResponse {
    byYearTeamDashboard: ByYearTeamDashboardData[];
    overallTeamDashboard: OverallTeamDashboardData[];
}

export interface TeamDashLineupsResponse {
    lineups: LineupsData[];
    overall: OverallData[];
}

export interface TeamDashPtPassResponse {
    passesMade: PassesMadeData[];
    passesReceived: PassesReceivedData[];
}

export interface TeamDashPtRebResponse {
    numContestedRebounding: NumContestedReboundingData[];
    overallRebounding: OverallReboundingData[];
    rebDistanceRebounding: RebDistanceReboundingData[];
    shotDistanceRebounding: ShotDistanceReboundingData[];
    shotTypeRebounding: ShotTypeReboundingData[];
}

export interface TeamDashPtShotsResponse {
    closestDefender10ftPlusShooting: ClosestDefender10ftPlusShootingData[];
    closestDefenderShooting: ClosestDefenderShootingData[];
    dribbleShooting: DribbleShootingData[];
    generalShooting: GeneralShootingData[];
    shotClockShooting: ShotClockShootingData[];
    touchTimeShooting: TouchTimeShootingData[];
}

export interface TeamDetailsResponse {
    teamAwardsChampionships: TeamAwardsChampionshipsData[];
    teamAwardsConf: TeamAwardsConfData[];
    teamAwardsDiv: TeamAwardsDivData[];
    teamBackground: TeamBackgroundData[];
    teamHistory: TeamHistoryData[];
    teamHof: TeamHofData[];
    teamRetired: TeamRetiredData[];
    teamSocialSites: TeamSocialSitesData[];
}

export interface TeamEstimatedMetricsResponse {
    teamEstimatedMetrics: TeamEstimatedMetricsData[];
}

export interface TeamGameLogResponse {
    teamGameLog: TeamGameLogData[];
}

export interface TeamGameLogsResponse {
    teamGameLogs: TeamGameLogsData[];
}

export interface TeamGameStreakFinderResponse {
    teamGameStreakFinderParametersResults: TeamGameStreakFinderParametersResultsData[];
}

export interface TeamHistoricalLeadersResponse {
    careerLeadersByTeam: CareerLeadersByTeamData[];
}

export interface TeamInfoCommonResponse {
    availableSeasons: AvailableSeasonsData[];
    teamInfoCommon: TeamInfoCommonData[];
    teamSeasonRanks: TeamSeasonRanksData[];
}

export interface TeamPlayerDashboardResponse {
    playersSeasonTotals: PlayersSeasonTotalsData[];
    teamOverall: TeamOverallData[];
}

export interface TeamPlayerOnOffDetailsResponse {
    overallTeamPlayerOnOffDetails: OverallTeamPlayerOnOffDetailsData[];
    playersOffCourtTeamPlayerOnOffDetails: PlayersOffCourtTeamPlayerOnOffDetailsData[];
    playersOnCourtTeamPlayerOnOffDetails: PlayersOnCourtTeamPlayerOnOffDetailsData[];
}

export interface TeamPlayerOnOffSummaryResponse {
    overallTeamPlayerOnOffSummary: OverallTeamPlayerOnOffSummaryData[];
    playersOffCourtTeamPlayerOnOffSummary: PlayersOffCourtTeamPlayerOnOffSummaryData[];
    playersOnCourtTeamPlayerOnOffSummary: PlayersOnCourtTeamPlayerOnOffSummaryData[];
}

export interface TeamVsPlayerResponse {
    onOffCourt: OnOffCourtData[];
    overall: OverallData[];
    shotAreaOffCourt: ShotAreaOffCourtData[];
    shotAreaOnCourt: ShotAreaOnCourtData[];
    shotAreaOverall: ShotAreaOverallData[];
    shotDistanceOffCourt: ShotDistanceOffCourtData[];
    shotDistanceOnCourt: ShotDistanceOnCourtData[];
    shotDistanceOverall: ShotDistanceOverallData[];
    vsPlayerOverall: VsPlayerOverallData[];
}

export interface TeamYearByYearStatsResponse {
    teamStats: TeamStatsData[];
}

export interface VideoStatusResponse {
    videoStatus: VideoStatusData[];
}

export interface WinProbabilityPBPResponse {
    gameInfo: GameInfoData[];
    winProbPBP: WinProbPBPData[];
}

