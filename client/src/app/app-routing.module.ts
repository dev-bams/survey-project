import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { SurveyCreateComponent } from './pages/survey-create/survey-create.component';
import { SurveyResultsComponent } from './pages/survey-results/survey-results.component';
import { SurveyUpdateComponent } from './pages/survey-update/survey-update.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'survey', component: SurveyComponent, data: { title: 'Survey' } },
  { path: 'survey-create', component: SurveyCreateComponent, data: { title: 'Survey' } },
  { path: 'survey-results', component: SurveyResultsComponent, data: { title: 'Survey' } },
  { path: 'survey-update/:id', component: SurveyUpdateComponent, data: { title: 'Survey' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
