import { IncomingHttpHeaders } from 'http';
import { RequestOptions, get } from 'https';

export interface GetResponse {
    body: string;
    headers: IncomingHttpHeaders;
    statusCode: number;
}

export const getAsync = (url: string | URL, options?: RequestOptions): Promise<GetResponse> =>
    new Promise((resolve, reject) => {
        get(url, options ?? {}, (res) => {
            const { headers, statusCode } = res;
            let body = '';

            res.on('data', (chunk) => {
                body += chunk;
            });

            res.on('end', () => {
                resolve({
                    body,
                    headers,
                    /* eslint-disable @typescript-eslint/no-non-null-assertion */
                    // Justification: statusCode should always be available
                    statusCode: statusCode!,
                    /* eslint-enable @typescript-eslint/no-non-null-assertion */
                });
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
