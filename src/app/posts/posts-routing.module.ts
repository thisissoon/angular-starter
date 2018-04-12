import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  PostListResolver,
  PostDetailResolver,
  PostCommentsResolver
} from './posts-resolve.service';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    resolve: {
      posts: PostListResolver
    }
  },
  {
    path: ':id',
    component: PostDetailComponent,
    resolve: {
      post: PostDetailResolver,
      comments: PostCommentsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}

export const routedComponents = [PostListComponent, PostDetailComponent];
