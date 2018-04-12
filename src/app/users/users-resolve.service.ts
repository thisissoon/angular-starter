import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError, mergeMap, map } from 'rxjs/operators';

import { Post } from '../posts/models/post.model';
import { User } from './models/user.model';
import { environment } from '../../environments/environment';

@Injectable()
export class UserDetailResolver implements Resolve<User> {
  constructor(private http: HttpClient) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const id: number = route.params['id'];
    const url = `${environment.apiUrl}/users/${id}`;

    return this.http.get<User>(url).pipe(catchError(err => _throw(err)));
  }
}

@Injectable()
export class UserPostsResolver implements Resolve<Post[]> {
  constructor(private http: HttpClient) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
    const id: number = route.params['id'];
    const url = `${environment.apiUrl}/posts`;
    const params = new HttpParams()
      .set('userId', `${id}`)
      .set('_start', '0')
      .set('_limit', '10');
    const options = { params };

    return this.http
      .get<User>(url, options)
      .pipe(catchError(err => _throw(err)));
  }
}

export const resolvers = [UserDetailResolver, UserPostsResolver];
