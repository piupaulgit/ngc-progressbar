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
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
    fontSize: 20,
    fontFamily: 'Arial',
    color: '#333',
    position: 'center',
    html: '<span></span>',
  }

  resizeSubject = new Subject();

  @ViewChild(CircleProgressbarComponent)
  private circleProgressbarComponent: CircleProgressbarComponent;
  constructor(private elRef: ElementRef) {
    this.resizeSubject.pipe(debounceTime(100)).subscribe((parentWidth)=>{
      this.circleProgressbarComponent.drawCircleOnResize(parentWidth)
    })
  }

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
      barStyles: {
        color: this.styles?.barStyles?.color ? this.styles?.barStyles?.color : this.defaultBarStyle.color,
        style: this.styles?.barStyles?.style ? this.styles?.barStyles?.style : this.defaultBarStyle.style,
        width: this.styles?.barStyles?.width ? this.styles?.barStyles?.width : this.defaultBarStyle.width,
      },
      baseStyles: {
        color: this.styles?.baseStyles?.color ? this.styles?.baseStyles?.color : this.defaultBaseStyle.color,
        style: this.styles?.baseStyles?.style ? this.styles?.baseStyles?.style : this.defaultBaseStyle.style,
        width: this.styles?.baseStyles?.width ? this.styles?.baseStyles?.width : this.defaultBaseStyle.width,
      },
      textStyles:{
        color: this.styles?.textStyles?.color ? this.styles?.textStyles?.color : this.defaultTextStyle.color,
        fontSize: this.styles?.textStyles?.fontSize ? this.styles?.textStyles?.fontSize : this.defaultTextStyle.fontSize,
        fontFamily: this.styles?.textStyles?.fontFamily ? this.styles?.textStyles?.fontFamily : this.defaultTextStyle.fontFamily,
        position: this.styles?.textStyles?.position ? this.styles?.textStyles?.position : this.defaultTextStyle.position,
        html: this.styles?.textStyles?.html ? this.styles?.textStyles?.html : this.defaultTextStyle.html,
      }
    };
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.capturedInputs.parentElemnent.width = this.elRef.nativeElement.parentElement.clientWidth
    this.resizeSubject.next(this.capturedInputs.parentElemnent.width)
  }

}
