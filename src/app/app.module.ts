import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./core/header/header.component";
import {ThemeSwitchComponent} from "./core/header/theme-switch/theme-switch.component";
import {HomepageModule} from "./pages/homepage/homepage.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
