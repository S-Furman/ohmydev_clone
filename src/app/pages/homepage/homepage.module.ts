import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    HomepageComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class HomepageModule { }
