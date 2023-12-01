import { InjectionToken } from '@angular/core';

export interface SigningModalConfigurationInterface {
  title: string;
  routes: string[];
}

export const SigningModalConfigurationToken = new InjectionToken<SigningModalConfigurationInterface>(
  'SigningModalConfiguration injection token'
);

export const configDefaults = {
  title: 'Default title',
  routes: ['route-1', 'route-2']
};

export class SigningModalService {
  private _config;

  constructor(private config: Partial<SigningModalConfigurationInterface>) {
    this._config = { ...configDefaults, ...config };
  }

  get defaults() {
    return configDefaults;
  }

  get title(): string {
    return this._config.title;
  }

  get routes(): string[] {
    return this._config.routes;
  }

}
