import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngc-progressbar-example';
  progressBarStyle = {
    barStyles: {
      width: '50',
      color: 'blue',
    },
  };
}
