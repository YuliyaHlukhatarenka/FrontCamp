import { Pipe, PipeTransform } from '@angular/core';
import { IArticle } from '../entities/article';

@Pipe({
  name: 'filterByText'
})
export class FilterByTextPipe implements PipeTransform {

  transform(articles: IArticle[], substr: string): any {
    return articles.filter( el => el.title.includes(substr));
  }

}
