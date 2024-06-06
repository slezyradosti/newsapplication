import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { StateService } from '../services/state.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  searchKeyword: string = '';

  constructor(
    private articleService: ArticleService,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe((data: any[]) => {
      data.forEach((element) => {
        element.publishedAt = new Date(element.publishedAt.split('T')[0]);
        element.updatedAt = new Date(element.updatedAt.split('T')[0]);
      });

      this.articles = data;
      this.filteredArticles = data;
      this.stateService.updateArticles(data);
      console.log(data);
      console.log(data[0].imageUrl);
    });
  }

  filterArticles() {
    const keyword = this.searchKeyword.toLowerCase();
    this.filteredArticles = this.articles.filter((article) => {
      const truncatedSummary = article.summary.slice(0, 100).toLowerCase();
      return (
        article.title.toLowerCase().includes(keyword) ||
        truncatedSummary.includes(keyword)
      );
    });
  }
}
