import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PostsRoutingModule, routedComponents } from './posts-routing.module';
import { resolvers } from './posts-resolve.service';

@NgModule({
  imports: [CommonModule, SharedModule, PostsRoutingModule],
  providers: [...resolvers],
  declarations: [...routedComponents]
})
export class PostsModule {}
