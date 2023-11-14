import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrl: './survey-results.component.css'
})
export class SurveyResultsComponent extends BasePageComponent implements OnInit {

  constructor (route: ActivatedRoute) {
    super(route);
  }

  override ngOnInit(): void {
    
  }
}