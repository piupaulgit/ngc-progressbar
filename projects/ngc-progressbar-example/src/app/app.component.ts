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
  progressBarRadius: 100,

    // base bar styling
    baseStyles: {
      color: 'green',
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
      fontFamily: 'Arial',
      color: 'blue',
      fontSize: 30,
      position: 'center',
      html: '<span>text</span>'
    },
  };

  progressBarStyle2 = {
  };
}
