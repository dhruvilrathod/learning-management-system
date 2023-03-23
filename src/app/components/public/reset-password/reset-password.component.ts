import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  private token!: string;
  public passwordResetForm: FormGroup = this._buildForm();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((p: any) => {
      this.token = p.token;
    });
    console.log(this.token);
  }

  private _buildForm(): FormGroup {
    return this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });
  }

  public setNewPassword(formData: FormGroup): void {
    console.log(formData);
    if (this.passwordResetForm.get('password')?.value !== this.passwordResetForm.get('confirmPassword')?.value) {
      this.passwordResetForm.get('confirmPassword')?.setErrors({ passwordMatch: false });
      return;
    }
    else {
      console.log('success');
      var obj: any = {};
      for (var c in formData.controls) {
        if (c !== 'confirmPassword')
          obj[c] = formData.controls[c].value;
      }
      obj.token = this.token;
      // post this object
      console.log(obj);
    }
  }
}
