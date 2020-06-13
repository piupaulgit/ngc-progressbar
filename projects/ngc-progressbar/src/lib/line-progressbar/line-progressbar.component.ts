import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Progressbar } from '../progressbar';

@Component({
  selector: 'ngc-line-progressbar',
  templateUrl: './line-progressbar.component.html',
  styleUrls: ['./line-progressbar.component.css'],
})
export class LineProgressbarComponent implements OnInit, AfterViewInit {
  @Input() progressbar: Progressbar;
  canvas: any;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.canvas = <HTMLCanvasElement>(
      document.querySelector(
        `.progressbar--bar#${this.progressbar.progressBarId}`
      )
    );
    this.canvas.style.backgroundColor = this.progressbar.canvasBackground;

    // drawig canvas initially
    this.drawBar(this.canvas, this.progressbar.parentElemnent.width);

    // const canvas = <HTMLCanvasElement>(
    //   document.querySelector(
    //     `.progressbar--bar#${this.progressbar.progressBarId}`
    //   )
    // );
    // canvas.width = this.progressbar.parentElemnent.width;
    // canvas.height = this.progressbar.parentElemnent.height;
    // var ctx = canvas.getContext('2d');
    // ctx.beginPath();
    // ctx.moveTo(0, 10);
    // ctx.lineTo(canvas.width, 10);
    // ctx.lineWidth = 20;
    // ctx.strokeStyle = '#333';
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.moveTo(0, 10);
    // const parcentageVal =
    //   (canvas.width / 100) * this.progressbar.progressBarValue;
    // ctx.lineTo(parcentageVal, 10);
    // console.log(this.progressbar.progressBarValue, parcentageVal);
    // ctx.lineWidth = 20;
    // ctx.strokeStyle = 'red';
    // ctx.stroke();
  }

  drawBar(canvas, parentWidth) {
    console.log(this.progressbar);
    // set context
    const ctx = canvas.getContext('2d');
    // canvas height width
    canvas.width = parentWidth;
    canvas.height = this.progressbar.baseStyles.width;

    // draw base bar
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = this.progressbar.baseStyles.color;
    ctx.fill();

    // draw bar
    const parcentage = (canvas.width / 100) * this.progressbar.progressBarValue;
    ctx.beginPath();
    ctx.rect(
      0,
      (this.progressbar.baseStyles.width - this.progressbar.barStyles.width) /
        2,
      parcentage,
      this.progressbar.barStyles.width
    );
    ctx.fillStyle = this.progressbar.barStyles.color;
    ctx.fill();
  }
}
