import { Component, OnInit } from '@angular/core';
import { NgcProgressbarService } from '../ngc-progressbar.service';

@Component({
  selector: 'ngc-circle-progressbar',
  templateUrl: './circle-progressbar.component.html',
  styleUrls: ['./circle-progressbar.component.css'],
})
export class CircleProgressbarComponent implements OnInit {
  test: any;
  constructor(private ngcProgressbarService: NgcProgressbarService) {}

  ngOnInit(): void {
    this.test = this.ngcProgressbarService.val;
    console.log(this.test);
  }
}
