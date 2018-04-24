import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/observable/of';

import { UserDetailComponent } from './user-detail.component';
import { ImagePipe } from '../../shared/image/image.pipe';
import { ActivatedRoute } from '@angular/router';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  const mockActivatedRoute = {
    data: of({
      user: { id: 1 },
      posts: [{ id: 1 }]
    })
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [UserDetailComponent, ImagePipe]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get route resolve data', () => {
    expect(component.user.id).toEqual(1);
    expect(component.posts.length).toEqual(1);
    expect(component.posts[0].id).toEqual(1);
  });

  it('should unsubscribe from route data observable', () => {
    const spy = spyOn(component.ngUnsubscribe$, 'complete');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});
