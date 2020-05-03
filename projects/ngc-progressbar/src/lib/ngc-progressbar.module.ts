import { NgModule } from '@angular/core';
import { NgcProgressbarComponent } from './ngc-progressbar.component';
import { CommonModule } from '@angular/common';
import { CircleProgressbarComponent } from './circle-progressbar/circle-progressbar.component';
import { LineProgressbarComponent } from './line-progressbar/line-progressbar.component';

@NgModule({
  declarations: [NgcProgressbarComponent, CircleProgressbarComponent, LineProgressbarComponent],
  imports: [CommonModule],
  exports: [NgcProgressbarComponent],
})
export class NgcProgressbarModule {}
