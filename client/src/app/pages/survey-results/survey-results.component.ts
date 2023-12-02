import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrl: './survey-results.component.css'
})
export class SurveyResultsComponent extends BasePageComponent implements OnInit {

  constructor (route: ActivatedRoute, httpService: HttpService, sessionService: SessionService) {
    super(route, httpService, sessionService);
  }

  override ngOnInit(): void {
    
  }
}