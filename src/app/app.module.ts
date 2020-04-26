import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import {VgCoreModule} from 'videogular2/compiled/src/core/core';
import {VgControlsModule} from 'videogular2/compiled/src/controls/controls';
import {VgOverlayPlayModule} from 'videogular2/compiled/src/overlay-play/overlay-play';
import {VgBufferingModule} from 'videogular2/compiled/src/buffering/buffering';
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
    SourcesLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
