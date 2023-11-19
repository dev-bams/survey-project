import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getSurveys(): any {
    return this.http.get(`${this.baseURL}/survey`);
  }
  
  getSurvey(id: string): any {
    return this.http.get(`${this.baseURL}/survey/edit/${id}`);
  }
  
  createSurvey(id: any): any {
    return this.http.post(`${this.baseURL}/survey/edit`, { params : { id: id } });
  }
  
  editSurvey(id: string): any {
    return this.http.post(`${this.baseURL}/survey/edit`, { params : { id: id } });
  }
  
  deleteSurvey(id: string): any {
    return this.http.get(`${this.baseURL}/survey/delete/${id}`);
  }
}