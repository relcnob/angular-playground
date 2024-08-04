import { Routes } from '@angular/router';
import { UserComponent } from './app-user/user.component';
import { HomeComponent } from './app-home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home page',
    component: HomeComponent,
  },
  {
    path: 'user',
    title: 'User page',
    component: UserComponent,
  },
];
