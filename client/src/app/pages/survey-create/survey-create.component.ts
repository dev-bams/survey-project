import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrl: './survey-create.component.css'
})
export class SurveyCreateComponent extends BasePageComponent implements OnInit {

  constructor (route: ActivatedRoute, httpService: HttpService) {
    super(route, httpService);
  }

  override ngOnInit(): void {
    
  }
  
  
  createSurvey(id: string): void {
    this.httpService.createSurvey(id).subscribe(
      (response: any[]) => { console.log(response); },
      (error: any) => { console.log(error); });
  }
}