import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

// ########## Do not touch the pre-coded things ###################

export class HeaderNavBarComponent implements OnInit {

  public smallScreen: boolean = false;
  public sideNavStatus: boolean = false;

  constructor(
    private _sidenavService: SidenavService,
    public router: Router
  ) {

  }

  ngOnInit(): void {
    this._sidenavService.getSmallScreenStatus().subscribe((s: boolean) => this.smallScreen = s);
    this._sidenavService.getSideNavOpenStatus().subscribe((s: boolean) => this.sideNavStatus = s);
  }

  public onResize(e: any): void {
    if (e.target.innerWidth > 1280) this._sidenavService.setSmallScreenStatus(false);
    else this._sidenavService.setSmallScreenStatus(true);
  }

  public toggleSideNav(): void {
    if (this.sideNavStatus) this._sidenavService.setSideNavOpenStatus(false);
    else this._sidenavService.setSideNavOpenStatus(true);
  }
}
