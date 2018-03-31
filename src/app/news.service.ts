import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable()
export class NewsService {

  constructor() { }

  getItems(): News[] {
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
