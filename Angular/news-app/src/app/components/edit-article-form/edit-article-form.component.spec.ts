import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticleFormComponent } from './edit-article-form.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';
import { FilterByTextPipe } from '../../shared/pipes/filter-by-text.pipe';

describe('EditArticleFormComponent', () => {
  let component: EditArticleFormComponent;
  let fixture: ComponentFixture<EditArticleFormComponent>;

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
      declarations: [ EditArticleFormComponent, ArticlesListComponent, ArticleDetailsComponent, FilterComponent, FilterByTextPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
