import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError, mergeMap, map } from 'rxjs/operators';

import { Post } from './models/post.model';
import { User } from '../users/models/user.model';
import { environment } from '../../environments/environment';

@Injectable()
export class PostListResolver implements Resolve<Post[]> {
  constructor(private http: HttpClient) {}

  public resolve(): Observable<Post[]> {
    const url = `${environment.apiUrl}/posts`;
    const params = new HttpParams().set('_start', '0').set('_limit', '10');
    const options = { params };

    return this.http
      .get<Post[]>(url, options)
      .pipe(catchError(err => _throw(err)));
  }
}

@Injectable()
export class PostDetailResolver implements Resolve<Post> {
  constructor(private http: HttpClient) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    const id = route.params['id'];
    const postUrl = `${environment.apiUrl}/posts/${id}`;
    const userUrl = `${environment.apiUrl}/users`;

    return this.http
      .get<Post>(postUrl)
      .pipe(
        mergeMap(post =>
          this.http
            .get<User>(`${userUrl}/${post.userId}`)
            .pipe(map(user => ({ ...post, user })))
        ),
        catchError(err => _throw(err))
      );
  }
}

@Injectable()
export class PostCommentsResolver implements Resolve<Comment[]> {
  constructor(private http: HttpClient) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Comment[]> {
    const id = route.params['id'];
    const url = `${environment.apiUrl}/posts/${id}/comments`;

    return this.http.get<Comment[]>(url).pipe(catchError(err => _throw(err)));
  }
}

export const resolvers = [
  PostListResolver,
  PostDetailResolver,
  PostCommentsResolver
];
