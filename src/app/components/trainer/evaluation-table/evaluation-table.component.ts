import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-evaluation-table',
  templateUrl: './evaluation-table.component.html',
  styleUrls: ['./evaluation-table.component.css']
})
export class EvaluationTableComponent implements OnInit {

  displayedColumns: string[] = ['programID', 'programTitle', 'trainers', 'skillsList', 'evaluate'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _http: HttpClient
  ){}

  ngOnInit(): void {
    this._http.get('./assets/programs.json').subscribe((d: any) => {
      console.log(d);
      this.dataSource = new MatTableDataSource(d);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;  
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // evaluateFor(programID: string): void {
  //   console.log(programID);
  // }
}