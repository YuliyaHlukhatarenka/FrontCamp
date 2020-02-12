import { Action } from '@ngrx/store';
import { IArticle } from '../../shared/entities/ARTICLE';
import { ActionTypes } from '../constants';

export class GetArticles implements Action {
  public readonly type: string = ActionTypes.GET_ARTICLES;
  constructor(public payload: string) { }
}

export class GetArticlesSuccess implements Action {
  public readonly type: string = ActionTypes.GET_ARTICLES_SUCCESS;
  constructor(public payload: IArticle[]) { }
}

export class GetArticlesError implements Action {
  public readonly type: string = ActionTypes.GET_ARTICLES_ERROR;
  constructor(public payload: Error) { }
}

export type ArticlesActions =
  | GetArticlesSuccess
  | GetArticlesError;
