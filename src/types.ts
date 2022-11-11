export interface ParsedRequest {
    lang: 'ru' | "en";
    title?: string;
    desc?: string;
}

export interface Event {
    queryStringParameters: ParsedRequest
}

export type QueryParams = Pick<ParsedRequest, 'title' | 'desc' | 'lang'>;
