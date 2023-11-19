import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-survey-update',
  templateUrl: './survey-update.component.html',
  styleUrl: './survey-update.component.css'
})
export class SurveyUpdateComponent extends BasePageComponent implements OnInit {
  survey: any;

  constructor (route: ActivatedRoute, httpService: HttpService) {
    super(route, httpService);
  }

  override ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get('id') ?? '';

    this.httpService.getSurvey(id).subscribe(
      (response: any[]) => {
        console.log(response);
        this.survey = response;
      },
      (error: any) => { console.log(error); });
  }
}