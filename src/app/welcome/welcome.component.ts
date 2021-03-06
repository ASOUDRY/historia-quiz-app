import { Component } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  quizList = [];
  constructor(private questionsService: QuestionsService) {
    this.questionsService.getQuizzes().subscribe(value => { 
      console.log(value) 
    value.forEach(data => this.quizList.push(data))
    this.quizList.forEach(data => {console.log(data)})
    } );
}
}