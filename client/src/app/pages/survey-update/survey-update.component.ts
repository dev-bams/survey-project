// Type code that defines the components used in the Angular application

import { Component, OnInit } from '@angular/core'; 
// @component is decorator, 
// OnInit - Angular's lifecycle hooks, interface allows you to perform certain actions  
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { SessionService } from '../../services/session.service';

// Define the question interface
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

  constructor(route: ActivatedRoute, httpService: HttpService, sessionService: SessionService) {
    super(route, httpService, sessionService);
  }

  override ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get('id') ?? '';
// bring survey information about ID, SurveyTitle, Question
    this.httpService.getSurvey(id).subscribe(
      (response: any) => {
        console.log(response);
        this.id = response._id;
        this.surveyTitle = response.title;
        this.questions = response.questions;
      },
      (error: any) => { console.log(error); });
  }

  // a function for adding new question
  // 'newQuestion' - make new question object
  // 'questionType - basic question type set up
  // 'questionText - basic empty text set up
  // 'option' - set up basic option lists
  addQuestion(): void {
    const newQuestion: Question = {
      id: this.questions.length + 1,
      questionType: 0, // Default type
      questionText: '',
      options: []
    };
    this.questions.push(newQuestion);
  }

  // Delete a question
  deleteQuestion(index: number): void {
    this.questions.splice(index, 1);
  }

  updateSurvey(): void {
    this.httpService.updateSurvey(this.id, this.surveyTitle, this.questions).subscribe(
      (response: any[]) => { console.log(response); },
      (error: any) => { console.log(error); });
  }

  // Function called when question type changes
  onQuestionTypeChange(question: any): void {
    // Initialize options array if it doesn't exist
    if (!question.options) {
      question.options = ['']; // Initial option
    }
  }

  // if questions are less than 5, then make one more empty option
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