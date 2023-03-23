import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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

  constructor(
    public router: Router,
    private _activatedRoute: ActivatedRoute,
    private _title: Title
  ) {

  }

  ngOnInit(): void {
    if (window.innerWidth > 1280) this.smallScreen = false;
    else this.smallScreen = true;

    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        var rt = this.getChild(this._activatedRoute)
        rt.data.subscribe((data: any) => {
          this._title.setTitle(data.title)
        })
      }
    })
  }

  private getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }

  public onResize(e: any): void {
    if (e.target.innerWidth > 1208) this.smallScreen = false;
    else this.smallScreen = true;
  }

}
