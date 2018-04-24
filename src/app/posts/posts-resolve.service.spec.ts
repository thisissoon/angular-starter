import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import {
  PostListResolver,
  PostDetailResolver,
  PostCommentsResolver
} from './posts-resolve.service';
import { Post } from './models/post.model';
import { environment } from '../../environments/environment';

describe('PostListResolver', () => {
  const response: any[] = [{ id: 1 }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostListResolver]
    });
  });

  it(
    'should get posts',
    inject(
      [HttpTestingController, PostListResolver],
      (httpMock: HttpTestingController, service: PostListResolver) => {
        service.resolve().subscribe((data: Post[]) => {
          expect(data).toEqual(response);
        });

        const mockReq = httpMock.expectOne(
          `${environment.apiUrl}/posts?_start=0&_limit=10`
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
      [HttpTestingController, PostListResolver],
      (httpMock: HttpTestingController, service: PostListResolver) => {
        const error = new ErrorEvent('Error');

        service.resolve().subscribe(null, res => {
          expect(res.error).toBe(error);
        });

        const mockReq = httpMock.expectOne(
          `${environment.apiUrl}/posts?_start=0&_limit=10`
        );
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');

        mockReq.error(error);

        httpMock.verify();
      }
    )
  );
});

describe('PostDetailResolver', () => {
  let mockRoute: any;
  const response: any = { id: 1, userId: 2 };
  const user = { id: 2 };

  beforeEach(() => {
    mockRoute = {
      params: { id: '1' }
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostDetailResolver]
    });
  });

  it(
    'should get post',
    inject(
      [HttpTestingController, PostDetailResolver],
      (httpMock: HttpTestingController, service: PostDetailResolver) => {
        service.resolve(mockRoute).subscribe((data: Post) => {
          expect(data).toEqual({
            ...response,
            user
          });
        });

        const mockReq = httpMock.expectOne(`${environment.apiUrl}/posts/1`);
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(response);

        const mockReqUser = httpMock.expectOne(`${environment.apiUrl}/users/2`);
        expect(mockReqUser.cancelled).toBeFalsy();
        expect(mockReqUser.request.responseType).toEqual('json');
        mockReqUser.flush(user);

        httpMock.verify();
      }
    )
  );

  it(
    'should handle error',
    inject(
      [HttpTestingController, PostDetailResolver],
      (httpMock: HttpTestingController, service: PostDetailResolver) => {
        const error = new ErrorEvent('Error');

        service.resolve(mockRoute).subscribe(null, res => {
          expect(res.error).toBe(error);
        });

        const mockReq = httpMock.expectOne(`${environment.apiUrl}/posts/1`);
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');

        mockReq.error(error);

        httpMock.verify();
      }
    )
  );
});

describe('PostCommentsResolver', () => {
  let mockRoute: any;
  const response: any = [{ id: 1 }];

  beforeEach(() => {
    mockRoute = {
      params: { id: '1' }
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostCommentsResolver]
    });
  });

  it(
    'should get comments',
    inject(
      [HttpTestingController, PostCommentsResolver],
      (httpMock: HttpTestingController, service: PostCommentsResolver) => {
        service.resolve(mockRoute).subscribe((data: Comment[]) => {
          expect(data).toEqual(response);
        });

        const mockReq = httpMock.expectOne(
          `${environment.apiUrl}/posts/1/comments`
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
      [HttpTestingController, PostCommentsResolver],
      (httpMock: HttpTestingController, service: PostCommentsResolver) => {
        const error = new ErrorEvent('Error');

        service.resolve(mockRoute).subscribe(null, res => {
          expect(res.error).toBe(error);
        });

        const mockReq = httpMock.expectOne(
          `${environment.apiUrl}/posts/1/comments`
        );
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');

        mockReq.error(error);

        httpMock.verify();
      }
    )
  );
});
