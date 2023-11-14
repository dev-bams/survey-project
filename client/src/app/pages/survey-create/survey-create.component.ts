import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrl: './survey-create.component.css'
})
export class SurveyCreateComponent extends BasePageComponent implements OnInit {

  constructor (route: ActivatedRoute) {
    super(route);
  }

  override ngOnInit(): void {
    
  }
}