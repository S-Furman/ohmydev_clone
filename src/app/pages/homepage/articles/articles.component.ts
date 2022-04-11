import { Component, OnInit } from '@angular/core';
import {Article} from "./article/article.interface";
import {ArticlesService} from "../articles.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.getArticles().subscribe(articles => this.articles = articles);
  }


  public addArticle() {
    const article = {
      rating: 10,
      title: 'Docker - budowanie zoptymalizowanych obrazów',
      img: 'https://imgproxy.ohmydev.pl/o6G06Kxn2CNuFp-mdnEmAi37Yi3rCam7PVpZ6cXTkN8/pr:post_mini/plain/https://bucket.ohmydev.pl/images/posts/e0fccb7c0cbe6f057f686dbd285732a6.png',
      tags: ['docker', 'frontend', 'backend'],
      comments: 3,
      author: 'Szymon Furman',
      date: new Date(),
      community: 'Random',
    }
    this.articlesService.postArticle(article).subscribe(data => console.log(data));
  }
}
