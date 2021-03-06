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
  canvas: any;
  constructor() { }

  ngOnInit(): void { }
  ngAfterViewInit() {
    this.canvas = <HTMLCanvasElement>(
      document.querySelector(
        `.progressbar--circle#${this.progressbar.progressBarId}`
      )
    );

    // drawig canvas initially
    this.drawCircle(this.canvas, this.progressbar.parentElemnent.width);
  }

  drawCircle(canvas, parentWidth) {
    // set context
    const ctx = canvas.getContext('2d');
    // canvas height width
    canvas.width = parentWidth;
    const baseCircleRadius = this.progressbar.baseStyles.radius;
    const barCircleRadius = this.progressbar.barStyles.radius;
    if (baseCircleRadius > barCircleRadius) {
      canvas.height = baseCircleRadius * 2 + this.progressbar.baseStyles.strokeWidth;
    } else {
      canvas.height = barCircleRadius * 2 + this.progressbar.barStyles.strokeWidth;
    }

    // render base bar
    ctx.beginPath();
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      baseCircleRadius,
      0,
      2 * Math.PI,
      true
    );
    ctx.strokeStyle = this.progressbar.baseStyles.color;
    if (this.progressbar.baseStyles.fill !== 'none') {
      ctx.fillStyle = this.progressbar.baseStyles.fill;
      ctx.fill();
    }
    ctx.lineWidth = this.progressbar.baseStyles.strokeWidth;
    ctx.lineCap = this.progressbar.baseStyles.style;
    ctx.stroke();

    // parcentage bar
    const parcentageValue = this.progressbar.progressBarValue;
    const renderdCircleValue = (2 / 100) * parcentageValue + 1.5;

    ctx.beginPath();
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      barCircleRadius,
      1.5 * Math.PI,
      renderdCircleValue * Math.PI
    );
    ctx.strokeStyle = this.progressbar.barStyles.color;
    if (this.progressbar.barStyles.fill !== 'none') {
      ctx.fillStyle = this.progressbar.barStyles.fill;
      ctx.fill();
    }
    ctx.lineWidth = this.progressbar.barStyles.strokeWidth;
    ctx.lineCap = this.progressbar.barStyles.style;
    ctx.stroke();

    // render text
    ctx.font = `${this.progressbar.textStyles.fontSize}px ${this.progressbar.textStyles.fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = this.progressbar.textStyles.color;
    ctx.fillText(
      `${parcentageValue}%`,
      canvas.width / 2,
      canvas.height / 2 + 5
    );
    console.log(this.progressbar.textStyles.color);
  }

  drawCircleOnResize(parentWidth) {
    this.drawCircle(this.canvas, parentWidth);
  }
}
