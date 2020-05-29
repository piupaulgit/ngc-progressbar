import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngc-progressbar-example';
  progressBarStyle1 = {
    barStyles: {
      width: '50',
      color: 'red',
      style: 'round',
    },
  };

  progressBarStyle2 = {
    barStyles: {
      width: '20',
      color: '#2196f3',
    },
  };
}
