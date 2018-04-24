import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/observable/of';

import { PostListComponent } from './post-list.component';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  const mockActivatedRoute = {
    data: of({
      posts: [{ id: 1 }],
      comments: []
    })
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [PostListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get route resolve data', () => {
    expect(component.posts.length).toBe(1);
    expect(component.posts[0].id).toBe(1);
  });

  it('should unsubscribe from route data observable', () => {
    const spy = spyOn(component.ngUnsubscribe$, 'complete');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});
