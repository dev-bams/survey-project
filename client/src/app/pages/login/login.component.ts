import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends BasePageComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor (route: ActivatedRoute,
               httpService: HttpService,
               sessionService: SessionService,
               private router: Router) {
    super(route, httpService, sessionService);
  }

  override ngOnInit(): void {
    let user = this.sessionService.getUser();
    if (user) {
      this.email = user.email;
      this.password = user.password;
    }
  }

  login(): void {
    this.httpService.auth(this.email, this.password).subscribe(
      (response: any) => {
        console.log(response);
        this.sessionService.saveUser(this.email, this.password);
        
        // Redirect to the home page upon successful login
        this.router.navigate(['/']);
      },
      (error: any) => { console.log(error); });
  }
}