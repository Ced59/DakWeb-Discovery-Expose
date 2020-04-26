import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageIntroVideoComponent} from './page-intro-video/page-intro-video.component';
import {ChapterOneComponent} from './chapter-one/chapter-one.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {Partie1WebSurfaceComponent} from './chapter-one/partie1-web-surface/partie1-web-surface.component';
import {Partie2WebProfondComponent} from './chapter-one/partie2-web-profond/partie2-web-profond.component';


const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'intro',
    component: PageIntroVideoComponent
  },
  { path: 'chapitre-1-les-differents-types-de-web/partie-1-le-web-de-surface',
    component: Partie1WebSurfaceComponent
  },
  { path: 'chapitre-1-les-differents-types-de-web/partie-2-le-web-profond',
    component: Partie2WebProfondComponent
  },
  { path: 'chapitre-1-les-differents-types-de-web',
    component: ChapterOneComponent
  },
  { path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
