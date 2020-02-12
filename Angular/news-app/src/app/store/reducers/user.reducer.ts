import { UserActions } from '../actions';
import { ActionTypes } from '../constants';

export function userReducer(state: string = '', action: UserActions): string {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
}
