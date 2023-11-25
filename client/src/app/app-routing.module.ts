import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountCreateComponent } from './pages/account-create/account-create.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { SurveyCreateComponent } from './pages/survey-create/survey-create.component';
import { SurveyResultsComponent } from './pages/survey-results/survey-results.component';
import { SurveyUpdateComponent } from './pages/survey-update/survey-update.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' }, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'account-create', component: AccountCreateComponent, data: { title: 'Account' } },
  { path: 'survey', component: SurveyComponent, data: { title: 'Survey' }, canActivate: [AuthGuard] },
  { path: 'survey-create', component: SurveyCreateComponent, data: { title: 'Survey' }, canActivate: [AuthGuard] },
  { path: 'survey-results', component: SurveyResultsComponent, data: { title: 'Survey' }, canActivate: [AuthGuard] },
  { path: 'survey-update/:id', component: SurveyUpdateComponent, data: { title: 'Survey' }, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
