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
  public showHeaderNavBar: boolean = false;
  public showSideNavBar: boolean = false;
  public showRouterOutlet: boolean = false;

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
        console.log(this.router.url);
        if(this.router.url !== '/login' && this.router.url !== '/sign-up' && this.router.url !== '/course-details' && this.router.url !== '/error-page' && this.router.url !== '/reset-password' && this.router.url !== '/program-details' && this.router.url !== '/') {
          this.showSideNavBar = true;
        }
        else this.showSideNavBar = false;
        
        if(this.router.url !== '/login' && this.router.url !== '/sign-up') this.showHeaderNavBar = true;
        else this.showHeaderNavBar = false;

        if(this.router.url.includes('/reset-password')) {
          this.showHeaderNavBar = false;
          this.showSideNavBar = false;
        }

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
