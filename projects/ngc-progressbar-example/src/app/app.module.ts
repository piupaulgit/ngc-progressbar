import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgcProgressbarModule } from 'projects/ngc-progressbar/src/public-api';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [AppComponent, SidenavComponent],
  imports: [BrowserModule, NgcProgressbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
