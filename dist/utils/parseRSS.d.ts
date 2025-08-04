/**
 * 提取 RSS 内容
 * @param content HTML 内容
 * @returns RSS 内容
 */
export declare const extractRss: (content: string) => string | null;
/**
 * 解析 RSS 内容
 * @param rssContent RSS 内容
 * @returns 解析后的 RSS 内容
 */
export declare const parseRSS: (rssContent: string) => Promise<{
    title: string | undefined;
    link: string | undefined;
    pubDate: string | undefined;
    author: any;
    content: string | undefined;
    contentSnippet: string | undefined;
    guid: string | undefined;
    categories: string[] | undefined;
}[]>;
//# sourceMappingURL=parseRSS.d.ts.map