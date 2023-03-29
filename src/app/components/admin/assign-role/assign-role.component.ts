import { Component, OnInit, ViewChild } from '@angular/core';

const assignees = [
  { index: 1, name: 'Hydrogen', role: 1.0079, edit: 'H' },
  { index: 2, name: 'Helium', role: 4.0026, edit: 'He' },
  { index: 3, name: 'Lithium', role: 6.941, edit: 'Li' },
  { index: 4, name: 'Beryllium', role: 9.0122, edit: 'Be' },
  { index: 5, name: 'Boron', role: 10.811, edit: 'B' },
  { index: 6, name: 'Carbon', role: 12.0107, edit: 'C' },
  { index: 7, name: 'Nitrogen', role: 14.0067, edit: 'N' },
  { index: 8, name: 'Oxygen', role: 15.9994, edit: 'O' },
  { index: 9, name: 'Fluorine', role: 18.9984, edit: 'F' },
  { index: 10, name: 'Neon', role: 20.1797, edit: 'Ne' },
];
@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css'],
})
export class AssignRoleComponent implements OnInit {
  dataSource = assignees;
  displayedColumns: string[] = ['index', 'name', 'role', 'edit'];
  ngOnInit() {}
}
