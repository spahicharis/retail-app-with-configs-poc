import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  ActivatedRoute,
  Route,
  RouterModule,
  provideRouter,
  provideRoutes,
} from '@angular/router';
import {
  SigningModalConfigurationInterface,
  SigningModalConfigurationToken,
  configDefaults,
} from './signing-modal-config.service';
import { Route1 } from './route1.component';
import { Route2 } from './route2.component';
import { RouteWrapperComponent } from './route-wrapper.component';

export const routeConfiguration: Route = {
  path: '',
  component: RouteWrapperComponent,
  children: [
    { path: '', redirectTo: 'route-1', pathMatch: 'full' },
    {
      path: 'route-1',
      component: Route1,
    },
    {
      path: 'route-2',
      component: Route2,
    },
  ],
};

@NgModule({
  declarations: [AppComponent, RouteWrapperComponent],
  imports: [BrowserModule, RouterModule],
  providers: [
    provideRouter([routeConfiguration]),
    { provide: SigningModalConfigurationToken, useValue: configDefaults },
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class AppModule {
  static forRoot(data = { route: routeConfiguration}): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: [provideRouter([data.route])],
    };
  }
}
