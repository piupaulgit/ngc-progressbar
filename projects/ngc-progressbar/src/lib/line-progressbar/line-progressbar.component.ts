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
    ctx.moveTo(10, 10);
    ctx.lineTo(canvas.width - 10, 10);
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#f2f2f2';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(20, 10);
    ctx.lineTo(this.progressbar.progressBarValue, 10);
    console.log(this.progressbar.progressBarValue);
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'red';
    ctx.stroke();
  }
}
