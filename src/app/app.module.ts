import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UtilService } from './util.service';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
   // RouterModule.forRoot(routes) // Add routes to the app
  ],
  providers: [UtilService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
