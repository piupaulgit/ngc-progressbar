import { Injectable } from '@angular/core';
import { Progressbar } from './progressbar';

@Injectable({
  providedIn: 'root',
})
export class NgcProgressbarService {
  progressBars: {}[] = [];
  constructor() {}

  getAllPassedValue(progressbarInputs: Progressbar) {
    this.progressBars.push(progressbarInputs);
    return this.progressBars;
  }
}
