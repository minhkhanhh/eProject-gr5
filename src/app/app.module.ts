import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './layout/home/share/header/header.component';
import { FooterComponent } from './layout/home/share/footer/footer.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { AboutComponent } from './layout/about/about.component';
import { TeamComponent } from './layout/team/team.component';
import { ContactComponent } from './layout/contact/contact.component';
import { ReviewComponent } from './layout/review/review.component';
import { Event1Component } from './layout/event1/event1.component';
import { Event2Component } from './layout/event2/event2.component';
import { Event3Component } from './layout/event3/event3.component';
import { Event4Component } from './layout/event4/event4.component';
import { Event5Component } from './layout/event5/event5.component';
import { Event6Component } from './layout/event6/event6.component';
import { Event7Component } from './layout/event7/event7.component';
import { Event8Component } from './layout/event8/event8.component';
import { Event9Component } from './layout/event9/event9.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    ReviewComponent,
    Event1Component,
    Event2Component,
    Event3Component,
    Event4Component,
    Event5Component,
    Event6Component,
    Event7Component,
    Event8Component,
    Event9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
