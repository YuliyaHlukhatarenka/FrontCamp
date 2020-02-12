import { ArticlesActions } from '../actions';
import { ActionTypes } from '../constants';
import { IArticle } from '../../shared/entities/article';

export function articlesReducer(
  state: IArticle[] = [],
  action: ArticlesActions
): IArticle[] {
  switch (action.type) {
    case ActionTypes.GET_ARTICLES_SUCCESS:
      return action.payload as IArticle[];
    default:
      return state;
  }
}
