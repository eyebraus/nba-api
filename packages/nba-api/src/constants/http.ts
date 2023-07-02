import { Union } from '@nba-api/stdlib';

type HeaderName =
    | 'Accept'
    | 'AcceptEncoding'
    | 'AcceptLanguage'
    | 'CacheControl'
    | 'Connection'
    | 'Host'
    | 'Pragma'
    | 'Referer'
    | 'UserAgent'
    | 'XNbaStatsOrigin'
    | 'XNbaStatsToken';

export type Header =
    | 'Accept'
    | 'Accept-Encoding'
    | 'Accept-Language'
    | 'Cache-Control'
    | 'Connection'
    | 'Host'
    | 'Pragma'
    | 'Referer'
    | 'User-Agent'
    | 'x-nba-stats-origin'
    | 'x-nba-stats-token';

export const Header: Union<HeaderName, Header> = {
    Accept: 'Accept',
    AcceptEncoding: 'Accept-Encoding',
    AcceptLanguage: 'Accept-Language',
    CacheControl: 'Cache-Control',
    Connection: 'Connection',
    Host: 'Host',
    Pragma: 'Pragma',
    Referer: 'Referer',
    UserAgent: 'User-Agent',
    XNbaStatsOrigin: 'x-nba-stats-origin',
    XNbaStatsToken: 'x-nba-stats-token',
};
