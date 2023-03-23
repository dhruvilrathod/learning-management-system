import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  private token!: string; 

  constructor(
    private _activatedRoute:ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((p: any) => {
      this.token = p.token;
      console.log(this.token);
    })
  }

}
