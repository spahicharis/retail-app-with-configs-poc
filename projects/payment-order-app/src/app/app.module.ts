import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppModule as SigningModalModule } from "../../../signing-modal-app/src/app/app.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [AppComponent],
    imports: [
        BrowserModule,
        SigningModalModule.forRoot({
          title: 'Ovo je title prosljedjen kroz config'
        })
    ]
})
export class AppModule { }
