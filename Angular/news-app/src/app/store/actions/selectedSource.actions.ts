import { Action } from '@ngrx/store';
import { ActionTypes } from '../constants';

export class SetSelectedSource implements Action {
  public readonly type: string = ActionTypes.SET_SELECTE_SOURCE;
  constructor(public payload: string ) {}
}
export type SelectedSourceActions =
  | SetSelectedSource

