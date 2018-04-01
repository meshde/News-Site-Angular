import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  typ: string;
  sub: any;
  news: News[] = [];

  constructor(private route: ActivatedRoute,
    private newsService: NewsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.typ = params['type'];
      this.newsService
        .getItems(this.typ)
        .subscribe(item => this.news = item);
    });
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
