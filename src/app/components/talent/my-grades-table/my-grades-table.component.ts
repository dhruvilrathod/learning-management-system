import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface UserData {
  programID: string;
  programTitle: string;
  progressList: string;
  trainers: string;
}

@Component({
  selector: 'app-my-grades-table',
  templateUrl: './my-grades-table.component.html',
  styleUrls: ['./my-grades-table.component.css']
})
export class MyGradesTableComponent {
  loading:boolean = true;

  displayedColumns: string[] = ['programID','programTitle','skills','overallgrades','download'];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor( private _http: HttpClient){
  }

  ngOnInit(): void {
    this._http.get('https://jsonplaceholder.typicode.com/todos').subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading = false;  
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}





