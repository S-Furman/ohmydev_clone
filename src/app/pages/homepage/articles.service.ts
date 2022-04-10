import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Article} from "./articles/article/article.interface";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private url = 'https://ohmydev-clone-default-rtdb.europe-west1.firebasedatabase.app/.json';
  constructor(private http: HttpClient) { }


  public postArticle(article: Article) {
    return this.http.post(this.url, article);
  }

  public getArticles() {
    return this.http.get<{[key: string]: Article}>(this.url).pipe(map(res => {
      const newArr = [];
      for (const key in res) {
        res[key].key = key;
        newArr.push(res[key]);
      }
      return newArr;
    }) );
  }


}
