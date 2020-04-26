import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-intro-video',
  templateUrl: './page-intro-video.component.html',
  styleUrls: ['./page-intro-video.component.css']
})
export class PageIntroVideoComponent implements OnInit {

  next = '/chapitre-1-les-differents-types-de-web';
  previous = '/';

  constructor() { }

  ngOnInit() {
  }

}
