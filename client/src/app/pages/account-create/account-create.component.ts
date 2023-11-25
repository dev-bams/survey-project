import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrl: './account-create.component.css'
})
export class AccountCreateComponent extends BasePageComponent implements OnInit {
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';

  constructor (route: ActivatedRoute, authService: HttpService) {
    super(route, authService);
  }

  override ngOnInit(): void {
    
  }

  createAccount(): void {
    // TODO
  }
}