import { Header } from './http';

export const ApiHostname = 'stats.nba.com';

export const DefaultHeaders = {
    [Header.Accept]: 'application/json, text/plain, */*',
    [Header.AcceptEncoding]: 'utf-8',
    [Header.AcceptLanguage]: 'en-US,en;q=0.5',
    [Header.CacheControl]: 'no-cache',
    [Header.Connection]: 'keep-alive',
    [Header.Host]: ApiHostname,
    [Header.Pragma]: 'no-cache',
    [Header.Referer]: `https://${ApiHostname}`,
    [Header.UserAgent]: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0',
    [Header.XNbaStatsOrigin]: 'stats',
    [Header.XNbaStatsToken]: 'true',
};
