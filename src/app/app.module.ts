import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule } from 'ngx-videogular';
import { PageIntroVideoComponent } from './page-intro-video/page-intro-video.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';
import { ChapterTitleComponent } from './chapter-title/chapter-title.component';
import { NavButtonsComponent } from './nav-buttons/nav-buttons.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParagraphComponent } from './subcomponents/paragraph/paragraph.component';
import { ParagraphImgLeftComponent } from './subcomponents/paragraph-img-left/paragraph-img-left.component';
import { ParagraphImgRightComponent } from './subcomponents/paragraph-img-right/paragraph-img-right.component';
import { Partie1WebSurfaceComponent } from './chapter-one/partie1-web-surface/partie1-web-surface.component';
import { Chapter1TitleComponent } from './chapter-title/chapter1-title/chapter1-title.component';
import { TitlePageComponent } from './subcomponents/title-page/title-page.component';
import { Partie2WebProfondComponent } from './chapter-one/partie2-web-profond/partie2-web-profond.component';
import { SourcesLinksComponent } from './subcomponents/sources-links/sources-links.component';
import { Partie3LesDarknetsComponent } from './chapter-one/partie3-les-darknets/partie3-les-darknets.component';
import { DisplaylistComponent } from './subcomponents/displaylist/displaylist.component';
import { ChapterTwoComponent } from './chapter-two/chapter-two.component';
import { Partie1LesVpnComponent } from './chapter-two/partie1-les-vpn/partie1-les-vpn.component';
import { Partie2TorComponent } from './chapter-two/partie2-tor/partie2-tor.component';
import { ImgCenterComponent } from './subcomponents/img-center/img-center.component';
import { ChapterThreeComponent } from './chapter-three/chapter-three.component';
import { Partie3ConclusionComponent } from './chapter-two/partie3-conclusion/partie3-conclusion.component';
import { Partie1SeConnecterComponent } from './chapter-three/partie1-se-connecter/partie1-se-connecter.component';
import { Partie2LesHiddenWikisComponent } from './chapter-three/partie2-les-hidden-wikis/partie2-les-hidden-wikis.component';
import { DesExemplesDeSitesDuDarkWebComponent } from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/des-exemples-de-sites-du-dark-web.component';
import { ParagraphBoldCenterComponent } from './subcomponents/paragraph-bold-center/paragraph-bold-center.component';
import { SiteVenteArmesComponent } from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-vente-armes/site-vente-armes.component';
import { SiteVenteDrogueComponent } from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-vente-drogue/site-vente-drogue.component';
import { SiteVenteFausseIdentiteComponent } from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-vente-fausse-identite/site-vente-fausse-identite.component';
import { SiteVenteCarteBancairesCloneesComponent } from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-vente-carte-bancaires-clonees/site-vente-carte-bancaires-clonees.component';
import { SiteRacismeComponent } from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-racisme/site-racisme.component';
import { SitePornographiquesComponent } from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-pornographiques/site-pornographiques.component';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import { Mp3PlayerComponent } from './subcomponents/mp3-player/mp3-player.component';
import { SiteRentAHackerComponent } from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-rent-a-hacker/site-rent-a-hacker.component';
import { SitesPlusCoolComponent } from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/sites-plus-cool/sites-plus-cool.component';
import { SiteSurpriseComponent } from './chapter-three/partie3-des-exemples-de-sites-du-dark-web/site-surprise/site-surprise.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { Partie4LeBitcoinComponent } from './chapter-three/partie4-le-bitcoin/partie4-le-bitcoin.component';
import { Partie5DevDarkWebComponent } from './chapter-three/partie5-dev-dark-web/partie5-dev-dark-web.component';
import { ConclusionVideoComponent } from './conclusion-video/conclusion-video.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PageIntroVideoComponent,
    ChapterOneComponent,
    ChapterTitleComponent,
    NavButtonsComponent,
    PageNotFoundComponent,
    ParagraphComponent,
    ParagraphImgLeftComponent,
    ParagraphImgRightComponent,
    Partie1WebSurfaceComponent,
    Chapter1TitleComponent,
    TitlePageComponent,
    Partie2WebProfondComponent,
    SourcesLinksComponent,
    Partie3LesDarknetsComponent,
    DisplaylistComponent,
    ChapterTwoComponent,
    Partie1LesVpnComponent,
    Partie2TorComponent,
    ImgCenterComponent,
    ChapterThreeComponent,
    Partie3ConclusionComponent,
    Partie1SeConnecterComponent,
    Partie2LesHiddenWikisComponent,
    DesExemplesDeSitesDuDarkWebComponent,
    ParagraphBoldCenterComponent,
    SiteVenteArmesComponent,
    SiteVenteDrogueComponent,
    SiteVenteFausseIdentiteComponent,
    SiteVenteCarteBancairesCloneesComponent,
    SiteRacismeComponent,
    SitePornographiquesComponent,
    Mp3PlayerComponent,
    SiteRentAHackerComponent,
    SitesPlusCoolComponent,
    SiteSurpriseComponent,
    ConclusionComponent,
    Partie4LeBitcoinComponent,
    Partie5DevDarkWebComponent,
    ConclusionVideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgxAudioPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
