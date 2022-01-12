import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOtpInputModule } from 'ng-otp-input';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
