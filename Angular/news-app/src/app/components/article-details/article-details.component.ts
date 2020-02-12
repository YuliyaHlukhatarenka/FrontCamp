import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { IArticle } from '../../shared/entities//article';
import { Router } from '@angular/router';
import * as StoreActions from '../../store/actions';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  private id: number;
  public article: IArticle;
  public ownArticle: boolean;
  public userLogin: string;

  constructor(private store: Store<IAppState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.store.subscribe(res => {
      this.article = res.articles[this.id as number];
      this.userLogin = res.userLogin;
    });
  }

  public onOpenAll() {
    this.router.navigate(['articles-list']);
  }

  public onEdit() {
    this.router.navigate([`edit/${this.id}`]);
  }

  public onDelete() {
    this.store.dispatch( new StoreActions.DeleteArticle( {} as IArticle, this.id))
  }
}
