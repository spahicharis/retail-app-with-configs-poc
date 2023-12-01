import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AppModule as SigningModalModule} from '../../projects/payment-order-app/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SigningModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
