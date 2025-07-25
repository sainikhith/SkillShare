import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard-component/dashboard-component';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: Home, canActivate: [] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [], // Add any guards if necessary
  },
];
