import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {EventPartyComponent} from "./EventParty/EventParty.component";
import {HomeComponent} from "./Home/Home.component";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, EventPartyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
