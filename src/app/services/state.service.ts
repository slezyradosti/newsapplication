import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private articlesSource = new BehaviorSubject<any[]>([]);
  currentArticles = this.articlesSource.asObservable();

  constructor() {}

  updateArticles(articles: any[]) {
    this.articlesSource.next(articles);
  }
}
