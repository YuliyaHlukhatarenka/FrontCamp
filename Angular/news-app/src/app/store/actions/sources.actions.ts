import { Action } from '@ngrx/store';
import { ActionTypes } from '../constants';
import { ISource } from '../../shared/entities/source';

export class GetSources implements Action {
  public readonly type: string = ActionTypes.GET_SOURCES;
}

export class GetSourcesSuccess implements Action {
  public readonly type: string = ActionTypes.GET_SOURCES_SUCCESS;
  constructor( public payload: ISource[] ) {
  }
}

export class GetSourcesError implements Action {
  public readonly type: string = ActionTypes.GET_SOURCES_ERROR;
  constructor( public payload: Error ) {}
}

export type sourcesActions =
  | GetSourcesSuccess
  | GetSourcesError;
