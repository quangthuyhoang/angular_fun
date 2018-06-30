import { Component } from '@angular/core';

@Component({
  selector: 'app-events-app',
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'app';
}
