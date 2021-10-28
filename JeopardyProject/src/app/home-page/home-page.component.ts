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
  public score:any = 0;

  public visibility:boolean = true;
  public answerStatus:boolean = true;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }

  getQuestionForDisplay() {

    this.questionService.getQuestion().subscribe(
      (data: Question[]) => {
        this.question = data[0];
        this.visibility = true;
        this.answerStatus = true;
        console.log(this.question.answer);
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
      this.score += this.question.value;
      this.answerStatus = false;
    } else {
      console.log("false"); this.result = "incorrect";
      this.visibility = false;

      this.answerStatus = false;

      this.score = this.score;
      console.log(this.score);

    }
  }

}
