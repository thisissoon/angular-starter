import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
  Directive
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/observable/of';

import { PostDetailComponent } from './post-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { ImagePipe } from '../../shared/image/image.pipe';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  const mockActivatedRoute = {
    data: of({
      post: { id: 1 },
      comments: []
    })
  };

  beforeEach(
    async(() =>
      TestBed.configureTestingModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
        declarations: [PostDetailComponent, ImagePipe]
      }).compileComponents()
    )
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get route resolve data', () => {
    expect(component.post.id).toEqual(1);
  });

  it('should unsubscribe from route data observable', () => {
    const spy = spyOn(component.ngUnsubscribe$, 'complete');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});
