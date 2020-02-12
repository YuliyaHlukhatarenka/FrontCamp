import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as StoreActions from './store/actions';
import { IAppState } from './store/state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'news-app';
  constructor(
    private store: Store<IAppState>,
  ) { }
  public ngOnInit(): void {
    this.store.dispatch(new StoreActions.GetSources());
  }
}
