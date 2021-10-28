import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public question: (Question | null) = null;
  public answer:string = '';
  public result:any = null;

  public visibility:boolean = true;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }

  getQuestionForDisplay() {

    this.questionService.getQuestion().subscribe(
      (data: Question[]) => {
        this.question = data[0];
        this.visibility = true;
      },
      (error) => {
        this.question = null;
      }
    )

  }

  testAnswer(): any{
    
    if (this.question?.answer == this.answer) {
      console.log("true"); this.result = "correct" ;
      this.visibility = false;
    } else {
      console.log("false"); this.result = "incorrect";
      this.visibility = false;
    }
  }

}
