import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { EditArticleFormComponent } from './components/edit-article-form/edit-article-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles-list', pathMatch: 'full' },
  { path: 'articles-list', component: ArticlesListComponent },
  { path: 'article-details/:id', component: ArticleDetailsComponent },
  { path: 'edit/:id', component: EditArticleFormComponent },
  { path: 'create', component: EditArticleFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
