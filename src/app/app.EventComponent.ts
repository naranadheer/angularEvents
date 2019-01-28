import { Component } from '@angular/core';

@Component({
  selector: 'Events-app',
  template: `
  <nav-bar></nav-bar>
  <h1>Upcoming Angular events</h1>
  <router-outlet></router-outlet>`

})
export class AppComponent {
  title = 'app';
}
