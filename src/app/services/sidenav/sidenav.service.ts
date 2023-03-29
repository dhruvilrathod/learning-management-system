import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private smallScreenObservable$: BehaviorSubject<boolean>;
  private sideNavOpenObservable$: BehaviorSubject<boolean>;

  constructor() {
    if (window.innerWidth > 1280) {
      this.smallScreenObservable$ = new BehaviorSubject<boolean>(false);
      this.sideNavOpenObservable$ = new BehaviorSubject<boolean>(true);
    }
    else {
      this.smallScreenObservable$ = new BehaviorSubject<boolean>(true);
      this.sideNavOpenObservable$ = new BehaviorSubject<boolean>(false);
    }
  }

  public getSmallScreenStatus(): Observable<boolean> {
    return this.smallScreenObservable$.asObservable();
  }

  public setSmallScreenStatus(s: boolean): void {
    this.smallScreenObservable$.next(s);
  }

  public getSideNavOpenStatus(): Observable<boolean> {
    return this.sideNavOpenObservable$.asObservable();
  }

  public setSideNavOpenStatus(s: boolean): void {
    this.sideNavOpenObservable$.next(s);
  }
}
