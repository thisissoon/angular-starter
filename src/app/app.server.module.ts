import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Window } from './core/window/window-token';
import { windowMock } from './core/window/window-mock';

@NgModule({
  imports: [AppModule, ServerModule, ModuleMapLoaderModule],
  providers: [{ provide: Window, useFactory: () => windowMock }],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
