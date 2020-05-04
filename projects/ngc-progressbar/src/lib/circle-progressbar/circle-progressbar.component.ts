import { Component, OnInit } from '@angular/core';
import { NgcProgressbarService } from '../ngc-progressbar.service';
import { PassedData } from '../interface/passed-data';

@Component({
  selector: 'ngc-circle-progressbar',
  templateUrl: './circle-progressbar.component.html',
  styleUrls: ['./circle-progressbar.component.css'],
})
export class CircleProgressbarComponent implements OnInit {
  properties: PassedData;
  constructor(private ngcProgressbarService: NgcProgressbarService) {}

  ngOnInit(): void {
    this.properties = this.ngcProgressbarService.passedData;
  }
}
