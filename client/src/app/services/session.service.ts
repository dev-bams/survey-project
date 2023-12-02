// session.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  isLoggedIn(): boolean {
    return sessionStorage.getItem('isLoggedIn') == '1';
  }

  // Save user data to sessionStorage
  saveUser(email: string, password: string): void {
    sessionStorage.setItem('isLoggedIn', '1');
    sessionStorage.setItem('userEmail', email);
    sessionStorage.setItem('userPassword', password);
  }

  // Get user data from sessionStorage
  getUser(): { email: string; password: string } | null {
    let email = sessionStorage.getItem('userEmail');
    let password = sessionStorage.getItem('userPassword');

    return email && password ? { email, password } : null;
  }

  // Clear user data from sessionStorage
  clearUser(): void {
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userPassword');
  }
}