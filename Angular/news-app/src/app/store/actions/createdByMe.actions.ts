import { Action } from '@ngrx/store';
import { ActionTypes } from '../constants';

export class setCreatedByMe implements Action {
  public readonly type: string = ActionTypes.SET_SELECTED_BY_ME_OPTION;
  constructor( public payload: boolean ) {}
}
export type SetCreatedByMeActions =
  | setCreatedByMe

