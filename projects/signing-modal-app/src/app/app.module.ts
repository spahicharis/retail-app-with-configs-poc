import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Route } from '@angular/router';
import { SigningModalConfigurationInterface, SigningModalConfigurationToken, configDefaults } from './signing-modal-config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: SigningModalConfigurationToken, useValue: configDefaults}
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule {
  static forRoot(data?: SigningModalConfigurationInterface): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: [
        {
          provide: SigningModalConfigurationToken, useValue: data
        }
      ]
    }
  }
}
