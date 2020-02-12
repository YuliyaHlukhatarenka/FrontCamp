import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import * as StoreActions from '../../store/actions';
import { ISource } from '../../shared/entities/source';
import { IArticle } from '../../shared/entities//article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  public sources: ISource[];
  public articles: IArticle[];
  public filterBy: string;
  public isChecked: boolean;
  public userLogin: string;

  constructor(
    private store: Store<IAppState>,
    private router: Router,
  ) {
    this.filterBy = '';
    this.articles = [];
  }

  ngOnInit() {
    this.store.subscribe(res => {
      this.userLogin = res.userLogin;
      if (res.createdByMe) {
        this.articles = res.ownArticles;
      } else {
        this.articles = res.articles;
      }
    });
  }

  public applyFilterByText(str: string): void {
    this.filterBy = str;
  }

  public applyCreatedByMe(value: boolean): void {
    this.store.dispatch(new StoreActions.setCreatedByMe(value));
    if (value) {
      this.store.subscribe(res => { this.articles = res.ownArticles; });
    } else {
      this.store.subscribe(res => { this.articles = res.articles; });
    }
  }

  public onDelete(id) {
    this.store.dispatch( new StoreActions.DeleteArticle( {} as IArticle, id));
    this.store.subscribe(res => { this.articles = res.ownArticles; });
  }

  public openArticlePage(id) {
    this.router.navigate([`article-details/${id}`]);
  }

  public onEdit(id) {
    this.router.navigate([`edit/${id}`]);
  }

}











