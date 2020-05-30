import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { Progressbar } from './progressbar';
import { CircleProgressbarComponent } from './circle-progressbar/circle-progressbar.component';

@Component({
  selector: 'ngc-progressbar',
  template: `
    <ngc-circle-progressbar
      (window:resize)="onResize($event)"
      [progressbar]="capturedInputs"
      *ngIf="type.toLowerCase() === 'circle'"
    ></ngc-circle-progressbar>
    <ngc-line-progressbar
      [progressbar]="capturedInputs"
      *ngIf="type.toLowerCase() === 'bar'"
    ></ngc-line-progressbar>
  `,
  styles: [],
})
export class NgcProgressbarComponent implements OnInit, OnChanges {
  @Input()
  type: string;
  @Input()
  value: number;
  @Input()
  id: string;
  @Input()
  styles: Progressbar['styles'];

  capturedInputs: Progressbar;
  @ViewChild(CircleProgressbarComponent)
  private circleProgressbarComponent: CircleProgressbarComponent;
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.capturedInputs = {
      parentElemnent: {
        width: this.elRef.nativeElement.parentElement.clientWidth,
        height: this.elRef.nativeElement.parentElement.clientHeight,
      },
      progressBarType: this.type,
      progressBarValue: this.value,
      progressBarId: this.id,
      styles: this.styles,
    };
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // console.log(
    //   (this.capturedInputs.parentElemnent.width = this.elRef.nativeElement.parentElement.clientWidth)
    // );
  }
}
