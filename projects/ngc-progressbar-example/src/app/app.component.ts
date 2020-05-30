import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngc-progressbar-example';
  progressBarStyle1 = {
    backgroundColor: '#f1f1f1',
    // progressBarType: stringz;
    // progressBarValue: number;
    // progressBarId: string;

    progressBarStyles: {
      progressBarRadius: 12,
      barStyles: {
        color: 'red',
        width: 20,
        style: 'round'
      },
      baseStyles: {
        color: '#222',
        width: 20,
        style: 'square'
      },
      textStyles: {
        fontSize: 20,
        color: 'green',
        position: 'center',
        // html: '';
      },
    },
  };

  progressBarStyle2 = {
    barStyles: {
      width: '20',
      color: '#2196f3',
    },
  };
}
