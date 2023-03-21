import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css'],
})
export class AssignRoleComponent implements OnInit {
  hide: boolean = false;
  privilages: {
    privilage: string;
  }[] = [
    { privilage: 'Program Activation' },
    { privilage: 'Talent Evaluation' },
    { privilage: 'Talent Approvals' },
    { privilage: 'Enrollment Approvals' },
    { privilage: 'Add Program' },
    { privilage: 'Add Trainer' },
  ];
  selectedOptions: string[] = [];
  assignRoleForm!: FormGroup;
  constructor() {}

  ngOnInit() {
    this.assignRoleForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSelectionChange(event: MatSelectionListChange) {
    this.selectedOptions = event.source.selectedOptions.selected.map(
      (option) => option.value
    );
  }

  onLogin() {
    if (!this.assignRoleForm.valid) {
      return;
    }
    console.log(this.assignRoleForm.value);
    return {
      email: this.assignRoleForm.value.email,
      password: this.assignRoleForm.value.password,
      privilages: this.selectedOptions,
    };
  }
}
