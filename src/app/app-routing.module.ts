import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import {DesExemplesDeSitesDuDarkWebComponent} from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/des-exemples-de-sites-du-dark-web.component';
import {SiteVenteArmesComponent} from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-vente-armes/site-vente-armes.component';
import {SiteVenteDrogueComponent} from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-vente-drogue/site-vente-drogue.component';
import {SiteVenteCarteBancairesCloneesComponent} from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-vente-carte-bancaires-clonees/site-vente-carte-bancaires-clonees.component';
import {SiteVenteFausseIdentiteComponent} from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-vente-fausse-identite/site-vente-fausse-identite.component';
import {SiteRacismeComponent} from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-racisme/site-racisme.component';
import {SitePornographiquesComponent} from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-pornographiques/site-pornographiques.component';
import {SiteRentAHackerComponent} from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-rent-a-hacker/site-rent-a-hacker.component';
import {SitesPlusCoolComponent} from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/sites-plus-cool/sites-plus-cool.component';
import {SiteSurpriseComponent} from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-surprise/site-surprise.component';
import {ConclusionComponent} from './conclusion/conclusion.component';
import {Partie4LeBitcoinComponent} from './chapter-three/partie4-le-bitcoin/partie4-le-bitcoin.component';
import {Partie5DevDarkWebComponent} from './chapter-three/partie5-dev-dark-web/partie5-dev-dark-web.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'intro',
    component: PageIntroVideoComponent
  },
  {
    path: 'chapitre-1-les-differents-types-de-web/partie-1-le-web-de-surface',
    component: Partie1WebSurfaceComponent
  },
  {
    path: 'chapitre-1-les-differents-types-de-web/partie-2-le-web-profond',
    component: Partie2WebProfondComponent
  },
  {
    path: 'chapitre-1-les-differents-types-de-web/partie-3-les-darknets',
    component: Partie3LesDarknetsComponent
  },
  {
    path: 'chapitre-2-vers-une-navigation-anonyme/partie-1-les-vpn',
    component: Partie1LesVpnComponent
  },
  {
    path: 'chapitre-2-vers-une-navigation-anonyme/partie-2-tor',
    component: Partie2TorComponent
  },
  {
    path: 'chapitre-2-vers-une-navigation-anonyme/partie-3-conclusion',
    component: Partie3ConclusionComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie-1-se-connecter',
    component: Partie1SeConnecterComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie-2-les-hidden-wikis',
    component: Partie2LesHiddenWikisComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie-3-partie3-des-exemples-de-sites-du-dark-web/site-vente-armes',
    component: SiteVenteArmesComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie-3-partie3-des-exemples-de-sites-du-dark-web/site-vente-drogue',
    component: SiteVenteDrogueComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie-3-partie3-des-exemples-de-sites-du-dark-web/site-vente-carte-bancaire',
    component: SiteVenteCarteBancairesCloneesComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie-3-partie3-des-exemples-de-sites-du-dark-web/site-vente-fausse-identite',
    component: SiteVenteFausseIdentiteComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie-3-partie3-des-exemples-de-sites-du-dark-web/site-racisme',
    component: SiteRacismeComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie-3-partie3-des-exemples-de-sites-du-dark-web/site-pornographiques',
    component: SitePornographiquesComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie-3-partie3-des-exemples-de-sites-du-dark-web/site-rent-a-hacker',
    component: SiteRentAHackerComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie-3-partie3-des-exemples-de-sites-du-dark-web/sites-plus-cools',
    component: SitesPlusCoolComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie-3-partie3-des-exemples-de-sites-du-dark-web/site-surprise',
    component: SiteSurpriseComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie4-le-bitcoin',
    component: Partie4LeBitcoinComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie-5-devenir-dark-web-dev',
    component: Partie5DevDarkWebComponent
  },
  {
    path: 'chapitre-4-conclusion',
    component: ConclusionComponent
  },
  {
    path: 'chapitre-3-le-dark-web/partie-3-partie3-des-exemples-de-sites-du-dark-web',
    component: DesExemplesDeSitesDuDarkWebComponent
  },
  {
    path: 'chapitre-1-les-differents-types-de-web',
    component: ChapterOneComponent
  },
  {
    path: 'chapitre-2-vers-une-navigation-anonyme',
    component: ChapterTwoComponent
  },
  {
    path: 'chapitre-3-le-dark-web',
    component: ChapterThreeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
