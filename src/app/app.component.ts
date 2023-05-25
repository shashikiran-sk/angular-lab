import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <app-mark-for-check></app-mark-for-check>
  `,
})
export class AppComponent {
  name = 'Angular';
}
