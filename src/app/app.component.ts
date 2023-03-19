import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent implements OnInit {
  title = 'learning-management-system';

  public smallScreen: boolean = false;

  constructor(public router: Router) {

  }

  ngOnInit(): void {
    if (window.innerWidth > 1280) this.smallScreen = false;
    else this.smallScreen = true;
  }

  public onResize(e: any): void {
    if (e.target.innerWidth > 1208) this.smallScreen = false;
    else this.smallScreen = true;
  }

}
