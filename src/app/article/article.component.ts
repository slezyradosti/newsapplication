import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../services/state.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article: Article | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private stateService: StateService
  ) {}

  ngOnInit() {
    const articleId = this.route.snapshot.paramMap.get('id');
    this.stateService.currentArticles.subscribe((articles) => {
      this.article = articles.find((a) => a.id === +articleId!);
    });
  }
}
