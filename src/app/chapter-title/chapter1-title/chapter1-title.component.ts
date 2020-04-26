import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter1-title',
  templateUrl: './chapter1-title.component.html',
  styleUrls: ['./chapter1-title.component.css']
})
export class Chapter1TitleComponent implements OnInit {

  title = 'Chapitre 1';
  subTitle = 'Les différentes facettes du Web';

  constructor() { }

  ngOnInit() {
  }

}
