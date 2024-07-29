import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // Import Router and NavigationEnd
import { filter } from 'rxjs/operators'; // Import filter operator to filter navigation events

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router) {
    // Subscribe to router events to get current URL
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Filter for NavigationEnd events
    ).subscribe((event: NavigationEnd) => {
      console.log('Current URL:', event.url); // Log current URL to console
    });
  }

  title = 'CRUD';
}
