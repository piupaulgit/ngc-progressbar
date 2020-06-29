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

    // drawig canvas initially
    this.drawBar(this.canvas, this.progressbar.parentElemnent.width);
  }

  drawBar(canvas, parentWidth) {
    console.log(this.progressbar);
    // set context
    const ctx = canvas.getContext('2d');
    // canvas height width
    canvas.width = parentWidth;
    canvas.height = this.progressbar.baseStyles.strokeWidth;

    // draw base bar
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = this.progressbar.baseStyles.color;
    ctx.fill();

    // draw bar
    const parcentageValue = this.progressbar.progressBarValue;
    const parcentageWidth =
      (canvas.width / 100) * this.progressbar.progressBarValue;
    ctx.beginPath();
    ctx.rect(
      0,
      (this.progressbar.baseStyles.strokeWidth -
        this.progressbar.barStyles.strokeWidth) /
        2,
      parcentageWidth,
      this.progressbar.barStyles.strokeWidth
    );
    ctx.fillStyle = this.progressbar.barStyles.color;
    ctx.fill();

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
  }
}
