import { Component, OnInit } from '@angular/core';
import {Source} from '../../source';

@Component({
  selector: 'app-partie2-les-hidden-wikis',
  templateUrl: './partie2-les-hidden-wikis.component.html',
  styleUrls: ['./partie2-les-hidden-wikis.component.css']
})
export class Partie2LesHiddenWikisComponent implements OnInit {

  sources: Source[] = [
    {
      name: 'Moteur de recherche Ahmia',
      url: 'https://ahmia.fi/'
    },
    {
      name: 'GM SEARCH DARK',
      url: 'http://www.aleph-graymatter.com/gm-search-dark-le-moteur-de-recherche-francais-du-dark-web/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
