interface MetaData {
    [key: string]: string;
}
interface FetchOptions {
    fallbackOnHTMLTags: boolean;
}
declare function findOGTags(content: string, url: string): MetaData;
declare function findHTMLMetaTags(content: string, url: string): MetaData;
declare function extractMeta(textContent?: string, options?: FetchOptions): Promise<MetaData[]>;
declare const _default: {
    extractMeta: typeof extractMeta;
    findOGTags: typeof findOGTags;
    findHTMLMetaTags: typeof findHTMLMetaTags;
};
export default _default;
//# sourceMappingURL=OpenGraphParser.d.ts.map