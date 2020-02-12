import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IArticle } from '../../shared/entities//article';
import { IAppState } from '../../store/state/app.state';
import * as StoreActions from '../../store/actions';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LOGGED_USER_DETAILS } from '../../shared/constants';

@Component({
  selector: 'app-edit-article-form',
  templateUrl: './edit-article-form.component.html',
  styleUrls: ['./edit-article-form.component.scss']
})
export class EditArticleFormComponent implements OnInit {
  private author: string;
  public activePage = 'edit';
  private id: number;
  private activeArticle: IArticle;

  articleForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    content: new FormControl('', [Validators.required]),
    urlToImage: new FormControl(''),
    publishedAt: new FormControl(''),
    author: new FormControl('', [Validators.required]),
    sourceUrl: new FormControl('', [Validators.required]),
  });

  constructor(
    private store: Store<IAppState>,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.store.subscribe(res => { this.author = res.userLogin; });
  }

  ngOnInit() {
    if (this.router.routerState.snapshot.url === '/create') {
      this.activePage = 'create';
      this.articleForm.patchValue({
        author: `${this.author}`,
        publishedAt: new Date().toISOString().slice(0, 19),
        sourceUrl: LOGGED_USER_DETAILS.sourceUrl,
        content: 'winter is greate!',
      });
    } else {
      this.activePage = 'edit';
      this.id = this.route.snapshot.params['id'];
      this.store.subscribe(res => {
        this.activeArticle = res.ownArticles[this.id];
        this.articleForm.patchValue({
          title: this.activeArticle.title,
          description: this.activeArticle.description,
          urlToImage: this.activeArticle.urlToImage,
          author: this.activeArticle.author,
          publishedAt: this.activeArticle.publishedAt,
          sourceUrl: this.activeArticle.sourceUrl,
          content: this.activeArticle.content,
        });
      });
    }
  }

  public onSubmit(): void {
    this.articleForm.patchValue({
      publishedAt: new Date().toISOString().slice(0, 19),
    });
    const acticle: IArticle = {
      ...this.articleForm.value,
    };
    if (this.activePage === 'edit') {
      this.store.dispatch(new StoreActions.UpdateArticle(acticle, this.id));
    } else {
      this.store.dispatch(new StoreActions.AddArticle(acticle));

    }

    this.location.back();
  }

  onCancel() {
    this.location.back();
  }

}
