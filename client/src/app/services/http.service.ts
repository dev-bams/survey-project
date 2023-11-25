import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  isAuthenticated(): boolean {
    return false;
  }

  auth(email: string, password: string) {
    return this.http.post(`${this.baseURL}/survey/auth`, { email: email, questions: password });
  }

  getSurveys(): any {
    return this.http.get(`${this.baseURL}/survey`);
  }
  
  getSurvey(id: string): any {
    return this.http.get(`${this.baseURL}/survey/update/${id}`);
  }
  
  createSurvey(title: string, questions: any): any {
    return this.http.post(`${this.baseURL}/survey/create`, { title: title, questions: questions });
  }
  
  updateSurvey(id: any, title: string, questions: any): any {
    return this.http.post(`${this.baseURL}/survey/update`, { id: id, title: title, questions: questions });
  }
  
  deleteSurvey(id: string): any {
    return this.http.get(`${this.baseURL}/survey/delete/${id}`);
  }
}