# RetailApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.


## Structure

Retail app is located in 'src' folder and acts as a global parent. Payment order app is located in 'projects/payment-order-app' and acts as regular parent. Signing modal app is located in 'projects/signing-modal-app' and acts as a child of 'payment-order-app'. It also can be used in another regular parent apps like: 'Standing order app', 'Transactions app', etc.

Retail app
      |
      |
      |--- Payment order app
      |           |
      |           |
      |           |--- Signing modal app
      |
      |
      |--- Standing order app
      ...
      ...

## Development server

Run `npm start` for Retail app. Navigate to `http://localhost:4400/`. The application will automatically reload if you change any of the source files.
Run `npm start:signing` for Signing modal app. If not redirected automatically, please navigate to `http://localhost:4401/`.
Run `npm start:payment` for Payment order app. If not redirected automatically, please navigate to `http://localhost:4402/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
