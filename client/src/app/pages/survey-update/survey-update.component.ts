import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

interface Question {
  id: Number;
  questionType: Number;
  questionText: String;
  options: String[];
}

@Component({
  selector: 'app-survey-update',
  templateUrl: './survey-update.component.html',
  styleUrl: './survey-update.component.css'
})
export class SurveyUpdateComponent extends BasePageComponent implements OnInit {
  id: any;
  surveyTitle: string = '';
  questions: Question[] = [];

  constructor (route: ActivatedRoute, httpService: HttpService) {
    super(route, httpService);
  }

  override ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get('id') ?? '';

    this.httpService.getSurvey(id).subscribe(
      (response: any) => {
        console.log(response);
        this.id = response._id;
        this.surveyTitle = response.title;
        this.questions = response.questions;
      },
      (error: any) => { console.log(error); });
  }

  addQuestion(): void {
    const newQuestion: Question = {
      id: this.questions.length + 1,
      questionType: 0, // Default type
      questionText: '',
      options: []
    };
    this.questions.push(newQuestion);
  }

  deleteQuestion(index: number): void {
    this.questions.splice(index, 1);
  }
  
  updateSurvey(): void {
    this.httpService.updateSurvey(this.id, this.surveyTitle, this.questions).subscribe(
      (response: any[]) => { console.log(response); },
      (error: any) => { console.log(error); });
  }

  onQuestionTypeChange(question: any): void {
    // Initialize options array if it doesn't exist
    if (!question.options) {
      question.options = ['']; // Initial option
    }
  }

  addOption(question: any): void {
    // Limit the number of options to 5
    if (question.options.length < 5) {
      question.options.push(''); // Add an empty option
    }
  }

  deleteOption(question: any, index: number): void {
    question.options.splice(index, 1); // Remove the selected option
  }
}