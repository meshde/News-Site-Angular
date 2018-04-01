import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouterModule } from './app.routes';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouterModule,
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
