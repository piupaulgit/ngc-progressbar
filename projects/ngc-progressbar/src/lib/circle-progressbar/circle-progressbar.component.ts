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

    // render text
    ctx.font =`${this.progressbar.textStyles.fontSize}px ${this.progressbar.textStyles.fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle"
    ctx.fillText(`${parcentageValue}%`, canvas.width/2,  canvas.height/2+5);
  }
}
