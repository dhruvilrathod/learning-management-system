import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/models/interfaces';

@Component({
  selector: 'app-evaluation-table',
  templateUrl: './evaluation-table.component.html',
  styleUrls: ['./evaluation-table.component.css']
})
export class EvaluationTableComponent implements OnInit{

  public data!: Program;
  constructor () { }

  ngOnInit(): void {
    
  }

}
