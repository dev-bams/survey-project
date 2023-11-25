import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: HttpService, private router: Router) { }

  canActivate(): boolean {
    console.log('################## 0');
    if (this.authService.isAuthenticated()) {
       // User is authenticated, allow access to the route
      console.log('################## 1');
      return true;

    } else {
      console.log('################## 2');
       // Redirect to the login page and prevent access to the route
      this.router.navigate(['/login']);
      return false;
    }
  }
}