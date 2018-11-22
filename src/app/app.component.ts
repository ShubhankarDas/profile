import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { routerTransition } from './router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  name = '';

  constructor(private titleService: Title) {}

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngOnInit() {
    this.titleService.setTitle('My awesome app');
  }
}
