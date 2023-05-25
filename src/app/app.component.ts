import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements DoCheck {
  name = 'Angular';

  ngDoCheck() {
    console.log('DoCheck called on App component');
  }
}
