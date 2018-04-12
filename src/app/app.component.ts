import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { filter, takeUntil } from 'rxjs/operators';

import { Window } from './core/window/window-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  ngUnsubscribe$: Subject<void> = new Subject<void>();

  constructor(private router: Router, @Inject(Window) private window: Window) {}

  ngOnInit() {
    this.router.events
      .pipe(
        takeUntil(this.ngUnsubscribe$),
        filter(ev => ev instanceof NavigationEnd)
      )
      .subscribe(() => this.window.scrollTo(0, 0));
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
