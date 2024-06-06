import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'https://api.spaceflightnewsapi.net/v3/articles';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
