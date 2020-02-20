import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleDetailsComponent } from './article-details.component';
import { NgModule } from '@angular/core';
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
import { EditArticleFormComponent } from '../edit-article-form/edit-article-form.component';
import { FilterByTextPipe } from '../../shared/pipes/filter-by-text.pipe';
import { FilterComponent } from '../filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ArticleDetailsComponent', () => {
  let component: ArticleDetailsComponent;
  let fixture: ComponentFixture<ArticleDetailsComponent>;

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

      declarations: [ ArticleDetailsComponent, ArticlesListComponent, EditArticleFormComponent, FilterByTextPipe,
       FilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
