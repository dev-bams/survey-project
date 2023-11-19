import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent extends BasePageComponent implements OnInit {

  constructor (route: ActivatedRoute, httpService: HttpService) {
    super(route, httpService);
  }

  override ngOnInit(): void {
    
  }
}
