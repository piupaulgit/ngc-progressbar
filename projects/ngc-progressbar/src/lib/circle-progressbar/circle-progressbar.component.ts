import { Component, OnInit } from '@angular/core';
import { NgcProgressbarService } from '../ngc-progressbar.service';
import { Progressbar } from '../progressbar';

@Component({
  selector: 'ngc-circle-progressbar',
  templateUrl: './circle-progressbar.component.html',
  styleUrls: ['./circle-progressbar.component.css'],
})
export class CircleProgressbarComponent implements OnInit {
  progressBars: any;
  constructor(private ngcProgressbarService: NgcProgressbarService) {}

  ngOnInit(): void {
    this.progressBars = this.ngcProgressbarService.progressBars;
  }
}
