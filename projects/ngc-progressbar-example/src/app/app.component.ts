import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
      strokeWidth: 50,
      style: 'round',
      fill: 'green',
    },

    // parcentage bar stying
    barStyles: {
      color: '#095609',
      strokeWidth: 20,
      style: 'round',
    },

    // text styling
    textStyles: {
      fontFamily: 'Arial',
      color: '#fff',
      fontSize: 30,
      position: 'center',
      html: '<span>text</span>',
    },
  };

  progressBarStyle2 = {};

  progressBarBarStyle1 = {
    // main canvas styling
    canvasBackground: '#f4f3f3',
    progressBarRadius: 100,

    // base bar styling
    baseStyles: {
      color: '#333',
      width: 40,
      style: 'round',
    },

    // parcentage bar stying
    barStyles: {
      color: 'green',
      width: 30,
      style: 'round',
    },

    // text styling
    textStyles: {
      fontFamily: 'Arial',
      color: 'white',
      fontSize: 30,
      position: 'center',
      html: '<span>text</span>',
    },
  };
}
