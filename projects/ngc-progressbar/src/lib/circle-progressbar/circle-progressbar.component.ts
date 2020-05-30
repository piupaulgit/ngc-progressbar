import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  Input,
  HostListener,
} from '@angular/core';
import { Progressbar } from '../progressbar';

@Component({
  selector: 'ngc-circle-progressbar',
  templateUrl: './circle-progressbar.component.html',
  styleUrls: ['./circle-progressbar.component.css'],
})
export class CircleProgressbarComponent implements OnInit, AfterViewInit {
  @Input() progressbar: Progressbar;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    console.log(this.progressbar, 'from circle com');

    // .......................................................
    // setting up variables
    const canvas = <HTMLCanvasElement>(
      document.querySelector(
        `.progressbar--circle#${this.progressbar.progressBarId}`
      )
    );

    // set context
    const ctx = canvas.getContext('2d');

    // canvas designs
    canvas.width = this.progressbar.parentElemnent.width;
    canvas.height = (this.progressbar.progressBarRadius*2) + this.progressbar.baseStyles.width;
    canvas.style.backgroundColor = this.progressbar.canvasBackground;

    // render base bar
    ctx.beginPath();
    ctx.arc(canvas.width/2,  canvas.height/2, this.progressbar.progressBarRadius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = this.progressbar.baseStyles.color;
    ctx.lineWidth = this.progressbar.baseStyles.width;
    ctx.lineCap = this.progressbar.baseStyles.style;
    ctx.stroke();

    // parcentage bar
    const parcentageValue = this.progressbar.progressBarValue;
    const renderdCircleValue = (2 / 100) * parcentageValue + 1.5;
    
    ctx.beginPath();
    ctx.arc(canvas.width/2,  canvas.height/2, this.progressbar.progressBarRadius, 1.5 * Math.PI, renderdCircleValue * Math.PI);
    ctx.strokeStyle = this.progressbar.barStyles.color;
    ctx.lineWidth = this.progressbar.barStyles.width;
    ctx.lineCap = this.progressbar.barStyles.style;
    ctx.stroke();



















    //setting  needed variables
    // const progressBarRadious = this.progressbar.styles?.progressBarStyles?.progressBarRadius ? this.progressbar.styles['progressBarStyles']?.progressBarRadius : 50;
    // console.log(progressBarRadious, 'rad')

    // // set canvas variable
    
    // // set context variable
    // const ctx = canvas.getContext('2d'); 

    // // setting up your canvas( height, width, background)
    // canvas.width = this.progressbar.parentElemnent.width;
    // canvas.height = progressBarRadious*2;
    // canvas.style.backgroundColor = this.progressbar.backgroundColor ? this.progressbar.backgroundColor : 'transparent';

    // // drawing base circle
    // ctx.beginPath();
    // ctx.arc(canvas.width / 2, canvas.height / 2, progressBarRadious, 0, 2 * Math.PI, true);
    // ctx.strokeStyle = this.progressbar.styles?.baseStyles?.color ? this.progressbar.styles?.baseStyles.color : '#f1f1f1' ;
    // ctx.lineWidth = 20;
    // ctx.stroke();
















    // const canvas = <HTMLCanvasElement>(
    //   document.querySelector(
    //     `.progressbar--circle#${this.progressbar.progressBarId}`
    //   )
    // );
    // canvas.width = this.progressbar.parentElemnent.width;
    // canvas.height = 300;
    // console.log(canvas.height);
    // const smallest = Math.min(
    //   this.progressbar.parentElemnent.width,
    //   this.progressbar.parentElemnent.height
    // );
    // const percent = this.progressbar.progressBarValue;
    // const cirVal = (2 / 100) * percent + 1.5;
    // const ctx = canvas.getContext('2d');

    // // base circle
    // ctx.beginPath();
    // ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI, true);
    // ctx.strokeStyle = '#f1f1f1';
    // ctx.lineWidth = 20;
    // ctx.stroke();

    // // bar circle
    // ctx.beginPath();
    // ctx.arc(
    //   canvas.width / 2,
    //   canvas.height / 2,
    //   100,
    //   1.5 * Math.PI,
    //   cirVal * Math.PI
    // );
    // ctx.strokeStyle = this.progressbar.progressBarStyles?.barStyles?.color
    //   ? this.progressbar.progressBarStyles?.barStyles?.color
    //   : 'green';
    // ctx.lineCap = this.progressbar.progressBarStyles?.barStyles?.style
    //   ? this.progressbar.progressBarStyles?.barStyles?.style
    //   : 'square';

    // ctx.stroke();
  }
}
