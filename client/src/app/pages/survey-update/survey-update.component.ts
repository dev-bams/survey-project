import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-update',
  templateUrl: './survey-update.component.html',
  styleUrl: './survey-update.component.css'
})
export class SurveyUpdateComponent extends BasePageComponent implements OnInit {

  constructor (route: ActivatedRoute) {
    super(route);
  }

  override ngOnInit(): void {
    
  }
}