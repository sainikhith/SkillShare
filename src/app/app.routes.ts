import { Routes } from '@angular/router';
import { Login } from './features/account/login/login';
import { DashboardComponent } from './pages/dashboard-component/dashboard-component';
import { Home } from './pages/home/home';
import { authGuard } from './shared/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  { path: 'home', component: Home, canActivate: [authGuard] }
];
