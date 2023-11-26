import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: string = '';

  constructor(private sessionService: SessionService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(this.refreshInfo);

    // Initial refresh
    this.refreshInfo();
  }

  logout(): void {
    this.email = '';
    this.sessionService.clearUser();
    this.router.navigate(['/login']);
  }

  refreshInfo(): void {
    let user = this.sessionService.getUser();
    if (user) {
      this.email = user.email;
    }
  }
}
