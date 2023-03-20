import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  email: number;
  program: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', email: 1.0079, program: 'H'},
  {position: 2, name: 'Helium', email: 4.0026, program: 'He'},
  {position: 3, name: 'Lithium', email: 6.941, program: 'Li'},
  {position: 4, name: 'Beryllium', email: 9.0122, program: 'Be'},
  {position: 5, name: 'Boron', email: 10.811, program: 'B'},
  {position: 6, name: 'Carbon', email: 12.0107, program: 'C'},
  {position: 7, name: 'Nitrogen', email: 14.0067, program: 'N'},
  {position: 8, name: 'Oxygen', email: 15.9994, program: 'O'},
  {position: 9, name: 'Fluorine', email: 18.9984, program: 'F'},
  {position: 10, name: 'Neon', email: 20.1797, program: 'Ne'},
];
@Component({
  selector: 'app-all-talents',
  templateUrl: './all-talents.component.html',
  styleUrls: ['./all-talents.component.css']
})

export class AllTalentsComponent {
  displayedColumns: string[] = ['position', 'name', 'email', 'program', 'edit/delete'];
  dataSource = ELEMENT_DATA;
}
