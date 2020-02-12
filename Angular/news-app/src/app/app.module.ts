import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FilterComponent } from './components/filter/filter.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { EditArticleFormComponent } from './components/edit-article-form/edit-article-form.component';
import { StoreModule, select } from '@ngrx/store';
import { sourcesReducer, selectedSourceReducer, createdByMeReducer, userReducer } from '../app/store/reducers';
import { articlesReducer } from '../app/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ActionsEffects } from './store/effects/actions.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { FilterByTextPipe } from './shared/pipes/filter-by-text.pipe';
import { ownArticlesReducer } from './store/reducers/ownArticles.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilterComponent,
    ArticlesListComponent,
    ArticleDetailsComponent,
    EditArticleFormComponent,
    FilterByTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      sources: sourcesReducer,
      articles: articlesReducer,
      ownArticles: ownArticlesReducer,
      selectedSource: selectedSourceReducer,
      createdByMe: createdByMeReducer,
      userLogin: userReducer
    }),
    EffectsModule.forRoot([ActionsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
