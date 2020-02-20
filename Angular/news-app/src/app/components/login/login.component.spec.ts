import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
import { EditArticleFormComponent  } from '../edit-article-form/edit-article-form.component';
import { FilterComponent } from '../filter/filter.component';
import { FilterByTextPipe } from '../../shared/pipes/filter-by-text.pipe';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
      declarations: [
        LoginComponent,
        ArticlesListComponent,
        ArticleDetailsComponent,
        EditArticleFormComponent,
        FilterComponent,
        FilterByTextPipe
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
