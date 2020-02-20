import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';

import { StoreModule } from '@ngrx/store';
import {
  sourcesReducer,
  selectedSourceReducer,
  createdByMeReducer,
  userReducer,
  articlesReducer,
  ownArticlesReducer } from '../../store/reducers';
import { AppRoutingModule } from '../../app-routing.module';
import { ArticlesListComponent } from '../articles-list/articles-list.component';
import { ArticleDetailsComponent } from '../article-details/article-details.component';
import { EditArticleFormComponent } from '../edit-article-form/edit-article-form.component';
import { FilterByTextPipe } from '../../shared/pipes/filter-by-text.pipe';
import { ReactiveFormsModule } from '@angular/forms';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
        sources: sourcesReducer,
        articles: articlesReducer,
        ownArticles: ownArticlesReducer,
        selectedSource: selectedSourceReducer,
        createdByMe: createdByMeReducer,
        userLogin: userReducer
      })
    ],
      declarations: [ FilterComponent, ArticlesListComponent, ArticleDetailsComponent, EditArticleFormComponent, FilterByTextPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
