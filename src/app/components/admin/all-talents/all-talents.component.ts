import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



export interface UserData {
  id: string;
  name: string;
  email: string;
  program: string;
}

/** Constants used to fill up our data base. */
const EMAIL: string[] = [
  'Maia@gmail.com',
  'Asher@gmail.com',
  'Olivia@gmail.com',
  'Atticus@gmail.com',
  'Amelia@gmail.com',
  'Jack@gmail.com',
  'Charlotte@gmail.com',
  'Theodore@gmail.com',
  'Isla@gmail.com',
  'Oliver@gmail.com',
  'Isabella@gmail.com',
  'Jasper@gmail.com',
  'Cora@gmail.com',
  'Levi@gmail.com',
  'Violet@gmail.com',
  'Arthur@gmail.com',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

const PROGRAMS : string[] = [
  'Motivational Training',
  'Public Speaking',
  'NextJs',
  'TypeScript',
  'Project Management',
  'Work Ethics',
  'Time Management'
]
@Component({
  selector: 'app-all-talents',
  templateUrl: './all-talents.component.html',
  styleUrls: ['./all-talents.component.css']
})

export class AllTalentsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'program', 'edit/delete'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    program: PROGRAMS[Math.round(Math.random() * (PROGRAMS.length - 1))],
    email: EMAIL[Math.round(Math.random() * (EMAIL.length - 1))],
  };
}