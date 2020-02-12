import { Action } from '@ngrx/store';
import { IArticle } from '../../shared/entities/ARTICLE';
import { ActionTypes } from '../constants';

export class UpdateArticle implements Action {
  public readonly type: string = ActionTypes.UPDATE_ARTICLE;
  constructor( public payload?: IArticle, public id?: number) {}
}

export class DeleteArticle implements Action {
  public readonly type: string = ActionTypes.DELETE_ARTICLE;
  constructor( public payload?: IArticle, public id?: number) {}
}

export class AddArticle implements Action {
  public readonly type: string = ActionTypes.ADD_ARTICLE;
  constructor( public payload?: IArticle,  public id?: number ) {}
}

export type OwnArticlesActions =
  | UpdateArticle
  | AddArticle
  | DeleteArticle
