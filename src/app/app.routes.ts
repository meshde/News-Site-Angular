import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from "./news/news.component";

// Route config let's you map routes to components
const routes: Routes = [
  {
    path: 'news/:type',
    component: NewsComponent,
  },
  {
    path: '',
    redirectTo: '/news/home',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);


