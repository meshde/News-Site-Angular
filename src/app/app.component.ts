import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menews.com';
  types = [
    {'name': 'India', 'url': 'india'},
    {'name': 'Business', 'url': 'business'},
    {'name': 'World', 'url': 'world'},
    {'name': 'Health', 'url': 'health'},
    {'name': 'Sports', 'url': 'sports'},
  ];
}
