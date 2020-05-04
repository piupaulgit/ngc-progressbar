import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgcProgressbarService } from './ngc-progressbar.service';
import { PassedData } from './interface/passed-data';

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
  percentage: number;
  @Input()
  id: string;
  passedData: PassedData;
  constructor(private ngcProgressbarService: NgcProgressbarService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.passedData = {
      type: this.type,
      percentage: this.percentage,
      id: this.id,
    };
    this.ngcProgressbarService.getAllPassedValue(this.passedData);
  }
}
