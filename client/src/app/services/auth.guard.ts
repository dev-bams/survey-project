import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from  '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sessionService: SessionService, private router: Router) { }

  canActivate(): boolean {
    if (this.sessionService.isLoggedIn()) {
       // User is logged in, allow access to the route
      return true;

    } else {
       // Redirect to the login page and prevent access to the route
      this.router.navigate(['/login']);
      return false;
    }
  }
}