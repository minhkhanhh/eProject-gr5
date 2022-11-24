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
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
