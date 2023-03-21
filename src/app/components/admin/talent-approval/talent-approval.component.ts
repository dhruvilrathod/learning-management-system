import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {MatDialog} from '@angular/material/dialog';

export interface UserData {
  id: number;
  name: string;
  program: string;
  email: string;
}

/** Constants used to fill up our data base. */
const PROGRAM: string[] = [
  'Program 1',
  'Program 2',
  'Program 3',
  'Program 4',
  'Program 5',
];
const NAMES: string[] = [
  'Disha',
  'Jaimini',
  'Nandini'
];
const EMAIL: string[] = [
  'disha@gmail.com',
  'jaimini@gmail.com',
  'nandini@gmail.com',
]

@Component({
  selector: 'app-talent-approval',
  templateUrl: './talent-approval.component.html',
  styleUrls: ['./talent-approval.component.css'],
})
export class TalentApprovalComponent implements AfterViewInit {
  displayedColumns: string[] = ['select','id', 'name', 'email', 'fruit'];
  dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // approve(){
  //   console.log("approve")
  // }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  // selectVaue(){
  //   let checkValue = this.dataSource.data.values
  //   let checkId = this.selection.selected;
  //   console.log(checkValue)
  //   return true
  // }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: UserData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`; 
  }

 

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

    
  }
  approve() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
    NAMES[Math.round(Math.random() * (NAMES.length - 1))]

  return {
    id: id,
    name: name,
    email: EMAIL[Math.round(Math.random() * (EMAIL.length - 1))],
    program: PROGRAM[Math.round(Math.random() * (PROGRAM.length - 1))],
  };
}

@Component({
  selector: 'app-dialog-approve',
  templateUrl: 'dialog-approve.component.html',
  styleUrls: ['./talent-approval.component.css'],
})
export class DialogContentExampleDialog {}