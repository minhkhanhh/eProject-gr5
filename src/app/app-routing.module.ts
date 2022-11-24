import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { HomeComponent } from './layout/home/home.component';
import { ReviewComponent } from './layout/review/review.component';
import { TeamComponent } from './layout/team/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'review', component: ReviewComponent },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }