import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgcProgressbarService {
  val: any;
  constructor() {}

  getAllPassedValue(type, value) {
    // console.log(type, value);
    return (this.val = type);
  }
}
