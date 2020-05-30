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
  styles;

  capturedInputs: Progressbar;
  
  
  defaultBaseStyle: Progressbar['baseStyles'] = {
    color: '#f1f1f1',
    width: 10,
    style: 'square'
  }

  defaultBarStyle: Progressbar['barStyles'] = {
    color: '#333',
    width: 10,
    style: 'square'
  }

  defaultTextStyle: Progressbar['textStyles'] = {
    fontSize: 25,
    color: 'green',
    position: 'center',
    html: '<span></span>',
  }

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
      canvasBackground: this.styles?.canvasBackground ? this.styles?.canvasBackground : 'transparent',
      progressBarRadius: this.styles?.progressBarRadius ? this.styles?.progressBarRadius : '100',
      barStyles: this.styles?.barStyles ? this.styles?.barStyles : this.defaultBarStyle,
      baseStyles: this.styles?.baseStyles ? this.styles?.baseStyles : this.defaultBaseStyle,
      textStyles: this.styles?.textStyles ? this.styles?.textStyles : this.defaultTextStyle,
    };
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // console.log(
    //   (this.capturedInputs.parentElemnent.width = this.elRef.nativeElement.parentElement.clientWidth)
    // );
  }
}
