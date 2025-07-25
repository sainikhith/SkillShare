import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(role: 'admin' | 'user') {
    localStorage.setItem('role', role); // Save user role
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('role'); // Check login
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'admin'; // Check admin
  }
}