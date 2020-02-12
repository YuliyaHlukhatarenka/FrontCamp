import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import * as StoreActions from '../../store/actions';
import { ISource } from '../../shared/entities/source';
import { IArticle } from '../../shared/entities//article';
import { Router } from '@angular/router';
import { SELECT_SOURCE_DEFAULT } from '../../shared/constants';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() applyFilterByText: EventEmitter<Event> = new EventEmitter();
  @Output() applyCreatedByMe: EventEmitter<Event> = new EventEmitter();
  public sources: ISource[];
  public articles: IArticle[];
  public title: string;
  public selectedSource: string;

  public isChecked: boolean;

  constructor(
    private store: Store<IAppState>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.store.subscribe(res => {
      this.sources = res.sources;
      const selectedSource = res.selectedSource;
      this.selectedSource = selectedSource;
      if ( selectedSource !== SELECT_SOURCE_DEFAULT) {
        this.title = selectedSource;
      } else {
        this.title = '';
      }
      this.isChecked = res.createdByMe;
     });
  }

  public selectSource(e): void {
    this.title = e.target.value;
    this.store.dispatch(new StoreActions.SetSelectedSource(e.target.value));
    this.store.dispatch(new StoreActions.GetArticles(e.target.value));
    if (this.isChecked) {
      this.store.dispatch(new StoreActions.setCreatedByMe(false));
    }
  }

  public filterNewsByText(e): void {
    this.applyFilterByText.emit(e.target.value);
  }

  filterCreatedByMe(e): void {
    this.applyCreatedByMe.emit(e.target.checked);
  }

  addNewArticle(): void {
      this.router.navigate(['/create']);
  }
}
