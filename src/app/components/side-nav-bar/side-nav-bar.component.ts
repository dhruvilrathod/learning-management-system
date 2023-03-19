import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})

// ######################## Do not precoded things #######################

export class SideNavBarComponent implements OnInit {

  @ViewChild('sideNavDrawer')
  sideNav!: MatDrawer;

  public links = [
    {
      route: '/my-programs',
      name: 'My Programs',
      isActive: false
    },
    {
      route: '/my-grades',
      name: 'My Grades',
      isActive: false
    },
    {
      route: '/program-activation',
      name: 'Program Activation',
      isActive: false
    },
    {
      route: '/evaluation',
      name: 'Talent Evaluation',
      isActive: false
    },
    {
      route: '/dashboard-home',
      name: 'Home',
      isActive: false
    },
    {
      route: '/all-talents',
      name: 'All Talents',
      isActive: false
    },
    {
      route: '/all-trainers',
      name: 'All Trainers',
      isActive: false
    },
    {
      route: '/all-programs',
      name: 'All Programs',
      isActive: false
    },
    {
      route: '/talent-approvals',
      name: 'Talent Approvals',
      isActive: false
    },
    {
      route: '/enrollment-approvals',
      name: 'Enrollment Approvals',
      isActive: false
    },
    {
      route: '/add-program',
      name: 'Add Program',
      isActive: false
    },
    {
      route: '/add-trainer',
      name: 'Add Trainer',
      isActive: false
    },
    {
      route: '/settings',
      name: 'Settings',
      isActive: false
    },
    {
      route: '/assign-role',
      name: 'Role Assignment',
      isActive: false
    }
  ]

  public smallScreen: boolean = false;
  public sideNavOpened: boolean = false;

  constructor(
    private _sidenavService: SidenavService,
    private _router: Router
  ) {

  }

  ngOnInit(): void {
    this._router.events.forEach((e: any) => {
      if (e instanceof NavigationEnd)
        this.links.map((d, i) => {
          if (this._router.url == d.route) this.links[i].isActive = true;
          else this.links[i].isActive = false
        });
      if (this.smallScreen)
        this.sideNavOpened = false;
    });

    this._sidenavService.getSmallScreenStatus().subscribe((s: boolean) => {
      if (s) {
        this.sideNavOpened = false;
        this._sidenavService.setSideNavOpenStatus(false);
      }
      else {
        this.sideNavOpened = true;
        this._sidenavService.setSideNavOpenStatus(true);
      }
      this.smallScreen = s;
    });

  }

  ngAfterViewInit() {
    this.sideNav.openedChange.subscribe((s: boolean) => {
      if (s == false) this._sidenavService.setSideNavOpenStatus(false);
    });
    this._sidenavService.getSideNavOpenStatus().subscribe((s: boolean) => this.sideNavOpened = s);
  }
}
