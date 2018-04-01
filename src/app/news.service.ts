import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { News } from './news';

@Injectable()
export class NewsService {
  baseURL = 'http://www.menews.com/news-json.php';

  constructor(private http: Http) { }

  getItems(typ: string): Observable<News[]> {
    let items$ = this.http.get(
      `${this.baseURL}?type=${typ}`
    ).map(mapNews);
    return items$
  }

  getItemsStatic(): News[] {
    return [
      {
        'title': 'Karnataka election 2018: Kochi convention of South finmins to oppose Centre, may give Siddaramaiah a poll boost',
        'description': 'Karnataka election 2018: Kochi convention of South finmins to oppose Centre, may give Siddaramaiah a poll boost',
        'img': '<a href="https://timesofindia.indiatimes.com/india/karnataka-election-2018-kochi-convention-of-south-finmins-to-oppose-centre-may-give-siddaramaiah-a-poll-boost/articleshow/63552987.cms"><img border="0" hspace="10" align="left" style="margin-top:3px;margin-right:5px;" src="https://timesofindia.indiatimes.com/photo/63552987.cms" /></a>',
        'date': 'Saturday March 31, 2018',
        'link': 'https://timesofindia.indiatimes.com/india/karnataka-election-2018-kochi-convention-of-south-finmins-to-oppose-centre-may-give-siddaramaiah-a-poll-boost/articleshow/63552987.cms',
      },
      {
        'title': 'Karnataka election 2018: Kochi convention of South finmins to oppose Centre, may give Siddaramaiah a poll boost',
        'description': 'Karnataka election 2018: Kochi convention of South finmins to oppose Centre, may give Siddaramaiah a poll boost',
        'img': '<a href="https://timesofindia.indiatimes.com/india/karnataka-election-2018-kochi-convention-of-south-finmins-to-oppose-centre-may-give-siddaramaiah-a-poll-boost/articleshow/63552987.cms"><img border="0" hspace="10" align="left" style="margin-top:3px;margin-right:5px;" src="https://timesofindia.indiatimes.com/photo/63552987.cms" /></a>',
        'date': 'Saturday March 31, 2018',
        'link': 'https://timesofindia.indiatimes.com/india/karnataka-election-2018-kochi-convention-of-south-finmins-to-oppose-centre-may-give-siddaramaiah-a-poll-boost/articleshow/63552987.cms',
      },
    ];
  }
}

function mapNews(response: Response): News[] {
  console.log(response);
  let json = response.json();
  console.log(json);

  var result: News[] = [];
  for (let feed_set of json) {
    for (let feed of feed_set) {
      result.push(toNewsItem(feed));
    }
  }

  console.log(result);
  return result; 
}

function getSrc(img: string): string {
  var regex = /src=['"](.*)['"]\s/g;
  var arr = regex.exec(img);
  // console.log(arr[1]);
  return arr[1];
}

function toNewsItem(json: any): News {
  let item = <News>({
    title: json.title,
    description: json.desc,
    img: getSrc(json.img),
    date: json.date,
    link: json.link[0],
  });
  return item;
}
