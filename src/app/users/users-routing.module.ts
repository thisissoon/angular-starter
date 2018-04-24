import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailResolver, UserPostsResolver } from './users-resolve.service';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: UserDetailComponent,
    resolve: {
      user: UserDetailResolver,
      posts: UserPostsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

export const routedComponents = [UserDetailComponent];
