import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageIntroVideoComponent} from './page-intro-video/page-intro-video.component';


const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'intro',
    component: PageIntroVideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
