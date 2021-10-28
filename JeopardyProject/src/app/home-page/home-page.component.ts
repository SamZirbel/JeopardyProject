import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public question:(Question | null) = null;

  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
  }

  getQuestionForDisplay() {

    this.questionService.getQuestion().subscribe(
      (data:Question[]) => { this.question = data[0];
        
            },
      (error) => {
      this.question = null;
      }
    )

  }

}
