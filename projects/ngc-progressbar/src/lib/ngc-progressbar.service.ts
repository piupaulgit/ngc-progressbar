import { Injectable } from '@angular/core';
import { PassedData } from './interface/passed-data';

@Injectable({
  providedIn: 'root',
})
export class NgcProgressbarService {
  passedData: any;
  constructor() {}

  getAllPassedValue(passedData: PassedData) {
    return (this.passedData = passedData);
  }
}
