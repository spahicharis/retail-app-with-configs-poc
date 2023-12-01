import { Component, Inject } from '@angular/core';
import { SigningModalConfigurationInterface, SigningModalConfigurationToken } from './signing-modal-config.service';

@Component({
  selector: 'app-root-signing-modal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'signing-modal-app';

  constructor(@Inject(SigningModalConfigurationToken) private config: SigningModalConfigurationInterface) {
    this.title = config.title;
  }
}
