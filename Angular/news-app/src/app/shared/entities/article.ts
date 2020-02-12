export interface IArticle {
    source?: object;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content: string;
    id?: number;
    sourceUrl?: string;
}
