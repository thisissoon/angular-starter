import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { UserDetailResolver, UserPostsResolver } from './users-resolve.service';
import { User } from './models/user.model';
import { environment } from '../../environments/environment';
import { Post } from '../posts/models/post.model';

describe('UserDetailResolver', () => {
  let mockRoute: any;
  const response: any = { id: 1 };

  beforeEach(() => {
    mockRoute = {
      params: { id: '1' }
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserDetailResolver]
    });
  });

  it(
    'should get user',
    inject(
      [HttpTestingController, UserDetailResolver],
      (httpMock: HttpTestingController, service: UserDetailResolver) => {
        service.resolve(mockRoute).subscribe((data: User) => {
          expect(data).toEqual(response);
        });

        const mockReq = httpMock.expectOne(`${environment.apiUrl}/users/1`);
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(response);

        httpMock.verify();
      }
    )
  );

  it(
    'should handle error',
    inject(
      [HttpTestingController, UserDetailResolver],
      (httpMock: HttpTestingController, service: UserDetailResolver) => {
        const error = new ErrorEvent('Error');

        service.resolve(mockRoute).subscribe(null, res => {
          expect(res.error).toBe(error);
        });

        const mockReq = httpMock.expectOne(`${environment.apiUrl}/users/1`);
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');

        mockReq.error(error);

        httpMock.verify();
      }
    )
  );
});

describe('UserPostsResolver', () => {
  let mockRoute: any;
  const response: any[] = [{ id: 1 }];

  beforeEach(() => {
    mockRoute = {
      params: { id: '1' }
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserPostsResolver]
    });
  });

  it(
    'should get user',
    inject(
      [HttpTestingController, UserPostsResolver],
      (httpMock: HttpTestingController, service: UserPostsResolver) => {
        service.resolve(mockRoute).subscribe((data: Post[]) => {
          expect(data).toEqual(response);
        });

        const mockReq = httpMock.expectOne(
          `${environment.apiUrl}/posts?userId=1&_start=0&_limit=10`
        );
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(response);

        httpMock.verify();
      }
    )
  );

  it(
    'should handle error',
    inject(
      [HttpTestingController, UserPostsResolver],
      (httpMock: HttpTestingController, service: UserPostsResolver) => {
        const error = new ErrorEvent('Error');

        service.resolve(mockRoute).subscribe(null, res => {
          expect(res.error).toBe(error);
        });

        const mockReq = httpMock.expectOne(
          `${environment.apiUrl}/posts?userId=1&_start=0&_limit=10`
        );
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');

        mockReq.error(error);

        httpMock.verify();
      }
    )
  );
});
