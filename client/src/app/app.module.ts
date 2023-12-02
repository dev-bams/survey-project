import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { SurveyCreateComponent } from './pages/survey-create/survey-create.component';
import { SurveyUpdateComponent } from './pages/survey-update/survey-update.component';
import { SurveyResultsComponent } from './pages/survey-results/survey-results.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountCreateComponent } from './pages/account-create/account-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SurveyComponent,
    SurveyCreateComponent,
    SurveyUpdateComponent,
    SurveyResultsComponent,
    BasePageComponent,
    LoginComponent,
    AccountCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
