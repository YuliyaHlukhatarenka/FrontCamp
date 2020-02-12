
import { ISource } from '../../shared/entities/source';
import { IArticle } from '../../shared/entities/article';
import { SELECT_SOURCE_DEFAULT } from '../../shared/constants';

export const initialAppState: IAppState = {
    sources: [],
    articles: [],
    ownArticles: [],
    selectedSource: SELECT_SOURCE_DEFAULT,
    createdByMe: false,
    userLogin: ''

};

export interface IAppState {
    sources: ISource[];
    articles: IArticle[];
    ownArticles: IArticle[];
    selectedSource: string;
    createdByMe: boolean;
    userLogin: string;
}
