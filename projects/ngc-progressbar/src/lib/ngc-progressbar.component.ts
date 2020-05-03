import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgcProgressbarService } from './ngc-progressbar.service';

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
  value: string;
  constructor(private ngcProgressbarService: NgcProgressbarService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.ngcProgressbarService.getAllPassedValue(this.type, this.value);
  }
}
