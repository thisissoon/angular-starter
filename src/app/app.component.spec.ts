import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Window } from './core/window/window-token';
import { AppComponent } from './app.component';
import { Router, NavigationEnd } from '@angular/router';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  const mockWindow = {
    scrollTo: jasmine.createSpy('scrollTo')
  };
  const mockRouter = {
    events: new Subject()
  };

  beforeEach(
    async(() =>
      TestBed.configureTestingModule({
        providers: [
          { provide: Window, useValue: mockWindow },
          { provide: Router, useValue: mockRouter }
        ],
        schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
        declarations: [AppComponent]
      }).compileComponents()
    )
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(
    'should create the app',
    async(() => {
      expect(component).toBeTruthy();
    })
  );

  it(
    'scroll to top of page on route change',
    async(() => {
      mockRouter.events.next(new NavigationEnd(1, '/', '/'));
      expect(mockWindow.scrollTo).toHaveBeenCalledWith(0, 0);
    })
  );
});
