import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Progressbar } from '../progressbar';

@Component({
  selector: 'ngc-line-progressbar',
  templateUrl: './line-progressbar.component.html',
  styleUrls: ['./line-progressbar.component.css'],
})
export class LineProgressbarComponent implements OnInit, AfterViewInit {
  @Input()
  progressbar: Progressbar;
  constructor() {
    console.log('tedt');
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const canvas = <HTMLCanvasElement>(
      document.querySelector(
        `.progressbar--bar#${this.progressbar.progressBarId}`
      )
    );
    canvas.width = this.progressbar.parentElemnent.width;
    canvas.height = this.progressbar.parentElemnent.height;
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.lineTo(canvas.width, 10);
    ctx.lineWidth = 20;
    ctx.strokeStyle = '#333';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 10);
    const parcentageVal =
      (canvas.width / 100) * this.progressbar.progressBarValue;
    ctx.lineTo(parcentageVal, 10);
    console.log(this.progressbar.progressBarValue, parcentageVal);
    ctx.lineWidth = 20;
    ctx.strokeStyle = 'red';
    ctx.stroke();
  }
}
