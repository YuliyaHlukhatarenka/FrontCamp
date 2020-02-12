import { Action } from '@ngrx/store';
import { ActionTypes } from '../constants';

export class loginUser implements Action {
  public readonly type: string = ActionTypes.LOGIN_USER;
  constructor( public payload: string ) {}
}
export type UserActions =
  | loginUser

