import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  

    constructor(private http:HttpClient) { }
  
    getQuestion():Observable<Question[]>{
  
      return this.http.get("https://jservice.io/api/random") as Observable<Question[]>; 

  }

}
