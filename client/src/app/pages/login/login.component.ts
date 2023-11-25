import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends BasePageComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor (route: ActivatedRoute, authService: HttpService) {
    super(route, authService);
  }

  override ngOnInit(): void {
    
  }

  login(): void {
    this.httpService.auth(this.email, this.password).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => { console.log(error); });
  }
}