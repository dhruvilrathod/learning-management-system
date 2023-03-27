import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluate-talents',
  templateUrl: './evaluate-talents.component.html',
  styleUrls: ['./evaluate-talents.component.css']
})
export class EvaluateTalentsComponent {
  public selectedProgram: string = '';

  constructor(
    public router: Router
  ) { }

  public programSelected(programID: string) {
    console.log(programID);
    this.selectedProgram = programID;
  }
}
