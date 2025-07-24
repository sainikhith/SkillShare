import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard-component/dashboard-component';

export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard',
        component: DashboardComponent,
        canActivate: [] // Add any guards if necessary
    }
];
