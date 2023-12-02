import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrl: './account-create.component.css'
})
export class AccountCreateComponent extends BasePageComponent implements OnInit {
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  errorMessage: string = '';

  constructor (route: ActivatedRoute,
               httpService: HttpService,
               sessionService: SessionService,
               private router: Router) {
    super(route, httpService, sessionService);
  }

  override ngOnInit(): void {
    
  }

  isPasswordConfirmationValid(): boolean {
    return this.password.length != 0 && this.password === this.passwordConfirmation;
  }

  createAccount(): void {
    this.httpService.createAccount(this.email, this.password).subscribe(
      (response: any) => {
        console.log(response);
        this.sessionService.saveUser(this.email, this.password);

        // Redirect to the home page upon successful account creation
        this.router.navigate(['/home']);
      },
      (error: any) => { 
        this.errorMessage = 'An account with this email already exists. Please use a different email.';
        console.log(error); 
      });
  }

  // Reset showInvalidCredentials when the email or password is changed
  onEmailChange(): void {
    this.errorMessage = '';
  }

  onPasswordChange(): void {
    if (this.password === '' || this.passwordConfirmation === '' || this.password === this.passwordConfirmation) {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Password and confirmation password do not match.';
    }
  }
}