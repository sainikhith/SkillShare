import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('role');
  if (role) {
    return role === 'admin';
  }
  return false;
};