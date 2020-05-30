import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  Input,
  HostListener,
} from '@angular/core';
import { Progressbar } from '../progressbar';
import { variable } from '@angular/compiler/src/output/output_ast';

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

    // set canvas variable
    const canvas = <HTMLCanvasElement>(
      document.querySelector(
        `.progressbar--circle#${this.progressbar.progressBarId}`
      )
    );

    // setting up your canvas( height, width, background)
    canvas.width = this.progressbar.parentElemnent.width;
    canvas.height = this.progressbar.styles.progressBarRadius*2;
    console.log(this.progressbar.styles.progressBarRadius,'pp')
    canvas.style.backgroundColor = 'red'
    // set context variable
    const ctx = canvas.getContext('2d'); 
















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
