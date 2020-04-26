import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-one',
  templateUrl: './chapter-one.component.html',
  styleUrls: ['./chapter-one.component.css']
})
export class ChapterOneComponent implements OnInit {

  title = 'Chapitre 1';
  subTitle = 'Les différentes facettes du Web';

  previous = '/intro';
  next = '/chapitre-1-les-differents-types-de-web/partie-1-le-web-de-surface';



  constructor() { }

  ngOnInit() {
  }

}
