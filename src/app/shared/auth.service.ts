import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private router: Router) {}

  login(role: 'admin' | 'user') {
    localStorage.setItem('role', role);
    this.router.navigate(['/home']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('role'); // Check login
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'admin'; // Check admin
  }
}
