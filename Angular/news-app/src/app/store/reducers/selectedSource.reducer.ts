import { SelectedSourceActions } from '../actions';
import { ActionTypes } from '../constants';
import { SELECT_SOURCE_DEFAULT } from '../../shared/constants';

export function selectedSourceReducer(state: string = SELECT_SOURCE_DEFAULT, action: SelectedSourceActions): string {
  switch (action.type) {
    case ActionTypes.SET_SELECTE_SOURCE:
      return action.payload;
    default:
      return state;
  }
}
