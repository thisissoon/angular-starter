import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
