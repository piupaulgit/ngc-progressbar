import { Component, OnInit, Input, OnChanges, ElementRef } from '@angular/core';
import { NgcProgressbarService } from './ngc-progressbar.service';
import { Progressbar } from './progressbar';

@Component({
  selector: 'ngc-progressbar',
  template: `
    <ngc-circle-progressbar
      [progressbar]="capturedInputs"
      *ngIf="type.toLowerCase() === 'circle'"
    ></ngc-circle-progressbar>
    <ngc-line-progressbar
      *ngIf="type.toLowerCase() === 'line'"
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
  styles: Progressbar['progressBarStyles'];

  capturedInputs: Progressbar;
  constructor(
    private ngcProgressbarService: NgcProgressbarService,
    private elRef: ElementRef
  ) {}

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
      progressBarStyles: this.styles,
    };
    console.log(this.capturedInputs);
  }
}
