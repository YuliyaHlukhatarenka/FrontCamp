import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesListComponent } from './articles-list.component';
import { StoreModule } from '@ngrx/store';
import {
  sourcesReducer,
  selectedSourceReducer,
  createdByMeReducer,
  userReducer,
  articlesReducer,
  ownArticlesReducer } from '../../store/reducers';
import { AppRoutingModule } from '../../app-routing.module';
import { ArticleDetailsComponent } from '../article-details/article-details.component';
import { EditArticleFormComponent } from '../edit-article-form/edit-article-form.component';
import { FilterComponent } from '../filter/filter.component';
import { FilterByTextPipe } from '../../shared/pipes/filter-by-text.pipe';
import { ReactiveFormsModule } from '@angular/forms';


describe('ArticlesListComponent', () => {
  let component: ArticlesListComponent;
  let fixture: ComponentFixture<ArticlesListComponent>;

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
      declarations: [ ArticlesListComponent, ArticleDetailsComponent, EditArticleFormComponent, FilterComponent,
        FilterByTextPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
