import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImagesPageComponent } from './images-page/images-page.component';
import { UploadersPageComponent } from './uploaders-page/uploaders-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'images', component: ImagesPageComponent },
  { path: 'uploaders', component: UploadersPageComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
