import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgcProgressbarModule } from 'projects/ngc-progressbar/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgcProgressbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
