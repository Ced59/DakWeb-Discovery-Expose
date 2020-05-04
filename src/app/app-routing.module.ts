import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageIntroVideoComponent} from './page-intro-video/page-intro-video.component';
import {ChapterOneComponent} from './chapter-one/chapter-one.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {Partie1WebSurfaceComponent} from './chapter-one/partie1-web-surface/partie1-web-surface.component';
import {Partie2WebProfondComponent} from './chapter-one/partie2-web-profond/partie2-web-profond.component';
import {Partie3LesDarknetsComponent} from './chapter-one/partie3-les-darknets/partie3-les-darknets.component';
import {ChapterTwoComponent} from './chapter-two/chapter-two.component';
import {Partie1LesVpnComponent} from './chapter-two/partie1-les-vpn/partie1-les-vpn.component';
import {Partie2TorComponent} from './chapter-two/partie2-tor/partie2-tor.component';
import {ChapterThreeComponent} from './chapter-three/chapter-three.component';
import {Partie3ConclusionComponent} from './chapter-two/partie3-conclusion/partie3-conclusion.component';
import {Partie1SeConnecterComponent} from './chapter-three/partie1-se-connecter/partie1-se-connecter.component';
import {Partie2LesHiddenWikisComponent} from './chapter-three/partie2-les-hidden-wikis/partie2-les-hidden-wikis.component';
import {DesExemplesDeSitesDuDarkWebComponent} from './chapter-three/des-exemples-de-sites-du-dark-web/des-exemples-de-sites-du-dark-web.component';
import {SiteVenteArmesComponent} from './chapter-three/des-exemples-de-sites-du-dark-web/site-vente-armes/site-vente-armes.component';


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
  { path: 'chapitre-1-les-differents-types-de-web/partie-3-les-darknets',
    component: Partie3LesDarknetsComponent
  },
  { path: 'chapitre-2-vers-une-navigation-anonyme/partie-1-les-vpn',
    component: Partie1LesVpnComponent
  },
  { path: 'chapitre-2-vers-une-navigation-anonyme/partie-2-tor',
    component: Partie2TorComponent
  },
  { path: 'chapitre-2-vers-une-navigation-anonyme/partie-3-conclusion',
    component: Partie3ConclusionComponent
  },
  { path: 'chapitre-3-le-dark-web/partie-1-se-connecter',
    component: Partie1SeConnecterComponent
  },
  { path: 'chapitre-3-le-dark-web/partie-2-les-hidden-wikis',
    component: Partie2LesHiddenWikisComponent
  },
  { path: 'chapitre-3-le-dark-web/partie-3-des-exemples-de-sites-du-dark-web/site-vente-armes',
    component: SiteVenteArmesComponent
  },
  { path: 'chapitre-3-le-dark-web/partie-3-des-exemples-de-sites-du-dark-web',
    component: DesExemplesDeSitesDuDarkWebComponent
  },
  { path: 'chapitre-1-les-differents-types-de-web',
    component: ChapterOneComponent
  },
  { path: 'chapitre-2-vers-une-navigation-anonyme',
    component: ChapterTwoComponent
  },
  { path: 'chapitre-3-le-dark-web',
    component: ChapterThreeComponent
  },
  { path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
