import {Component, Input, OnInit} from '@angular/core';
import {Source} from '../../source';

@Component({
  selector: 'app-sources-links',
  templateUrl: './sources-links.component.html',
  styleUrls: ['./sources-links.component.css']
})
export class SourcesLinksComponent implements OnInit {

  sources: Source[] = [
    {
      name: 'Wikipédia',
      url: 'https://fr.wikipedia.org/wiki/Web_surfacique'
    },
    {
      name: 'Wiktionnaire',
      url: 'https://fr.wiktionary.org/wiki/web_de_surface'
    },
    {
      name: 'Site d\'un avocat expliquant bien les différences',
      url: 'https://www.avocats-mathias.com/cyberespace/deep-web-dark-web'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
