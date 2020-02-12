import { OwnArticlesActions } from '../actions';
import { ActionTypes } from '../constants';
import { IArticle } from '../../shared/entities/article';

export function ownArticlesReducer(
  state: IArticle[] = [],
  action: OwnArticlesActions
): IArticle[] {
  switch (action.type) {
    case ActionTypes.ADD_ARTICLE:
      return [...state, action.payload as IArticle];
    case ActionTypes.UPDATE_ARTICLE:
        return [...state.slice(0, action.id ), action.payload as IArticle, ...state.slice(action.id + 1)];
    case ActionTypes.DELETE_ARTICLE:
     return [...state.splice((action.id as number), 1)];
    default:
      return state;
  }
}
