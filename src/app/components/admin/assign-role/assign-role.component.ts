import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css'],
})
export class AssignRoleComponent implements OnInit {
  hide: boolean = false;
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

  onLogin() {
    if (!this.assignRoleForm.valid) {
      return;
    }
    console.log(this.assignRoleForm.value);
  }
}
