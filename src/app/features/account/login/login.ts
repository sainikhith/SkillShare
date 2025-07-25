import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/auth.service';
import { Role } from '../../../shared/models/user';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  template: `
    <h2>🔐 Login</h2>
    <input [(ngModel)]="email" placeholder="Email" />
    <input [(ngModel)]="password" placeholder="Password" type="password" />
    <select [(ngModel)]="role">
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
    <button (click)="login()">Login</button>
  `,
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService);
  role: Role = Role.USER;
  email = '';
  password = '';

  login() {
    this.authService.login(this.role);
  }
}
