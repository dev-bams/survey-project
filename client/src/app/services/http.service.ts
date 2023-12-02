import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  createAccount(email: string, password: string) {
    return this.http.post(`${this.baseURL}/user/create`, { email: email, password: password });
  }

  auth(email: string, password: string) {
    return this.http.post(`${this.baseURL}/user/auth`, { email: email, password: password });
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