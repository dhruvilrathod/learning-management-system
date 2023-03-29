import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { assignees } from './assignee';

// @ViewChild('paginator') paginator: MatPaginator;
@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css'],
})
export class AssignRoleComponent implements OnInit {
  dataSource = assignees;
  displayedColumns: string[] = ['index', 'name', 'role', 'edit'];
  ngOnInit() {
    const assigneesList = assignees;
  }
}
