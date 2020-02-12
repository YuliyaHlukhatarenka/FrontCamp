import { sourcesActions } from '../actions';
import { ActionTypes } from '../constants';
import { ISource } from '../../shared/entities/source';

export function sourcesReducer(state: ISource[] = [], action: sourcesActions): ISource[] {
  switch (action.type) {
    case ActionTypes.GET_SOURCES_SUCCESS:
      return action.payload as ISource[];
    default:
      return state;
  }
}
