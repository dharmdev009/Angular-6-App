import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule, BrowserXhr, ResponseOptions, XSRFStrategy, XHRBackend, Http} from '@angular/http';

import { AppComponent } from './app.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponentComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
