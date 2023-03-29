import { Component, OnInit, ViewChild } from '@angular/core';

const ELEMENT_DATA = [
  { index: 1, name: 'Hydrogen', role: 1.0079, Edit: 'H' },
  { index: 2, name: 'Helium', role: 4.0026, Edit: 'He' },
  { index: 3, name: 'Lithium', role: 6.941, Edit: 'Li' },
  { index: 4, name: 'Beryllium', role: 9.0122, Edit: 'Be' },
  { index: 5, name: 'Boron', role: 10.811, Edit: 'B' },
  { index: 6, name: 'Carbon', role: 12.0107, Edit: 'C' },
  { index: 7, name: 'Nitrogen', role: 14.0067, Edit: 'N' },
  { index: 8, name: 'Oxygen', role: 15.9994, Edit: 'O' },
  { index: 9, name: 'Fluorine', role: 18.9984, Edit: 'F' },
  { index: 10, name: 'Neon', role: 20.1797, Edit: 'Ne' },
];
@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css'],
})
export class AssignRoleComponent implements OnInit {
  ngOnInit() {}

  displayedColumns: string[] = ['position', 'name', 'role', 'Edit'];
  dataSource = ELEMENT_DATA;
}
