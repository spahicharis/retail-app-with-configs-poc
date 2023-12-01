import { InjectionToken } from '@angular/core';

export interface SigningModalConfigurationInterface {
  title: string;
}

export const SigningModalConfigurationToken = new InjectionToken(
  'SigningModalConfiguration injection token'
);

export const configDefaults = {
  title: 'Default title',
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


}
