import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  Input,
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
    const canvas = <HTMLCanvasElement>(
      document.querySelector(
        `.progressbar--circle#${this.progressbar.progressBarId}`
      )
    );
    const percent = this.progressbar.progressBarValue;
    const cirVal = (2 / 100) * percent + 1.5;
    const ctx = canvas.getContext('2d');

    // base circle
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI, true);
    ctx.strokeStyle = '#f1f1f1';
    ctx.lineWidth = 20;
    ctx.stroke();

    // bar circle
    ctx.beginPath();
    ctx.arc(100, 100, 50, 1.5 * Math.PI, cirVal * Math.PI);
    ctx.strokeStyle = this.progressbar.progressBarStyles?.barStyles?.color
      ? this.progressbar.progressBarStyles?.barStyles?.color
      : 'green';
    ctx.lineCap = this.progressbar.progressBarStyles?.barStyles?.style
      ? this.progressbar.progressBarStyles?.barStyles?.style
      : 'square';

    ctx.stroke();
  }
}
