import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngc-progressbar-example';
  progressBarStyle1 = {
   // main canvas styling
   canvasBackground: '#f1f1f1',
  progressBarRadius: 50,

    // base bar styling
    baseStyles: {
      color: '#fb2030',
      width: 40,
      style: 'round',
    },

    // parcentage bar stying
    barStyles: {
      color: '#fff',
      width: 30,
      style: 'round',
    },

    // text styling
    textStyles: {
      fontSize: 25,
      color: 'green',
      position: 'center',
      html: '<span>text</span>'
    },
  };

  progressBarStyle2 = {
  };
}
