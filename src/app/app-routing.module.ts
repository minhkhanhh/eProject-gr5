import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { HomeComponent } from './layout/home/home.component';
import { ReviewComponent } from './layout/review/review.component';
import { TeamComponent } from './layout/team/team.component';
import {Event1Component} from "./layout/event1/event1.component";
import {Event2Component} from "./layout/event2/event2.component";
import {Event3Component} from "./layout/event3/event3.component";
import {Event4Component} from "./layout/event4/event4.component";
import {Event5Component} from "./layout/event5/event5.component";
import {Event6Component} from "./layout/event6/event6.component";
import {Event7Component} from "./layout/event7/event7.component";
import {Event8Component} from "./layout/event8/event8.component";
import {Event9Component} from "./layout/event9/event9.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'detailEvTy/:id', component: Event1Component },
  { path: 'detailEv/:id', component: Event2Component },
  { path: 'event3', component: Event3Component },
  { path: 'event4', component: Event4Component },
  { path: 'event5', component: Event5Component },
  { path: 'event6', component: Event6Component },
  { path: 'event7', component: Event7Component },
  { path: 'event8', component: Event8Component },
  { path: 'event9', component: Event9Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
