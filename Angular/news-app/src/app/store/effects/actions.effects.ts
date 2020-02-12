import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import * as sourcesActions from '../actions/sources.actions';
import * as articlesActions from '../actions/articles.actions';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { ActionTypes } from '../constants';
import { IArticle } from 'src/app/shared/entities/article';
import { ISource } from 'src/app/shared/entities/source';
import { IData } from 'src/app/shared/entities/data';

@Injectable()
export class ActionsEffects {
  public error: Error;

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {
  }

  @Effect()
  public getSources$: Observable<Action> = this.actions$.pipe(
    ofType<sourcesActions.GetSources>(ActionTypes.GET_SOURCES),
    switchMap(() =>
      this.dataService
        .getSources()
        .pipe(map(data => new sourcesActions.GetSourcesSuccess((data as IData).sources as ISource[])),
          catchError(error => of(new sourcesActions.GetSourcesError(error))),
        )
    )
  );

  @Effect()
  public getArticles$: Observable<Action> = this.actions$.pipe(
    ofType<articlesActions.GetArticles>(ActionTypes.GET_ARTICLES),
    switchMap(({ payload }) =>
      this.dataService
        .getArticles(payload)
        .pipe(map(data => new articlesActions.GetArticlesSuccess((data as IData).articles as IArticle[])),
          catchError(error => of(new articlesActions.GetArticlesError(error))),
        )
    )
  );
}
