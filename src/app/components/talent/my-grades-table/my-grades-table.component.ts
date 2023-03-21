import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  trainer: string;
}
const TRAINERS: string[] = [
 'Rachir sir',
 'Pradip sir',
 'Ruchit sir',
 'Bharat sir',
 'Gagan sir',
 'Umang sir'
];
const NAMES: string[] = [
  'UI',
  'Devops',
  'Java',
  'QA',
  'Product management',
  'HR'
];
@Component({
  selector: 'app-my-grades-table',
  templateUrl: './my-grades-table.component.html',
  styleUrls: ['./my-grades-table.component.css']
})
export class MyGradesTableComponent {
  displayedColumns: string[] = ['id', 'name', 'trainer','progress','download'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    trainer: TRAINERS[Math.round(Math.random() * (TRAINERS.length - 1))],
  };
}




