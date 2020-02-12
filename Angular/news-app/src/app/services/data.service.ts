import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiKey = 'e09036cd7e8d417db292088ad70ea084';
  constructor(private http: HttpClient) { }

  public getSources(): Observable<object> {
    return this.http.get<object>(`https://newsapi.org/v2/sources?apiKey=${this.apiKey}`);
  }

  public getArticles(id): Observable<object> {
    return this.http.get<object>(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${this.apiKey}`);
  }
}
