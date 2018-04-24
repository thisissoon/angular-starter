import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule, routedComponents } from './about-routing.module';

@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [...routedComponents]
})
export class AboutModule {}
