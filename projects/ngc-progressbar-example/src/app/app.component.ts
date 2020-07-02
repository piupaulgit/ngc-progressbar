import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}
  title = 'ngc-progressbar-example';
  val: number = 0;
  ngOnInit() {
    this.val = 50;
    setTimeout(() => {
      this.val = 80;
      this.cd.detectChanges();
    }, 2000);
  }

  progressBarStyle1 = {
    // main canvas styling
    canvasBackground: '#f1f1f1',

    // base bar styling
    baseStyles: {
      color: 'green',
      strokeWidth: 10,
      style: 'round',
      fill: 'none',
      radius: 100,
    },

    // parcentage bar stying
    barStyles: {
      color: '#095609',
      strokeWidth: 20,
      style: 'round',
      radius: 100,
    },

    // text styling
    textStyles: {
      fontFamily: 'Arial',
      color: '#095609',
      fontSize: 30,
      position: 'center',
      html: '<span>text</span>',
    },
  };

  progressBarStyle2 = {
    // main canvas styling
    canvasBackground: 'green',
    progressBarRadius: 100,

    // base bar styling
    baseStyles: {
      color: '#095609',
      strokeWidth: 50,
      style: 'round',
    },

    // parcentage bar stying
    barStyles: {
      color: 'green',
      strokeWidth: 40,
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
