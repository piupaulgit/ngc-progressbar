import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgcProgressbarService } from './ngc-progressbar.service';
import { Progressbar } from './progressbar';

@Component({
  selector: 'ngc-progressbar',
  template: `
    <ngc-circle-progressbar
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

  capturedInputs: Progressbar;
  constructor(private ngcProgressbarService: NgcProgressbarService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.capturedInputs = {
      progressBarType: this.type,
      progressBarValue: this.value,
      progressBarId: this.id,
    };
    this.ngcProgressbarService.getAllPassedValue(this.capturedInputs);
  }
}
