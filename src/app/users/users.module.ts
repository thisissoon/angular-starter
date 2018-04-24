import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule, routedComponents } from './users-routing.module';
import { resolvers } from './users-resolve.service';

@NgModule({
  imports: [CommonModule, SharedModule, UsersRoutingModule],
  providers: [...resolvers],
  declarations: [...routedComponents]
})
export class UsersModule {}
