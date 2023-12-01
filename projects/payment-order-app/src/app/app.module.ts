import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppModule as SigningModalModule } from '../../../signing-modal-app/src/app/app.module';
import {
  SigningModalConfigurationInterface,
  SigningModalConfigurationToken,

} from 'projects/signing-modal-app/src/app/signing-modal-config.service';

import {
  routeConfiguration as signingModalRouteConfiguration,
} from 'projects/signing-modal-app/src/app/app.module';

import { Route } from '@angular/router';
import { Route1 } from './route1.component';
import { Route2 } from './route2.component';

const SigningModalConfigProvider: Provider = {
  provide: SigningModalConfigurationToken,
  useValue: {
    title: 'Ovo je title kroz konfig',
    routes: ['parent-route-1', 'parent-route-2'],
  } as Partial<SigningModalConfigurationInterface>,
};

export const routeConfiguration: Route = {
  ...signingModalRouteConfiguration,
  children: [
    { path: '', redirectTo: 'parent-route-1', pathMatch: 'full' },
    {
      path: 'parent-route-1',
      component: Route1,
    },
    {
      path: 'parent-route-2',
      component: Route2,
    },
  ],
};

@NgModule({
  declarations: [AppComponent],
  providers: [SigningModalConfigProvider],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  imports: [
    BrowserModule,
    SigningModalModule.forRoot({ route: routeConfiguration }),
  ],
})
export class AppModule {}
