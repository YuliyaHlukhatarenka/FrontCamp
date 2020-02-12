import { SetCreatedByMeActions } from '../actions';
import { ActionTypes } from '../constants';

export function createdByMeReducer(state: boolean = false, action: SetCreatedByMeActions): boolean {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_BY_ME_OPTION:
      return action.payload;
    default:
      return state;
  }
}
